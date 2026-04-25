import { promises as fs } from "node:fs";
import path from "node:path";
import type {
  BuildersDay,
  PulseDay,
  SuggestionsDay,
  DateIndex,
} from "@/types";

const DATA_ROOT = path.join(process.cwd(), "public", "data");

async function readJson<T>(rel: string): Promise<T | null> {
  try {
    const raw = await fs.readFile(path.join(DATA_ROOT, rel), "utf-8");
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export async function loadIndex(kind: "builders" | "pulse" | "suggestions"): Promise<DateIndex> {
  const idx = await readJson<DateIndex>(`${kind}/index.json`);
  return idx ?? { updated_at: "", dates: [], latest: "" };
}

export async function loadBuilders(date: string): Promise<BuildersDay | null> {
  return readJson<BuildersDay>(`builders/${date}.json`);
}

export async function loadPulse(date: string): Promise<PulseDay | null> {
  return readJson<PulseDay>(`pulse/${date}.json`);
}

export async function loadSuggestions(date: string): Promise<SuggestionsDay | null> {
  return readJson<SuggestionsDay>(`suggestions/${date}.json`);
}

export async function listDates(kind: "builders" | "pulse" | "suggestions"): Promise<string[]> {
  return (await loadIndex(kind)).dates;
}

/** Merge the most recent N builder days into a single rolling list.
 * Used by the homepage so it never shows empty when today's upstream feed
 * hasn't refreshed yet. */
export async function loadRecentBuilders(days = 3): Promise<BuildersDay | null> {
  const idx = await loadIndex("builders");
  if (idx.dates.length === 0) return null;
  const targets = idx.dates.slice(0, days);
  const loaded = await Promise.all(targets.map((d) => loadBuilders(d)));
  const items = loaded
    .flatMap((b) => b?.items ?? [])
    .sort((a, b) => (b.posted_at ?? b.date).localeCompare(a.posted_at ?? a.date));
  return {
    date: idx.latest,
    generated_at: new Date().toISOString(),
    count: items.length,
    items,
  };
}
