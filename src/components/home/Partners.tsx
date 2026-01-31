import Image from "next/image";

const partners = [
  { src: "/images/partners/claude.png", alt: "Claude" },
  { src: "/images/partners/chatgpt.png", alt: "ChatGPT" },
  { src: "/images/partners/gemini.png", alt: "Gemini" },
  { src: "/images/partners/n8n.png", alt: "n8n" },
  { src: "/images/partners/cursor.png", alt: "Cursor" },
  { src: "/images/partners/lovable.png", alt: "Lovable" },
  { src: "/images/partners/antigravity.webp", alt: "Antigravity" },
  { src: "/images/partners/mcp-icon.png", alt: "MCP" },
];

export default function Partners() {
  return (
    <section className="relative py-12 bg-n2f overflow-hidden">
      {/* Gradient top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-n2f-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-n2f-accent/20 to-transparent" />

      <div className="w-full max-w-[1200px] mx-auto px-6">
        <p className="text-center text-xs text-n2f-text-dim mb-8 tracking-[2px] uppercase font-medium">
          Works with
        </p>
      </div>

      {/* Marquee with gradient fade edges */}
      <div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
        <div className="flex animate-[marquee_30s_linear_infinite] w-max gap-16 items-center">
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={`${partner.alt}-${i}`}
              className="flex items-center justify-center flex-shrink-0 grayscale brightness-50 hover:grayscale-0 hover:brightness-100 hover:scale-110 transition-all duration-500"
            >
              <Image src={partner.src} alt={partner.alt} width={44} height={44} className="h-11 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
