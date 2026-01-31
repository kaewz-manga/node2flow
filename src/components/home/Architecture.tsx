import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const aiClients = [
  { src: "/images/partners/claude.png", label: "Claude" },
  { src: "/images/partners/chatgpt.png", label: "ChatGPT" },
  { src: "/images/partners/gemini.png", label: "Gemini" },
  { src: "/images/partners/cursor.png", label: "Cursor" },
  { src: "/images/partners/antigravity.webp", label: "Antigravity" },
];

const services = [
  { src: "/images/partners/notion.svg", label: "Notion" },
  { src: "/images/partners/googlesheets.svg", label: "Google Sheets" },
  { src: "/images/partners/line.svg", label: "LINE" },
  { src: "/images/partners/slack.svg", label: "Slack" },
  { src: "/images/partners/woocommerce.svg", label: "WooCommerce" },
];

function IconCard({ src, label }: { src: string; label: string }) {
  return (
    <div className="group flex flex-col items-center gap-1.5 p-3.5 px-2 bg-n2f-secondary border border-n2f-border rounded-xl hover:border-n2f-border-hover hover:bg-n2f-hover hover:scale-105 hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300">
      <Image src={src} alt={label} width={36} height={36} className="h-9 w-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="text-xs text-n2f-text-muted text-center whitespace-nowrap">{label}</span>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex-shrink-0 basis-20 h-10 flex items-center max-[968px]:rotate-90 max-[968px]:h-[60px] max-[968px]:basis-auto max-[968px]:w-10">
      <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="arrowGradArch" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6d5a" stopOpacity={0.15} />
            <stop offset="100%" stopColor="#ff6d5a" stopOpacity={0.8} />
          </linearGradient>
        </defs>
        <line
          x1={0} y1={20} x2={82} y2={20}
          stroke="url(#arrowGradArch)" strokeWidth={2}
          strokeDasharray="6,4"
          className="animate-[arrowFlow_1s_linear_infinite]"
        />
        <polygon points="82,14 98,20 82,26" fill="#ff6d5a" opacity={0.8} />
      </svg>
    </div>
  );
}

export default function Architecture() {
  return (
    <section className="relative py-28 max-md:py-16 bg-n2f" id="architecture">
      {/* Centered radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,109,90,0.04)_0%,transparent_50%)]" />

      <div className="w-full max-w-[1200px] mx-auto px-6 relative z-[1]">
        <FadeIn>
          <h2 className="text-4xl max-md:text-[28px] max-[480px]:text-2xl font-bold text-center mb-3 text-n2f-text">
            โครงสร้าง MCP
          </h2>
          <p className="text-center text-n2f-text-muted text-base mb-16">
            AI สั่งงาน → ผ่าน MCP Server → ถึงบริการปลายทาง
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="flex items-center justify-center gap-0 max-[968px]:flex-col max-[968px]:gap-3">
            {/* AI Clients Layer */}
            <div className="flex-1 max-w-[300px] max-[968px]:max-w-[400px] max-[968px]:w-full">
              <h3 className="text-xs font-medium text-n2f-accent text-center uppercase tracking-[2px] mb-4">
                <span className="border-b border-n2f-accent/30 pb-1">AI Clients</span>
              </h3>
              <div className="grid grid-cols-2 gap-2.5 max-[968px]:grid-cols-3">
                {aiClients.map((client) => (
                  <IconCard key={client.label} {...client} />
                ))}
              </div>
            </div>

            <Connector />

            {/* Hub — gradient border + glow */}
            <div className="flex-shrink-0 max-w-[240px] max-[968px]:max-w-[400px] max-[968px]:w-full">
              <div className="gradient-border p-8 px-7 text-center shadow-[0_0_60px_rgba(255,109,90,0.08)]">
                <div className="relative inline-block mb-3">
                  <Image
                    src="/images/logo.jpg"
                    alt="Node2Flow"
                    width={80}
                    height={80}
                    className="rounded-full border-2 border-n2f-accent/40 shadow-[0_0_30px_rgba(255,109,90,0.15)] animate-[glow-pulse_4s_ease-in-out_infinite]"
                  />
                  <Image
                    src="/images/partners/mcp-icon.png"
                    alt="MCP"
                    width={30}
                    height={30}
                    className="absolute -bottom-0.5 -right-1.5 bg-n2f-secondary rounded-full p-[3px] border-2 border-n2f-accent/40"
                  />
                </div>
                <h3 className="text-xl font-bold text-n2f-text mb-1">Node2Flow</h3>
                <p className="text-sm text-n2f-accent font-semibold">MCP Server Hub</p>
              </div>
            </div>

            <Connector />

            {/* Services Layer */}
            <div className="flex-1 max-w-[300px] max-[968px]:max-w-[400px] max-[968px]:w-full">
              <h3 className="text-xs font-medium text-n2f-accent text-center uppercase tracking-[2px] mb-4">
                <span className="border-b border-n2f-accent/30 pb-1">Services</span>
              </h3>
              <div className="grid grid-cols-2 gap-2.5 max-[968px]:grid-cols-3">
                {services.map((service) => (
                  <IconCard key={service.label} {...service} />
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
