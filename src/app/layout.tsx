import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://node2flow.net";

export const metadata: Metadata = {
  title: {
    default: "Node2Flow - MCP Server Platform",
    template: "%s | Node2Flow",
  },
  description:
    "เชื่อมต่อ AI ของคุณกับทุกบริการ ด้วย MCP Server พร้อมใช้ ไม่ต้องติดตั้งเอง",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "th_TH",
    siteName: "Node2Flow",
    title: "Node2Flow - MCP Server Platform",
    description:
      "เชื่อมต่อ AI ของคุณกับทุกบริการ ด้วย MCP Server พร้อมใช้ ไม่ต้องติดตั้งเอง",
    images: [{ url: "/images/logo.jpg", width: 512, height: 512, alt: "Node2Flow Logo" }],
  },
  twitter: {
    card: "summary",
    title: "Node2Flow - MCP Server Platform",
    description:
      "เชื่อมต่อ AI ของคุณกับทุกบริการ ด้วย MCP Server พร้อมใช้ ไม่ต้องติดตั้งเอง",
    images: ["/images/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className="font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
