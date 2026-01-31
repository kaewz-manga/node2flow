import Link from "next/link";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

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
    <main className="pt-[calc(80px+80px)] pb-20 bg-n2f">
      <div className="w-full max-w-[800px] mx-auto px-6">
        <FadeIn>
          <div className="text-center pb-16 border-b border-n2f-border mb-16">
            <span className="inline-block px-3.5 py-1.5 text-xs font-medium tracking-[2px] uppercase text-n2f-accent border border-n2f-accent/20 rounded-full bg-n2f-accent/[0.06] mb-8">
              Installation Service
            </span>
            <h1 className="text-5xl max-md:text-4xl font-bold text-n2f-text mb-4">รับติดตั้ง n8n-MCP</h1>
            <p className="text-lg text-n2f-text-secondary max-w-[600px] mx-auto leading-relaxed mb-8">
              มี server แต่ setup ไม่เป็น? เราติดตั้ง n8n + MCP Server ให้พร้อมใช้งาน
            </p>
            <Link href="/login" className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg bg-n2f-accent text-black hover:bg-n2f-accent-dark transition-colors duration-200">
              สนใจบริการนี้
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-n2f-text mb-6">สิ่งที่ได้รับ</h2>
            <ul className="space-y-0">
              {includes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 py-3 text-sm text-n2f-text-secondary border-b border-n2f-border last:border-0 leading-relaxed">
                  <Check className="w-4 h-4 text-n2f-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        <FadeIn delay={200}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-n2f-text mb-6">ขั้นตอนการทำงาน</h2>
            <ol className="space-y-0">
              {steps.map((step, i) => (
                <li key={i} className="relative pl-12 py-3 text-sm text-n2f-text-secondary border-b border-n2f-border last:border-0 leading-relaxed">
                  <span className="absolute left-0 top-2 w-8 h-8 flex items-center justify-center bg-n2f-accent text-black text-sm font-bold rounded-full">
                    {i + 1}
                  </span>
                  <strong className="text-n2f-text">{step.title}</strong> — {step.desc}
                </li>
              ))}
            </ol>
          </section>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="text-center py-14 border-t border-n2f-border">
            <h2 className="text-2xl font-bold text-n2f-text mb-3">สนใจบริการนี้?</h2>
            <p className="text-n2f-text-muted mb-8">ติดต่อเราเพื่อรับใบเสนอราคา</p>
            <Link href="/login" className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg bg-n2f-accent text-black hover:bg-n2f-accent-dark transition-colors duration-200">
              ติดต่อเรา
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
