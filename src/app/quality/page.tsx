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
      <section className="relative min-h-[50vh] flex items-end pt-24 pb-12 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&h=1080&fit=crop"
          alt="Quality control laboratory at Admetus Lifesciences testing pharmaceutical softgel capsules"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.92), rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.25))" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)]">Quality & Certifications</span>
          <h1 className="mt-3 display-section text-[var(--text-white)]">
            UNCOMPROMISING<br />QUALITY STANDARDS
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Every softgel capsule manufactured at Admetus Lifesciences undergoes
            rigorous quality control -- from raw material testing to final&nbsp;dispatch.
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
                <h2 className="mt-3 display-section text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)" }}>
                  MULTI-POINT QUALITY&nbsp;CHECKS
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p className="body-text text-[var(--text-cream)] max-w-[58ch]">
                  Our in-house quality control laboratory is equipped for
                  comprehensive testing at every stage of production -- from
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

            <SectionReveal delay={0.1}>
              <div className="p-10 bg-[var(--bg-warm-dark)] border border-[var(--border-subtle)]">
                <div
                  className="text-[var(--gold)]"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(4rem, 8vw, 6rem)",
                    lineHeight: 0.9,
                    fontWeight: 900,
                  }}
                >
                  100%
                </div>
                <p className="mt-3 heading-2 text-[var(--foreground)]">Batch Testing</p>
                <div className="gold-rule w-8 mt-3 mb-3" />
                <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
                  Every single batch is tested and documented before release -- no&nbsp;exceptions.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <h2 className="display-section text-[var(--foreground)]">
              REQUEST QUALITY DOCUMENTATION
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Certificate copies, audit reports, and compliance documentation
              are available for qualified business&nbsp;enquiries.
            </p>
            <Link
              href="/contact/"
              className="mt-8 inline-flex items-center gap-3 px-7 py-3 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
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
