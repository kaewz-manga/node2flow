import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Node2Flow",
  description: "บทความเกี่ยวกับ MCP, n8n, AI Automation และ Workflow",
};

const posts = [
  {
    slug: "gemini-rag-file-search",
    title: "Gemini RAG File Search - วิธีใช้ Gemini ค้นหาและวิเคราะห์ไฟล์",
    desc: "เรียนรู้วิธีใช้ Google Gemini สำหรับ RAG (Retrieval-Augmented Generation) ค้นหาและวิเคราะห์ข้อมูลจากไฟล์เอกสาร",
    date: "2026-01-15",
    tags: ["Gemini", "RAG", "AI"],
  },
];

export default function BlogPage() {
  return (
    <main className="relative overflow-hidden pt-[calc(80px+60px)] pb-20 bg-n2f">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[url('/images/partners/mcp-icon.png')] bg-center bg-contain bg-no-repeat opacity-[0.025] pointer-events-none" />

      <div className="w-full max-w-[800px] mx-auto px-6 relative z-[1]">
        <div className="text-center mb-14">
          <h1 className="text-[56px] max-md:text-4xl font-extrabold text-white mb-2">Blog</h1>
          <p className="text-lg text-n2f-text-secondary">
            บทความเกี่ยวกับ MCP, n8n, AI Automation และ Workflow
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-gradient-to-br from-n2f-secondary to-n2f-tertiary border border-n2f-border rounded-2xl p-8 hover:border-n2f-accent hover:shadow-[0_0_20px_var(--color-n2f-accent-glow)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <p className="text-xs text-n2f-text-dim mb-3">{post.date}</p>
              <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-n2f-accent transition-colors">{post.title}</h2>
              <p className="text-sm text-n2f-text-muted leading-relaxed mb-4">{post.desc}</p>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs text-n2f-accent bg-n2f-accent/[0.08] border border-n2f-accent/20 px-2.5 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
