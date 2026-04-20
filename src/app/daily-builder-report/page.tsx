"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ReportIndex { dates: string[] }
interface DayMeta {
  date: string;
  top3_zh: string[];
  top3_en: string[];
  intro_zh: string;
  intro_en: string;
}

export default function DailyBuilderReportIndexPage() {
  const [dates, setDates] = useState<string[]>([]);
  const [metas, setMetas] = useState<Record<string, DayMeta>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/daily-builder-report/index.json")
      .then((r) => r.json())
      .then((data: ReportIndex) => {
        setDates(data.dates);
        data.dates.forEach((d) => {
          fetch(`/daily-builder-report/${d}.meta.json`)
            .then((r) => (r.ok ? r.json() : null))
            .then((meta: DayMeta | null) => {
              if (meta) setMetas((prev) => ({ ...prev, [d]: meta }));
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
          来自 <a href="https://github.com/BuilderPulse/BuilderPulse" target="_blank" rel="noopener noreferrer" style={{ color: "var(--terracotta)" }}>BuilderPulse</a> 每日整理，追踪 AI &amp; 独立开发者生态。
        </p>

        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => <div key={i} className="shimmer rounded-lg" style={{ height: "8rem" }} />)}
          </div>
        ) : (
          <div className="space-y-4">
            {dates.map((d, i) => {
              const meta = metas[d];
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
                  </div>

                  {meta?.intro_zh && (
                    <p className="mb-3 text-sm line-clamp-3" style={{ color: "var(--olive-gray)", lineHeight: 1.6 }}>
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          p: ({ children }) => <>{children}</>,
                          a: ({ children }) => <span style={{ color: "var(--olive-gray)" }}>{children}</span>,
                          strong: ({ children }) => <strong style={{ color: "var(--near-black)" }}>{children}</strong>,
                        }}
                      >
                        {meta.intro_zh}
                      </ReactMarkdown>
                    </p>
                  )}

                  {meta?.top3_zh && meta.top3_zh.length > 0 && (
                    <ol className="space-y-1.5 pl-0" style={{ listStyle: "none" }}>
                      {meta.top3_zh.map((t, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--olive-gray)", lineHeight: 1.55 }}>
                          <span className="shrink-0 font-mono" style={{ color: "var(--terracotta)", fontSize: "12px", marginTop: "2px" }}>
                            {j + 1}.
                          </span>
                          <span className="line-clamp-2">
                            <ReactMarkdown
                              remarkPlugins={[remarkGfm]}
                              components={{
                                p: ({ children }) => <>{children}</>,
                                a: ({ children }) => <span style={{ color: "var(--olive-gray)" }}>{children}</span>,
                                strong: ({ children }) => <strong style={{ color: "var(--near-black)" }}>{children}</strong>,
                              }}
                            >
                              {t}
                            </ReactMarkdown>
                          </span>
                        </li>
                      ))}
                    </ol>
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </main>

      <footer className="border-t mt-12 py-6 text-center text-xs" style={{ borderColor: "var(--border-cream)", color: "var(--stone-gray)" }}>
        Source: <a href="https://github.com/BuilderPulse/BuilderPulse" target="_blank" rel="noopener noreferrer" style={{ color: "var(--terracotta)" }}>BuilderPulse</a>
      </footer>
    </div>
  );
}
