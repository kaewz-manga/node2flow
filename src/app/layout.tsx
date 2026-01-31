import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

const siteUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://node2flow.net";

export const metadata: Metadata = {
  title: {
    default: "Node2Flow - MCP Server Platform",
    template: "%s | Node2Flow",
  },
  description:
    "Connect your AI to any service with ready-to-use MCP Servers.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    siteName: "Node2Flow",
    title: "Node2Flow - MCP Server Platform",
    description: "Connect your AI to any service with ready-to-use MCP Servers.",
    images: [{ url: "/images/logo.jpg", width: 512, height: 512, alt: "Node2Flow Logo" }],
  },
  twitter: {
    card: "summary",
    title: "Node2Flow - MCP Server Platform",
    description: "Connect your AI to any service with ready-to-use MCP Servers.",
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
    <html suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
