import { MessageSquareQuote } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { useTranslations } from "next-intl";

export default function AboutMCP() {
  const t = useTranslations("aboutMcp");

  const examples = [t("example1"), t("example2"), t("example3")];

  return (
    <section className="py-28 max-md:py-16 bg-n2f" id="about">
      <div className="w-full max-w-[800px] mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl max-md:text-[28px] max-[480px]:text-2xl font-bold text-center mb-5 text-n2f-text drop-shadow-[0_0_20px_rgba(255,109,90,0.5)]">
            {t("title")}
          </h2>
          <p className="text-center text-n2f-text-secondary text-base leading-[1.8] mb-8">
            {t("desc")}
          </p>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="group gradient-border p-7 mt-4 hover:scale-[1.01] transition-transform duration-300">
            <div className="flex items-center gap-2.5 mb-5">
              <MessageSquareQuote className="w-5 h-5 text-n2f-accent" />
              <span className="text-sm font-semibold text-n2f-accent tracking-wide">
                {t("examplesLabel")}
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
