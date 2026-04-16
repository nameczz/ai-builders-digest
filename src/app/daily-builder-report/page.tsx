"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface ReportIndex { dates: string[] }
interface DaySummary {
  date: string;
  top3: { source: string; title: string; metric: string }[];
  stats: Record<string, number>;
}

function sourceIcon(s: string) {
  return s === "hacker_news" ? "🟠" : s === "github" ? "⚫" : s === "huggingface" ? "🟡" : "🔶";
}

export default function DailyBuilderReportIndexPage() {
  const [dates, setDates] = useState<string[]>([]);
  const [summaries, setSummaries] = useState<Record<string, DaySummary>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/daily-builder-report/index.json")
      .then((r) => r.json())
      .then((data: ReportIndex) => {
        setDates(data.dates);
        data.dates.forEach((d) => {
          fetch(`/daily-builder-report/${d}.json`)
            .then((r) => r.json())
            .then((pulse) => {
              setSummaries((prev) => ({ ...prev, [d]: { date: d, top3: pulse.top3 || [], stats: pulse.stats || {} } }));
            })
            .catch(() => {});
        });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "var(--parchment)" }}>
      {/* Header */}
      <header className="border-b" style={{ borderColor: "var(--border-cream)" }}>
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-sm" style={{ color: "var(--stone-gray)" }}>← AI Builders Digest</Link>
          <span className="font-serif-heading" style={{ color: "var(--near-black)" }}>Daily Builder Report</span>
          <div className="w-20" />
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-10">
        <h1 className="font-serif-heading mb-2" style={{ fontSize: "1.8rem", color: "var(--near-black)" }}>
          每日情报
        </h1>
        <p className="mb-8 text-sm" style={{ color: "var(--olive-gray)", lineHeight: 1.6 }}>
          综合 Hacker News、GitHub、Product Hunt、HuggingFace、Google Trends，追踪 AI &amp; 独立开发者生态每日信号。
        </p>

        {/* Report List */}
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => <div key={i} className="shimmer rounded-lg" style={{ height: "5rem" }} />)}
          </div>
        ) : (
          <div className="space-y-4">
            {dates.map((d, i) => {
              const summary = summaries[d];
              const isToday = d === new Date().toISOString().split("T")[0];
              return (
                <Link
                  key={d}
                  href={`/daily-builder-report/${d}`}
                  className="block rounded-lg p-5 transition-all card-animate group"
                  style={{
                    background: "var(--ivory)",
                    border: "1px solid var(--border-cream)",
                    borderLeft: isToday ? "3px solid var(--terracotta)" : "1px solid var(--border-cream)",
                    animationDelay: `${i * 50}ms`,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 0 1px var(--ring-warm)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="font-serif-heading text-lg" style={{ color: "var(--near-black)" }}>{d}</span>
                      {isToday && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded" style={{ background: "var(--terracotta)", color: "var(--ivory)" }}>今日</span>
                      )}
                    </div>
                    <span className="text-xs" style={{ color: "var(--stone-gray)" }}>
                      {summary?.stats ? `${summary.stats.hn_count + summary.stats.gh_count + summary.stats.ph_count + summary.stats.hf_model_count} 条数据` : ""}
                    </span>
                  </div>
                  {summary?.top3?.length > 0 && (
                    <div className="space-y-1">
                      {summary.top3.map((t, j) => (
                        <div key={j} className="flex items-baseline gap-2 text-sm" style={{ color: "var(--olive-gray)" }}>
                          <span className="shrink-0">{sourceIcon(t.source)}</span>
                          <span className="truncate">{t.title}</span>
                          <span className="shrink-0 font-mono text-xs" style={{ color: "var(--terracotta)" }}>{t.metric}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </main>

      <footer className="border-t mt-12 py-6 text-center text-xs" style={{ borderColor: "var(--border-cream)", color: "var(--stone-gray)" }}>
        Sources: Hacker News · GitHub · Product Hunt · HuggingFace · Google Trends
      </footer>
    </div>
  );
}
