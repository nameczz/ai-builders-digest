const LABELS: Record<string, string> = {
  x: "X",
  podcast: "PODCAST",
  blog: "BLOG",
  HN: "HN",
  GitHub: "GITHUB",
  ProductHunt: "PH",
  HuggingFace: "HF",
  Reddit: "REDDIT",
  GoogleTrends: "TRENDS",
};

const ACCENT: Record<string, string> = {
  HN: "vermilion",
  ProductHunt: "vermilion",
  GitHub: "ink",
  HuggingFace: "ink",
  Reddit: "vermilion",
  GoogleTrends: "indigo",
  x: "ink",
  podcast: "vermilion",
  blog: "ink",
};

export function SourceBadge({ source }: { source: string }) {
  const label = LABELS[source] ?? source.toUpperCase();
  const accent = ACCENT[source] ?? "ink";
  return (
    <span
      className={`inline-flex items-center font-mono text-[9px] font-semibold tracking-[0.18em] uppercase px-1.5 py-px border ${
        accent === "vermilion"
          ? "text-vermilion border-vermilion"
          : accent === "indigo"
          ? "text-indigo border-indigo"
          : "text-ink border-ink"
      }`}
    >
      {label}
    </span>
  );
}
