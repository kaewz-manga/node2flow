import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gemini RAG File Search - Node2Flow Blog",
  description: "วิธีใช้ Google Gemini สำหรับ RAG ค้นหาและวิเคราะห์ข้อมูลจากไฟล์เอกสาร",
};

export default function BlogPost() {
  return (
    <main className="relative overflow-hidden pt-[calc(80px+60px)] pb-20 bg-n2f">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[url('/images/partners/mcp-icon.png')] bg-center bg-contain bg-no-repeat opacity-[0.025] pointer-events-none" />

      <div className="w-full max-w-[800px] mx-auto px-6 relative z-[1]">
        <Link href="/blog" className="text-sm text-n2f-accent hover:underline mb-8 inline-block">
          &larr; กลับไปหน้า Blog
        </Link>

        <article>
          <p className="text-xs text-n2f-text-dim mb-3">2026-01-15</p>
          <h1 className="text-4xl max-md:text-[28px] font-extrabold text-white mb-6">
            Gemini RAG File Search - วิธีใช้ Gemini ค้นหาและวิเคราะห์ไฟล์
          </h1>

          <div className="flex gap-2 mb-8">
            {["Gemini", "RAG", "AI"].map((tag) => (
              <span key={tag} className="text-xs text-n2f-accent bg-n2f-accent/[0.08] border border-n2f-accent/20 px-2.5 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-extrabold text-n2f-accent mb-4">RAG คืออะไร?</h2>
              <p className="text-n2f-text-secondary leading-[1.8]">
                RAG (Retrieval-Augmented Generation) คือเทคนิคที่ให้ AI ค้นหาข้อมูลจากเอกสารที่เรามี
                แล้วใช้ข้อมูลนั้นในการตอบคำถาม ทำให้ AI ตอบได้แม่นยำขึ้น
                โดยอ้างอิงจากข้อมูลจริงไม่ใช่ข้อมูลที่ AI จำมา
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-n2f-accent mb-4">Gemini File Search</h2>
              <p className="text-n2f-text-secondary leading-[1.8]">
                Google Gemini มีความสามารถในการรับไฟล์เอกสาร (PDF, Text, CSV) แล้ววิเคราะห์เนื้อหาได้
                เราสามารถใช้ Gemini API ร่วมกับ n8n เพื่อสร้าง workflow ที่:
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "อัพโหลดเอกสารไปยัง Gemini",
                  "ถามคำถามเกี่ยวกับเนื้อหาในเอกสาร",
                  "สรุปเอกสารอัตโนมัติ",
                  "ค้นหาข้อมูลเฉพาะจากเอกสารหลายไฟล์",
                ].map((item, i) => (
                  <li key={i} className="relative pl-6 text-sm text-n2f-text-secondary before:content-['✓'] before:absolute before:left-0 before:text-n2f-accent before:font-bold">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-n2f-accent mb-4">ใช้งานกับ n8n</h2>
              <p className="text-n2f-text-secondary leading-[1.8]">
                ด้วย Node2Flow MCP Server คุณสามารถสั่ง AI ให้สร้าง n8n workflow ที่ใช้ Gemini RAG
                ได้โดยตรง ไม่ต้องเขียนโค้ดเอง แค่บอก AI ว่าต้องการทำอะไร
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
