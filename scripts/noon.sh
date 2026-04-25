#!/usr/bin/env bash
# Noon job — assemble today's Pulse (multi-source) and generate suggestions.
# Pulse fetch ~3min (incl. throttled Google Trends); suggestions ~30s.
#
# Usage:
#   bash scripts/noon.sh                # default: today
#   bash scripts/noon.sh 2026-04-25
#
# ENV (optional):
#   AIBD_NO_COMMIT=1   skip git add/commit
#   AIBD_PUSH=1        also git push after commit
#   AIBD_SKIP_TRENDS=1 skip Google Trends (saves ~2min)
#   CLAUDE_MODEL       defaults to claude-sonnet-4-6 (better editor judgement than Haiku)

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

export PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:$PATH"
export CLAUDE_MODEL="${CLAUDE_MODEL:-claude-sonnet-4-6}"

DATE="${1:-$(date +%Y-%m-%d)}"
LOG_DIR="$HOME/Library/Logs"
mkdir -p "$LOG_DIR"
LOG="$LOG_DIR/aibd-noon-$DATE.log"

echo "==> [$(date -Iseconds)] noon $DATE  model=$CLAUDE_MODEL" | tee -a "$LOG"

PULSE_FLAGS=()
[[ "${AIBD_SKIP_TRENDS:-0}" == "1" ]] && PULSE_FLAGS+=(--skip-trends)

python3 scripts/fetch-pulse.py --date "$DATE" "${PULSE_FLAGS[@]}" 2>&1 | tee -a "$LOG"
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
