import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { blogPosts } from "@/data/blog-posts";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.admetuslifesciences.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://www.admetuslifesciences.com/blog/",
    },
  ],
};

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pt-24 pb-12 overflow-hidden">
        <img
          src="/images/facility/softgels-hero-golden.jpg"
          alt="Admetus Lifesciences blog — softgel manufacturing insights and buyer guides"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, var(--hero-grad-start), var(--hero-grad-mid) 50%, var(--hero-grad-end))",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)]">
            BLOG &middot; INSIGHTS
          </span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            INSIGHTS &<br />
            RESOURCES
          </h1>
          <p className="mt-4 body-large text-[var(--gold)] max-w-[60ch]">
            Expert perspectives on softgel capsule manufacturing, nutraceutical
            formulation, industry trends, and buyer guidance from the Admetus
            Lifesciences team.
          </p>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post, i) => (
              <SectionReveal key={post.slug} delay={i * 0.1}>
                <article className="group h-full flex flex-col bg-[var(--bg-charcoal)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 transition-colors duration-300">
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      width={640}
                      height={360}
                      loading={i < 3 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-charcoal)] via-transparent to-transparent opacity-60" />
                    <span className="absolute bottom-3 left-4 label-text text-[var(--teal)] !text-[0.5625rem]">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 lg:p-7">
                    <time
                      dateTime={post.date}
                      className="mono-text text-[0.6875rem] text-[var(--text-muted)] mb-3"
                    >
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>

                    <h2
                      className="heading-2 text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors duration-200 mb-3"
                      style={{
                        fontSize: "clamp(1rem, 1.6vw, 1.25rem)",
                        lineHeight: 1.3,
                      }}
                    >
                      <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
                    </h2>

                    <p className="body-text text-[var(--text-muted)] !text-[0.8125rem] mb-5 line-clamp-3 flex-1">
                      {post.description}
                    </p>

                    <Link
                      href={`/blog/${post.slug}/`}
                      className="inline-flex items-center gap-2 label-text text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors duration-200 mt-auto"
                    >
                      Read Article <ArrowRight size={13} />
                    </Link>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="label-text text-[var(--gold)]">
                WORK WITH US
              </span>
              <h2
                className="mt-3 display-section text-[var(--foreground)]"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                }}
              >
                READY TO MANUFACTURE?
              </h2>
              <div className="gold-rule w-12 mx-auto mt-4 mb-5" />
              <p className="body-text text-[var(--text-muted)] mb-8">
                From concept to finished softgel — contract manufacturing,
                private label, and export-ready production at our WHO-GMP
                certified facility.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Request a Quote <ArrowRight size={14} />
                </Link>
                <Link
                  href="/catalog/"
                  className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--gold)] border border-[var(--gold)]/30 hover:bg-[var(--gold)]/[0.06] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  View Catalog
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
