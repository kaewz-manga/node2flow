import Image from "next/image";

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
    <div className="flex flex-col items-center gap-1.5 p-3.5 px-2 bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border border-n2f-border rounded-xl hover:border-n2f-accent hover:-translate-y-1 hover:shadow-[0_0_20px_var(--color-n2f-accent-glow)] transition-all duration-300">
      <Image src={src} alt={label} width={36} height={36} className="h-9 w-auto opacity-80 hover:opacity-100 transition-opacity" />
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
            <stop offset="100%" stopColor="#ff6d5a" stopOpacity={1} />
          </linearGradient>
        </defs>
        <line
          x1={0} y1={20} x2={82} y2={20}
          stroke="url(#arrowGradArch)" strokeWidth={2}
          strokeDasharray="6,4"
          className="animate-[arrowFlow_1.5s_linear_infinite]"
        />
        <polygon points="82,15 96,20 82,25" fill="#ff6d5a" />
      </svg>
    </div>
  );
}

export default function Architecture() {
  return (
    <section className="relative overflow-hidden py-20 max-md:py-12 bg-n2f" id="architecture">
      {/* MCP watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[url('/images/partners/mcp-icon.png')] bg-center bg-contain bg-no-repeat opacity-[0.025] pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-[1100px] mx-auto px-6 relative z-[1]">
        <h2 className="text-4xl max-md:text-[28px] max-[480px]:text-2xl font-extrabold text-center mb-4 text-white">
          โครงสร้าง MCP
        </h2>
        <p className="text-center text-n2f-text-muted text-base mb-12">
          AI สั่งงาน → ผ่าน MCP Server → ถึงบริการปลายทาง
        </p>

        {/* Diagram */}
        <div className="flex items-center justify-center gap-0 mt-12 max-[968px]:flex-col max-[968px]:gap-3">
          {/* AI Clients Layer */}
          <div className="flex-1 max-w-[300px] max-[968px]:max-w-[400px] max-[968px]:w-full">
            <h3 className="text-sm font-semibold text-n2f-text-muted text-center uppercase tracking-[1.5px] mb-4">
              AI Clients
            </h3>
            <div className="grid grid-cols-2 gap-2.5 max-[968px]:grid-cols-3">
              {aiClients.map((client) => (
                <IconCard key={client.label} {...client} />
              ))}
            </div>
          </div>

          <Connector />

          {/* Hub */}
          <div className="flex-shrink-0 max-w-[220px] max-[968px]:max-w-[400px] max-[968px]:w-full">
            <div className="bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border-2 border-n2f-accent rounded-2xl p-7 px-6 text-center shadow-[0_0_20px_var(--color-n2f-accent-glow)] hover:shadow-[0_0_40px_var(--color-n2f-accent-glow)] hover:scale-[1.04] transition-all duration-300">
              <div className="relative inline-block mb-3">
                <Image
                  src="/images/logo.jpg"
                  alt="Node2Flow"
                  width={72}
                  height={72}
                  className="rounded-full border-2 border-n2f-accent"
                />
                <Image
                  src="/images/partners/mcp-icon.png"
                  alt="MCP"
                  width={28}
                  height={28}
                  className="absolute -bottom-0.5 -right-1.5 bg-n2f-secondary rounded-full p-[3px] border-2 border-n2f-accent"
                />
              </div>
              <h3 className="text-lg font-extrabold text-white mb-1">Node2Flow</h3>
              <p className="text-sm text-n2f-accent font-semibold">MCP Server Hub</p>
            </div>
          </div>

          <Connector />

          {/* Services Layer */}
          <div className="flex-1 max-w-[300px] max-[968px]:max-w-[400px] max-[968px]:w-full">
            <h3 className="text-sm font-semibold text-n2f-text-muted text-center uppercase tracking-[1.5px] mb-4">
              Services
            </h3>
            <div className="grid grid-cols-2 gap-2.5 max-[968px]:grid-cols-3">
              {services.map((service) => (
                <IconCard key={service.label} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
