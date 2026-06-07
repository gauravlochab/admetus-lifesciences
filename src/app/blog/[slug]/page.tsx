import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import type { Metadata } from "next";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Admetus Lifesciences`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `https://www.admetuslifesciences.com/blog/${slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.admetuslifesciences.com/blog/${slug}/`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: `https://www.admetuslifesciences.com${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

/* ---------- FAQ data per slug ---------- */
const faqMap: Record<string, { q: string; a: string }[]> = {
  "top-10-nutraceutical-exporters-india": [
    {
      q: "Which country is the largest importer of nutraceuticals from India?",
      a: "The United States is the largest single-country importer, followed by GCC countries (Saudi Arabia, UAE, Qatar, Kuwait), Nigeria, Kenya, and the Philippines. African and Southeast Asian markets are growing fastest in terms of year-over-year import volume.",
    },
    {
      q: "What certifications do I need from an Indian nutraceutical exporter?",
      a: "At minimum, ensure your supplier holds an FSSAI Central License, GMP, and WHO-GMP. For Muslim-majority markets, Halal certification is essential. Depending on your country's regulatory framework, you may also need the manufacturer to provide a Free Sale Certificate, Certificate of Pharmaceutical Product (CPP), or specific lab test reports.",
    },
    {
      q: "How long does it take to import nutraceuticals from India?",
      a: "From order confirmation to dispatch, the typical manufacturing lead time is 30-45 days. Shipping adds 15-35 days depending on the destination (East Africa: 15-20 days, Middle East: 10-15 days, Southeast Asia: 12-18 days). Total door-to-door timeline is typically 45-75 days, plus customs clearance time in your country.",
    },
    {
      q: "Can I get private-label nutraceuticals from Indian manufacturers?",
      a: "Yes. Most leading Indian nutraceutical exporters — including Admetus Lifesciences — offer private-label services where they manufacture ready-made formulations and package them under your brand name. This is the fastest and most cost-effective way to launch a nutraceutical brand without investing in your own manufacturing infrastructure.",
    },
  ],
  "top-10-halal-softgel-manufacturers-india": [
    {
      q: "Is Halal certification mandatory for softgel capsules?",
      a: "It depends on the destination market. In GCC countries, Indonesia, Malaysia, and Brunei, Halal certification is either legally required or strongly preferred by regulatory authorities. In Muslim-majority countries across Africa and Central Asia, Halal certification is a commercial necessity. In non-Muslim-majority countries, Halal certification is optional but can expand your addressable market.",
    },
    {
      q: "What is the difference between Halal and Halal-friendly?",
      a: "\"Halal-friendly\" is a marketing term with no standardised definition — it typically means the manufacturer avoids porcine ingredients but has not undergone third-party Halal certification. Genuine Halal certification requires auditing by a recognised certification body covering raw material sourcing, manufacturing processes, cross-contamination controls, and ongoing surveillance. Always insist on formal certification, not self-declaration.",
    },
    {
      q: "Can vegetarian softgels be considered Halal?",
      a: "Vegetarian softgels (using plant-based shells like HPMC or modified starch) avoid the gelatin-source issue entirely. However, they still need to be manufactured in a facility with Halal-certified processes — other ingredients (glycerin, oils, excipients) must also be Halal-compliant. Vegetarian softgels with Halal certification offer the broadest market coverage.",
    },
    {
      q: "How do I verify an Indian manufacturer's Halal certification?",
      a: "Request a copy of the Halal certificate, note the issuing body's name and certificate number, and verify directly with the certification body (most have online verification portals). Check the certificate's validity dates and scope — ensure it covers the specific product categories and formulations you plan to order.",
    },
  ],
  "how-to-import-softgel-capsules-from-india": [
    {
      q: "What is the minimum order quantity to import softgels from India?",
      a: "MOQ varies by manufacturer. Large facilities may require 50,000-100,000 capsules per SKU. Flexible manufacturers like Admetus Lifesciences offer lower MOQs to accommodate first-time buyers and pilot orders. Clarify MOQ per SKU, not per total order, when comparing manufacturers.",
    },
    {
      q: "How long does the entire import process take from first contact to delivery?",
      a: "A typical timeline: manufacturer evaluation and sample request (2-4 weeks), sample evaluation (1-2 weeks), order negotiation and confirmation (1-2 weeks), production (4-6 weeks), shipping (1-4 weeks depending on destination), customs clearance (1-2 weeks). Total: approximately 10-18 weeks from first contact to goods in your warehouse.",
    },
    {
      q: "Do I need a specific licence to import softgel capsules?",
      a: "In most countries, yes. You typically need an import licence or registration with your national drug regulatory authority or food safety authority. The specific requirements vary by country and by whether the products are classified as pharmaceuticals, nutraceuticals, or food supplements. Check with your local regulatory body before placing an order.",
    },
    {
      q: "What payment methods are accepted by Indian softgel manufacturers?",
      a: "Telegraphic Transfer (TT/wire transfer) is most common — typically 30-50% advance, balance before shipment. Letters of Credit (LC) are used for larger orders. PayPal and trade finance platforms are occasionally accepted for smaller transactions. Open-account terms (net 30/60) are rarely offered for first orders but may be negotiated after an established trading relationship.",
    },
  ],
  "top-10-softgel-capsule-manufacturers-india": [
    {
      q: "Which is the best softgel capsule manufacturer in India?",
      a: "The best manufacturer depends on your specific requirements — product type, order volume, target market, and certification needs. For WHO-GMP and Halal certified contract manufacturing with flexible MOQs and export capability to Africa, the Middle East, and Southeast Asia, Admetus Lifesciences is a strong choice. For large-volume pharmaceutical generics, companies like Sun Pharma and Cipla are industry leaders.",
    },
    {
      q: "What certifications should a softgel manufacturer in India have?",
      a: "At minimum: FSSAI Central License (not state), GMP, and HACCP. For international markets, WHO-GMP is increasingly required. Halal certification is essential for Middle Eastern, North African, and Southeast Asian markets. ISO 9001 and ISO 22000 are additional quality indicators. Always verify that certificates are current and not expired.",
    },
    {
      q: "How much does softgel contract manufacturing cost in India?",
      a: "Costs vary based on formulation complexity, fill volume, raw material sourcing, order quantity, and packaging format. India offers competitive pricing compared to European and North American manufacturers due to lower labour and operational costs. Request detailed quotes from 2-3 manufacturers and compare on a per-unit basis, including packaging and documentation costs for export orders.",
    },
    {
      q: "Can I get samples before placing a bulk order?",
      a: "Most reputable manufacturers offer evaluation samples for qualified business enquiries. At Admetus Lifesciences, sample requests are available for brand owners, distributors, and importers. Samples allow you to evaluate capsule quality, fill consistency, shell integrity, and dissolution performance before committing to a production order.",
    },
  ],
  "what-are-softgel-capsules": [
    {
      q: "What are softgel capsules made of?",
      a: "Softgel capsules consist of a one-piece gelatin shell made from pharmaceutical-grade gelatin, glycerin (plasticiser), and purified water. The shell surrounds a liquid or semi-solid fill containing the active ingredient dissolved or suspended in an oil base.",
    },
    {
      q: "Are softgel capsules better than tablets?",
      a: "For fat-soluble compounds like Vitamin D3, Omega-3, and CoQ10, softgels offer superior bioavailability because the active ingredient is already in solution. They are also easier to swallow and mask unpleasant tastes. However, tablets remain suitable for water-soluble actives where cost is the priority.",
    },
    {
      q: "Are softgel capsules vegetarian?",
      a: "Traditional softgels use bovine or porcine gelatin. However, plant-based alternatives using modified starch, carrageenan, or HPMC (hydroxypropyl methylcellulose) are available for vegetarian and vegan markets. Consult your manufacturer about vegetarian shell options.",
    },
  ],
  "softgel-vs-tablet-vs-capsule": [
    {
      q: "Which dosage form has the best absorption?",
      a: "For fat-soluble compounds, softgels provide the best absorption because the active ingredient is pre-dissolved in oil, bypassing the dissolution step. Studies show up to 2-3x higher plasma concentrations for lipophilic compounds in softgel form compared to tablets.",
    },
    {
      q: "Why are softgels more expensive than tablets?",
      a: "Softgel manufacturing requires specialised rotary die encapsulation equipment, controlled drying tunnels, and a more complex production process. The per-unit cost is higher, but the improved bioavailability and patient compliance often justify the premium for nutraceutical brands.",
    },
    {
      q: "Can any ingredient be put into a softgel?",
      a: "Softgels are best suited for oil-soluble or lipophilic active ingredients. Water-soluble compounds can be encapsulated using suspension technology, but the primary advantage of softgels — pre-dissolved active in oil — applies to fat-soluble compounds. Water-soluble actives may be better served by tablets or hard capsules.",
    },
  ],
  "how-softgel-capsules-are-made": [
    {
      q: "How long does softgel manufacturing take from start to finish?",
      a: "The typical production cycle from raw material receipt to finished-goods dispatch is 30-45 days. This includes quality testing of incoming materials (2-3 days), gelatin preparation and encapsulation (1-2 days), drying (24-72 hours), quality testing of finished product (3-5 days), and packaging.",
    },
    {
      q: "What equipment is used for softgel encapsulation?",
      a: "At Admetus Lifesciences, encapsulation is performed on the ARBES SGX-806P rotary die machine, a precision German-engineered encapsulation line. Blister packaging uses the Elmach EPI 2000 automatic blister packing machine. Additional equipment includes gelatin melting vessels, tumble dryers, and drying tunnels.",
    },
    {
      q: "What quality tests are performed on finished softgels?",
      a: "Finished softgels undergo weight variation testing, disintegration time, dissolution profile analysis, assay of active ingredient (potency), moisture content, and microbial limit testing. Visual inspection identifies cosmetic defects. Only batches meeting all release specifications are approved for dispatch.",
    },
  ],
  "choose-softgel-manufacturer-india": [
    {
      q: "What certifications should a softgel manufacturer in India have?",
      a: "At minimum: FSSAI Central License (not state), GMP, and HACCP. For exports, WHO-GMP is increasingly required. For Middle Eastern and Southeast Asian markets, Halal certification is essential. Ask to see current certificates with validity dates — expired certifications are a serious red flag.",
    },
    {
      q: "What is the typical MOQ for softgel contract manufacturing in India?",
      a: "MOQs vary widely — from 10,000 capsules at flexible manufacturers to 100,000+ at large facilities. The ideal manufacturer supports both pilot runs for new brands and volume production for established distributors. Always clarify MOQ per SKU, not just per order.",
    },
    {
      q: "How do I verify a manufacturer's claims before placing an order?",
      a: "Request a facility visit or virtual audit, ask for recent batch COAs (Certificates of Analysis), verify their FSSAI license number on the FSSAI website, check equipment specifications, and ask for references from existing clients. A trustworthy manufacturer welcomes due diligence.",
    },
  ],
  "vitamin-d3-deficiency-india": [
    {
      q: "How common is Vitamin D deficiency in India?",
      a: "Studies indicate that 70-90% of the Indian population has insufficient Vitamin D levels (serum 25-hydroxyvitamin D below 30 ng/mL). Deficiency cuts across age groups, geographies, and socioeconomic levels, making it one of India's most widespread nutritional problems.",
    },
    {
      q: "Why is Cholecalciferol 60,000 IU prescribed as a weekly dose?",
      a: "High-dose weekly supplementation (60,000 IU once per week for 8-12 weeks) rapidly restores serum Vitamin D levels to the sufficient range. This loading-dose protocol is more effective than daily low-dose supplementation for correcting established deficiency, and weekly dosing improves patient compliance.",
    },
    {
      q: "Why are softgels preferred for Vitamin D3 supplementation?",
      a: "Vitamin D3 (Cholecalciferol) is a fat-soluble compound. Softgels contain D3 dissolved in an oil base, which ensures optimal absorption in the gastrointestinal tract. Studies show significantly higher bioavailability from oil-based softgel formulations compared to powder-based tablets of the same dose.",
    },
  ],
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const faqs = faqMap[post.slug] ?? [];

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://www.admetuslifesciences.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "Admetus Lifesciences",
      url: "https://www.admetuslifesciences.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.admetuslifesciences.com/images/logo-horizontal.png",
      },
    },
    image: `https://www.admetuslifesciences.com${post.image}`,
    url: `https://www.admetuslifesciences.com/blog/${post.slug}/`,
    mainEntityOfPage: `https://www.admetuslifesciences.com/blog/${post.slug}/`,
    keywords: post.keywords.join(", "),
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
        name: "Blog",
        item: "https://www.admetuslifesciences.com/blog/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.admetuslifesciences.com/blog/${post.slug}/`,
      },
    ],
  };

  const faqJsonLd =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end pt-24 pb-10 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
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
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 py-2 label-text text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors duration-200 mb-4"
          >
            <ArrowLeft size={13} />
            All Articles
          </Link>
          <span className="block label-text mb-2 text-[var(--teal)]">
            {post.category}
          </span>
          <h1 className="display-section text-[var(--hero-text)]">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-4">
            <time
              dateTime={post.date}
              className="mono-text text-[0.75rem] text-[var(--text-muted)]"
            >
              {new Date(post.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="w-px h-4 bg-[var(--border-subtle)]" />
            <span className="mono-text text-[0.75rem] text-[var(--text-muted)]">
              {post.author}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="max-w-[72ch] mx-auto">
            <div
              className="prose-admetus"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="py-16 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
          <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
            <span className="label-text text-[var(--gold)]">
              Frequently Asked
            </span>
            <h2
              className="mt-3 display-section text-[var(--foreground)] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
            >
              QUESTIONS
            </h2>
            <div className="gold-rule w-16 mb-10" />

            <div className="space-y-0 max-w-[72ch]">
              {faqs.map((faq, i) => (
                <details
                  key={faq.q}
                  className="group py-6 border-t border-[var(--border-subtle)] last:border-b"
                >
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
      )}

      {/* Related Posts */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <h2 className="label-text text-[var(--text-muted)] mb-6">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}/`}
                className="group p-5 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/15 transition-all duration-200 hover:-translate-y-px"
              >
                <span className="mono-text text-[0.5rem] text-[var(--text-muted)] opacity-50 block mb-1.5">
                  {p.category}
                </span>
                <p
                  className="text-[0.875rem] font-semibold text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors duration-200 mb-2"
                  style={{ fontFamily: "var(--font-display)", lineHeight: 1.3 }}
                >
                  {p.title}
                </p>
                <time
                  dateTime={p.date}
                  className="mono-text text-[0.625rem] text-[var(--text-muted)]"
                >
                  {new Date(p.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </Link>
            ))}
          </div>

          {/* Back to blog */}
          <div className="mt-10 pt-8 border-t border-[var(--border-subtle)]">
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 label-text text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors duration-200"
            >
              <ArrowLeft size={13} />
              Back to All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--bg-charcoal)] border-t border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)] text-center">
          <h2
            className="display-section text-[var(--foreground)]"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
          >
            NEED A MANUFACTURING PARTNER?
          </h2>
          <div className="gold-rule w-12 mx-auto mt-4 mb-4" />
          <p className="body-text text-[var(--text-muted)] max-w-[50ch] mx-auto mb-8">
            Contract manufacturing, private label, and export-ready softgel
            production. Quotation within 48&nbsp;hours.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Request a Quote <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
