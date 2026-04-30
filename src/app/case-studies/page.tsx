import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Illustrative case studies of Admetus Lifesciences contract manufacturing partnerships — Vitamin D3 stability challenges, Halal+Kosher dual-certification GCC exports, and brand launch processes.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/case-studies/",
  },
};

const cases = [
  {
    slug: "vitamin-d3-stability-challenge",
    category: "Formulation",
    title: "Vitamin D3 60K IU Stability Challenge — A 6-Week Resolution",
    summary:
      "How an illustrative brand owner resolved a 3-month shelf-life concern on a high-dose Cholecalciferol softgel through blister format change, packaging upgrade, and accelerated stability re-testing.",
    metrics: [
      { label: "Stability extended", value: "+12 mo" },
      { label: "Time to resolution", value: "6 wks" },
      { label: "MOQ", value: "Pilot scale" },
    ],
  },
  {
    slug: "halal-kosher-gcc-export",
    category: "Export",
    title: "Halal + Kosher Dual Certification for GCC Launch — 12-Week Timeline",
    summary:
      "An illustrative scenario showing how a dual-certified Omega-3 softgel SKU was prepared for GCC import, including documentation, certifying body coordination, and country-specific labeling.",
    metrics: [
      { label: "Markets opened", value: "GCC + IL" },
      { label: "Time to launch", value: "12 wks" },
      { label: "Certifications", value: "Halal + Kosher" },
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end pt-24 pb-12 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1745420052527-a75fcc6aba58?w=1920&h=1080&fit=crop"
          alt="Admetus Lifesciences manufacturing case studies"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--hero-overlay-bottom), var(--hero-overlay-mid) 50%, var(--hero-overlay-top))" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)]">Manufacturing  ·  Partnership Stories</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            CASE&nbsp;STUDIES
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Illustrative scenarios showing how brand owners and distributors
            partner with Admetus Lifesciences to solve real-world softgel
            manufacturing&nbsp;challenges.
          </p>
        </div>
      </section>

      {/* Disclaimer banner */}
      <section className="py-6 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <p className="body-text text-[var(--text-muted)] !text-[0.8125rem] max-w-[80ch]">
            <span className="text-[var(--gold)] mono-text uppercase tracking-[0.1em] !text-[0.6875rem] mr-2">Note</span>
            The case studies below are illustrative scenarios reflecting Admetus
            Lifesciences&apos; actual capabilities, processes, and certifications
            applied to representative buyer challenges. Specific client names
            and proprietary formulation details are not disclosed. For real
            client references, please contact us directly.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="space-y-0">
            {cases.map((c, i) => (
              <SectionReveal key={c.slug} delay={i * 0.05}>
                <Link
                  href={`/case-studies/${c.slug}/`}
                  className="group block py-10 border-t border-[var(--border-subtle)] last:border-b hover:bg-[var(--bg-charcoal)]/30 transition-colors duration-200 -mx-4 px-4"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 lg:gap-12">
                    <div>
                      <span className="mono-text text-[0.6875rem] text-[var(--gold)] uppercase tracking-[0.12em] block mb-2">
                        {String(i + 1).padStart(2, "0")}  ·  {c.category}
                      </span>
                      <h2 className="heading-2 text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors duration-200" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)" }}>
                        {c.title}
                      </h2>
                    </div>
                    <div>
                      <p className="body-text text-[var(--text-muted)] mb-6 max-w-[68ch]">
                        {c.summary}
                      </p>
                      <div className="grid grid-cols-3 gap-4 mb-6 max-w-md">
                        {c.metrics.map((m) => (
                          <div key={m.label}>
                            <div className="text-xl font-bold text-[var(--gold)]" style={{ fontFamily: "var(--font-display)" }}>
                              {m.value}
                            </div>
                            <div className="mt-1 text-[0.6875rem] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-2 label-text text-[var(--gold)] group-hover:text-[var(--gold-light)]">
                        Read full case study  <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
