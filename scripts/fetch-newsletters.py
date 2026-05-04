#!/usr/bin/env python3
"""
fetch-newsletters.py — pull AgentMail newsletters, de-duplicate, summarize into Chinese.

ENV:
  AGENTMAIL_API_KEY   required
  AGENTMAIL_INBOX_ID  optional; defaults to first inbox returned by AgentMail
  CODEX_BIN           optional; defaults to codex
  CODEX_MODEL         optional; defaults to gpt-5.5

Usage:
  python3 scripts/fetch-newsletters.py --date 2026-04-26
  python3 scripts/fetch-newsletters.py --date 2026-04-26 --no-llm
"""
from __future__ import annotations

import argparse
import hashlib
import http.client
import json
import re
import sys
import time as time_module
import urllib.error
import urllib.parse
import urllib.request
from datetime import date, datetime, time, timezone, timedelta
from pathlib import Path
from typing import Any

sys.path.insert(0, str(Path(__file__).resolve().parent))
from lib.config import get  # noqa: E402
from lib.io_utils import now_iso, update_index, write_json  # noqa: E402
from lib.llm import call_codex, has_codex  # noqa: E402

REPO_ROOT = Path(__file__).resolve().parents[1]
NEWSLETTER_DIR = REPO_ROOT / "public" / "data" / "newsletters"
RAW_DIR = REPO_ROOT / "out" / "raw-newsletters"
PROMPT_PATH = REPO_ROOT / "prompts" / "build_newsletters.md"
API_BASE = "https://api.agentmail.to"

SKIP_SUBJECT_RE = re.compile(
    r"confirm|verify|verification|验证码|code|signup|sign\s*up|welcome|quick steps|get started|unsubscribe",
    re.I,
)
URL_RE = re.compile(r"https?://[^\s)\]>\"']+", re.I)
NOISE_URL_RE = re.compile(r"unsubscribe|preferences|privacy|terms|beehiiv\.com/cdn-cgi/image|tracking|click\.", re.I)


def api_get(path: str, api_key: str) -> dict[str, Any]:
    headers = {"Authorization": f"Bearer {api_key}", "Accept": "application/json"}
    last_exc: Exception | None = None
    for attempt in range(3):
        req = urllib.request.Request(f"{API_BASE}{path}", headers=headers)
        try:
            with urllib.request.urlopen(req, timeout=90) as resp:
                return json.loads(resp.read().decode("utf-8"))
        except urllib.error.HTTPError as exc:
            body = exc.read().decode("utf-8", errors="replace")
            raise RuntimeError(f"AgentMail GET {path} failed: HTTP {exc.code}: {body[:500]}") from exc
        except (http.client.IncompleteRead, TimeoutError, urllib.error.URLError) as exc:
            last_exc = exc
            if attempt == 2:
                break
            time_module.sleep(1.5 * (attempt + 1))
    raise RuntimeError(f"AgentMail GET {path} failed after retries: {last_exc}")


def pick_inbox(api_key: str, explicit: str | None) -> str:
    if explicit:
        return explicit
    data = api_get("/inboxes", api_key)
    inboxes = data.get("inboxes") or []
    if not inboxes:
        raise RuntimeError("AgentMail returned no inboxes")
    return inboxes[0].get("inbox_id") or inboxes[0]["email"]


def get_message(api_key: str, inbox_id: str, message_id: str) -> dict[str, Any]:
    inbox = urllib.parse.quote(inbox_id, safe="")
    mid = urllib.parse.quote(message_id, safe="")
    return api_get(f"/inboxes/{inbox}/messages/{mid}", api_key)


def parse_ts(s: str) -> datetime | None:
    if not s:
        return None
    try:
        return datetime.fromisoformat(s.replace("Z", "+00:00"))
    except ValueError:
        return None


def day_window(date_str: str) -> tuple[datetime, datetime]:
    d = date.fromisoformat(date_str)
    start = datetime.combine(d, time.min, timezone.utc)
    end = datetime.combine(d, time.max, timezone.utc)
    return start, end


def collection_window(date_str: str, now: datetime | None = None) -> tuple[datetime, datetime, str]:
    """Return the newsletter collection window for a run.

    The daily cron runs in the morning. Some newsletters arrive after that run,
    so today's digest should start from yesterday's successful run marker instead
    of midnight. The prior digest's ``generated_at`` is the durable marker because
    it is committed with the generated data. If it is missing, fall back to the
    requested UTC calendar day.
    """
    end = now or datetime.now(timezone.utc)
    if end.tzinfo is None:
        end = end.replace(tzinfo=timezone.utc)
    else:
        end = end.astimezone(timezone.utc)

    d = date.fromisoformat(date_str)
    prev_path = NEWSLETTER_DIR / f"{(d - timedelta(days=1)).isoformat()}.json"
    if prev_path.exists():
        try:
            prev = json.loads(prev_path.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            prev = {}
        marker = parse_ts(str(prev.get("generated_at") or ""))
        if marker and marker < end:
            return marker.astimezone(timezone.utc), end, "previous_digest_generated_at"

    start, _ = day_window(date_str)
    return start, end, "calendar_day_fallback"


def clean_text(text: str, limit: int = 5000) -> str:
    text = re.sub(r"\n{3,}", "\n\n", text or "")
    text = re.sub(r"View image: \([^)]*\)\s*Caption:\s*", "", text)
    return text.strip()[:limit]


def source_name(msg: dict[str, Any]) -> str:
    headers = msg.get("headers") or {}
    for key in ("List-Id", "x-newsletter-id", "x-list-owner"):
        val = headers.get(key)
        if val:
            return str(val).replace("https://", "").replace("http://", "").strip("/ <>")[:80]
    sender = msg.get("from") or "Unknown"
    return re.sub(r"\s*<.*?>", "", sender).strip() or sender


def canonical_key(msg: dict[str, Any]) -> str:
    text = msg.get("text") or msg.get("extracted_text") or msg.get("preview") or ""
    urls = [u.rstrip(".,;") for u in URL_RE.findall(text) if not NOISE_URL_RE.search(u)]
    if urls:
        return "url:" + urls[0].split("?")[0]
    subj = re.sub(r"\W+", " ", (msg.get("subject") or "").lower()).strip()
    src = source_name(msg).lower()
    return f"subject:{src}:{subj}"


def first_content_url(msg: dict[str, Any]) -> str:
    text = msg.get("text") or msg.get("extracted_text") or msg.get("preview") or ""
    for url in URL_RE.findall(text):
        url = url.rstrip(".,;")
        if not NOISE_URL_RE.search(url):
            return url
    return ""


def fallback_digest(date_str: str, inbox_id: str, start: datetime, end: datetime, messages: list[dict[str, Any]], skipped: list[dict[str, str]], window_source: str = "") -> dict[str, Any]:
    items = []
    for idx, msg in enumerate(messages):
        title = msg.get("subject") or "Untitled newsletter item"
        body = clean_text(msg.get("extracted_text") or msg.get("text") or msg.get("preview") or "", 1200)
        digest = hashlib.sha1((msg.get("message_id", "") + title).encode()).hexdigest()[:10]
        item = {
            "id": f"newsletter-{digest}",
            "title_zh": title,
            "title_original": title,
            "source": source_name(msg),
            "from": msg.get("from", ""),
            "subject": msg.get("subject", ""),
            "url": first_content_url(msg),
            "message_id": msg.get("message_id", ""),
            "published_at": msg.get("timestamp", ""),
            "importance": "high" if idx == 0 else "medium",
            "summary_zh": body[:500] or (msg.get("preview") or "暂无正文摘要。"),
            "why_important": "自动归档模式：尚未调用 LLM 做重要性判断。",
            "impact": "建议稍后开启 LLM 重新生成中文编辑版。",
            "key_points": [],
            "reading_notes": [],
            "tags": ["newsletter"],
        }
        if idx == 0:
            item["deep_read_zh"] = body or "自动归档模式：尚未调用 LLM 做精读摘要。"
        items.append(item)
    return {
        "date": date_str,
        "generated_at": now_iso(),
        "inbox_id": inbox_id,
        "window": {"start": start.isoformat(), "end": end.isoformat(), "source": window_source},
        "count": len(items),
        "highlights": [f"今日精读：{items[0]['title_zh']}"] + [item["title_zh"] for item in items[1:4]] if items else [],
        "items": items,
        "skipped": skipped,
        "notes": "自动归档模式：未调用 LLM；第一条作为今日精读，其余为信息流占位。" if items else "当天没有可汇总的正式 newsletter。",
    }


def call_llm(date_str: str, inbox_id: str, messages: list[dict[str, Any]]) -> dict[str, Any] | None:
    if not has_codex():
        print("  ! codex binary missing; falling back", file=sys.stderr)
        return None
    prompt = PROMPT_PATH.read_text(encoding="utf-8")
    slim = []
    for msg in messages:
        slim.append(
            {
                "message_id": msg.get("message_id"),
                "timestamp": msg.get("timestamp"),
                "from": msg.get("from"),
                "source": source_name(msg),
                "subject": msg.get("subject"),
                "preview": msg.get("preview"),
                "url": first_content_url(msg),
                "text": clean_text(msg.get("extracted_text") or msg.get("text") or ""),
            }
        )
    user_msg = (
        f"{prompt}\n\n## 日期\n{date_str}\n\n## Inbox\n{inbox_id}\n\n"
        f"## 邮件数据\n```json\n{json.dumps(slim, ensure_ascii=False, indent=2)}\n```\n"
    )
    try:
        out = call_codex(user_msg, timeout=600).strip()
    except Exception as exc:  # noqa: BLE001
        print(f"  ! codex call failed: {exc}", file=sys.stderr)
        return None
    if out.startswith("```"):
        out = out.split("\n", 1)[1].rsplit("```", 1)[0]
    try:
        return json.loads(out)
    except json.JSONDecodeError:
        i, j = out.find("{"), out.rfind("}")
        if i >= 0 and j > i:
            try:
                return json.loads(out[i : j + 1])
            except json.JSONDecodeError:
                pass
    (RAW_DIR / date_str).mkdir(parents=True, exist_ok=True)
    (RAW_DIR / date_str / "codex_raw.txt").write_text(out, encoding="utf-8")
    print("  ! Codex returned non-JSON; falling back", file=sys.stderr)
    return None


def normalize_digest(base: dict[str, Any], date_str: str, inbox_id: str, start: datetime, end: datetime, skipped: list[dict[str, str]], window_source: str = "") -> dict[str, Any]:
    items = base.get("items") or []
    for i, item in enumerate(items):
        item.setdefault("id", f"newsletter-{i+1:02d}")
        item.setdefault("importance", "high" if i == 0 else "medium")
        item.setdefault("tags", [])
        item.setdefault("key_points", [])
        item.setdefault("reading_notes", [])
        item.setdefault("related_sources", [])
        if i == 0:
            item.setdefault("deep_read_zh", item.get("summary_zh", ""))
        else:
            item.setdefault("deep_read_zh", "")
    return {
        "date": date_str,
        "generated_at": now_iso(),
        "inbox_id": inbox_id,
        "window": {"start": start.isoformat(), "end": end.isoformat(), "source": window_source},
        "count": len(items),
        "highlights": (base.get("highlights") or [f"今日精读：{items[0].get('title_zh', '')}" if items else ""])[:5] if items else [],
        "items": items,
        "skipped": skipped,
        "notes": base.get("notes", ""),
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--date", default=date.today().isoformat())
    parser.add_argument("--no-llm", action="store_true")
    parser.add_argument("--limit", type=int, default=200)
    args = parser.parse_args()

    api_key = get("AGENTMAIL_API_KEY")
    if not api_key:
        raise SystemExit("AGENTMAIL_API_KEY is required (put it in .env.local or the environment)")
    inbox_id = pick_inbox(api_key, get("AGENTMAIL_INBOX_ID"))
    start, end, window_source = collection_window(args.date)
    print(f"==> fetch-newsletters {args.date} inbox={inbox_id} window={start.isoformat()}..{end.isoformat()} source={window_source}")

    listing = api_get(f"/inboxes/{urllib.parse.quote(inbox_id, safe='')}/messages", api_key)
    raw_messages = listing.get("messages") or []
    selected: list[dict[str, Any]] = []
    skipped: list[dict[str, str]] = []
    seen: set[str] = set()

    for brief in raw_messages[: args.limit]:
        ts = parse_ts(brief.get("timestamp", ""))
        if not ts or ts <= start or ts > end:
            continue
        subject = brief.get("subject") or ""
        if SKIP_SUBJECT_RE.search(subject):
            skipped.append({"message_id": brief.get("message_id", ""), "subject": subject, "from": brief.get("from", ""), "reason": "system"})
            continue
        full = get_message(api_key, inbox_id, brief["message_id"])
        key = canonical_key(full)
        if key in seen:
            skipped.append({"message_id": brief.get("message_id", ""), "subject": subject, "from": brief.get("from", ""), "reason": "duplicate"})
            continue
        seen.add(key)
        selected.append(full)

    raw_dir = RAW_DIR / args.date
    raw_dir.mkdir(parents=True, exist_ok=True)
    write_json(raw_dir / "messages.json", selected)
    write_json(raw_dir / "skipped.json", skipped)

    if args.no_llm:
        digest = fallback_digest(args.date, inbox_id, start, end, selected, skipped, window_source)
    else:
        llm = call_llm(args.date, inbox_id, selected)
        digest = normalize_digest(llm, args.date, inbox_id, start, end, skipped, window_source) if llm else fallback_digest(args.date, inbox_id, start, end, selected, skipped, window_source)

    write_json(NEWSLETTER_DIR / f"{args.date}.json", digest)
    update_index(NEWSLETTER_DIR)
    print(f"==> wrote {NEWSLETTER_DIR / (args.date + '.json')} ({digest['count']} items, skipped {len(skipped)})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
