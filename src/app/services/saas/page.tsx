import Link from "next/link";
import type { Metadata } from "next";

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
    <main className="relative overflow-hidden pt-[calc(80px+60px)] bg-n2f">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[url('/images/partners/mcp-icon.png')] bg-center bg-contain bg-no-repeat opacity-[0.025] pointer-events-none" />

      <div className="w-full max-w-[800px] mx-auto px-6 relative z-[1]">
        {/* Hero */}
        <div className="text-center pb-14 border-b border-n2f-border mb-14">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-[2px] uppercase text-n2f-accent border border-n2f-accent/30 rounded-full bg-n2f-accent/[0.08] mb-6">
            Cloud Service
          </span>
          <h1 className="text-[56px] max-md:text-4xl font-extrabold text-white mb-4">SaaS n8n-MCP</h1>
          <p className="text-lg text-n2f-text-secondary max-w-[600px] mx-auto leading-[1.7] mb-8">
            สมัครรับ MCP URL ใช้งานได้ทันที ไม่ต้องติดตั้ง ไม่ต้องมี server เชื่อมต่อ AI กับ n8n ได้เลย
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-lg bg-gradient-to-br from-n2f-accent to-n2f-accent-dark text-black shadow-[0_0_20px_var(--color-n2f-accent-glow)] hover:shadow-[0_0_40px_var(--color-n2f-accent-glow)] hover:-translate-y-0.5 transition-all duration-300"
            >
              สมัครใช้งาน
            </a>
            <Link href="/products/mcp" className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-lg border-2 border-white/30 text-white hover:border-n2f-accent hover:text-n2f-accent transition-all duration-300">
              ดูรายละเอียด Product
            </Link>
          </div>
        </div>

        {/* คืออะไร */}
        <section className="mb-14">
          <h2 className="text-2xl font-extrabold text-n2f-accent mb-6">SaaS n8n-MCP คืออะไร?</h2>
          <p className="text-n2f-text-secondary leading-[1.8]">
            เราให้บริการ MCP Server แบบ Cloud สมัครแล้วได้ URL + API Key
            เอาไปใส่ใน Claude Desktop, Cursor, Windsurf หรือ n8n ได้เลย
            ไม่ต้องติดตั้งอะไร ไม่ต้องมี server ของตัวเอง
          </p>
        </section>

        {/* วิธีใช้งาน */}
        <section className="mb-14">
          <h2 className="text-2xl font-extrabold text-n2f-accent mb-6">วิธีเริ่มใช้งาน</h2>
          <ol className="space-y-0">
            {howSteps.map((step, i) => (
              <li key={i} className="relative pl-10 py-2.5 text-sm text-n2f-text-secondary border-b border-white/[0.04] last:border-0 leading-relaxed">
                <span className="absolute left-0 top-2 w-7 h-7 flex items-center justify-center bg-gradient-to-br from-n2f-accent to-n2f-accent-dark text-black text-[13px] font-bold rounded-full">
                  {i + 1}
                </span>
                <strong className="text-white">{step.title}</strong> — {step.desc}
              </li>
            ))}
          </ol>
        </section>

        {/* สิ่งที่ได้รับ */}
        <section className="mb-14">
          <h2 className="text-2xl font-extrabold text-n2f-accent mb-6">สิ่งที่ได้รับ</h2>
          <ul className="space-y-0">
            {benefits.map((b, i) => (
              <li key={i} className="relative pl-6 py-2 text-sm text-n2f-text-secondary border-b border-white/[0.04] last:border-0 leading-relaxed before:content-['✓'] before:absolute before:left-0 before:text-n2f-accent before:font-bold">
                {b}
              </li>
            ))}
          </ul>
        </section>

        {/* Pricing */}
        <section className="mb-14">
          <h2 className="text-2xl font-extrabold text-n2f-accent mb-6">แพ็คเกจ</h2>
          <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2 max-[480px]:grid-cols-1">
            {plans.map((plan) => (
              <div key={plan.name} className={`relative flex flex-col bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border rounded-2xl p-5 text-center ${plan.popular ? "border-n2f-accent shadow-[0_0_20px_var(--color-n2f-accent-glow)]" : "border-n2f-border"}`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 bg-n2f-accent text-black text-xs font-bold rounded-lg">
                    แนะนำ
                  </span>
                )}
                <h3 className="text-base font-extrabold text-white mb-1">{plan.name}</h3>
                <p className="text-2xl font-extrabold text-n2f-accent mb-1">
                  {plan.price}<span className="text-xs text-n2f-text-muted font-normal">{plan.period}</span>
                </p>
                <p className="text-xs text-n2f-text-muted mb-4">{plan.desc}</p>
                <ul className="text-left flex-1 mb-4">
                  {plan.features.map((f, i) => (
                    <li key={i} className="relative pl-5 py-0.5 text-xs text-n2f-text-muted before:content-['✓'] before:absolute before:left-0 before:text-n2f-accent before:font-bold">
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={DASHBOARD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-br from-n2f-accent to-n2f-accent-dark text-black hover:shadow-[0_0_20px_var(--color-n2f-accent-glow)] transition-all duration-300"
                >
                  เริ่มใช้งาน
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center py-12 border-t border-n2f-border">
          <h2 className="text-2xl font-extrabold text-white mb-2">พร้อมเริ่มต้น?</h2>
          <p className="text-n2f-text-muted mb-6">สมัครฟรี ทดลอง 100 requests/เดือน</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-lg bg-gradient-to-br from-n2f-accent to-n2f-accent-dark text-black shadow-[0_0_20px_var(--color-n2f-accent-glow)] hover:shadow-[0_0_40px_var(--color-n2f-accent-glow)] transition-all duration-300"
            >
              เข้า Dashboard
            </a>
            <Link href="/services/private" className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-lg border-2 border-white/30 text-white hover:border-n2f-accent hover:text-n2f-accent transition-all duration-300">
              ดูแบบ Private
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
