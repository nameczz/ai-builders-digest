"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Link from "next/link";
import type { DigestItem, DailyData, Language } from "@/types";

/* ─── helpers ─── */

function formatDate(dateStr: string, lang: Language): string {
  const d = new Date(dateStr + "T00:00:00");
  if (lang === "zh") return `${d.getMonth() + 1}月${d.getDate()}日`;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function formatDateFull(dateStr: string, lang: Language): string {
  const d = new Date(dateStr + "T00:00:00");
  if (lang === "zh") return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function isToday(dateStr: string): boolean {
  const t = new Date(), d = new Date(dateStr + "T00:00:00");
  return d.getFullYear() === t.getFullYear() && d.getMonth() === t.getMonth() && d.getDate() === t.getDate();
}

/* ─── source tag ─── */

function SourceTag({ source }: { source: DigestItem["source"] }) {
  if (source === "x") {
    return (
      <span className="inline-flex items-center justify-center w-[22px] h-[22px] rounded-[6px] bg-[var(--tag-x-bg)] text-[var(--tag-x-text)]">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </span>
    );
  }
  if (source === "podcast") {
    return (
      <span className="inline-flex items-center justify-center w-[22px] h-[22px] rounded-[6px] bg-[var(--tag-podcast-bg)] text-[var(--tag-podcast-text)]">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/></svg>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-[22px] h-[22px] rounded-[6px] bg-[var(--tag-blog-bg)] text-[var(--tag-blog-text)]">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
    </span>
  );
}

/* ─── card ─── */

function DigestCard({ item, lang, index }: { item: DigestItem; lang: Language; index: number }) {
  const content = lang === "zh" ? item.content_zh : item.content_en;
  const isPodcast = item.source === "podcast";

  return (
    <article
      className="card-animate group relative bg-[var(--ivory)] rounded-[8px] border border-[var(--border-cream)] hover:shadow-[var(--ring-warm)_0px_0px_0px_1px,rgba(0,0,0,0.05)_0px_4px_24px] transition-all duration-200 flex flex-col"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      {/* Podcast accent line */}
      {isPodcast && (
        <div className="h-[2px] rounded-t-[8px]" style={{ background: 'linear-gradient(90deg, transparent, var(--terracotta), transparent)' }} />
      )}

      <div className="p-5 flex flex-col flex-1">
        {/* Author row */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full bg-[var(--warm-sand)] flex items-center justify-center text-[var(--charcoal)] font-serif-heading text-[13px] shrink-0">
              {item.author.charAt(0)}
            </div>
            <div className="min-w-0">
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <span className="font-medium text-[var(--near-black)] text-[13px] leading-none">{item.author}</span>
                <span className="text-[var(--stone-gray)] text-[11px] leading-none truncate">{item.bio}</span>
              </div>
            </div>
          </div>
          <SourceTag source={item.source} />
        </div>

        {/* Content */}
        <p className="text-[var(--olive-gray)] text-[14px] leading-[1.65] flex-1 mb-4">
          {content}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-[var(--border-cream)]">
          <time className="text-[11px] text-[var(--stone-gray)] tabular-nums">{formatDate(item.date, lang)}</time>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-medium text-[var(--stone-gray)] hover:text-[var(--terracotta)] transition-colors"
          >
            {lang === "zh" ? "原文" : "Source"}
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-50 group-hover:opacity-100 transition-opacity">
              <path d="M3 1.5H8.5V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.5 1.5L1.5 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

/* ─── filters ─── */

function Filters({
  authors, selectedAuthor, onAuthorChange,
  selectedDate, onDateChange, lang, totalCount,
}: {
  authors: string[]; selectedAuthor: string; onAuthorChange: (v: string) => void;
  selectedDate: string; onDateChange: (v: string) => void; lang: Language; totalCount: number;
}) {
  const hasFilter = selectedAuthor || selectedDate;
  return (
    <div className="flex items-center gap-2.5 flex-wrap">
      <div className="relative">
        <select
          value={selectedAuthor}
          onChange={(e) => onAuthorChange(e.target.value)}
          className="appearance-none bg-[var(--ivory)] border border-[var(--border-warm)] rounded-[8px] px-3 py-[6px] pr-8 text-[13px] text-[var(--charcoal)] focus:outline-none focus:border-[var(--focus-blue)] cursor-pointer transition-colors hover:shadow-[var(--ring-warm)_0px_0px_0px_1px]"
        >
          <option value="">{lang === "zh" ? "全部作者" : "All authors"}</option>
          {authors.map((a) => <option key={a} value={a}>{a}</option>)}
        </select>
        <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--stone-gray)]" width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M2.5 3.75L5 6.25L7.5 3.75" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <input
        type="date"
        value={selectedDate}
        onChange={(e) => onDateChange(e.target.value)}
        className="bg-[var(--ivory)] border border-[var(--border-warm)] rounded-[8px] px-3 py-[6px] text-[13px] text-[var(--charcoal)] focus:outline-none focus:border-[var(--focus-blue)] cursor-pointer transition-colors hover:shadow-[var(--ring-warm)_0px_0px_0px_1px]"
      />

      {hasFilter && (
        <button
          onClick={() => { onAuthorChange(""); onDateChange(""); }}
          className="text-[11px] text-[var(--stone-gray)] hover:text-[var(--terracotta)] transition-colors px-2 py-1.5"
        >
          {lang === "zh" ? "重置" : "Reset"}
        </button>
      )}

      <span className="text-[11px] text-[var(--stone-gray)] ml-auto tabular-nums">
        {totalCount} {lang === "zh" ? "条动态" : "updates"}
      </span>
    </div>
  );
}

/* ─── main ─── */

export default function Home() {
  const INITIAL_DAYS = 7;
  const LOAD_MORE_DAYS = 7;

  const [items, setItems] = useState<DigestItem[]>([]);
  const [lang, setLang] = useState<Language>("zh");
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [allDates, setAllDates] = useState<string[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadDays = useCallback(async (dates: string[]): Promise<DigestItem[]> => {
    const results = await Promise.all(
      dates.map(async (date) => {
        try {
          const res = await fetch(`/data/${date}.json`);
          if (!res.ok) return [];
          const data: DailyData = await res.json();
          return data.items || [];
        } catch { return []; }
      })
    );
    return results.flat();
  }, []);

  useEffect(() => {
    async function init() {
      try {
        const res = await fetch("/data/index.json");
        if (!res.ok) throw new Error("no index");
        const idx: { dates: string[] } = await res.json();
        const dates = idx.dates.sort((a: string, b: string) => b.localeCompare(a));
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

  const authors = useMemo(() => Array.from(new Set(items.map((i) => i.author))).sort(), [items]);

  const filtered = useMemo(() => items.filter((item) => {
    if (selectedAuthor && item.author !== selectedAuthor) return false;
    if (selectedDate && item.date !== selectedDate) return false;
    return true;
  }), [items, selectedAuthor, selectedDate]);

  const groupedByDate = useMemo(() => {
    const groups: Record<string, DigestItem[]> = {};
    for (const item of filtered) { if (!groups[item.date]) groups[item.date] = []; groups[item.date].push(item); }
    return Object.entries(groups).sort(([a], [b]) => b.localeCompare(a));
  }, [filtered]);

  let globalCardIndex = 0;

  return (
    <div className="min-h-screen bg-[var(--parchment)]">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-[var(--parchment)]/90 backdrop-blur-md border-b border-[var(--border-cream)]">
        <div className="max-w-[1120px] mx-auto px-6 h-[52px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Terracotta logo mark */}
            <div className="w-7 h-7 rounded-[8px] bg-[var(--terracotta)] flex items-center justify-center">
              <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                <path d="M3 6L9 3L15 6V12L9 15L3 12V6Z" stroke="var(--ivory)" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M9 3V15" stroke="var(--ivory)" strokeWidth="1.5"/>
                <path d="M3 6L9 9L15 6" stroke="var(--ivory)" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="flex items-baseline gap-2">
              <h1 className="font-serif-heading text-[16px] text-[var(--near-black)] tracking-[-0.01em]">
                AI Builders Digest
              </h1>
              <span className="text-[11px] text-[var(--stone-gray)] hidden sm:inline">
                {lang === "zh" ? "公众号「碳基生物爱AI」" : "WeChat: Carbon Loves AI"}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/suggestions"
              className="text-[13px] text-[var(--stone-gray)] hover:text-[var(--terracotta)] transition-colors"
            >
              {lang === "zh" ? "博主选题" : "Suggestions"}
            </Link>
            <Link
              href="/daily-builder-report"
              className="text-[13px] text-[var(--stone-gray)] hover:text-[var(--terracotta)] transition-colors"
            >
              {lang === "zh" ? "每日情报" : "Daily Report"}
            </Link>
            <button
              onClick={() => setLang((l) => (l === "zh" ? "en" : "zh"))}
              className="text-[13px] text-[var(--stone-gray)] hover:text-[var(--terracotta)] transition-colors"
            >
              {lang === "zh" ? "EN" : "中文"}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-[1120px] mx-auto px-6">
        {/* ── Subtitle + Filters ── */}
        <div className="pt-7 pb-5 border-b border-[var(--border-cream)]">
          <p className="font-serif-heading text-[var(--olive-gray)] text-[17px] leading-[1.6] mb-4">
            {lang === "zh"
              ? "每日精选 AI builder 的观点、动态与播客摘要。"
              : "Daily curated insights from top AI builders."}
          </p>
          <Filters
            authors={authors} selectedAuthor={selectedAuthor} onAuthorChange={setSelectedAuthor}
            selectedDate={selectedDate} onDateChange={setSelectedDate}
            lang={lang} totalCount={filtered.length}
          />
        </div>

        {/* ── Content ── */}
        <main className="py-8 pb-20">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-[8px] border border-[var(--border-cream)] bg-[var(--ivory)] p-5 h-44">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-full shimmer" />
                    <div className="h-3 w-28 rounded shimmer" />
                  </div>
                  <div className="space-y-2.5">
                    <div className="h-3 w-full rounded shimmer" />
                    <div className="h-3 w-4/5 rounded shimmer" />
                    <div className="h-3 w-3/5 rounded shimmer" />
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-serif-heading text-[var(--stone-gray)] text-[17px]">
                {lang === "zh" ? "暂无匹配内容" : "No matching content"}
              </p>
            </div>
          ) : (
            <div className="space-y-10">
              {groupedByDate.map(([date, dateItems]) => {
                const today = isToday(date);
                return (
                  <section key={date}>
                    {/* Date header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        {today && <span className="inline-block w-[6px] h-[6px] rounded-full bg-[var(--terracotta)]" />}
                        <h2 className="font-serif-heading text-[15px] text-[var(--near-black)]">
                          {today ? (lang === "zh" ? "今天" : "Today") : formatDateFull(date, lang)}
                        </h2>
                        {today && (
                          <span className="text-[11px] text-[var(--stone-gray)]">{formatDateFull(date, lang)}</span>
                        )}
                      </div>
                      <div className="flex-1 h-px bg-[var(--border-cream)]" />
                      <span className="text-[11px] text-[var(--stone-gray)] tabular-nums">{dateItems.length}</span>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {dateItems.map((item) => {
                        const idx = globalCardIndex++;
                        return <DigestCard key={item.id} item={item} lang={lang} index={idx} />;
                      })}
                    </div>
                  </section>
                );
              })}
            </div>
          )}

          {/* Load more */}
          {!loading && hasMore && filtered.length > 0 && (
            <div className="flex justify-center pt-12">
              <button
                onClick={loadOlderDays}
                disabled={loadingMore}
                className="inline-flex items-center gap-2 px-4 py-[7px] rounded-[8px] bg-[var(--warm-sand)] text-[var(--charcoal)] text-[13px] font-medium shadow-[var(--warm-sand)_0px_0px_0px_0px,var(--ring-warm)_0px_0px_0px_1px] hover:shadow-[var(--ring-warm)_0px_0px_0px_1px,rgba(0,0,0,0.05)_0px_4px_24px] transition-all disabled:opacity-50"
              >
                {loadingMore ? (
                  <>
                    <div className="w-3.5 h-3.5 border-[1.5px] border-[var(--terracotta)] border-t-transparent rounded-full animate-spin" />
                    {lang === "zh" ? "加载中" : "Loading"}
                  </>
                ) : (
                  lang === "zh" ? "加载更早内容" : "Load older"
                )}
              </button>
            </div>
          )}
        </main>
      </div>

      {/* ── Footer ── */}
      <footer className="border-t border-[var(--border-cream)]">
        <div className="max-w-[1120px] mx-auto px-6 h-11 flex items-center justify-center">
          <p className="text-[11px] text-[var(--stone-gray)]">
            {lang === "zh"
              ? "每日更新 · 内容来自 X 与播客 · AI 辅助整理"
              : "Updated daily · X & podcasts · AI-curated"}
          </p>
        </div>
      </footer>
    </div>
  );
}
