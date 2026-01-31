import Link from "next/link";
import type { Metadata } from "next";
import { Users, Lock, Shield, Globe, BarChart3, Zap, Check } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

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
    tools: ["list_workflows", "create_workflow", "update_workflow", "delete_workflow", "activate_workflow", "deactivate_workflow", "execute_workflow", "get_workflow", "tag_workflow"],
  },
  {
    name: "Execution Management",
    tools: ["list_executions", "get_execution", "delete_execution", "retry_execution"],
  },
  {
    name: "Credential Management",
    tools: ["list_credentials", "create_credential", "update_credential", "delete_credential", "get_credential_schema"],
  },
  {
    name: "Tags & Variables",
    tools: ["list_tags", "create_tag", "update_tag", "delete_tag", "list_variables", "create_variable", "update_variable", "delete_variable"],
  },
  {
    name: "User Management",
    tools: ["list_users", "get_user", "update_user_role", "delete_user", "invite_user", "get_current_user"],
  },
];

const highlights = [
  { icon: Users, title: "Multi-tenant", desc: "รองรับหลาย user แยก credential ปลอดภัย" },
  { icon: Lock, title: "OAuth Login", desc: "สมัคร/เข้าสู่ระบบด้วย GitHub หรือ Google" },
  { icon: Shield, title: "AES-256-GCM Encryption", desc: "เข้ารหัส n8n credentials ที่เก็บในระบบ" },
  { icon: Globe, title: "Edge Deployment", desc: "รันบน Cloudflare Workers ทั่วโลก latency ต่ำ" },
  { icon: BarChart3, title: "Rate Limiting & Usage", desc: "จำกัด request ตาม plan ติดตามการใช้งานรายเดือน" },
  { icon: Zap, title: "Token Efficient", desc: "Diff-based updates ประหยัด AI token 80-90%" },
];

const plans = [
  { name: "Free", price: "$0", period: "", requests: "100 / เดือน", connections: "1", popular: false },
  { name: "Starter", price: "$9.99", period: "/เดือน", requests: "1,000 / เดือน", connections: "3", popular: false },
  { name: "Pro", price: "$29.99", period: "/เดือน", requests: "10,000 / เดือน", connections: "10", popular: true },
  { name: "Enterprise", price: "$99.99", period: "/เดือน", requests: "100,000 / เดือน", connections: "Unlimited", popular: false },
];

const steps = [
  { title: "สมัครสมาชิก", desc: "สร้างบัญชีที่ Dashboard ด้วย GitHub หรือ Google" },
  { title: "เชื่อมต่อ n8n", desc: "ใส่ n8n URL + API Key (เข้ารหัส AES-256-GCM)" },
  { title: "รับ API Key", desc: "สร้าง MCP API Key สำหรับใช้กับ AI Client" },
  { title: "ใช้กับ AI", desc: "ตั้งค่าใน Claude Desktop, Cursor หรือ Windsurf แล้วเริ่มสั่งงาน" },
];

const aiClients = ["Claude Desktop", "Cursor", "Windsurf", "n8n"];
const techStack = ["Cloudflare Workers", "Cloudflare D1", "Cloudflare KV", "React", "JWT", "AES-256-GCM", "PBKDF2"];

export default function MCPProductPage() {
  return (
    <main className="pt-[calc(80px+80px)] pb-20 bg-n2f">
      <div className="w-full max-w-[800px] mx-auto px-6">
        {/* Hero */}
        <FadeIn>
          <div className="text-center pb-16 border-b border-n2f-border mb-16">
            <span className="inline-block px-3.5 py-1.5 text-xs font-medium tracking-[2px] uppercase text-n2f-accent border border-n2f-accent/20 rounded-full bg-n2f-accent/[0.06] mb-8">
              Product
            </span>
            <h1 className="text-5xl max-md:text-4xl font-bold text-n2f-text mb-4">
              n8n Management MCP
            </h1>
            <p className="text-lg text-n2f-text-secondary max-w-[600px] mx-auto leading-relaxed mb-8">
              Multi-tenant SaaS MCP Server สำหรับควบคุม n8n ผ่าน AI ด้วย 32 Tools
              รองรับ Claude Desktop, Cursor, Windsurf
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href={DASHBOARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg bg-n2f-accent text-black hover:bg-n2f-accent-dark transition-colors duration-200"
              >
                เข้า Dashboard
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg border border-n2f-border text-n2f-text-secondary hover:border-n2f-border-hover hover:text-n2f-text transition-all duration-200"
              >
                GitHub
              </a>
            </div>
          </div>
        </FadeIn>

        {/* คืออะไร */}
        <FadeIn delay={100}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-n2f-text mb-4">n8n Management MCP คืออะไร?</h2>
            <p className="text-n2f-text-secondary leading-relaxed mb-4">
              MCP (Model Context Protocol) เป็นมาตรฐานที่ให้ AI เชื่อมต่อกับระบบภายนอกได้
              n8n Management MCP ทำให้ AI อย่าง Claude สามารถสร้าง แก้ไข
              และจัดการ n8n workflow ได้โดยตรง ผ่านคำสั่งภาษาธรรมชาติ
            </p>
            <p className="text-n2f-text-secondary leading-relaxed">
              แทนที่จะต้อง copy-paste JSON หรือกดสร้าง workflow เอง
              แค่บอก AI ว่าต้องการอะไร AI จะสร้าง workflow ให้ ติดตั้งลงใน n8n
              และเปิดใช้งานให้อัตโนมัติ
            </p>
          </section>
        </FadeIn>

        {/* 32 MCP Tools */}
        <FadeIn delay={150}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-n2f-text mb-1">32 MCP Tools</h2>
            <p className="text-n2f-text-muted text-sm mb-6">ครอบคลุม n8n Public API ทั้งหมด</p>
            <div className="space-y-3">
              {toolGroups.map((group) => (
                <div key={group.name} className="bg-n2f-secondary border border-n2f-border rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-n2f-text mb-3">
                    {group.name}
                    <span className="text-n2f-text-muted font-normal ml-2">({group.tools.length})</span>
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.tools.map((tool) => (
                      <code key={tool} className="text-xs text-n2f-accent bg-n2f-accent/[0.06] border border-n2f-accent/15 px-2 py-0.5 rounded font-mono">
                        {tool}
                      </code>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* จุดเด่น */}
        <FadeIn delay={200}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-n2f-text mb-6">จุดเด่น</h2>
            <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <div key={h.title} className="bg-n2f-secondary border border-n2f-border rounded-xl p-5 hover:border-n2f-border-hover transition-colors duration-200">
                    <Icon className="w-5 h-5 text-n2f-accent mb-2" />
                    <h3 className="text-sm font-semibold text-n2f-text mb-1">{h.title}</h3>
                    <p className="text-xs text-n2f-text-muted leading-relaxed">{h.desc}</p>
                  </div>
                );
              })}
            </div>
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
                  <p className="text-2xl font-bold text-n2f-accent mb-0.5">
                    {plan.price}<span className="text-xs text-n2f-text-muted font-normal">{plan.period}</span>
                  </p>
                  <div className="text-xs text-n2f-text-muted mb-3 space-y-1">
                    <p>{plan.requests}</p>
                    <p>{plan.connections} connections</p>
                  </div>
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

        {/* วิธีเริ่มใช้ */}
        <FadeIn delay={300}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-n2f-text mb-6">วิธีเริ่มใช้งาน</h2>
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

        {/* รองรับ + Tech Stack */}
        <FadeIn delay={350}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-n2f-text mb-4">รองรับ AI Client</h2>
            <div className="flex flex-wrap gap-2 mb-10">
              {aiClients.map((c) => (
                <span key={c} className="text-sm text-n2f-text-secondary bg-n2f-hover border border-n2f-border px-4 py-1.5 rounded-md">
                  {c}
                </span>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-n2f-text mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {techStack.map((t) => (
                <span key={t} className="text-xs text-n2f-text-muted bg-n2f-hover border border-n2f-border px-3 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={400}>
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
              <Link
                href="/services/saas"
                className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg border border-n2f-border text-n2f-text-secondary hover:border-n2f-border-hover hover:text-n2f-text transition-all duration-200"
              >
                ดูแพ็คเกจ SaaS
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
