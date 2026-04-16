"""Product Hunt data collector using GraphQL API."""

import os
from datetime import date, timedelta

import requests

TOKEN_URL = "https://api.producthunt.com/v2/oauth/token"
GRAPHQL_URL = "https://api.producthunt.com/v2/api/graphql"

POSTS_QUERY = """
query todayPosts($postedAfter: DateTime!, $first: Int!) {
  posts(postedAfter: $postedAfter, first: $first, order: VOTES) {
    edges {
      node {
        id
        name
        tagline
        description
        votesCount
        commentsCount
        url
        website
        createdAt
        topics {
          edges {
            node {
              name
            }
          }
        }
        makers {
          username
        }
        thumbnail {
          url
        }
      }
    }
  }
}
"""


def _get_access_token() -> str | None:
    api_key = os.getenv("PH_API_KEY")
    api_secret = os.getenv("PH_API_SECRET")
    if not api_key or not api_secret:
        print("[product_hunt] Missing PH_API_KEY or PH_API_SECRET in .env")
        return None

    resp = requests.post(TOKEN_URL, json={
        "client_id": api_key,
        "client_secret": api_secret,
        "grant_type": "client_credentials",
    }, timeout=15)

    if resp.status_code == 200:
        return resp.json().get("access_token")
    print(f"[product_hunt] Auth failed: {resp.status_code} {resp.text[:200]}")
    return None


def collect() -> dict:
    """Collect Product Hunt data for today."""
    token = _get_access_token()
    if not token:
        return {
            "date": date.today().isoformat(),
            "source": "product_hunt",
            "products": [],
            "_error": "Authentication failed",
        }

    # Query YESTERDAY's products so votes have accumulated (today's are all 0)
    yesterday = (date.today() - timedelta(days=1)).isoformat() + "T00:00:00Z"
    headers = {"Authorization": f"Bearer {token}"}

    resp = requests.post(GRAPHQL_URL, json={
        "query": POSTS_QUERY,
        "variables": {"postedAfter": yesterday, "first": 30},
    }, headers=headers, timeout=30)

    if resp.status_code != 200:
        print(f"[product_hunt] Query failed: {resp.status_code} {resp.text[:200]}")
        return {
            "date": date.today().isoformat(),
            "source": "product_hunt",
            "products": [],
            "_error": f"Query failed: {resp.status_code}",
        }

    data = resp.json()
    edges = data.get("data", {}).get("posts", {}).get("edges", [])

    products = []
    for edge in edges:
        node = edge["node"]
        topics = [t["node"]["name"] for t in node.get("topics", {}).get("edges", [])]
        makers = [m["username"] for m in node.get("makers", [])]

        products.append({
            "id": node["id"],
            "name": node["name"],
            "tagline": node.get("tagline", ""),
            "description": node.get("description", ""),
            "votes": node.get("votesCount", 0),
            "comments_count": node.get("commentsCount", 0),
            "url": node.get("url", ""),
            "website": node.get("website", ""),
            "maker": makers[0] if makers else "",
            "topics": topics,
            "launched_at": node.get("createdAt", "")[:10],
            "thumbnail_url": node.get("thumbnail", {}).get("url", "") if node.get("thumbnail") else "",
        })

    print(f"[product_hunt] Collected {len(products)} products")
    return {
        "date": date.today().isoformat(),
        "source": "product_hunt",
        "api_endpoint": GRAPHQL_URL,
        "products": products,
    }


if __name__ == "__main__":
    import json
    from dotenv import load_dotenv
    load_dotenv()
    data = collect()
    print(json.dumps(data, ensure_ascii=False, indent=2)[:3000])
