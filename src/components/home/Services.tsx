import { Link2, Zap, Bot, Wrench, Cloud, Rocket, ArrowRight, type LucideIcon } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const services: { icon: LucideIcon; title: string; desc: string; featured?: boolean }[] = [
  {
    icon: Link2,
    title: "MCP Server Hub",
    desc: "เชื่อมต่อ AI กับ Notion, Google, LINE, Slack และอื่นๆ ไม่ต้องตั้งค่าเอง พร้อมใช้งานทันที",
    featured: true,
  },
  {
    icon: Zap,
    title: "Workflow as Service",
    desc: "Automation สำเร็จรูป เรียกใช้ผ่าน MCP ได้ทันที ไม่ต้องสร้าง workflow เอง",
    featured: true,
  },
  {
    icon: Bot,
    title: "AI Support Agent",
    desc: "AI ช่วยตอบคำถาม แนะนำการใช้งาน พร้อมให้บริการ 24/7",
  },
  {
    icon: Wrench,
    title: "Custom MCP",
    desc: "รับสร้าง MCP Server ตามความต้องการของคุณ ออกแบบให้เหมาะกับธุรกิจ",
  },
  {
    icon: Cloud,
    title: "MCP Hosting",
    desc: "รับ Host MCP Server ให้พร้อมใช้งาน ไม่ต้องมี server เอง ไม่ต้องดูแลระบบ",
  },
  {
    icon: Rocket,
    title: "Setup & Install",
    desc: "ติดตั้ง MCP Server บน server ของคุณ สำหรับคนที่มี server แต่ setup ไม่เป็น",
  },
];

export default function Services() {
  return (
    <section className="relative py-28 max-md:py-16 bg-n2f" id="services">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="w-full max-w-[1200px] mx-auto px-6 relative z-[1]">
        <FadeIn>
          <h2 className="text-4xl max-md:text-[28px] max-[480px]:text-2xl font-bold text-center mb-4 text-n2f-text">
            บริการของเรา
          </h2>
          <p className="text-center text-n2f-text-muted text-base mb-14">
            ทุกอย่างที่คุณต้องการสำหรับ MCP
          </p>
        </FadeIn>

        {/* Featured cards (first 2) with gradient border */}
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          {services.slice(0, 2).map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={i * 100}>
                <article className="group gradient-border p-8 hover:scale-[1.02] transition-all duration-300 h-full cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-n2f-accent/10 flex items-center justify-center mb-5 group-hover:shadow-[0_0_24px_rgba(255,109,90,0.2)] transition-shadow duration-300">
                    <Icon className="w-6 h-6 text-n2f-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-n2f-text">{service.title}</h3>
                  <p className="text-sm text-n2f-text-muted leading-relaxed mb-4">{service.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs text-n2f-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </article>
              </FadeIn>
            );
          })}
        </div>

        {/* Regular grid (last 4) */}
        <div className="grid grid-cols-4 gap-4 mt-4 max-md:grid-cols-2 max-[480px]:grid-cols-1">
          {services.slice(2).map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={(i + 2) * 100}>
                <article className="group bg-n2f-secondary border border-n2f-border rounded-xl p-6 hover:border-n2f-border-hover hover:bg-n2f-elevated hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 h-full cursor-default">
                  <div className="w-10 h-10 rounded-lg bg-n2f-accent/10 flex items-center justify-center mb-4 group-hover:shadow-[0_0_16px_rgba(255,109,90,0.15)] transition-shadow duration-300">
                    <Icon className="w-5 h-5 text-n2f-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-base font-semibold mb-2 text-n2f-text">{service.title}</h3>
                  <p className="text-sm text-n2f-text-muted leading-relaxed">{service.desc}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
