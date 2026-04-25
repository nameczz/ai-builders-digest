"""Hacker News fetcher via Algolia search API (no key required)."""
from __future__ import annotations

from datetime import datetime, timedelta, timezone
from typing import Optional

from . import http


SEARCH = "https://hn.algolia.com/api/v1/search"


def _date_window(date_str: str) -> tuple[int, int]:
    d = datetime.strptime(date_str, "%Y-%m-%d").replace(tzinfo=timezone.utc)
    start = int(d.timestamp())
    end = int((d + timedelta(days=1)).timestamp())
    return start, end


def search(date_str: str, tags: str, min_points: int = 100, hits: int = 30) -> list[dict]:
    start, end = _date_window(date_str)
    params = {
        "tags": tags,
        "numericFilters": f"created_at_i>={start},created_at_i<{end},points>={min_points}",
        "hitsPerPage": hits,
    }
    url = f"{SEARCH}?{http.encode_params(params)}"
    data = http.get_json(url)
    return data.get("hits", [])


def normalise(hit: dict) -> dict:
    item_id = hit.get("objectID")
    return {
        "id": int(item_id) if item_id and str(item_id).isdigit() else 0,
        "title": hit.get("title") or hit.get("story_title") or "",
        "url": hit.get("url") or (f"https://news.ycombinator.com/item?id={item_id}" if item_id else ""),
        "points": hit.get("points") or 0,
        "comments_count": hit.get("num_comments") or 0,
        "author": hit.get("author") or "",
        "created_at": hit.get("created_at") or "",
        "story_type": _story_type(hit),
    }


def _story_type(hit: dict) -> str:
    tags = hit.get("_tags") or []
    for tag in ("show_hn", "ask_hn", "tell_hn"):
        if tag in tags:
            return tag
    return "story"


def collect(date_str: str) -> dict:
    """Return categorised HN dataset for the day."""
    return {
        "date": date_str,
        "source": "hacker_news",
        "top": [normalise(h) for h in search(date_str, "story", min_points=200, hits=30)],
        "show_hn": [normalise(h) for h in search(date_str, "show_hn", min_points=50, hits=20)],
        "ask_hn": [normalise(h) for h in search(date_str, "ask_hn", min_points=30, hits=15)],
    }
