import FadeIn from "@/components/ui/FadeIn";

const steps = [
  {
    number: 1,
    title: (
      <>
        เพิ่มเพื่อน{" "}
        <a href="https://t.me/node2flow_bot" target="_blank" rel="noopener" className="text-n2f-accent hover:underline transition-colors">
          Telegram
        </a>{" "}
        หรือ{" "}
        <a href="https://line.me/R/ti/p/@990pvvzg" target="_blank" rel="noopener" className="text-n2f-accent hover:underline transition-colors">
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
    <section className="py-28 max-md:py-16 bg-n2f" id="how-it-works">
      <div className="w-full max-w-[800px] mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl max-md:text-[28px] max-[480px]:text-2xl font-bold text-center mb-4 text-n2f-text">
            ขั้นตอนการสมัครสมาชิก
          </h2>
        </FadeIn>

        <div className="relative mt-14 max-w-[500px] mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute top-6 bottom-6 left-[19px] w-px bg-n2f-border" />

          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 100}>
              <div className={`flex gap-5 items-start relative ${i < steps.length - 1 ? "mb-10" : ""}`}>
                <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-n2f-accent text-black text-sm font-bold rounded-full relative z-[1]">
                  {step.number}
                </div>
                <div className="pt-1.5">
                  <h3 className="text-base font-semibold mb-1 text-n2f-text">{step.title}</h3>
                  <p className="text-sm text-n2f-text-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
