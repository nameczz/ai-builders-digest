#!/bin/bash
# Daily Builder Report — 每日采集 + 生成流水线
#
# 用法：
#   ./scripts/collect-daily-report.sh           # 采集数据
#   ./scripts/collect-daily-report.sh generate  # 采集 + Claude Code 生成报告
#   ./scripts/collect-daily-report.sh push      # 采集 + 生成 + push 到 GitHub
#
# 前置条件：
#   - Python 3 + venv（pip install -r requirements.txt）
#   - Claude Code（用于 generate 步骤）

set -e

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_DIR"

TODAY=$(date +%Y-%m-%d)
OUTPUT_DIR="output/$TODAY"

echo "=========================================="
echo "Daily Builder Report — $TODAY"
echo "=========================================="

# Step 1: 激活 venv
if [ -d ".venv" ]; then
    source .venv/bin/activate
elif [ -d "venv" ]; then
    source venv/bin/activate
fi

# Step 2: 采集数据
echo ""
echo "[Step 1/3] 采集数据..."
python3 collect_all.py

if [ ! -f "$OUTPUT_DIR/daily_report_input.json" ]; then
    echo "ERROR: 采集失败，未找到 $OUTPUT_DIR/daily_report_input.json"
    exit 1
fi

echo ""
echo "[Step 1/3] ✅ 数据采集完成 → $OUTPUT_DIR/"

# Step 3: 生成前端 JSON
echo ""
echo "[Step 2/3] 生成前端 JSON..."
python3 generate_daily_report_data.py
echo "[Step 2/3] ✅ 前端数据生成完成 → public/daily-builder-report/"

# Step 4: 生成报告（需要 Claude Code）
if [ "$1" = "generate" ] || [ "$1" = "push" ]; then
    echo ""
    echo "[Step 3/3] 请在 Claude Code 中运行以下命令生成报告："
    echo ""
    echo "  读取 $OUTPUT_DIR/daily_report_input.json 的数据，"
    echo "  参考 prompts/generate_report.md 的模板，"
    echo "  生成完整的 Daily Builder Report，"
    echo "  保存 Markdown 到 output/$TODAY/report_zh.md，"
    echo "  保存前端 JSON 到 public/daily-builder-report/$TODAY.json"
    echo ""
fi

# Step 5: Push 到 GitHub
if [ "$1" = "push" ]; then
    echo "[Push] 提交到 GitHub..."
    git add public/daily-builder-report/ output/
    git commit -m "Daily Builder Report — $TODAY"
    git push
    echo "[Push] ✅ 已推送到 GitHub"
fi

echo ""
echo "=========================================="
echo "完成！文件列表："
ls -lh "$OUTPUT_DIR/"
echo ""
ls -lh public/daily-builder-report/ 2>/dev/null || true
echo "=========================================="
