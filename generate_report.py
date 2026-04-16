"""Generate Daily Builder Report from collected data."""

import json
import os
from datetime import date


REPORT_TEMPLATE = """# Daily Builder Report — {date}

> 综合 Hacker News、GitHub Trending、Product Hunt、HuggingFace 等来源，更新于 {time}（上海时间）。

---

## 今天最值得关注的 3 件事

{top3}

---

## 一、发现机会

### 今天有哪些值得关注的新产品和项目？

**Hacker News Show HN 热门：**

{show_hn}

**Product Hunt 今日上榜：**

{product_hunt}

---

### GitHub 上哪些高增长开源项目值得关注？

{github_trending}

---

## 二、技术选型

### HuggingFace 上最热的模型和 Spaces

**Trending 模型：**

{hf_models}

**Trending Spaces：**

{hf_spaces}

---

## 三、社区观察

### 开发者在讨论什么？

**HN 高分讨论：**

{hn_discussions}

---

## 四、数据附录

- HN 采集帖数：{hn_count}
- GitHub Trending 仓库数：{gh_count}
- Product Hunt 产品数：{ph_count}
- HuggingFace 模型：{hf_model_count} / Spaces：{hf_space_count}
- Google Trends：{gt_status}
"""


def _html_to_text(html: str) -> str:
    """Rough HTML tag removal for HN comments."""
    import re
    text = re.sub(r'<a[^>]*href="([^"]*)"[^>]*>[^<]*</a>', r'\1', html)
    text = re.sub(r'<[^>]+>', ' ', text)
    text = re.sub(r'&#x27;', "'", text)
    text = re.sub(r'&#x2F;', "/", text)
    text = re.sub(r'&quot;', '"', text)
    text = re.sub(r'&amp;', '&', text)
    text = re.sub(r'&lt;', '<', text)
    text = re.sub(r'&gt;', '>', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text


def generate(data: dict) -> str:
    s = data["sources"]

    # === Top 3 ===
    # Pick from: highest HN score, top GitHub repo, top HF model
    all_hn = s["hacker_news"]["top_stories"] + s["hacker_news"]["show_hn"] + s["hacker_news"]["ask_hn"]
    all_hn.sort(key=lambda x: x["score"], reverse=True)

    gh_repos = s["github_trending"]["weekly"]
    gh_repos.sort(key=lambda x: x.get("weekly_stars", 0), reverse=True)

    top3_items = []
    if all_hn:
        st = all_hn[0]
        top3_items.append(f"1. **{st['title']}** — HN {st['score']} 分，{st['comments_count']} 条评论")
    if gh_repos:
        r = gh_repos[0]
        top3_items.append(f"2. **{r['repo']}**（{r.get('weekly_stars', '?')} 周星）— {r.get('description', '')}")
    if s["huggingface"]["trending_models"]:
        m = s["huggingface"]["trending_models"][0]
        top3_items.append(f"3. **{m['id']}**（trending {m['trending_score']}）— {m.get('pipeline_tag', '')} 模型")
    top3 = "\n".join(top3_items)

    # === Show HN ===
    show_hn_stories = [st for st in all_hn if st["story_type"] == "show_hn"]
    show_hn_stories.sort(key=lambda x: x["score"], reverse=True)
    show_hn_lines = []
    for st in show_hn_stories[:8]:
        line = f"- **{st['title'].replace('Show HN: ', '')}** — @{st['author']}，{st['score']} 分 / {st['comments_count']} 评论"
        if st.get("top_comments"):
            c = st["top_comments"][0]
            ctext = _html_to_text(c["text"])[:150]
            line += f'\n  > @{c["author"]}：\u201c{ctext}\u201d'
        show_hn_lines.append(line)
    show_hn = "\n\n".join(show_hn_lines) if show_hn_lines else "今日无热门 Show HN"

    # === Product Hunt ===
    ph_lines = []
    for p in s["product_hunt"]["top_products"][:10]:
        topics_str = ", ".join(p.get("topics", [])[:3])
        ph_lines.append(f"- **{p['name']}** — {p['tagline']}（{p['votes']} 票）[{topics_str}]")
    product_hunt = "\n".join(ph_lines) if ph_lines else "今日无 Product Hunt 数据"

    # === GitHub Trending ===
    gh_lines = []
    for r in gh_repos[:10]:
        topics = ", ".join(r.get("topics", [])[:5]) if r.get("topics") else ""
        license_str = f"，{r['license']}" if r.get("license") else ""
        gh_lines.append(
            f"- **{r['repo']}** — {r.get('weekly_stars', '?')} 周星，{r.get('language', '?')} 项目{license_str}\n"
            f"  {r.get('description', '')}"
            + (f"\n  标签：{topics}" if topics else "")
        )
    github_trending = "\n\n".join(gh_lines) if gh_lines else "今日无 GitHub Trending 数据"

    # === HuggingFace Models ===
    hf_model_lines = []
    for m in s["huggingface"]["trending_models"][:10]:
        tags_str = ", ".join(t for t in m.get("tags", [])[:5] if t not in ("transformers", "safetensors"))
        hf_model_lines.append(
            f"- **{m['id']}**（trending {m['trending_score']}，{m['likes']} likes，{m['downloads']:,} 下载）\n"
            f"  任务：{m.get('pipeline_tag', '未知')}"
            + (f" | 标签：{tags_str}" if tags_str else "")
        )
    hf_models = "\n\n".join(hf_model_lines) if hf_model_lines else "无数据"

    # === HuggingFace Spaces ===
    hf_space_lines = []
    for sp in s["huggingface"]["trending_spaces"][:8]:
        tags_str = ", ".join(t for t in sp.get("tags", [])[:3] if t not in ("gradio", "region:us", "static", "docker"))
        sdk = sp.get("sdk", "")
        hf_space_lines.append(
            f"- **{sp['id']}**（trending {sp['trending_score']}，{sp['likes']} likes）"
            + (f" [{sdk}]" if sdk else "")
            + (f" {tags_str}" if tags_str else "")
        )
    hf_spaces = "\n".join(hf_space_lines) if hf_space_lines else "无数据"

    # === HN Discussions ===
    discussion_stories = [st for st in all_hn if st["story_type"] == "story" and st["score"] >= 100]
    discussion_stories.sort(key=lambda x: x["score"], reverse=True)
    disc_lines = []
    for st in discussion_stories[:8]:
        line = f"- **{st['title']}** — {st['score']} 分，{st['comments_count']} 评论"
        if st.get("top_comments"):
            c = st["top_comments"][0]
            ctext = _html_to_text(c["text"])[:200]
            line += f'\n  > @{c["author"]}：\u201c{ctext}\u201d'
        disc_lines.append(line)
    hn_discussions = "\n\n".join(disc_lines) if disc_lines else "无高分讨论"

    # === Stats ===
    gt = s["google_trends"]
    gt_total = len(gt.get("rising_7d", [])) + len(gt.get("rising_3m", []))
    gt_status = f"{gt_total} 个关键词" if gt_total > 0 else "被 429 限制，数据不完整"

    report = REPORT_TEMPLATE.format(
        date=data["date"],
        time=data.get("generated_at", "")[:16].replace("T", " "),
        top3=top3,
        show_hn=show_hn,
        product_hunt=product_hunt,
        github_trending=github_trending,
        hf_models=hf_models,
        hf_spaces=hf_spaces,
        hn_discussions=hn_discussions,
        hn_count=len(all_hn),
        gh_count=len(gh_repos),
        ph_count=len(s["product_hunt"]["top_products"]),
        hf_model_count=len(s["huggingface"]["trending_models"]),
        hf_space_count=len(s["huggingface"]["trending_spaces"]),
        gt_status=gt_status,
    )

    return report


def main():
    today = date.today().isoformat()
    input_path = os.path.join("output", today, "daily_report_input.json")

    if not os.path.exists(input_path):
        print(f"No data found at {input_path}")
        return

    with open(input_path) as f:
        data = json.load(f)

    report = generate(data)

    output_path = os.path.join("output", today, "daily_report.md")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(report)

    print(f"Report saved to {output_path}")
    print(f"Length: {len(report)} chars")


if __name__ == "__main__":
    main()
