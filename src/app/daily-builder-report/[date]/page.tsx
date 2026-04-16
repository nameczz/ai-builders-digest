import fs from "fs";
import path from "path";
import DailyReport from "./DailyReport";

export async function generateStaticParams() {
  const indexPath = path.join(process.cwd(), "public", "daily-builder-report", "index.json");
  try {
    const raw = fs.readFileSync(indexPath, "utf-8");
    const { dates } = JSON.parse(raw) as { dates: string[] };
    return dates.map((date) => ({ date }));
  } catch {
    return [];
  }
}

export default function DailyReportPage() {
  return <DailyReport />;
}
