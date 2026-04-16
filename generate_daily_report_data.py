"""Generate frontend-friendly JSON for Daily Builder Report pages.

Reads output/{date}/daily_report_input.json → outputs public/daily-builder-report/{date}.json + updates index.json.
Keeps HTML comments intact for frontend rendering.
"""

import json
import os
import glob
from datetime import date


def _top3_summary(sources: dict) -> list[dict]:
    """Extract top 3 highlights for the calendar card preview."""
    highlights = []

    # Top HN story
    all_hn = sources.get("hacker_news", {})
    all_stories = all_hn.get("top_stories", []) + all_hn.get("show_hn", []) + all_hn.get("ask_hn", [])
    all_stories.sort(key=lambda x: x.get("score", 0), reverse=True)
    if all_stories:
        s = all_stories[0]
        highlights.append({
            "source": "hacker_news",
            "title": s["title"],
            "metric": f"{s['score']} pts",
        })

    # Top GitHub repo
    gh = sources.get("github_trending", {}).get("weekly", [])
    if gh:
        gh.sort(key=lambda x: x.get("weekly_stars", 0), reverse=True)
        r = gh[0]
        highlights.append({
            "source": "github",
            "title": r["repo"],
            "metric": f"{r.get('weekly_stars', 0):,} stars",
        })

    # Top HF model
    hf = sources.get("huggingface", {}).get("trending_models", [])
    if hf:
        m = hf[0]
        highlights.append({
            "source": "huggingface",
            "title": m["id"],
            "metric": f"trending {m.get('trending_score', 0)}",
        })

    return highlights


def _prepare_report_json(data: dict) -> dict:
    """Transform daily_report_input.json into frontend-optimized format."""
    sources = data.get("sources", {})

    # HN: keep all stories with HTML comments intact
    hn = sources.get("hacker_news", {})
    all_stories = hn.get("top_stories", []) + hn.get("show_hn", []) + hn.get("ask_hn", [])
    all_stories.sort(key=lambda x: x.get("score", 0), reverse=True)

    # GitHub
    gh_weekly = sources.get("github_trending", {}).get("weekly", [])
    gh_weekly.sort(key=lambda x: x.get("weekly_stars", 0), reverse=True)
    gh_daily_only = sources.get("github_trending", {}).get("daily_only", [])

    # Product Hunt
    ph = sources.get("product_hunt", {}).get("top_products", [])

    # HuggingFace
    hf_models = sources.get("huggingface", {}).get("trending_models", [])
    hf_spaces = sources.get("huggingface", {}).get("trending_spaces", [])

    # Google Trends
    gt = sources.get("google_trends", {})

    return {
        "date": data.get("date", ""),
        "generated_at": data.get("generated_at", ""),
        "top3": _top3_summary(sources),
        "hacker_news": {
            "stories": all_stories,
            "show_hn": [s for s in all_stories if s.get("story_type") == "show_hn"],
            "ask_hn": [s for s in all_stories if s.get("story_type") == "ask_hn"],
            "mega_threads": [s for s in all_stories if s.get("is_mega_thread")],
        },
        "github": {
            "weekly": gh_weekly,
            "daily_only": gh_daily_only,
        },
        "product_hunt": ph,
        "huggingface": {
            "models": hf_models,
            "spaces": hf_spaces,
        },
        "google_trends": {
            "rising_7d": gt.get("rising_7d", []),
            "rising_3m": gt.get("rising_3m", []),
            "cooling_down": gt.get("cooling_down", []),
            "from_zero": gt.get("from_zero", []),
            "sustained": gt.get("sustained", []),
        },
        "cross_references": data.get("cross_references", []),
        "stats": {
            "hn_count": len(all_stories),
            "gh_count": len(gh_weekly),
            "ph_count": len(ph),
            "hf_model_count": len(hf_models),
            "hf_space_count": len(hf_spaces),
            "gt_7d_count": len(gt.get("rising_7d", [])),
            "gt_3m_count": len(gt.get("rising_3m", [])),
        },
    }


def main():
    report_dir = os.path.join("public", "daily-builder-report")
    os.makedirs(report_dir, exist_ok=True)

    # Find all output dates
    output_dirs = sorted(glob.glob("output/*/daily_report_input.json"))

    dates = []
    for input_path in output_dirs:
        date_str = input_path.split("/")[1]  # output/2026-04-16/...
        print(f"Processing {date_str}...")

        with open(input_path) as f:
            data = json.load(f)

        report_data = _prepare_report_json(data)

        out_path = os.path.join(report_dir, f"{date_str}.json")
        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(report_data, f, ensure_ascii=False, indent=2)

        size_kb = os.path.getsize(out_path) / 1024
        print(f"  -> {out_path} ({size_kb:.1f} KB)")

        # Also copy report markdown if exists
        md_path = os.path.join("output", date_str, "report_zh.md")
        if os.path.exists(md_path):
            import shutil
            md_out = os.path.join(report_dir, f"{date_str}.md")
            shutil.copy2(md_path, md_out)
            print(f"  -> {md_out} (report markdown)")

        dates.append(date_str)

    # Update index.json
    dates.sort(reverse=True)
    index_path = os.path.join(report_dir, "index.json")
    with open(index_path, "w", encoding="utf-8") as f:
        json.dump({"dates": dates}, f, ensure_ascii=False, indent=2)
    print(f"\nIndex: {index_path} ({len(dates)} dates)")


if __name__ == "__main__":
    main()
