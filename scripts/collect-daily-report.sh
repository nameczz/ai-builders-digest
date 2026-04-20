#!/bin/bash
# Daily Builder Report — 每日下载 BuilderPulse + 生成博主建议
#
# 用法：
#   ./scripts/collect-daily-report.sh              # 仅下载 BuilderPulse md
#   ./scripts/collect-daily-report.sh generate    # 下载 + Claude Code 生成博主建议
#   ./scripts/collect-daily-report.sh push        # 下载 + 生成 + push 到 GitHub
#
# 前置条件：
#   - Python 3（仅用 stdlib）
#   - Claude Code（用于 generate 步骤）

set -e

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_DIR"

TODAY=$(date +%Y-%m-%d)

echo "=========================================="
echo "Daily Builder Report — $TODAY"
echo "=========================================="

# Step 1: 下载 BuilderPulse zh+en md
echo ""
echo "[Step 1/2] 下载 BuilderPulse 每日 md..."
python3 scripts/fetch-builderpulse.py "$TODAY"

# Step 2: 生成博主建议（需要 Claude Code）
if [ "$1" = "generate" ] || [ "$1" = "push" ]; then
    echo ""
    echo "[Step 2/2] 请在 Claude Code 中执行以下操作生成博主建议："
    echo ""
    echo "  依据 prompts/generate_blogger_suggestion.md 的要求，"
    echo "  读取 public/daily-builder-report/$TODAY.zh.md 和 $TODAY.en.md，"
    echo "  产出选题建议到 public/daily-builder-report/$TODAY.suggestion.md"
    echo ""
fi

# Step 3: Push 到 GitHub
if [ "$1" = "push" ]; then
    echo "[Push] 提交到 GitHub..."
    git add public/daily-builder-report/
    git commit -m "Daily Builder Report — $TODAY"
    git push
    echo "[Push] ✅ 已推送"
fi

echo ""
echo "=========================================="
echo "完成！文件列表："
ls -lh "public/daily-builder-report/$TODAY".* 2>/dev/null || true
echo "=========================================="
