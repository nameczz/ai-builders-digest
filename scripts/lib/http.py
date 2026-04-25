"""Tiny HTTP helpers (no third-party deps required)."""
from __future__ import annotations

import gzip
import json
import urllib.request
import urllib.parse
from typing import Any, Optional

UA = "ai-builders-digest/1.0 (+https://github.com/nameczz/ai-builders-digest)"


def get(url: str, headers: Optional[dict] = None, timeout: int = 30) -> bytes:
    h = {"User-Agent": UA, "Accept-Encoding": "identity"}
    if headers:
        h.update(headers)
    req = urllib.request.Request(url, headers=h)
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        data = resp.read()
        if resp.headers.get("Content-Encoding") == "gzip":
            data = gzip.decompress(data)
        return data


def get_text(url: str, headers: Optional[dict] = None, timeout: int = 30) -> str:
    return get(url, headers, timeout).decode("utf-8", errors="replace")


def get_json(url: str, headers: Optional[dict] = None, timeout: int = 30) -> Any:
    return json.loads(get_text(url, headers, timeout))


def encode_params(params: dict) -> str:
    return urllib.parse.urlencode(params)
