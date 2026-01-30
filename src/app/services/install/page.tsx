import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "รับติดตั้ง n8n-MCP - Node2Flow",
  description: "บริการติดตั้ง n8n-MCP Server บน server ของคุณ พร้อมใช้งานทันที",
};

const includes = [
  "ติดตั้ง n8n + MCP Server บน server ของคุณ",
  "ตั้งค่า Docker, PostgreSQL, Redis",
  "ตั้งค่า Cloudflare Tunnel + HTTPS",
  "เชื่อมต่อ MCP กับ Claude/Cursor/n8n",
  "ทดสอบระบบทั้งหมดให้พร้อมใช้งาน",
  "ส่งมอบเอกสารการใช้งาน (README + CLAUDE.md)",
  "Support หลังติดตั้ง 7 วัน",
];

const steps = [
  { title: "ติดต่อเรา", desc: "แจ้งความต้องการผ่าน Telegram หรือ LINE" },
  { title: "ประเมินระบบ", desc: "เราตรวจสอบ server specs และวางแผนการติดตั้ง" },
  { title: "ติดตั้ง", desc: "ติดตั้งและตั้งค่าระบบทั้งหมดให้" },
  { title: "ทดสอบ & ส่งมอบ", desc: "ทดสอบระบบ + ส่งมอบเอกสารการใช้งาน" },
];

export default function InstallPage() {
  return (
    <main className="relative overflow-hidden pt-[calc(80px+60px)] bg-n2f">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[url('/images/partners/mcp-icon.png')] bg-center bg-contain bg-no-repeat opacity-[0.025] pointer-events-none" />

      <div className="w-full max-w-[800px] mx-auto px-6 relative z-[1]">
        <div className="text-center pb-14 border-b border-n2f-border mb-14">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-[2px] uppercase text-n2f-accent border border-n2f-accent/30 rounded-full bg-n2f-accent/[0.08] mb-6">
            Installation Service
          </span>
          <h1 className="text-[56px] max-md:text-4xl font-extrabold text-white mb-4">รับติดตั้ง n8n-MCP</h1>
          <p className="text-lg text-n2f-text-secondary max-w-[600px] mx-auto leading-[1.7] mb-8">
            มี server แต่ setup ไม่เป็น? เราติดตั้ง n8n + MCP Server ให้พร้อมใช้งาน
          </p>
          <Link href="/get-started" className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-lg bg-gradient-to-br from-n2f-accent to-n2f-accent-dark text-black shadow-[0_0_20px_var(--color-n2f-accent-glow)] hover:shadow-[0_0_40px_var(--color-n2f-accent-glow)] transition-all duration-300">
            สนใจบริการนี้
          </Link>
        </div>

        <section className="mb-14">
          <h2 className="text-2xl font-extrabold text-n2f-accent mb-6">สิ่งที่ได้รับ</h2>
          <ul className="space-y-0">
            {includes.map((item, i) => (
              <li key={i} className="relative pl-6 py-2 text-sm text-n2f-text-secondary border-b border-white/[0.04] last:border-0 leading-relaxed before:content-['✓'] before:absolute before:left-0 before:text-n2f-accent before:font-bold">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-extrabold text-n2f-accent mb-6">ขั้นตอนการทำงาน</h2>
          <ol className="space-y-0">
            {steps.map((step, i) => (
              <li key={i} className="relative pl-10 py-2.5 text-sm text-n2f-text-secondary border-b border-white/[0.04] last:border-0 leading-relaxed">
                <span className="absolute left-0 top-2 w-7 h-7 flex items-center justify-center bg-gradient-to-br from-n2f-accent to-n2f-accent-dark text-black text-[13px] font-bold rounded-full">
                  {i + 1}
                </span>
                <strong className="text-white">{step.title}</strong> — {step.desc}
              </li>
            ))}
          </ol>
        </section>

        <div className="text-center py-12 border-t border-n2f-border">
          <h2 className="text-2xl font-extrabold text-white mb-2">สนใจบริการนี้?</h2>
          <p className="text-n2f-text-muted mb-6">ติดต่อเราเพื่อรับใบเสนอราคา</p>
          <Link href="/get-started" className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-lg bg-gradient-to-br from-n2f-accent to-n2f-accent-dark text-black shadow-[0_0_20px_var(--color-n2f-accent-glow)] transition-all duration-300">
            ติดต่อเรา
          </Link>
        </div>
      </div>
    </main>
  );
}
