---
name: noon-digest
description: Run the daily noon Pulse + Suggestions pipeline — fetches HN/GitHub/PH/HuggingFace/Reddit/Google Trends, builds the structured BuilderPulse-style report with Claude Sonnet, and generates 5 editorial picks. Use when the user says "跑中午"/"出 pulse"/"今天选题"/"noon" or to perform the 12:30 PM Beijing-time scheduled task manually.
---

# 中午 · Pulse + 选题

每天 12:30（北京时间）跑一次。HN 当天热帖、GitHub Trending 周榜、Product Hunt 当日新品都已经积累得差不多了，加 Google Trends 7 天百分比 + Reddit 摘录，正好出一份"上午半天信号"的综合刊。

## 该做什么

1. 跑 `bash scripts/noon.sh`（默认日期 = 今天）。这会：
   - `fetch-pulse.py --date YYYY-MM-DD`
     - 拉 HN top + Show HN + Ask HN（Algolia）
     - 拉 GitHub Trending 周榜 + 日榜（HTML scrape）
     - 拉 Product Hunt 当日新品（Atom feed）
     - 拉 HuggingFace trending 模型 + Spaces
     - 拉 Reddit 摘录（从 BuilderPulse 上游 md 抽取）
     - 拉 Google Trends 12 个关键词的 7 天 % 变化（pytrends，节流约 2 min）
     - 用 Claude Sonnet 编辑提炼成 5 章节 + Top3 + intro
   - `generate-suggestions.py --date YYYY-MM-DD`
     - 基于今天的 builders + pulse 生成 5 条博主选题
   - 如果 `public/data/pulse` 或 `public/data/suggestions` 有 diff，自动 commit
2. 跑完后简单汇报：哪些章节有内容、Trends 抓到几条、Suggestions 5 条标题。

## 时间预算

- fetch-pulse: ~3 min（Trends 节流是大头）
- generate-suggestions: ~30 sec
- 总计 4 分钟以内

## 失败处理

- **Trends 太慢/被限流**：传 `AIBD_SKIP_TRENDS=1` 跳过，pulse 仍然能出，只是 trends 章节会缺数据
- **Claude 输出 JSON 格式错误**：脚本里有 quote-repair 兜底；如果还失败，看 `out/raw/{date}/claude_raw.txt` 调试
- **builders 还没跑过**：generate-suggestions 会报 `missing builders/{date}.json`，先跑一次 morning-digest

## 不要做

- 不要 `--no-llm` 跑 pulse——会得到一个空架子，没有编辑判断
- 不要把 `--max-queries` 调高超过 20，pytrends 容易被 429
- 不要在已 commit 后手工改 pulse JSON——下次跑全量覆盖

## 相关文件

- `scripts/noon.sh` — 入口
- `scripts/fetch-pulse.py` — pulse 主逻辑
- `scripts/generate-suggestions.py` — 选题主逻辑
- `prompts/build_pulse.md` — pulse 编辑 prompt
- `prompts/generate_suggestions.md` — 选题 prompt
- `public/data/pulse/{date}.json` — pulse 输出
- `public/data/suggestions/{date}.json` — 选题输出
- `~/Library/Logs/aibd-noon-{date}.log` — 日志
