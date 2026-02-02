import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { useTranslations } from "next-intl";

export default function CTA() {
  const t = useTranslations("cta");

  return (
    <section className="relative py-36 max-md:py-24 text-center overflow-hidden" id="cta">
      {/* Multi-layer background */}
      <div className="absolute inset-0 bg-n2f" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,109,90,0.08),transparent_70%)]" />

      <div className="w-full max-w-[800px] mx-auto px-6 relative z-[1]">
        <FadeIn>
          <h2
            className="text-5xl max-md:text-4xl max-[480px]:text-3xl font-bold mb-5 bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(180deg, #ededed 0%, #a1a1a6 80%)",
            }}
          >
            {t("title")}
          </h2>
          <p className="text-n2f-text-muted text-lg mb-12">{t("subtitle")}</p>
          <div className="flex justify-center">
            <Link
              href="/shop"
              className="group inline-flex items-center justify-center gap-2.5 px-12 py-4 text-lg font-medium rounded-xl bg-n2f-accent text-black hover:bg-n2f-accent-dark hover:shadow-[0_0_40px_rgba(255,109,90,0.3)] transition-all duration-300"
            >
              {t("button")}
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
