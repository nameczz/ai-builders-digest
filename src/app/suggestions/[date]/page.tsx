import { notFound } from "next/navigation";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { DateSwitcher } from "@/components/DateSwitcher";
import { loadIndex, loadSuggestions } from "@/lib/data";
import type { SuggestionRef } from "@/types";

export const dynamic = "force-static";
export const revalidate = 600;

export async function generateStaticParams() {
  const idx = await loadIndex("suggestions");
  return idx.dates.map((date) => ({ date }));
}

export default async function SuggestionDetailPage({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;
  const data = await loadSuggestions(date);
  if (!data) notFound();
  const idx = await loadIndex("suggestions");

  return (
    <>
      <SiteHeader activeDate={date} />
      <main className="max-w-3xl mx-auto px-6 pt-10 pb-4 flex-1">
        <header className="pb-6 border-b-2 border-ink">
          <div className="flex items-baseline gap-3 mb-3">
            <span className="kicker">EDITOR'S DESK</span>
            <span className="folio">第 {date.replace(/-/g, ".")} 期</span>
          </div>
          <h1 className="font-display font-semibold text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] tracking-tight text-ink">
            五条角度
          </h1>
          <p className="font-han text-base mt-4 text-ink-mute italic">
            选题来自当日 builders 与 pulse 两条数据线，可直接作为公众号开稿起点。
          </p>
          <div className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <DateSwitcher dates={idx.dates} current={date} basePath="/suggestions" />
            <span className="folio">model · {data.model}</span>
            {data.generated_at && <span className="folio">generated · {data.generated_at.slice(0, 16)}</span>}
          </div>
        </header>

        {data.notes && (
          <aside className="my-8 border-l-2 border-vermilion pl-5 py-2 font-han text-sm text-ink-mute italic leading-7">
            <span className="kicker block mb-1 text-vermilion-deep">编辑手记</span>
            {data.notes}
          </aside>
        )}

        <ol className="mt-10 space-y-16">
          {data.items.map((it, i) => (
            <li key={it.id} className="ink-rise">
              <article>
                <header className="mb-5">
                  <div className="flex items-baseline gap-4">
                    <span className="numeral text-vermilion text-5xl leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display font-semibold text-[clamp(1.4rem,3vw,2rem)] leading-[1.15] text-ink">
                      {it.title}
                    </h2>
                  </div>
                  {it.angle && (
                    <p className="font-han text-sm italic text-ink-mute mt-3 ml-[3.7rem] leading-7">
                      <span className="kicker mr-2">角度</span>
                      {it.angle}
                    </p>
                  )}
                </header>

                <div className="ml-[3.7rem] space-y-6">
                  {it.opening && (
                    <Field label="开篇示范">
                      <p className="font-han text-[16px] leading-[1.85] text-ink-soft whitespace-pre-wrap dropcap">
                        {it.opening}
                      </p>
                    </Field>
                  )}

                  {(it.story_hook?.challenge || it.story_hook?.twist) && (
                    <Field label="故事钩子">
                      <div className="grid md:grid-cols-2 gap-px bg-ink border-y border-ink">
                        {it.story_hook.challenge && (
                          <div className="bg-paper p-4">
                            <span className="kicker block mb-2">冲突</span>
                            <p className="font-han text-sm leading-7 text-ink-soft">{it.story_hook.challenge}</p>
                          </div>
                        )}
                        {it.story_hook.twist && (
                          <div className="bg-paper p-4">
                            <span className="kicker block mb-2 text-vermilion-deep">转折</span>
                            <p className="font-han text-sm leading-7 text-ink-soft">{it.story_hook.twist}</p>
                          </div>
                        )}
                      </div>
                    </Field>
                  )}

                  {it.takeaway && (
                    <Field label="读者带走">
                      <p className="pullquote">{it.takeaway}</p>
                    </Field>
                  )}

                  {it.refs.length > 0 && (
                    <Field label="信源 · References">
                      <ul className="space-y-1.5 text-sm border-t border-rule-soft pt-3">
                        {it.refs.map((r, j) => (
                          <RefLink key={j} r={r} idx={j} />
                        ))}
                      </ul>
                    </Field>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ol>

        <footer className="mt-20 pt-6 border-t-2 border-ink">
          <DateSwitcher dates={idx.dates} current={date} basePath="/suggestions" />
        </footer>
      </main>
      <SiteFooter />
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="kicker mb-2">{label}</div>
      {children}
    </div>
  );
}

function RefLink({ r, idx }: { r: SuggestionRef; idx: number }) {
  return (
    <li className="flex items-baseline gap-3 font-han">
      <span className="font-mono text-[10px] text-ink-faint tabular-nums flex-shrink-0">
        [{String(idx + 1).padStart(2, "0")}]
      </span>
      <span
        className={`font-mono text-[9px] tracking-wider uppercase px-1.5 py-px border flex-shrink-0 ${
          r.tag === "builders" ? "border-ink text-ink" : "border-vermilion text-vermilion"
        }`}
      >
        {r.tag}
      </span>
      {r.url ? (
        <a href={r.url} target="_blank" rel="noreferrer" className="editorial-link text-[14px] text-ink-soft">
          {r.ref}
        </a>
      ) : (
        <span className="text-[14px] text-ink-soft">{r.ref}</span>
      )}
    </li>
  );
}
