const steps = [
  {
    number: 1,
    title: (
      <>
        เพิ่มเพื่อน{" "}
        <a href="https://t.me/node2flow_bot" target="_blank" rel="noopener" className="text-n2f-accent border-b border-transparent hover:border-n2f-accent transition-colors">
          Telegram
        </a>{" "}
        หรือ{" "}
        <a href="https://line.me/R/ti/p/@990pvvzg" target="_blank" rel="noopener" className="text-n2f-accent border-b border-transparent hover:border-n2f-accent transition-colors">
          LINE Bot
        </a>
      </>
    ),
    desc: "เลือกช่องทางที่สะดวก แล้วเพิ่ม Bot เป็นเพื่อน",
  },
  {
    number: 2,
    title: "กดรับแบบฟอร์มและกรอก Email",
    desc: "Bot จะส่งแบบฟอร์มให้ กรอก Email เพื่อรับลิงก์สมัคร",
  },
  {
    number: 3,
    title: "รับลิงก์สมัครทาง Email",
    desc: "ลิงก์สมัคร Member จะส่งเข้า Email ทันที",
  },
  {
    number: 4,
    title: "สมัคร Account ผ่าน Link",
    desc: "กดลิงก์จาก Email เพื่อสร้าง Account และเริ่มใช้งานได้เลย",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-20 max-md:py-12 bg-n2f" id="how-it-works">
      {/* MCP watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[url('/images/partners/mcp-icon.png')] bg-center bg-contain bg-no-repeat opacity-[0.025] pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-[800px] mx-auto px-6 relative z-[1]">
        <h2 className="text-4xl max-md:text-[28px] max-[480px]:text-2xl font-extrabold text-center mb-4 text-white">
          ขั้นตอนการสมัครสมาชิก
        </h2>

        <div className="relative mt-12 max-w-[500px] mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute top-6 bottom-6 left-[23px] w-0.5 bg-n2f-border" />

          {steps.map((step, i) => (
            <div key={step.number} className={`flex gap-6 items-start relative ${i < steps.length - 1 ? "mb-9" : ""}`}>
              <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-br from-n2f-accent to-n2f-accent-dark text-black text-lg font-extrabold rounded-full relative z-[1]">
                {step.number}
              </div>
              <div className="pt-2">
                <h3 className="text-lg font-semibold mb-1 text-white">{step.title}</h3>
                <p className="text-sm text-n2f-text-muted">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
