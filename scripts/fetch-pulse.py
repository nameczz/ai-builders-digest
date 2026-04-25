#!/usr/bin/env python3
"""
fetch-pulse.py — assemble a BuilderPulse-style daily report.

1. Pull HN / GitHub / ProductHunt / HuggingFace / GoogleTrends / Reddit-from-BP.
2. Persist raw payloads to out/raw/{date}/{source}.json (gitignored).
3. Run Claude CLI with prompts/build_pulse.md to refine into structured JSON.
4. Inject reddit_highlights from BuilderPulse repo extraction.
5. Write public/data/pulse/{date}.json + index.json.
"""
from __future__ import annotations

import argparse
import json
import shutil
import subprocess
import sys
from datetime import date
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from lib import (  # noqa: E402
    github_trending,
    google_trends,
    hn,
    huggingface,
    product_hunt,
    reddit_from_builderpulse as rbp,
)
from lib.config import CLAUDE_BIN, CLAUDE_MODEL  # noqa: E402
from lib.io_utils import now_iso, read_json, update_index, write_json  # noqa: E402

REPO_ROOT = Path(__file__).resolve().parents[1]
RAW_DIR = REPO_ROOT / "out" / "raw"
PULSE_DIR = REPO_ROOT / "public" / "data" / "pulse"
PROMPT_PATH = REPO_ROOT / "prompts" / "build_pulse.md"


def has_claude() -> bool:
    return bool(shutil.which(CLAUDE_BIN))


def collect_raw(date_str: str, skip_trends: bool = False) -> dict:
    raw_day = RAW_DIR / date_str
    raw_day.mkdir(parents=True, exist_ok=True)

    # Phase A: fast sources (no rate limits)
    fast_sources = {
        "hn": hn.collect,
        "github": github_trending.collect,
        "product_hunt": product_hunt.collect,
        "huggingface": huggingface.collect,
        "reddit_bp": rbp.collect,
    }
    bundle: dict = {}
    for name, fn in fast_sources.items():
        try:
            print(f"  collecting {name}...")
            data = fn(date_str)
            bundle[name] = data
            write_json(raw_day / f"{name}.json", data)
        except Exception as exc:  # noqa: BLE001
            print(f"  ! {name} failed: {exc}", file=sys.stderr)
            bundle[name] = {"error": str(exc)}

    # Phase B: Google Trends (slow, ~3min) — uses Phase A as seed for queries
    if skip_trends:
        bundle["google_trends"] = {"date": date_str, "source": "google_trends", "available": False, "skipped": True, "tracked": []}
    else:
        try:
            print("  collecting google_trends (slow, throttled)...")
            data = google_trends.collect(date_str, raw_bundle=bundle, max_queries=12)
            bundle["google_trends"] = data
            write_json(raw_day / "google_trends.json", data)
        except Exception as exc:  # noqa: BLE001
            print(f"  ! google_trends failed: {exc}", file=sys.stderr)
            bundle["google_trends"] = {"error": str(exc)}
    return bundle


def trim_for_llm(bundle: dict) -> dict:
    """Reduce raw payloads to keep prompt under reasonable token budget."""
    hn_data = bundle.get("hn") or {}
    gh = bundle.get("github") or {}
    ph = bundle.get("product_hunt") or {}
    hf = bundle.get("huggingface") or {}
    gt = bundle.get("google_trends") or {}
    # Trends: keep top movers + flatten rising-related-queries for breakout discovery
    tracked = gt.get("tracked", []) if gt.get("available") else []
    return {
        "hn_top": hn_data.get("top", [])[:20],
        "hn_show": hn_data.get("show_hn", [])[:10],
        "hn_ask": hn_data.get("ask_hn", [])[:8],
        "github_weekly": gh.get("weekly", [])[:15],
        "github_daily": gh.get("daily", [])[:10],
        "product_hunt": ph.get("products", [])[:25],
        "huggingface_models": hf.get("models", [])[:15],
        "huggingface_spaces": hf.get("spaces", [])[:10],
        "google_trends_tracked": [
            {
                "query": t["query"],
                "change_pct": t.get("change_pct"),
                "max_score": t.get("max_score"),
                "url": t.get("url"),
                "rising": [r["query"] for r in (t.get("rising") or [])][:5],
            }
            for t in tracked
            if t.get("available")
        ],
        "google_trends_breakouts": (gt.get("rising_aggregate") or [])[:15],
    }


def call_claude(date_str: str, slim: dict) -> dict | None:
    if not has_claude():
        print("  ! claude binary missing; falling back to raw-archive mode")
        return None
    prompt_text = PROMPT_PATH.read_text(encoding="utf-8")
    user_msg = (
        f"{prompt_text}\n\n## 今日原始数据 ({date_str})\n\n"
        f"```json\n{json.dumps(slim, ensure_ascii=False, indent=2)}\n```\n\n"
        "请直接输出符合 schema 的 JSON。"
    )
    try:
        proc = subprocess.run(
            [CLAUDE_BIN, "-p", user_msg, "--model", CLAUDE_MODEL],
            capture_output=True,
            text=True,
            timeout=600,
        )
    except Exception as exc:  # noqa: BLE001
        print(f"  ! claude call failed: {exc}", file=sys.stderr)
        return None
    out = proc.stdout.strip()
    # Some shells wrap with code fences; strip if present.
    if out.startswith("```"):
        out = out.split("\n", 1)[1].rsplit("```", 1)[0]

    def _try(s: str):
        try:
            return json.loads(s)
        except json.JSONDecodeError:
            return None

    parsed = _try(out)
    if parsed is None:
        i, j = out.find("{"), out.rfind("}")
        if i >= 0 and j > i:
            parsed = _try(out[i : j + 1])
    if parsed is None:
        # Last-ditch repair: replace 「..」 inner straight-quote-pair patterns
        repaired = _repair_unescaped_quotes(out[out.find("{") : out.rfind("}") + 1])
        parsed = _try(repaired)
    if parsed is None:
        print("  ! Claude returned non-JSON, dumping raw", file=sys.stderr)
        (RAW_DIR / date_str / "claude_raw.txt").write_text(out, encoding="utf-8")
    return parsed


_UNESCAPED_INNER_QUOTE_RE = None


def _repair_unescaped_quotes(s: str) -> str:
    """Best-effort: inside a "string": "value" pair, replace inner unescaped " with 「/」.

    Heuristic: scan char by char respecting JSON string state.
    """
    out = []
    in_string = False
    escape = False
    string_just_opened = False
    for i, ch in enumerate(s):
        if escape:
            out.append(ch)
            escape = False
            continue
        if ch == "\\":
            out.append(ch)
            escape = True
            continue
        if ch == '"':
            if not in_string:
                in_string = True
                string_just_opened = True
                out.append(ch)
                continue
            # We're inside a string. Decide if this " ends it.
            # Look ahead past whitespace for , : } ] -> closer
            j = i + 1
            while j < len(s) and s[j] in " \t\n\r":
                j += 1
            next_ch = s[j] if j < len(s) else ""
            if next_ch in ",:}]" or next_ch == "" or string_just_opened and next_ch == '"':
                in_string = False
                string_just_opened = False
                out.append(ch)
            else:
                # Inner unescaped quote: replace with 「 or 」 alternating
                # Use 「 if the previous emitted quote-replacement was 」, else 」
                # Simpler: just escape it.
                out.append("\\\"")
            continue
        if in_string:
            string_just_opened = False
        out.append(ch)
    return "".join(out)


def fallback_pulse(date_str: str, slim: dict) -> dict:
    """Schema-valid no-LLM degradation: archive raw items into one block per source."""
    blocks_disc = []
    if slim["hn_show"] or slim["product_hunt"]:
        items = [
            {"title": s["title"], "url": s["url"], "source": "HN", "score": s["points"]}
            for s in slim["hn_show"]
        ] + [
            {"title": p["name"], "url": p["url"], "source": "ProductHunt"}
            for p in slim["product_hunt"][:10]
        ]
        blocks_disc.append(
            {
                "id": "indie-products",
                "heading": "今天有哪些独立开发者的新产品？",
                "summary_md": "（自动归档模式）今日 Show HN 与 Product Hunt 上线的独立开发者产品列表。",
                "items": items,
                "takeaway": "",
            }
        )
    if slim["github_weekly"]:
        items = [
            {
                "title": r["repo"],
                "url": f"https://github.com/{r['repo']}",
                "source": "GitHub",
                "score": r.get("weekly_stars") or 0,
            }
            for r in slim["github_weekly"][:10]
        ]
        blocks_disc.append(
            {
                "id": "github-traction",
                "heading": "GitHub 上哪些高增长开源项目还没有商业化？",
                "summary_md": "（自动归档模式）本周 GitHub Trending 高速增长的仓库。",
                "items": items,
                "takeaway": "",
            }
        )
    blocks_tech = []
    if slim["huggingface_models"]:
        items = [
            {"title": m["id"], "url": m["url"], "source": "HuggingFace", "score": m.get("trending_score") or 0}
            for m in slim["huggingface_models"][:10]
        ]
        blocks_tech.append(
            {
                "id": "hf-models",
                "heading": "HuggingFace 上最热的模型能做什么消费级产品？",
                "summary_md": "（自动归档模式）HuggingFace trending 模型列表。",
                "items": items,
                "takeaway": "",
            }
        )
    return {
        "date": date_str,
        "top3": [],
        "intro": "（无 LLM 编辑模式：以下为原始数据归档，建议安装 claude CLI 重新生成。）",
        "sections": [
            {"id": "discovery", "title": "发现机会", "blocks": blocks_disc},
            {"id": "tech-stack", "title": "技术选型", "blocks": blocks_tech},
            {"id": "competition", "title": "竞争情报", "blocks": []},
            {"id": "trends", "title": "趋势判断", "blocks": []},
            {"id": "actions", "title": "行动触发", "blocks": []},
        ],
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--date", default=date.today().isoformat())
    parser.add_argument("--no-llm", action="store_true", help="Skip Claude CLI, write raw-archive pulse")
    parser.add_argument("--reuse-raw", action="store_true", help="Skip network fetch, reuse out/raw/{date}/")
    parser.add_argument("--skip-trends", action="store_true", help="Skip Google Trends (saves ~3 min)")
    args = parser.parse_args()

    print(f"[pulse] date={args.date}")

    if args.reuse_raw:
        raw_day = RAW_DIR / args.date
        bundle = {p.stem: read_json(p) for p in raw_day.glob("*.json") if p.stem != "claude_raw"}
        print(f"  reused raw with sources: {list(bundle)}")
    else:
        bundle = collect_raw(args.date, skip_trends=args.skip_trends)

    slim = trim_for_llm(bundle)
    refined = None if args.no_llm else call_claude(args.date, slim)
    if refined is None:
        refined = fallback_pulse(args.date, slim)

    refined["date"] = args.date
    refined["generated_at"] = now_iso()
    # Inject reddit highlights from BuilderPulse extraction
    rbp_data = bundle.get("reddit_bp") or {}
    refined["reddit_highlights"] = rbp_data.get("highlights", []) if rbp_data.get("available") else []

    out_path = PULSE_DIR / f"{args.date}.json"
    write_json(out_path, refined)
    update_index(PULSE_DIR)
    print(f"  wrote {out_path} (sections={len(refined.get('sections', []))} reddit={len(refined.get('reddit_highlights', []))})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
