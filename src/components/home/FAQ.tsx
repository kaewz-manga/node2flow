"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const faqs = [
  {
    question: "MCP ต่างจาก API ยังไง?",
    answer:
      "MCP เป็นมาตรฐานที่ออกแบบมาให้ AI เข้าใจและใช้งานได้โดยตรง ไม่ต้องเขียนโค้ดเชื่อมต่อเอง ต่างจาก API ที่ต้อง integrate ทีละตัว",
  },
  {
    question: "ใช้งานยากไหม?",
    answer:
      "ง่ายมาก! แค่สมัคร รับ URL แล้วนำไปใส่ใน Claude ได้เลย ไม่ต้องมีความรู้ด้านเทคนิค",
  },
  {
    question: "มีค่าใช้จ่ายเท่าไหร่?",
    answer:
      "เริ่มต้นใช้งานฟรี! มีแพ็คเกจ Pro สำหรับผู้ที่ต้องการใช้งานมากขึ้น",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-28 max-md:py-16 bg-n2f" id="faq">
      <div className="w-full max-w-[800px] mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl max-md:text-[28px] max-[480px]:text-2xl font-bold text-center mb-4 text-n2f-text">
            คำถามที่พบบ่อย
          </h2>
        </FadeIn>

        <div className="max-w-[700px] mx-auto mt-14 flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div
                className={`bg-n2f-secondary border rounded-xl overflow-hidden transition-colors duration-200 ${
                  openIndex === i ? "border-n2f-border-hover" : "border-n2f-border"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-base font-medium text-n2f-text cursor-pointer select-none text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`shrink-0 w-4 h-4 text-n2f-text-muted ml-4 transition-transform duration-200 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-200 ${
                    openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5">
                      <p className="text-sm text-n2f-text-muted leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
