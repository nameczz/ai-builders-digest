"""Filesystem + index helpers shared across fetchers."""
from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path
from typing import Any


def write_json(path: Path, data: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")


def read_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def update_index(dir_path: Path) -> None:
    """Scan dir for {date}.json files (excluding index.json) and write index.json."""
    dir_path.mkdir(parents=True, exist_ok=True)
    dates = sorted(
        {
            p.stem
            for p in dir_path.glob("*.json")
            if p.stem != "index" and len(p.stem) == 10 and p.stem[4] == "-"
        },
        reverse=True,
    )
    index = {
        "updated_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "dates": dates,
        "latest": dates[0] if dates else "",
    }
    write_json(dir_path / "index.json", index)


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds")
