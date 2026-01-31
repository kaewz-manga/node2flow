import type { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Privacy Policy - Node2Flow",
  description: "Privacy Policy - Node2Flow",
};

const sectionKeys = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"] as const;

export default function PrivacyPage() {
  const t = useTranslations("privacy");

  return (
    <main className="pt-[calc(80px+80px)] pb-20 bg-n2f">
      <div className="w-full max-w-[800px] mx-auto px-6">
        <h1 className="text-4xl max-md:text-[28px] font-bold text-n2f-text mb-3">{t("title")}</h1>
        <p className="text-sm text-n2f-text-dim mb-10">{t("updated")}</p>

        <div className="space-y-10">
          {sectionKeys.map((key) => (
            <section key={key}>
              <h2 className="text-xl font-bold text-n2f-text mb-3">{t(`${key}Title`)}</h2>
              <p className="text-n2f-text-secondary leading-relaxed">
                {t(key)}
                {key === "s8" && (
                  <>
                    {" "}
                    <a href="mailto:node2flow@gmail.com" className="text-n2f-accent hover:underline">
                      node2flow@gmail.com
                    </a>
                  </>
                )}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
