import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import type { Metadata } from "next";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} Softgel Manufacturer & Private Label India`,
    description: `${product.name} (${product.tagline}) softgel capsule contract manufacturer & private label supplier in India. WHO-GMP certified facility, MOQ flexibility, full export documentation. ${product.composition}.`,
    alternates: {
      canonical: `https://www.admetuslifesciences.com/products/${slug}/`,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const otherProducts = products.filter((p) => p.slug !== product.slug);

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: `${product.name} — ${product.tagline}. ${product.composition}.`,
    category: product.category,
    url: `https://www.admetuslifesciences.com/products/${product.slug}/`,
    brand: {
      "@type": "Brand",
      name: "Admetus Lifesciences",
    },
    manufacturer: {
      "@id": "https://www.admetuslifesciences.com/#organization",
      "@type": "Organization",
      name: "Admetus Lifesciences",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jind",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Pack Size", value: product.packSize },
      { "@type": "PropertyValue", name: "Dosage Form", value: product.dosageForm },
      {
        "@type": "PropertyValue",
        name: "Composition",
        value: product.composition,
      },
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Brand owners, distributors, importers — contract manufacturing and private label",
    },
  };

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
        name: "Products",
        item: "https://www.admetuslifesciences.com/products/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://www.admetuslifesciences.com/products/${product.slug}/`,
      },
    ],
  };

  const productFaqs = [
    {
      q: `Can ${product.name} be private-label manufactured under our brand?`,
      a: `Yes. Admetus Lifesciences manufactures ${product.name} (${product.tagline}) on a contract manufacturing and private label basis for brand owners, distributors, and importers. We supply under your brand name with custom packaging and full batch documentation.`,
    },
    {
      q: `What is the minimum order quantity (MOQ) for ${product.shortName}?`,
      a: `MOQs are flexible based on packaging format and order configuration. We support both pilot orders for new brands and large-volume orders for established distributors. The current standard pack size is ${product.packSize}. Specific MOQ for your order is confirmed within 48 hours of inquiry.`,
    },
    {
      q: `What is the composition of ${product.name}?`,
      a: `${product.composition}. Active ingredients: ${product.ingredients.join(", ")}.`,
    },
    {
      q: `Is the formulation customizable?`,
      a: `Yes. While the standard formulation listed here covers most buyer requirements, we develop custom variants — different dosages, ingredient combinations, or removed ingredients — based on your target market regulatory requirements. Custom formulations require additional time for stability validation.`,
    },
    {
      q: `What packaging options are available for ${product.shortName}?`,
      a: `Standard packaging is ${product.packSize} blister format. We also offer HDPE bottles in various sizes and custom carton designs. Packaging includes barcode integration, batch coding, and tamper-evident sealing per international standards.`,
    },
    {
      q: `What documentation is provided with ${product.name}?`,
      a: `Each batch ships with a Certificate of Analysis (COA), batch records, and full ingredient declaration. For export shipments we additionally provide Free Sale Certificate, manufacturing license copy, GMP certificate, and country-specific documentation (Halal, kosher, etc.) on request.`,
    },
    {
      q: `What certifications back the manufacturing of ${product.shortName}?`,
      a: `${product.name} is manufactured at our FSSAI, GMP, HACCP, Halal, and WHO-GMP certified facility in Haryana, India, on the ARBES SGX-806P soft gelatin encapsulation line. Every batch undergoes multi-point quality control including dissolution testing, microbial limits, and finished product inspection before release.`,
    },
    {
      q: `What is the typical lead time from order to dispatch?`,
      a: `Standard lead time for ${product.name} is 30–45 days from confirmed order, including raw material sourcing, encapsulation, drying, quality testing, and packaging. Custom variants may require additional time for stability validation. Specific lead time is committed in your proforma invoice.`,
    },
  ];

  const productFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: productFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productFaqJsonLd) }}
      />
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end pt-24 pb-10 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1670850757263-6efc07d410f8?w=1920&h=1080&fit=crop"
          alt={`${product.name} softgel capsules by Admetus Lifesciences`}
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--hero-overlay-bottom), var(--hero-overlay-mid) 50%, var(--hero-overlay-top))" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <Link
            href="/products/"
            className="inline-flex items-center gap-2 py-2 label-text text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors duration-200 mb-4"
          >
            <ArrowLeft size={13} />
            All Products
          </Link>
          <span className="block label-text mb-2 text-[var(--teal)]">
            {product.category}
          </span>
          <h1 className="display-section text-[var(--hero-text)]">
            {product.name}
          </h1>
          <p className="mt-3 body-large text-[var(--gold)]">{product.tagline}</p>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
            {/* Left: Product visual */}
            <div
              className="aspect-square border border-[var(--border-subtle)] flex items-center justify-center relative overflow-hidden"
              style={{ background: `linear-gradient(160deg, ${product.color}06, var(--bg-charcoal))` }}
            >
              <div className="text-center">
                <div
                  className="opacity-[0.05]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(4rem, 8vw, 6.5rem)",
                    fontWeight: 900,
                    lineHeight: 0.85,
                    color: product.color,
                  }}
                >
                  {product.shortName}
                </div>
                <p className="mt-3 label-text text-[var(--text-muted)]">{product.name}</p>
              </div>
            </div>

            {/* Right: Info */}
            <div>
              <div className="flex items-center gap-6 mb-8">
                <div>
                  <span className="label-text text-[var(--text-muted)] block mb-0.5">Pack Size</span>
                  <span className="mono-text text-[0.8125rem] text-[var(--foreground)]">{product.packSize}</span>
                </div>
                <div className="w-px h-8 bg-[var(--border-subtle)]" />
                <div>
                  <span className="label-text text-[var(--text-muted)] block mb-0.5">Dosage Form</span>
                  <span className="mono-text text-[0.8125rem] text-[var(--foreground)]">{product.dosageForm}</span>
                </div>
              </div>

              {/* Composition */}
              <div className="mb-8">
                <h2 className="label-text text-[var(--text-muted)] mb-3">Composition</h2>
                <p className="body-text text-[var(--text-cream)] p-5 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)] max-w-[58ch]">
                  {product.composition}
                </p>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h2 className="label-text text-[var(--text-muted)] mb-3">Key Benefits</h2>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, i) => (
                    <li key={benefit} className="flex items-start gap-3 body-text text-[var(--text-cream)]">
                      <span className="mono-text text-[0.5rem] text-[var(--text-muted)] opacity-50 mt-1.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.12em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Request Quote for {product.shortName}
                  <ArrowRight size={13} />
                </Link>
                <Link
                  href="/contract-manufacturing/"
                  className="inline-flex items-center gap-2 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.12em] uppercase text-[var(--gold)] border border-[var(--gold)]/30 hover:bg-[var(--gold)]/[0.06] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Private Label Options
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="py-16 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <h2 className="label-text text-[var(--text-muted)] mb-6">Ingredients</h2>
          <div className="flex flex-wrap gap-2">
            {product.ingredients.map((ing) => (
              <span
                key={ing}
                className="px-4 py-2 body-text text-[var(--text-cream)] border border-[var(--border-subtle)] bg-[var(--bg-warm-dark)] !text-[0.8125rem]"
              >
                {ing}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Specs */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <h2 className="label-text text-[var(--text-muted)] mb-8">Manufacturing Specifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[var(--border-subtle)] border border-[var(--border-subtle)]">
            <div className="p-5 bg-[var(--bg-charcoal)]">
              <span className="mono-text text-[0.6875rem] text-[var(--text-muted)] uppercase tracking-[0.1em] block mb-2">
                Standard Pack
              </span>
              <p className="body-text text-[var(--foreground)] !text-[0.875rem]">{product.packSize}</p>
            </div>
            <div className="p-5 bg-[var(--bg-charcoal)]">
              <span className="mono-text text-[0.6875rem] text-[var(--text-muted)] uppercase tracking-[0.1em] block mb-2">
                Dosage Form
              </span>
              <p className="body-text text-[var(--foreground)] !text-[0.875rem]">{product.dosageForm}</p>
            </div>
            <div className="p-5 bg-[var(--bg-charcoal)]">
              <span className="mono-text text-[0.6875rem] text-[var(--text-muted)] uppercase tracking-[0.1em] block mb-2">
                Encapsulation Line
              </span>
              <p className="body-text text-[var(--foreground)] !text-[0.875rem]">ARBES SGX-806P</p>
            </div>
            <div className="p-5 bg-[var(--bg-charcoal)]">
              <span className="mono-text text-[0.6875rem] text-[var(--text-muted)] uppercase tracking-[0.1em] block mb-2">
                Blister Packing
              </span>
              <p className="body-text text-[var(--foreground)] !text-[0.875rem]">Elmach EPI 2000</p>
            </div>
            <div className="p-5 bg-[var(--bg-charcoal)]">
              <span className="mono-text text-[0.6875rem] text-[var(--text-muted)] uppercase tracking-[0.1em] block mb-2">
                Lead Time
              </span>
              <p className="body-text text-[var(--foreground)] !text-[0.875rem]">30–45 days</p>
            </div>
            <div className="p-5 bg-[var(--bg-charcoal)]">
              <span className="mono-text text-[0.6875rem] text-[var(--text-muted)] uppercase tracking-[0.1em] block mb-2">
                MOQ
              </span>
              <p className="body-text text-[var(--foreground)] !text-[0.875rem]">Flexible · per quote</p>
            </div>
            <div className="p-5 bg-[var(--bg-charcoal)]">
              <span className="mono-text text-[0.6875rem] text-[var(--text-muted)] uppercase tracking-[0.1em] block mb-2">
                Documentation
              </span>
              <p className="body-text text-[var(--foreground)] !text-[0.875rem]">COA, batch records</p>
            </div>
            <div className="p-5 bg-[var(--bg-charcoal)]">
              <span className="mono-text text-[0.6875rem] text-[var(--text-muted)] uppercase tracking-[0.1em] block mb-2">
                Certifications
              </span>
              <p className="body-text text-[var(--foreground)] !text-[0.875rem]">FSSAI, GMP, HACCP, Halal, WHO-GMP</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)]">Frequently Asked</span>
          <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
            ABOUT {product.shortName}
          </h2>
          <div className="gold-rule w-16 mb-10" />

          <div className="space-y-0">
            {productFaqs.map((faq, i) => (
              <details key={faq.q} className="group py-6 border-t border-[var(--border-subtle)] last:border-b">
                <summary className="flex items-start gap-5 cursor-pointer list-none">
                  <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="heading-2 text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors duration-200"
                    style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
                  >
                    {faq.q}
                  </h3>
                </summary>
                <p className="mt-4 ml-12 body-text text-[var(--text-muted)] max-w-[68ch]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <h2 className="label-text text-[var(--text-muted)] mb-6">Other Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {otherProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}/`}
                className="group p-4 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/15 transition-all duration-200 hover:-translate-y-px"
              >
                <span className="mono-text text-[0.5rem] text-[var(--text-muted)] opacity-50 block mb-1.5">
                  {p.category}
                </span>
                <p className="text-[0.8125rem] font-semibold text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors duration-200" style={{ fontFamily: "var(--font-display)" }}>
                  {p.shortName}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
