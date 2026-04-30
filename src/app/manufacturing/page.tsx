"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const processSteps = [
  { title: "Raw Material Sourcing", desc: "All raw materials are sourced from certified suppliers and undergo rigorous quality testing before entering the production line." },
  { title: "Formulation", desc: "Precision batch formulation following documented SOPs to ensure consistency and potency in every batch." },
  { title: "Encapsulation", desc: "State-of-the-art ARBES SGX-806P Soft Gelatin Encapsulation Line delivers uniform capsules with precise fill weights." },
  { title: "Drying", desc: "Controlled-environment drying section ensures optimal moisture content and capsule integrity." },
  { title: "Quality Inspection", desc: "Every batch undergoes multi-point quality control checks including visual, weight, and dissolution testing." },
  { title: "Blister Packing", desc: "Elmach EPI 2000 blister packing machine ensures tamper-evident, professional-grade primary packaging." },
  { title: "Final Packing & Dispatch", desc: "Secondary packaging, labeling, and dispatch with full batch documentation and traceability." },
];

const equipment = [
  { name: "ARBES SGX-806P", type: "Soft Gelatin Encapsulation Line", desc: "Industry-leading encapsulation machine delivering precision softgel production with consistent fill accuracy." },
  { name: "Elmach EPI 2000", type: "Blister Packing Machine", desc: "High-speed blister packing for professional, tamper-evident primary packaging of softgel capsules." },
  { name: "Quality Control Lab", type: "Testing & Analysis", desc: "In-house QC laboratory equipped for raw material testing, in-process checks, and finished product analysis." },
];

const faqs = [
  {
    q: "Where is the Admetus Lifesciences manufacturing facility located?",
    a: "Our facility is at Village Anta, Tehsil Safidon, District Jind, Haryana 126112, India. Haryana is one of India's leading pharmaceutical and nutraceutical manufacturing clusters, with strong logistics connectivity to Delhi NCR, Mumbai port (JNPT), and Mundra port for export shipments.",
  },
  {
    q: "What equipment do you use for softgel encapsulation?",
    a: "Our primary encapsulation line is the ARBES SGX-806P soft gelatin encapsulation machine — an industry-recognized system delivering precision softgel production with consistent fill accuracy across batch sizes. For blister packing we run the Elmach EPI 2000, a high-speed blister packing machine for tamper-evident primary packaging.",
  },
  {
    q: "What is your softgel manufacturing process from raw material to dispatch?",
    a: "Our 7-stage process: (1) raw material sourcing from certified suppliers with incoming QC, (2) precision batch formulation per documented SOPs, (3) encapsulation on the ARBES SGX-806P line, (4) controlled-environment drying, (5) multi-point quality inspection (visual, weight, dissolution), (6) blister packing on Elmach EPI 2000, (7) secondary packaging, labeling, and dispatch with full batch documentation.",
  },
  {
    q: "What is your monthly production capacity?",
    a: "Production capacity scales with formulation complexity and packaging format. We support both small pilot runs for new brands and large-volume orders for established distributors. Specific capacity for your formulation is confirmed during quotation.",
  },
  {
    q: "Can I visit and audit the facility before placing an order?",
    a: "Yes — facility audits are welcomed for prospective partners and certification bodies. Visits are typically arranged within 1–2 weeks of an audit request. Contact us at admetuslifesciences@gmail.com to schedule. We can also provide GMP, WHO-GMP, and HACCP audit reports remotely if a visit isn't feasible.",
  },
  {
    q: "Is the facility GMP certified?",
    a: "Yes. Our facility holds FSSAI, GMP, HACCP, Halal, and WHO-GMP certifications. Certificate copies are available on request. Quality protocols are maintained at every production stage with documented SOPs and 100% batch testing coverage.",
  },
  {
    q: "Who works at the facility?",
    a: "Our workforce is 90%+ women from the surrounding villages of Haryana — trained on-site in encapsulation, quality control, packing, and dispatch. We see rural employment and quality manufacturing as complementary goals, not separate ones.",
  },
];

export default function ManufacturingPage() {
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
          src="https://images.unsplash.com/photo-1745420052527-a75fcc6aba58?w=1920&h=1080&fit=crop"
          alt="State-of-the-art nutraceutical manufacturing equipment at Admetus Lifesciences"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--hero-overlay-bottom), var(--hero-overlay-mid) 50%, var(--hero-overlay-top))" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)]">Contract Manufacturing & Private Label</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            AVAILABLE FOR<br />READY BRANDS
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Available for ready brands, contract manufacturing, and private
            label production. Our <Link href="/softgel-capsule-manufacturer-haryana/" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">Haryana facility</Link> delivers
            turnkey softgel capsule manufacturing &mdash; from formulation to dispatch &mdash;
            with full quality documentation and batch&nbsp;traceability.
          </p>
        </div>
      </section>

      {/* Facility Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-[var(--border-subtle)]">
            {[
              { title: "Manufacturing Facility", desc: "Village Anta, Tehsil Safidon, Distt. Jind, Haryana - 126112" },
              { title: "Advanced Equipment", desc: "ARBES SGX-806P encapsulation and Elmach EPI 2000 blister packing" },
              { title: "Quality Controlled", desc: "In-house QC lab for raw material, in-process, and finished product testing" },
            ].map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.06}>
                <div className="py-8 pr-8 border-b lg:border-b-0 lg:border-r last:border-r-0 border-[var(--border-subtle)]">
                  <span className="mono-text text-[0.5rem] text-[var(--text-muted)] opacity-50 block mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{item.title}</h3>
                  <p className="mt-2 body-text text-[var(--text-muted)] max-w-[58ch]">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Production Process</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4">
              FROM RAW MATERIAL TO&nbsp;DISPATCH
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="space-y-0">
            {processSteps.map((step, i) => (
              <SectionReveal key={step.title} delay={i * 0.04}>
                <div className="flex items-start gap-6 py-6 border-t border-[var(--border-subtle)] group hover:bg-[var(--bg-warm-dark)]/30 transition-colors duration-200 px-4 -mx-4">
                  <span className="mono-text text-[0.75rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{step.title}</h3>
                    <p className="mt-1.5 body-text text-[var(--text-muted)] max-w-[58ch]">{step.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Infrastructure</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4">
              KEY EQUIPMENT
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          {/* Equipment imagery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <SectionReveal delay={0.05}>
              <div className="aspect-[4/3] overflow-hidden border border-[var(--border-subtle)] img-warm-overlay relative">
                <img
                  src="https://images.unsplash.com/photo-1745420052704-f70b1d30c8b7?w=1000&h=750&fit=crop"
                  width={1000}
                  height={750}
                  alt="ARBES SGX-806P softgel encapsulation line at Admetus Lifesciences"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </SectionReveal>
            <SectionReveal delay={0.12}>
              <div className="aspect-[4/3] overflow-hidden border border-[var(--border-subtle)] img-warm-overlay relative">
                <img
                  src="https://images.unsplash.com/photo-1745420052527-a75fcc6aba58?w=1000&h=750&fit=crop"
                  width={1000}
                  height={750}
                  alt="Elmach EPI 2000 blister packaging machine at Admetus Lifesciences"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </SectionReveal>
          </div>

          <div className="space-y-0">
            {equipment.map((eq, i) => (
              <SectionReveal key={eq.name} delay={i * 0.06}>
                <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-4 py-8 border-t border-[var(--border-subtle)]">
                  <div>
                    <span className="label-text text-[var(--gold)]">{eq.type}</span>
                  </div>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]">{eq.name}</h3>
                    <p className="mt-2 body-text text-[var(--text-muted)] max-w-[58ch]">{eq.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Frequently Asked</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4">
              MANUFACTURING Q&amp;A
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
      <section className="py-20 bg-[var(--bg-charcoal)] border-t border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <h2 className="display-section text-[var(--foreground)]">
              VISIT OUR&nbsp;FACILITY
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              We welcome facility audits and visits from potential partners.
              Schedule a visit or request detailed facility&nbsp;documentation.
            </p>
            <Link
              href="/contact/"
              className="mt-8 inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Schedule a Visit
              <ArrowRight size={14} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
