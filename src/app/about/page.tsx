import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Node2Flow",
  description: "เกี่ยวกับ Node2Flow - MCP Server Platform ที่เชื่อมต่อ AI กับทุกบริการ",
};

const missions = [
  { icon: "🎯", title: "เข้าถึงง่าย", desc: "ทำให้ทุกคนใช้ MCP ได้ ไม่ต้องมีความรู้เทคนิค สมัครแล้วใช้ได้เลย" },
  { icon: "🔒", title: "ปลอดภัย", desc: "ข้อมูลเข้ารหัสทุกขั้นตอน รองรับ Application Password ไม่เก็บรหัสหลัก" },
  { icon: "⚡", title: "พร้อมใช้ทันที", desc: "MCP Server ที่ deploy แล้ว ไม่ต้องติดตั้ง ไม่ต้องมี server เอง" },
];

const techStack = [
  "n8n", "MCP Protocol", "Docker", "Cloudflare", "Node.js",
  "PostgreSQL", "Redis", "Next.js", "TypeScript",
];

const contacts = [
  { icon: "📧", label: "Email", value: "node2flow@gmail.com", href: "mailto:node2flow@gmail.com" },
  { icon: "✈️", label: "Telegram", value: "@node2flow_bot", href: "https://t.me/node2flow_bot" },
  { icon: "💚", label: "LINE", value: "@990pvvzg", href: "https://line.me/R/ti/p/@990pvvzg" },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden pt-[calc(80px+60px)] pb-20 bg-n2f">
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[url('/images/partners/mcp-icon.png')] bg-center bg-contain bg-no-repeat opacity-[0.025] pointer-events-none" />

      <div className="w-full max-w-[800px] mx-auto px-6 relative z-[1]">
        {/* Intro */}
        <div className="text-center mb-14">
          <Image src="/images/logo.jpg" alt="Node2Flow" width={100} height={100} className="rounded-2xl mx-auto mb-6 border-2 border-n2f-accent shadow-[0_0_20px_var(--color-n2f-accent-glow)]" />
          <h1 className="text-4xl max-md:text-[28px] font-extrabold text-white mb-2">Node2Flow</h1>
          <p className="text-lg text-n2f-text-secondary max-w-[600px] mx-auto">
            MCP Server Platform ที่เชื่อมต่อ AI ของคุณกับทุกบริการ
          </p>
        </div>

        {/* เกี่ยวกับเรา */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-n2f-accent mb-4">เกี่ยวกับเรา</h2>
          <p className="text-n2f-text-secondary leading-[1.8] mb-4">
            Node2Flow คือแพลตฟอร์มที่ให้บริการ MCP (Model Context Protocol) Server พร้อมใช้งาน
            เพื่อให้ AI ทุกตัว ไม่ว่าจะเป็น Claude, ChatGPT, Gemini หรือ Cursor
            สามารถสั่งงานบริการภายนอกได้โดยตรง ไม่ต้องเขียนโค้ด ไม่ต้องติดตั้งเอง
          </p>
          <p className="text-n2f-text-secondary leading-[1.8]">
            เราเชื่อว่า AI ควรเข้าถึงได้ง่ายสำหรับทุกคน ไม่จำเป็นต้องเป็นโปรแกรมเมอร์ก็สามารถใช้ AI
            ทำงานจริงจังได้ Node2Flow ช่วยให้คุณเชื่อมต่อ AI กับ Notion, Google Sheets, LINE, Slack,
            WooCommerce และบริการอื่นๆ อีกมากมาย ด้วย MCP Server ที่พร้อมใช้ทันที
          </p>
        </section>

        {/* พันธกิจ */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-n2f-accent mb-4">พันธกิจของเรา</h2>
          <div className="grid grid-cols-3 gap-6 mt-6 max-md:grid-cols-1">
            {missions.map((m) => (
              <div key={m.title} className="bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border border-n2f-border rounded-2xl p-6 text-center hover:border-n2f-accent hover:shadow-[0_0_20px_var(--color-n2f-accent-glow)] hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-2">{m.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{m.title}</h3>
                <p className="text-sm text-n2f-text-muted leading-[1.7]">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* สิ่งที่เราทำ */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-n2f-accent mb-4">สิ่งที่เราทำ</h2>
          <p className="text-n2f-text-secondary leading-[1.8]">
            เราให้บริการครบวงจรด้าน MCP ตั้งแต่ MCP Server Hub ที่พร้อมใช้งาน
            Workflow Automation สำเร็จรูป รับสร้าง Custom MCP Server ตามความต้องการ
            รับ Host MCP Server ให้สำหรับคนที่ไม่มี server เอง
            และบริการติดตั้ง MCP Server บน server ของลูกค้าที่ setup ไม่เป็น
          </p>
        </section>

        {/* เทคโนโลยี */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-n2f-accent mb-4">เทคโนโลยีที่ใช้</h2>
          <p className="text-n2f-text-secondary leading-[1.8] mb-4">เราใช้เทคโนโลยีที่ทันสมัยและเชื่อถือได้:</p>
          <div className="flex flex-wrap gap-2.5 mt-4">
            {techStack.map((tech) => (
              <span key={tech} className="px-4 py-1.5 bg-n2f-accent-subtle border border-n2f-accent/20 rounded-full text-sm text-n2f-accent font-semibold">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ติดต่อ */}
        <section>
          <h2 className="text-2xl font-extrabold text-n2f-accent mb-4">ติดต่อเรา</h2>
          <div className="grid grid-cols-3 gap-6 mt-6 max-md:grid-cols-1">
            {contacts.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener" className="flex flex-col items-center gap-2 p-6 bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border border-n2f-border rounded-2xl hover:border-n2f-accent hover:shadow-[0_0_20px_var(--color-n2f-accent-glow)] hover:-translate-y-1 transition-all duration-300">
                <span className="text-3xl">{c.icon}</span>
                <span className="text-sm font-semibold text-white">{c.label}</span>
                <span className="text-xs text-n2f-text-muted">{c.value}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
