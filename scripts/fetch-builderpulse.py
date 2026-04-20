#!/usr/bin/env python3
"""Fetch BuilderPulse daily markdown (zh + en) into public/daily-builder-report/.

Usage:
    python3 scripts/fetch-builderpulse.py              # today
    python3 scripts/fetch-builderpulse.py 2026-04-20   # specific date

Outputs per date:
    public/daily-builder-report/{date}.zh.md
    public/daily-builder-report/{date}.en.md
    public/daily-builder-report/{date}.meta.json
    public/daily-builder-report/index.json   (updated, dates sorted desc)
"""

from __future__ import annotations

import json
import re
import sys
import urllib.error
import urllib.request
from datetime import date as _date
from pathlib import Path

REPO_RAW = "https://raw.githubusercontent.com/BuilderPulse/BuilderPulse/main"
PROJECT_ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = PROJECT_ROOT / "public" / "daily-builder-report"

TOP3_HEADINGS = {"zh": "今日 Top 3 信号", "en": "Top 3 signals"}
INTRO_HEADINGS = {"zh": "📝 刘小排说", "en": "📝 Liu Xiaopai says"}


def fetch_md(lang: str, date_str: str) -> str | None:
    year = date_str.split("-")[0]
    url = f"{REPO_RAW}/{lang}/{year}/{date_str}.md"
    try:
        with urllib.request.urlopen(url, timeout=30) as resp:
            return resp.read().decode("utf-8")
    except urllib.error.HTTPError as e:
        if e.code == 404:
            print(f"  [{lang}] not found: {url}")
            return None
        raise
    except urllib.error.URLError as e:
        print(f"  [{lang}] network error: {e}")
        return None


def extract_section(md: str, heading: str) -> str:
    """Return text content under the given H2 heading, up to next H2."""
    pattern = rf"^##\s+{re.escape(heading)}\s*$"
    lines = md.splitlines()
    start = None
    for i, line in enumerate(lines):
        if re.match(pattern, line):
            start = i + 1
            break
    if start is None:
        return ""
    end = len(lines)
    for j in range(start, len(lines)):
        if re.match(r"^##\s+", lines[j]):
            end = j
            break
    return "\n".join(lines[start:end]).strip()


def extract_top3(md: str, lang: str) -> list[str]:
    section = extract_section(md, TOP3_HEADINGS[lang])
    if not section:
        return []
    items: list[str] = []
    current: list[str] = []
    for line in section.splitlines():
        m = re.match(r"^\s*(?:\d+\.|[-*])\s+(.*)$", line)
        if m:
            if current:
                items.append(" ".join(current).strip())
                current = []
            current.append(m.group(1).strip())
        elif current and line.strip():
            current.append(line.strip())
        elif current and not line.strip():
            items.append(" ".join(current).strip())
            current = []
            if len(items) >= 3:
                break
    if current and len(items) < 3:
        items.append(" ".join(current).strip())
    return items[:3]


def extract_intro(md: str, lang: str) -> str:
    section = extract_section(md, INTRO_HEADINGS[lang])
    if not section:
        return ""
    paragraphs: list[str] = []
    buf: list[str] = []
    for line in section.splitlines():
        if line.strip():
            buf.append(line.strip())
        elif buf:
            paragraphs.append(" ".join(buf))
            buf = []
            break
    if buf and not paragraphs:
        paragraphs.append(" ".join(buf))
    return paragraphs[0] if paragraphs else ""


def update_index(date_str: str) -> None:
    index_path = OUT_DIR / "index.json"
    dates: list[str] = []
    if index_path.exists():
        try:
            dates = json.loads(index_path.read_text()).get("dates", [])
        except json.JSONDecodeError:
            dates = []
    if date_str not in dates:
        dates.append(date_str)
    dates = sorted(set(dates), reverse=True)
    index_path.write_text(json.dumps({"dates": dates}, ensure_ascii=False, indent=2))


def main() -> int:
    date_str = sys.argv[1] if len(sys.argv) > 1 else _date.today().isoformat()
    if not re.match(r"^\d{4}-\d{2}-\d{2}$", date_str):
        print(f"Invalid date: {date_str} (expected YYYY-MM-DD)")
        return 2

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    print(f"Fetching BuilderPulse for {date_str}...")

    results: dict[str, str | None] = {}
    for lang in ("zh", "en"):
        md = fetch_md(lang, date_str)
        results[lang] = md
        target = OUT_DIR / f"{date_str}.{lang}.md"
        target.write_text(md or "", encoding="utf-8")
        print(f"  [{lang}] wrote {target.relative_to(PROJECT_ROOT)} ({len(md or '')} bytes)")

    meta = {
        "date": date_str,
        "top3_zh": extract_top3(results["zh"] or "", "zh"),
        "top3_en": extract_top3(results["en"] or "", "en"),
        "intro_zh": extract_intro(results["zh"] or "", "zh"),
        "intro_en": extract_intro(results["en"] or "", "en"),
    }
    meta_path = OUT_DIR / f"{date_str}.meta.json"
    meta_path.write_text(json.dumps(meta, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"  meta  wrote {meta_path.relative_to(PROJECT_ROOT)}")

    if not results["zh"] and not results["en"]:
        print(f"WARN: no markdown fetched for {date_str}; meta/index still updated.")
    update_index(date_str)
    print(f"  index updated → {(OUT_DIR / 'index.json').relative_to(PROJECT_ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
