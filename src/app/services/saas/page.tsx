import Link from "next/link";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "SaaS n8n-MCP - Node2Flow",
  description: "สมัครรับ MCP Server URL ใช้งานได้ทันที ไม่ต้องติดตั้ง ไม่ต้องมี server",
};

const DASHBOARD_URL = "https://n8n-management-dashboard.node2flow.net";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    desc: "เริ่มต้นใช้งาน MCP ฟรี",
    features: ["100 requests/เดือน", "1 Connection", "32 MCP Tools", "Community Support"],
    popular: false,
  },
  {
    name: "Starter",
    price: "$9.99",
    period: "/เดือน",
    desc: "สำหรับเริ่มใช้งานจริง",
    features: ["1,000 requests/เดือน", "3 Connections", "32 MCP Tools", "Priority Support"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$29.99",
    period: "/เดือน",
    desc: "สำหรับใช้งานจริงจัง",
    features: ["10,000 requests/เดือน", "10 Connections", "32 MCP Tools", "Priority Support"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99.99",
    period: "/เดือน",
    desc: "สำหรับทีมและธุรกิจ",
    features: ["100,000 requests/เดือน", "Unlimited Connections", "32 MCP Tools", "Dedicated Support"],
    popular: false,
  },
];

const howSteps = [
  { title: "สมัครสมาชิก", desc: "สร้างบัญชีที่ Dashboard ด้วย GitHub หรือ Google" },
  { title: "เชื่อมต่อ n8n", desc: "ใส่ n8n URL + API Key (เข้ารหัสด้วย AES-256-GCM)" },
  { title: "รับ MCP API Key", desc: "สร้าง API Key สำหรับใช้กับ AI Client" },
  { title: "เริ่มใช้งาน", desc: "ตั้งค่าใน Claude Desktop, Cursor หรือ Windsurf แล้วสั่ง AI สร้าง workflow" },
];

const benefits = [
  "32 MCP Tools — ครอบคลุม n8n Public API ทั้งหมด (Workflow, Execution, Credential, Tag, User)",
  "OAuth Login — สมัครด้วย GitHub หรือ Google ได้ทันที",
  "AES-256-GCM — เข้ารหัส n8n credentials ที่เก็บในระบบ",
  "Edge Deployment — รันบน Cloudflare Workers ทั่วโลก latency ต่ำ",
  "Usage Dashboard — ติดตามการใช้งานรายเดือน จัดการ connections",
  "Auto-updates — อัพเดท tools ใหม่อัตโนมัติ",
];

export default function SaaSPage() {
  return (
    <main className="pt-[calc(80px+80px)] pb-20 bg-n2f">
      <div className="w-full max-w-[800px] mx-auto px-6">
        {/* Hero */}
        <FadeIn>
          <div className="text-center pb-16 border-b border-n2f-border mb-16">
            <span className="inline-block px-3.5 py-1.5 text-xs font-medium tracking-[2px] uppercase text-n2f-accent border border-n2f-accent/20 rounded-full bg-n2f-accent/[0.06] mb-8">
              Cloud Service
            </span>
            <h1 className="text-5xl max-md:text-4xl font-bold text-n2f-text mb-4">SaaS n8n-MCP</h1>
            <p className="text-lg text-n2f-text-secondary max-w-[600px] mx-auto leading-relaxed mb-8">
              สมัครรับ MCP URL ใช้งานได้ทันที ไม่ต้องติดตั้ง ไม่ต้องมี server เชื่อมต่อ AI กับ n8n ได้เลย
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href={DASHBOARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg bg-n2f-accent text-black hover:bg-n2f-accent-dark transition-colors duration-200"
              >
                สมัครใช้งาน
              </a>
              <Link href="/products/mcp" className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg border border-n2f-border text-n2f-text-secondary hover:border-n2f-border-hover hover:text-n2f-text transition-all duration-200">
                ดูรายละเอียด Product
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* คืออะไร */}
        <FadeIn delay={100}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-n2f-text mb-4">SaaS n8n-MCP คืออะไร?</h2>
            <p className="text-n2f-text-secondary leading-relaxed">
              เราให้บริการ MCP Server แบบ Cloud สมัครแล้วได้ URL + API Key
              เอาไปใส่ใน Claude Desktop, Cursor, Windsurf หรือ n8n ได้เลย
              ไม่ต้องติดตั้งอะไร ไม่ต้องมี server ของตัวเอง
            </p>
          </section>
        </FadeIn>

        {/* วิธีใช้งาน */}
        <FadeIn delay={150}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-n2f-text mb-6">วิธีเริ่มใช้งาน</h2>
            <ol className="space-y-0">
              {howSteps.map((step, i) => (
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

        {/* สิ่งที่ได้รับ */}
        <FadeIn delay={200}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-n2f-text mb-6">สิ่งที่ได้รับ</h2>
            <ul className="space-y-0">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 py-3 text-sm text-n2f-text-secondary border-b border-n2f-border last:border-0 leading-relaxed">
                  <Check className="w-4 h-4 text-n2f-accent shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        {/* Pricing */}
        <FadeIn delay={250}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-n2f-text mb-8">แพ็คเกจ</h2>
            <div className="grid grid-cols-4 gap-3 max-md:grid-cols-2 max-[480px]:grid-cols-1">
              {plans.map((plan) => (
                <div key={plan.name} className={`relative flex flex-col bg-n2f-secondary border rounded-xl p-5 text-center ${plan.popular ? "border-n2f-accent/40" : "border-n2f-border"}`}>
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-n2f-accent text-black text-xs font-bold rounded-md">
                      แนะนำ
                    </span>
                  )}
                  <h3 className="text-base font-bold text-n2f-text mb-1">{plan.name}</h3>
                  <p className="text-2xl font-bold text-n2f-accent mb-1">
                    {plan.price}<span className="text-xs text-n2f-text-muted font-normal">{plan.period}</span>
                  </p>
                  <p className="text-xs text-n2f-text-muted mb-4">{plan.desc}</p>
                  <ul className="text-left flex-1 mb-4 space-y-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-n2f-text-muted">
                        <Check className="w-3 h-3 text-n2f-accent shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={DASHBOARD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center px-4 py-2 text-xs font-medium rounded-lg bg-n2f-accent text-black hover:bg-n2f-accent-dark transition-colors duration-200"
                  >
                    เริ่มใช้งาน
                  </a>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={300}>
          <div className="text-center py-14 border-t border-n2f-border">
            <h2 className="text-2xl font-bold text-n2f-text mb-3">พร้อมเริ่มต้น?</h2>
            <p className="text-n2f-text-muted mb-8">สมัครฟรี ทดลอง 100 requests/เดือน</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href={DASHBOARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg bg-n2f-accent text-black hover:bg-n2f-accent-dark transition-colors duration-200"
              >
                เข้า Dashboard
              </a>
              <Link href="/services/private" className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg border border-n2f-border text-n2f-text-secondary hover:border-n2f-border-hover hover:text-n2f-text transition-all duration-200">
                ดูแบบ Private
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
