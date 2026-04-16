import fs from "fs";
import path from "path";
import PulseReport from "./PulseReport";

export async function generateStaticParams() {
  const indexPath = path.join(process.cwd(), "public", "pulse", "index.json");
  try {
    const raw = fs.readFileSync(indexPath, "utf-8");
    const { dates } = JSON.parse(raw) as { dates: string[] };
    return dates.map((date) => ({ date }));
  } catch {
    return [];
  }
}

export default function PulseReportPage() {
  return <PulseReport />;
}
