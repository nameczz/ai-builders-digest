export interface DigestItem {
  id: string;
  author: string;
  bio: string;
  content_zh: string;
  content_en: string;
  source: "x" | "podcast" | "blog";
  url: string;
  date: string;
}

export interface DailyData {
  items: DigestItem[];
}

export type Language = "zh" | "en";

export type SuggestionSourceTag = "builderpulse" | "follow-builders";

export interface SuggestionSource {
  tag: SuggestionSourceTag;
  ref: string;
  url: string;
}

export interface HkrScore {
  score: 1 | 2 | 3;
  why: string;
}

export interface HkrRating {
  happy: HkrScore;
  knowledge: HkrScore;
  resonance: HkrScore;
  total: number;
  grade: "S" | "A" | "B";
}

export type WritingArchetype = "调查实验型" | "产品体验型" | "现象解读型" | "工具分享型";
export type AnchorType = "热点" | "痛点" | "炫技";

export interface SuggestionIntersection {
  expertise: string;
  reader_interest: string;
  timeliness: string;
}

export interface SuggestionAnchor {
  type: AnchorType;
  hook_ref: string;
}

export interface SuggestionStoryHook {
  challenge: string;
  twist: string;
}

export interface SuggestionItem {
  id: string;
  title: string;
  intersection: SuggestionIntersection;
  hkr: HkrRating;
  writing_archetype: WritingArchetype;
  anchor: SuggestionAnchor;
  angle: string;
  opening: string;
  story_hook: SuggestionStoryHook;
  takeaway: string;
  sources: SuggestionSource[];
}

export interface SuggestionDay {
  date: string;
  generated_at: string;
  model: string;
  sources: SuggestionSourceTag[];
  items: SuggestionItem[];
  notes?: string;
}
