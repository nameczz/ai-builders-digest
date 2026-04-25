---
name: morning-digest
description: Run the daily morning builders fetch — pulls follow-builders X/Podcast/Blog feeds, translates new items to Chinese with Claude Haiku, and commits to public/data/builders/. Use when the user says "跑早班"/"今天 builders"/"morning"/"刷新 X 数据" or to perform the 9:00 AM Beijing-time scheduled task manually.
---

# 早班 · Builders 拉取

每天早 9:00（北京时间）跑一次。上游 follow-builders feed 通常在北京 16:00（UTC 08:00）刷新一次，所以早 9:00 跑到的还是昨天 16:00 的快照——刚好是"昨天发声、今天读到"的节奏。

## 该做什么

1. 跑 `bash scripts/morning.sh`（默认日期 = 今天）。这会：
   - `fetch-builders.py --date YYYY-MM-DD --max-llm 50 --concurrency 6`
   - 上游 38~40 条左右的 X / Podcast / Blog 全部归到当天
   - 全局按 id 去重，已经在过去某天的不会重复添加
   - 缺中文摘要的 item 自动用 Claude Haiku 并发翻译（约 90 秒）
   - 如果 `public/data/builders` 有 diff，自动 `git commit`
2. 跑完后简单汇报：拉到几条新内容、翻译了几条、是否 commit。

## 失败处理

- **claude CLI 卡住**：脚本内调用已经加了 `--tools "" --disable-slash-commands --no-session-persistence` 减少 runtime 开销，单次约 9s。如果某些 item 翻译失败（output 里有 `×`），下次跑会自动重试缺中文的 item。
- **上游 feed 拉不到**：检查 `https://raw.githubusercontent.com/zarazhangrui/follow-builders/main/feed-x.json` 能否访问。
- **已经全部翻译完没新增**：脚本会输出 `all items already have zh summary, skipping LLM`，正常。

## 不要做

- 不要手动改 `public/data/builders/*.json`——下次跑会被覆盖。要手工修文案就改 `summary_zh` 字段，脚本会保留已存在的中文摘要。
- 不要 `--no-llm` 跑——除非你只是想验证 fetch 链路。
- 不要传 `AIBD_PUSH=1`，除非你确认要触发 Vercel 部署。

## 相关文件

- `scripts/morning.sh` — 入口
- `scripts/fetch-builders.py` — 主逻辑
- `scripts/lib/config.py` — 模型/key 配置
- `public/data/builders/{date}.json` — 输出
- `~/Library/Logs/aibd-morning-{date}.log` — 日志
