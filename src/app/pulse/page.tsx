import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { loadIndex, loadPulse } from "@/lib/data";

export const dynamic = "force-static";
export const revalidate = 600;

export default async function PulseIndexPage() {
  const idx = await loadIndex("pulse");
  const previews = await Promise.all(
    idx.dates.slice(0, 30).map(async (d) => ({ date: d, data: await loadPulse(d) }))
  );

  return (
    <>
      <SiteHeader />
      <main className="max-w-6xl mx-auto px-6 pt-10 pb-4 flex-1">
        <header className="pb-6 border-b-2 border-ink">
          <div className="kicker mb-3">DAILY EDITION INDEX</div>
          <h1 className="font-display font-semibold text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] tracking-tight text-ink">
            风向标·卷期目录
          </h1>
          <p className="font-han text-base mt-4 text-ink-mute italic max-w-2xl">
            每日综合 HN、GitHub Trending、Product Hunt、HuggingFace、Google Trends 与 Reddit 六源信号，由编辑提炼成五章节专栏。
          </p>
        </header>

        {previews.length === 0 ? (
          <p className="font-han text-ink-mute mt-10">
            尚无数据。请运行 <code className="font-mono text-xs bg-paper-soft px-1.5 py-0.5 border border-rule-soft">python scripts/fetch-pulse.py</code>
          </p>
        ) : (
          <ol className="mt-10 divide-y divide-rule">
            {previews.map(({ date, data }, i) =>
              data ? (
                <li key={date} className="py-8 first:pt-0">
                  <Link href={`/pulse/${date}`} className="group grid md:grid-cols-[120px_1fr_2fr] gap-6 items-baseline">
                    <div>
                      <div className="folio">No. {String(previews.length - i).padStart(3, "0")}</div>
                      <div className="font-display font-semibold text-3xl text-ink mt-1 group-hover:text-vermilion transition-colors">
                        {date.slice(5).replace("-", "·")}
                      </div>
                      <div className="font-mono text-[10px] text-ink-faint mt-0.5">{date.slice(0, 4)}</div>
                    </div>

                    <div>
                      {data.top3.length > 0 && (
                        <ol className="space-y-2">
                          {data.top3.map((t, j) => (
                            <li key={j} className="flex gap-2">
                              <span className="numeral text-sm text-vermilion flex-shrink-0">{j + 1}.</span>
                              <span className="font-han text-[14px] text-ink-soft leading-snug line-clamp-2">{t}</span>
                            </li>
                          ))}
                        </ol>
                      )}
                    </div>

                    {data.intro && (
                      <p className="font-han text-[14px] italic text-ink-mute leading-7 line-clamp-4">
                        — {data.intro}
                      </p>
                    )}
                  </Link>

                  <div className="mt-4 flex items-center gap-4 text-xs">
                    <span className="folio">{data.sections.filter((s) => s.blocks.length > 0).length} 章</span>
                    <span className="folio">{data.sections.flatMap((s) => s.blocks).length} 节</span>
                    <span className="folio">REDDIT × {data.reddit_highlights.length}</span>
                  </div>
                </li>
              ) : null
            )}
          </ol>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
