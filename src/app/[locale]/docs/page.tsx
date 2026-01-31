import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { BookOpen, Code, Settings } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Documentation - Node2Flow",
  description: "Node2Flow MCP Server Platform documentation",
};

const sectionData = [
  {
    icon: BookOpen,
    titleKey: "gettingStarted",
    items: [
      { titleKey: "mcpWhat", descKey: "mcpWhatDesc" },
      { titleKey: "register", descKey: "registerDesc" },
      { titleKey: "setupClient", descKey: "setupClientDesc" },
    ],
  },
  {
    icon: Code,
    titleKey: "mcpTools",
    items: [
      { titleKey: "workflowTools", descKey: "workflowToolsDesc" },
      { titleKey: "nodeTools", descKey: "nodeToolsDesc" },
      { titleKey: "executionTools", descKey: "executionToolsDesc" },
      { titleKey: "templateTools", descKey: "templateToolsDesc" },
    ],
  },
  {
    icon: Settings,
    titleKey: "advanced",
    items: [
      { titleKey: "transportModes", descKey: "transportModesDesc" },
      { titleKey: "selfHosting", descKey: "selfHostingDesc" },
      { titleKey: "apiRef", descKey: "apiRefDesc" },
    ],
  },
] as const;

export default function DocsPage() {
  const t = useTranslations("docs");

  return (
    <main className="pt-[calc(80px+80px)] pb-20 bg-n2f">
      <div className="w-full max-w-[800px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-5xl max-md:text-4xl font-bold text-n2f-text mb-3">{t("title")}</h1>
            <p className="text-lg text-n2f-text-secondary">{t("subtitle")}</p>
          </div>
        </FadeIn>

        <div className="space-y-14">
          {sectionData.map((section, si) => {
            const SectionIcon = section.icon;
            return (
              <FadeIn key={section.titleKey} delay={si * 100}>
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <SectionIcon className="w-5 h-5 text-n2f-accent" />
                    <h2 className="text-2xl font-bold text-n2f-text">{t(section.titleKey)}</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
                    {section.items.map((item) => (
                      <div
                        key={item.titleKey}
                        className="card-glow bg-n2f-secondary border border-n2f-border rounded-xl p-5 hover:border-n2f-border-hover transition-colors duration-200 cursor-pointer"
                      >
                        <h3 className="text-base font-semibold text-n2f-text mb-1">{t(item.titleKey)}</h3>
                        <p className="text-sm text-n2f-text-muted">{t(item.descKey)}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={300}>
          <div className="text-center mt-16 pt-14 border-t border-n2f-border">
            <h2 className="text-2xl font-bold text-n2f-text mb-3">{t("notFound")}</h2>
            <p className="text-n2f-text-muted mb-8">{t("notFoundDesc")}</p>
            <Link href="/login" className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg bg-n2f-accent text-black hover:bg-n2f-accent-dark transition-colors duration-200">
              {t("contactSupport")}
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
