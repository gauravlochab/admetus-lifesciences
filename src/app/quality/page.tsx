"use client";

import Link from "next/link";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const certifications = [
  { name: "FSSAI", fullName: "Food Safety and Standards Authority of India", desc: "Compliance with India's food safety and quality regulations for manufacturing and distribution of food products.", color: "#22c55e" },
  { name: "GMP", fullName: "Good Manufacturing Practice", desc: "Adherence to internationally recognized manufacturing standards ensuring product quality, consistency, and safety.", color: "#0097a7" },
  { name: "HACCP", fullName: "Hazard Analysis and Critical Control Points", desc: "Systematic approach to food safety that identifies, evaluates, and controls hazards throughout production.", color: "#f97316" },
  { name: "Halal", fullName: "Halal Certification", desc: "Products manufactured in compliance with Islamic dietary requirements, expanding market accessibility globally.", color: "#a855f7" },
  { name: "WHO-GMP", fullName: "World Health Organization GMP", desc: "Meeting WHO standards for pharmaceutical manufacturing, recognized by regulatory bodies worldwide.", color: "#3b82f6" },
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
        <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&h=1080&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/30" />
        <div className="relative mx-auto max-w-[1400px] w-full px-[clamp(1.5rem,4vw,4rem)]">
          <span className="label-text text-[var(--gold)]">Quality & Certifications</span>
          <h1
            className="mt-4 text-[#FAFAFA] uppercase"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(3.5rem, 7vw, 7rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
            }}
          >
            UNCOMPROMISING
            <br />
            <span className="text-[var(--gold)]">QUALITY STANDARDS</span>
          </h1>
          <p className="mt-6 text-[1.25rem] text-[#E8E0D0] max-w-2xl leading-[1.7]">
            Every softgel capsule manufactured at Admetus Lifesciences undergoes
            rigorous quality control — from raw material testing to final dispatch.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-[clamp(4rem,8vw,8rem)]">
        <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,4rem)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <SectionReveal key={cert.name} delay={i * 0.1}>
                <div className="p-6 bg-[var(--bg-charcoal)] border border-white/[0.06] h-full hover:border-[var(--gold)]/20 transition-all duration-500">
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${cert.color}15`, border: `1px solid ${cert.color}30` }}
                  >
                    <Shield size={24} style={{ color: cert.color }} />
                  </div>
                  <h3
                    className="text-[var(--foreground)] text-2xl"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {cert.name}
                  </h3>
                  <p className="mt-1 text-[0.875rem] text-[var(--gold)]">{cert.fullName}</p>
                  <p className="mt-4 text-[0.875rem] text-[var(--text-muted)] leading-relaxed">{cert.desc}</p>
                </div>
              </SectionReveal>
            ))}

            <SectionReveal delay={0.5}>
              <div className="p-6 border border-dashed border-white/10 h-full flex flex-col items-center justify-center text-center bg-[var(--bg-charcoal)]/50">
                <Shield size={32} className="text-white/20 mb-3" />
                <p className="text-[0.875rem] text-[var(--text-muted)]">
                  Additional certifications and documentation available on request
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* QC Process */}
      <section className="py-[clamp(4rem,8vw,8rem)] bg-[var(--bg-charcoal)] border-y border-white/[0.06]">
        <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,4rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">Quality Control</span>
                <h2
                  className="mt-4 text-[var(--foreground)] uppercase"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    lineHeight: 1.1,
                  }}
                >
                  MULTI-POINT <span className="text-[var(--gold)]">QUALITY CHECKS</span>
                </h2>
                <p className="mt-4 text-[1rem] text-[var(--text-cream)] leading-[1.7]">
                  Our in-house quality control laboratory is equipped for
                  comprehensive testing at every stage of production — from
                  incoming raw materials to finished product release.
                </p>
                <ul className="mt-8 space-y-3">
                  {qcPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[1rem] text-[var(--text-cream)]">
                      <CheckCircle size={16} className="text-[var(--gold)] mt-0.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="p-12 bg-[var(--bg-warm-dark)] border border-white/[0.06] text-center">
                <div
                  className="gradient-text mb-4"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(4rem, 8vw, 6rem)",
                    lineHeight: 1,
                  }}
                >
                  100%
                </div>
                <p className="text-xl font-semibold text-[var(--foreground)]">Batch Testing</p>
                <p className="mt-3 text-[0.875rem] text-[var(--text-muted)]">
                  Every single batch is tested and documented before release — no exceptions.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[clamp(4rem,8vw,8rem)] text-center">
        <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,4rem)]">
          <SectionReveal>
            <h2
              className="text-[var(--foreground)] uppercase"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: 1.1,
              }}
            >
              REQUEST <span className="text-[var(--gold)]">QUALITY DOCUMENTATION</span>
            </h2>
            <p className="mt-4 text-[1rem] text-[var(--text-muted)] max-w-xl mx-auto">
              Certificate copies, audit reports, and compliance documentation
              are available for qualified business enquiries.
            </p>
            <Link
              href="/contact/"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-[0.05em] uppercase text-[#0A0A0A] bg-[var(--gold)] hover:bg-[#E2CC7A] transition-colors"
            >
              Request Documentation
              <ArrowRight size={16} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
