"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { Rocket, Lock, Cloud, LayoutGrid } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const serviceIcons = [Rocket, Lock, Cloud, LayoutGrid];
const serviceHrefs = ["/services/install", "/services/private", "/services/saas", "/#services"] as const;
const serviceKeys = ["installService", "privateMcp", "saasMcp", "allServices"] as const;

const navLinkData = [
  { href: "/#about", key: "mcp" },
  { href: "/#faq", key: "faq" },
  { href: "/blog", key: "blog" },
  { href: "/shop", key: "shop" },
  { href: "/#contact", key: "contact" },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = () => {
    const newLocale = locale === "th" ? "en" : "th";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 backdrop-blur-xl border-b transition-all duration-300 ${
        scrolled
          ? "bg-n2f/90 border-n2f-border"
          : "bg-n2f/60 border-transparent"
      }`}
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 text-lg font-bold text-n2f-text hover:text-n2f-text">
          <Image src="/images/logo.jpg" alt="Node2Flow" width={32} height={32} className="rounded-lg" />
          <span>Node2Flow</span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className={`
            flex items-center gap-6
            max-md:fixed max-md:top-0 max-md:w-[280px] max-md:h-screen
            max-md:bg-n2f/95 max-md:backdrop-blur-2xl max-md:flex-col max-md:items-start
            max-md:pt-20 max-md:px-8 max-md:pb-8 max-md:gap-6
            max-md:border-l max-md:border-n2f-border
            max-md:transition-[right] max-md:duration-300
            ${menuOpen ? "max-md:right-0" : "max-md:right-[-100%]"}
          `}
        >
          {/* Services Dropdown */}
          <div className="relative group max-md:w-full">
            <Link
              href="/#services"
              className="text-sm text-n2f-text-muted hover:text-n2f-text transition-colors duration-200"
            >
              {t("services")}{" "}
              <span className="text-[10px] inline-block transition-transform duration-200 group-hover:rotate-180">
                ▾
              </span>
            </Link>
            <div
              className="
                absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2
                min-w-[220px] bg-n2f-secondary border border-n2f-border
                rounded-xl p-2 opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-200 shadow-[0_8px_32px_rgba(0,0,0,0.5)]
                max-md:static max-md:translate-x-0 max-md:opacity-100 max-md:visible
                max-md:bg-white/[0.03] max-md:border-none max-md:shadow-none
                max-md:pl-4 max-md:mt-2 max-md:min-w-0
                max-md:border-l-2 max-md:border-l-n2f-border
              "
            >
              {serviceKeys.map((key, i) => {
                const Icon = serviceIcons[i];
                return (
                  <Link
                    key={key}
                    href={serviceHrefs[i]}
                    className="flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-n2f-text-muted rounded-lg hover:bg-n2f-hover hover:text-n2f-text transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    {t(key)}
                  </Link>
                );
              })}
            </div>
          </div>

          {navLinkData.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-n2f-text-muted hover:text-n2f-text transition-colors duration-200 max-md:text-base"
              onClick={() => setMenuOpen(false)}
            >
              {t(link.key)}
            </Link>
          ))}

          {/* Language Switcher */}
          <button
            onClick={switchLocale}
            className="px-3 py-1.5 text-xs font-medium rounded-lg border border-n2f-border bg-n2f-secondary text-n2f-text-muted hover:bg-n2f-hover hover:text-n2f-text transition-colors duration-200 cursor-pointer"
          >
            {locale === "th" ? "EN" : "TH"}
          </button>

          <div className="flex items-center gap-3 max-md:flex-col max-md:w-full">
            {session?.user ? (
              <>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 text-sm text-n2f-text-muted hover:text-n2f-text transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {session.user.image ? (
                    <Image
                      src={session.user.image}
                      alt=""
                      width={28}
                      height={28}
                      className="rounded-full"
                    />
                  ) : (
                    <span className="w-7 h-7 rounded-full bg-n2f-accent text-black text-xs font-bold flex items-center justify-center">
                      {session.user.name?.[0] || "U"}
                    </span>
                  )}
                  <span className="max-md:inline hidden md:inline">{session.user.name || "Dashboard"}</span>
                </Link>
                <button
                  onClick={() => { setMenuOpen(false); signOut({ callbackUrl: "/" }); }}
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 transition-colors duration-200 cursor-pointer max-md:w-full"
                >
                  {t("logout")}
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium rounded-lg bg-n2f-accent text-black hover:bg-n2f-accent-dark hover:shadow-[0_0_20px_rgba(255,109,90,0.25)] transition-all duration-300 max-md:w-full"
                onClick={() => setMenuOpen(false)}
              >
                {t("getStarted")}
              </Link>
            )}
          </div>
        </nav>

        {/* Mobile Toggle — animated hamburger → X */}
        <button
          className="hidden max-md:flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 w-8 h-8 items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-[22px] h-0.5 bg-n2f-text rounded-sm transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-[22px] h-0.5 bg-n2f-text rounded-sm transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-[22px] h-0.5 bg-n2f-text rounded-sm transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>
    </header>
  );
}
