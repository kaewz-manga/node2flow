import Image from "next/image";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("partners");

  return (
    <section className="relative py-12 bg-n2f overflow-hidden">
      {/* Gradient top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-n2f-accent/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-n2f-accent/20 to-transparent" />

      <div className="w-full max-w-[1200px] mx-auto px-6">
        <p className="text-center text-xs text-n2f-text-dim mb-8 tracking-[2px] uppercase font-medium">
          {t("label")}
        </p>
      </div>

      {/* Marquee with gradient fade edges */}
      <div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
        <div className="flex w-max animate-[marquee_30s_linear_infinite]">
          {[0, 1, 2, 3].map((copy) => (
            <div key={copy} className="flex shrink-0 gap-16 items-center pr-16">
              {partners.map((partner) => (
                <div
                  key={`${partner.alt}-${copy}`}
                  className="flex items-center justify-center shrink-0 opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-500"
                >
                  <Image src={partner.src} alt={partner.alt} width={44} height={44} className="h-11 w-auto" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
