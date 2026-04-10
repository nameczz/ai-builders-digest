# AI Builders Digest

公众号「碳基生物爱AI」的配套网站，每日精选 AI builder 的观点、动态与播客摘要。

Follow builders, not influencers.

## 数据来源

内容由 [follow-builders](https://github.com/zarazhangrui/follow-builders) skill 自动抓取和生成，追踪 AI 领域真正在做事的人——创始人、PM、工程师、研究员——在 X/Twitter、YouTube 播客和博客上的动态。

每日通过定时任务自动拉取最新 feed，生成中英文双语摘要，写入 `public/data/` 目录并推送到 GitHub，由 Vercel 自动部署。

## 技术栈

- Next.js (SSG) + Tailwind CSS
- Vercel 自动部署
- Claude design-md 设计风格

## 本地开发

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看。
