# AI Builders Digest

公众号「碳基生物爱AI」的配套网站。每天三件事：

1. **Builders** — 追踪 AI 领域真正在做事的人（创始人 / PM / 工程师 / 研究员）在 X、播客、博客上的发声
2. **Pulse** — 自建采集管道，从 HN / GitHub Trending / Product Hunt / HuggingFace / Reddit / Google Trends 综合提炼成"今天值得关注的 5 个章节"
3. **每日选题** — 基于上面两条数据，AI 编辑生成 3-5 条中文公众号选题方向

> Follow builders, not influencers.

## 架构

```
                          ┌── scripts/fetch-builders.py     ──► public/data/builders/{date}.json
   每日 cron / 手动 ─────►├── scripts/fetch-pulse.py        ──► public/data/pulse/{date}.json
                          └── scripts/generate-suggestions.py ► public/data/suggestions/{date}.json

   src/app/                    ▼
     page.tsx              ── 聚合首页（三栏摘要 + 历史日期）
     builders/             ── follow-builders 列表（日期 + source 筛选）
     pulse/ + pulse/[date] ── 总页 / 详情（5 章节 + Reddit 摘录）
     suggestions/ + [date] ── 总页 / 详情
```

数据源映射：

| 章节                | 数据来源                                                     |
| ------------------- | ------------------------------------------------------------ |
| Builders            | [follow-builders](https://github.com/zarazhangrui/follow-builders) 中央 feed |
| Pulse · 发现机会    | HN Show HN / Algolia Top + Product Hunt + GitHub Trending    |
| Pulse · 技术选型    | HN + GitHub Trending + HuggingFace API                       |
| Pulse · 竞争情报    | HN（关键词过滤）                                             |
| Pulse · 趋势判断    | 综合 + Google Trends（pytrends 可选）                        |
| Pulse · Reddit 摘录 | 从 [BuilderPulse](https://github.com/BuilderPulse/BuilderPulse) repo 的当日 md 抽取 |

> Reddit 不直接拉取（避开 OAuth），从 BuilderPulse 上游 md 提取相关段落作为补充。

## 本地开发

```bash
npm install
npm run dev   # 本地预览，需先有 public/data/ 数据
```

## 数据管道

每日按两段跑：

| 时段 | 脚本 | 内容 | 模型 | 时长 |
| --- | --- | --- | --- | --- |
| **17:10 北京时间** | `bash scripts/morning.sh && bash scripts/noon.sh` | follow-builders + Pulse + 选题，顺序拉取、总结、翻译、commit、push | Haiku + Sonnet | ~6min |

也提供单步：

```bash
python scripts/fetch-builders.py     --date 2026-04-25
python scripts/fetch-pulse.py        --date 2026-04-25
python scripts/generate-suggestions.py --date 2026-04-25
```

Shell 脚本环境变量（可选）：

```bash
AIBD_NO_COMMIT=1   bash scripts/morning.sh   # 不自动 git commit
AIBD_PUSH=1        bash scripts/noon.sh      # commit 后 git push（触发 Vercel 重新部署）
AIBD_SKIP_TRENDS=1 bash scripts/noon.sh      # 跳过 Google Trends（节省 ~2min）
```

## 定时运行

四种方案，按"运维负担越来越轻"排：

### A. macOS launchd（推荐本地）

```bash
bash scripts/launchd/install.sh    # 一键装两个 LaunchAgent
bash scripts/launchd/install.sh status
bash scripts/launchd/install.sh uninstall
```

- 自动每天 17:10 顺序跑 morning 和 noon
- Mac 在 17:10 睡着了：醒来后自动补跑（`StartCalendarIntervalCatchUp`）
- Mac 关机：跳过那一天
- 日志：`~/Library/Logs/aibd-daily.launchd.{log,err}`、`~/Library/Logs/aibd-{morning,noon}-YYYY-MM-DD.log`

立刻测试一次：`launchctl start com.aibd.daily`。

### B. crontab（最朴素）

```bash
crontab -e
# 加两行（路径换成你自己的）
10 17 * * * cd /Users/you/ai-builders-digest && AIBD_PUSH=1 bash scripts/morning.sh && AIBD_PUSH=1 bash scripts/noon.sh
```

- 缺点：Mac 睡着了会跳过这次（不像 launchd 会补跑）

### C. GitHub Actions（推荐云端 / 不依赖本机）

如果你不想 Mac 一直开着，需要把 `claude` CLI（OAuth）替换成 Anthropic API key + `anthropic` Python SDK。然后在 `.github/workflows/daily.yml` 用 `cron: '0 1 * * *'`（UTC，对应北京 9:00）。**当前脚本暂未内置 SDK 路径**——如果要走这条路告诉我，我来加。

### D. Claude Code skills（手工触发）

定义在 `.claude/skills/`：
- **`morning-digest`** — 在 Claude Code 对话里说"跑早班"或类似词，会触发执行 `morning.sh` 并汇报结果
- **`noon-digest`** — 类似，触发 `noon.sh`

这条路不是定时，是手工。适合"今天忘了跑/想补跑"的场景。

### 可选环境变量（`.env` 或 `.env.local`）

| 变量                                | 用途                                                        |
| ----------------------------------- | ----------------------------------------------------------- |
| `CLAUDE_BIN`                        | Claude CLI 路径（默认 `claude`）                            |
| `CLAUDE_MODEL`                      | 模型 ID（默认 `claude-sonnet-4-6`）                         |
| `PRODUCT_HUNT_TOKEN`                | 切到 PH GraphQL（带票数 / topics）；无则走公开 Atom feed    |
| `GITHUB_TOKEN`                      | 提高 GitHub API 速率配额（trending 仍走 HTML scrape）       |
| `REDDIT_CLIENT_ID` / `REDDIT_SECRET`| 预留，当前未启用直拉                                        |

### Google Trends 依赖

`fetch-pulse.py` 默认会跑 Google Trends（pytrends 实现，慢速节流，约 +2 min）。

```bash
pip install --user pytrends     # 必装；缺失时 trends 段降级为空
```

策略参考自 BuilderPulse：**不拉「今日热搜」，而是用今日 HN/GitHub/HuggingFace 的高频名词作为种子词，调用 `interest_over_time` 拿 7 天百分比变化 + `related_queries(rising)` 发现破圈关联词**。每次调用之间 sleep 10–16s（jittered），429 时按 30/60/120s 退避。

如果你想跳过 trends（节省 2-3 min），用 `--skip-trends`：

```bash
python scripts/fetch-pulse.py --date 2026-04-25 --skip-trends
```

## 技术栈

- Next.js 16 (App Router, Turbopack, SSG)
- React 19 + Tailwind CSS v4
- Python 3 标准库 + 可选 `pytrends`
- Claude CLI 作为编辑提炼引擎

## 目录

```
public/data/{builders,pulse,suggestions}/  # 落地的每日 JSON + index.json
scripts/{fetch-builders,fetch-pulse,generate-suggestions}.py
scripts/lib/{hn,github_trending,product_hunt,huggingface,google_trends,reddit_from_builderpulse}.py
prompts/{build_pulse,generate_suggestions}.md
schemas/                                   # 各源 JSON Schema 设计参考
src/app/{page,builders,pulse,suggestions}/
src/components/{SiteHeader,DateSwitcher,SourceBadge,MarkdownBlock}.tsx
src/lib/data.ts
```
