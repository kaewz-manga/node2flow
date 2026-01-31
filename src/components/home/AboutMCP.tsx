import { MessageSquareQuote } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutMCP() {
  const examples = [
    '"ดึงยอดขายจาก Google Sheet แล้วสร้างรายงานสรุปลง Notion พร้อมส่งแจ้งเตือนทีมผ่าน LINE"',
    '"รวบรวมฟีดแบ็กลูกค้าจาก Gmail วิเคราะห์ sentiment แล้วอัพเดทลง CRM อัตโนมัติ"',
    '"สร้าง invoice จาก WooCommerce แปลงเป็น PDF แล้วส่งให้ลูกค้าผ่าน Telegram"',
  ];

  return (
    <section className="py-28 max-md:py-16 bg-n2f" id="about">
      <div className="w-full max-w-[800px] mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl max-md:text-[28px] max-[480px]:text-2xl font-bold text-center mb-5 text-n2f-text">
            MCP คืออะไร?
          </h2>
          <p className="text-center text-n2f-text-secondary text-base leading-[1.8] mb-8">
            Model Context Protocol (MCP) คือมาตรฐานสากลที่เปิดให้ AI ทุกตัว
            สั่งงานบริการภายนอกได้โดยตรง &mdash; จัดการข้อมูล สร้างเอกสาร
            ส่งข้อความ วิเคราะห์ไฟล์ และ automate workflow ได้ในคำสั่งเดียว
            โดยไม่ต้องเขียนโค้ดแม้แต่บรรทัดเดียว
          </p>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="group gradient-border p-7 mt-4 hover:scale-[1.01] transition-transform duration-300">
            <div className="flex items-center gap-2.5 mb-5">
              <MessageSquareQuote className="w-5 h-5 text-n2f-accent" />
              <span className="text-sm font-semibold text-n2f-accent tracking-wide">
                สั่ง AI ครั้งเดียว ทำได้ทุกอย่าง
              </span>
            </div>
            <div className="space-y-3">
              {examples.map((example, i) => (
                <p
                  key={i}
                  className="text-n2f-text-secondary text-sm leading-7 pl-4 border-l-2 border-n2f-accent/20 hover:border-n2f-accent/50 transition-colors duration-300"
                >
                  {example}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
