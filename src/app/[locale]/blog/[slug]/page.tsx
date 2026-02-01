import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/queries";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found - Node2Flow" };
  return {
    title: `${post.title} - Node2Flow Blog`,
    description: post.description,
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const t = await getTranslations("common");

  if (!post) {
    notFound();
  }

  const tags: string[] = post.tags ? JSON.parse(post.tags) : [];

  return (
    <main className="pt-[calc(80px+80px)] pb-20 bg-n2f">
      <div className="w-full max-w-[800px] mx-auto px-6">
        <Link href="/blog" className="text-sm text-n2f-accent hover:underline mb-8 inline-block">
          {t("backBlog")}
        </Link>

        <article>
          <p className="text-xs text-n2f-text-dim mb-3">{post.publishedAt}</p>
          <h1 className="text-4xl max-md:text-[28px] font-bold text-n2f-text mb-6">
            {post.title}
          </h1>

          <div className="flex gap-2 mb-10">
            {tags.map((tag) => (
              <span key={tag} className="text-xs text-n2f-accent bg-n2f-accent/[0.06] border border-n2f-accent/15 px-2.5 py-0.5 rounded-md">
                {tag}
              </span>
            ))}
          </div>

          <div
            className="prose prose-invert max-w-none [&_section]:mb-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-n2f-text [&_h2]:mb-4 [&_p]:text-n2f-text-secondary [&_p]:leading-relaxed [&_ul]:mt-4 [&_ul]:space-y-2 [&_li]:relative [&_li]:pl-6 [&_li]:text-sm [&_li]:text-n2f-text-secondary [&_li]:before:content-['✓'] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-n2f-accent [&_li]:before:font-bold"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </main>
  );
}
