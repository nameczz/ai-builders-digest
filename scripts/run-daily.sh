#!/usr/bin/env bash
# Daily runner: builders -> pulse -> suggestions.
# Usage: bash scripts/run-daily.sh [YYYY-MM-DD] [--no-llm] [--no-commit]
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

set -a
[[ -f .env ]] && source .env
[[ -f .env.local ]] && source .env.local
set +a

DATE="${1:-$(date +%Y-%m-%d)}"
shift || true

LLM_FLAG=""
COMMIT=1
for arg in "$@"; do
  case "$arg" in
    --no-llm) LLM_FLAG="--no-llm" ;;
    --no-commit) COMMIT=0 ;;
  esac
done

echo "==> run-daily $DATE  llm_flag='$LLM_FLAG'  commit=$COMMIT"

python3 scripts/fetch-builders.py       --date "$DATE" $LLM_FLAG
python3 scripts/fetch-pulse.py          --date "$DATE" $LLM_FLAG
python3 scripts/generate-suggestions.py --date "$DATE" $LLM_FLAG
if [[ -n "${AGENTMAIL_API_KEY:-}" ]]; then
  python3 scripts/fetch-newsletters.py  --date "$DATE" $LLM_FLAG
else
  echo "==> AGENTMAIL_API_KEY not set; skipping newsletters"
fi

if [[ "$COMMIT" == "1" ]]; then
  if [[ -n "$(git status --porcelain public/data)" ]]; then
    git add public/data
    git commit -m "data: daily digest $DATE"
    echo "==> committed. run \`git push\` to publish."
  else
    echo "==> no data changes, skipping commit"
  fi
fi
