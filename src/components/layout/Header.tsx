"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const services = [
  { href: "/services/install", label: "รับติดตั้ง n8n-MCP", icon: "🚀" },
  { href: "/services/private", label: "Private MCP Server", icon: "🔒" },
  { href: "/services/saas", label: "SaaS n8n-MCP", icon: "☁️" },
  { href: "/#services", label: "ดูบริการทั้งหมด", icon: "📋" },
];

const navLinks = [
  { href: "/#about", label: "MCP" },
  { href: "/#faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/shop", label: "Shop" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 backdrop-blur-[12px] border-b transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        scrolled
          ? "bg-[rgba(10,10,10,0.95)] border-n2f-border"
          : "bg-[rgba(10,10,10,0.6)] border-transparent"
      }`}
    >
      <div className="w-full max-w-[1100px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 text-lg font-extrabold text-white hover:text-white">
          <Image src="/images/logo.jpg" alt="Node2Flow" width={32} height={32} className="rounded-lg" />
          <span>Node2Flow</span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className={`
            flex items-center gap-6
            max-md:fixed max-md:top-0 max-md:w-[280px] max-md:h-screen
            max-md:bg-n2f-secondary max-md:flex-col max-md:items-start
            max-md:pt-20 max-md:px-8 max-md:pb-8 max-md:gap-6
            max-md:border-l max-md:border-n2f-border
            max-md:transition-[right] max-md:duration-300 max-md:ease-[cubic-bezier(0.4,0,0.2,1)]
            ${menuOpen ? "max-md:right-0" : "max-md:right-[-100%]"}
          `}
        >
          {/* Services Dropdown */}
          <div className="relative group max-md:w-full">
            <Link
              href="/#services"
              className="text-sm text-n2f-text-muted hover:text-white transition-colors duration-300"
            >
              Services{" "}
              <span className="text-[10px] transition-transform duration-300 group-hover:inline-block group-hover:rotate-180">
                ▾
              </span>
            </Link>
            <div
              className="
                absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2
                min-w-[220px] bg-n2f-secondary border border-n2f-border
                rounded-xl p-2 opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.4)]
                max-md:static max-md:translate-x-0 max-md:opacity-100 max-md:visible
                max-md:bg-white/[0.03] max-md:border-none max-md:shadow-none
                max-md:pl-4 max-md:mt-2 max-md:min-w-0
                max-md:border-l-2 max-md:border-l-n2f-border
              "
            >
              {services.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3.5 py-2.5 text-sm text-n2f-text-muted rounded-lg hover:bg-n2f-accent-subtle hover:text-white transition-all duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.icon} {item.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-n2f-text-muted hover:text-white transition-colors duration-300 max-md:text-base"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex items-center gap-3 max-md:flex-col max-md:w-full">
            {session?.user ? (
              <>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 text-sm text-n2f-text-muted hover:text-white transition-colors duration-300"
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
                  className="text-sm text-n2f-text-muted hover:text-red-400 transition-colors duration-300 cursor-pointer max-md:w-full max-md:text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="text-sm text-n2f-text-muted hover:text-white transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            )}
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-semibold rounded-lg bg-gradient-to-br from-n2f-accent to-n2f-accent-dark text-black shadow-[0_0_20px_var(--color-n2f-accent-glow)] hover:shadow-[0_0_40px_var(--color-n2f-accent-glow)] hover:-translate-y-0.5 transition-all duration-300 max-md:w-full"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="hidden max-md:flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className="block w-[22px] h-0.5 bg-white rounded-sm transition-all duration-300" />
          <span className="block w-[22px] h-0.5 bg-white rounded-sm transition-all duration-300" />
          <span className="block w-[22px] h-0.5 bg-white rounded-sm transition-all duration-300" />
        </button>
      </div>
    </header>
  );
}
