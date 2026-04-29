import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { loadIndex, loadSuggestions } from "@/lib/data";

export const dynamic = "force-static";
export const revalidate = 600;

export default async function SuggestionsIndexPage() {
  const idx = await loadIndex("suggestions");
  const previews = await Promise.all(
    idx.dates.slice(0, 30).map(async (d) => ({ date: d, data: await loadSuggestions(d) }))
  );

  return (
    <>
      <SiteHeader />
      <main className="max-w-6xl mx-auto px-6 pt-10 pb-4 flex-1">
        <header className="pb-6 border-b-2 border-ink">
          <div className="kicker mb-3">EDITOR&apos;S DESK · 选题档案</div>
          <h1 className="font-display font-semibold text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] tracking-tight text-ink">
            每日博主选题
          </h1>
          <p className="font-han text-base mt-4 text-ink-mute italic max-w-2xl">
            基于当日 builders 与 pulse 两条数据线，由编辑写出 5 条可直接开稿的中文选题角度。
          </p>
        </header>

        {previews.length === 0 ? (
          <p className="font-han text-ink-mute mt-10">
            尚无数据。请运行 <code className="font-mono text-xs bg-paper-soft px-1.5 py-0.5 border border-rule-soft">python scripts/generate-suggestions.py</code>
          </p>
        ) : (
          <ol className="mt-10 space-y-12">
            {previews.map(({ date, data }, i) =>
              data ? (
                <li key={date} className="ink-rise">
                  <header className="flex items-baseline gap-4 mb-5 pb-3 border-b border-ink">
                    <span className="folio">No. {String(previews.length - i).padStart(3, "0")}</span>
                    <Link href={`/suggestions/${date}`} className="font-display font-semibold text-2xl text-ink hover:text-vermilion">
                      {date.replace(/-/g, ".")} 编辑选题
                    </Link>
                    <span className="folio ml-auto">{data.items.length} 条</span>
                  </header>
                  <ol className="grid md:grid-cols-2 gap-x-10 gap-y-4">
                    {data.items.map((s, j) => (
                      <li key={s.id} className="group">
                        <Link href={`/suggestions/${date}`} className="flex items-baseline gap-3">
                          <span className="numeral text-vermilion text-base flex-shrink-0">
                            {String(j + 1).padStart(2, "0")}
                          </span>
                          <span className="font-han text-[15px] leading-snug text-ink-soft group-hover:text-vermilion">
                            {s.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ol>
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
