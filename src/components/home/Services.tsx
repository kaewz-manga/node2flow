import { Link2, Zap, Bot, Wrench, Cloud, Rocket, type LucideIcon } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import { useTranslations } from "next-intl";

const serviceIcons: LucideIcon[] = [Link2, Zap, Bot, Wrench, Cloud, Rocket];
const serviceKeys = ["mcpHub", "workflow", "aiAgent", "custom", "hosting", "setup"] as const;

export default function Services() {
  const t = useTranslations("services");

  const services = serviceKeys.map((key, i) => ({
    icon: serviceIcons[i],
    title: t(key),
    desc: t(`${key}Desc`),
  }));

  return (
    <section className="relative py-28 max-md:py-16 bg-n2f" id="services">
      <div className="w-full max-w-[1200px] mx-auto px-6 relative z-[1]">
        <FadeIn>
          <h2 className="text-4xl max-md:text-[28px] max-[480px]:text-2xl font-bold text-center mb-4 text-n2f-text">
            {t("title")}
          </h2>
          <p className="text-center text-n2f-text-muted text-base mb-14">
            {t("subtitle")}
          </p>
        </FadeIn>

        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-[480px]:grid-cols-1">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={i} delay={i * 80}>
                <article className="group bg-n2f-secondary border border-n2f-border rounded-2xl p-7 hover:border-n2f-border-hover hover:bg-n2f-elevated transition-all duration-300 h-full cursor-default">
                  <div className="w-11 h-11 rounded-xl bg-n2f-accent/10 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-n2f-accent" />
                  </div>
                  <h3 className="text-base font-semibold mb-2 text-n2f-text">{service.title}</h3>
                  <p className="text-sm text-n2f-text-muted leading-relaxed">{service.desc}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
