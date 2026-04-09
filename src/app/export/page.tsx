"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const exportCapabilities = [
  { title: "Export-Ready Packaging", desc: "Products packaged to international standards with proper labeling, batch coding, and tamper-evident sealing." },
  { title: "Documentation Support", desc: "Complete export documentation including COA, batch records, and regulatory paperwork -- shared on request." },
  { title: "Logistics Coordination", desc: "Support for shipping arrangements, packaging for transit, and coordination with freight forwarders." },
  { title: "Competitive Pricing", desc: "MOQ-based pricing with volume discounts. Transparent quotations with no hidden costs." },
  { title: "Lead Time Commitment", desc: "Clear production timelines with proactive updates. We deliver within the committed schedule." },
  { title: "Multi-Market Awareness", desc: "Understanding of regulatory requirements across markets to support your compliance needs." },
];

export default function ExportPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=1080&fit=crop"
          alt="Export-ready softgel capsule packaging for international pharmaceutical markets"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.92), rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.25))" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)]">International Markets</span>
          <h1 className="mt-4 display-section text-[var(--text-white)]">
            FROM INDIA<br />TO THE WORLD
          </h1>
          <div className="gold-rule w-16 mt-6 mb-6" />
          <p className="body-large text-[var(--text-cream)] max-w-2xl">
            Admetus Lifesciences is positioned to serve international buyers,
            importers, and distributors seeking a reliable and quality-focused
            softgel capsule manufacturing partner in India.
          </p>
        </div>
      </section>

      {/* Capabilities -- numbered list, not icon cards */}
      <section className="py-[var(--space-32)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)] mb-4 block">CAPABILITIES</span>
            <h2 className="display-section text-[var(--foreground)] mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              EXPORT CAPABILITIES
            </h2>
            <div className="gold-rule w-16 mb-16" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-0">
            {exportCapabilities.map((cap, i) => (
              <SectionReveal key={cap.title} delay={i * 0.06}>
                <div className="py-8 border-t border-[var(--border-subtle)] flex items-start gap-6">
                  <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{cap.title}</h3>
                    <p className="mt-2 body-text text-[var(--text-muted)] max-w-md">{cap.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* For International Buyers */}
      <section className="py-[var(--space-32)] bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">For International Buyers</span>
                <h2 className="mt-4 display-section text-[var(--foreground)] mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                  WHAT WE OFFER EXPORT PARTNERS
                </h2>
                <div className="gold-rule w-12 mb-8" />
                <p className="body-text text-[var(--text-cream)] mb-10">
                  As an export-oriented manufacturer, we understand the
                  requirements of international buyers. Our team provides
                  dedicated support for export enquiries.
                </p>
                <ul className="space-y-4">
                  {[
                    "Dedicated export enquiry handling",
                    "Custom quotation based on requirements",
                    "Sample dispatch for evaluation",
                    "Flexible MOQ for initial orders",
                    "Complete batch documentation",
                    "Quality certificates provided with each shipment",
                  ].map((item, i) => (
                    <li key={item} className="flex items-start gap-4 body-text text-[var(--text-cream)]">
                      <span className="w-5 h-px bg-[var(--gold)] mt-3 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="p-10 bg-[var(--bg-warm-dark)] border border-[var(--border-subtle)]">
                <span className="label-text text-[var(--gold)] block mb-6">GLOBAL REACH</span>
                <h3 className="heading-2 text-[var(--foreground)] mb-4">
                  Ready for Global Markets
                </h3>
                <div className="gold-rule w-8 mb-4" />
                <p className="body-text text-[var(--text-muted)] mb-8">
                  Export documentation, international packaging, and regulatory
                  support -- shared on request.
                </p>
                <Link
                  href="/contact/"
                  className="block w-full px-6 py-3 text-[0.6875rem] font-bold text-center tracking-[0.12em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Enquire for Export
                </Link>
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
              START AN EXPORT ENQUIRY
            </h2>
            <div className="gold-rule w-12 mt-6 mb-6" />
            <p className="body-text text-[var(--text-muted)] max-w-xl">
              For bulk and export enquiries, share your requirements and our
              team will respond with a detailed proposal.
            </p>
            <Link
              href="/contact/"
              className="mt-10 inline-flex items-center gap-3 px-10 py-4 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Enquire for Export
              <ArrowRight size={14} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
