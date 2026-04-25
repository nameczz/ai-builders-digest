"""HuggingFace trending models + spaces."""
from __future__ import annotations

from . import http


MODELS = "https://huggingface.co/api/models?sort=trendingScore&direction=-1&limit=20"
SPACES = "https://huggingface.co/api/spaces?sort=trendingScore&direction=-1&limit=15"


def _norm_model(m: dict) -> dict:
    return {
        "id": m.get("id") or m.get("modelId") or "",
        "url": f"https://huggingface.co/{m.get('id') or m.get('modelId', '')}",
        "trending_score": m.get("trendingScore") or 0,
        "downloads": m.get("downloads") or 0,
        "likes": m.get("likes") or 0,
        "tags": m.get("tags") or [],
        "pipeline_tag": m.get("pipeline_tag") or "",
        "library_name": m.get("library_name") or "",
    }


def _norm_space(s: dict) -> dict:
    return {
        "id": s.get("id") or "",
        "url": f"https://huggingface.co/spaces/{s.get('id', '')}",
        "trending_score": s.get("trendingScore") or 0,
        "likes": s.get("likes") or 0,
        "sdk": s.get("sdk") or "",
    }


def collect(date_str: str) -> dict:
    return {
        "date": date_str,
        "source": "huggingface",
        "models": [_norm_model(m) for m in http.get_json(MODELS)],
        "spaces": [_norm_space(s) for s in http.get_json(SPACES)],
    }
