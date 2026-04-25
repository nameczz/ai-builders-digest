"""GitHub Trending scraper. Uses the public /trending HTML page."""
from __future__ import annotations

import re
from html.parser import HTMLParser
from typing import Optional

from . import http


TRENDING = "https://github.com/trending"


class _TrendingParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.repos: list[dict] = []
        self._cur: Optional[dict] = None
        self._capture: Optional[str] = None
        self._buf = ""

    def handle_starttag(self, tag: str, attrs: list[tuple[str, Optional[str]]]) -> None:
        a = dict(attrs)
        if tag == "article" and "Box-row" in (a.get("class") or ""):
            self._cur = {"repo": "", "description": "", "language": "", "weekly_stars": 0, "total_stars": 0}
        elif self._cur is None:
            return
        elif tag == "a" and self._cur.get("repo") == "" and a.get("href", "").count("/") == 2:
            self._cur["repo"] = a["href"].lstrip("/")
        elif tag == "p":
            self._capture = "description"
            self._buf = ""
        elif tag == "span":
            cls = a.get("class") or ""
            itemprop = a.get("itemprop") or ""
            if itemprop == "programmingLanguage":
                self._capture = "language"
                self._buf = ""
            elif "d-inline-block float-sm-right" in cls:
                self._capture = "weekly_stars"
                self._buf = ""
        elif tag == "a" and "Link--muted" in (a.get("class") or "") and "stargazers" in (a.get("href") or ""):
            self._capture = "total_stars"
            self._buf = ""

    def handle_data(self, data: str) -> None:
        if self._capture is not None:
            self._buf += data

    def handle_endtag(self, tag: str) -> None:
        if self._cur is None:
            return
        if self._capture and tag in ("p", "span", "a"):
            text = self._buf.strip()
            if self._capture == "description":
                self._cur["description"] = text
            elif self._capture == "language":
                self._cur["language"] = text
            elif self._capture == "weekly_stars":
                m = re.search(r"([\d,]+)\s+stars?", text)
                if m:
                    self._cur["weekly_stars"] = int(m.group(1).replace(",", ""))
            elif self._capture == "total_stars":
                m = re.search(r"[\d,]+", text)
                if m:
                    self._cur["total_stars"] = int(m.group(0).replace(",", ""))
            self._capture = None
            self._buf = ""
        if tag == "article" and self._cur:
            if self._cur["repo"]:
                self.repos.append(self._cur)
            self._cur = None


def fetch(since: str = "weekly", language: str = "") -> list[dict]:
    """since: daily | weekly | monthly. language: '' or e.g. 'python'."""
    url = f"{TRENDING}/{language}" if language else TRENDING
    params = http.encode_params({"since": since})
    html = http.get_text(f"{url}?{params}")
    parser = _TrendingParser()
    parser.feed(html)
    return parser.repos


def collect(date_str: str) -> dict:
    return {
        "date": date_str,
        "source": "github_trending",
        "weekly": fetch("weekly"),
        "daily": fetch("daily"),
    }
