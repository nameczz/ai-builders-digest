#!/usr/bin/env python3
"""
generate-suggestions.py — call Claude CLI on builders + pulse to produce
public/data/suggestions/{date}.json (5 picks).
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
from lib.config import CLAUDE_BIN, CLAUDE_MODEL  # noqa: E402
from lib.io_utils import now_iso, read_json, update_index, write_json  # noqa: E402

REPO_ROOT = Path(__file__).resolve().parents[1]
BUILDERS_DIR = REPO_ROOT / "public" / "data" / "builders"
PULSE_DIR = REPO_ROOT / "public" / "data" / "pulse"
OUT_DIR = REPO_ROOT / "public" / "data" / "suggestions"
PROMPT_PATH = REPO_ROOT / "prompts" / "generate_suggestions.md"


def slim_builders(b: dict) -> dict:
    items = []
    for it in b.get("items", []):
        items.append(
            {
                "source": it["source"],
                "author": it["author"],
                "title": it.get("title") or "",
                "summary": it.get("summary_zh") or it.get("summary_en", "")[:400],
                "url": it["url"],
            }
        )
    return {"date": b.get("date"), "items": items[:30]}


def slim_pulse(p: dict) -> dict:
    sections = []
    for sec in p.get("sections", []):
        blocks = []
        for blk in sec.get("blocks", []):
            blocks.append(
                {
                    "id": blk["id"],
                    "heading": blk["heading"],
                    "summary": (blk.get("summary_md") or "")[:600],
                    "items": blk.get("items", [])[:5],
                    "takeaway": blk.get("takeaway") or "",
                }
            )
        sections.append({"id": sec["id"], "title": sec["title"], "blocks": blocks})
    return {
        "date": p.get("date"),
        "top3": p.get("top3", []),
        "intro": p.get("intro", ""),
        "sections": sections,
        "reddit_highlights": [
            {"heading": h["heading"], "summary": h["body_md"][:400]}
            for h in p.get("reddit_highlights", [])
        ],
    }


def call_claude(date_str: str, builders: dict, pulse: dict) -> dict | None:
    if not shutil.which(CLAUDE_BIN):
        print("  ! claude binary missing; skipping suggestions")
        return None
    prompt = PROMPT_PATH.read_text(encoding="utf-8")
    payload = {
        "date": date_str,
        "builders": slim_builders(builders),
        "pulse": slim_pulse(pulse),
    }
    user_msg = (
        f"{prompt}\n\n## 今日数据\n\n```json\n"
        f"{json.dumps(payload, ensure_ascii=False, indent=2)}\n```\n\n"
        "请直接输出 JSON。"
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
        print("  ! Claude returned non-JSON, dumping raw", file=sys.stderr)
        (OUT_DIR / f"{date_str}.raw.txt").write_text(out, encoding="utf-8")
        return None


def fallback(date_str: str, builders: dict, pulse: dict) -> dict:
    """No-LLM degraded mode: derive 3 stub items from top builders + pulse top3."""
    items = []
    for i, b in enumerate(builders.get("items", [])[:3], 1):
        items.append(
            {
                "id": f"{date_str}-{i}",
                "title": (b.get("title") or b.get("summary_en") or "")[:30] or f"未命名 {i}",
                "angle": "（自动归档模式：未生成）",
                "opening": b.get("summary_en", "")[:200],
                "story_hook": {"challenge": "", "twist": ""},
                "takeaway": "",
                "refs": [{"tag": "builders", "ref": b.get("author", ""), "url": b.get("url", "")}],
            }
        )
    return {"date": date_str, "items": items, "notes": "fallback mode: claude CLI not available"}


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--date", default=date.today().isoformat())
    parser.add_argument("--no-llm", action="store_true")
    args = parser.parse_args()

    print(f"[suggestions] date={args.date}")
    builders_path = BUILDERS_DIR / f"{args.date}.json"
    pulse_path = PULSE_DIR / f"{args.date}.json"
    if not builders_path.exists():
        print(f"  ! missing {builders_path}", file=sys.stderr)
        return 1
    if not pulse_path.exists():
        print(f"  ! missing {pulse_path}", file=sys.stderr)
        return 1

    builders = read_json(builders_path)
    pulse = read_json(pulse_path)

    refined = None if args.no_llm else call_claude(args.date, builders, pulse)
    if refined is None:
        refined = fallback(args.date, builders, pulse)

    refined["date"] = args.date
    refined["generated_at"] = now_iso()
    refined["model"] = CLAUDE_MODEL if not args.no_llm else "fallback"

    out_path = OUT_DIR / f"{args.date}.json"
    write_json(out_path, refined)
    update_index(OUT_DIR)
    print(f"  wrote {out_path} (items={len(refined.get('items', []))})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
