"""Extract Reddit-related sections from BuilderPulse upstream md."""
from __future__ import annotations

import re
from typing import Optional

from . import http


BASE = "https://raw.githubusercontent.com/BuilderPulse/BuilderPulse/main/zh/{year}/{date}.md"


def fetch_md(date_str: str) -> Optional[str]:
    year = date_str[:4]
    url = BASE.format(year=year, date=date_str)
    try:
        return http.get_text(url)
    except Exception:
        return None


REDDIT_RE = re.compile(r"reddit\.com/r/[\w_-]+|Reddit 上[\s@]")


def extract(md: str, source_url: str) -> list[dict]:
    """Walk the md, return H3 sections that mention Reddit."""
    lines = md.splitlines()
    sections: list[dict] = []
    cur_heading = ""
    cur_body: list[str] = []
    for line in lines:
        if line.startswith("### "):
            if cur_heading and any(REDDIT_RE.search(b) for b in cur_body):
                sections.append(
                    {
                        "heading": cur_heading,
                        "body_md": "\n".join(cur_body).strip(),
                        "source_url": source_url,
                    }
                )
            cur_heading = line[4:].strip()
            cur_body = []
        elif line.startswith("## "):
            # H2 closes any pending H3
            if cur_heading and any(REDDIT_RE.search(b) for b in cur_body):
                sections.append(
                    {
                        "heading": cur_heading,
                        "body_md": "\n".join(cur_body).strip(),
                        "source_url": source_url,
                    }
                )
            cur_heading = ""
            cur_body = []
        else:
            if cur_heading:
                cur_body.append(line)
    # tail
    if cur_heading and any(REDDIT_RE.search(b) for b in cur_body):
        sections.append(
            {
                "heading": cur_heading,
                "body_md": "\n".join(cur_body).strip(),
                "source_url": source_url,
            }
        )
    return sections


def collect(date_str: str) -> dict:
    year = date_str[:4]
    url = BASE.format(year=year, date=date_str)
    md = fetch_md(date_str)
    if not md:
        return {"date": date_str, "source": "reddit_via_builderpulse", "available": False, "highlights": []}
    return {
        "date": date_str,
        "source": "reddit_via_builderpulse",
        "available": True,
        "source_url": url,
        "highlights": extract(md, url),
    }
