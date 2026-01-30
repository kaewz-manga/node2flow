import Link from "next/link";
import type { Metadata } from "next";
import BuyButton from "@/components/shop/BuyButton";

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
    <div className="flex flex-col bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border border-n2f-border rounded-2xl p-7 hover:border-n2f-accent hover:shadow-[0_0_20px_var(--color-n2f-accent-glow)] hover:-translate-y-1 transition-all duration-300">
      <div className={`text-xs font-semibold uppercase tracking-[1px] mb-3 ${product.typeColor}`}>
        {product.type}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2 leading-snug">{product.name}</h3>
      <p className="text-sm text-n2f-text-muted leading-relaxed mb-4 flex-1">{product.desc}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {product.tags.map((tag) => (
          <span key={tag} className="text-xs text-n2f-text-muted bg-white/5 border border-white/[0.08] px-2 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-n2f-border mt-auto">
        <span className={`text-lg font-extrabold ${product.free ? "text-green-500" : "text-white"}`}>
          {product.price}
        </span>
        <BuyButton
          productName={product.name}
          productSlug={product.name.toLowerCase().replace(/\s+/g, "-")}
          price={product.free ? 0 : parseInt(product.price.replace(/[^0-9]/g, ""), 10)}
          isFree={product.free}
          mode="payment"
        />
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <main className="relative overflow-hidden pt-[calc(80px+60px)] pb-20 bg-n2f">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[url('/images/partners/mcp-icon.png')] bg-center bg-contain bg-no-repeat opacity-[0.025] pointer-events-none" />

      <div className="w-full max-w-[800px] mx-auto px-6 relative z-[1]">
        {/* Hero */}
        <div className="text-center pb-12 border-b border-n2f-border mb-14">
          <h1 className="text-[56px] max-md:text-4xl font-extrabold text-white mb-2">Shop &amp; Library</h1>
          <p className="text-lg text-n2f-text-secondary max-w-[560px] mx-auto leading-[1.7]">
            ดาวน์โหลด Workflow Templates, คู่มือ MCP และ Cheat Sheet สำหรับ n8n และ MCP Server
          </p>
        </div>

        {/* Free Resources */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-4xl max-md:text-[28px] font-extrabold text-white">Free Resources</h2>
            <span className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-[0.5px] bg-green-500/15 text-green-500 border border-green-500/30">
              Free
            </span>
          </div>
          <p className="text-n2f-text-muted mb-6">ดาวน์โหลดฟรี เริ่มต้นใช้งาน MCP และ n8n ได้ทันที</p>
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {freeProducts.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </section>

        {/* Premium */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-4xl max-md:text-[28px] font-extrabold text-white">Premium</h2>
            <span className="text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-[0.5px] bg-n2f-accent/10 text-n2f-accent border border-n2f-accent/30">
              Paid
            </span>
          </div>
          <p className="text-n2f-text-muted mb-6">คู่มือเชิงลึกและ Workflow Pack สำหรับใช้งานจริงในธุรกิจ</p>
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {premiumProducts.map((p) => (
              <ProductCard key={p.name} product={p} />
            ))}
          </div>
        </section>

        {/* Info Box */}
        <div className="bg-n2f-accent/[0.06] border-l-[3px] border-n2f-accent rounded-r-xl p-5 mb-14">
          <p className="text-sm text-n2f-text-secondary leading-[1.7]">
            <strong className="text-white">หมายเหตุ:</strong> สินค้าทั้งหมดเป็นไฟล์ดิจิทัล (PDF/JSON)
            ดาวน์โหลดได้ทันทีหลังซื้อ ไม่มีการจัดส่งทางกายภาพ
          </p>
        </div>

        {/* CTA */}
        <div className="text-center py-12 border-t border-n2f-border">
          <h2 className="text-2xl font-extrabold text-white mb-2">ต้องการ Workflow พิเศษ?</h2>
          <p className="text-n2f-text-muted mb-6">เราสร้าง Custom Workflow ตามความต้องการ</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/login" className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-lg bg-gradient-to-br from-n2f-accent to-n2f-accent-dark text-black shadow-[0_0_20px_var(--color-n2f-accent-glow)] transition-all duration-300">
              ติดต่อเรา
            </Link>
            <Link href="/#services" className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-lg border-2 border-white/30 text-white hover:border-n2f-accent hover:text-n2f-accent transition-all duration-300">
              ดูบริการทั้งหมด
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
