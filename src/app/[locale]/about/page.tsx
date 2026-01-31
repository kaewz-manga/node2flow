import Image from "next/image";
import type { Metadata } from "next";
import { Target, Shield, Zap, Mail, Send, Heart } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "About Us - Node2Flow",
  description: "About Node2Flow - MCP Server Platform",
};

const missionIcons = [Target, Shield, Zap];
const missionKeys = ["missionEasy", "missionSafe", "missionReady"] as const;

const techStack = [
  "n8n", "MCP Protocol", "Docker", "Cloudflare", "Node.js",
  "PostgreSQL", "Redis", "Next.js", "TypeScript",
];

const contacts = [
  { icon: Mail, label: "Email", value: "node2flow@gmail.com", href: "mailto:node2flow@gmail.com" },
  { icon: Send, label: "Telegram", value: "@node2flow_bot", href: "https://t.me/node2flow_bot" },
  { icon: Heart, label: "LINE", value: "@990pvvzg", href: "https://line.me/R/ti/p/@990pvvzg" },
];

export default function AboutPage() {
  const t = useTranslations("about");

  const missions = missionKeys.map((key, i) => ({
    icon: missionIcons[i],
    title: t(key),
    desc: t(`${key}Desc`),
  }));

  return (
    <main className="pt-[calc(80px+80px)] pb-20 bg-n2f">
      <div className="w-full max-w-[800px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <Image src="/images/logo.jpg" alt="Node2Flow" width={80} height={80} className="rounded-2xl mx-auto mb-6" />
            <h1 className="text-4xl max-md:text-[28px] font-bold text-n2f-text mb-3">{t("title")}</h1>
            <p className="text-lg text-n2f-text-secondary max-w-[600px] mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-n2f-text mb-4">{t("aboutUs")}</h2>
            <p className="text-n2f-text-secondary leading-relaxed mb-4">{t("aboutDesc1")}</p>
            <p className="text-n2f-text-secondary leading-relaxed">{t("aboutDesc2")}</p>
          </section>
        </FadeIn>

        <FadeIn delay={150}>
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-n2f-text mb-6">{t("mission")}</h2>
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
              {missions.map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.title} className="card-glow bg-n2f-secondary border border-n2f-border rounded-xl p-6 text-center hover:border-n2f-border-hover transition-colors duration-200">
                    <div className="w-10 h-10 rounded-lg bg-n2f-accent/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 text-n2f-accent" />
                    </div>
                    <h3 className="text-base font-semibold text-n2f-text mb-2">{m.title}</h3>
                    <p className="text-sm text-n2f-text-muted leading-relaxed">{m.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={200}>
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-n2f-text mb-4">{t("whatWeDo")}</h2>
            <p className="text-n2f-text-secondary leading-relaxed">{t("whatWeDoDesc")}</p>
          </section>
        </FadeIn>

        <FadeIn delay={250}>
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-n2f-text mb-4">{t("tech")}</h2>
            <p className="text-n2f-text-secondary leading-relaxed mb-4">{t("techDesc")}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {techStack.map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-n2f-accent/[0.06] border border-n2f-accent/15 rounded-md text-sm text-n2f-accent font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={300}>
          <section>
            <h2 className="text-2xl font-bold text-n2f-text mb-6">{t("contactUs")}</h2>
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
              {contacts.map((c) => {
                const Icon = c.icon;
                return (
                  <a key={c.label} href={c.href} target="_blank" rel="noopener" className="card-glow flex flex-col items-center gap-2 p-6 bg-n2f-secondary border border-n2f-border rounded-xl hover:border-n2f-border-hover transition-colors duration-200">
                    <Icon className="w-6 h-6 text-n2f-accent" />
                    <span className="text-sm font-semibold text-n2f-text">{c.label}</span>
                    <span className="text-xs text-n2f-text-muted">{c.value}</span>
                  </a>
                );
              })}
            </div>
          </section>
        </FadeIn>
      </div>
    </main>
  );
}
