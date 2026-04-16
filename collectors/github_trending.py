"""GitHub Trending data collector via page scraping + REST API."""

import os
import re
import time
from datetime import date

import requests
from bs4 import BeautifulSoup

TRENDING_URL = "https://github.com/trending"
API_BASE = "https://api.github.com"


def _get_headers() -> dict:
    headers = {"Accept": "application/vnd.github+json"}
    token = os.getenv("GITHUB_TOKEN")
    if token:
        headers["Authorization"] = f"Bearer {token}"
    return headers


def _scrape_trending(since: str = "weekly") -> list[dict]:
    """Scrape github.com/trending page, returns basic repo info."""
    resp = requests.get(f"{TRENDING_URL}?since={since}", timeout=30)
    resp.raise_for_status()
    soup = BeautifulSoup(resp.text, "html.parser")

    repos = []
    for article in soup.select("article.Box-row"):
        # repo name
        h2 = article.select_one("h2 a")
        if not h2:
            continue
        repo_path = h2.get("href", "").strip("/")
        if not repo_path or "/" not in repo_path:
            continue

        # description
        desc_el = article.select_one("p")
        description = desc_el.get_text(strip=True) if desc_el else ""

        # language
        lang_el = article.select_one("[itemprop='programmingLanguage']")
        language = lang_el.get_text(strip=True) if lang_el else ""

        # stars today/this week
        spans = article.select("span.d-inline-block.float-sm-right")
        stars_text = spans[0].get_text(strip=True) if spans else ""
        period_stars = int(re.sub(r"[^\d]", "", stars_text)) if stars_text else 0

        repos.append({
            "repo": repo_path,
            "description": description,
            "language": language,
            "weekly_stars" if since == "weekly" else "daily_stars": period_stars,
        })

    return repos


COMMERCIAL_SIGNALS = [
    "saas", "cloud", "enterprise", "pricing", "pro plan", "subscription",
    "managed", "hosted", "platform", "dashboard",
]


def _check_funding(repo_name: str, headers: dict) -> bool:
    """Check if repo has .github/FUNDING.yml."""
    try:
        resp = requests.get(f"{API_BASE}/repos/{repo_name}/contents/.github/FUNDING.yml",
                            headers=headers, timeout=10)
        return resp.status_code == 200
    except requests.RequestException:
        return False


def _check_commercial(data: dict) -> bool:
    """Heuristic: does the repo look like it has a commercial product?"""
    homepage = data.get("homepage", "") or ""
    description = (data.get("description", "") or "").lower()
    topics = data.get("topics", [])

    # Has a non-GitHub website → likely commercial
    if homepage and "github" not in homepage:
        return True
    # Topics contain commercial signals
    if any(signal in " ".join(topics) for signal in COMMERCIAL_SIGNALS):
        return True
    # Description contains commercial signals
    if any(signal in description for signal in COMMERCIAL_SIGNALS):
        return True
    return False


def _enrich_repo(repo: dict, headers: dict) -> dict:
    """Enrich repo with GitHub API data (license, topics, stars, forks, funding, commercial)."""
    repo_name = repo["repo"]
    try:
        resp = requests.get(f"{API_BASE}/repos/{repo_name}", headers=headers, timeout=15)
        if resp.status_code == 200:
            data = resp.json()
            repo["total_stars"] = data.get("stargazers_count", 0)
            repo["forks"] = data.get("forks_count", 0)
            repo["open_issues"] = data.get("open_issues_count", 0)
            repo["license"] = data.get("license", {}).get("spdx_id", "") if data.get("license") else ""
            repo["topics"] = data.get("topics", [])
            repo["created_at"] = data.get("created_at", "")[:10]
            repo["owner_type"] = data.get("owner", {}).get("type", "").lower()
            repo["homepage"] = data.get("homepage", "") or ""
            repo["has_commercial"] = _check_commercial(data)
            # Check funding (separate API call)
            repo["has_funding"] = _check_funding(repo_name, headers)
        elif resp.status_code == 403:
            print(f"  [rate limited] skipping API enrichment for {repo_name}")
        time.sleep(0.5)  # rate limiting
    except requests.RequestException as e:
        print(f"  [error] enriching {repo_name}: {e}")
    return repo


def collect() -> dict:
    """Collect GitHub Trending data."""
    print("[github] Scraping trending page (weekly)...")
    weekly_repos = _scrape_trending("weekly")
    print(f"[github] Found {len(weekly_repos)} weekly trending repos")

    print("[github] Scraping trending page (daily)...")
    daily_repos = _scrape_trending("daily")
    print(f"[github] Found {len(daily_repos)} daily trending repos")

    # enrich weekly repos with API data (they're more important for the report)
    headers = _get_headers()
    print("[github] Enriching weekly repos with API data...")
    for i, repo in enumerate(weekly_repos[:25]):
        print(f"  [{i+1}/{min(len(weekly_repos), 25)}] {repo['repo']}")
        _enrich_repo(repo, headers)

    # Merge daily_stars into weekly repos
    daily_lookup = {r["repo"]: r.get("daily_stars", 0) for r in daily_repos}
    for repo in weekly_repos:
        repo["daily_stars"] = daily_lookup.get(repo["repo"], 0)

    return {
        "date": date.today().isoformat(),
        "source": "github_trending",
        "api_endpoint": TRENDING_URL,
        "repositories": weekly_repos[:25],
        "daily_only": [r for r in daily_repos if r["repo"] not in {w["repo"] for w in weekly_repos}][:15],
    }


if __name__ == "__main__":
    import json
    from dotenv import load_dotenv
    load_dotenv()
    data = collect()
    print(json.dumps(data, ensure_ascii=False, indent=2)[:3000])
    print(f"\n... Total repos: {len(data['repositories'])}")
