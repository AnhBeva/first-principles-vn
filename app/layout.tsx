import type { Metadata } from "next";
import { Be_Vietnam_Pro, Fraunces } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const sans = Be_Vietnam_Pro({ variable: "--font-sans", subsets: ["vietnamese", "latin"], weight: ["400", "500", "600", "700", "800"] });
const display = Fraunces({ variable: "--font-display", subsets: ["vietnamese", "latin"], weight: ["600", "700", "800"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  return {
    metadataBase: new URL(`${protocol}://${host}`),
    title: "First Principles — Tư duy từ nền móng",
    description: "Giáo trình tương tác 5 trang giúp bạn bóc vấn đề đến sự thật, dựng giải pháp từ số 0 và ra quyết định xuất sắc.",
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: {
      title: "First Principles — Tư duy từ nền móng",
      description: "Bóc đến sự thật. Dựng lại từ số 0.",
      type: "website",
      locale: "vi_VN",
      images: [{ url: "/og.png", width: 1536, height: 1024, alt: "First Principles — Bóc đến sự thật, dựng lại từ số 0" }],
    },
    twitter: { card: "summary_large_image", images: ["/og.png"] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body className={`${sans.variable} ${display.variable}`}>{children}</body></html>;
}
