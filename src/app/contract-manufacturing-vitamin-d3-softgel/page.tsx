import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const faqs = [
  {
    q: "What Vitamin D3 softgel formulations does Admetus manufacture?",
    a: "We manufacture two primary Vitamin D3 softgel formulations: Cholecalciferol 60,000 IU (high-dose weekly therapy format, pack 4x1x4) and Calcitriol + Calcium + K2-7 (advanced bone health combination with Calcitriol, Calcium Carbonate, Vitamin K2-7, B12, Zinc, Magnesium, L-Methylfolate, pack 10x1x10). Custom Vitamin D3 dosages and combinations are developed on request.",
  },
  {
    q: "What is the typical MOQ for Vitamin D3 60K softgel contract manufacturing?",
    a: "MOQs are flexible based on packaging configuration and order specifics. We support pilot orders for new brands launching their first Vitamin D3 SKU as well as full-scale production for established distributors and pharmacy chains. Specific MOQ for your order is confirmed within 48 hours of inquiry.",
  },
  {
    q: "How is the bioavailability of Cholecalciferol 60K IU softgel ensured?",
    a: "Vitamin D3 is fat-soluble, which makes softgel encapsulation an ideal delivery format — the oil-based fill enables better absorption than tablet or capsule alternatives. Our ARBES SGX-806P encapsulation line maintains precision fill weight and capsule integrity. Stability testing validates the 60K IU dosage maintains potency over the labeled shelf life.",
  },
  {
    q: "What regulatory documentation is provided for Vitamin D3 softgel exports?",
    a: "Each Vitamin D3 softgel batch ships with: Certificate of Analysis (COA) confirming Cholecalciferol potency assay, Free Sale Certificate, manufacturing license copy, GMP and WHO-GMP certificates, Halal certification (for GCC export), and country-specific documentation as required. Vitamin D3 is regulated as a nutraceutical or dietary supplement in most jurisdictions; specific labeling requirements are verified during quotation.",
  },
  {
    q: "What is the shelf life of your Vitamin D3 softgel capsules?",
    a: "Our Vitamin D3 softgels typically carry a 24-month shelf life from manufacturing date when stored under recommended conditions (cool, dry place, away from direct sunlight). Stability data validating shelf life under accelerated and real-time conditions is available on request and forms part of the dossier provided to brand owners and regulators.",
  },
  {
    q: "Do you supply Calcitriol + Calcium + K2-7 for hospital pharmacy chains?",
    a: "Yes. Our Calcitriol + Calcium + K2-7 softgel is supplied to hospital pharmacy chains and retail networks across India, with documented batch traceability and full quality documentation. The Vitamin K2-7 component directs calcium into bones (not arteries), making this formulation specifically positioned for clinical bone health applications. See the full {' '}<a href='/products/calcitriol-calcium-k27-softgel/'>product specification page</a> for composition details.",
  },
  {
    q: "How long is the lead time from order to dispatch for Vitamin D3 softgel?",
    a: "Standard lead time for Cholecalciferol 60,000 IU and Calcitriol K2-7 softgel orders is 30–45 days from confirmed order, including raw material sourcing (Vitamin D3 active ingredient is sourced from certified suppliers), encapsulation, drying, multi-point quality testing, packaging, and documentation. Custom Vitamin D3 dosages may require additional time for stability validation.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.admetuslifesciences.com/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Vitamin D3 Softgel Contract Manufacturer",
      item: "https://www.admetuslifesciences.com/contract-manufacturing-vitamin-d3-softgel/",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Vitamin D3 Softgel Capsule Contract Manufacturing",
  provider: { "@id": "https://www.admetuslifesciences.com/#organization" },
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Place", name: "Worldwide (export)" },
  ],
  description:
    "Contract manufacturing of Vitamin D3 softgel capsules — Cholecalciferol 60,000 IU and Calcitriol + Calcium + K2-7 formulations. WHO-GMP certified Haryana facility, MOQ flexibility, full regulatory documentation.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Vitamin D3 Softgel Formulations",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Cholecalciferol 60,000 IU Softgel",
          url: "https://www.admetuslifesciences.com/products/cholecalciferol-60000-iu/",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Calcitriol + Calcium + K2-7 Softgel",
          url: "https://www.admetuslifesciences.com/products/calcitriol-calcium-k27-softgel/",
        },
      },
    ],
  },
};

export default function VitaminD3Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-end pt-24 pb-12 overflow-hidden">
        <img
          src="/images/facility/capsule-drying-line.jpg"
          alt="Softgel capsule drying line at Admetus Lifesciences — post-encapsulation drying for Vitamin D3 and nutraceutical formulations"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--hero-overlay-bottom), var(--hero-overlay-mid) 50%, var(--hero-overlay-top))" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 py-2 label-text text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors duration-200 mb-4"
          >
            <ArrowLeft size={13} />
            Home
          </Link>
          <span className="label-text text-[var(--gold)]">Cholecalciferol  ·  Calcitriol  ·  India</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            VITAMIN D3 SOFTGEL<br />CONTRACT&nbsp;MANUFACTURER
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Cholecalciferol 60,000 IU and Calcitriol + Calcium + K2-7 softgel
            manufacturing — WHO-GMP certified, full export documentation,
            flexible MOQs for brand&nbsp;owners.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <div className="max-w-[68ch] space-y-5">
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Vitamin D3 deficiency is among the most prevalent micronutrient
                gaps in India and globally. Admetus Lifesciences is a Vitamin D3 softgel
                contract manufacturer based in <Link href="/softgel-capsule-manufacturer-haryana/" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">Jind, Haryana</Link>, supplying
                two clinically-positioned Vitamin D3 formulations to brand owners,
                distributors, and hospital pharmacy networks across India and
                international markets.
              </p>
              <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                Vitamin D3 is fat-soluble, which makes softgel encapsulation
                particularly suitable — the oil-based fill enables superior
                absorption compared to tablet alternatives. Our ARBES SGX-806P
                encapsulation line ensures precision fill weight and capsule
                integrity batch after batch, with stability validation across the
                labeled 24-month shelf life.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Two formulations */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Available Formulations</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              TWO VITAMIN D3 SOFTGEL&nbsp;FORMATS
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SectionReveal delay={0.05}>
              <div className="p-8 bg-[var(--bg-warm-dark)] border border-[var(--border-subtle)]">
                <span className="label-text text-[var(--gold)] block mb-3">High-Dose Weekly</span>
                <h3 className="heading-2 text-[var(--foreground)] mb-3">
                  Cholecalciferol 60,000 IU
                </h3>
                <div className="gold-rule w-8 mb-4" />
                <p className="body-text text-[var(--text-muted)] mb-5">
                  Pure Vitamin D3 (Cholecalciferol) at 60,000 IU strength —
                  designed for weekly dosing in cases of established Vitamin D
                  deficiency. Convenient single-softgel format. Pack:
                  4x1x4 blister.
                </p>
                <Link
                  href="/products/cholecalciferol-60000-iu/"
                  className="inline-flex items-center gap-2 label-text text-[var(--gold)] hover:text-[var(--gold-light)]"
                >
                  Full specifications  <ArrowRight size={11} />
                </Link>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="p-8 bg-[var(--bg-warm-dark)] border border-[var(--border-subtle)]">
                <span className="label-text text-[var(--gold)] block mb-3">Combination Bone Health</span>
                <h3 className="heading-2 text-[var(--foreground)] mb-3">
                  Calcitriol + Calcium + K2-7
                </h3>
                <div className="gold-rule w-8 mb-4" />
                <p className="body-text text-[var(--text-muted)] mb-5">
                  Calcitriol + Calcium Carbonate + Vitamin K2-7 + B12 + Zinc +
                  Magnesium + L-Methylfolate. Vitamin K2-7 directs calcium into
                  bones, not arteries. Pack: 10x1x10 blister.
                </p>
                <Link
                  href="/products/calcitriol-calcium-k27-softgel/"
                  className="inline-flex items-center gap-2 label-text text-[var(--gold)] hover:text-[var(--gold-light)]"
                >
                  Full specifications  <ArrowRight size={11} />
                </Link>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Why softgel for D3 */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Why Softgel</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              WHY SOFTGEL IS THE BEST FORMAT FOR VITAMIN&nbsp;D3
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fat-soluble delivery",
                desc: "Vitamin D3 is fat-soluble. Softgel encapsulation surrounds the active in an oil base, mirroring how D3 absorbs naturally from food sources. Bioavailability is significantly improved over dry tablet formats.",
              },
              {
                title: "Precision dosing",
                desc: "Our ARBES SGX-806P encapsulation line delivers consistent fill weight per softgel — critical for high-dose 60,000 IU formulations where dosing accuracy directly affects clinical outcomes.",
              },
              {
                title: "Patient compliance",
                desc: "Single soft, easy-to-swallow softgel format — particularly valuable for elderly patients (a key Vitamin D deficiency demographic) and pediatric populations where tablet-swallowing is a barrier.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-[var(--border-subtle)] p-6 bg-[var(--bg-charcoal)]">
                <h3 className="heading-2 text-[var(--foreground)] mb-3" style={{ fontSize: "clamp(1.125rem, 2vw, 1.25rem)" }}>{item.title}</h3>
                <p className="body-text text-[var(--text-muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Frequently Asked</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4">
              VITAMIN D3 MANUFACTURING Q&amp;A
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <SectionReveal key={faq.q} delay={i * 0.03}>
                <details className="group py-6 border-t border-[var(--border-subtle)] last:border-b">
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
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <h2 className="display-section text-[var(--foreground)]">
              REQUEST VITAMIN D3 SOFTGEL&nbsp;QUOTE
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Share your target market, projected volumes, and packaging
              preferences. Detailed quotation within 48&nbsp;hours.
            </p>
            <Link
              href="/contact/"
              className="mt-8 inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Request a Quote
              <ArrowRight size={14} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
