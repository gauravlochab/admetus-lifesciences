"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const services = [
  { title: "Third-Party Manufacturing", desc: "Full-scale softgel capsule manufacturing under your brand name. We handle production, quality control, and packaging." },
  { title: "Private Label Solutions", desc: "Launch your own branded softgel line with our complete private label service -- formulation, manufacturing, and packaging." },
  { title: "Custom Packaging", desc: "Flexible packaging options including blister packs, bottles, and custom carton designs to match your brand identity." },
  { title: "Bulk Supply", desc: "Large-volume bulk softgel capsule supply for distributors, wholesalers, and international buyers." },
  { title: "Formulation Support", desc: "Work with our team to develop custom softgel formulations tailored to your target market and product positioning." },
  { title: "Export Partnerships", desc: "Documentation support, international packaging standards, and export-oriented manufacturing for overseas partners." },
];

const advantages = [
  "MOQ-based flexible manufacturing",
  "Branded and unbranded options available",
  "Multiple packaging configurations",
  "Full batch documentation and COA",
  "Dedicated account management",
  "Facility audits welcome",
  "Quick turnaround on sample orders",
  "Competitive pricing for volume orders",
];

const faqs = [
  {
    q: "What is the minimum order quantity (MOQ) for contract manufacturing?",
    a: "MOQs are flexible and depend on the formulation, packaging format, and active ingredients. We support both small pilot runs for new brands and large-volume production for established distributors. Share your requirements at admetuslifesciences@gmail.com and we will respond with a specific MOQ within 48 hours.",
  },
  {
    q: "Which certifications does Admetus Lifesciences hold?",
    a: "Our Haryana manufacturing facility is FSSAI, GMP, HACCP, Halal, and WHO-GMP certified. Certificate copies and audit reports are available for partnership evaluation and export documentation.",
  },
  {
    q: "Do you offer custom formulation development?",
    a: "Yes. We work with brand owners to develop custom softgel formulations from scratch — composition design, bioavailability optimization, stability testing, and regulatory compliance. Our team supports both standard nutraceutical formulations and complex multi-ingredient blends.",
  },
  {
    q: "What softgel formulations can you manufacture?",
    a: "We currently produce 10+ standard formulations including Vitamin D3 (Cholecalciferol 60,000 IU — see our dedicated Vitamin D3 contract manufacturing page), Omega-3 + Vitamin E, Calcitriol + Calcium + K2-7, Glutathione + ALA, Lycopene + Grape Seed, Ginseng + Astaxanthin, Krill Oil, Isoflavones for women's health, Ginkgo + Tribulus for men's health, and Nigella Sativa (Kalonji). Beyond these, we develop custom formulations on request.",
  },
  {
    q: "What packaging options are available?",
    a: "We offer blister packs (multiple configurations including 10x1x10, 4x1x4, and 20x1x10), HDPE bottles in various sizes, and custom carton designs aligned to your brand identity. Packaging includes barcode integration, batch coding, and tamper-evident sealing.",
  },
  {
    q: "Do you support exports?",
    a: "Yes. We are export-ready with complete documentation support for international shipments — Certificate of Analysis (COA), Free Sale Certificate, ingredient declarations, and country-specific regulatory paperwork. Our facility welcomes audits from international buyers and certification bodies.",
  },
  {
    q: "How long does production take from order to dispatch?",
    a: "Standard formulations typically ship within 30–45 days from order confirmation, including raw material sourcing, encapsulation, drying, quality testing, and packaging. Custom formulations may take longer depending on stability testing requirements. Specific timelines are confirmed in your quote.",
  },
  {
    q: "Where is your manufacturing facility located?",
    a: "Our facility is at Village Anta, Tehsil Safidon, District Jind, Haryana 126112, India. Haryana sits within India's pharmaceutical manufacturing cluster — see our Haryana facility page for full geographic and logistics context. We welcome scheduled visits and audits — contact us to arrange a facility tour.",
  },
];

export default function ContractManufacturingPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pt-24 pb-12 overflow-hidden">
        <img
          src="/images/facility/softgels-production-line.jpg"
          alt="Softgel encapsulation production line at Admetus Lifesciences — contract manufacturing and private label facility"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0 opacity-60" style={{ background: "linear-gradient(to top, var(--hero-grad-start), var(--hero-grad-mid) 50%, var(--hero-grad-end))" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)]">Contract Manufacturing</span>
          <h1 className="mt-8 display-section text-[var(--hero-text)]">
            YOUR BRAND.<br />OUR&nbsp;MANUFACTURING.
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            From custom formulation to <Link href="/private-label-softgel-manufacturer-india/" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">private label packaging</Link>{" "}
            -- Admetus Lifesciences is your end-to-end softgel capsule
            manufacturing&nbsp;partner.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)] mb-8 block">SERVICES</span>
            <h2 className="display-section text-[var(--foreground)] mb-10">
              WHAT WE&nbsp;OFFER
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {services.map((service, i) => (
              <SectionReveal key={service.title} delay={i * 0.04}>
                <div className="py-6 border-t border-[var(--border-subtle)] flex items-start gap-5">
                  <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{service.title}</h3>
                    <p className="mt-1.5 body-text text-[var(--text-muted)] max-w-[58ch]">{service.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works + Advantages */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">Partnership Advantage</span>
                <h2 className="mt-8 display-section text-[var(--foreground)] mb-8" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                  WHY MANUFACTURE WITH&nbsp;US
                </h2>
                <ul className="space-y-3">
                  {advantages.map((adv) => (
                    <li key={adv} className="flex items-start gap-4 body-text text-[var(--text-cream)]">
                      <span className="w-5 h-px bg-[var(--gold)] mt-3 shrink-0" />
                      {adv}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="p-8 bg-[var(--bg-warm-dark)] border border-[var(--border-subtle)]">
                <span className="label-text text-[var(--gold)] block mb-4">THE PROCESS</span>
                <h3 className="heading-2 text-[var(--foreground)] mb-6">
                  How It Works
                </h3>
                <ol className="space-y-4">
                  {[
                    "Share your product requirements and specifications",
                    "We provide a custom quote with MOQ and timeline",
                    "Approve samples and packaging design",
                    "Full-scale production and quality testing",
                    "Dispatch with complete documentation",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-4 body-text text-[var(--text-cream)] !text-[0.9375rem]">
                      <span className="shrink-0 mono-text text-[0.6875rem] font-bold text-[var(--gold)] mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)] mb-6 block">Frequently Asked</span>
            <h2 className="mt-4 display-section text-[var(--foreground)] mb-12">
              QUESTIONS &amp; ANSWERS
            </h2>
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
      <section className="py-20 bg-[var(--bg-charcoal)] border-t border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <h2 className="display-section text-[var(--foreground)] mb-8" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              START YOUR MANUFACTURING PARTNERSHIP
            </h2>
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Share your requirements and our team will respond with a detailed
              proposal within 48&nbsp;hours.
            </p>
            <Link
              href="/contact/"
              className="mt-8 inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get a Custom Quote
              <ArrowRight size={14} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
