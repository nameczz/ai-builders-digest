import Link from "next/link";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { SourceBadge } from "@/components/SourceBadge";
import {
  loadIndex,
  loadPulse,
  loadRecentBuilders,
  loadSuggestions,
} from "@/lib/data";
import type { BuilderItem, PulseDay, BuildersDay, SuggestionsDay } from "@/types";

export const dynamic = "force-static";
export const revalidate = 600;

export default async function HomePage() {
  const [bIdx, pIdx, sIdx] = await Promise.all([
    loadIndex("builders"),
    loadIndex("pulse"),
    loadIndex("suggestions"),
  ]);
  const latestB = bIdx.latest;
  const latestP = pIdx.latest;
  const latestS = sIdx.latest;

  // Roll the last 3 days of builder content together — upstream feeds refresh
  // around 8am UTC, so today may be empty before then.
  const [builders, pulse, suggestions] = await Promise.all([
    loadRecentBuilders(3),
    latestP ? loadPulse(latestP) : Promise.resolve(null),
    latestS ? loadSuggestions(latestS) : Promise.resolve(null),
  ]);

  return (
    <>
      <SiteHeader activeDate={latestP || latestS || latestB} />
      <main className="max-w-6xl mx-auto px-6 pt-10 pb-4 flex-1">
        {/* === LEAD STORY === */}
        {pulse && pulse.top3.length > 0 && (
          <LeadStory pulse={pulse} suggestionsDate={latestS} />
        )}

        {/* === MIDDLE: feature columns === */}
        <div className="grid md:grid-cols-[1.6fr_1fr] gap-10 mt-12 pt-10 border-t border-rule">
          <FeatureColumn pulse={pulse} pulseDate={latestP} />
          <PicksColumn suggestions={suggestions} suggestionsDate={latestS} />
        </div>

        {/* === BELOW THE FOLD: builders === */}
        <div className="mt-14 pt-8 border-t-2 border-ink">
          <SectionMast number="II" title="近日传声" subtitle="ON THE WIRE · 最近 72 小时" date={latestB} />
          <BuildersStrip builders={builders} />
        </div>

        {/* === ARCHIVE === */}
        <div className="mt-14 pt-8 border-t border-ink">
          <SectionMast number="III" title="近期卷期" subtitle="THE ARCHIVE" />
          <ArchiveGrid dates={[...new Set([...pIdx.dates, ...bIdx.dates, ...sIdx.dates])].sort().reverse().slice(0, 28)} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

/* ──────────────────────────────────────────────────────── */

function LeadStory({ pulse, suggestionsDate }: { pulse: PulseDay; suggestionsDate?: string }) {
  const [lead, ...rest] = pulse.top3;
  return (
    <section className="grid md:grid-cols-[2fr_1fr] gap-10">
      {/* huge top1 */}
      <article className="ink-rise">
        <div className="kicker mb-3">号外 · TODAY'S TOP SIGNAL</div>
        <h1 className="font-display font-semibold text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05] tracking-tight text-ink">
          <Link href={`/pulse/${pulse.date}`} className="hover:text-vermilion-deep transition-colors">
            {lead}
          </Link>
        </h1>
        {pulse.intro && (
          <p className="font-han text-base mt-5 text-ink-mute leading-7 max-w-prose italic">
            — {pulse.intro}
          </p>
        )}
        <div className="mt-6 flex items-center gap-3 text-xs">
          <Link href={`/pulse/${pulse.date}`} className="font-mono tracking-[0.2em] text-vermilion border-b border-vermilion pb-0.5 hover:text-vermilion-deep">
            READ FULL EDITION →
          </Link>
          <span className="folio">PUBLISHED {pulse.date.replace(/-/g, ".")}</span>
        </div>
      </article>

      {/* runner-ups + meta sidebar */}
      <aside className="md:border-l md:pl-10 md:border-rule">
        <div className="kicker mb-4">同期值得关注</div>
        <ol className="space-y-5">
          {rest.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="numeral text-3xl text-vermilion leading-none flex-shrink-0">
                {String(i + 2).padStart(2, "0")}
              </span>
              <p className="font-han text-[15px] leading-7 text-ink-soft">{item}</p>
            </li>
          ))}
        </ol>
        {suggestionsDate && (
          <Link
            href={`/suggestions/${suggestionsDate}`}
            className="block mt-6 pt-4 border-t border-rule font-mono text-[10px] tracking-[0.2em] text-ink-mute hover:text-vermilion"
          >
            今日五条选题 EDITOR'S DESK →
          </Link>
        )}
      </aside>
    </section>
  );
}

/* ──────────────────────────────────────────────────────── */

function FeatureColumn({ pulse, pulseDate }: { pulse: PulseDay | null; pulseDate?: string }) {
  if (!pulse) return <EmptyState label="尚无 PULSE 数据" hint="python scripts/fetch-pulse.py" />;

  // Pick 2 representative blocks (first non-empty section)
  const featBlocks = pulse.sections.flatMap((s) => s.blocks.map((b) => ({ b, sec: s.title }))).slice(0, 2);

  return (
    <section>
      <SectionMast number="I" title="头条·脉动" subtitle="TODAY'S PULSE" />

      {featBlocks.map(({ b, sec }, idx) => (
        <article key={b.id} className={idx > 0 ? "mt-9 pt-7 border-t border-rule-soft" : ""}>
          <div className="smallcaps mb-2">{sec}</div>
          <h3 className="font-display font-semibold text-2xl leading-tight text-ink">
            <Link href={`/pulse/${pulse.date}#${pulse.sections.find((s) => s.title === sec)?.id ?? ""}`} className="hover:text-vermilion">
              {b.heading}
            </Link>
          </h3>
          {b.summary_md && (
            <p className="font-han text-[15px] leading-[1.78] mt-3 text-ink-soft line-clamp-4">
              {stripMd(b.summary_md)}
            </p>
          )}
          {b.takeaway && (
            <p className="mt-3 font-han text-sm text-ink-mute italic border-l-2 border-vermilion pl-3">
              <span className="kicker mr-2">关键判断</span>
              {b.takeaway}
            </p>
          )}
        </article>
      ))}

      {pulseDate && (
        <Link
          href={`/pulse/${pulseDate}`}
          className="inline-block mt-7 font-mono text-[10px] tracking-[0.22em] text-vermilion border-b border-vermilion pb-0.5"
        >
          READ ALL CHAPTERS →
        </Link>
      )}
    </section>
  );
}

/* ──────────────────────────────────────────────────────── */

function PicksColumn({ suggestions, suggestionsDate }: { suggestions: SuggestionsDay | null; suggestionsDate?: string }) {
  if (!suggestions) return <EmptyState label="尚无选题数据" hint="python scripts/generate-suggestions.py" />;

  return (
    <aside className="md:pl-8 md:border-l md:border-rule">
      <SectionMast number="·" title="编辑选题" subtitle="EDITOR'S PICKS" />

      <ol className="space-y-6">
        {suggestions.items.slice(0, 5).map((it, i) => (
          <li key={it.id} className="group">
            <div className="flex items-baseline gap-3">
              <span className="numeral text-vermilion text-lg flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Link
                href={suggestionsDate ? `/suggestions/${suggestionsDate}` : "#"}
                className="font-han font-semibold text-[15px] leading-snug text-ink group-hover:text-vermilion transition-colors"
              >
                {it.title}
              </Link>
            </div>
            {it.angle && (
              <p className="font-han text-[13px] text-ink-mute italic ml-7 mt-1.5 leading-6">{it.angle}</p>
            )}
          </li>
        ))}
      </ol>

      {suggestionsDate && (
        <Link
          href={`/suggestions/${suggestionsDate}`}
          className="inline-block mt-7 font-mono text-[10px] tracking-[0.22em] text-vermilion border-b border-vermilion pb-0.5"
        >
          ALL FIVE ANGLES →
        </Link>
      )}
    </aside>
  );
}

/* ──────────────────────────────────────────────────────── */

function BuildersStrip({ builders }: { builders: BuildersDay | null }) {
  if (!builders || builders.items.length === 0) {
    return <EmptyState label="尚无 BUILDER 发声" hint="python scripts/fetch-builders.py" />;
  }
  const grouped = {
    x: builders.items.filter((i) => i.source === "x").slice(0, 4),
    podcast: builders.items.filter((i) => i.source === "podcast").slice(0, 2),
    blog: builders.items.filter((i) => i.source === "blog").slice(0, 2),
  };
  const cols: { key: keyof typeof grouped; label: string; items: BuilderItem[] }[] = [
    { key: "x", label: "FROM X", items: grouped.x },
    { key: "podcast", label: "FROM PODCASTS", items: grouped.podcast },
    { key: "blog", label: "FROM BLOGS", items: grouped.blog },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-10">
      {cols.map((col) => (
        <div key={col.key}>
          <div className="kicker mb-4">{col.label}</div>
          {col.items.length === 0 ? (
            <p className="font-han text-sm text-ink-faint italic">本期无</p>
          ) : (
            <ul className="space-y-5">
              {col.items.map((it) => (
                <li key={it.id}>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-display font-semibold text-ink text-[15px]">{it.author}</span>
                    {it.bio && <span className="text-[10px] font-han text-ink-faint">— {it.bio.slice(0, 40)}</span>}
                  </div>
                  <p className="font-han text-[14px] leading-[1.7] text-ink-soft line-clamp-3">
                    {it.summary_zh || it.summary_en?.slice(0, 180) || it.title}
                  </p>
                  {it.url && (
                    <a
                      href={it.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-1 text-[10px] font-mono tracking-[0.18em] text-ink-mute hover:text-vermilion"
                    >
                      → 原文
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <div className="md:col-span-3 mt-2">
        <Link
          href="/builders"
          className="inline-block font-mono text-[10px] tracking-[0.22em] text-vermilion border-b border-vermilion pb-0.5"
        >
          ALL BUILDERS · 按日期与源筛选 →
        </Link>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────── */

function ArchiveGrid({ dates }: { dates: string[] }) {
  if (dates.length === 0) {
    return <p className="font-han text-sm text-ink-faint italic">还没有归档卷期</p>;
  }
  return (
    <div className="grid grid-cols-4 sm:grid-cols-7 md:grid-cols-9 gap-2">
      {dates.map((d) => (
        <Link
          key={d}
          href={`/pulse/${d}`}
          className="group block border border-rule-soft hover:border-vermilion px-3 py-3 text-center transition-colors"
        >
          <div className="font-mono text-[10px] text-ink-faint group-hover:text-vermilion">
            {d.slice(0, 4)}
          </div>
          <div className="font-display text-base font-semibold text-ink group-hover:text-vermilion mt-0.5">
            {d.slice(5).replace("-", "·")}
          </div>
        </Link>
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────────────── */

function SectionMast({
  number,
  title,
  subtitle,
  date,
}: {
  number: string;
  title: string;
  subtitle: string;
  date?: string;
}) {
  return (
    <header className="mb-7">
      <div className="flex items-baseline gap-4">
        <span className="numeral text-2xl text-vermilion">{number}</span>
        <h2 className="font-display font-semibold text-ink text-2xl">{title}</h2>
        <span className="kicker">{subtitle}</span>
        {date && <span className="folio ml-auto">{date.replace(/-/g, ".")}</span>}
      </div>
    </header>
  );
}

function EmptyState({ label, hint }: { label: string; hint: string }) {
  return (
    <div className="border border-dashed border-rule p-6 text-center">
      <p className="font-han text-ink-mute">{label}</p>
      <code className="inline-block mt-2 font-mono text-xs bg-paper-soft text-ink px-2 py-1 border border-rule-soft">
        {hint}
      </code>
    </div>
  );
}

function stripMd(s: string): string {
  return s.replace(/!?\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[*_`]/g, "");
}
