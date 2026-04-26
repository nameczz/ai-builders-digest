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
  const pick = data.items[0];

  return (
    <>
      <SiteHeader activeDate={date} />
      <main className="max-w-4xl mx-auto px-6 pt-10 pb-4 flex-1 overflow-hidden">
        <header className="grid md:grid-cols-[1fr_auto] gap-8 items-end pb-7 border-b-2 border-ink">
          <div className="min-w-0">
            <div className="kicker mb-3">第 {date.replace(/-/g, ".")} 期 · ONE ARTICLE TO READ</div>
            <h1 className="font-display font-semibold text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] tracking-tight text-ink">
              今日精读
            </h1>
            <p className="font-han text-base mt-5 text-ink-soft italic max-w-2xl leading-7">
              — 每天从 AgentMail 订阅里只挑一篇最值得认真看的 AI newsletter，做中文精读摘要。
            </p>
          </div>
          <div className="md:text-right min-w-0">
            <DateSwitcher dates={idx.dates} current={date} basePath="/newsletters" />
            <p className="folio mt-3">{pick ? "1 篇精读" : "今日未选"} · {data.window.start.slice(0, 10)}</p>
          </div>
        </header>

        {pick ? (
          <article className="mt-12 min-w-0">
            <FeatureStory story={pick} />

            {data.notes && (
              <aside className="my-12 border-l-2 border-vermilion pl-5 py-2 font-han text-sm text-ink-mute italic leading-7">
                <span className="kicker block mb-1 text-vermilion-deep">编辑手记</span>
                {data.notes}
              </aside>
            )}
          </article>
        ) : (
          <section className="mt-12 border-y-2 border-ink py-10">
            <div className="kicker mb-3">NO PICK TODAY</div>
            <p className="font-han text-lg leading-8 text-ink-soft">
              今天没有正式 newsletter 值得精读。可能只有确认订阅、欢迎邮件、验证码，或者没有新邮件。
            </p>
            {data.notes && <p className="font-han text-sm text-ink-mute mt-4 italic">{data.notes}</p>}
          </section>
        )}

        {data.skipped && data.skipped.length > 0 && (
          <section className="mt-16 pt-8 border-t border-rule">
            <div className="kicker mb-4">已忽略 · FILTERED OUT</div>
            <ul className="space-y-2 text-sm font-han text-ink-mute">
              {data.skipped.slice(0, 12).map((m) => (
                <li key={m.message_id} className="grid grid-cols-[80px_1fr] gap-3 min-w-0">
                  <span className="font-mono text-[10px] text-ink-faint">{m.reason}</span>
                  <span className="min-w-0 break-words">{m.subject} — {m.from}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <footer className="mt-20 pt-7 border-t-2 border-ink">
          <DateSwitcher dates={idx.dates} current={date} basePath="/newsletters" />
        </footer>
      </main>
      <SiteFooter />
    </>
  );
}

function FeatureStory({ story }: { story: NewsletterStory }) {
  return (
    <>
      <header className="mb-8 border-b border-ink pb-5 min-w-0">
        <div className="flex items-baseline gap-3 flex-wrap">
          <span className="numeral text-vermilion text-5xl leading-none">01</span>
          <span className="font-mono text-[10px] tracking-wider uppercase px-1.5 py-px border border-rule text-ink-mute max-w-full break-words">
            {story.source}
          </span>
          {story.published_at && <span className="folio ml-auto">{story.published_at.slice(0, 16)}</span>}
        </div>
        <h2 className="font-display font-semibold text-[clamp(2rem,4vw,3.4rem)] text-ink leading-[1.05] mt-5 break-words">
          {story.url ? (
            <a href={story.url} target="_blank" rel="noreferrer" className="hover:text-vermilion">
              {story.title_zh}
            </a>
          ) : story.title_zh}
        </h2>
        {story.title_original && story.title_original !== story.title_zh && (
          <p className="font-mono text-[11px] text-ink-faint mt-3 break-words">{story.title_original}</p>
        )}
      </header>

      {story.summary_zh && (
        <p className="pullquote my-8">{story.summary_zh}</p>
      )}

      {story.deep_read_zh && (
        <section className="my-10">
          <div className="kicker mb-4">精读摘要 · DEEP READ</div>
          <p className="font-han text-[17px] leading-[2] text-ink-soft whitespace-pre-wrap break-words dropcap">
            {story.deep_read_zh}
          </p>
        </section>
      )}

      {(story.why_important || story.impact) && (
        <div className="grid md:grid-cols-2 gap-px bg-ink border-y border-ink my-8">
          {story.why_important && (
            <div className="bg-paper p-5">
              <span className="kicker block mb-2">为什么选它</span>
              <p className="font-han text-sm leading-7 text-ink-soft">{story.why_important}</p>
            </div>
          )}
          {story.impact && (
            <div className="bg-paper p-5">
              <span className="kicker block mb-2 text-vermilion-deep">可能影响</span>
              <p className="font-han text-sm leading-7 text-ink-soft">{story.impact}</p>
            </div>
          )}
        </div>
      )}

      {story.key_points && story.key_points.length > 0 && (
        <section className="my-10">
          <div className="kicker mb-4">关键点</div>
          <ol className="space-y-3">
            {story.key_points.map((point, i) => (
              <li key={i} className="flex gap-3 font-han text-[15px] leading-7 text-ink-soft">
                <span className="numeral text-vermilion flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="break-words">{point}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {story.reading_notes && story.reading_notes.length > 0 && (
        <section className="my-10 border-l-2 border-rule pl-5">
          <div className="kicker mb-4">带着这些问题读</div>
          <ul className="space-y-2 font-han text-[15px] leading-7 text-ink-mute italic">
            {story.reading_notes.map((note, i) => <li key={i}>— {note}</li>)}
          </ul>
        </section>
      )}

      <footer className="mt-8 flex flex-wrap items-center gap-2">
        {story.tags?.map((tag) => (
          <span key={tag} className="font-mono text-[10px] tracking-wider text-ink-mute border border-rule px-1.5 py-0.5">#{tag}</span>
        ))}
        {story.url && (
          <a href={story.url} target="_blank" rel="noreferrer" className="ml-auto font-mono text-[10px] tracking-[0.2em] text-vermilion border-b border-vermilion pb-0.5">
            原文 →
          </a>
        )}
      </footer>
    </>
  );
}
