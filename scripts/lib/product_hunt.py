"""Product Hunt fetcher.

Default path: public Atom feed (no key).
Optional path: GraphQL API if PRODUCT_HUNT_TOKEN is set.
"""
from __future__ import annotations

import json
import re
import xml.etree.ElementTree as ET

from . import http
from .config import PRODUCT_HUNT_TOKEN


ATOM_URL = "https://www.producthunt.com/feed"
GRAPHQL_URL = "https://api.producthunt.com/v2/api/graphql"

ATOM_NS = {"a": "http://www.w3.org/2005/Atom"}


def fetch_atom() -> list[dict]:
    body = http.get_text(ATOM_URL)
    try:
        root = ET.fromstring(body)
    except ET.ParseError:
        return []
    items: list[dict] = []
    for entry in root.findall("a:entry", ATOM_NS):
        title = (entry.findtext("a:title", default="", namespaces=ATOM_NS) or "").strip()
        link_el = entry.find("a:link", ATOM_NS)
        href = link_el.get("href") if link_el is not None else ""
        content = (entry.findtext("a:content", default="", namespaces=ATOM_NS) or "")
        # strip HTML, keep first non-empty text as tagline
        text = re.sub(r"<[^>]+>", " ", content)
        text = re.sub(r"\s+", " ", text).strip()
        # tagline = first sentence-ish chunk before "Discussion | Link"
        tagline = text.split(" Discussion ")[0].strip() if text else ""
        published = (entry.findtext("a:published", default="", namespaces=ATOM_NS) or "").strip()
        author_el = entry.find("a:author/a:name", ATOM_NS)
        items.append(
            {
                "name": title,
                "tagline": tagline[:240],
                "url": href,
                "maker": author_el.text.strip() if (author_el is not None and author_el.text) else "",
                "published_at": published,
            }
        )
    return items


def fetch_graphql(date_str: str) -> list[dict]:
    if not PRODUCT_HUNT_TOKEN:
        return []
    query = """
    query TodayPosts($postedAfter: DateTime!, $postedBefore: DateTime!) {
      posts(postedAfter: $postedAfter, postedBefore: $postedBefore, first: 30, order: VOTES) {
        edges {
          node {
            name tagline votesCount commentsCount website url createdAt
            topics { edges { node { name } } }
          }
        }
      }
    }
    """
    body = json.dumps(
        {
            "query": query,
            "variables": {
                "postedAfter": f"{date_str}T00:00:00Z",
                "postedBefore": f"{date_str}T23:59:59Z",
            },
        }
    ).encode("utf-8")
    import urllib.request

    req = urllib.request.Request(
        GRAPHQL_URL,
        data=body,
        headers={
            "Authorization": f"Bearer {PRODUCT_HUNT_TOKEN}",
            "Content-Type": "application/json",
            "User-Agent": http.UA,
        },
        method="POST",
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        data = json.loads(resp.read().decode("utf-8"))
    edges = (((data.get("data") or {}).get("posts") or {}).get("edges") or [])
    return [
        {
            "name": e["node"]["name"],
            "tagline": e["node"]["tagline"],
            "url": e["node"]["url"],
            "website": e["node"]["website"],
            "votes": e["node"]["votesCount"],
            "comments_count": e["node"]["commentsCount"],
            "topics": [t["node"]["name"] for t in (e["node"]["topics"] or {}).get("edges", [])],
            "published_at": e["node"]["createdAt"],
        }
        for e in edges
    ]


def collect(date_str: str) -> dict:
    if PRODUCT_HUNT_TOKEN:
        try:
            products = fetch_graphql(date_str)
            return {"date": date_str, "source": "product_hunt", "mode": "graphql", "products": products}
        except Exception as exc:  # noqa: BLE001
            print(f"  ! PH GraphQL failed ({exc}), falling back to Atom")
    return {"date": date_str, "source": "product_hunt", "mode": "atom", "products": fetch_atom()}
