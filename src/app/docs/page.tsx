import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation - Node2Flow",
  description: "เอกสารการใช้งาน Node2Flow MCP Server Platform",
};

const sections = [
  {
    title: "เริ่มต้นใช้งาน",
    items: [
      { title: "MCP คืออะไร?", desc: "ทำความเข้าใจ Model Context Protocol" },
      { title: "สมัครสมาชิก", desc: "ขั้นตอนการสมัครใช้งาน Node2Flow" },
      { title: "ตั้งค่า AI Client", desc: "เชื่อมต่อ MCP กับ Claude, Cursor, n8n" },
    ],
  },
  {
    title: "MCP Tools",
    items: [
      { title: "Workflow Tools", desc: "สร้าง แก้ไข ลบ workflow" },
      { title: "Node Tools", desc: "ค้นหา ตั้งค่า validate node" },
      { title: "Execution Tools", desc: "Run, test และ debug workflow" },
      { title: "Template Tools", desc: "ค้นหาและ deploy templates" },
    ],
  },
  {
    title: "Advanced",
    items: [
      { title: "Transport Modes", desc: "HTTP vs SSE vs stdio" },
      { title: "Self-hosting", desc: "ติดตั้ง MCP Server บน server ของคุณ" },
      { title: "API Reference", desc: "API endpoints และ authentication" },
    ],
  },
];

export default function DocsPage() {
  return (
    <main className="relative overflow-hidden pt-[calc(80px+60px)] pb-20 bg-n2f">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[url('/images/partners/mcp-icon.png')] bg-center bg-contain bg-no-repeat opacity-[0.025] pointer-events-none" />

      <div className="w-full max-w-[800px] mx-auto px-6 relative z-[1]">
        <div className="text-center mb-14">
          <h1 className="text-[56px] max-md:text-4xl font-extrabold text-white mb-2">Documentation</h1>
          <p className="text-lg text-n2f-text-secondary">
            เอกสารการใช้งาน Node2Flow MCP Server Platform
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-extrabold text-n2f-accent mb-6">{section.title}</h2>
              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                {section.items.map((item) => (
                  <div
                    key={item.title}
                    className="bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border border-n2f-border rounded-2xl p-6 hover:border-n2f-accent hover:shadow-[0_0_20px_var(--color-n2f-accent-glow)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                    <h3 className="text-base font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-n2f-text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="text-center mt-14 pt-12 border-t border-n2f-border">
          <h2 className="text-2xl font-extrabold text-white mb-2">หาไม่เจอ?</h2>
          <p className="text-n2f-text-muted mb-6">ติดต่อเราเพื่อขอความช่วยเหลือ</p>
          <Link href="/login" className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-lg bg-gradient-to-br from-n2f-accent to-n2f-accent-dark text-black shadow-[0_0_20px_var(--color-n2f-accent-glow)] transition-all duration-300">
            ติดต่อ Support
          </Link>
        </div>
      </div>
    </main>
  );
}
