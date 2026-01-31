import Link from "next/link";
import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Shop & Library - Node2Flow",
  description: "ดาวน์โหลด Workflow Templates, คู่มือ MCP, Cheat Sheet สำหรับ n8n และ MCP Server",
};

const freeProducts = [
  {
    type: "PDF Guide",
    typeColor: "text-red-400",
    name: "MCP Quick Start Guide",
    desc: "คู่มือเริ่มต้นใช้งาน MCP Server ตั้งแต่สมัครจนเชื่อมต่อ AI Client สำเร็จ",
    tags: ["MCP", "Beginner", "Thai"],
    price: "Free",
    free: true,
  },
  {
    type: "PDF Cheat Sheet",
    typeColor: "text-red-400",
    name: "n8n MCP Cheat Sheet",
    desc: "สรุปคำสั่ง MCP Tools ทั้ง 20 ตัว พร้อมตัวอย่างการใช้งานในหน้าเดียว",
    tags: ["n8n", "MCP Tools", "Reference"],
    price: "Free",
    free: true,
  },
  {
    type: "JSON Templates",
    typeColor: "text-sky-300",
    name: "10 Starter Workflow Templates",
    desc: "Workflow สำเร็จรูป 10 ตัว import เข้า n8n ใช้งานได้ทันที ครอบคลุม use case พื้นฐาน",
    tags: ["n8n", "Workflow", "JSON"],
    price: "Free",
    free: true,
  },
];

const premiumProducts = [
  {
    type: "PDF Guide",
    typeColor: "text-red-400",
    name: "Complete MCP Developer Guide",
    desc: "คู่มือสร้าง MCP Server ตั้งแต่เริ่มต้น ครอบคลุม Architecture, Transport Modes, Security และ Deployment",
    tags: ["MCP", "Advanced", "80+ pages"],
    price: "฿299",
    free: false,
  },
  {
    type: "Bundle",
    typeColor: "text-amber-400",
    name: "50 n8n MCP Workflows Pack",
    desc: "Workflow สำเร็จรูป 50 ตัว ครอบคลุม LINE, Notion, Google Sheets, WooCommerce, AI Agent และอื่นๆ",
    tags: ["n8n", "50 Workflows", "JSON"],
    price: "฿499",
    free: false,
  },
  {
    type: "PDF Guide",
    typeColor: "text-red-400",
    name: "n8n Integration Guide",
    desc: "คู่มือเชื่อมต่อ n8n กับ 15+ services พร้อม workflow templates และ best practices",
    tags: ["n8n", "Integration", "60+ pages"],
    price: "฿199",
    free: false,
  },
];

function ProductCard({ product }: { product: typeof freeProducts[number] }) {
  return (
    <div className="relative flex flex-col bg-n2f-secondary border border-n2f-border rounded-xl p-6 opacity-60 cursor-not-allowed select-none">
      {/* Coming Soon overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-black/40 backdrop-blur-[2px]">
        <span className="px-4 py-1.5 text-sm font-medium tracking-[2px] uppercase text-n2f-text border border-n2f-border rounded-md bg-n2f-secondary/80">
          Coming Soon
        </span>
      </div>

      <div className={`text-xs font-medium uppercase tracking-[1px] mb-3 ${product.typeColor}`}>
        {product.type}
      </div>
      <h3 className="text-base font-semibold text-n2f-text mb-2 leading-snug">{product.name}</h3>
      <p className="text-sm text-n2f-text-muted leading-relaxed mb-4 flex-1">{product.desc}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {product.tags.map((tag) => (
          <span key={tag} className="text-xs text-n2f-text-muted bg-n2f-hover border border-n2f-border px-2 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-n2f-border mt-auto">
        <span className={`text-lg font-bold ${product.free ? "text-green-500" : "text-n2f-text"}`}>
          {product.price}
        </span>
        <span className="px-4 py-2 text-sm font-medium rounded-lg bg-n2f-hover text-n2f-text-muted">
          เร็วๆ นี้
        </span>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <main className="pt-[calc(80px+80px)] pb-20 bg-n2f">
      <div className="w-full max-w-[800px] mx-auto px-6">
        {/* Hero */}
        <FadeIn>
          <div className="text-center pb-14 border-b border-n2f-border mb-16">
            <h1 className="text-5xl max-md:text-4xl font-bold text-n2f-text mb-3">Shop &amp; Library</h1>
            <p className="text-lg text-n2f-text-secondary max-w-[560px] mx-auto leading-relaxed">
              ดาวน์โหลด Workflow Templates, คู่มือ MCP และ Cheat Sheet สำหรับ n8n และ MCP Server
            </p>
          </div>
        </FadeIn>

        {/* SaaS Services */}
        <FadeIn delay={100}>
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl max-md:text-2xl font-bold text-n2f-text">SaaS Platform</h2>
              <span className="text-xs font-medium px-3 py-1 rounded-md uppercase tracking-[0.5px] bg-purple-500/10 text-purple-400 border border-purple-500/20">
                Live
              </span>
            </div>
            <p className="text-n2f-text-muted mb-6">Product แรกจาก Node2Flow — AI ควบคุม n8n ผ่าน MCP Protocol</p>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col bg-n2f-secondary border border-n2f-border rounded-xl p-7 hover:border-n2f-border-hover transition-colors duration-200 md:flex-row md:gap-8">
                <div className="flex-1">
                  <div className="text-xs font-medium uppercase tracking-[1px] mb-3 text-purple-400">
                    SaaS Platform
                  </div>
                  <h3 className="text-xl font-semibold text-n2f-text mb-2 leading-snug">n8n Management MCP</h3>
                  <p className="text-sm text-n2f-text-muted leading-relaxed mb-4">
                    Multi-tenant MCP Server บน Cloudflare Workers ให้ AI (Claude, Cursor, Windsurf) ควบคุม n8n ได้โดยตรง
                    ด้วย 32 MCP Tools ครอบคลุม Workflow, Execution, Credential, Tag และ User Management
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {["MCP", "n8n", "AI", "SaaS", "Cloudflare Workers", "32 Tools"].map((tag) => (
                      <span key={tag} className="text-xs text-n2f-text-muted bg-n2f-hover border border-n2f-border px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between md:min-w-[180px] pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-n2f-border md:pl-8">
                  <div className="text-right mb-4">
                    <span className="text-lg font-bold text-green-500">Free</span>
                    <span className="text-sm text-n2f-text-muted"> — </span>
                    <span className="text-lg font-bold text-n2f-text">$99.99</span>
                    <span className="text-xs text-n2f-text-muted">/mo</span>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <Link
                      href="/products/mcp"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-n2f-accent text-black hover:bg-n2f-accent-dark transition-colors duration-200"
                    >
                      ดูรายละเอียด
                    </Link>
                    <a
                      href="https://n8n-management-dashboard.node2flow.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg border border-n2f-border text-n2f-text-secondary hover:border-n2f-border-hover hover:text-n2f-text transition-all duration-200"
                    >
                      เข้า Dashboard
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Free Resources */}
        <FadeIn delay={150}>
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl max-md:text-2xl font-bold text-n2f-text">Free Resources</h2>
              <span className="text-xs font-medium px-3 py-1 rounded-md uppercase tracking-[0.5px] bg-green-500/10 text-green-500 border border-green-500/20">
                Free
              </span>
            </div>
            <p className="text-n2f-text-muted mb-6">ดาวน์โหลดฟรี เริ่มต้นใช้งาน MCP และ n8n ได้ทันที</p>
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
              {freeProducts.map((p) => (
                <ProductCard key={p.name} product={p} />
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Premium */}
        <FadeIn delay={200}>
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl max-md:text-2xl font-bold text-n2f-text">Premium</h2>
              <span className="text-xs font-medium px-3 py-1 rounded-md uppercase tracking-[0.5px] bg-n2f-accent/10 text-n2f-accent border border-n2f-accent/20">
                Paid
              </span>
            </div>
            <p className="text-n2f-text-muted mb-6">คู่มือเชิงลึกและ Workflow Pack สำหรับใช้งานจริงในธุรกิจ</p>
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
              {premiumProducts.map((p) => (
                <ProductCard key={p.name} product={p} />
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Info Box */}
        <FadeIn delay={250}>
          <div className="bg-n2f-accent/[0.04] border-l-2 border-n2f-accent rounded-r-lg p-5 mb-16">
            <p className="text-sm text-n2f-text-secondary leading-relaxed">
              <strong className="text-n2f-text">หมายเหตุ:</strong> สินค้าทั้งหมดเป็นไฟล์ดิจิทัล (PDF/JSON)
              ดาวน์โหลดได้ทันทีหลังซื้อ ไม่มีการจัดส่งทางกายภาพ
            </p>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={300}>
          <div className="text-center py-14 border-t border-n2f-border">
            <h2 className="text-2xl font-bold text-n2f-text mb-3">ต้องการ Workflow พิเศษ?</h2>
            <p className="text-n2f-text-muted mb-8">เราสร้าง Custom Workflow ตามความต้องการ</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/login" className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg bg-n2f-accent text-black hover:bg-n2f-accent-dark transition-colors duration-200">
                ติดต่อเรา
              </Link>
              <Link href="/#services" className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg border border-n2f-border text-n2f-text-secondary hover:border-n2f-border-hover hover:text-n2f-text transition-all duration-200">
                ดูบริการทั้งหมด
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
