import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const quickLinkData = [
  { href: "/#services", key: "services" },
  { href: "/products/mcp", key: "products" },
  { href: "/shop", key: "shop" },
  { href: "/docs", key: "documentation" },
  { href: "/blog", key: "blog" },
  { href: "/about", key: "aboutUs" },
];

const contactLinks = [
  {
    href: "mailto:node2flow@gmail.com",
    label: "node2flow@gmail.com",
    icon: "/images/partners/gmail.svg",
  },
  {
    href: "https://t.me/node2flow_bot",
    label: "Telegram",
    icon: "/images/partners/telegram.svg",
    external: true,
  },
  {
    href: "https://line.me/R/ti/p/@990pvvzg",
    label: "LINE",
    icon: "/images/partners/line.svg",
    external: true,
  },
];

const socialLinks = [
  {
    href: "https://facebook.com/61578132173105",
    label: "Facebook",
    icon: "/images/partners/facebook.svg",
  },
  {
    href: "https://youtube.com/@Node2Flow",
    label: "YouTube",
    icon: "/images/partners/youtube.svg",
  },
];

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const labelMap: Record<string, string> = {
    services: tNav("services"),
    products: t("products"),
    shop: tNav("shop"),
    documentation: t("documentation"),
    blog: tNav("blog"),
    aboutUs: t("aboutUs"),
  };

  const quickLinks = quickLinkData.map((link) => ({
    href: link.href,
    label: labelMap[link.key] || link.key,
  }));

  return (
    <footer className="bg-[#050508] pt-20" id="contact">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 max-md:grid-cols-2 max-md:gap-8 max-[480px]:grid-cols-1 max-[480px]:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/images/logo.jpg" alt="Node2Flow" width={32} height={32} className="rounded-lg" />
              <span className="text-lg font-bold text-n2f-text">Node2Flow</span>
            </div>
            <p className="text-sm text-n2f-text-dim leading-relaxed">MCP Server Platform</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium text-n2f-text mb-5">{t("quickLinks")}</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href as any} className="text-sm text-n2f-text-muted hover:text-n2f-text transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium text-n2f-text mb-5">{t("contact")}</h4>
            <ul className="flex flex-col gap-3">
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-n2f-text-muted hover:text-n2f-text transition-colors duration-200 inline-flex items-center gap-2"
                    {...(link.external ? { target: "_blank", rel: "noopener" } : {})}
                  >
                    <Image src={link.icon} alt="" width={16} height={16} className="inline align-middle opacity-60" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-sm font-medium text-n2f-text mb-5">{t("followUs")}</h4>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    className="text-sm text-n2f-text-muted hover:text-n2f-text transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    <Image src={link.icon} alt="" width={16} height={16} className="inline align-middle opacity-60" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between mt-14 py-6 border-t border-n2f-border max-[480px]:flex-col max-[480px]:gap-3 max-[480px]:text-center">
          <p className="text-xs text-n2f-text-dim">{t("rights")}</p>
          <Link href="/privacy" className="text-xs text-n2f-text-dim hover:text-n2f-text transition-colors duration-200">
            {t("privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
