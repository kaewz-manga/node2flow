import Image from "next/image";
import Link from "next/link";
import { Cpu, ArrowRight, Shield, ArrowUpRight } from "lucide-react";

const badges = [
  { icon: Cpu, label: "32 MCP Tools" },
  { icon: Shield, label: "99.9% Uptime" },
  { icon: ArrowUpRight, label: "Free Tier" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[calc(80px+100px)] pb-36 max-md:pt-[calc(48px+70px)] max-md:pb-24">
      {/* Multi-layer background */}
      <div className="absolute inset-0 bg-n2f" />
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,109,90,0.14),transparent)]" />

      {/* Animated glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[rgba(255,109,90,0.06)] rounded-full blur-[100px] animate-[orb-float-1_12s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[rgba(160,80,255,0.04)] rounded-full blur-[80px] animate-[orb-float-2_15s_ease-in-out_infinite]" />

      <div className="w-full max-w-[1200px] mx-auto px-6 relative z-[1]">
        <div className="text-center flex flex-col items-center">
          {/* Floating logo */}
          <div className="animate-[float_6s_ease-in-out_infinite]">
            <Image
              src="/images/logo.jpg"
              alt="Node2Flow"
              width={72}
              height={72}
              className="rounded-2xl shadow-[0_0_40px_rgba(255,109,90,0.15)]"
            />
          </div>

          {/* Animated badge */}
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[2px] uppercase text-n2f-accent border border-n2f-accent/25 rounded-full bg-n2f-accent/[0.08] mt-8 mb-10 shadow-[0_0_20px_rgba(255,109,90,0.08)] animate-[glow-pulse_3s_ease-in-out_infinite]">
            MCP Server Platform
          </span>

          {/* Gradient animated heading */}
          <h1
            className="text-[72px] max-md:text-5xl max-[480px]:text-[32px] font-bold leading-[1.05] mb-5 bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(180deg, #ededed 0%, #a1a1a6 60%, #71717a 100%)",
            }}
          >
            Node2Flow
          </h1>

          <p className="text-xl max-md:text-lg text-n2f-text-secondary mb-2 font-medium">
            Connect your AI to any service
          </p>

          <p className="text-base text-n2f-text-muted mb-12 max-w-md">
            Ready-to-use MCP Servers. No installation needed.
          </p>

          {/* Buttons with hover effects */}
          <div className="flex gap-4 flex-wrap justify-center max-[480px]:flex-col max-[480px]:items-center">
            <Link
              href="/login"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium rounded-xl bg-n2f-accent text-black hover:bg-n2f-accent-dark hover:shadow-[0_0_30px_rgba(255,109,90,0.3)] transition-all duration-300 max-[480px]:w-full max-[480px]:max-w-[280px]"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium rounded-xl bg-white/[0.04] text-n2f-text-secondary border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15] hover:text-n2f-text transition-all duration-300 max-[480px]:w-full max-[480px]:max-w-[280px]"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex items-center gap-8 mt-14 max-[480px]:flex-col max-[480px]:gap-4">
            {badges.map((badge, i) => {
              const Icon = badge.icon;
              return (
                <div key={badge.label} className="flex items-center gap-2.5 text-sm text-n2f-text-muted">
                  {i > 0 && <span className="hidden max-[480px]:hidden md:block w-1 h-1 rounded-full bg-n2f-text-dim -ml-5 mr-0.5" />}
                  <div className="w-7 h-7 rounded-lg bg-n2f-accent/10 flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5 text-n2f-accent" />
                  </div>
                  <span>{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-n2f to-transparent" />
    </section>
  );
}
