"use client";

import Link from "next/link";
import { ArrowRight, FlaskConical, Palette, Package, Boxes, Handshake, Globe, CheckCircle } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const services = [
  { icon: FlaskConical, title: "Third-Party Manufacturing", desc: "Full-scale softgel capsule manufacturing under your brand name. We handle production, quality control, and packaging." },
  { icon: Palette, title: "Private Label Solutions", desc: "Launch your own branded softgel line with our complete private label service — formulation, manufacturing, and packaging." },
  { icon: Package, title: "Custom Packaging", desc: "Flexible packaging options including blister packs, bottles, and custom carton designs to match your brand identity." },
  { icon: Boxes, title: "Bulk Supply", desc: "Large-volume bulk softgel capsule supply for distributors, wholesalers, and international buyers." },
  { icon: Handshake, title: "Formulation Support", desc: "Work with our team to develop custom softgel formulations tailored to your target market and product positioning." },
  { icon: Globe, title: "Export Partnerships", desc: "Documentation support, international packaging standards, and export-oriented manufacturing for overseas partners." },
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

export default function ContractManufacturingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=1080&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/30" />
        <div className="relative mx-auto max-w-[1400px] w-full px-[clamp(1.5rem,4vw,4rem)]">
          <span className="label-text text-[var(--gold)]">Contract Manufacturing</span>
          <h1
            className="mt-4 text-[#FAFAFA] uppercase"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(3.5rem, 7vw, 7rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
            }}
          >
            YOUR BRAND.
            <br />
            <span className="text-[var(--gold)]">OUR MANUFACTURING.</span>
          </h1>
          <p className="mt-6 text-[1.25rem] text-[#E8E0D0] max-w-2xl leading-[1.7]">
            From custom formulation to private label packaging — Admetus
            Lifesciences is your end-to-end softgel capsule manufacturing
            partner. We work with brand owners, importers, and distributors
            worldwide.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-[clamp(4rem,8vw,8rem)]">
        <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,4rem)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <SectionReveal key={service.title} delay={i * 0.08}>
                <div className="p-6 bg-[var(--bg-charcoal)] border border-white/[0.06] h-full hover:border-[var(--gold)]/20 transition-all duration-500">
                  <div className="w-12 h-12 flex items-center justify-center bg-[var(--gold)]/10 border border-[var(--gold)]/20 mb-4">
                    <service.icon size={24} className="text-[var(--gold)]" />
                  </div>
                  <h3 className="text-[1rem] font-semibold text-[var(--foreground)]">{service.title}</h3>
                  <p className="mt-3 text-[0.875rem] text-[var(--text-muted)] leading-relaxed">{service.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works + Advantages */}
      <section className="py-[clamp(4rem,8vw,8rem)] bg-[var(--bg-charcoal)] border-y border-white/[0.06]">
        <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,4rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">Partnership Advantage</span>
                <h2
                  className="mt-4 text-[var(--foreground)] uppercase mb-8"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    lineHeight: 1.1,
                  }}
                >
                  WHY MANUFACTURE <span className="text-[var(--gold)]">WITH US</span>
                </h2>
                <ul className="space-y-3">
                  {advantages.map((adv) => (
                    <li key={adv} className="flex items-start gap-3 text-[1rem] text-[var(--text-cream)]">
                      <CheckCircle size={16} className="text-[var(--gold)] mt-0.5 shrink-0" />
                      {adv}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="p-8 bg-[var(--bg-warm-dark)] border border-white/[0.06]">
                <h3
                  className="text-[var(--foreground)] text-xl mb-6"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
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
                    <li key={step} className="flex items-start gap-3 text-[0.875rem] text-[var(--text-cream)]">
                      <span className="shrink-0 w-6 h-6 flex items-center justify-center text-[0.75rem] font-mono font-bold text-[var(--gold)] border border-[var(--gold)]/30">
                        {i + 1}
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
              START YOUR <span className="text-[var(--gold)]">MANUFACTURING PARTNERSHIP</span>
            </h2>
            <p className="mt-4 text-[1rem] text-[var(--text-muted)] max-w-xl mx-auto">
              Share your requirements and our team will respond with a detailed
              proposal within 48 hours.
            </p>
            <Link
              href="/contact/"
              className="mt-8 inline-flex items-center gap-2 px-10 py-4 text-sm font-semibold tracking-[0.05em] uppercase text-[#0A0A0A] bg-[var(--gold)] hover:bg-[#E2CC7A] transition-colors"
            >
              Get a Custom Quote
              <ArrowRight size={16} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
