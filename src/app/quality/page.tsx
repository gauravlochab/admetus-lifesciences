"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const certifications = [
  { name: "FSSAI", fullName: "Food Safety and Standards Authority of India", desc: "Compliance with India's food safety and quality regulations for manufacturing and distribution of food products." },
  { name: "GMP", fullName: "Good Manufacturing Practice", desc: "Adherence to internationally recognized manufacturing standards ensuring product quality, consistency, and safety." },
  { name: "HACCP", fullName: "Hazard Analysis and Critical Control Points", desc: "Systematic approach to food safety that identifies, evaluates, and controls hazards throughout production." },
  { name: "Halal", fullName: "Halal Certification", desc: "Products manufactured in compliance with Islamic dietary requirements, expanding market accessibility globally." },
  { name: "WHO-GMP", fullName: "World Health Organization GMP", desc: "Meeting WHO standards for pharmaceutical manufacturing, recognized by regulatory bodies worldwide." },
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

export default function QualityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&h=1080&fit=crop"
          alt="Quality control laboratory at Admetus Lifesciences testing pharmaceutical softgel capsules"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.92), rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.25))" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)]">Quality & Certifications</span>
          <h1 className="mt-4 display-section text-[var(--text-white)]">
            UNCOMPROMISING<br />QUALITY STANDARDS
          </h1>
          <div className="gold-rule w-16 mt-6 mb-6" />
          <p className="body-large text-[var(--text-cream)] max-w-2xl">
            Every softgel capsule manufactured at Admetus Lifesciences undergoes
            rigorous quality control -- from raw material testing to final dispatch.
          </p>
        </div>
      </section>

      {/* Certifications -- editorial list, not icon cards */}
      <section className="py-[var(--space-32)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="space-y-0">
            {certifications.map((cert, i) => (
              <SectionReveal key={cert.name} delay={i * 0.06}>
                <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-6 py-10 border-t border-[var(--border-subtle)]">
                  <div>
                    <span
                      className="text-[var(--foreground)] text-2xl font-bold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {cert.name}
                    </span>
                  </div>
                  <div>
                    <p className="body-text text-[var(--gold)] !text-[0.9375rem] mb-2">{cert.fullName}</p>
                    <p className="body-text text-[var(--text-muted)] max-w-lg">{cert.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.3}>
            <div className="py-8 border-t border-dashed border-[var(--border-subtle)]">
              <p className="body-text text-[var(--text-muted)]">
                Additional certifications and documentation available on request.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* QC Process */}
      <section className="py-[var(--space-32)] bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">Quality Control</span>
                <h2 className="mt-4 display-section text-[var(--foreground)] mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                  MULTI-POINT QUALITY CHECKS
                </h2>
                <div className="gold-rule w-12 mb-8" />
                <p className="body-text text-[var(--text-cream)]">
                  Our in-house quality control laboratory is equipped for
                  comprehensive testing at every stage of production -- from
                  incoming raw materials to finished product release.
                </p>
                <ul className="mt-10 space-y-4">
                  {qcPoints.map((point, i) => (
                    <li key={point} className="flex items-start gap-4 body-text text-[var(--text-cream)]">
                      <span className="mono-text text-[0.625rem] text-[var(--text-muted)] opacity-40 mt-1.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="p-14 bg-[var(--bg-warm-dark)] border border-[var(--border-subtle)]">
                <div
                  className="text-[var(--gold)]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(4.5rem, 9vw, 7rem)",
                    lineHeight: 0.9,
                    fontWeight: 900,
                  }}
                >
                  100%
                </div>
                <p className="mt-4 heading-2 text-[var(--foreground)]">Batch Testing</p>
                <div className="gold-rule w-8 mt-4 mb-4" />
                <p className="body-text text-[var(--text-muted)]">
                  Every single batch is tested and documented before release -- no exceptions.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[var(--space-32)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <h2 className="display-section text-[var(--foreground)]">
              REQUEST QUALITY DOCUMENTATION
            </h2>
            <div className="gold-rule w-12 mt-6 mb-6" />
            <p className="body-text text-[var(--text-muted)] max-w-xl">
              Certificate copies, audit reports, and compliance documentation
              are available for qualified business enquiries.
            </p>
            <Link
              href="/contact/"
              className="mt-10 inline-flex items-center gap-3 px-8 py-4 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors"
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
