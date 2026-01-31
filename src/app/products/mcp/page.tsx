import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "n8n Management MCP - Node2Flow",
  description:
    "Multi-tenant SaaS MCP Server สำหรับควบคุม n8n ผ่าน AI ด้วย 32 MCP Tools รองรับ Claude Desktop, Cursor, Windsurf",
};

const DASHBOARD_URL = "https://n8n-management-dashboard.node2flow.net";
const GITHUB_URL = "https://github.com/kaewz-manga/n8n-management-mcp";

const toolGroups = [
  {
    name: "Workflow Management",
    tools: [
      "list_workflows",
      "create_workflow",
      "update_workflow",
      "delete_workflow",
      "activate_workflow",
      "deactivate_workflow",
      "execute_workflow",
      "get_workflow",
      "tag_workflow",
    ],
  },
  {
    name: "Execution Management",
    tools: [
      "list_executions",
      "get_execution",
      "delete_execution",
      "retry_execution",
    ],
  },
  {
    name: "Credential Management",
    tools: [
      "list_credentials",
      "create_credential",
      "update_credential",
      "delete_credential",
      "get_credential_schema",
    ],
  },
  {
    name: "Tags & Variables",
    tools: [
      "list_tags",
      "create_tag",
      "update_tag",
      "delete_tag",
      "list_variables",
      "create_variable",
      "update_variable",
      "delete_variable",
    ],
  },
  {
    name: "User Management",
    tools: [
      "list_users",
      "get_user",
      "update_user_role",
      "delete_user",
      "invite_user",
      "get_current_user",
    ],
  },
];

const highlights = [
  {
    icon: "👥",
    title: "Multi-tenant",
    desc: "รองรับหลาย user แยก credential ปลอดภัย",
  },
  {
    icon: "🔐",
    title: "OAuth Login",
    desc: "สมัคร/เข้าสู่ระบบด้วย GitHub หรือ Google",
  },
  {
    icon: "🛡️",
    title: "AES-256-GCM Encryption",
    desc: "เข้ารหัส n8n credentials ที่เก็บในระบบ",
  },
  {
    icon: "🌍",
    title: "Edge Deployment",
    desc: "รันบน Cloudflare Workers ทั่วโลก latency ต่ำ",
  },
  {
    icon: "📊",
    title: "Rate Limiting & Usage",
    desc: "จำกัด request ตาม plan ติดตามการใช้งานรายเดือน",
  },
  {
    icon: "⚡",
    title: "Token Efficient",
    desc: "Diff-based updates ประหยัด AI token 80-90%",
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    requests: "100 / เดือน",
    connections: "1",
    popular: false,
  },
  {
    name: "Starter",
    price: "$9.99",
    period: "/เดือน",
    requests: "1,000 / เดือน",
    connections: "3",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29.99",
    period: "/เดือน",
    requests: "10,000 / เดือน",
    connections: "10",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99.99",
    period: "/เดือน",
    requests: "100,000 / เดือน",
    connections: "Unlimited",
    popular: false,
  },
];

const steps = [
  {
    title: "สมัครสมาชิก",
    desc: "สร้างบัญชีที่ Dashboard ด้วย GitHub หรือ Google",
  },
  {
    title: "เชื่อมต่อ n8n",
    desc: "ใส่ n8n URL + API Key (เข้ารหัส AES-256-GCM)",
  },
  {
    title: "รับ API Key",
    desc: "สร้าง MCP API Key สำหรับใช้กับ AI Client",
  },
  {
    title: "ใช้กับ AI",
    desc: "ตั้งค่าใน Claude Desktop, Cursor หรือ Windsurf แล้วเริ่มสั่งงาน",
  },
];

const aiClients = ["Claude Desktop", "Cursor", "Windsurf", "n8n"];
const techStack = [
  "Cloudflare Workers",
  "Cloudflare D1",
  "Cloudflare KV",
  "React",
  "JWT",
  "AES-256-GCM",
  "PBKDF2",
];

export default function MCPProductPage() {
  return (
    <main className="relative overflow-hidden pt-[calc(80px+60px)] bg-n2f">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[url('/images/partners/mcp-icon.png')] bg-center bg-contain bg-no-repeat opacity-[0.025] pointer-events-none" />

      <div className="w-full max-w-[800px] mx-auto px-6 relative z-[1]">
        {/* Hero */}
        <div className="text-center pb-14 border-b border-n2f-border mb-14">
          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-[2px] uppercase text-n2f-accent border border-n2f-accent/30 rounded-full bg-n2f-accent/[0.08] mb-6">
            Product
          </span>
          <h1 className="text-[56px] max-md:text-4xl font-extrabold text-white mb-4">
            n8n Management MCP
          </h1>
          <p className="text-lg text-n2f-text-secondary max-w-[600px] mx-auto leading-[1.7] mb-8">
            Multi-tenant SaaS MCP Server สำหรับควบคุม n8n ผ่าน AI ด้วย 32 Tools
            รองรับ Claude Desktop, Cursor, Windsurf
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-lg bg-gradient-to-br from-n2f-accent to-n2f-accent-dark text-black shadow-[0_0_20px_var(--color-n2f-accent-glow)] hover:shadow-[0_0_40px_var(--color-n2f-accent-glow)] hover:-translate-y-0.5 transition-all duration-300"
            >
              เข้า Dashboard
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-lg border-2 border-white/30 text-white hover:border-n2f-accent hover:text-n2f-accent transition-all duration-300"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* คืออะไร */}
        <section className="mb-14">
          <h2 className="text-2xl font-extrabold text-n2f-accent mb-6">
            n8n Management MCP คืออะไร?
          </h2>
          <p className="text-n2f-text-secondary leading-[1.8] mb-4">
            MCP (Model Context Protocol) เป็นมาตรฐานที่ให้ AI เชื่อมต่อกับระบบภายนอกได้
            n8n Management MCP ทำให้ AI อย่าง Claude สามารถสร้าง แก้ไข
            และจัดการ n8n workflow ได้โดยตรง ผ่านคำสั่งภาษาธรรมชาติ
          </p>
          <p className="text-n2f-text-secondary leading-[1.8]">
            แทนที่จะต้อง copy-paste JSON หรือกดสร้าง workflow เอง
            แค่บอก AI ว่าต้องการอะไร AI จะสร้าง workflow ให้ ติดตั้งลงใน n8n
            และเปิดใช้งานให้อัตโนมัติ
          </p>
        </section>

        {/* 32 MCP Tools */}
        <section className="mb-14">
          <h2 className="text-2xl font-extrabold text-n2f-accent mb-2">
            32 MCP Tools
          </h2>
          <p className="text-n2f-text-muted text-sm mb-6">
            ครอบคลุม n8n Public API ทั้งหมด
          </p>
          <div className="space-y-4">
            {toolGroups.map((group) => (
              <div
                key={group.name}
                className="bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border border-n2f-border rounded-xl p-5"
              >
                <h3 className="text-sm font-bold text-white mb-3">
                  {group.name}
                  <span className="text-n2f-text-muted font-normal ml-2">
                    ({group.tools.length})
                  </span>
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.tools.map((tool) => (
                    <code
                      key={tool}
                      className="text-xs text-n2f-accent bg-n2f-accent/[0.08] border border-n2f-accent/20 px-2 py-0.5 rounded"
                    >
                      {tool}
                    </code>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* จุดเด่น */}
        <section className="mb-14">
          <h2 className="text-2xl font-extrabold text-n2f-accent mb-6">
            จุดเด่น
          </h2>
          <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border border-n2f-border rounded-xl p-5 hover:border-n2f-accent/50 transition-colors duration-300"
              >
                <div className="text-2xl mb-2">{h.icon}</div>
                <h3 className="text-sm font-bold text-white mb-1">
                  {h.title}
                </h3>
                <p className="text-xs text-n2f-text-muted leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-14">
          <h2 className="text-2xl font-extrabold text-n2f-accent mb-6">
            แพ็คเกจ
          </h2>
          <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2 max-[480px]:grid-cols-1">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border rounded-2xl p-5 text-center ${
                  plan.popular
                    ? "border-n2f-accent shadow-[0_0_20px_var(--color-n2f-accent-glow)]"
                    : "border-n2f-border"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-n2f-accent text-black text-xs font-bold rounded-lg">
                    แนะนำ
                  </span>
                )}
                <h3 className="text-base font-extrabold text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-2xl font-extrabold text-n2f-accent mb-0.5">
                  {plan.price}
                  <span className="text-xs text-n2f-text-muted font-normal">
                    {plan.period}
                  </span>
                </p>
                <div className="text-xs text-n2f-text-muted mb-3 space-y-1">
                  <p>{plan.requests}</p>
                  <p>{plan.connections} connections</p>
                </div>
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

        {/* วิธีเริ่มใช้ */}
        <section className="mb-14">
          <h2 className="text-2xl font-extrabold text-n2f-accent mb-6">
            วิธีเริ่มใช้งาน
          </h2>
          <ol className="space-y-0">
            {steps.map((step, i) => (
              <li
                key={i}
                className="relative pl-10 py-2.5 text-sm text-n2f-text-secondary border-b border-white/[0.04] last:border-0 leading-relaxed"
              >
                <span className="absolute left-0 top-2 w-7 h-7 flex items-center justify-center bg-gradient-to-br from-n2f-accent to-n2f-accent-dark text-black text-[13px] font-bold rounded-full">
                  {i + 1}
                </span>
                <strong className="text-white">{step.title}</strong> —{" "}
                {step.desc}
              </li>
            ))}
          </ol>
        </section>

        {/* รองรับ AI Client */}
        <section className="mb-14">
          <h2 className="text-2xl font-extrabold text-n2f-accent mb-4">
            รองรับ AI Client
          </h2>
          <div className="flex flex-wrap gap-2">
            {aiClients.map((c) => (
              <span
                key={c}
                className="text-sm text-white bg-white/[0.06] border border-white/[0.1] px-4 py-1.5 rounded-full"
              >
                {c}
              </span>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-14">
          <h2 className="text-2xl font-extrabold text-n2f-accent mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((t) => (
              <span
                key={t}
                className="text-xs text-n2f-text-muted bg-white/[0.04] border border-white/[0.06] px-3 py-1 rounded"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center py-12 border-t border-n2f-border">
          <h2 className="text-2xl font-extrabold text-white mb-2">
            พร้อมเริ่มต้น?
          </h2>
          <p className="text-n2f-text-muted mb-6">
            สมัครฟรี ทดลอง 100 requests/เดือน
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={DASHBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-lg bg-gradient-to-br from-n2f-accent to-n2f-accent-dark text-black shadow-[0_0_20px_var(--color-n2f-accent-glow)] hover:shadow-[0_0_40px_var(--color-n2f-accent-glow)] transition-all duration-300"
            >
              เข้า Dashboard
            </a>
            <Link
              href="/services/saas"
              className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-lg border-2 border-white/30 text-white hover:border-n2f-accent hover:text-n2f-accent transition-all duration-300"
            >
              ดูแพ็คเกจ SaaS
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
