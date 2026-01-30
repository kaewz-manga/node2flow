import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { href: "/#services", label: "Services" },
  { href: "/docs", label: "Documentation" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Us" },
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
  return (
    <footer className="bg-[#050508] pt-15" id="contact">
      <div className="w-full max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-10 max-md:grid-cols-2 max-md:gap-8 max-[480px]:grid-cols-1 max-[480px]:gap-7">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/images/logo.jpg" alt="Node2Flow" width={32} height={32} className="rounded-lg" />
              <span className="text-lg font-extrabold text-white">Node2Flow</span>
            </div>
            <p className="text-sm text-n2f-text-dim">MCP Server Platform</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-n2f-text-muted hover:text-n2f-accent transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <ul className="flex flex-col gap-2.5">
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-n2f-text-muted hover:text-n2f-accent transition-colors duration-300 inline-flex items-center gap-1.5"
                    {...(link.external ? { target: "_blank", rel: "noopener" } : {})}
                  >
                    <Image src={link.icon} alt="" width={16} height={16} className="inline align-middle" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Follow Us</h4>
            <ul className="flex flex-col gap-2.5">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    className="text-sm text-n2f-text-muted hover:text-n2f-accent transition-colors duration-300 inline-flex items-center gap-1.5"
                  >
                    <Image src={link.icon} alt="" width={16} height={16} className="inline align-middle" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between mt-12 py-5 border-t border-n2f-border max-[480px]:flex-col max-[480px]:gap-2 max-[480px]:text-center">
          <p className="text-xs text-n2f-text-dim">&copy; 2026 Node2Flow. All rights reserved.</p>
          <Link href="/privacy" className="text-xs text-n2f-text-dim hover:text-n2f-accent transition-colors duration-300">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
