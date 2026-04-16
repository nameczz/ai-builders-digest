"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

export default function DailyReport() {
  const params = useParams();
  const dateStr = params.date as string;
  const [markdown, setMarkdown] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/daily-builder-report/${dateStr}.md`)
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.text();
      })
      .then(setMarkdown)
      .catch(() => setError(true));
  }, [dateStr]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--parchment)" }}>
        <div className="text-center">
          <h1 className="font-serif-heading text-2xl mb-4" style={{ color: "var(--near-black)" }}>
            {dateStr} 暂无报告
          </h1>
          <Link href="/daily-builder-report" className="text-sm underline" style={{ color: "var(--terracotta)" }}>
            ← 返回
          </Link>
        </div>
      </div>
    );
  }

  if (!markdown) {
    return (
      <div className="min-h-screen" style={{ background: "var(--parchment)" }}>
        <div className="max-w-2xl mx-auto px-6 py-20">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="shimmer rounded-lg mb-4" style={{ height: "3.5rem" }} />
          ))}
        </div>
      </div>
    );
  }

  const mdComponents: Components = {
    h1: ({ children }) => (
      <h1 className="font-serif-heading mt-0 mb-4" style={{ fontSize: "2rem", lineHeight: 1.2, color: "var(--near-black)" }}>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-serif-heading mt-12 mb-5 pb-2" style={{ fontSize: "1.3rem", color: "var(--near-black)", borderBottom: "2px solid var(--terracotta)" }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-serif-heading mt-8 mb-3" style={{ fontSize: "1.1rem", color: "var(--near-black)" }}>
        {children}
      </h3>
    ),
    p: ({ children }) => {
      const text = typeof children === "string" ? children : "";
      // Takeaway block
      if (text.startsWith("**Takeaway**") || text.startsWith("Takeaway") ||
          (Array.isArray(children) && children.length > 0 &&
           typeof children[0] === "object" && children[0] !== null &&
           "props" in children[0] && children[0].props?.children === "Takeaway")) {
        return (
          <div className="my-5 py-3 px-4 rounded-lg" style={{ background: "var(--warm-sand)", borderLeft: "3px solid var(--terracotta)" }}>
            <p className="text-[15px] m-0" style={{ color: "var(--charcoal)", lineHeight: 1.7 }}>{children}</p>
          </div>
        );
      }
      return (
        <p className="mb-4" style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--near-black)" }}>
          {children}
        </p>
      );
    },
    blockquote: ({ children }) => (
      <blockquote className="my-3 py-2 px-4 rounded-r" style={{ borderLeft: "3px solid var(--border-warm)", background: "var(--ivory)", color: "var(--olive-gray)", fontSize: "14px", lineHeight: 1.7 }}>
        {children}
      </blockquote>
    ),
    strong: ({ children }) => (
      <strong style={{ color: "var(--near-black)", fontWeight: 600 }}>{children}</strong>
    ),
    a: ({ href, children }) => (
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: "var(--terracotta)", textDecoration: "underline", textDecorationColor: "var(--border-warm)", textUnderlineOffset: "2px" }}>
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 pl-0 list-none space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 pl-5 space-y-2" style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--near-black)" }}>
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="relative pl-4" style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--near-black)" }}>
        <span className="absolute left-0 top-0" style={{ color: "var(--terracotta)" }}>•</span>
        {children}
      </li>
    ),
    hr: () => (
      <hr className="my-10 border-0" style={{ height: "1px", background: "var(--border-warm)" }} />
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead style={{ borderBottom: "2px solid var(--border-warm)" }}>{children}</thead>
    ),
    th: ({ children }) => (
      <th className="text-left py-2 px-2 font-medium" style={{ color: "var(--stone-gray)", fontSize: "13px" }}>{children}</th>
    ),
    tr: ({ children }) => (
      <tr style={{ borderBottom: "1px solid var(--border-cream)" }}>{children}</tr>
    ),
    td: ({ children }) => (
      <td className="py-2 px-2" style={{ fontSize: "14px", color: "var(--near-black)" }}>{children}</td>
    ),
    code: ({ className, children }) => {
      const isInline = !className;
      if (isInline) {
        return (
          <code className="font-mono text-[13px] px-1.5 py-0.5 rounded" style={{ background: "var(--border-cream)", color: "var(--terracotta)" }}>
            {children}
          </code>
        );
      }
      return (
        <code className="font-mono text-[13px]" style={{ color: "var(--charcoal)" }}>
          {children}
        </code>
      );
    },
    pre: ({ children }) => (
      <pre className="my-4 p-4 rounded-lg overflow-x-auto text-sm" style={{ background: "var(--ivory)", border: "1px solid var(--border-cream)" }}>
        {children}
      </pre>
    ),
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--parchment)" }}>
      {/* Sticky Nav */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{ background: "var(--parchment)", borderColor: "var(--border-cream)" }}
      >
        <div className="max-w-2xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/daily-builder-report" className="text-sm" style={{ color: "var(--stone-gray)" }}>
            ← 返回
          </Link>
          <span className="font-serif-heading text-sm" style={{ color: "var(--near-black)" }}>
            Daily Builder Report
          </span>
          <span className="text-xs font-mono" style={{ color: "var(--stone-gray)" }}>
            {dateStr}
          </span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-8 pulse-animate">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdComponents}>
          {markdown}
        </ReactMarkdown>

        {/* Footer */}
        <div
          className="mt-16 pt-6 border-t text-xs text-center"
          style={{ borderColor: "var(--border-warm)", color: "var(--stone-gray)" }}
        >
          Daily Builder Report · Sources: Hacker News · GitHub · Product Hunt · HuggingFace · Google Trends
        </div>
      </main>
    </div>
  );
}
