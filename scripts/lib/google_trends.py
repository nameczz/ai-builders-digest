"""Google Trends — pytrends-based, slow & throttled.

Pattern reverse-engineered from BuilderPulse output:
- We don't fetch "today's trending searches" (Google retired that endpoint).
- We feed targeted keyword lists into Trends and read back 7-day % change.
- Keywords come from today's other sources (HN titles, GitHub repo names, HF
  models) + an evergreen seed list of "AI builder" terms.
- Each keyword gets an explicit `https://trends.google.com/trends/explore?q=...&date=now+7-d`
  URL so reports can deep-link, matching BuilderPulse style.

We throttle hard: 12s between calls + jitter, exponential backoff on 429.
"""
from __future__ import annotations

import random
import re
import time
from typing import Iterable, Optional
from urllib.parse import quote_plus

# Evergreen seed terms — always queried so we can spot category-level shifts.
SEED_TERMS = [
    "ai agent",
    "claude code",
    "self hosted",
    "open source alternative",
    "claude managed agents",
    "cursor alternative",
    "ai coding agent",
    "context engineering",
    "rag pipeline",
    "vibe coding",
]

# Per-call pacing (seconds) — pytrends gets blocked above ~6 req/min.
MIN_DELAY = 10.0
MAX_DELAY = 16.0
RETRY_BACKOFF = (30.0, 60.0, 120.0)


def _explore_url(query: str, days: int = 7) -> str:
    return f"https://trends.google.com/trends/explore?q={quote_plus(query)}&date=now+{days}-d"


def _sleep_jittered() -> None:
    time.sleep(random.uniform(MIN_DELAY, MAX_DELAY))


_TOKEN = re.compile(r"[a-zA-Z0-9][\w\-\.]{2,}")
_STOPWORDS = {
    "the", "and", "for", "with", "from", "this", "that", "your", "you",
    "what", "how", "why", "when", "show", "ask", "tell", "ai", "llm",
    "github", "google", "https", "http", "com", "www", "post", "show",
    "new", "now", "out", "all", "use", "via", "get", "via", "into",
    "their", "they", "are", "was", "were", "have", "has", "but", "not",
}


def _extract_query_seeds(raw_bundle: dict, max_terms: int = 10) -> list[str]:
    """Pull candidate query phrases from today's HN/GitHub/HF data.

    Strategy: prefer multi-word product/repo names that appear across sources.
    """
    seeds: list[str] = []

    # GitHub repo names → "owner/name" → take the name part as a 1-2 word query
    for repo in (raw_bundle.get("github") or {}).get("weekly", [])[:8]:
        name = (repo.get("repo") or "").split("/")[-1]
        # turn "claude-context" → "claude context"
        phrase = re.sub(r"[-_]+", " ", name).strip().lower()
        if phrase and len(phrase) >= 4:
            seeds.append(phrase)

    # HuggingFace model id → take the family stem (e.g. "deepseek-ai/DeepSeek-V4-Pro" → "deepseek v4")
    for m in (raw_bundle.get("huggingface") or {}).get("models", [])[:6]:
        mid = (m.get("id") or "").split("/")[-1]
        # split CamelCase + dashes
        phrase = re.sub(r"(?<!^)([A-Z])", r" \1", mid)
        phrase = re.sub(r"[-_]+", " ", phrase).strip().lower()
        # Drop trailing size/quant tags ("7b", "gguf", "q4")
        phrase = re.sub(r"\b(\d+b|gguf|q\d|fp8|int8|awq|exl2)\b.*$", "", phrase).strip()
        if phrase and len(phrase) >= 4:
            seeds.append(phrase)

    # HN top story titles → quoted bigrams of capitalised tokens (likely product names)
    for story in (raw_bundle.get("hn") or {}).get("top", [])[:15]:
        title = story.get("title") or ""
        # Capture proper-noun-ish bigrams: "DeepSeek V4", "Claude Code"
        for m in re.finditer(r"\b([A-Z][a-zA-Z0-9]+)\s+([A-Z0-9][a-zA-Z0-9]+)\b", title):
            phrase = f"{m.group(1)} {m.group(2)}".lower()
            if not any(w in _STOPWORDS for w in phrase.split()):
                seeds.append(phrase)

    # Dedupe preserving order, drop very short/noise
    seen = set()
    out = []
    for s in seeds:
        s = s.strip()
        if not s or s in seen or len(s) < 4:
            continue
        seen.add(s)
        out.append(s)
        if len(out) >= max_terms:
            break
    return out


def _fetch_one(req, query: str, geo: str = "") -> Optional[dict]:
    """Return interest_over_time stats + rising related queries for a single term."""
    for attempt in range(len(RETRY_BACKOFF) + 1):
        try:
            req.build_payload(kw_list=[query], timeframe="now 7-d", geo=geo)
            iot = req.interest_over_time()
            if iot is None or iot.empty:
                return {
                    "query": query,
                    "geo": geo,
                    "url": _explore_url(query),
                    "available": False,
                    "change_pct": None,
                    "rising": [],
                }
            # Compare last-quarter avg vs first-quarter avg → pseudo "% change"
            series = iot[query].astype(float)
            n = len(series)
            if n < 4:
                change = None
            else:
                head = series.iloc[: n // 4].mean()
                tail = series.iloc[-n // 4 :].mean()
                if head <= 0:
                    change = None if tail == 0 else 999.0
                else:
                    change = float(round((tail / head - 1) * 100, 1))

            # Rising related queries (small bonus signal)
            rising = []
            try:
                rq = req.related_queries()
                rq_for = (rq or {}).get(query) or {}
                rising_df = rq_for.get("rising")
                if rising_df is not None and not rising_df.empty:
                    for _, row in rising_df.head(5).iterrows():
                        rising.append(
                            {
                                "query": str(row["query"]),
                                "value": int(row["value"]) if str(row["value"]).isdigit() else str(row["value"]),
                            }
                        )
            except Exception:
                pass

            return {
                "query": query,
                "geo": geo,
                "url": _explore_url(query),
                "available": True,
                "change_pct": change,
                "max_score": int(series.max()),
                "rising": rising,
            }
        except Exception as exc:  # noqa: BLE001
            msg = str(exc)
            if "429" in msg or "TooManyRequests" in msg or "rate" in msg.lower():
                if attempt < len(RETRY_BACKOFF):
                    wait = RETRY_BACKOFF[attempt]
                    print(f"    rate-limited on '{query}', sleeping {wait}s...", flush=True)
                    time.sleep(wait)
                    continue
            print(f"    ! '{query}' failed: {msg[:100]}", flush=True)
            return {
                "query": query,
                "geo": geo,
                "url": _explore_url(query),
                "available": False,
                "error": msg[:200],
            }
    return None


def collect(date_str: str, raw_bundle: Optional[dict] = None, max_queries: int = 12) -> dict:
    """Build query list, throttle, return tracked + rising signals.

    Pass `raw_bundle` (the dict assembled by fetch-pulse.collect_raw) to seed
    queries from today's HN/GitHub/HF data. If omitted, we run only the
    evergreen SEED_TERMS.
    """
    # urllib3 2.x compat shim — pytrends 4.9 still passes the deprecated
    # `method_whitelist` kwarg to Retry().
    try:
        import urllib3
        from urllib3.util.retry import Retry as _Retry

        if not getattr(_Retry, "_pytrends_compat_patched", False):
            _orig_init = _Retry.__init__

            def _patched_init(self, *args, **kw):  # noqa: ANN001
                if "method_whitelist" in kw:
                    kw["allowed_methods"] = kw.pop("method_whitelist")
                return _orig_init(self, *args, **kw)

            _Retry.__init__ = _patched_init  # type: ignore[assignment]
            _Retry._pytrends_compat_patched = True  # type: ignore[attr-defined]
    except Exception:
        pass

    try:
        from pytrends.request import TrendReq  # type: ignore
    except ImportError:
        return {
            "date": date_str,
            "source": "google_trends",
            "available": False,
            "error": "pytrends not installed (`pip install pytrends`)",
            "tracked": [],
        }

    queries: list[str] = []
    if raw_bundle:
        queries.extend(_extract_query_seeds(raw_bundle, max_terms=max_queries // 2))
    # Always include some evergreen seeds for trend-line continuity
    for s in SEED_TERMS:
        if s not in queries:
            queries.append(s)
        if len(queries) >= max_queries:
            break

    print(f"  [google_trends] querying {len(queries)} terms (throttled, ~{int(len(queries)*13/60)}min)...", flush=True)

    req = TrendReq(hl="en-US", tz=0, retries=2, backoff_factor=1.0, timeout=(10, 30))
    tracked: list[dict] = []
    for i, q in enumerate(queries):
        if i > 0:
            _sleep_jittered()
        print(f"    [{i + 1}/{len(queries)}] {q}", flush=True)
        result = _fetch_one(req, q)
        if result:
            tracked.append(result)

    # Sort: highest % change first
    tracked.sort(key=lambda x: x.get("change_pct") or -1, reverse=True)

    return {
        "date": date_str,
        "source": "google_trends",
        "available": True,
        "tracked": tracked,
        "rising_aggregate": [r for t in tracked for r in t.get("rising", [])][:20],
    }
