"""Hacker News data collector using Firebase API.

Improvements over v1:
- WAYWON ("What Are You Working On") mega-thread detection + sub-project extraction
- Higher comment fetch limit (40 candidates → top 8)
- Tags placeholder for LLM enrichment
"""

import asyncio
import re
import aiohttp
from datetime import datetime, date

BASE_URL = "https://hacker-news.firebaseio.com/v0"

# Detect mega-threads that need special extraction
MEGA_THREAD_PATTERNS = [
    r"what are you working on",
    r"who is hiring",
    r"freelancer\? seeking",
]


async def _fetch_json(session: aiohttp.ClientSession, url: str):
    async with session.get(url) as resp:
        if resp.status == 200:
            return await resp.json()
        return None


async def _fetch_item(session: aiohttp.ClientSession, item_id: int) -> dict | None:
    return await _fetch_json(session, f"{BASE_URL}/item/{item_id}.json")


async def _fetch_comments(session: aiohttp.ClientSession, kid_ids: list[int], max_comments: int = 8) -> list[dict]:
    """Fetch top-level comments, sorted by number of sub-comments (proxy for quality)."""
    if not kid_ids:
        return []
    # Fetch up to 40 candidates, pick top N
    tasks = [_fetch_item(session, kid_id) for kid_id in kid_ids[:40]]
    results = await asyncio.gather(*tasks)
    comments = []
    for item in results:
        if not item or item.get("deleted") or item.get("dead"):
            continue
        comments.append({
            "id": item.get("id"),
            "author": item.get("by", "[deleted]"),
            "text": item.get("text", ""),
            "score": len(item.get("kids", [])),  # sub-comment count as score proxy
            "created_at": datetime.utcfromtimestamp(item.get("time", 0)).isoformat() + "Z",
        })
    comments.sort(key=lambda c: c["score"], reverse=True)
    return comments[:max_comments]


async def _extract_mega_thread_projects(session: aiohttp.ClientSession, kid_ids: list[int],
                                         max_projects: int = 30) -> list[dict]:
    """Extract individual projects from mega-threads like 'What Are You Working On'.
    Each top-level comment is treated as a separate project pitch."""
    if not kid_ids:
        return []
    # Fetch more comments for mega-threads (up to 80)
    tasks = [_fetch_item(session, kid_id) for kid_id in kid_ids[:80]]
    results = await asyncio.gather(*tasks)

    projects = []
    for item in results:
        if not item or item.get("deleted") or item.get("dead"):
            continue
        text = item.get("text", "")
        if not text or len(text) < 50:  # skip very short replies
            continue
        projects.append({
            "author": item.get("by", "[deleted]"),
            "text": text,
            "replies_count": len(item.get("kids", [])),
            "created_at": datetime.utcfromtimestamp(item.get("time", 0)).isoformat() + "Z",
        })

    projects.sort(key=lambda p: p["replies_count"], reverse=True)
    return projects[:max_projects]


def _is_mega_thread(title: str) -> bool:
    title_lower = title.lower()
    return any(re.search(pat, title_lower) for pat in MEGA_THREAD_PATTERNS)


def _classify_story(title: str) -> str:
    title_lower = title.lower()
    if title_lower.startswith("show hn"):
        return "show_hn"
    if title_lower.startswith("ask hn"):
        return "ask_hn"
    if title_lower.startswith("tell hn"):
        return "tell_hn"
    return "story"


async def _fetch_story_full(session: aiohttp.ClientSession, item_id: int) -> dict | None:
    item = await _fetch_item(session, item_id)
    if not item or item.get("type") != "story":
        return None

    title = item.get("title", "")
    kid_ids = item.get("kids", [])

    # For mega-threads, extract sub-projects instead of top comments
    is_mega = _is_mega_thread(title)
    if is_mega:
        sub_projects = await _extract_mega_thread_projects(session, kid_ids)
        top_comments = []
    else:
        sub_projects = []
        top_comments = await _fetch_comments(session, kid_ids)

    return {
        "id": item["id"],
        "title": title,
        "url": item.get("url", ""),
        "score": item.get("score", 0),
        "comments_count": item.get("descendants", 0),
        "author": item.get("by", "[deleted]"),
        "story_type": _classify_story(title),
        "created_at": datetime.utcfromtimestamp(item.get("time", 0)).isoformat() + "Z",
        "text": item.get("text", ""),
        "top_comments": top_comments,
        "is_mega_thread": is_mega,
        "sub_projects": sub_projects,
        "tags": [],  # placeholder for LLM enrichment
    }


async def _collect_stories(session: aiohttp.ClientSession, endpoint: str, limit: int) -> list[dict]:
    ids = await _fetch_json(session, f"{BASE_URL}/{endpoint}.json")
    if not ids:
        return []
    ids = ids[:limit]

    # fetch in batches of 10 to avoid overwhelming
    stories = []
    for i in range(0, len(ids), 10):
        batch = ids[i:i + 10]
        tasks = [_fetch_story_full(session, sid) for sid in batch]
        results = await asyncio.gather(*tasks)
        stories.extend([s for s in results if s])

    return stories


async def collect() -> dict:
    """Collect HN data, returns dict matching hacker_news.json schema."""
    async with aiohttp.ClientSession() as session:
        top_stories, show_stories, ask_stories = await asyncio.gather(
            _collect_stories(session, "topstories", 50),
            _collect_stories(session, "showstories", 20),
            _collect_stories(session, "askstories", 10),
        )

    all_stories = []
    all_stories.extend(top_stories)
    # add show/ask that aren't already in top
    top_ids = {s["id"] for s in top_stories}
    all_stories.extend(s for s in show_stories if s["id"] not in top_ids)
    all_stories.extend(s for s in ask_stories if s["id"] not in top_ids)

    # Count mega-threads
    mega_count = sum(1 for s in all_stories if s.get("is_mega_thread"))

    return {
        "date": date.today().isoformat(),
        "source": "hacker_news",
        "api_endpoint": BASE_URL,
        "stories": all_stories,
        "_meta": {
            "top_stories_count": len(top_stories),
            "show_hn_count": len(show_stories),
            "ask_hn_count": len(ask_stories),
            "mega_threads": mega_count,
        },
    }


def run() -> dict:
    return asyncio.run(collect())


if __name__ == "__main__":
    import json
    data = run()
    print(json.dumps(data, ensure_ascii=False, indent=2)[:3000])
    print(f"\n... Total stories: {len(data['stories'])}, mega_threads: {data['_meta']['mega_threads']}")
