"""Centralised env reader. Optional API keys; missing -> graceful degrade."""
from __future__ import annotations

import os
from pathlib import Path
from typing import Optional


def _load_dotenv(path: Path) -> None:
    if not path.exists():
        return
    for raw in path.read_text(encoding="utf-8").splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        k, v = line.split("=", 1)
        k = k.strip()
        v = v.strip().strip('"').strip("'")
        os.environ.setdefault(k, v)


REPO_ROOT = Path(__file__).resolve().parents[2]
_load_dotenv(REPO_ROOT / ".env")
_load_dotenv(REPO_ROOT / ".env.local")


def get(key: str, default: Optional[str] = None) -> Optional[str]:
    val = os.environ.get(key)
    return val if val else default


PRODUCT_HUNT_TOKEN = get("PRODUCT_HUNT_TOKEN")
GITHUB_TOKEN = get("GITHUB_TOKEN")
REDDIT_CLIENT_ID = get("REDDIT_CLIENT_ID")
REDDIT_SECRET = get("REDDIT_SECRET")
CLAUDE_BIN = get("CLAUDE_BIN", "claude")
CLAUDE_MODEL = get("CLAUDE_MODEL", "claude-sonnet-4-6")
