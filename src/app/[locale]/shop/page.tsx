import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Shop & Library - Node2Flow",
  description: "Download Workflow Templates, MCP guides, and Cheat Sheets",
};

const freeProducts = [
  {
    type: "PDF Guide",
    typeColor: "text-red-400",
    name: "MCP Quick Start Guide",
    desc: "Quick start guide for MCP Server - from sign up to connecting AI Client",
    tags: ["MCP", "Beginner"],
    price: "Free",
    free: true,
  },
  {
    type: "PDF Cheat Sheet",
    typeColor: "text-red-400",
    name: "n8n MCP Cheat Sheet",
    desc: "All 20 MCP Tools commands with examples on a single page",
    tags: ["n8n", "MCP Tools", "Reference"],
    price: "Free",
    free: true,
  },
  {
    type: "JSON Templates",
    typeColor: "text-sky-300",
    name: "10 Starter Workflow Templates",
    desc: "10 ready-to-use workflows - import into n8n and start using immediately",
    tags: ["n8n", "Workflow", "JSON"],
    price: "Free",
    free: true,
  },
];

const premiumProducts = [
  {
    type: "PDF Guide",
    typeColor: "text-red-400",
    name: "Complete MCP Developer Guide",
    desc: "Build MCP Server from scratch - Architecture, Transport Modes, Security and Deployment",
    tags: ["MCP", "Advanced", "80+ pages"],
    price: "฿299",
    free: false,
  },
  {
    type: "Bundle",
    typeColor: "text-amber-400",
    name: "50 n8n MCP Workflows Pack",
    desc: "50 ready-to-use workflows for LINE, Notion, Google Sheets, WooCommerce, AI Agent and more",
    tags: ["n8n", "50 Workflows", "JSON"],
    price: "฿499",
    free: false,
  },
  {
    type: "PDF Guide",
    typeColor: "text-red-400",
    name: "n8n Integration Guide",
    desc: "Connect n8n with 15+ services with workflow templates and best practices",
    tags: ["n8n", "Integration", "60+ pages"],
    price: "฿199",
    free: false,
  },
];

function ProductCard({ product, comingSoon, disabled }: { product: typeof freeProducts[number]; comingSoon: string; disabled?: boolean }) {
  return (
    <div className={`relative card-glow flex flex-col bg-n2f-secondary border border-n2f-border rounded-xl p-6 ${disabled ? "opacity-60 cursor-not-allowed select-none" : ""}`}>
      {disabled && (
        <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-black/40 backdrop-blur-[2px]">
          <span className="px-4 py-1.5 text-sm font-medium tracking-[2px] uppercase text-n2f-text border border-n2f-border rounded-md bg-n2f-secondary/80">
            {comingSoon}
          </span>
        </div>
      )}

      <div className={`text-xs font-medium uppercase tracking-[1px] mb-3 ${product.typeColor}`}>
        {product.type}
      </div>
      <h3 className="text-base font-semibold text-n2f-text mb-2 leading-snug">{product.name}</h3>
      <p className="text-sm text-n2f-text-muted leading-relaxed mb-4 flex-1">{product.desc}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {product.tags.map((tag) => (
          <span key={tag} className="text-xs text-n2f-text-muted bg-n2f-hover border border-n2f-border px-2 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>
      {!disabled && (
        <div className="flex items-center justify-between pt-4 border-t border-n2f-border mt-auto">
          <span className="text-lg font-bold text-green-500">
            {product.price}
          </span>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  const t = useTranslations("shop");

  return (
    <main className="pt-[calc(80px+80px)] pb-20 bg-n2f">
      <div className="w-full max-w-[800px] mx-auto px-6">
        <FadeIn>
          <div className="text-center pb-14 border-b border-n2f-border mb-16">
            <h1 className="text-5xl max-md:text-4xl font-bold text-n2f-text mb-3">{t("title")}</h1>
            <p className="text-lg text-n2f-text-secondary max-w-[560px] mx-auto leading-relaxed">{t("subtitle")}</p>
          </div>
        </FadeIn>

        {/* n8n Account - Login */}
        <FadeIn delay={50}>
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl max-md:text-2xl font-bold text-n2f-text">n8n Account</h2>
              <span className="text-xs font-medium px-3 py-1 rounded-md uppercase tracking-[0.5px] bg-green-500/10 text-green-500 border border-green-500/20">
                {t("free")}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <Link
                href="/login"
                className="card-glow flex flex-col bg-n2f-secondary border border-n2f-border rounded-xl p-7 hover:border-n2f-border-hover transition-colors duration-200 md:flex-row md:gap-8"
              >
                <div className="flex-1">
                  <div className="text-xs font-medium uppercase tracking-[1px] mb-3 text-green-400">
                    Account
                  </div>
                  <h3 className="text-xl font-semibold text-n2f-text mb-2 leading-snug">{t("n8nAccountTitle")}</h3>
                  <p className="text-sm text-n2f-text-muted leading-relaxed mb-4">
                    {t("n8nAccountDesc")}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Google Login", "n8n", "MCP", "Free"].map((tag) => (
                      <span key={tag} className="text-xs text-n2f-text-muted bg-n2f-hover border border-n2f-border px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-end justify-center md:min-w-[180px] pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-n2f-border md:pl-8">
                  <span className="text-lg font-bold text-green-500 mb-3">Free</span>
                  <span className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-n2f-accent text-black">
                    {t("loginButton")}
                  </span>
                </div>
              </Link>
            </div>
          </section>
        </FadeIn>

        {/* SaaS Services */}
        <FadeIn delay={100}>
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl max-md:text-2xl font-bold text-n2f-text">SaaS Platform</h2>
              <span className="text-xs font-medium px-3 py-1 rounded-md uppercase tracking-[0.5px] bg-purple-500/10 text-purple-400 border border-purple-500/20">
                {t("comingSoon")}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="relative card-glow flex flex-col bg-n2f-secondary border border-n2f-border rounded-xl p-7 md:flex-row md:gap-8 opacity-60 cursor-not-allowed select-none">
                <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-black/40 backdrop-blur-[2px]">
                  <span className="px-4 py-1.5 text-sm font-medium tracking-[2px] uppercase text-n2f-text border border-n2f-border rounded-md bg-n2f-secondary/80">
                    {t("comingSoon")}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium uppercase tracking-[1px] mb-3 text-purple-400">
                    SaaS Platform
                  </div>
                  <h3 className="text-xl font-semibold text-n2f-text mb-2 leading-snug">n8n Management MCP</h3>
                  <p className="text-sm text-n2f-text-muted leading-relaxed mb-4">
                    Multi-tenant MCP Server on Cloudflare Workers — 32 MCP Tools for Workflow, Execution, Credential, Tag and User Management
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {["MCP", "n8n", "AI", "SaaS", "Cloudflare Workers", "32 Tools"].map((tag) => (
                      <span key={tag} className="text-xs text-n2f-text-muted bg-n2f-hover border border-n2f-border px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Free Resources */}
        <FadeIn delay={150}>
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl max-md:text-2xl font-bold text-n2f-text">Free Resources</h2>
              <span className="text-xs font-medium px-3 py-1 rounded-md uppercase tracking-[0.5px] bg-green-500/10 text-green-500 border border-green-500/20">
                {t("free")}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
              {freeProducts.map((p) => (
                <ProductCard key={p.name} product={p} comingSoon={t("comingSoon")} disabled={false} />
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Premium */}
        <FadeIn delay={200}>
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl max-md:text-2xl font-bold text-n2f-text">Premium</h2>
              <span className="text-xs font-medium px-3 py-1 rounded-md uppercase tracking-[0.5px] bg-n2f-accent/10 text-n2f-accent border border-n2f-accent/20">
                {t("paid")}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
              {premiumProducts.map((p) => (
                <ProductCard key={p.name} product={p} comingSoon={t("comingSoon")} disabled />
              ))}
            </div>
          </section>
        </FadeIn>
      </div>
    </main>
  );
}
