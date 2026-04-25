#!/usr/bin/env bash
# Morning job — pull today's builder content (X / Podcast / Blog) and translate.
# Designed to be cron-safe: idempotent, hard timeouts on LLM, exit code reflects success.
#
# Usage:
#   bash scripts/morning.sh             # default: today (local date)
#   bash scripts/morning.sh 2026-04-25
#
# ENV (optional):
#   AIBD_NO_COMMIT=1   skip git add/commit
#   AIBD_PUSH=1        also git push after commit
#   CLAUDE_MODEL       defaults to claude-haiku-4-5

set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

# Make claude CLI / python discoverable when launchd starts us with a sparse PATH
export PATH="$HOME/.local/bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:$PATH"
export CLAUDE_MODEL="${CLAUDE_MODEL:-claude-haiku-4-5}"

DATE="${1:-$(date +%Y-%m-%d)}"
LOG_DIR="$HOME/Library/Logs"
mkdir -p "$LOG_DIR"
LOG="$LOG_DIR/aibd-morning-$DATE.log"

echo "==> [$(date -Iseconds)] morning $DATE  model=$CLAUDE_MODEL" | tee -a "$LOG"

python3 scripts/fetch-builders.py --date "$DATE" --max-llm 50 --concurrency 6 2>&1 | tee -a "$LOG"

if [[ "${AIBD_NO_COMMIT:-0}" != "1" ]]; then
  if [[ -n "$(git status --porcelain public/data/builders)" ]]; then
    git add public/data/builders
    git commit -m "data(builders): $DATE" | tee -a "$LOG"
    echo "==> committed" | tee -a "$LOG"
    if [[ "${AIBD_PUSH:-0}" == "1" ]]; then
      git push 2>&1 | tee -a "$LOG"
    fi
  else
    echo "==> no changes" | tee -a "$LOG"
  fi
fi

echo "==> [$(date -Iseconds)] morning done" | tee -a "$LOG"
