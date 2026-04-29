// ── Follow-Builders ────────────────────────────────────────────
export type BuilderSource = "x" | "podcast" | "blog";

export interface BuilderItem {
  id: string;
  date: string;            // YYYY-MM-DD
  source: BuilderSource;
  author: string;
  bio?: string;
  title?: string;
  summary_zh: string;
  summary_en?: string;
  url: string;
  tags?: string[];
  posted_at?: string;
}

export interface BuildersDay {
  date: string;
  generated_at: string;
  count: number;
  items: BuilderItem[];
}

// ── Pulse ──────────────────────────────────────────────────────
export interface PulseSourceItem {
  title: string;
  url: string;
  source: "HN" | "GitHub" | "ProductHunt" | "HuggingFace" | "Reddit" | "GoogleTrends";
  score?: number;
  comments?: number;
  meta?: Record<string, string | number | boolean>;
}

export interface PulseBlock {
  id: string;
  heading: string;
  summary_md: string;
  items?: PulseSourceItem[];
  takeaway?: string;
}

export interface PulseSection {
  id: "discovery" | "tech-stack" | "competition" | "trends" | "actions";
  title: string;
  blocks: PulseBlock[];
}

export interface RedditHighlight {
  heading: string;
  body_md: string;
  source_url: string;        // BuilderPulse repo md link
}

export interface PulseDay {
  date: string;
  generated_at: string;
  top3: string[];
  intro: string;
  sections: PulseSection[];
  reddit_highlights: RedditHighlight[];
}

// ── Suggestions ────────────────────────────────────────────────
export interface SuggestionRef {
  tag: "builders" | "pulse";
  ref: string;
  url?: string;
}

export interface SuggestionItem {
  id: string;
  title: string;
  angle: string;             // 一句话角度
  opening: string;           // 开篇示范
  story_hook: { challenge: string; twist: string };
  takeaway: string;
  refs: SuggestionRef[];
}

export interface SuggestionsDay {
  date: string;
  generated_at: string;
  model: string;
  items: SuggestionItem[];
  notes?: string;
}

// ── Newsletters ────────────────────────────────────────────────
export interface NewsletterStory {
  id: string;
  title_zh: string;
  title_original?: string;
  source: string;
  from?: string;
  subject?: string;
  url?: string;
  message_id?: string;
  published_at?: string;
  importance: "high" | "medium" | "low";
  summary_zh: string;
  deep_read_zh?: string;
  why_important?: string;
  impact?: string;
  key_points?: string[];
  reading_notes?: string[];
  tags?: string[];
  related_sources?: string[];
}

export interface NewsletterSkippedMessage {
  message_id: string;
  subject: string;
  from: string;
  reason: string;
}

export interface NewsletterDay {
  date: string;
  generated_at: string;
  inbox_id: string;
  window: { start: string; end: string };
  count: number;
  highlights: string[];
  items: NewsletterStory[];
  skipped?: NewsletterSkippedMessage[];
  notes?: string;
}

// ── Index files (date listings) ────────────────────────────────
export interface DateIndex {
  updated_at: string;
  dates: string[];           // descending YYYY-MM-DD
  latest: string;
}
