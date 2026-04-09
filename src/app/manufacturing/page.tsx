"use client";

import Link from "next/link";
import {
  ArrowRight,
  Beaker,
  FlaskConical,
  Pill,
  Wind,
  Eye,
  Box,
  Send,
  Factory,
  Settings,
  Gauge,
} from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const processSteps = [
  { icon: Beaker, title: "Raw Material Sourcing", desc: "All raw materials are sourced from certified suppliers and undergo rigorous quality testing before entering the production line." },
  { icon: FlaskConical, title: "Formulation", desc: "Precision batch formulation following documented SOPs to ensure consistency and potency in every batch." },
  { icon: Pill, title: "Encapsulation", desc: "State-of-the-art ARBES SGX-806P Soft Gelatin Encapsulation Line delivers uniform capsules with precise fill weights." },
  { icon: Wind, title: "Drying", desc: "Controlled-environment drying section ensures optimal moisture content and capsule integrity." },
  { icon: Eye, title: "Quality Inspection", desc: "Every batch undergoes multi-point quality control checks including visual, weight, and dissolution testing." },
  { icon: Box, title: "Blister Packing", desc: "Elmach EPI 2000 blister packing machine ensures tamper-evident, professional-grade primary packaging." },
  { icon: Send, title: "Final Packing & Dispatch", desc: "Secondary packaging, labeling, and dispatch with full batch documentation and traceability." },
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
      <section className="relative min-h-[60vh] flex items-end pb-16 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&h=1080&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/30" />
        <div className="relative mx-auto max-w-[1400px] w-full px-[clamp(1.5rem,4vw,4rem)]">
          <span className="label-text text-[var(--gold)]">Manufacturing & Infrastructure</span>
          <h1
            className="mt-4 text-[var(--text-white)] uppercase"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(3.5rem, 7vw, 7rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
            }}
          >
            STATE-OF-THE-ART
            <br />
            <span className="text-[var(--gold)]">PRODUCTION FACILITY</span>
          </h1>
          <p className="mt-6 text-[1.25rem] text-[var(--text-cream)] max-w-2xl leading-[1.7]">
            Our manufacturing unit in Haryana, India is equipped with modern
            encapsulation, drying, and packing technology — purpose-built for
            high-quality softgel capsule production.
          </p>
        </div>
      </section>

      {/* Facility Overview */}
      <section className="py-[clamp(3rem,6vw,6rem)]">
        <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,4rem)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Factory, title: "Manufacturing Facility", desc: "Village Anta, Tehsil Safidon, Distt. Jind, Haryana - 126112" },
              { icon: Settings, title: "Advanced Equipment", desc: "ARBES SGX-806P encapsulation and Elmach EPI 2000 blister packing" },
              { icon: Gauge, title: "Quality Controlled", desc: "In-house QC lab for raw material, in-process, and finished product testing" },
            ].map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.1}>
                <div className="p-6 bg-[var(--bg-charcoal)] border border-white/[0.06] h-full">
                  <item.icon size={28} className="text-[var(--gold)] mb-4" />
                  <h3 className="text-[1rem] font-semibold text-[var(--text-white)]">{item.title}</h3>
                  <p className="mt-2 text-[0.875rem] text-[var(--text-muted)]">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-[clamp(4rem,8vw,8rem)] bg-[var(--bg-charcoal)] border-y border-white/[0.06]">
        <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,4rem)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Production Process</span>
            <h2
              className="mt-4 text-[var(--text-white)] uppercase mb-12"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: 1.1,
              }}
            >
              FROM RAW MATERIAL TO <span className="text-[var(--gold)]">DISPATCH</span>
            </h2>
          </SectionReveal>

          <div className="space-y-4">
            {processSteps.map((step, i) => (
              <SectionReveal key={step.title} delay={i * 0.08}>
                <div className="flex items-start gap-6 p-6 bg-[var(--bg-warm-dark)] border border-white/[0.06] group hover:border-[var(--gold)]/20 transition-all">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-[var(--gold)]/10 border border-[var(--gold)]/20">
                    <step.icon size={20} className="text-[var(--gold)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[0.75rem] font-mono font-bold text-[var(--gold)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px flex-1 bg-white/[0.06]" />
                    </div>
                    <h3 className="text-[1rem] font-semibold text-[var(--text-white)]">{step.title}</h3>
                    <p className="mt-1 text-[0.875rem] text-[var(--text-muted)]">{step.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-[clamp(4rem,8vw,8rem)]">
        <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,4rem)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Infrastructure</span>
            <h2
              className="mt-4 text-[var(--text-white)] uppercase mb-12"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: 1.1,
              }}
            >
              KEY <span className="text-[var(--gold)]">EQUIPMENT</span>
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {equipment.map((eq, i) => (
              <SectionReveal key={eq.name} delay={i * 0.1}>
                <div className="p-6 bg-[var(--bg-charcoal)] border border-white/[0.06] h-full">
                  <span className="label-text text-[var(--gold)]">{eq.type}</span>
                  <h3
                    className="mt-2 text-[var(--text-white)] text-xl"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {eq.name}
                  </h3>
                  <p className="mt-3 text-[0.875rem] text-[var(--text-muted)]">{eq.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[clamp(4rem,8vw,8rem)] bg-[var(--bg-charcoal)] border-t border-white/[0.06] text-center">
        <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,4rem)]">
          <SectionReveal>
            <h2
              className="text-[var(--text-white)] uppercase"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: 1.1,
              }}
            >
              VISIT OUR <span className="text-[var(--gold)]">FACILITY</span>
            </h2>
            <p className="mt-4 text-[1rem] text-[var(--text-muted)] max-w-xl mx-auto">
              We welcome facility audits and visits from potential partners.
              Schedule a visit or request detailed facility documentation.
            </p>
            <Link
              href="/contact/"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-[0.05em] uppercase text-[#0A0A0A] bg-[var(--gold)] hover:bg-[#E2CC7A] transition-colors"
            >
              Schedule a Visit
              <ArrowRight size={16} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
