"""Google Trends data collector using pytrends.

Seed keywords reverse-engineered from Daily Builder Report output.
Includes noise filtering and category classification.
"""

import re
import time
from datetime import date

from pytrends.request import TrendReq

# ~18 seed keywords covering all categories the original report produces
SEED_KEYWORDS = [
    # AI Agent ecosystem (primary — highest yield)
    "AI agent",
    "claude code",
    "AI coding",
    "vibe coding",
    # AI models & infra
    "LLM",
    "open source LLM",
    "MCP server",
    "AI benchmark",
    # Self-hosted & alternatives
    "self hosted",
    "free alternative",
    "open source alternative",
    "discord alternative",
    # Developer tools & infra
    "developer tools",
    "PaaS",
    # Business & indie
    "indie hacker",
    "SaaS",
    # AI safety & security
    "AI security",
    "AI vulnerability",
]

DELAY_SECONDS = 15  # delay between requests to avoid 429

# --- Noise filtering ---
# Patterns to remove: games, shopping, movies, recipes, sports, unrelated brands
NOISE_PATTERNS = [
    r"\bgame\b", r"\bgaming\b", r"\bsteam\b", r"\bplaystation\b", r"\bxbox\b",
    r"\bnintendo\b", r"\bfortnite\b", r"\bminecraft\b", r"\broblox\b",
    r"\bdune awakening\b", r"\belden ring\b", r"\bgta\b",
    r"\bshop\b", r"\bbuy\b", r"\bprice\b", r"\bcoupon\b", r"\bdiscount\b",
    r"\bamazon\b", r"\bwalmart\b", r"\bebay\b",
    r"\bmovie\b", r"\bnetflix\b", r"\btrailer\b", r"\bseason \d",
    r"\brecipe\b", r"\bcooking\b",
    r"\bnfl\b", r"\bnba\b", r"\bfifa\b", r"\bsoccer\b", r"\bfootball score",
    r"\bweather\b", r"\blottery\b", r"\bhoroscope\b",
    r"\bjob\b", r"\bhiring\b", r"\bsalary\b", r"\binterview\b",
    r"\blogin\b", r"\bsign up\b", r"\bpassword\b",
    r"\bdownload free\b", r"\bcrack\b", r"\btorrent\b",
]

# --- Category classification ---
CATEGORY_RULES = [
    ("ai_agent",    [r"agent", r"claude", r"hermes", r"openclaw", r"goose", r"copilot", r"codex"]),
    ("ai_model",    [r"\bllm\b", r"\bgpt\b", r"\bgemma\b", r"\bgemini\b", r"\bmistral\b", r"\bllama\b", r"\bglm\b"]),
    ("ai_coding",   [r"vibe cod", r"ai cod", r"cursor", r"windsurf", r"archon", r"mcp"]),
    ("ai_security", [r"vulnerabilit", r"benchmark", r"exploit", r"mythos", r"security"]),
    ("self_hosted", [r"self.hosted", r"selfhost", r"syncthing", r"joplin", r"minio", r"nextcloud",
                     r"rustdesk", r"anytype", r"matrix", r"teamspeak"]),
    ("free_alternative", [r"free alternative", r"alternative to", r"open.?source alternative",
                          r"pdf.?gear", r"libre"]),
    ("dev_tool",    [r"developer tool", r"paas", r"dokploy", r"docker", r"kubernetes", r"ci.?cd"]),
    ("saas",        [r"\bsaas\b", r"\bmrr\b", r"\bstartup\b", r"indie hack", r"solopreneur"]),
]


def _is_noise(keyword: str) -> bool:
    """Filter out irrelevant keywords (games, shopping, etc.)."""
    kw = keyword.lower()
    return any(re.search(p, kw) for p in NOISE_PATTERNS)


def _classify(keyword: str) -> str:
    """Classify a keyword into a category based on regex rules."""
    kw = keyword.lower()
    for category, patterns in CATEGORY_RULES:
        if any(re.search(p, kw) for p in patterns):
            return category
    return "other"


def _fetch_rising_queries(pytrends: TrendReq, keyword: str, timeframe: str, time_window: str,
                          max_retries: int = 2) -> list[dict]:
    """Fetch rising related queries with retry on 429."""
    for attempt in range(max_retries + 1):
        try:
            pytrends.build_payload([keyword], timeframe=timeframe, geo="")
            time.sleep(DELAY_SECONDS)

            related = pytrends.related_queries()
            rising_df = related.get(keyword, {}).get("rising")

            if rising_df is None or rising_df.empty:
                return []

            items = []
            for _, row in rising_df.iterrows():
                query = row.get("query", "")
                if _is_noise(query):
                    continue

                value = row.get("value", 0)
                is_breakout = str(value).lower() == "breakout" if isinstance(value, str) else False
                rising_pct = 0 if is_breakout else int(value) if value else 0

                items.append({
                    "keyword": query,
                    "rising_percentage": "Breakout" if is_breakout else rising_pct,
                    "is_breakout": is_breakout,
                    "time_window": time_window,
                    "category": _classify(query),
                    "seed_keyword": keyword,
                    "cross_validated": False,
                    "cross_source": "",
                })

            return items
        except Exception as e:
            if "429" in str(e) and attempt < max_retries:
                wait = DELAY_SECONDS * (attempt + 2)
                print(f"  [429] Retrying '{keyword}' ({timeframe}) in {wait}s... (attempt {attempt+1})")
                time.sleep(wait)
            else:
                print(f"  [warn] Failed for '{keyword}' ({timeframe}): {e}")
                return []
    return []


def _compute_trend_categories(rising_7d: list[dict], rising_3m: list[dict]) -> tuple[list, list, list]:
    """Compare 7d vs 3m to find cooling_down, from_zero, sustained keywords."""
    kw_7d = {item["keyword"].lower() for item in rising_7d}
    kw_3m = {item["keyword"].lower() for item in rising_3m}

    # cooling_down: in 3m but NOT in 7d — was hot, now fading
    cooling_down = [item for item in rising_3m if item["keyword"].lower() not in kw_7d]

    # from_zero: in 7d but NOT in 3m — brand new signal
    from_zero = [item for item in rising_7d if item["keyword"].lower() not in kw_3m]

    # sustained: in both 7d AND 3m — persistent trend
    sustained = [item for item in rising_7d if item["keyword"].lower() in kw_3m]

    return cooling_down, from_zero, sustained


def collect() -> dict:
    """Collect Google Trends data for all seed keywords."""
    pytrends = TrendReq(hl="en-US", tz=480)  # tz=480 for UTC+8

    all_rising_7d = []
    all_rising_3m = []

    for i, keyword in enumerate(SEED_KEYWORDS):
        print(f"[google_trends] [{i+1}/{len(SEED_KEYWORDS)}] Querying '{keyword}'...")

        # 7-day window
        items_7d = _fetch_rising_queries(pytrends, keyword, "now 7-d", "7d")
        all_rising_7d.extend(items_7d)
        print(f"  7d: {len(items_7d)} rising queries")

        # 3-month window
        items_3m = _fetch_rising_queries(pytrends, keyword, "today 3-m", "3m")
        all_rising_3m.extend(items_3m)
        print(f"  3m: {len(items_3m)} rising queries")

    # deduplicate by keyword (keep highest rising_percentage)
    def _dedup(items: list[dict]) -> list[dict]:
        seen = {}
        for item in items:
            key = item["keyword"].lower()
            if key not in seen:
                seen[key] = item
            else:
                existing_pct = seen[key]["rising_percentage"]
                new_pct = item["rising_percentage"]
                if isinstance(new_pct, str) or (isinstance(new_pct, int) and isinstance(existing_pct, int) and new_pct > existing_pct):
                    seen[key] = item
        return list(seen.values())

    all_rising_7d = _dedup(all_rising_7d)
    all_rising_3m = _dedup(all_rising_3m)

    cooling_down, from_zero, sustained = _compute_trend_categories(all_rising_7d, all_rising_3m)

    noise_note = "Filtered: games, shopping, movies, sports, login/signup"
    print(f"[google_trends] Summary: 7d={len(all_rising_7d)}, 3m={len(all_rising_3m)}, "
          f"cooling={len(cooling_down)}, new={len(from_zero)}, sustained={len(sustained)}")

    return {
        "date": date.today().isoformat(),
        "source": "google_trends",
        "seed_keywords": SEED_KEYWORDS,
        "noise_filter": noise_note,
        "rising_7d": sorted(all_rising_7d, key=lambda x: x["rising_percentage"] if isinstance(x["rising_percentage"], int) else 999999, reverse=True),
        "rising_3m": sorted(all_rising_3m, key=lambda x: x["rising_percentage"] if isinstance(x["rising_percentage"], int) else 999999, reverse=True),
        "cooling_down": cooling_down,
        "from_zero": from_zero,
        "sustained": sustained,
    }


if __name__ == "__main__":
    import json
    data = collect()
    print(json.dumps(data, ensure_ascii=False, indent=2)[:5000])
