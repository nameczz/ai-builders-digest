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

export interface MonthlyData {
  items: DigestItem[];
}

export type Language = "zh" | "en";
