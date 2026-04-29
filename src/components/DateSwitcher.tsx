"use client";

import Link from "next/link";

export function DateSwitcher({
  dates,
  current,
  basePath,
}: {
  dates: string[];
  current: string;
  basePath: string;
}) {
  if (dates.length === 0) return null;
  const idx = dates.indexOf(current);
  const prev = idx >= 0 && idx < dates.length - 1 ? dates[idx + 1] : null;
  const next = idx > 0 ? dates[idx - 1] : null;

  return (
    <div className="inline-flex items-center gap-3 text-xs font-mono">
      {prev ? (
        <Link href={`${basePath}/${prev}`} className="text-ink-mute hover:text-vermilion tracking-wider">
          ← {prev}
        </Link>
      ) : (
        <span className="text-ink-faint tracking-wider opacity-50">← 卷首</span>
      )}
      <span className="text-ink font-semibold tracking-[0.15em] border-y border-ink py-0.5 px-2">
        {current}
      </span>
      {next ? (
        <Link href={`${basePath}/${next}`} className="text-ink-mute hover:text-vermilion tracking-wider">
          {next} →
        </Link>
      ) : (
        <span className="text-ink-faint tracking-wider opacity-50">最新 →</span>
      )}
    </div>
  );
}
