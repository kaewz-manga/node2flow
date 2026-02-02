"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { useTranslations } from "next-intl";

const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6"] as const;

export default function FAQ() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-28 max-md:py-16 bg-n2f" id="faq">
      <div className="w-full max-w-[800px] mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl max-md:text-[28px] max-[480px]:text-2xl font-bold text-center mb-4 text-n2f-text">
            {t("title")}
          </h2>
        </FadeIn>

        <div className="max-w-[700px] mx-auto mt-14 flex flex-col gap-3">
          {faqKeys.map((key, i) => (
            <FadeIn key={key} delay={i * 80}>
              <div
                className={`card-glow bg-n2f-secondary border rounded-xl overflow-hidden transition-colors duration-200 ${
                  openIndex === i ? "border-n2f-border-hover" : "border-n2f-border"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-base font-medium text-n2f-text cursor-pointer select-none text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span>{t(key)}</span>
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
                      <p className="text-sm text-n2f-text-muted leading-relaxed">
                        {t(`a${key.slice(1)}` as "a1" | "a2" | "a3" | "a4" | "a5" | "a6")}
                      </p>
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
