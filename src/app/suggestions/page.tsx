"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import type {
  Language, SuggestionItem, SuggestionDay, SuggestionSource,
  HkrRating, WritingArchetype, AnchorType,
} from "@/types";

type ItemWithDate = SuggestionItem & { date: string };

function formatDateShort(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return `${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
}
function formatDateLong(dateStr: string, lang: Language): string {
  const d = new Date(dateStr + "T00:00:00");
  if (lang === "zh") return `${d.getFullYear()} 年 ${d.getMonth() + 1} 月 ${d.getDate()} 日`;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

const ARCHETYPE_LABEL: Record<WritingArchetype, { zh: string; en: string }> = {
  "调查实验型": { zh: "调查实验", en: "Investigation" },
  "产品体验型": { zh: "产品体验", en: "Product Hands-on" },
  "现象解读型": { zh: "现象解读", en: "Phenomenon" },
  "工具分享型": { zh: "工具分享", en: "Tool Share" },
};
const ANCHOR_LABEL: Record<AnchorType, { zh: string; en: string }> = {
  "热点": { zh: "热点", en: "Trending" },
  "痛点": { zh: "痛点", en: "Pain point" },
  "炫技": { zh: "炫技", en: "Showcase" },
};

/* ─── grade cluster (left rail) ─── */

function GradeRail({ item, index, lang }: { item: ItemWithDate; index: number; lang: Language }) {
  const g = item.hkr.grade;
  const gradeColor = g === "S" ? "var(--terracotta)" : g === "A" ? "var(--near-black)" : "var(--stone-gray)";
  return (
    <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-0">
      <div className="flex items-baseline gap-2 md:block">
        <span
          className="font-serif-heading leading-none"
          style={{ fontSize: "3.75rem", color: gradeColor, letterSpacing: "-0.04em" }}
        >
          {g}
        </span>
        <span className="block font-mono text-[11px] tabular-nums mt-1" style={{ color: "var(--stone-gray)" }}>
          {item.hkr.total}/9
        </span>
      </div>

      <span
        className="font-mono text-[10px] tabular-nums uppercase tracking-[0.18em] md:mt-6"
        style={{ color: "var(--stone-gray)" }}
      >
        {lang === "zh" ? "选题" : "Pick"} {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

/* ─── HKR triplet (inline compact) ─── */

function HkrTriplet({ hkr }: { hkr: HkrRating }) {
  const rows = [
    { k: "H", label: "Happy", score: hkr.happy.score, why: hkr.happy.why },
    { k: "K", label: "Knowledge", score: hkr.knowledge.score, why: hkr.knowledge.why },
    { k: "R", label: "Resonance", score: hkr.resonance.score, why: hkr.resonance.why },
  ];
  return (
    <dl className="text-[12.5px] leading-[1.7] space-y-1.5">
      {rows.map((r) => (
        <div key={r.k} className="grid grid-cols-[auto_auto_1fr] gap-x-2.5 items-baseline">
          <dt
            className="font-mono text-[11px] tabular-nums uppercase tracking-[0.1em]"
            style={{ color: "var(--terracotta)" }}
          >
            {r.k}·{r.label}
          </dt>
          <span className="font-mono tabular-nums text-[11px]" style={{ color: "var(--charcoal)" }}>
            {"●".repeat(r.score)}{"○".repeat(3 - r.score)}
          </span>
          <dd style={{ color: "var(--olive-gray)" }}>{r.why}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ─── source chip ─── */

function SourceChip({ source, lang }: { source: SuggestionSource; lang: Language }) {
  const label = source.tag === "builderpulse" ? "BP" : "FB";
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group/chip inline-flex items-baseline gap-2 text-[12px] leading-[1.4] transition-colors"
      style={{ color: "var(--olive-gray)" }}
      title={lang === "zh" ? "打开原文" : "Open source"}
    >
      <span
        className="font-mono text-[10px] tabular-nums uppercase tracking-[0.15em] px-1.5 py-[1px] rounded-[3px]"
        style={{ background: "var(--warm-sand)", color: "var(--charcoal)" }}
      >
        {label}
      </span>
      <span className="group-hover/chip:text-[var(--terracotta)] transition-colors">{source.ref}</span>
      <span
        className="opacity-0 group-hover/chip:opacity-100 transition-opacity"
        style={{ color: "var(--terracotta)" }}
      >
        ↗
      </span>
    </a>
  );
}

/* ─── brief ─── */

function Brief({ item, index, lang }: { item: ItemWithDate; index: number; lang: Language }) {
  const [hkrOpen, setHkrOpen] = useState(false);

  return (
    <article
      className="brief-animate group relative py-12 md:py-16"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      {/* Left indicator rail on hover */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-500 origin-top scale-y-0 group-hover:scale-y-100"
        style={{ background: "var(--terracotta)" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-8 md:gap-12">
        {/* Left rail */}
        <aside className="md:sticky md:top-[84px] md:self-start">
          <GradeRail item={item} index={index} lang={lang} />
        </aside>

        {/* Main body */}
        <div className="max-w-[640px]">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 mb-5 font-mono text-[10.5px] uppercase tracking-[0.18em]"
            style={{ color: "var(--stone-gray)" }}
          >
            <span className="tabular-nums">{formatDateShort(item.date)}</span>
            <span style={{ color: "var(--warm-silver)" }}>·</span>
            <span>{ARCHETYPE_LABEL[item.writing_archetype][lang]}</span>
            <span style={{ color: "var(--warm-silver)" }}>·</span>
            <span style={{ color: "var(--terracotta)" }}>{ANCHOR_LABEL[item.anchor.type][lang]}</span>
          </div>

          {/* Title */}
          <h3
            className="font-serif-heading mb-5 transition-colors group-hover:text-[var(--terracotta)]"
            style={{
              fontSize: "clamp(1.5rem, 2.4vw, 1.85rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              color: "var(--near-black)",
            }}
          >
            {item.title}
          </h3>

          {/* Lede: timeliness + angle */}
          <p
            className="mb-8 font-serif-heading"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "17px",
              lineHeight: 1.6,
              color: "var(--olive-gray)",
            }}
          >
            {item.intersection.timeliness} — {item.angle}
          </p>

          {/* Opening pull-quote */}
          <blockquote className="relative pl-6 my-8">
            <span
              aria-hidden
              className="absolute left-0 top-[-0.2em] font-serif-heading"
              style={{ fontSize: "2.2rem", color: "var(--terracotta)", lineHeight: 1 }}
            >
              “
            </span>
            <p
              className="font-serif-heading"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: 400,
                fontSize: "19px",
                lineHeight: 1.55,
                color: "var(--near-black)",
              }}
            >
              {item.opening}
            </p>
          </blockquote>

          {/* Intersection + Story hook: two-column ledger */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10 my-8 text-[13px]">
            <LedgerRow label={lang === "zh" ? "专业视角" : "Expertise"} value={item.intersection.expertise} />
            <LedgerRow label={lang === "zh" ? "读者在意" : "Reader cares"} value={item.intersection.reader_interest} />
            <LedgerRow label={lang === "zh" ? "挑战" : "Challenge"} value={item.story_hook.challenge} accent />
            <LedgerRow label={lang === "zh" ? "脑洞" : "Twist"} value={item.story_hook.twist} accent />
          </div>

          {/* Anchor callout */}
          <p
            className="mb-8 text-[12.5px] leading-[1.6] flex gap-3"
            style={{ color: "var(--stone-gray)" }}
          >
            <span
              className="font-mono text-[10px] uppercase tracking-[0.15em] shrink-0 pt-[3px]"
              style={{ color: "var(--terracotta)" }}
            >
              {lang === "zh" ? "今日锚点" : "Anchor"}
            </span>
            <span>{item.anchor.hook_ref}</span>
          </p>

          {/* Takeaway */}
          <div className="my-8 -ml-6 pl-6 border-l-[3px]" style={{ borderColor: "var(--terracotta)" }}>
            <span
              className="block font-mono text-[10px] uppercase tracking-[0.18em] mb-1.5"
              style={{ color: "var(--terracotta)" }}
            >
              Takeaway
            </span>
            <p className="text-[15px] leading-[1.7] m-0" style={{ color: "var(--near-black)" }}>
              {item.takeaway}
            </p>
          </div>

          {/* Sources */}
          <div className="mt-10 pt-5 border-t flex flex-col gap-2" style={{ borderColor: "var(--border-cream)" }}>
            <span
              className="font-mono text-[10px] uppercase tracking-[0.18em] mb-1"
              style={{ color: "var(--stone-gray)" }}
            >
              {lang === "zh" ? "来源" : "Sources"}
            </span>
            {item.sources.map((s, i) => (
              <SourceChip key={i} source={s} lang={lang} />
            ))}
          </div>

          {/* HKR toggle */}
          <button
            onClick={() => setHkrOpen((v) => !v)}
            className="mt-6 font-mono text-[10.5px] uppercase tracking-[0.18em] transition-colors"
            style={{ color: hkrOpen ? "var(--terracotta)" : "var(--stone-gray)" }}
          >
            {hkrOpen
              ? (lang === "zh" ? "— 收起 HKR 评分" : "— Collapse HKR")
              : (lang === "zh" ? "+ 展开 HKR 评分" : "+ Expand HKR")}
          </button>
          {hkrOpen && (
            <div
              className="mt-4 p-5 rounded-[6px]"
              style={{ background: "var(--ivory)", border: "1px solid var(--border-cream)" }}
            >
              <HkrTriplet hkr={item.hkr} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function LedgerRow({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="flex flex-col gap-1">
      <span
        className="font-mono text-[10px] uppercase tracking-[0.2em]"
        style={{ color: accent ? "var(--terracotta)" : "var(--stone-gray)" }}
      >
        {label}
      </span>
      <span className="text-[13.5px] leading-[1.65]" style={{ color: "var(--near-black)" }}>
        {value}
      </span>
    </div>
  );
}

/* ─── day section ─── */

function DaySection({ date, items, lang, startIndex }: {
  date: string; items: ItemWithDate[]; lang: Language; startIndex: number;
}) {
  return (
    <section className="relative">
      <header className="sticky top-[52px] z-30 -mx-6 px-6 py-3 backdrop-blur-md"
        style={{ background: "rgba(245,244,237,0.85)", borderBottom: "1px solid var(--border-cream)" }}>
        <div className="flex items-baseline gap-4">
          <span
            className="font-mono text-[11px] uppercase tracking-[0.25em]"
            style={{ color: "var(--stone-gray)" }}
          >
            {lang === "zh" ? "编辑简报" : "Editor's brief"}
          </span>
          <h2
            className="font-serif-heading"
            style={{ fontSize: "15px", color: "var(--near-black)" }}
          >
            {formatDateLong(date, lang)}
          </h2>
          <span className="ml-auto font-mono text-[10.5px] tabular-nums" style={{ color: "var(--stone-gray)" }}>
            {items.length} {lang === "zh" ? "条" : "picks"}
          </span>
        </div>
      </header>

      <div className="divide-y" style={{ borderColor: "var(--border-cream)" }}>
        {items.map((item, i) => (
          <Brief key={item.id} item={item} index={startIndex + i} lang={lang} />
        ))}
      </div>
    </section>
  );
}

/* ─── main ─── */

export default function SuggestionsPage() {
  const INITIAL_DAYS = 7;
  const LOAD_MORE_DAYS = 7;

  const [items, setItems] = useState<ItemWithDate[]>([]);
  const [lang, setLang] = useState<Language>("zh");
  const [selectedDate, setSelectedDate] = useState("");
  const [allDates, setAllDates] = useState<string[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadDays = useCallback(async (dates: string[]): Promise<ItemWithDate[]> => {
    const results = await Promise.all(
      dates.map(async (date) => {
        try {
          const res = await fetch(`/suggestions/${date}.json`);
          if (!res.ok) return [] as ItemWithDate[];
          const data: SuggestionDay = await res.json();
          return (data.items || []).map((it) => ({ ...it, date }));
        } catch { return [] as ItemWithDate[]; }
      })
    );
    return results.flat();
  }, []);

  useEffect(() => {
    async function init() {
      try {
        const res = await fetch("/suggestions/index.json");
        if (!res.ok) throw new Error("no index");
        const idx: { dates: string[] } = await res.json();
        const dates = idx.dates.sort((a, b) => b.localeCompare(a));
        setAllDates(dates);
        const batch = dates.slice(0, INITIAL_DAYS);
        if (batch.length > 0) {
          const newItems = await loadDays(batch);
          setItems(newItems);
          setLoadedCount(batch.length);
          setHasMore(dates.length > batch.length);
        } else { setHasMore(false); }
      } catch { setHasMore(false); }
      setLoading(false);
    }
    init();
  }, [loadDays]);

  const loadOlderDays = useCallback(async () => {
    if (loadingMore || !hasMore || loadedCount >= allDates.length) return;
    setLoadingMore(true);
    const batch = allDates.slice(loadedCount, loadedCount + LOAD_MORE_DAYS);
    const newItems = await loadDays(batch);
    if (newItems.length > 0) setItems((prev) => [...prev, ...newItems]);
    const nc = loadedCount + batch.length;
    setLoadedCount(nc);
    setHasMore(nc < allDates.length);
    setLoadingMore(false);
  }, [loadingMore, hasMore, loadedCount, allDates, loadDays]);

  const filtered = useMemo(() => items.filter((item) => {
    if (selectedDate && item.date !== selectedDate) return false;
    return true;
  }), [items, selectedDate]);

  const groupedByDate = useMemo(() => {
    const groups: Record<string, ItemWithDate[]> = {};
    for (const it of filtered) {
      if (!groups[it.date]) groups[it.date] = [];
      groups[it.date].push(it);
    }
    return Object.entries(groups).sort(([a], [b]) => b.localeCompare(a));
  }, [filtered]);

  return (
    <div className="min-h-screen" style={{ background: "var(--parchment)" }}>
      <style>{`
        @keyframes briefIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .brief-animate {
          opacity: 0;
          animation: briefIn 0.7s cubic-bezier(0.2, 0.9, 0.3, 1) forwards;
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md border-b"
        style={{ background: "rgba(245,244,237,0.85)", borderColor: "var(--border-cream)" }}>
        <div className="max-w-[960px] mx-auto px-6 h-[52px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-7 h-7 rounded-[8px] flex items-center justify-center"
                style={{ background: "var(--terracotta)" }}>
                <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                  <path d="M3 6L9 3L15 6V12L9 15L3 12V6Z" stroke="var(--ivory)" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M9 3V15" stroke="var(--ivory)" strokeWidth="1.5"/>
                  <path d="M3 6L9 9L15 6" stroke="var(--ivory)" strokeWidth="1.5"/>
                </svg>
              </div>
              <h1
                className="font-serif-heading text-[16px] tracking-[-0.01em] group-hover:text-[var(--terracotta)] transition-colors"
                style={{ color: "var(--near-black)" }}
              >
                AI Builders Digest
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="/daily-builder-report"
              className="text-[13px] transition-colors"
              style={{ color: "var(--stone-gray)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--terracotta)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--stone-gray)")}
            >
              {lang === "zh" ? "每日情报" : "Daily Report"}
            </Link>
            <button
              onClick={() => setLang((l) => (l === "zh" ? "en" : "zh"))}
              className="text-[13px] transition-colors"
              style={{ color: "var(--stone-gray)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--terracotta)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--stone-gray)")}
            >
              {lang === "zh" ? "EN" : "中文"}
            </button>
          </div>
        </div>
      </header>

      {/* Masthead */}
      <div className="max-w-[960px] mx-auto px-6 pt-16 pb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-[1px] flex-1" style={{ background: "var(--terracotta)" }} />
          <span className="font-mono text-[10.5px] uppercase tracking-[0.35em]" style={{ color: "var(--terracotta)" }}>
            Editor&apos;s Desk · Vol.1
          </span>
          <div className="h-[1px] flex-1" style={{ background: "var(--terracotta)" }} />
        </div>

        <h2
          className="font-serif-heading text-center mb-6"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            color: "var(--near-black)",
          }}
        >
          {lang === "zh" ? (
            <>博主选题<span style={{ color: "var(--terracotta)" }}>·</span>编辑简报</>
          ) : (
            <>Blogger&apos;s <em style={{ color: "var(--terracotta)", fontStyle: "italic" }}>Briefing</em></>
          )}
        </h2>

        <p
          className="text-center max-w-[560px] mx-auto mb-8"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontStyle: "italic",
            fontSize: "17px",
            lineHeight: 1.65,
            color: "var(--olive-gray)",
          }}
        >
          {lang === "zh"
            ? "从 BuilderPulse 与 follow-builders 两份日报里，为公众号「碳基生物爱AI」主编筛出 1–3 个 S/A 级选题。"
            : "1–3 S/A-grade picks curated daily from BuilderPulse and follow-builders for Chinese AI bloggers."}
        </p>

        {/* Methodology strip */}
        <div
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[10.5px] uppercase tracking-[0.2em]"
          style={{ color: "var(--stone-gray)" }}
        >
          <span>
            {lang === "zh" ? "交集" : "Intersection"}{" "}
            <span style={{ color: "var(--near-black)" }}>
              {lang === "zh" ? "专业 × 读者 × 时效" : "Expertise × Reader × Timeliness"}
            </span>
          </span>
          <span style={{ color: "var(--warm-silver)" }}>·</span>
          <span>
            HKR{" "}
            <span style={{ color: "var(--near-black)" }}>Happy + Knowledge + Resonance</span>
          </span>
        </div>

        {/* Date filter */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="font-mono text-[12px] tabular-nums px-3 py-[5px] rounded-[6px] transition-colors focus:outline-none"
            style={{
              background: "transparent",
              border: "1px solid var(--border-warm)",
              color: "var(--charcoal)",
            }}
          />
          {selectedDate && (
            <button
              onClick={() => setSelectedDate("")}
              className="font-mono text-[10.5px] uppercase tracking-[0.18em] transition-colors"
              style={{ color: "var(--stone-gray)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--terracotta)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--stone-gray)")}
            >
              {lang === "zh" ? "重置" : "Reset"}
            </button>
          )}
          <span className="font-mono text-[11px] tabular-nums" style={{ color: "var(--stone-gray)" }}>
            {filtered.length} {lang === "zh" ? "条" : "picks"}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[960px] mx-auto px-6">
        <div className="h-[1px]" style={{ background: "var(--border-warm)" }} />
      </div>

      {/* Briefs */}
      <main className="max-w-[960px] mx-auto px-6 pb-24">
        {loading ? (
          <div className="py-20 space-y-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="grid grid-cols-[140px_1fr] gap-12">
                <div className="h-24 rounded shimmer" />
                <div className="space-y-3">
                  <div className="h-3 w-32 rounded shimmer" />
                  <div className="h-7 rounded shimmer" />
                  <div className="h-3 w-2/3 rounded shimmer" />
                  <div className="h-20 rounded shimmer" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-28 text-center">
            <p className="font-serif-heading" style={{ fontSize: "22px", color: "var(--stone-gray)" }}>
              {lang === "zh" ? "今日暂无选题" : "No picks yet"}
            </p>
          </div>
        ) : (
          <>
            {(() => {
              let idx = 0;
              return groupedByDate.map(([date, dayItems]) => {
                const startIndex = idx;
                idx += dayItems.length;
                return (
                  <DaySection
                    key={date}
                    date={date}
                    items={dayItems}
                    lang={lang}
                    startIndex={startIndex}
                  />
                );
              });
            })()}

            {hasMore && !selectedDate && (
              <div className="mt-16 text-center">
                <button
                  onClick={loadOlderDays}
                  disabled={loadingMore}
                  className="font-mono text-[11px] uppercase tracking-[0.25em] px-6 py-3 rounded-[6px] transition-all disabled:opacity-50"
                  style={{
                    background: "transparent",
                    border: "1px solid var(--border-warm)",
                    color: "var(--charcoal)",
                  }}
                  onMouseEnter={(e) => {
                    if (!loadingMore) {
                      e.currentTarget.style.borderColor = "var(--terracotta)";
                      e.currentTarget.style.color = "var(--terracotta)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-warm)";
                    e.currentTarget.style.color = "var(--charcoal)";
                  }}
                >
                  {loadingMore
                    ? (lang === "zh" ? "加载中…" : "Loading…")
                    : (lang === "zh" ? "翻到更早" : "Older briefs")}
                </button>
              </div>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t" style={{ borderColor: "var(--border-cream)" }}>
        <div
          className="max-w-[960px] mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10.5px] uppercase tracking-[0.2em]"
          style={{ color: "var(--stone-gray)" }}
        >
          <span>碳基生物爱AI · Editor&apos;s Desk</span>
          <span>
            Set in <span style={{ color: "var(--near-black)" }}>Georgia</span> ·
            Palette <span style={{ color: "var(--terracotta)" }}>Terracotta</span> on Parchment
          </span>
        </div>
      </footer>
    </div>
  );
}
