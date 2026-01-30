import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-[calc(80px+60px)] pb-20 max-md:pt-[calc(48px+60px)] max-md:pb-12 bg-[radial-gradient(ellipse_at_center_top,var(--color-n2f-accent-subtle),transparent_60%),#0a0a0a]">
      {/* MCP Watermark */}
      <div
        className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[url('/images/partners/mcp-icon.png')] bg-center bg-contain bg-no-repeat opacity-[0.025] pointer-events-none max-md:w-[400px] max-md:h-[400px] max-md:opacity-[0.05]"
        aria-hidden="true"
      />

      <div className="w-full max-w-[1100px] mx-auto px-6 relative z-[1]">
        <div className="text-center flex flex-col items-center">
          <Image
            src="/images/logo.jpg"
            alt="Node2Flow"
            width={90}
            height={90}
            className="rounded-2xl mb-6"
          />

          <span className="inline-block px-3.5 py-1 text-xs font-semibold tracking-[2px] uppercase text-n2f-accent border border-n2f-accent/30 rounded-full bg-n2f-accent/[0.08] mb-6">
            MCP Server Platform
          </span>

          <h1 className="text-[56px] max-md:text-4xl max-[480px]:text-[28px] font-extrabold mb-4 bg-gradient-to-br from-white to-n2f-accent bg-clip-text text-transparent">
            Node2Flow
          </h1>

          <p className="text-xl text-n2f-text-secondary mb-2">
            Connect your AI to any service
          </p>

          <p className="text-base text-n2f-text-muted mb-9">
            Ready-to-use MCP Servers. No installation needed.
          </p>

          <div className="flex gap-4 flex-wrap justify-center max-[480px]:flex-col max-[480px]:items-center">
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-semibold rounded-lg bg-gradient-to-br from-n2f-accent to-n2f-accent-dark text-black shadow-[0_0_20px_var(--color-n2f-accent-glow)] hover:shadow-[0_0_40px_var(--color-n2f-accent-glow)] hover:-translate-y-0.5 transition-all duration-300 max-[480px]:w-full max-[480px]:max-w-[280px]"
            >
              Get Started Free
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-semibold rounded-lg bg-transparent text-white border-2 border-white/30 hover:border-n2f-accent hover:text-n2f-accent transition-all duration-300 max-[480px]:w-full max-[480px]:max-w-[280px]"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
