#!/usr/bin/env python3
"""
fetch-builders.py — pull follow-builders central feeds and emit
public/data/builders/{date}.json + index.json.

Usage:
    python scripts/fetch-builders.py [--date YYYY-MM-DD] [--no-llm] [--consolidate]

Daily-newspaper semantics: the upstream feeds are 24-hour rolling windows
(refreshed ~08:00 UTC). Each script run takes everything the feed
currently has and files it under `--date` (the run date), with global
dedupe across all existing per-date files so we never write the same
upstream item twice.

  - Brand-new items     → appended to {--date}.json
  - Items already filed → left alone in their original date file
  - LLM translation     → only for newly-added items (cached on disk)

Pass `--consolidate` to merge ALL existing per-date files into {--date}.json
(one-shot rebase); useful after changing the bucketing semantics.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import sys
from datetime import date, datetime, timezone
from pathlib import Path

import urllib.request

sys.path.insert(0, str(Path(__file__).resolve().parent))
from lib.io_utils import now_iso, read_json, update_index, write_json  # noqa: E402
from lib.llm import call_codex, has_codex  # noqa: E402

REPO_ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = REPO_ROOT / "public" / "data" / "builders"

FEED_BASE = "https://raw.githubusercontent.com/zarazhangrui/follow-builders/main"
FEEDS = {
    "x": f"{FEED_BASE}/feed-x.json",
    "podcasts": f"{FEED_BASE}/feed-podcasts.json",
    "blogs": f"{FEED_BASE}/feed-blogs.json",
}


def http_get_json(url: str) -> dict:
    req = urllib.request.Request(url, headers={"User-Agent": "ai-builders-digest/1.0"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read().decode("utf-8"))


def short_id(*parts: str) -> str:
    h = hashlib.sha1("::".join(parts).encode("utf-8")).hexdigest()
    return h[:10]


def codex_translate(prompt: str) -> str:
    """Call Codex CLI for a one-shot Chinese summary."""
    try:
        return call_codex(prompt, timeout=60).strip()
    except Exception as exc:  # noqa: BLE001
        print(f"  ! codex call failed: {str(exc)[:80]}", file=sys.stderr)
        return ""


def summarise_zh(kind: str, payload: str, use_llm: bool) -> str:
    if not use_llm or not payload.strip():
        return ""
    prompt = (
        f"你是中文科技媒体编辑。请把下面这条 AI builder 的{kind}用 1-2 句中文总结，"
        f"保留原话锋利度，去掉客套话，不要加任何前缀如『摘要：』。\n\n---\n{payload}\n---"
    )
    return codex_translate(prompt)


def translate_concurrent(items: list[dict], concurrency: int = 5) -> None:
    """In-place mutate `items` by filling summary_zh via parallel Codex calls."""
    from concurrent.futures import ThreadPoolExecutor, as_completed

    def one(it: dict) -> tuple[dict, str]:
        kind = {
            "x": "X 推文",
            "podcast": f"播客《{it.get('title','')}》节选",
            "blog": f"博客《{it.get('title','')}》",
        }.get(it["source"], it["source"])
        return it, summarise_zh(kind, it.get("summary_en") or "", True)

    done = 0
    with ThreadPoolExecutor(max_workers=concurrency) as pool:
        futures = [pool.submit(one, it) for it in items]
        for fut in as_completed(futures):
            it, zh = fut.result()
            done += 1
            if zh:
                it["summary_zh"] = zh
            print(f"    [{done}/{len(items)}] {it['author'][:25]:25} {'✓' if zh else '×'}", flush=True)


_ISO_DATE_RE = __import__("re").compile(r"^\d{4}-\d{2}-\d{2}$")


def _normalise_date(raw: str | None, default: str) -> str:
    """Parse upstream date strings (ISO, RFC822, 'Apr 23, 2026', ...) → YYYY-MM-DD.

    Falls back to `default` if unparseable.
    """
    if not raw:
        return default
    s = str(raw).strip()
    head = s[:10]
    if _ISO_DATE_RE.match(head):
        return head
    # Try a few common formats
    from datetime import datetime as _dt
    for fmt in ("%a, %d %b %Y %H:%M:%S %Z", "%a, %d %b %Y %H:%M:%S %z", "%b %d, %Y", "%Y/%m/%d", "%d %b %Y"):
        try:
            return _dt.strptime(s, fmt).strftime("%Y-%m-%d")
        except (ValueError, TypeError):
            continue
    return default


def collect_x(feed: dict, fallback_date: str) -> list[dict]:
    items = []
    for builder in feed.get("x", []):
        for tw in builder.get("tweets", []):
            text = (tw.get("text") or "").strip()
            if not text or len(text) < 20:
                continue
            created = _normalise_date(tw.get("createdAt"), fallback_date)
            items.append(
                {
                    "id": short_id("x", builder.get("handle", ""), tw.get("id", "")),
                    "date": created,
                    "source": "x",
                    "author": builder.get("name") or builder.get("handle", ""),
                    "bio": (builder.get("bio") or "").strip().replace("\n", " ")[:160],
                    "title": "",
                    "summary_en": text,
                    "summary_zh": "",
                    "url": tw.get("url") or "",
                    "posted_at": tw.get("createdAt"),
                    "tags": [f"@{builder.get('handle')}"] if builder.get("handle") else [],
                }
            )
    return items


def collect_podcasts(feed: dict, fallback_date: str) -> list[dict]:
    items = []
    for ep in feed.get("podcasts", []):
        published = _normalise_date(ep.get("publishedAt"), fallback_date)
        transcript = (ep.get("transcript") or "").strip()
        snippet = transcript[:1800] if transcript else ""
        title = ep.get("title") or ""
        items.append(
            {
                "id": short_id("podcast", ep.get("guid") or ep.get("url", ""), title),
                "date": published,
                "source": "podcast",
                "author": ep.get("name") or "Podcast",
                "bio": "",
                "title": title,
                "summary_en": snippet,
                "summary_zh": "",
                "url": ep.get("url") or "",
                "posted_at": ep.get("publishedAt"),
                "tags": ["podcast"],
            }
        )
    return items


def collect_blogs(feed: dict, fallback_date: str) -> list[dict]:
    items = []
    for post in feed.get("blogs", []):
        published = _normalise_date(post.get("publishedAt"), fallback_date)
        body = ((post.get("description") or "") + "\n\n" + (post.get("content") or "")).strip()
        snippet = body[:2400]
        title = post.get("title") or ""
        items.append(
            {
                "id": short_id("blog", post.get("url", ""), title),
                "date": published,
                "source": "blog",
                "author": post.get("author") or post.get("name") or "",
                "bio": "",
                "title": title,
                "summary_en": snippet,
                "summary_zh": "",
                "url": post.get("url") or "",
                "posted_at": post.get("publishedAt"),
                "tags": ["blog"],
            }
        )
    return items


def load_all_existing() -> dict[str, list[dict]]:
    """Load every existing builders/{date}.json into a {date: items} map."""
    out: dict[str, list[dict]] = {}
    for f in OUT_DIR.glob("*.json"):
        if f.stem == "index":
            continue
        try:
            out[f.stem] = read_json(f).get("items", [])
        except Exception:
            pass
    return out


def merge_into_target(target_date: str, fresh: list[dict]) -> tuple[list[dict], list[dict], int]:
    """Add fresh items to the target_date bucket with global dedupe.

    Returns (final_target_items, newly_added, skipped_already_filed_elsewhere).
    """
    buckets = load_all_existing()
    seen: dict[str, str] = {}  # id -> date already filed
    for d, items in buckets.items():
        for it in items:
            seen.setdefault(it["id"], d)

    today_items = list(buckets.get(target_date, []))
    today_by_id = {it["id"]: it for it in today_items}

    new_added: list[dict] = []
    skipped_elsewhere = 0
    for it in fresh:
        existing_date = seen.get(it["id"])
        if existing_date and existing_date != target_date:
            skipped_elsewhere += 1
            continue
        if it["id"] in today_by_id:
            old = today_by_id[it["id"]]
            if old.get("summary_zh"):
                it["summary_zh"] = old["summary_zh"]
            today_by_id[it["id"]] = it
        else:
            new_added.append(it)
            today_by_id[it["id"]] = it

    merged = sorted(today_by_id.values(), key=lambda x: x.get("posted_at") or "", reverse=True)
    return merged, new_added, skipped_elsewhere


def consolidate_to(target_date: str) -> int:
    """One-shot: merge ALL existing per-date files into {target_date}.json,
    delete the others. Returns count after merge."""
    buckets = load_all_existing()
    seen_ids: set[str] = set()
    merged: list[dict] = []
    for d in sorted(buckets):
        for it in buckets[d]:
            if it["id"] in seen_ids:
                continue
            seen_ids.add(it["id"])
            it["date"] = target_date  # rebase the metadata field too
            merged.append(it)
    merged.sort(key=lambda x: x.get("posted_at") or "", reverse=True)

    # Delete existing per-date files (keep index.json)
    for f in OUT_DIR.glob("*.json"):
        if f.stem == "index":
            continue
        f.unlink()

    write_json(
        OUT_DIR / f"{target_date}.json",
        {
            "date": target_date,
            "generated_at": now_iso(),
            "count": len(merged),
            "items": merged,
        },
    )
    return len(merged)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--date", default=date.today().isoformat(), help="Run-date bucket (all new items go here)")
    parser.add_argument("--no-llm", action="store_true", help="Skip Codex CLI translation")
    parser.add_argument("--max-llm", type=int, default=50, help="Cap LLM calls per run for cost control")
    parser.add_argument("--concurrency", type=int, default=5, help="Parallel Codex CLI calls")
    parser.add_argument("--consolidate", action="store_true", help="One-shot: merge all existing per-date files into --date and delete the others")
    args = parser.parse_args()

    if args.consolidate:
        print(f"[builders] CONSOLIDATE → {args.date}")
        n = consolidate_to(args.date)
        update_index(OUT_DIR)
        print(f"  done. {n} unique items merged into {args.date}.json")
        return 0

    use_llm = (not args.no_llm) and has_codex()
    if not use_llm and not args.no_llm:
        print("warn: codex binary not found, running with --no-llm", file=sys.stderr)

    print(f"[builders] target_date={args.date} llm={use_llm}")
    feeds = {}
    for name, url in FEEDS.items():
        try:
            print(f"  fetching {name}...")
            feeds[name] = http_get_json(url)
        except Exception as exc:  # noqa: BLE001
            print(f"  ! {name} feed failed: {exc}", file=sys.stderr)
            feeds[name] = {}

    fresh: list[dict] = []
    fresh += collect_x(feeds["x"], args.date)
    fresh += collect_podcasts(feeds["podcasts"], args.date)
    fresh += collect_blogs(feeds["blogs"], args.date)
    # Stamp every fresh item with the run-date (override per-item dates)
    for it in fresh:
        it["date"] = args.date

    print(f"  upstream feed yields {len(fresh)} candidate items")

    merged, newly_added, skipped = merge_into_target(args.date, fresh)
    print(f"  → {len(newly_added)} new, {skipped} already filed under earlier date(s), bucket total {len(merged)}")

    if use_llm:
        # Translate any item in the bucket missing summary_zh — covers fresh
        # additions AND backfill of older items that were captured before LLM
        # was wired up.
        need_zh = [it for it in merged if not it.get("summary_zh") and (it.get("summary_en") or "").strip()]
        if need_zh:
            take = need_zh[: args.max_llm]
            print(f"  translating {len(take)}/{len(need_zh)} items missing zh summary (concurrent={args.concurrency})")
            translate_concurrent(take, args.concurrency)
        else:
            print("  all items already have zh summary, skipping LLM")

    write_json(
        OUT_DIR / f"{args.date}.json",
        {
            "date": args.date,
            "generated_at": now_iso(),
            "count": len(merged),
            "items": merged,
        },
    )
    update_index(OUT_DIR)
    print(f"  wrote {args.date}.json ({len(merged)} items)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
