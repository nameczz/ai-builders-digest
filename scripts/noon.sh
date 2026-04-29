#!/usr/bin/env bash
# Noon job — assemble today's Pulse (multi-source) and generate suggestions.
# Pulse fetch ~3min (incl. throttled Google Trends); suggestions depend on LLM availability.
#
# Usage:
#   bash scripts/noon.sh                # default: today
#   bash scripts/noon.sh 2026-04-25
#
# ENV (optional):
#   AIBD_NO_COMMIT=1   skip git add/commit
#   AIBD_PUSH=1        also git push after commit
#   AIBD_SKIP_TRENDS=1 skip Google Trends (saves ~2min)
#   CODEX_MODEL        defaults to gpt-5.5

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

export PATH="$HOME/.local/bin:/opt/homebrew/opt/node@24/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:$PATH"
set -a
[[ -f .env ]] && source .env
[[ -f .env.local ]] && source .env.local
set +a
export CODEX_MODEL="${CODEX_MODEL:-gpt-5.5}"

DATE="${1:-$(date +%Y-%m-%d)}"
LOG_DIR="$HOME/Library/Logs"
mkdir -p "$LOG_DIR"
LOG="$LOG_DIR/aibd-noon-$DATE.log"

echo "==> [$(date -Iseconds)] noon $DATE  model=$CODEX_MODEL" | tee -a "$LOG"

PULSE_FLAGS=()
[[ "${AIBD_SKIP_TRENDS:-0}" == "1" ]] && PULSE_FLAGS+=(--skip-trends)

if [[ ${#PULSE_FLAGS[@]} -gt 0 ]]; then
  python3 scripts/fetch-pulse.py --date "$DATE" "${PULSE_FLAGS[@]}" 2>&1 | tee -a "$LOG"
else
  python3 scripts/fetch-pulse.py --date "$DATE" 2>&1 | tee -a "$LOG"
fi
python3 scripts/generate-suggestions.py --date "$DATE" 2>&1 | tee -a "$LOG"

if [[ "${AIBD_NO_COMMIT:-0}" != "1" ]]; then
  if [[ -n "$(git status --porcelain public/data/pulse public/data/suggestions)" ]]; then
    git add public/data/pulse public/data/suggestions
    git commit -m "data(pulse+suggestions): $DATE" | tee -a "$LOG"
    echo "==> committed" | tee -a "$LOG"
    if [[ "${AIBD_PUSH:-0}" == "1" ]]; then
      git push 2>&1 | tee -a "$LOG"
    fi
  else
    echo "==> no changes" | tee -a "$LOG"
  fi
fi

echo "==> [$(date -Iseconds)] noon done" | tee -a "$LOG"
