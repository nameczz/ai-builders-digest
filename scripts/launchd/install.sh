#!/usr/bin/env bash
# Install (or refresh) the launchd jobs that drive the daily pipeline.
#
# Usage:
#   bash scripts/launchd/install.sh           # install daily jobs
#   bash scripts/launchd/install.sh uninstall # remove all aibd jobs
#   bash scripts/launchd/install.sh status    # show loaded jobs
#
# After install, jobs run at:
#   08:30 local — newsletters + commit + push
#   16:30 local — builders + pulse + suggestions + commit + push
#
# Logs:
#   ~/Library/Logs/aibd-{newsletters,daily}.launchd.{log,err}
#   ~/Library/Logs/aibd-{newsletters,morning,noon}-YYYY-MM-DD.log
#
# Notes for cron-style users: macOS launchd is preferred over crontab because
# it runs even if you missed the time slot (as long as your Mac was asleep
# rather than off). It also survives reboots without re-installing.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
LAUNCH_AGENTS="$HOME/Library/LaunchAgents"
mkdir -p "$LAUNCH_AGENTS"

ACTIVE_JOBS=("com.aibd.newsletters" "com.aibd.daily")
LEGACY_JOBS=("com.aibd.builders" "com.aibd.pulse")
ALL_JOBS=("${ACTIVE_JOBS[@]}" "${LEGACY_JOBS[@]}")

action="${1:-install}"

render_plist() {
  local src="$1" dst="$2"
  sed -e "s|__REPO_ROOT__|$REPO_ROOT|g" -e "s|__HOME__|$HOME|g" "$src" > "$dst"
}

case "$action" in
  install)
    for job in "${LEGACY_JOBS[@]}"; do
      dst="$LAUNCH_AGENTS/$job.plist"
      launchctl unload "$dst" 2>/dev/null || true
      rm -f "$dst"
    done

    for job in "${ACTIVE_JOBS[@]}"; do
      src="$REPO_ROOT/scripts/launchd/$job.plist"
      dst="$LAUNCH_AGENTS/$job.plist"
      echo "→ rendering $job to $dst"
      render_plist "$src" "$dst"
      # Unload first if already loaded (idempotent)
      launchctl unload "$dst" 2>/dev/null || true
      launchctl load -w "$dst"
      echo "  loaded ✓"
    done
    echo
    echo "Installed. Jobs will fire at:"
    echo "  08:30  $LAUNCH_AGENTS/com.aibd.newsletters.plist"
    echo "  16:30  $LAUNCH_AGENTS/com.aibd.daily.plist"
    echo
    echo "Test now without waiting:"
    echo "  launchctl start com.aibd.newsletters"
    echo "  launchctl start com.aibd.daily"
    ;;

  uninstall)
    for job in "${ALL_JOBS[@]}"; do
      dst="$LAUNCH_AGENTS/$job.plist"
      if [[ -f "$dst" ]]; then
        launchctl unload "$dst" 2>/dev/null || true
        rm -f "$dst"
        echo "→ removed $job"
      fi
    done
    ;;

  status)
    for job in "${ALL_JOBS[@]}"; do
      echo "── $job ──"
      launchctl list | grep "$job" || echo "  not loaded"
    done
    echo
    echo "Recent logs:"
    ls -lh "$HOME/Library/Logs/" 2>/dev/null | grep aibd || echo "  (no logs yet)"
    ;;

  *)
    echo "Usage: $0 [install|uninstall|status]"
    exit 1
    ;;
esac
