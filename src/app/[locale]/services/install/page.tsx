import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Installation Service - Node2Flow",
  description: "n8n-MCP Server installation service",
};

const includeKeys = ["i1", "i2", "i3", "i4", "i5", "i6", "i7"] as const;
const stepKeys = ["s1", "s2", "s3", "s4"] as const;

export default function InstallPage() {
  const t = useTranslations("install");

  return (
    <main className="pt-[calc(80px+80px)] pb-20 bg-n2f">
      <div className="w-full max-w-[800px] mx-auto px-6">
        <FadeIn>
          <div className="text-center pb-16 border-b border-n2f-border mb-16">
            <span className="inline-block px-3.5 py-1.5 text-xs font-medium tracking-[2px] uppercase text-n2f-accent border border-n2f-accent/20 rounded-full bg-n2f-accent/[0.06] mb-8">
              {t("badge")}
            </span>
            <h1 className="text-5xl max-md:text-4xl font-bold text-n2f-text mb-4">{t("title")}</h1>
            <p className="text-lg text-n2f-text-secondary max-w-[600px] mx-auto leading-relaxed mb-8">{t("desc")}</p>
            <Link href="/shop" className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg bg-n2f-accent text-black hover:bg-n2f-accent-dark transition-colors duration-200">
              {t("interested")}
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-n2f-text mb-6">{t("includes")}</h2>
            <ul className="space-y-0">
              {includeKeys.map((key) => (
                <li key={key} className="flex items-start gap-3 py-3 text-sm text-n2f-text-secondary border-b border-n2f-border last:border-0 leading-relaxed">
                  <Check className="w-4 h-4 text-n2f-accent shrink-0 mt-0.5" />
                  {t(key)}
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        <FadeIn delay={200}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-n2f-text mb-6">{t("steps")}</h2>
            <ol className="space-y-0">
              {stepKeys.map((key, i) => (
                <li key={key} className="relative pl-12 py-3 text-sm text-n2f-text-secondary border-b border-n2f-border last:border-0 leading-relaxed">
                  <span className="absolute left-0 top-2 w-8 h-8 flex items-center justify-center bg-n2f-accent text-black text-sm font-bold rounded-full">
                    {i + 1}
                  </span>
                  <strong className="text-n2f-text">{t(key)}</strong> — {t(`${key}d`)}
                </li>
              ))}
            </ol>
          </section>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="text-center py-14 border-t border-n2f-border">
            <h2 className="text-2xl font-bold text-n2f-text mb-3">{t("ctaTitle")}</h2>
            <p className="text-n2f-text-muted mb-8">{t("ctaDesc")}</p>
            <Link href="/shop" className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg bg-n2f-accent text-black hover:bg-n2f-accent-dark transition-colors duration-200">
              {t("contactUs")}
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
