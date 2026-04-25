import type { Metadata } from "next";
import { Fraunces, Newsreader, Noto_Serif_SC, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-body",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-han",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "碳基生物爱 AI · BUILDERS DIGEST",
  description: "每日精选 AI builder 的发声、综合行业脉动与一份给中文 AI 博主的选题建议。",
  openGraph: {
    title: "碳基生物爱 AI · Builders Digest",
    description: "Follow builders, not influencers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh"
      className={`${fraunces.variable} ${newsreader.variable} ${notoSerifSC.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="paper-bg min-h-full flex flex-col">{children}</body>
    </html>
  );
}
