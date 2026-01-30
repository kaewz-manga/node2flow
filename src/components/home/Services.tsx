const services = [
  {
    icon: "🔗",
    title: "MCP Server Hub",
    desc: "เชื่อมต่อ AI กับ Notion, Google, LINE, Slack และอื่นๆ ไม่ต้องตั้งค่าเอง พร้อมใช้งานทันที",
  },
  {
    icon: "⚡",
    title: "Workflow as Service",
    desc: "Automation สำเร็จรูป เรียกใช้ผ่าน MCP ได้ทันที ไม่ต้องสร้าง workflow เอง",
  },
  {
    icon: "🤖",
    title: "AI Support Agent",
    desc: "AI ช่วยตอบคำถาม แนะนำการใช้งาน พร้อมให้บริการ 24/7",
  },
  {
    icon: "🛠️",
    title: "Custom MCP",
    desc: "รับสร้าง MCP Server ตามความต้องการของคุณ ออกแบบให้เหมาะกับธุรกิจ",
  },
  {
    icon: "☁️",
    title: "MCP Hosting",
    desc: "รับ Host MCP Server ให้พร้อมใช้งาน ไม่ต้องมี server เอง ไม่ต้องดูแลระบบ",
  },
  {
    icon: "🚀",
    title: "Setup & Install",
    desc: "ติดตั้ง MCP Server บน server ของคุณ สำหรับคนที่มี server แต่ setup ไม่เป็น",
  },
];

export default function Services() {
  return (
    <section className="py-20 max-md:py-12 bg-n2f" id="services">
      <div className="w-full max-w-[1100px] mx-auto px-6">
        <h2 className="text-4xl max-md:text-[28px] max-[480px]:text-2xl font-extrabold text-center mb-4 text-white">
          บริการของเรา
        </h2>
        <p className="text-center text-n2f-text-muted text-base mb-12">
          ทุกอย่างที่คุณต้องการสำหรับ MCP
        </p>

        <div className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-[480px]:grid-cols-1">
          {services.map((service) => (
            <article
              key={service.title}
              className="relative overflow-hidden bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border border-n2f-border rounded-2xl p-6 hover:border-n2f-accent hover:shadow-[0_0_20px_var(--color-n2f-accent-glow)] hover:-translate-y-1.5 transition-all duration-300 group"
            >
              {/* Shine sweep */}
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-n2f-accent/[0.06] to-transparent transition-[left] duration-600 pointer-events-none group-hover:left-full" />

              <div className="text-[32px] mb-2">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-sm text-n2f-text-muted leading-[1.7]">{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
