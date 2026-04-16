"""Main entry point: run all collectors and output daily_report_input.json."""

import json
import os
import sys
from datetime import datetime, date

from dotenv import load_dotenv

load_dotenv()

from collectors import hacker_news, github_trending, product_hunt, huggingface, google_trends


def _save_json(data: dict, output_dir: str, filename: str):
    path = os.path.join(output_dir, filename)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    size_kb = os.path.getsize(path) / 1024
    print(f"  -> Saved {path} ({size_kb:.1f} KB)")


def _build_cross_references(sources: dict) -> list[dict]:
    """Simple cross-referencing: find keywords/names appearing in multiple sources."""
    # Collect project/keyword mentions from each source
    source_mentions: dict[str, set[str]] = {}

    # GitHub repo names (lowercased, last part)
    gh_names = set()
    for repo in sources.get("github_trending", {}).get("repositories", []):
        name = repo.get("repo", "").split("/")[-1].lower()
        if name:
            gh_names.add(name)
    source_mentions["github_trending"] = gh_names

    # HN title words (extract potential project names)
    hn_names = set()
    for story in sources.get("hacker_news", {}).get("stories", []):
        title = story.get("title", "").lower()
        for gh_name in gh_names:
            if gh_name in title:
                hn_names.add(gh_name)
    source_mentions["hacker_news"] = hn_names

    # Google Trends keywords
    gt_keywords = set()
    for item in sources.get("google_trends", {}).get("rising_7d", []):
        gt_keywords.add(item.get("keyword", "").lower())
    source_mentions["google_trends"] = gt_keywords

    # HuggingFace model names
    hf_names = set()
    for item in sources.get("huggingface", {}).get("trending_models", []):
        name = item.get("id", "").split("/")[-1].lower()
        if name:
            hf_names.add(name)
    source_mentions["huggingface"] = hf_names

    # Find cross-references (appear in 2+ sources)
    all_terms = set()
    for terms in source_mentions.values():
        all_terms.update(terms)

    cross_refs = []
    for term in all_terms:
        appeared_in = [src for src, terms in source_mentions.items() if term in terms]
        if len(appeared_in) >= 2:
            cross_refs.append({
                "signal": term,
                "sources": appeared_in,
                "confidence": "high" if len(appeared_in) >= 3 else "medium",
            })

    cross_refs.sort(key=lambda x: len(x["sources"]), reverse=True)
    return cross_refs


def main():
    today = date.today().isoformat()
    output_dir = os.path.join("output", today)
    os.makedirs(output_dir, exist_ok=True)

    print(f"=== Daily Builder Report Collector — {today} ===\n")

    sources = {}
    errors = []

    # 1. Hacker News
    print("[1/5] Collecting Hacker News...")
    try:
        hn_data = hacker_news.run()
        _save_json(hn_data, output_dir, "hacker_news.json")
        sources["hacker_news"] = {
            "top_stories": [s for s in hn_data["stories"] if s["story_type"] == "story"][:30],
            "show_hn": [s for s in hn_data["stories"] if s["story_type"] == "show_hn"][:20],
            "ask_hn": [s for s in hn_data["stories"] if s["story_type"] == "ask_hn"][:10],
        }
    except Exception as e:
        print(f"  [ERROR] HN failed: {e}")
        errors.append(f"hacker_news: {e}")
        sources["hacker_news"] = {"top_stories": [], "show_hn": [], "ask_hn": []}

    # 2. GitHub Trending
    print("\n[2/5] Collecting GitHub Trending...")
    try:
        gh_data = github_trending.collect()
        _save_json(gh_data, output_dir, "github_trending.json")
        sources["github_trending"] = {
            "weekly": gh_data.get("repositories", []),
            "daily_only": gh_data.get("daily_only", []),
        }
    except Exception as e:
        print(f"  [ERROR] GitHub failed: {e}")
        errors.append(f"github_trending: {e}")
        sources["github_trending"] = {"daily": [], "weekly": []}

    # 3. Product Hunt
    print("\n[3/5] Collecting Product Hunt...")
    try:
        ph_data = product_hunt.collect()
        _save_json(ph_data, output_dir, "product_hunt.json")
        sources["product_hunt"] = {
            "top_products": ph_data.get("products", []),
        }
    except Exception as e:
        print(f"  [ERROR] Product Hunt failed: {e}")
        errors.append(f"product_hunt: {e}")
        sources["product_hunt"] = {"top_products": []}

    # 4. HuggingFace
    print("\n[4/5] Collecting HuggingFace...")
    try:
        hf_data = huggingface.collect()
        _save_json(hf_data, output_dir, "huggingface.json")
        sources["huggingface"] = {
            "trending_models": hf_data.get("trending_models", []),
            "trending_spaces": hf_data.get("trending_spaces", []),
        }
    except Exception as e:
        print(f"  [ERROR] HuggingFace failed: {e}")
        errors.append(f"huggingface: {e}")
        sources["huggingface"] = {"trending_models": [], "trending_spaces": []}

    # 5. Google Trends
    print("\n[5/5] Collecting Google Trends (this takes ~1 min due to rate limiting)...")
    try:
        gt_data = google_trends.collect()
        _save_json(gt_data, output_dir, "google_trends.json")
        sources["google_trends"] = {
            "rising_7d": gt_data.get("rising_7d", []),
            "rising_3m": gt_data.get("rising_3m", []),
            "cooling_down": gt_data.get("cooling_down", []),
            "from_zero": gt_data.get("from_zero", []),
        }
    except Exception as e:
        print(f"  [ERROR] Google Trends failed: {e}")
        errors.append(f"google_trends: {e}")
        sources["google_trends"] = {"rising_7d": [], "rising_3m": [], "cooling_down": [], "from_zero": []}

    # Build cross-references
    print("\n[*] Building cross-references...")
    cross_refs = _build_cross_references(sources)
    print(f"  Found {len(cross_refs)} cross-source signals")

    # Assemble daily_report_input.json
    report_input = {
        "date": today,
        "generated_at": datetime.now().astimezone().isoformat(),
        "sources": sources,
        "cross_references": cross_refs,
        "previous_day_highlights": [],
        "_errors": errors,
    }

    _save_json(report_input, output_dir, "daily_report_input.json")

    print(f"\n=== Done! Output directory: {output_dir} ===")
    if errors:
        print(f"Warnings: {len(errors)} collector(s) had errors:")
        for e in errors:
            print(f"  - {e}")

    return report_input


if __name__ == "__main__":
    main()
