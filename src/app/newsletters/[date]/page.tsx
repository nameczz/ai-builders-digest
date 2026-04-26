import { notFound } from "next/navigation";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { DateSwitcher } from "@/components/DateSwitcher";
import { loadIndex, loadNewsletters } from "@/lib/data";
import type { NewsletterStory } from "@/types";

export const dynamic = "force-static";
export const revalidate = 600;

export async function generateStaticParams() {
  const idx = await loadIndex("newsletters");
  return idx.dates.map((date) => ({ date }));
}

export default async function NewsletterDetailPage({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;
  const data = await loadNewsletters(date);
  if (!data) notFound();
  const idx = await loadIndex("newsletters");
  const high = data.items.filter((it) => it.importance === "high");
  const medium = data.items.filter((it) => it.importance === "medium");
  const low = data.items.filter((it) => it.importance === "low");

  return (
    <>
      <SiteHeader activeDate={date} />
      <main className="max-w-6xl mx-auto px-6 pt-10 pb-4 flex-1">
        <header className="grid md:grid-cols-[3fr_1fr] gap-8 items-end pb-7 border-b-2 border-ink">
          <div>
            <div className="kicker mb-3">第 {date.replace(/-/g, ".")} 期 · AGENTMAIL NEWSLETTER DIGEST</div>
            <h1 className="font-display font-semibold text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] tracking-tight text-ink">
              AI Newsletter 日报
            </h1>
            <p className="font-han text-base mt-5 text-ink-soft italic max-w-2xl leading-7">
              — 来自 {data.inbox_id} 的订阅邮件；忽略确认、欢迎、验证码与重复内容，只保留值得今天看的信号。
            </p>
          </div>
          <div className="md:text-right">
            <DateSwitcher dates={idx.dates} current={date} basePath="/newsletters" />
            <p className="folio mt-3">{data.count} 条 · {data.window.start.slice(0, 10)} → {data.window.end.slice(0, 10)}</p>
          </div>
        </header>

        {data.highlights.length > 0 && (
          <section className="my-10">
            <div className="kicker mb-5">今日重点 · EXECUTIVE SUMMARY</div>
            <ol className="grid md:grid-cols-3 gap-px bg-ink border-y-2 border-ink">
              {data.highlights.slice(0, 6).map((t, i) => (
                <li key={i} className="bg-paper p-6 flex flex-col">
                  <span className="numeral text-vermilion text-5xl leading-none mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-han text-[15px] leading-[1.7] text-ink-soft flex-1">{t}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        <div className="grid md:grid-cols-[180px_1fr] gap-12 mt-12">
          <nav className="md:sticky md:top-8 md:self-start">
            <div className="kicker mb-4">目录</div>
            <ol className="space-y-2.5 text-sm">
              {high.length > 0 && <TocItem href="#high" idx="01" label={`高优先级 · ${high.length}`} />}
              {medium.length > 0 && <TocItem href="#medium" idx="02" label={`中优先级 · ${medium.length}`} />}
              {low.length > 0 && <TocItem href="#low" idx="03" label={`低优先级 · ${low.length}`} />}
              {data.skipped && data.skipped.length > 0 && <TocItem href="#skipped" idx="⊘" label={`已忽略 · ${data.skipped.length}`} />}
            </ol>
          </nav>

          <article className="min-w-0 max-w-[72ch]">
            <StorySection id="high" title="高优先级" items={high} start={1} />
            <StorySection id="medium" title="中优先级" items={medium} start={high.length + 1} />
            <StorySection id="low" title="低优先级" items={low} start={high.length + medium.length + 1} />

            {data.notes && (
              <aside className="my-12 border-l-2 border-vermilion pl-5 py-2 font-han text-sm text-ink-mute italic leading-7">
                <span className="kicker block mb-1 text-vermilion-deep">编辑手记</span>
                {data.notes}
              </aside>
            )}

            {data.skipped && data.skipped.length > 0 && (
              <section id="skipped" className="scroll-mt-8 mt-20 pt-8 border-t-2 border-ink">
                <div className="kicker mb-4">忽略列表 · FILTERED OUT</div>
                <ul className="space-y-2 text-sm font-han text-ink-mute">
                  {data.skipped.slice(0, 20).map((m) => (
                    <li key={m.message_id} className="flex gap-3">
                      <span className="font-mono text-[10px] text-ink-faint flex-shrink-0">{m.reason}</span>
                      <span>{m.subject} — {m.from}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <footer className="mt-20 pt-7 border-t-2 border-ink">
              <DateSwitcher dates={idx.dates} current={date} basePath="/newsletters" />
            </footer>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function TocItem({ href, idx, label }: { href: string; idx: string; label: string }) {
  return (
    <li className="flex items-baseline gap-2">
      <span className="numeral text-xs text-ink-faint">{idx}</span>
      <a href={href} className="font-han text-ink-soft hover:text-vermilion border-b border-transparent hover:border-vermilion">
        {label}
      </a>
    </li>
  );
}

function StorySection({ id, title, items, start }: { id: string; title: string; items: NewsletterStory[]; start: number }) {
  if (items.length === 0) return null;
  return (
    <section id={id} className="scroll-mt-8 mb-16">
      <header className="mb-7">
        <div className="ornament"><span>✉</span></div>
        <div className="flex items-baseline gap-3 mt-4">
          <span className="numeral text-3xl text-vermilion leading-none">{String(start).padStart(2, "0")}</span>
          <h2 className="font-display font-semibold text-3xl text-ink">{title}</h2>
        </div>
      </header>
      <div className="space-y-12">
        {items.map((it, i) => <StoryCard key={it.id} story={it} idx={start + i} />)}
      </div>
    </section>
  );
}

function StoryCard({ story, idx }: { story: NewsletterStory; idx: number }) {
  return (
    <article>
      <header className="mb-4 border-b border-ink pb-2">
        <div className="flex items-baseline gap-3 flex-wrap">
          <span className="numeral text-vermilion text-xl leading-none">{String(idx).padStart(2, "0")}</span>
          <span className="font-mono text-[10px] tracking-wider uppercase px-1.5 py-px border border-rule text-ink-mute">
            {story.source}
          </span>
          {story.published_at && <span className="folio ml-auto">{story.published_at.slice(0, 16)}</span>}
        </div>
        <h3 className="font-display font-semibold text-2xl text-ink leading-snug mt-3">
          {story.url ? (
            <a href={story.url} target="_blank" rel="noreferrer" className="hover:text-vermilion">
              {story.title_zh}
            </a>
          ) : story.title_zh}
        </h3>
        {story.title_original && story.title_original !== story.title_zh && (
          <p className="font-mono text-[11px] text-ink-faint mt-2">{story.title_original}</p>
        )}
      </header>

      <p className="font-han text-[16px] leading-[1.85] text-ink-soft whitespace-pre-wrap">{story.summary_zh}</p>

      {(story.why_important || story.impact) && (
        <div className="grid md:grid-cols-2 gap-px bg-ink border-y border-ink my-5">
          {story.why_important && (
            <div className="bg-paper p-4">
              <span className="kicker block mb-2">为什么重要</span>
              <p className="font-han text-sm leading-7 text-ink-soft">{story.why_important}</p>
            </div>
          )}
          {story.impact && (
            <div className="bg-paper p-4">
              <span className="kicker block mb-2 text-vermilion-deep">可能影响</span>
              <p className="font-han text-sm leading-7 text-ink-soft">{story.impact}</p>
            </div>
          )}
        </div>
      )}

      <footer className="mt-4 flex flex-wrap items-center gap-2">
        {story.tags?.map((tag) => (
          <span key={tag} className="font-mono text-[10px] tracking-wider text-ink-mute border border-rule px-1.5 py-0.5">#{tag}</span>
        ))}
        {story.url && (
          <a href={story.url} target="_blank" rel="noreferrer" className="ml-auto font-mono text-[10px] tracking-[0.2em] text-vermilion border-b border-vermilion pb-0.5">
            原文 →
          </a>
        )}
      </footer>
    </article>
  );
}
