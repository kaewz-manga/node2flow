"use client";

import { useState } from "react";

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
    <section className="py-20 max-md:py-12 bg-n2f" id="faq">
      <div className="w-full max-w-[800px] mx-auto px-6">
        <h2 className="text-4xl max-md:text-[28px] max-[480px]:text-2xl font-extrabold text-center mb-4 text-white">
          คำถามที่พบบ่อย
        </h2>

        <div className="max-w-[700px] mx-auto mt-12 flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-n2f-secondary border rounded-xl overflow-hidden transition-colors duration-300 ${
                openIndex === i ? "border-n2f-accent/20" : "border-n2f-border"
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-base font-semibold text-white cursor-pointer select-none text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{faq.question}</span>
                <span
                  className={`shrink-0 w-2.5 h-2.5 border-r-2 border-b-2 border-n2f-text-muted ml-4 transition-transform duration-300 ${
                    openIndex === i ? "-rotate-[135deg]" : "rotate-45"
                  }`}
                />
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ${
                  openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5">
                    <p className="text-sm text-n2f-text-muted leading-[1.8]">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
