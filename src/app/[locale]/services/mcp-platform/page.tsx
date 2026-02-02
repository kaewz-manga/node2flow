import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { Check } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "MCP Platform n8n-MCP - Node2Flow",
  description: "MCP Platform Server - No installation needed",
};

const DASHBOARD_URL = "https://n8n-management-dashboard.node2flow.net";

const planData = [
  { name: "Free", price: "$0", period: "", descKey: "freeDesc", features: ["100 requests/mo", "1 Connection", "32 MCP Tools", "Community Support"], popular: false },
  { name: "Starter", price: "$9.99", descKey: "starterDesc", features: ["1,000 requests/mo", "3 Connections", "32 MCP Tools", "Priority Support"], popular: false },
  { name: "Pro", price: "$29.99", descKey: "proDesc", features: ["10,000 requests/mo", "10 Connections", "32 MCP Tools", "Priority Support"], popular: true },
  { name: "Enterprise", price: "$99.99", descKey: "enterpriseDesc", features: ["100,000 requests/mo", "Unlimited Connections", "32 MCP Tools", "Dedicated Support"], popular: false },
] as const;

const howStepKeys = ["h1", "h2", "h3", "h4"] as const;

const benefits = [
  "32 MCP Tools — Workflow, Execution, Credential, Tag, User Management",
  "OAuth Login — GitHub / Google",
  "AES-256-GCM — Encrypted n8n credentials",
  "Edge Deployment — Cloudflare Workers",
  "Usage Dashboard — Monthly tracking",
  "Auto-updates — New tools automatically",
];

export default function McpPlatformPage() {
  const t = useTranslations("saas");

  return (
    <main className="pt-[calc(80px+80px)] pb-20 bg-n2f">
      <div className="w-full max-w-[800px] mx-auto px-6">
        {/* Hero */}
        <FadeIn>
          <div className="text-center pb-16 border-b border-n2f-border mb-16">
            <span className="inline-block px-3.5 py-1.5 text-xs font-medium tracking-[2px] uppercase text-n2f-accent border border-n2f-accent/20 rounded-full bg-n2f-accent/[0.06] mb-8">
              {t("badge")}
            </span>
            <h1 className="text-5xl max-md:text-4xl font-bold text-n2f-text mb-4">{t("title")}</h1>
            <p className="text-lg text-n2f-text-secondary max-w-[600px] mx-auto leading-relaxed mb-8">{t("desc")}</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href={DASHBOARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg bg-n2f-accent text-black hover:bg-n2f-accent-dark transition-colors duration-200"
              >
                {t("signup")}
              </a>
              <Link href="/products/mcp" className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg border border-n2f-border text-n2f-text-secondary hover:border-n2f-border-hover hover:text-n2f-text transition-all duration-200">
                {t("viewProduct")}
              </Link>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-n2f-text mb-4">{t("whatIs")}</h2>
            <p className="text-n2f-text-secondary leading-relaxed">{t("whatIsDesc")}</p>
          </section>
        </FadeIn>

        <FadeIn delay={150}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-n2f-text mb-6">{t("howTo")}</h2>
            <ol className="space-y-0">
              {howStepKeys.map((key, i) => (
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

        <FadeIn delay={200}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-n2f-text mb-6">{t("includes")}</h2>
            <ul className="space-y-0">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3 py-3 text-sm text-n2f-text-secondary border-b border-n2f-border last:border-0 leading-relaxed">
                  <Check className="w-4 h-4 text-n2f-accent shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </section>
        </FadeIn>

        <FadeIn delay={250}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-n2f-text mb-8">{t("packages")}</h2>
            <div className="grid grid-cols-4 gap-3 max-md:grid-cols-2 max-[480px]:grid-cols-1">
              {planData.map((plan) => (
                <div key={plan.name} className={`relative flex flex-col bg-n2f-secondary border rounded-xl p-5 text-center ${plan.popular ? "border-n2f-accent/40" : "border-n2f-border"}`}>
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-n2f-accent text-black text-xs font-bold rounded-md">
                      {t("recommended")}
                    </span>
                  )}
                  <h3 className="text-base font-bold text-n2f-text mb-1">{plan.name}</h3>
                  <p className="text-2xl font-bold text-n2f-accent mb-1">
                    {plan.price}
                    {plan.descKey !== "freeDesc" && <span className="text-xs text-n2f-text-muted font-normal">{t("perMonth")}</span>}
                  </p>
                  <p className="text-xs text-n2f-text-muted mb-4">{t(plan.descKey)}</p>
                  <ul className="text-left flex-1 mb-4 space-y-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-n2f-text-muted">
                        <Check className="w-3 h-3 text-n2f-accent shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={DASHBOARD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center px-4 py-2 text-xs font-medium rounded-lg bg-n2f-accent text-black hover:bg-n2f-accent-dark transition-colors duration-200"
                  >
                    {t("startUsing")}
                  </a>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="text-center py-14 border-t border-n2f-border">
            <h2 className="text-2xl font-bold text-n2f-text mb-3">{t("ctaTitle")}</h2>
            <p className="text-n2f-text-muted mb-8">{t("ctaDesc")}</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href={DASHBOARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg bg-n2f-accent text-black hover:bg-n2f-accent-dark transition-colors duration-200"
              >
                {t("goDashboard")}
              </a>
              <Link href="/services/private" className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg border border-n2f-border text-n2f-text-secondary hover:border-n2f-border-hover hover:text-n2f-text transition-all duration-200">
                {t("viewPrivate")}
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
