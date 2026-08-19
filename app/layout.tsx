import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "決戰超強音",
  description:
    "加入華人音樂職業賽事聯盟，讓歌手持續累積賽事、作品、舞台、觀眾與市場價值。",
  openGraph: {
    title: "決戰超強音",
    description:
      "一套結合職業賽事、固定戰隊、音樂作品、巡迴演出與歌手發展的全新音樂體系。",
    images: ["/images/hero-stage.webp"],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
