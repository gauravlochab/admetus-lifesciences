import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { ingredientPages } from "@/data/ingredients";

const BASE = "https://www.admetuslifesciences.com";

export function generateStaticParams() {
  return ingredientPages.map((p) => ({ ingredient: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ingredient: string }>;
}): Promise<Metadata> {
  const { ingredient } = await params;
  const page = ingredientPages.find((p) => p.slug === ingredient);
  if (!page) return {};
  const url = `${BASE}/softgel-manufacturer/${page.slug}/`;
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      images: [{ url: "/seo/og-image.png", width: 1200, height: 630, alt: page.name + " softgel manufacturer — Admetus Lifesciences" }],
    },
  };
}

export default async function IngredientPage({
  params,
}: {
  params: Promise<{ ingredient: string }>;
}) {
  const { ingredient } = await params;
  const page = ingredientPages.find((p) => p.slug === ingredient);
  if (!page) notFound();

  const url = `${BASE}/softgel-manufacturer/${page.slug}/`;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name: "Softgel Manufacturer", item: `${BASE}/softgel-manufacturer/` },
      { "@type": "ListItem", position: 3, name: page.name, item: url },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[52vh] flex items-end pt-24 pb-12 overflow-hidden">
        <img
          src="/images/facility/softgels-hero-golden.jpg"
          alt={`${page.name} softgel capsules — WHO-GMP certified manufacturer & exporter, Admetus Lifesciences India`}
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0 opacity-50 dark:opacity-80" style={{ background: "linear-gradient(to top, var(--hero-overlay-bottom), var(--hero-overlay-mid) 55%, var(--hero-overlay-top))" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)]">{page.eyebrow}</span>
          <h1 className="mt-6 display-section" style={{ color: "#F7F4EF" }} dangerouslySetInnerHTML={{ __html: page.h1 }} />
          <p className="mt-6 body-large max-w-[62ch]" style={{ color: "#E0D8C8" }}>{page.intro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact/" className="inline-flex items-center gap-3 px-7 py-3.5 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors" style={{ fontFamily: "var(--font-display)" }}>
              Request a Quote <ArrowRight size={14} />
            </Link>
            <Link href="/request-samples/" className="inline-flex items-center gap-3 px-7 py-3.5 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[#F7F4EF] border border-[#F7F4EF]/40 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors" style={{ fontFamily: "var(--font-display)" }}>
              Request Samples
            </Link>
          </div>
        </div>
      </section>

      {/* Actives */}
      <section className="py-16 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)] mb-4 block">Formulation</span>
            <p className="body-large text-[var(--text-cream)] max-w-[72ch]">{page.actives}</p>
          </SectionReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)] mb-6 block">Why Admetus</span>
            <h2 className="display-section text-[var(--foreground)] mb-10">MANUFACTURING &amp;<br />EXPORT CAPABILITIES</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {page.benefits.map((b, i) => (
              <SectionReveal key={b} delay={i * 0.04}>
                <div className="py-5 border-t border-[var(--border-subtle)] flex items-start gap-5">
                  <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">{String(i + 1).padStart(2, "0")}</span>
                  <p className="body-text text-[var(--text-cream)]">{b}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)] mb-6 block">Applications</span>
            <h2 className="display-section text-[var(--foreground)] mb-10">TARGET&nbsp;MARKETS</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {page.applications.map((a, i) => (
              <SectionReveal key={a} delay={i * 0.05}>
                <div className="p-6 h-full border border-[var(--border-subtle)] bg-[var(--bg-warm-dark)]">
                  <span className="mono-text text-[0.75rem] text-[var(--gold)]">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-3 body-text text-[var(--foreground)]">{a}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
          {page.relatedProductSlug && (
            <SectionReveal delay={0.1}>
              <Link href={`/products/${page.relatedProductSlug}/`} className="group mt-10 inline-flex items-center gap-2 body-text text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors">
                View the {page.name} product spec
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </SectionReveal>
          )}
        </div>
      </section>

      {/* FAQ */}
      {page.faqs.length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
            <SectionReveal>
              <span className="label-text text-[var(--gold)] mb-6 block">Frequently Asked</span>
              <h2 className="display-section text-[var(--foreground)] mb-10">{page.name.toUpperCase()} Q&amp;A</h2>
            </SectionReveal>
            <div className="space-y-0">
              {page.faqs.map((faq, i) => (
                <SectionReveal key={faq.q} delay={i * 0.03}>
                  <details className="group py-6 border-t border-[var(--border-subtle)] last:border-b">
                    <summary className="flex items-start gap-5 cursor-pointer list-none">
                      <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="heading-2 text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors" style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}>{faq.q}</h3>
                    </summary>
                    <p className="mt-4 ml-12 body-text text-[var(--text-muted)] max-w-[68ch]">{faq.a}</p>
                  </details>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-[var(--bg-charcoal)] border-t border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <h2 className="display-section text-[var(--foreground)] mb-6" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>MANUFACTURE {page.name.toUpperCase()}<br />SOFTGELS WITH&nbsp;ADMETUS</h2>
            <p className="body-text text-[var(--text-muted)] max-w-[58ch] mb-8">WHO-GMP certified, Halal-ready, and export-experienced. Share your requirement and our team responds with MOQ, pricing, and documentation within 48&nbsp;hours.</p>
            <Link href="/contact/" className="inline-flex items-center gap-3 px-7 py-3.5 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors" style={{ fontFamily: "var(--font-display)" }}>
              Enquire Now <ArrowRight size={14} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
