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

export default function ManufacturingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pt-24 pb-12 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&h=1080&fit=crop"
          alt="State-of-the-art pharmaceutical manufacturing equipment at Admetus Lifesciences"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.92), rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.25))" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)]">Manufacturing & Infrastructure</span>
          <h1 className="mt-3 display-section text-[var(--text-white)]">
            STATE-OF-THE-ART<br />PRODUCTION FACILITY
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Our manufacturing unit in Haryana, India is equipped with modern
            encapsulation, drying, and packing technology -- purpose-built for
            high-quality softgel capsule&nbsp;production.
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
              className="mt-8 inline-flex items-center gap-3 px-7 py-3 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
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
