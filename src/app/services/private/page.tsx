import Link from "next/link";
import type { Metadata } from "next";
import { Shield, Zap, Wrench, Check } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

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
  { icon: Shield, title: "ความปลอดภัยสูงสุด", desc: "ข้อมูลอยู่บน server ของคุณ ไม่ผ่าน cloud ของเรา" },
  { icon: Zap, title: "ความเร็วสูง", desc: "MCP อยู่ใน Docker network เดียวกับ n8n ลด latency" },
  { icon: Wrench, title: "ปรับแต่งได้เต็มที่", desc: "เพิ่ม tools, แก้ config, เชื่อมต่อ service อื่นๆ" },
];

export default function PrivatePage() {
  return (
    <main className="pt-[calc(80px+80px)] pb-20 bg-n2f">
      <div className="w-full max-w-[800px] mx-auto px-6">
        <FadeIn>
          <div className="text-center pb-16 border-b border-n2f-border mb-16">
            <span className="inline-block px-3.5 py-1.5 text-xs font-medium tracking-[2px] uppercase text-n2f-accent border border-n2f-accent/20 rounded-full bg-n2f-accent/[0.06] mb-8">
              Private Server
            </span>
            <h1 className="text-5xl max-md:text-4xl font-bold text-n2f-text mb-4">Private MCP Server</h1>
            <p className="text-lg text-n2f-text-secondary max-w-[600px] mx-auto leading-relaxed mb-8">
              MCP Server ส่วนตัวบน server ของคุณ ปลอดภัย ข้อมูลไม่ออกจากระบบ
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/login" className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg bg-n2f-accent text-black hover:bg-n2f-accent-dark transition-colors duration-200">
                สนใจบริการนี้
              </Link>
              <Link href="/services/saas" className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg border border-n2f-border text-n2f-text-secondary hover:border-n2f-border-hover hover:text-n2f-text transition-all duration-200">
                ดูแบบ SaaS
              </Link>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-n2f-text mb-6">ข้อดีของ Private MCP</h2>
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.title} className="bg-n2f-secondary border border-n2f-border rounded-xl p-6 text-center hover:border-n2f-border-hover transition-colors duration-200">
                    <div className="w-10 h-10 rounded-lg bg-n2f-accent/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-n2f-accent" />
                    </div>
                    <h3 className="text-base font-semibold text-n2f-text mb-2">{b.title}</h3>
                    <p className="text-sm text-n2f-text-muted leading-relaxed">{b.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={200}>
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

        <FadeIn delay={300}>
          <div className="text-center py-14 border-t border-n2f-border">
            <h2 className="text-2xl font-bold text-n2f-text mb-3">สนใจ Private MCP?</h2>
            <p className="text-n2f-text-muted mb-8">ติดต่อเราเพื่อปรึกษาและรับใบเสนอราคา</p>
            <Link href="/login" className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg bg-n2f-accent text-black hover:bg-n2f-accent-dark transition-colors duration-200">
              ติดต่อเรา
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
