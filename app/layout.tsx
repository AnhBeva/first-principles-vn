import type { Metadata } from "next";
import { Be_Vietnam_Pro, Fraunces } from "next/font/google";
import "./globals.css";

const sans = Be_Vietnam_Pro({ variable: "--font-sans", subsets: ["vietnamese", "latin"], weight: ["400", "500", "600", "700", "800"] });
const display = Fraunces({ variable: "--font-display", subsets: ["vietnamese", "latin"], weight: ["600", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://anhbeva.github.io/first-principles-vn/"),
  title: "First Principles — Tư duy từ nền móng",
  description: "Giáo trình tương tác 5 trang giúp bạn bóc vấn đề đến sự thật, dựng giải pháp từ số 0 và ra quyết định xuất sắc.",
  icons: { icon: "favicon.svg", shortcut: "favicon.svg" },
  openGraph: {
    title: "First Principles — Tư duy từ nền móng",
    description: "Bóc đến sự thật. Dựng lại từ số 0.",
    type: "website",
    locale: "vi_VN",
    images: [{ url: "og.png", width: 1536, height: 1024, alt: "First Principles — Bóc đến sự thật, dựng lại từ số 0" }],
  },
  twitter: { card: "summary_large_image", images: ["og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body className={`${sans.variable} ${display.variable}`}>{children}</body></html>;
}
