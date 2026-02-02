import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { useTranslations } from "next-intl";

export default function CTA() {
  const t = useTranslations("cta");

  return (
    <section className="py-28 max-md:py-20 bg-n2f" id="cta">
      <div className="w-full max-w-[800px] mx-auto px-6">
        <FadeIn>
          <div className="relative rounded-2xl border border-n2f-border-hover bg-n2f-secondary p-14 max-md:p-8 text-center overflow-hidden">
            {/* Subtle top-edge accent line */}
            <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-n2f-accent/40 to-transparent" />

            <h2 className="text-4xl max-md:text-3xl max-[480px]:text-2xl font-bold mb-5 text-n2f-text">
              {t("title")}
            </h2>
            <p className="text-n2f-text-muted text-lg mb-10">{t("subtitle")}</p>
            <div className="flex justify-center">
              <Link
                href="/login"
                className="group inline-flex items-center justify-center gap-2.5 px-10 py-4 text-base font-medium rounded-xl bg-n2f-accent text-black hover:bg-n2f-accent-dark hover:shadow-[0_0_40px_rgba(255,109,90,0.3)] transition-all duration-300"
              >
                {t("button")}
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
