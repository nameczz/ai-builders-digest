"""HuggingFace Trending data collector using REST API."""

import re
from datetime import date

import requests

API_BASE = "https://huggingface.co/api"


def _extract_model_size(tags: list[str], model_id: str) -> str:
    """Extract model size from tags or model name (e.g. '31B', '4B', '450M')."""
    # Check tags first
    for tag in tags:
        m = re.search(r'(\d+(?:\.\d+)?[BbMmKk])\b', tag)
        if m:
            return m.group(1).upper()
    # Check model name
    m = re.search(r'(\d+(?:\.\d+)?[BbMmKk])\b', model_id)
    if m:
        return m.group(1).upper()
    return ""


def _extract_license(tags: list[str]) -> str:
    """Extract license from tags (format: 'license:mit')."""
    for tag in tags:
        if tag.startswith("license:"):
            return tag.split("license:", 1)[1]
    return ""


def _extract_author(item: dict) -> str:
    """Extract author from API response or model ID."""
    author = item.get("author", "")
    if not author:
        model_id = item.get("modelId", item.get("id", ""))
        if "/" in model_id:
            author = model_id.split("/")[0]
    return author


def _fetch_trending_models(limit: int = 20) -> list[dict]:
    resp = requests.get(f"{API_BASE}/models", params={
        "sort": "trendingScore",
        "direction": "-1",
        "limit": limit,
    }, timeout=30)
    resp.raise_for_status()

    models = []
    for item in resp.json():
        tags = item.get("tags", [])
        model_id = item.get("modelId", item.get("id", ""))
        models.append({
            "id": model_id,
            "item_type": "model",
            "trending_score": item.get("trendingScore", 0),
            "likes": item.get("likes", 0),
            "downloads": item.get("downloads", 0),
            "pipeline_tag": item.get("pipeline_tag", ""),
            "license": _extract_license(tags),
            "model_size": _extract_model_size(tags, model_id),
            "tags": tags[:10],
            "author": _extract_author(item),
            "created_at": item.get("createdAt", ""),
            "last_modified": item.get("lastModified", ""),
        })
    return models


def _fetch_trending_spaces(limit: int = 10) -> list[dict]:
    resp = requests.get(f"{API_BASE}/spaces", params={
        "sort": "trendingScore",
        "direction": "-1",
        "limit": limit,
    }, timeout=30)
    resp.raise_for_status()

    spaces = []
    for item in resp.json():
        tags = item.get("tags", [])
        space_id = item.get("id", "")
        is_mcp = "mcp-server" in tags
        spaces.append({
            "id": space_id,
            "item_type": "space",
            "trending_score": item.get("trendingScore", 0),
            "likes": item.get("likes", 0),
            "downloads": 0,
            "pipeline_tag": "",
            "license": _extract_license(tags),
            "tags": tags[:10],
            "author": _extract_author(item),
            "created_at": item.get("createdAt", ""),
            "last_modified": item.get("lastModified", ""),
            "sdk": item.get("sdk", ""),
            "is_mcp_server": is_mcp,
        })
    return spaces


def collect() -> dict:
    """Collect HuggingFace trending data."""
    print("[huggingface] Fetching trending models...")
    models = _fetch_trending_models(20)
    print(f"[huggingface] Got {len(models)} models")

    print("[huggingface] Fetching trending spaces...")
    spaces = _fetch_trending_spaces(10)
    print(f"[huggingface] Got {len(spaces)} spaces")

    return {
        "date": date.today().isoformat(),
        "source": "huggingface",
        "api_endpoint": API_BASE,
        "trending_models": models,
        "trending_spaces": spaces,
    }


if __name__ == "__main__":
    import json
    data = collect()
    print(json.dumps(data, ensure_ascii=False, indent=2)[:3000])
