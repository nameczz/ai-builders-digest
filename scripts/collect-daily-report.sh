#!/bin/bash
# Daily Builder Report — 每日拉 BuilderPulse + follow-builders，生成博主选题建议 JSON
#
# 用法：
#   ./scripts/collect-daily-report.sh                      # 今日、完整流程
#   ./scripts/collect-daily-report.sh --date 2026-04-19    # 指定日期
#   ./scripts/collect-daily-report.sh --date 2026-04-19 --skip-fetch   # 回填，跳过 BuilderPulse 抓取
#
# 前置：
#   - Python 3（仅 stdlib）
#   - claude CLI（用于生成 suggestion）
#   - jq（用于 JSON 校验 + 重建 index）

set -e

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_DIR"

DATE="$(date +%Y-%m-%d)"
SKIP_FETCH=0

while [[ $# -gt 0 ]]; do
    case "$1" in
        --date)
            DATE="$2"; shift 2 ;;
        --skip-fetch)
            SKIP_FETCH=1; shift ;;
        *)
            echo "未知参数: $1" >&2; exit 1 ;;
    esac
done

echo "=========================================="
echo "Daily Builder Report — $DATE"
echo "=========================================="

BUILDERPULSE_ZH="public/daily-builder-report/$DATE.zh.md"
BUILDERPULSE_EN="public/daily-builder-report/$DATE.en.md"
FOLLOW_BUILDERS_JSON="public/data/$DATE.json"
FB_FEED_DIR="public/feed-cache"
FB_FEED_X="$FB_FEED_DIR/feed-x.json"
FB_FEED_POD="$FB_FEED_DIR/feed-podcasts.json"
FB_FEED_BLOG="$FB_FEED_DIR/feed-blogs.json"
FB_RAW_BASE="https://raw.githubusercontent.com/zarazhangrui/follow-builders/main"
SUGGESTION_DIR="public/suggestions"
SUGGESTION_OUT="$SUGGESTION_DIR/$DATE.json"
SUGGESTION_INDEX="$SUGGESTION_DIR/index.json"

mkdir -p "$SUGGESTION_DIR" "$FB_FEED_DIR"

# Step 1: 拉 BuilderPulse zh+en md
if [ "$SKIP_FETCH" = "0" ]; then
    echo ""
    echo "[Step 1a] 拉 BuilderPulse 每日 md..."
    python3 scripts/fetch-builderpulse.py "$DATE"

    echo ""
    echo "[Step 1b] 拉 follow-builders 中央 feed..."
    for f in feed-x.json feed-podcasts.json feed-blogs.json; do
        if curl -sfL "$FB_RAW_BASE/$f" -o "$FB_FEED_DIR/$f.tmp"; then
            mv "$FB_FEED_DIR/$f.tmp" "$FB_FEED_DIR/$f"
            echo "  ✓ $f ($(wc -c < "$FB_FEED_DIR/$f") bytes)"
        else
            rm -f "$FB_FEED_DIR/$f.tmp"
            echo "  ✗ $f 拉取失败（跳过）"
        fi
    done
else
    echo ""
    echo "[Step 1] 跳过 (--skip-fetch)"
fi

# Step 2: 检查数据源
HAS_BP=0
FB_MODE="none"   # none | digest | feed
[ -s "$BUILDERPULSE_ZH" ] && [ -s "$BUILDERPULSE_EN" ] && HAS_BP=1

# follow-builders 优先级：本地 digest > 中央 feed
if [ -s "$FOLLOW_BUILDERS_JSON" ]; then
    FB_MODE="digest"
elif [ -s "$FB_FEED_X" ] || [ -s "$FB_FEED_POD" ] || [ -s "$FB_FEED_BLOG" ]; then
    FB_MODE="feed"
fi

echo ""
echo "[Step 2] 数据源命中："
echo "  BuilderPulse : $([ $HAS_BP = 1 ] && echo "✓ $BUILDERPULSE_ZH / .en.md" || echo "✗ 缺")"
case "$FB_MODE" in
    digest) echo "  follow-builders : ✓ 本地 digest $FOLLOW_BUILDERS_JSON" ;;
    feed)
        FB_META="$(python3 -c "
import json
parts = []
for path in ['$FB_FEED_X', '$FB_FEED_POD', '$FB_FEED_BLOG']:
    try:
        with open(path) as f: d = json.load(f)
        key = [k for k in ['x','podcasts','blogs'] if k in d][0]
        parts.append(f'{key}:{len(d[key])}')
    except Exception: pass
print(' '.join(parts))
" 2>/dev/null)"
        echo "  follow-builders : ✓ GitHub feed ($FB_META)" ;;
    none)   echo "  follow-builders : ✗ 缺" ;;
esac

if [ "$HAS_BP" = "0" ] && [ "$FB_MODE" = "none" ]; then
    echo "两份源都缺，跳过 suggestion 生成。"
    exit 0
fi

# Step 3: 组 prompt 输入
echo ""
echo "[Step 3] 组装 prompt..."

PROMPT_TEMPLATE="prompts/generate_blogger_suggestion.md"
METHODOLOGY="prompts/methodology.md"
TMP_PROMPT="$(mktemp -t prompt-$DATE.XXXXXX.md)"
TMP_OUT="$(mktemp -t out-$DATE.XXXXXX.json)"
trap 'rm -f "$TMP_PROMPT" "$TMP_OUT"' EXIT

{
    cat "$PROMPT_TEMPLATE"
    echo ""
    echo "---"
    echo ""
    echo "<methodology>"
    cat "$METHODOLOGY"
    echo "</methodology>"
    echo ""
    echo "<builderpulse_zh>"
    if [ "$HAS_BP" = "1" ]; then cat "$BUILDERPULSE_ZH"; else echo "<empty/>"; fi
    echo "</builderpulse_zh>"
    echo ""
    echo "<builderpulse_en>"
    if [ "$HAS_BP" = "1" ]; then cat "$BUILDERPULSE_EN"; else echo "<empty/>"; fi
    echo "</builderpulse_en>"
    echo ""
    echo "<follow_builders_json>"
    case "$FB_MODE" in
        digest)
            echo "<!-- mode: digest (skill-processed) -->"
            cat "$FOLLOW_BUILDERS_JSON"
            ;;
        feed)
            echo "<!-- mode: feed (raw central feed from github.com/zarazhangrui/follow-builders) -->"
            python3 - "$FB_FEED_X" "$FB_FEED_POD" "$FB_FEED_BLOG" <<'PY'
import json, sys
out = {}
for path, key in zip(sys.argv[1:], ["x", "podcasts", "blogs"]):
    try:
        with open(path) as f: d = json.load(f)
        out[key] = d.get(key, [])
        out[f"{key}_generatedAt"] = d.get("generatedAt")
    except Exception:
        out[key] = []
print(json.dumps(out, ensure_ascii=False, indent=2))
PY
            ;;
        none)
            echo "<empty/>"
            ;;
    esac
    echo "</follow_builders_json>"
    echo ""
    echo "# DATE: $DATE"
} > "$TMP_PROMPT"

echo "  prompt 长度: $(wc -c < "$TMP_PROMPT") bytes"

# Step 4: 调 claude CLI 生成 JSON
echo ""
echo "[Step 4] 调 claude 生成 suggestion JSON..."

if ! command -v claude >/dev/null 2>&1; then
    echo "错误：未找到 claude CLI。请安装 Claude Code。" >&2
    exit 1
fi

claude -p "$(cat "$TMP_PROMPT")" --output-format text > "$TMP_OUT" || {
    echo "错误：claude CLI 调用失败。" >&2
    exit 1
}

# Step 5: 校验并落盘（用 Python 做 JSON 解析，错误信息更友好）
echo ""
echo "[Step 5] 校验 JSON..."

if ! command -v jq >/dev/null 2>&1; then
    echo "错误：未找到 jq。请 brew install jq。" >&2
    exit 1
fi

ITEMS_COUNT="$(python3 - "$TMP_OUT" <<'PY'
import json, sys
path = sys.argv[1]
with open(path) as f:
    text = f.read()
try:
    data = json.loads(text)
except json.JSONDecodeError as e:
    print(f"ERROR pos={e.pos}: {text[max(0, e.pos - 60):e.pos + 60]!r}", file=sys.stderr)
    sys.exit(2)
if not isinstance(data, dict) or "items" not in data or not isinstance(data["items"], list):
    print("ERROR: missing top-level items[]", file=sys.stderr)
    sys.exit(3)
print(len(data["items"]))
PY
)" || {
    echo "——输出头 300 字——" >&2
    head -c 300 "$TMP_OUT" >&2; echo >&2
    echo "保留旧文件（若有），不覆盖。" >&2
    exit 1
}

if [ "$ITEMS_COUNT" -lt 1 ]; then
    echo "错误：items 为空，保留旧文件。" >&2
    exit 1
fi

mv "$TMP_OUT" "$SUGGESTION_OUT"
echo "  ✓ 写入 $SUGGESTION_OUT (items: $ITEMS_COUNT)"

# Step 6: 重建 index.json
echo ""
echo "[Step 6] 重建 $SUGGESTION_INDEX ..."
jq -n --argjson dates "$(ls -1 "$SUGGESTION_DIR"/*.json 2>/dev/null \
    | grep -v '/index\.json$' \
    | xargs -n1 basename \
    | sed 's/\.json$//' \
    | sort -r \
    | jq -R . | jq -s .)" '{dates: $dates}' > "$SUGGESTION_INDEX"
echo "  ✓ $(jq '.dates | length' "$SUGGESTION_INDEX") 天"

# Step 7: summary
echo ""
echo "=========================================="
echo "完成 — $DATE"
echo "  sources: $(jq -r '.sources | join(", ")' "$SUGGESTION_OUT")"
echo "  items  : $ITEMS_COUNT"
echo "  output : $SUGGESTION_OUT"
echo "=========================================="
