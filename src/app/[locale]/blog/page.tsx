import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/queries";
import FadeIn from "@/components/ui/FadeIn";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Blog - Node2Flow",
  description: "Articles about MCP, n8n, AI Automation and Workflow",
};

export default async function BlogPage() {
  const t = await getTranslations("blog");
  const posts = await getAllPosts();

  return (
    <main className="pt-[calc(80px+80px)] pb-20 bg-n2f">
      <div className="w-full max-w-[800px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-5xl max-md:text-4xl font-bold text-n2f-text mb-3">{t("title")}</h1>
            <p className="text-lg text-n2f-text-secondary">{t("subtitle")}</p>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {posts.map((post, i) => {
            const tags: string[] = post.tags ? JSON.parse(post.tags) : [];
            return (
              <FadeIn key={post.slug} delay={i * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block card-glow bg-n2f-secondary border border-n2f-border rounded-xl p-8 hover:border-n2f-border-hover transition-colors duration-200 group"
                >
                  <p className="text-xs text-n2f-text-dim mb-3">{post.publishedAt}</p>
                  <h2 className="text-xl font-semibold text-n2f-text mb-3 group-hover:text-n2f-accent transition-colors duration-200">{post.title}</h2>
                  <p className="text-sm text-n2f-text-muted leading-relaxed mb-4">{post.description}</p>
                  <div className="flex gap-2">
                    {tags.map((tag) => (
                      <span key={tag} className="text-xs text-n2f-accent bg-n2f-accent/[0.06] border border-n2f-accent/15 px-2.5 py-0.5 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </main>
  );
}
