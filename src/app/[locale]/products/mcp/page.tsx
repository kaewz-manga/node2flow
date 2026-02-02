import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { Users, Lock, Shield, Globe, BarChart3, Zap, Check } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "n8n Management MCP - Node2Flow",
  description:
    "Multi-tenant MCP Platform Server for controlling n8n via AI with 32 MCP Tools",
};

const DASHBOARD_URL = "https://n8n-management-dashboard.node2flow.net";
const GITHUB_URL = "https://github.com/kaewz-manga/n8n-management-mcp";

const toolGroups = [
  {
    name: "Workflow Management",
    tools: ["list_workflows", "create_workflow", "update_workflow", "delete_workflow", "activate_workflow", "deactivate_workflow", "execute_workflow", "get_workflow", "tag_workflow"],
  },
  {
    name: "Execution Management",
    tools: ["list_executions", "get_execution", "delete_execution", "retry_execution"],
  },
  {
    name: "Credential Management",
    tools: ["list_credentials", "create_credential", "update_credential", "delete_credential", "get_credential_schema"],
  },
  {
    name: "Tags & Variables",
    tools: ["list_tags", "create_tag", "update_tag", "delete_tag", "list_variables", "create_variable", "update_variable", "delete_variable"],
  },
  {
    name: "User Management",
    tools: ["list_users", "get_user", "update_user_role", "delete_user", "invite_user", "get_current_user"],
  },
];

const highlightIcons = [Users, Lock, Shield, Globe, BarChart3, Zap];
const highlightKeys = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

const plans = [
  { name: "Free", price: "$0", period: "", requests: "100", connections: "1", popular: false },
  { name: "Starter", price: "$9.99", requests: "1,000", connections: "3", popular: false },
  { name: "Pro", price: "$29.99", requests: "10,000", connections: "10", popular: true },
  { name: "Enterprise", price: "$99.99", requests: "100,000", connections: "Unlimited", popular: false },
];

const stepKeys = ["step1", "step2", "step3", "step4"] as const;

const aiClients = ["Claude Desktop", "Cursor", "Windsurf", "n8n"];
const techStack = ["Cloudflare Workers", "Cloudflare D1", "Cloudflare KV", "React", "JWT", "AES-256-GCM", "PBKDF2"];

export default function MCPProductPage() {
  const t = useTranslations("product");

  return (
    <main className="pt-[calc(80px+80px)] pb-20 bg-n2f">
      <div className="w-full max-w-[800px] mx-auto px-6">
        {/* Hero */}
        <FadeIn>
          <div className="text-center pb-16 border-b border-n2f-border mb-16">
            <span className="inline-block px-3.5 py-1.5 text-xs font-medium tracking-[2px] uppercase text-n2f-accent border border-n2f-accent/20 rounded-full bg-n2f-accent/[0.06] mb-8">
              {t("badge")}
            </span>
            <h1 className="text-5xl max-md:text-4xl font-bold text-n2f-text mb-4">
              {t("title")}
            </h1>
            <p className="text-lg text-n2f-text-secondary max-w-[600px] mx-auto leading-relaxed mb-8">
              {t("heroDesc")}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href={DASHBOARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg bg-n2f-accent text-black hover:bg-n2f-accent-dark transition-colors duration-200"
              >
                {t("goDashboard")}
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg border border-n2f-border text-n2f-text-secondary hover:border-n2f-border-hover hover:text-n2f-text transition-all duration-200"
              >
                GitHub
              </a>
            </div>
          </div>
        </FadeIn>

        {/* What is it */}
        <FadeIn delay={100}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-n2f-text mb-4">{t("whatIs")}</h2>
            <p className="text-n2f-text-secondary leading-relaxed mb-4">
              {t("whatIsDesc1")}
            </p>
            <p className="text-n2f-text-secondary leading-relaxed">
              {t("whatIsDesc2")}
            </p>
          </section>
        </FadeIn>

        {/* 32 MCP Tools */}
        <FadeIn delay={150}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-n2f-text mb-1">{t("toolsTitle")}</h2>
            <p className="text-n2f-text-muted text-sm mb-6">{t("toolsSubtitle")}</p>
            <div className="space-y-3">
              {toolGroups.map((group) => (
                <div key={group.name} className="card-glow bg-n2f-secondary border border-n2f-border rounded-xl p-5">
                  <h3 className="text-sm font-semibold text-n2f-text mb-3">
                    {group.name}
                    <span className="text-n2f-text-muted font-normal ml-2">({group.tools.length})</span>
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {group.tools.map((tool) => (
                      <code key={tool} className="text-xs text-n2f-accent bg-n2f-accent/[0.06] border border-n2f-accent/15 px-2 py-0.5 rounded font-mono">
                        {tool}
                      </code>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Highlights */}
        <FadeIn delay={200}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-n2f-text mb-6">{t("highlights")}</h2>
            <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
              {highlightKeys.map((key, i) => {
                const Icon = highlightIcons[i];
                return (
                  <div key={key} className="card-glow bg-n2f-secondary border border-n2f-border rounded-xl p-5 hover:border-n2f-border-hover transition-colors duration-200">
                    <Icon className="w-5 h-5 text-n2f-accent mb-2" />
                    <h3 className="text-sm font-semibold text-n2f-text mb-1">{t(key)}</h3>
                    <p className="text-xs text-n2f-text-muted leading-relaxed">{t(`${key}d`)}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </FadeIn>

        {/* Pricing */}
        <FadeIn delay={250}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-n2f-text mb-8">{t("packages")}</h2>
            <div className="grid grid-cols-4 gap-3 max-md:grid-cols-2 max-[480px]:grid-cols-1">
              {plans.map((plan) => {
                const isActive = plan.name === "Free" || plan.name === "Starter";
                const isComingSoon = !isActive;
                return (
                <div key={plan.name} className={`relative flex flex-col bg-n2f-secondary border rounded-xl p-5 text-center ${plan.popular ? "border-n2f-accent/40" : "border-n2f-border"} ${isComingSoon ? "opacity-60" : ""}`}>
                  {isComingSoon && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-black/30 backdrop-blur-[1px]">
                      <span className="px-3 py-1 text-xs font-medium tracking-[1.5px] uppercase text-n2f-text border border-n2f-border rounded-md bg-n2f-secondary/80">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  <h3 className="text-base font-bold text-n2f-text mb-1">{plan.name}</h3>
                  {isActive ? (
                    <p className="text-2xl font-bold text-green-500 mb-0.5">Free</p>
                  ) : (
                    <p className="text-2xl font-bold text-n2f-text-muted mb-0.5">—</p>
                  )}
                  <div className="text-xs text-n2f-text-muted mb-3 space-y-1">
                    <p>{plan.requests} {t("requestsPerMonth")}</p>
                    <p>{plan.connections} {t("connections")}</p>
                  </div>
                  {isActive && (
                  <a
                    href={DASHBOARD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center px-4 py-2 text-xs font-medium rounded-lg bg-n2f-accent text-black hover:bg-n2f-accent-dark transition-colors duration-200"
                  >
                    {t("startUsing")}
                  </a>
                  )}
                </div>
                );
              })}
            </div>
          </section>
        </FadeIn>

        {/* How to start */}
        <FadeIn delay={300}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-n2f-text mb-6">{t("howTo")}</h2>
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

        {/* Supported + Tech Stack */}
        <FadeIn delay={350}>
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-n2f-text mb-4">{t("supportedClients")}</h2>
            <div className="flex flex-wrap gap-2 mb-10">
              {aiClients.map((c) => (
                <span key={c} className="text-sm text-n2f-text-secondary bg-n2f-hover border border-n2f-border px-4 py-1.5 rounded-md">
                  {c}
                </span>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-n2f-text mb-4">{t("techStack")}</h2>
            <div className="flex flex-wrap gap-2">
              {techStack.map((item) => (
                <span key={item} className="text-xs text-n2f-text-muted bg-n2f-hover border border-n2f-border px-3 py-1 rounded">
                  {item}
                </span>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={400}>
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
              <Link
                href="/services/mcp-platform"
                className="inline-flex items-center gap-2 px-8 py-3 font-medium rounded-lg border border-n2f-border text-n2f-text-secondary hover:border-n2f-border-hover hover:text-n2f-text transition-all duration-200"
              >
                {t("viewSaas")}
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
