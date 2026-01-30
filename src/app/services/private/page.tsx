import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private MCP Server - Node2Flow",
  description: "MCP Server ส่วนตัวบน server ของคุณ ปลอดภัย ข้อมูลไม่ออกจากระบบ",
};

const includes = [
  "MCP Server ส่วนตัว ไม่ share กับใคร",
  "Deploy บน server ของคุณ ข้อมูลไม่ออกจากระบบ",
  "Custom configuration ตามความต้องการ",
  "เชื่อมต่อกับ n8n instance ของคุณโดยตรง",
  "Full control — แก้ไข ปรับแต่ง อัพเดทได้เอง",
  "เอกสารการใช้งานครบถ้วน",
  "Support หลังติดตั้ง 14 วัน",
];

const benefits = [
  { icon: "🔒", title: "ความปลอดภัยสูงสุด", desc: "ข้อมูลอยู่บน server ของคุณ ไม่ผ่าน cloud ของเรา" },
  { icon: "⚡", title: "ความเร็วสูง", desc: "MCP อยู่ใน Docker network เดียวกับ n8n ลด latency" },
  { icon: "🛠️", title: "ปรับแต่งได้เต็มที่", desc: "เพิ่ม tools, แก้ config, เชื่อมต่อ service อื่นๆ" },
];

export default function PrivatePage() {
  return (
    <main className="relative overflow-hidden pt-[calc(80px+60px)] bg-n2f">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[url('/images/partners/mcp-icon.png')] bg-center bg-contain bg-no-repeat opacity-[0.025] pointer-events-none" />

      <div className="w-full max-w-[800px] mx-auto px-6 relative z-[1]">
        <div className="text-center pb-14 border-b border-n2f-border mb-14">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-[2px] uppercase text-n2f-accent border border-n2f-accent/30 rounded-full bg-n2f-accent/[0.08] mb-6">
            Private Server
          </span>
          <h1 className="text-[56px] max-md:text-4xl font-extrabold text-white mb-4">Private MCP Server</h1>
          <p className="text-lg text-n2f-text-secondary max-w-[600px] mx-auto leading-[1.7] mb-8">
            MCP Server ส่วนตัวบน server ของคุณ ปลอดภัย ข้อมูลไม่ออกจากระบบ
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/get-started" className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-lg bg-gradient-to-br from-n2f-accent to-n2f-accent-dark text-black shadow-[0_0_20px_var(--color-n2f-accent-glow)] transition-all duration-300">
              สนใจบริการนี้
            </Link>
            <Link href="/services/saas" className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-lg border-2 border-white/30 text-white hover:border-n2f-accent hover:text-n2f-accent transition-all duration-300">
              ดูแบบ SaaS
            </Link>
          </div>
        </div>

        <section className="mb-14">
          <h2 className="text-2xl font-extrabold text-n2f-accent mb-6">ข้อดีของ Private MCP</h2>
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {benefits.map((b) => (
              <div key={b.title} className="bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border border-n2f-border rounded-2xl p-6 text-center hover:border-n2f-accent hover:shadow-[0_0_20px_var(--color-n2f-accent-glow)] hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-2">{b.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{b.title}</h3>
                <p className="text-sm text-n2f-text-muted leading-[1.7]">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

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

        <div className="text-center py-12 border-t border-n2f-border">
          <h2 className="text-2xl font-extrabold text-white mb-2">สนใจ Private MCP?</h2>
          <p className="text-n2f-text-muted mb-6">ติดต่อเราเพื่อปรึกษาและรับใบเสนอราคา</p>
          <Link href="/get-started" className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-lg bg-gradient-to-br from-n2f-accent to-n2f-accent-dark text-black shadow-[0_0_20px_var(--color-n2f-accent-glow)] transition-all duration-300">
            ติดต่อเรา
          </Link>
        </div>
      </div>
    </main>
  );
}
