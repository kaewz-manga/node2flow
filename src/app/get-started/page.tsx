import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Get Started - Node2Flow",
  description: "เลือกช่องทางสมัครใช้งาน Node2Flow MCP Server Platform",
};

const channels = [
  {
    icon: "/images/partners/telegram.svg",
    name: "Telegram",
    handle: "@node2flow_bot",
    href: "https://t.me/node2flow_bot",
    hoverColor: "hover:border-[#26A5E4]",
  },
  {
    icon: "/images/partners/line.svg",
    name: "LINE",
    handle: "@990pvvzg",
    href: "https://line.me/R/ti/p/@990pvvzg",
    hoverColor: "hover:border-[#06C755]",
  },
  {
    icon: "/images/partners/gmail.svg",
    name: "Email",
    handle: "node2flow@gmail.com",
    href: "mailto:node2flow@gmail.com",
    hoverColor: "hover:border-[#EA4335]",
  },
  {
    icon: "/images/partners/facebook.svg",
    name: "Facebook",
    handle: "Node2Flow",
    href: "https://facebook.com/61578132173105",
    hoverColor: "hover:border-[#1877F2]",
  },
];

export default function GetStartedPage() {
  return (
    <main className="pt-[calc(80px+80px)] pb-20 bg-n2f">
      <div className="w-full max-w-[800px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <Image src="/images/logo.jpg" alt="Node2Flow" width={64} height={64} className="rounded-2xl mx-auto mb-6" />
            <h1 className="text-5xl max-md:text-4xl font-bold text-n2f-text mb-4">เลือกช่องทางสมัคร</h1>
            <p className="text-lg text-n2f-text-secondary max-w-[500px] mx-auto">
              เพิ่มเพื่อน Bot หรือติดต่อเราผ่านช่องทางที่สะดวก
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="grid grid-cols-2 gap-4 max-w-[600px] mx-auto max-[480px]:grid-cols-1">
            {channels.map((ch) => (
              <a
                key={ch.name}
                href={ch.href}
                target="_blank"
                rel="noopener"
                className={`flex flex-col items-center gap-3 p-8 bg-n2f-secondary border border-n2f-border rounded-xl transition-colors duration-200 ${ch.hoverColor}`}
              >
                <Image src={ch.icon} alt={ch.name} width={40} height={40} className="h-10 w-auto" />
                <span className="text-base font-semibold text-n2f-text">{ch.name}</span>
                <span className="text-sm text-n2f-text-muted">{ch.handle}</span>
              </a>
            ))}
          </div>
        </FadeIn>

        <div className="text-center mt-14">
          <Link href="/" className="text-sm text-n2f-accent hover:underline">
            &larr; กลับหน้าแรก
          </Link>
        </div>
      </div>
    </main>
  );
}
