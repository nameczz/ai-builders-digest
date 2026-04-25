import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { DateSwitcher } from "@/components/DateSwitcher";
import { MarkdownBlock } from "@/components/MarkdownBlock";
import { SourceBadge } from "@/components/SourceBadge";
import { loadIndex, loadPulse } from "@/lib/data";
import type { PulseSourceItem } from "@/types";

export const dynamic = "force-static";
export const revalidate = 600;

export async function generateStaticParams() {
  const idx = await loadIndex("pulse");
  return idx.dates.map((date) => ({ date }));
}

export default async function PulseDetailPage({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;
  const data = await loadPulse(date);
  if (!data) notFound();
  const idx = await loadIndex("pulse");

  const visibleSections = data.sections.filter((s) => s.blocks.length > 0);

  return (
    <>
      <SiteHeader activeDate={date} />
      <main className="max-w-6xl mx-auto px-6 pt-10 pb-4 flex-1">
        {/* === Title block === */}
        <header className="grid md:grid-cols-[3fr_1fr] gap-8 items-end pb-7 border-b-2 border-ink">
          <div>
            <div className="kicker mb-3">第 {date.replace(/-/g, ".")} 期 · DAILY PULSE</div>
            <h1 className="font-display font-semibold text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] tracking-tight text-ink">
              今日脉动
            </h1>
            {data.intro && (
              <p className="font-han text-base mt-5 text-ink-soft italic max-w-2xl leading-7">— {data.intro}</p>
            )}
          </div>
          <div className="md:text-right">
            <DateSwitcher dates={idx.dates} current={date} basePath="/pulse" />
            <p className="folio mt-3">{visibleSections.length} 章 · {data.sections.flatMap((s) => s.blocks).length} 节</p>
          </div>
        </header>

        {/* === TOP3 === */}
        {data.top3.length > 0 && (
          <section className="my-10">
            <div className="kicker mb-5">本日值得关注 · TODAY'S THREE</div>
            <ol className="grid md:grid-cols-3 gap-px bg-ink border-y-2 border-ink">
              {data.top3.map((t, i) => (
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

        {/* === Body === */}
        <div className="grid md:grid-cols-[180px_1fr] gap-12 mt-12">
          {/* TOC sidebar */}
          <nav className="md:sticky md:top-8 md:self-start">
            <div className="kicker mb-4">目录</div>
            <ol className="space-y-2.5 text-sm">
              {visibleSections.map((s, i) => (
                <li key={s.id} className="flex items-baseline gap-2">
                  <span className="numeral text-xs text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
                  <a href={`#${s.id}`} className="font-han text-ink-soft hover:text-vermilion border-b border-transparent hover:border-vermilion">
                    {s.title}
                  </a>
                </li>
              ))}
              {data.reddit_highlights.length > 0 && (
                <li className="flex items-baseline gap-2 pt-2 border-t border-rule-soft mt-3">
                  <span className="numeral text-xs text-vermilion">⊕</span>
                  <a href="#reddit" className="font-han text-ink-soft hover:text-vermilion">
                    Reddit 摘录
                  </a>
                </li>
              )}
            </ol>
          </nav>

          {/* Main editorial */}
          <article className="min-w-0 max-w-[68ch]">
            {visibleSections.map((sec, secIdx) => (
              <section key={sec.id} id={sec.id} className="scroll-mt-8 mb-16">
                <header className="mb-7">
                  <div className="ornament">
                    <span>❉</span>
                  </div>
                  <div className="flex items-baseline gap-3 mt-4">
                    <span className="numeral text-3xl text-vermilion leading-none">
                      {String(secIdx + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display font-semibold text-3xl text-ink">{sec.title}</h2>
                  </div>
                </header>

                <div className="space-y-12">
                  {sec.blocks.map((blk, blkIdx) => (
                    <article key={blk.id}>
                      <h3 className="font-display font-semibold text-xl text-ink leading-snug mb-4 border-b border-ink pb-2">
                        {blk.heading}
                      </h3>
                      {blk.summary_md && <MarkdownBlock dropcap={blkIdx === 0 && secIdx === 0}>{blk.summary_md}</MarkdownBlock>}
                      {blk.items && blk.items.length > 0 && <ItemList items={blk.items} />}
                      {blk.takeaway && (
                        <aside className="pullquote my-6">
                          <span className="kicker block mb-2 text-vermilion-deep">关键判断 · TAKEAWAY</span>
                          {blk.takeaway}
                        </aside>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            ))}

            {/* Reddit highlights */}
            {data.reddit_highlights.length > 0 && (
              <section id="reddit" className="scroll-mt-8 mt-20 pt-8 border-t-2 border-ink">
                <header className="mb-8">
                  <div className="kicker">via BUILDERPULSE archive</div>
                  <h2 className="font-display font-semibold text-3xl text-ink mt-2">Reddit 摘录</h2>
                  <p className="font-han text-sm text-ink-mute mt-2 italic">
                    本节内容由 Reddit 段落抽取，原始材料来自 BuilderPulse 当日报告。
                  </p>
                </header>
                <div className="space-y-10">
                  {data.reddit_highlights.map((rh, i) => (
                    <article key={i} className="border-l-2 border-rule pl-5">
                      <h3 className="font-display font-semibold text-lg text-ink mb-3">{rh.heading}</h3>
                      <MarkdownBlock>{rh.body_md}</MarkdownBlock>
                      <a
                        href={rh.source_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block mt-2 font-mono text-[10px] tracking-[0.18em] text-ink-mute hover:text-vermilion"
                      >
                        BUILDERPULSE 原文 →
                      </a>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* Footer nav */}
            <footer className="mt-20 pt-7 border-t-2 border-ink">
              <DateSwitcher dates={idx.dates} current={date} basePath="/pulse" />
            </footer>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function ItemList({ items }: { items: PulseSourceItem[] }) {
  return (
    <ul className="my-5 grid gap-2 border-y border-rule-soft py-3">
      {items.map((it, i) => (
        <li key={i} className="flex items-baseline gap-3 flex-wrap font-han text-sm">
          <SourceBadge source={it.source} />
          <a
            href={it.url}
            target="_blank"
            rel="noreferrer"
            className="editorial-link text-ink-soft flex-1 min-w-0"
          >
            {it.title}
          </a>
          {typeof it.score === "number" && it.score > 0 && (
            <span className="font-mono text-xs text-ink-faint tabular-nums">{it.score}↑</span>
          )}
        </li>
      ))}
    </ul>
  );
}
