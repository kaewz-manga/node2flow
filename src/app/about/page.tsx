import Image from "next/image";
import type { Metadata } from "next";
import { Target, Shield, Zap, Mail, Send, Heart } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "About Us - Node2Flow",
  description: "เกี่ยวกับ Node2Flow - MCP Server Platform ที่เชื่อมต่อ AI กับทุกบริการ",
};

const missions = [
  { icon: Target, title: "เข้าถึงง่าย", desc: "ทำให้ทุกคนใช้ MCP ได้ ไม่ต้องมีความรู้เทคนิค สมัครแล้วใช้ได้เลย" },
  { icon: Shield, title: "ปลอดภัย", desc: "ข้อมูลเข้ารหัสทุกขั้นตอน รองรับ Application Password ไม่เก็บรหัสหลัก" },
  { icon: Zap, title: "พร้อมใช้ทันที", desc: "MCP Server ที่ deploy แล้ว ไม่ต้องติดตั้ง ไม่ต้องมี server เอง" },
];

const techStack = [
  "n8n", "MCP Protocol", "Docker", "Cloudflare", "Node.js",
  "PostgreSQL", "Redis", "Next.js", "TypeScript",
];

const contacts = [
  { icon: Mail, label: "Email", value: "node2flow@gmail.com", href: "mailto:node2flow@gmail.com" },
  { icon: Send, label: "Telegram", value: "@node2flow_bot", href: "https://t.me/node2flow_bot" },
  { icon: Heart, label: "LINE", value: "@990pvvzg", href: "https://line.me/R/ti/p/@990pvvzg" },
];

export default function AboutPage() {
  return (
    <main className="pt-[calc(80px+80px)] pb-20 bg-n2f">
      <div className="w-full max-w-[800px] mx-auto px-6">
        {/* Intro */}
        <FadeIn>
          <div className="text-center mb-16">
            <Image src="/images/logo.jpg" alt="Node2Flow" width={80} height={80} className="rounded-2xl mx-auto mb-6" />
            <h1 className="text-4xl max-md:text-[28px] font-bold text-n2f-text mb-3">Node2Flow</h1>
            <p className="text-lg text-n2f-text-secondary max-w-[600px] mx-auto">
              MCP Server Platform ที่เชื่อมต่อ AI ของคุณกับทุกบริการ
            </p>
          </div>
        </FadeIn>

        {/* เกี่ยวกับเรา */}
        <FadeIn delay={100}>
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-n2f-text mb-4">เกี่ยวกับเรา</h2>
            <p className="text-n2f-text-secondary leading-relaxed mb-4">
              Node2Flow คือแพลตฟอร์มที่ให้บริการ MCP (Model Context Protocol) Server พร้อมใช้งาน
              เพื่อให้ AI ทุกตัว ไม่ว่าจะเป็น Claude, ChatGPT, Gemini หรือ Cursor
              สามารถสั่งงานบริการภายนอกได้โดยตรง ไม่ต้องเขียนโค้ด ไม่ต้องติดตั้งเอง
            </p>
            <p className="text-n2f-text-secondary leading-relaxed">
              เราเชื่อว่า AI ควรเข้าถึงได้ง่ายสำหรับทุกคน ไม่จำเป็นต้องเป็นโปรแกรมเมอร์ก็สามารถใช้ AI
              ทำงานจริงจังได้ Node2Flow ช่วยให้คุณเชื่อมต่อ AI กับ Notion, Google Sheets, LINE, Slack,
              WooCommerce และบริการอื่นๆ อีกมากมาย ด้วย MCP Server ที่พร้อมใช้ทันที
            </p>
          </section>
        </FadeIn>

        {/* พันธกิจ */}
        <FadeIn delay={150}>
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-n2f-text mb-6">พันธกิจของเรา</h2>
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
              {missions.map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.title} className="bg-n2f-secondary border border-n2f-border rounded-xl p-6 text-center hover:border-n2f-border-hover transition-colors duration-200">
                    <div className="w-10 h-10 rounded-lg bg-n2f-accent/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-n2f-accent" />
                    </div>
                    <h3 className="text-base font-semibold text-n2f-text mb-2">{m.title}</h3>
                    <p className="text-sm text-n2f-text-muted leading-relaxed">{m.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </FadeIn>

        {/* สิ่งที่เราทำ */}
        <FadeIn delay={200}>
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-n2f-text mb-4">สิ่งที่เราทำ</h2>
            <p className="text-n2f-text-secondary leading-relaxed">
              เราให้บริการครบวงจรด้าน MCP ตั้งแต่ MCP Server Hub ที่พร้อมใช้งาน
              Workflow Automation สำเร็จรูป รับสร้าง Custom MCP Server ตามความต้องการ
              รับ Host MCP Server ให้สำหรับคนที่ไม่มี server เอง
              และบริการติดตั้ง MCP Server บน server ของลูกค้าที่ setup ไม่เป็น
            </p>
          </section>
        </FadeIn>

        {/* เทคโนโลยี */}
        <FadeIn delay={250}>
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-n2f-text mb-4">เทคโนโลยีที่ใช้</h2>
            <p className="text-n2f-text-secondary leading-relaxed mb-4">เราใช้เทคโนโลยีที่ทันสมัยและเชื่อถือได้:</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {techStack.map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-n2f-accent/[0.06] border border-n2f-accent/15 rounded-md text-sm text-n2f-accent font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ติดต่อ */}
        <FadeIn delay={300}>
          <section>
            <h2 className="text-2xl font-bold text-n2f-text mb-6">ติดต่อเรา</h2>
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
              {contacts.map((c) => {
                const Icon = c.icon;
                return (
                  <a key={c.label} href={c.href} target="_blank" rel="noopener" className="flex flex-col items-center gap-2 p-6 bg-n2f-secondary border border-n2f-border rounded-xl hover:border-n2f-border-hover transition-colors duration-200">
                    <Icon className="w-6 h-6 text-n2f-accent" />
                    <span className="text-sm font-semibold text-n2f-text">{c.label}</span>
                    <span className="text-xs text-n2f-text-muted">{c.value}</span>
                  </a>
                );
              })}
            </div>
          </section>
        </FadeIn>
      </div>
    </main>
  );
}
