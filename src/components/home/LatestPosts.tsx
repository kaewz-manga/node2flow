import { Link } from "@/i18n/navigation";
import { ArrowRight, FileText, BookOpen } from "lucide-react";
import { getAllPosts } from "@/lib/queries";
import FadeIn from "@/components/ui/FadeIn";
import { getTranslations } from "next-intl/server";

export default async function LatestPosts() {
  const t = await getTranslations("latestPosts");
  const posts = (await getAllPosts()).slice(0, 3);

  const docHighlights = [
    { title: t("docMcp"), desc: t("docMcpDesc"), href: "/docs" as const },
    { title: t("docClient"), desc: t("docClientDesc"), href: "/docs" as const },
    { title: t("docTransport"), desc: t("docTransportDesc"), href: "/docs" as const },
  ];

  return (
    <section className="relative py-28 max-md:py-16 bg-n2f" id="resources">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="w-full max-w-[1200px] mx-auto px-6 relative z-[1]">
        <FadeIn>
          <h2 className="text-4xl max-md:text-[28px] max-[480px]:text-2xl font-bold text-center mb-4 text-n2f-text">
            {t("title")}
          </h2>
          <p className="text-center text-n2f-text-muted text-base mb-14">
            {t("subtitle")}
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          {/* Blog posts column */}
          <FadeIn delay={100}>
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-lg bg-n2f-accent/10 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-n2f-accent" />
                </div>
                <h3 className="text-lg font-semibold text-n2f-text">{t("blog")}</h3>
              </div>

              <div className="space-y-3">
                {posts.length > 0 ? (
                  posts.map((post) => {
                    const tags: string[] = post.tags ? JSON.parse(post.tags) : [];
                    return (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group block bg-n2f-secondary border border-n2f-border rounded-xl p-5 hover:border-n2f-border-hover hover:bg-n2f-elevated transition-all duration-300"
                      >
                        <p className="text-[11px] text-n2f-text-dim mb-1.5">{post.publishedAt}</p>
                        <h4 className="text-sm font-semibold text-n2f-text mb-1.5 group-hover:text-n2f-accent transition-colors duration-200">
                          {post.title}
                        </h4>
                        <p className="text-xs text-n2f-text-muted leading-relaxed line-clamp-2 mb-2">
                          {post.description}
                        </p>
                        {tags.length > 0 && (
                          <div className="flex gap-1.5">
                            {tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="text-[10px] text-n2f-accent bg-n2f-accent/[0.06] border border-n2f-accent/15 px-2 py-0.5 rounded">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </Link>
                    );
                  })
                ) : (
                  <div className="bg-n2f-secondary border border-n2f-border rounded-xl p-5 text-center">
                    <p className="text-sm text-n2f-text-muted">{t("noPosts")}</p>
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                className="group inline-flex items-center gap-1.5 text-sm text-n2f-accent font-medium mt-4 hover:underline"
              >
                {t("viewAllBlog")}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </FadeIn>

          {/* Docs column */}
          <FadeIn delay={200}>
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-lg bg-n2f-accent/10 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-n2f-accent" />
                </div>
                <h3 className="text-lg font-semibold text-n2f-text">{t("docs")}</h3>
              </div>

              <div className="space-y-3">
                {docHighlights.map((doc) => (
                  <Link
                    key={doc.title}
                    href={doc.href}
                    className="group block bg-n2f-secondary border border-n2f-border rounded-xl p-5 hover:border-n2f-border-hover hover:bg-n2f-elevated transition-all duration-300"
                  >
                    <h4 className="text-sm font-semibold text-n2f-text mb-1.5 group-hover:text-n2f-accent transition-colors duration-200">
                      {doc.title}
                    </h4>
                    <p className="text-xs text-n2f-text-muted leading-relaxed">{doc.desc}</p>
                  </Link>
                ))}
              </div>

              <Link
                href="/docs"
                className="group inline-flex items-center gap-1.5 text-sm text-n2f-accent font-medium mt-4 hover:underline"
              >
                {t("viewAllDocs")}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
