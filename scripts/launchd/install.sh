#!/usr/bin/env bash
# Install (or refresh) the two launchd jobs that drive the daily pipeline.
#
# Usage:
#   bash scripts/launchd/install.sh           # install both
#   bash scripts/launchd/install.sh uninstall # remove both
#   bash scripts/launchd/install.sh status    # show next-fire time
#
# After install, jobs run at:
#   09:00 local — builders fetch + commit
#   12:30 local — pulse + suggestions + commit
#
# Logs:
#   ~/Library/Logs/aibd-{builders,pulse}.launchd.{log,err}
#   ~/Library/Logs/aibd-{morning,noon}-YYYY-MM-DD.log
#
# Notes for cron-style users: macOS launchd is preferred over crontab because
# it runs even if you missed the time slot (as long as your Mac was asleep
# rather than off). It also survives reboots without re-installing.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
LAUNCH_AGENTS="$HOME/Library/LaunchAgents"
mkdir -p "$LAUNCH_AGENTS"

JOBS=("com.aibd.builders" "com.aibd.pulse")

action="${1:-install}"

render_plist() {
  local src="$1" dst="$2"
  sed -e "s|__REPO_ROOT__|$REPO_ROOT|g" -e "s|__HOME__|$HOME|g" "$src" > "$dst"
}

case "$action" in
  install)
    for job in "${JOBS[@]}"; do
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
    echo "  09:00  $LAUNCH_AGENTS/com.aibd.builders.plist"
    echo "  12:30  $LAUNCH_AGENTS/com.aibd.pulse.plist"
    echo
    echo "Test now without waiting:"
    echo "  launchctl start com.aibd.builders"
    echo "  launchctl start com.aibd.pulse"
    ;;

  uninstall)
    for job in "${JOBS[@]}"; do
      dst="$LAUNCH_AGENTS/$job.plist"
      if [[ -f "$dst" ]]; then
        launchctl unload "$dst" 2>/dev/null || true
        rm -f "$dst"
        echo "→ removed $job"
      fi
    done
    ;;

  status)
    for job in "${JOBS[@]}"; do
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
