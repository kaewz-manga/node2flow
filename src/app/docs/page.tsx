import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, Code, Settings } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Documentation - Node2Flow",
  description: "เอกสารการใช้งาน Node2Flow MCP Server Platform",
};

const sections = [
  {
    title: "เริ่มต้นใช้งาน",
    icon: BookOpen,
    items: [
      { title: "MCP คืออะไร?", desc: "ทำความเข้าใจ Model Context Protocol" },
      { title: "สมัครสมาชิก", desc: "ขั้นตอนการสมัครใช้งาน Node2Flow" },
      { title: "ตั้งค่า AI Client", desc: "เชื่อมต่อ MCP กับ Claude, Cursor, n8n" },
    ],
  },
  {
    title: "MCP Tools",
    icon: Code,
    items: [
      { title: "Workflow Tools", desc: "สร้าง แก้ไข ลบ workflow" },
      { title: "Node Tools", desc: "ค้นหา ตั้งค่า validate node" },
      { title: "Execution Tools", desc: "Run, test และ debug workflow" },
      { title: "Template Tools", desc: "ค้นหาและ deploy templates" },
    ],
  },
  {
    title: "Advanced",
    icon: Settings,
    items: [
      { title: "Transport Modes", desc: "HTTP vs SSE vs stdio" },
      { title: "Self-hosting", desc: "ติดตั้ง MCP Server บน server ของคุณ" },
      { title: "API Reference", desc: "API endpoints และ authentication" },
    ],
  },
];

export default function DocsPage() {
  return (
    <main className="pt-[calc(80px+80px)] pb-20 bg-n2f">
      <div className="w-full max-w-[800px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-5xl max-md:text-4xl font-bold text-n2f-text mb-3">Documentation</h1>
            <p className="text-lg text-n2f-text-secondary">
              เอกสารการใช้งาน Node2Flow MCP Server Platform
            </p>
          </div>
        </FadeIn>

        <div className="space-y-14">
          {sections.map((section, si) => {
            const SectionIcon = section.icon;
            return (
              <FadeIn key={section.title} delay={si * 100}>
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <SectionIcon className="w-5 h-5 text-n2f-accent" />
                    <h2 className="text-2xl font-bold text-n2f-text">{section.title}</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
                    {section.items.map((item) => (
                      <div
                        key={item.title}
                        className="bg-n2f-secondary border border-n2f-border rounded-xl p-5 hover:border-n2f-border-hover transition-colors duration-200 cursor-pointer"
                      >
                        <h3 className="text-base font-semibold text-n2f-text mb-1">{item.title}</h3>
                        <p className="text-sm text-n2f-text-muted">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={300}>
          <div className="text-center mt-16 pt-14 border-t border-n2f-border">
            <h2 className="text-2xl font-bold text-n2f-text mb-3">หาไม่เจอ?</h2>
            <p className="text-n2f-text-muted mb-8">ติดต่อเราเพื่อขอความช่วยเหลือ</p>
            <Link href="/login" className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg bg-n2f-accent text-black hover:bg-n2f-accent-dark transition-colors duration-200">
              ติดต่อ Support
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
