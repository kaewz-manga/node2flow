import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/queries";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found - Node2Flow" };
  return {
    title: `${post.title} - Node2Flow Blog`,
    description: post.description,
  };
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const tags: string[] = post.tags ? JSON.parse(post.tags) : [];

  return (
    <main className="relative overflow-hidden pt-[calc(80px+60px)] pb-20 bg-n2f">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[url('/images/partners/mcp-icon.png')] bg-center bg-contain bg-no-repeat opacity-[0.025] pointer-events-none" />

      <div className="w-full max-w-[800px] mx-auto px-6 relative z-[1]">
        <Link href="/blog" className="text-sm text-n2f-accent hover:underline mb-8 inline-block">
          &larr; กลับไปหน้า Blog
        </Link>

        <article>
          <p className="text-xs text-n2f-text-dim mb-3">{post.publishedAt}</p>
          <h1 className="text-4xl max-md:text-[28px] font-extrabold text-white mb-6">
            {post.title}
          </h1>

          <div className="flex gap-2 mb-8">
            {tags.map((tag) => (
              <span key={tag} className="text-xs text-n2f-accent bg-n2f-accent/[0.08] border border-n2f-accent/20 px-2.5 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div
            className="prose prose-invert max-w-none [&_section]:mb-8 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-n2f-accent [&_h2]:mb-4 [&_p]:text-n2f-text-secondary [&_p]:leading-[1.8] [&_ul]:mt-4 [&_ul]:space-y-2 [&_li]:relative [&_li]:pl-6 [&_li]:text-sm [&_li]:text-n2f-text-secondary [&_li]:before:content-['✓'] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-n2f-accent [&_li]:before:font-bold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </main>
  );
}
