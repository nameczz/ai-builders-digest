#!/usr/bin/env bash
# Newsletter job — ingest AgentMail newsletters and summarize into Chinese.
#
# Usage:
#   bash scripts/newsletters.sh             # default: today
#   bash scripts/newsletters.sh 2026-04-29
#
# ENV (optional):
#   AIBD_NO_COMMIT=1   skip git add/commit
#   AIBD_PUSH=1        also git push after commit
#   AGENTMAIL_API_KEY  required by fetch-newsletters.py
#   AGENTMAIL_INBOX_ID optional; defaults to first AgentMail inbox
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
LOG="$LOG_DIR/aibd-newsletters-$DATE.log"

echo "==> [$(date -Iseconds)] newsletters $DATE  model=$CODEX_MODEL" | tee -a "$LOG"

if [[ -z "${AGENTMAIL_API_KEY:-}" ]]; then
  echo "==> AGENTMAIL_API_KEY not set; skipping newsletters" | tee -a "$LOG"
  exit 0
fi

python3 scripts/fetch-newsletters.py --date "$DATE" 2>&1 | tee -a "$LOG"

if [[ "${AIBD_NO_COMMIT:-0}" != "1" ]]; then
  if [[ -n "$(git status --porcelain public/data/newsletters)" ]]; then
    git add public/data/newsletters
    git commit -m "data(newsletters): $DATE" | tee -a "$LOG"
    echo "==> committed" | tee -a "$LOG"
    if [[ "${AIBD_PUSH:-0}" == "1" ]]; then
      git push 2>&1 | tee -a "$LOG"
    fi
  else
    echo "==> no changes" | tee -a "$LOG"
  fi
fi

echo "==> [$(date -Iseconds)] newsletters done" | tee -a "$LOG"
