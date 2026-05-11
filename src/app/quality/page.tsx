"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const certifications = [
  { name: "FSSAI", fullName: "Food Safety and Standards Authority of India", desc: "Compliance with India's food safety and quality regulations for manufacturing and distribution of food products." },
  { name: "GMP", fullName: "Good Manufacturing Practice", desc: "Adherence to internationally recognized manufacturing standards ensuring product quality, consistency, and safety." },
  { name: "HACCP", fullName: "Hazard Analysis and Critical Control Points", desc: "Systematic approach to food safety that identifies, evaluates, and controls hazards throughout production." },
  { name: "Halal", fullName: "Halal Certification", desc: "Products manufactured in compliance with Islamic dietary requirements, expanding market accessibility globally." },
  { name: "WHO-GMP", fullName: "World Health Organization GMP", desc: "Meeting WHO standards for nutraceutical manufacturing, recognized by regulatory bodies worldwide." },
];

const qcPoints = [
  "Raw material identity and purity testing",
  "In-process weight and fill volume checks",
  "Dissolution and disintegration testing",
  "Microbial limit testing",
  "Stability testing under controlled conditions",
  "Finished product visual inspection",
  "Batch documentation and traceability",
  "Packaging integrity verification",
];

const faqs = [
  {
    q: "What testing does each batch undergo?",
    a: "Every batch is subjected to a multi-point quality control protocol: raw material identity and purity testing, in-process weight and fill volume checks, dissolution and disintegration testing, microbial limit testing, finished product visual inspection, packaging integrity verification, and full batch documentation. No batch leaves our facility without passing all checks.",
  },
  {
    q: "Will I receive a Certificate of Analysis (COA) with my order?",
    a: "Yes. A Certificate of Analysis is provided with every batch, documenting test results for active ingredients, microbial limits, dissolution profile, and physical specifications. Additional regulatory paperwork (Free Sale Certificate, ingredient declarations, etc.) is available on request for export shipments.",
  },
  {
    q: "Can I audit your manufacturing facility?",
    a: "Yes — we welcome scheduled facility audits from prospective partners, distributors, and certification bodies. Visits are typically arranged within 1–2 weeks of an audit request. Contact us at admetuslifesciences@gmail.com to schedule.",
  },
  {
    q: "What certifications does Admetus Lifesciences hold?",
    a: "Our facility is FSSAI, GMP, HACCP, Halal, and WHO-GMP certified. Certificate copies and audit reports are available for qualified business inquiries to support partner due diligence and export documentation.",
  },
  {
    q: "How long are products stable, and is stability testing performed?",
    a: "Stability testing is performed under controlled temperature and humidity conditions to validate shelf life claims. Specific shelf life depends on the formulation and packaging — typical shelf life for our softgel capsules ranges from 24 to 36 months. Stability data is available for each formulation on request.",
  },
  {
    q: "Do you provide third-party lab testing or only in-house QC?",
    a: "Our in-house QC laboratory handles routine batch testing. For specialized assays, regulatory submissions, or validation studies, we coordinate with NABL-accredited third-party laboratories. Results from third-party testing are shared with the relevant batch documentation.",
  },
];

export default function QualityPage() {
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
          src="/images/facility/medicine-mixer.jpg"
          alt="Medicine mixing equipment at Admetus Lifesciences — precision quality control at every stage of softgel manufacturing"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0 opacity-45 dark:opacity-80" style={{ background: "linear-gradient(to top, var(--hero-overlay-bottom), var(--hero-overlay-mid) 50%, var(--hero-overlay-top))" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)]">Quality & Certifications</span>
          <h1 className="mt-8 mb-8 md:mb-10 display-section text-[var(--hero-text)]">
            UNCOMPROMISING<br />QUALITY STANDARDS
          </h1>
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Every softgel capsule manufactured at our{" "}
            <Link href="/softgel-capsule-manufacturer-haryana/" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">WHO-GMP certified Haryana facility</Link>{" "}
            undergoes rigorous quality control -- from raw material testing to
            final&nbsp;dispatch.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="space-y-0">
            {certifications.map((cert, i) => (
              <SectionReveal key={cert.name} delay={i * 0.04}>
                <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-4 py-8 border-t border-[var(--border-subtle)]">
                  <div>
                    <span
                      className="text-[var(--foreground)] text-xl font-bold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {cert.name}
                    </span>
                  </div>
                  <div>
                    <p className="body-text text-[var(--gold)] !text-[0.9375rem] mb-1.5">{cert.fullName}</p>
                    <p className="body-text text-[var(--text-muted)] max-w-[58ch]">{cert.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.2}>
            <div className="py-6 border-t border-dashed border-[var(--border-subtle)]">
              <p className="body-text text-[var(--text-muted)]">
                Additional certifications and documentation available on&nbsp;request.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* QC Process */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">Quality Control</span>
                <h2 className="mt-8 display-section text-[var(--foreground)] mb-10" style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)" }}>
                  MULTI-POINT QUALITY&nbsp;CHECKS
                </h2>
                <p className="body-text text-[var(--text-cream)] max-w-[58ch]">
                  Our in-house quality control laboratory is equipped for
                  comprehensive testing at every stage of production - from
                  incoming raw materials to finished product&nbsp;release.
                </p>
                <ul className="mt-8 space-y-3">
                  {qcPoints.map((point, i) => (
                    <li key={point} className="flex items-start gap-3 body-text text-[var(--text-cream)]">
                      <span className="mono-text text-[0.5rem] text-[var(--text-muted)] opacity-50 mt-1.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2} className="h-full flex items-end justify-center">
              <div className="flex flex-col justify-end items-center text-center w-full p-10 bg-[var(--bg-warm-dark)] border border-[var(--border-subtle)] rounded-[1.0rem]">
                <div
                  className="text-[var(--gold)]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(4rem, 8vw, 6rem)",
                    lineHeight: 0.8,
                    fontWeight: 300,
                  }}
                >
                  100%
                </div>
                <p className="mt-3 heading-2 text-[var(--foreground)]">Batch Testing</p>
                <p className="mt-4 body-text text-[var(--text-muted)] max-w-[58ch]">
                  Every single batch is tested and documented before release - no&nbsp;exceptions.
                </p>
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
              QUALITY &amp; CERTIFICATIONS Q&amp;A
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
              REQUEST QUALITY DOCUMENTATION
            </h2>
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Certificate copies, audit reports, and compliance documentation
              are available for qualified business&nbsp;enquiries.
            </p>
            <Link
              href="/contact/"
              className="mt-8 inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Request Documentation
              <ArrowRight size={14} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
