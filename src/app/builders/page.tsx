import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { SourceBadge } from "@/components/SourceBadge";
import { loadBuilders, loadIndex } from "@/lib/data";
import type { BuilderSource } from "@/types";

export const dynamic = "force-static";
export const revalidate = 600;

const SOURCES: { key: BuilderSource; label: string; cn: string }[] = [
  { key: "x", label: "X", cn: "微博体" },
  { key: "podcast", label: "PODCAST", cn: "声音节选" },
  { key: "blog", label: "BLOG", cn: "长文" },
];

export default async function BuildersPage({
  searchParams,
}: {
  searchParams: Promise<{ date?: string; source?: string }>;
}) {
  const { date, source } = await searchParams;
  const idx = await loadIndex("builders");
  const target = date && idx.dates.includes(date) ? date : idx.latest;
  const data = target ? await loadBuilders(target) : null;
  const activeSource: BuilderSource | "all" =
    source === "x" || source === "podcast" || source === "blog" ? source : "all";
  const items =
    data?.items.filter((it) => activeSource === "all" || it.source === activeSource) ?? [];

  return (
    <>
      <SiteHeader activeDate={target} />
      <main className="max-w-6xl mx-auto px-6 pt-10 pb-4 flex-1">
        {/* Title */}
        <header className="grid md:grid-cols-[2fr_1fr] gap-8 items-end pb-6 border-b-2 border-ink">
          <div>
            <div className="kicker mb-3">FROM THE BUILDERS · 个人传声栏</div>
            <h1 className="font-display font-semibold text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] tracking-tight text-ink">
              传声·当日
            </h1>
            <p className="font-han text-base mt-4 text-ink-mute italic max-w-xl">
              来自 follow-builders 中央 feed —— 真正在做事的人在 X、播客、博客上的发声。
            </p>
          </div>
          <div className="md:text-right">
            <span className="folio">{target ? target.replace(/-/g, ".") : "未刊"}</span>
            <p className="font-han text-sm text-ink-mute mt-2">
              本期 <span className="font-mono text-ink">{items.length}</span> 条传声
            </p>
          </div>
        </header>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-y-4 pb-6 border-b border-rule">
          <div className="flex items-center gap-1 text-xs">
            <span className="kicker mr-2">声源</span>
            <FilterChip href={`/builders${target ? `?date=${target}` : ""}`} active={activeSource === "all"} label="全部" />
            {SOURCES.map((s) => (
              <FilterChip
                key={s.key}
                href={`/builders?date=${target ?? ""}&source=${s.key}`}
                active={activeSource === s.key}
                label={`${s.label} · ${s.cn}`}
              />
            ))}
          </div>
          {target && idx.dates.length > 1 && (
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="kicker mr-2">卷期</span>
              {idx.dates.slice(0, 10).map((d) => {
                const url = `/builders?date=${d}${activeSource !== "all" ? `&source=${activeSource}` : ""}`;
                const active = d === target;
                return (
                  <Link
                    key={d}
                    href={url}
                    className={`font-mono text-[10px] tracking-wider px-1.5 py-0.5 ${
                      active ? "bg-ink text-paper" : "text-ink-mute hover:text-vermilion"
                    }`}
                  >
                    {d.slice(5).replace("-", ".")}
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Body */}
        {!data ? (
          <p className="mt-10 font-han text-ink-mute">
            尚无数据。请运行 <code className="font-mono text-xs bg-paper-soft px-1.5 py-0.5 border border-rule-soft">python scripts/fetch-builders.py</code>
          </p>
        ) : items.length === 0 ? (
          <p className="mt-10 font-han text-ink-faint italic">该筛选下没有条目。</p>
        ) : (
          <div className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-10">
            {items.map((it) => (
              <article key={it.id} className="ink-rise">
                <header className="flex items-baseline gap-2 flex-wrap mb-3 pb-2 border-b border-rule-soft">
                  <SourceBadge source={it.source} />
                  <span className="font-display font-semibold text-ink text-lg">{it.author}</span>
                  {it.bio && <span className="font-han text-[11px] text-ink-faint italic">— {it.bio}</span>}
                  {it.posted_at && (
                    <span className="folio ml-auto">{it.posted_at.slice(11, 16)} UTC</span>
                  )}
                </header>

                {it.title && (
                  <h2 className="font-display font-semibold text-xl text-ink mb-3 leading-snug">
                    <a href={it.url} target="_blank" rel="noreferrer" className="hover:text-vermilion">
                      {it.title}
                    </a>
                  </h2>
                )}

                {it.summary_zh ? (
                  <p className="font-han text-[15px] leading-[1.78] text-ink-soft">{it.summary_zh}</p>
                ) : it.summary_en ? (
                  <p className="font-han text-[14px] leading-[1.7] text-ink-soft italic">
                    {it.summary_en.slice(0, 320)}
                    {it.summary_en.length > 320 && "…"}
                  </p>
                ) : null}

                {it.summary_zh && it.summary_en && (
                  <details className="mt-3 text-sm">
                    <summary className="font-mono text-[10px] tracking-wider text-ink-mute cursor-pointer hover:text-vermilion">
                      ORIGINAL TEXT
                    </summary>
                    <p className="font-mono text-[12px] text-ink-mute mt-2 whitespace-pre-wrap leading-6">
                      {it.summary_en}
                    </p>
                  </details>
                )}

                <a
                  href={it.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 font-mono text-[10px] tracking-[0.2em] text-vermilion border-b border-vermilion pb-0.5"
                >
                  → 跳转原文
                </a>
              </article>
            ))}
          </div>
        )}
      </main>
      <SiteFooter />
    </>
  );
}

function FilterChip({ href, active, label }: { href: string; active: boolean; label: string }) {
  return (
    <Link
      href={href}
      className={`font-mono tracking-[0.15em] uppercase text-[10px] px-2 py-1 border ${
        active
          ? "bg-ink text-paper border-ink"
          : "border-rule text-ink-mute hover:border-vermilion hover:text-vermilion"
      }`}
    >
      {label}
    </Link>
  );
}
