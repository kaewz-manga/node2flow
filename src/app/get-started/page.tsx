import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

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
    color: "hover:border-[#26A5E4]",
  },
  {
    icon: "/images/partners/line.svg",
    name: "LINE",
    handle: "@990pvvzg",
    href: "https://line.me/R/ti/p/@990pvvzg",
    color: "hover:border-[#06C755]",
  },
  {
    icon: "/images/partners/gmail.svg",
    name: "Email",
    handle: "node2flow@gmail.com",
    href: "mailto:node2flow@gmail.com",
    color: "hover:border-[#EA4335]",
  },
  {
    icon: "/images/partners/facebook.svg",
    name: "Facebook",
    handle: "Node2Flow",
    href: "https://facebook.com/61578132173105",
    color: "hover:border-[#1877F2]",
  },
];

export default function GetStartedPage() {
  return (
    <main className="relative overflow-hidden pt-[calc(80px+60px)] pb-20 bg-n2f">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[url('/images/partners/mcp-icon.png')] bg-center bg-contain bg-no-repeat opacity-[0.025] pointer-events-none" />

      <div className="w-full max-w-[800px] mx-auto px-6 relative z-[1]">
        <div className="text-center mb-14">
          <Image src="/images/logo.jpg" alt="Node2Flow" width={80} height={80} className="rounded-2xl mx-auto mb-6 border-2 border-n2f-accent shadow-[0_0_20px_var(--color-n2f-accent-glow)]" />
          <h1 className="text-[56px] max-md:text-4xl font-extrabold text-white mb-4">เลือกช่องทางสมัคร</h1>
          <p className="text-lg text-n2f-text-secondary max-w-[500px] mx-auto">
            เพิ่มเพื่อน Bot หรือติดต่อเราผ่านช่องทางที่สะดวก
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-[600px] mx-auto max-[480px]:grid-cols-1">
          {channels.map((ch) => (
            <a
              key={ch.name}
              href={ch.href}
              target="_blank"
              rel="noopener"
              className={`flex flex-col items-center gap-3 p-8 bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border border-n2f-border rounded-2xl hover:shadow-[0_0_20px_var(--color-n2f-accent-glow)] hover:-translate-y-1 transition-all duration-300 ${ch.color}`}
            >
              <Image src={ch.icon} alt={ch.name} width={40} height={40} className="h-10 w-auto" />
              <span className="text-lg font-semibold text-white">{ch.name}</span>
              <span className="text-sm text-n2f-text-muted">{ch.handle}</span>
            </a>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link href="/" className="text-sm text-n2f-accent hover:underline">
            &larr; กลับหน้าแรก
          </Link>
        </div>
      </div>
    </main>
  );
}
