import Link from "next/link";

const NAV = [
  { href: "/", label: "FRONT" },
  { href: "/builders", label: "BUILDERS" },
  { href: "/pulse", label: "BAROMETER" },
  { href: "/suggestions", label: "PICKS" },
  { href: "/newsletters", label: "MAIL" },
];

function formatVol(date: string): string {
  // Convert YYYY-MM-DD to "VOL. MMDD" — newspaper masthead style
  if (!date || date.length < 10) return "VOL. ——";
  return `VOL. ${date.slice(5, 7)}${date.slice(8, 10)}`;
}

function formatDate(date: string): string {
  if (!date || date.length < 10) return "未刊";
  const m = parseInt(date.slice(5, 7), 10);
  const d = parseInt(date.slice(8, 10), 10);
  return `${m} 月 ${d} 日`;
}

export function SiteHeader({ activeDate }: { activeDate?: string }) {
  const today =
    activeDate ||
    new Date().toISOString().slice(0, 10);

  return (
    <header className="border-b border-ink">
      <div className="max-w-6xl mx-auto px-6 pt-5 pb-3">
        {/* top folio strip */}
        <div className="flex items-baseline justify-between text-xs mb-3">
          <span className="folio">{formatVol(today)} · 中文 / 双周</span>
          <span className="folio">FOLLOW BUILDERS · NOT INFLUENCERS</span>
          <span className="folio">{today.replace(/-/g, ".")}</span>
        </div>

        <div className="rule-thin mb-4" />

        {/* masthead row */}
        <div className="flex items-center gap-4">
          <Link href="/" className="seal" aria-label="返回首页">脑</Link>
          <div className="flex-1">
            <div className="flex items-baseline gap-3">
              <Link
                href="/"
                className="font-display text-3xl md:text-4xl font-semibold leading-none text-ink hover:text-vermilion transition-colors"
              >
                Builders Digest
              </Link>
              <span className="font-han text-base text-ink-mute">碳基生物爱 AI</span>
            </div>
            <p className="font-display italic text-sm text-ink-mute mt-1.5">
              A daily editorial on what AI builders are actually shipping — {formatDate(today)} 刊
            </p>
          </div>
        </div>

        <div className="rule-double mt-5 mb-2" />

        {/* nav row */}
        <nav className="flex items-center justify-between flex-wrap gap-3 overflow-hidden">
          <ul className="flex items-center gap-1 text-xs flex-wrap min-w-0">
            {NAV.map((n, i) => (
              <li key={n.href} className="flex items-center gap-1">
                {i > 0 && <span className="text-ink-faint mx-1">·</span>}
                <Link
                  href={n.href}
                  className="font-mono tracking-[0.18em] text-ink hover:text-vermilion transition-colors px-1 py-1"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <span className="smallcaps">EST. 2026 · 上海</span>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t-2 border-ink pt-6 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-baseline justify-between gap-y-3 text-xs">
          <span className="folio">— 终 —</span>
          <span className="folio max-w-md text-center">
            数据合成自 HACKER NEWS · GITHUB · PRODUCT HUNT · HUGGINGFACE · GOOGLE TRENDS · REDDIT (via BUILDERPULSE)
          </span>
          <span className="folio">「碳基生物爱 AI」编辑部</span>
        </div>
        <div className="rule-thin mt-5" />
        <p className="folio mt-3 text-center">
          ALL RIGHTS RESERVED TO THEIR RESPECTIVE BUILDERS · 转载请注明出处 · 不构成投资建议
        </p>
      </div>
    </footer>
  );
}
