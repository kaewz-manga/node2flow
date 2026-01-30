import Image from "next/image";

const partners = [
  { src: "/images/partners/claude.png", alt: "Claude" },
  { src: "/images/partners/chatgpt.png", alt: "ChatGPT" },
  { src: "/images/partners/gemini.png", alt: "Gemini" },
  { src: "/images/partners/n8n.png", alt: "n8n" },
  { src: "/images/partners/cursor.png", alt: "Cursor" },
  { src: "/images/partners/lovable.png", alt: "Lovable" },
  { src: "/images/partners/antigravity.webp", alt: "Antigravity" },
];

export default function Partners() {
  return (
    <section className="py-8 bg-n2f border-y border-n2f-border">
      <div className="w-full max-w-[1100px] mx-auto px-6">
        <p className="text-center text-xs text-n2f-text-dim mb-4 tracking-[1px] uppercase">
          Works with
        </p>
        <div className="flex justify-center items-center gap-10 flex-wrap max-[480px]:gap-6">
          {partners.map((partner) => (
            <div
              key={partner.alt}
              className="flex items-center justify-center gap-2 p-2 px-3 text-sm font-semibold text-n2f-text-dim opacity-60 hover:opacity-100 hover:scale-110 hover:drop-shadow-[0_0_8px_var(--color-n2f-accent-glow)] transition-all duration-300"
            >
              <Image src={partner.src} alt={partner.alt} width={40} height={40} className="h-10 w-auto" />
            </div>
          ))}

          {/* MCP - special invert treatment */}
          <div className="flex items-center justify-center gap-2 p-2 px-3 opacity-60 scale-90 hover:opacity-100 hover:scale-100 transition-all duration-300">
            <Image src="/images/partners/mcp-icon.png" alt="MCP" width={40} height={40} className="h-10 w-auto" />
            <Image src="/images/partners/mcp-text.png" alt="MCP" width={40} height={20} className="h-5 w-auto invert" />
          </div>
        </div>
      </div>
    </section>
  );
}
