import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { loadIndex, loadNewsletters } from "@/lib/data";

export const dynamic = "force-static";
export const revalidate = 600;

export default async function NewslettersIndexPage() {
  const idx = await loadIndex("newsletters");
  const previews = await Promise.all(
    idx.dates.slice(0, 30).map(async (d) => ({ date: d, data: await loadNewsletters(d) }))
  );

  return (
    <>
      <SiteHeader />
      <main className="max-w-6xl mx-auto px-6 pt-10 pb-4 flex-1">
        <header className="pb-6 border-b-2 border-ink">
          <div className="kicker mb-3">AGENTMAIL BRIEFING · 邮件来报</div>
          <h1 className="font-display font-semibold text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] tracking-tight text-ink">
            AI Newsletter 日报
          </h1>
          <p className="font-han text-base mt-4 text-ink-mute italic max-w-2xl">
            从 AgentMail 订阅邮箱每天只挑一篇最值得认真看的 AI newsletter，整理成中文精读摘要。
          </p>
        </header>

        {previews.length === 0 ? (
          <p className="font-han text-ink-mute mt-10">
            尚无数据。请配置 <code className="font-mono text-xs bg-paper-soft px-1.5 py-0.5 border border-rule-soft">AGENTMAIL_API_KEY</code> 后运行{" "}
            <code className="font-mono text-xs bg-paper-soft px-1.5 py-0.5 border border-rule-soft">python scripts/fetch-newsletters.py</code>
          </p>
        ) : (
          <ol className="mt-10 divide-y divide-rule">
            {previews.map(({ date, data }, i) =>
              data ? (
                <li key={date} className="py-8 first:pt-0">
                  <Link href={`/newsletters/${date}`} className="group grid md:grid-cols-[90px_minmax(0,1.2fr)_minmax(0,1fr)] gap-6 items-baseline min-w-0">
                    <div>
                      <div className="folio">No. {String(previews.length - i).padStart(3, "0")}</div>
                      <div className="font-display font-semibold text-3xl text-ink mt-1 group-hover:text-vermilion transition-colors">
                        {date.slice(5).replace("-", "·")}
                      </div>
                      <div className="font-mono text-[10px] text-ink-faint mt-0.5">{date.slice(0, 4)}</div>
                    </div>

                    <div>
                      {data.items[0] ? (
                        <div className="min-w-0">
                          <div className="kicker mb-2">今日精读</div>
                          <h2 className="font-han text-[16px] leading-snug text-ink-soft group-hover:text-vermilion break-words">
                            {data.items[0].title_zh}
                          </h2>
                        </div>
                      ) : data.highlights.length > 0 && (
                        <ol className="space-y-2">
                          {data.highlights.slice(0, 1).map((t, j) => (
                            <li key={j} className="flex gap-2">
                              <span className="numeral text-sm text-vermilion flex-shrink-0">{j + 1}.</span>
                              <span className="font-han text-[14px] text-ink-soft leading-snug line-clamp-2">{t}</span>
                            </li>
                          ))}
                        </ol>
                      )}
                    </div>

                    <p className="font-han text-[14px] italic text-ink-mute leading-7 line-clamp-4">
                      {data.items[0]
                        ? `来自 ${data.items[0].source} · ${data.items[0].importance.toUpperCase()} · 点击进入精读`
                        : "今天没有可精读的正式 newsletter。"}
                    </p>
                  </Link>

                  <div className="mt-4 flex items-center gap-4 text-xs">
                    <span className="folio">{data.items.length > 0 ? "1 PICK" : "NO PICK"}</span>
                    {data.skipped && <span className="folio">SKIPPED × {data.skipped.length}</span>}
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
