"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const services = [
  { title: "Third-Party Manufacturing", desc: "Full-scale softgel capsule manufacturing under your brand name. We handle production, quality control, and packaging." },
  { title: "Private Label Solutions", desc: "Launch your own branded softgel line with our complete private label service -- formulation, manufacturing, and packaging." },
  { title: "Custom Packaging", desc: "Flexible packaging options including blister packs, bottles, and custom carton designs to match your brand identity." },
  { title: "Bulk Supply", desc: "Large-volume bulk softgel capsule supply for distributors, wholesalers, and international buyers." },
  { title: "Formulation Support", desc: "Work with our team to develop custom softgel formulations tailored to your target market and product positioning." },
  { title: "Export Partnerships", desc: "Documentation support, international packaging standards, and export-oriented manufacturing for overseas partners." },
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
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=1080&fit=crop"
          alt="Contract manufacturing and private label softgel capsule production at Admetus Lifesciences"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.92), rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.25))" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)]">Contract Manufacturing</span>
          <h1 className="mt-4 display-section text-[var(--text-white)]">
            YOUR BRAND.<br />OUR MANUFACTURING.
          </h1>
          <div className="gold-rule w-16 mt-6 mb-6" />
          <p className="body-large text-[var(--text-cream)] max-w-2xl">
            From custom formulation to private label packaging -- Admetus
            Lifesciences is your end-to-end softgel capsule manufacturing
            partner.
          </p>
        </div>
      </section>

      {/* Services -- numbered editorial list, not icon card grid */}
      <section className="py-[var(--space-32)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)] mb-4 block">SERVICES</span>
            <h2 className="display-section text-[var(--foreground)] mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              WHAT WE OFFER
            </h2>
            <div className="gold-rule w-16 mb-16" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-0">
            {services.map((service, i) => (
              <SectionReveal key={service.title} delay={i * 0.06}>
                <div className="py-8 border-t border-[var(--border-subtle)] flex items-start gap-6">
                  <span className="mono-text text-[0.6875rem] font-bold text-[var(--gold)] shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{service.title}</h3>
                    <p className="mt-2 body-text text-[var(--text-muted)] max-w-md">{service.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works + Advantages */}
      <section className="py-[var(--space-32)] bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)]">Partnership Advantage</span>
                <h2 className="mt-4 display-section text-[var(--foreground)] mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                  WHY MANUFACTURE WITH US
                </h2>
                <div className="gold-rule w-12 mb-10" />
                <ul className="space-y-4">
                  {advantages.map((adv, i) => (
                    <li key={adv} className="flex items-start gap-4 body-text text-[var(--text-cream)]">
                      <span className="w-5 h-px bg-[var(--gold)] mt-3 shrink-0" />
                      {adv}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="p-10 bg-[var(--bg-warm-dark)] border border-[var(--border-subtle)]">
                <span className="label-text text-[var(--gold)] block mb-6">THE PROCESS</span>
                <h3 className="heading-2 text-[var(--foreground)] mb-8">
                  How It Works
                </h3>
                <ol className="space-y-5">
                  {[
                    "Share your product requirements and specifications",
                    "We provide a custom quote with MOQ and timeline",
                    "Approve samples and packaging design",
                    "Full-scale production and quality testing",
                    "Dispatch with complete documentation",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-4 body-text text-[var(--text-cream)] !text-[0.9375rem]">
                      <span className="shrink-0 mono-text text-[0.6875rem] font-bold text-[var(--gold)] mt-0.5">
                        {String(i + 1).padStart(2, "0")}
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
      <section className="py-[var(--space-32)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <h2 className="display-section text-[var(--foreground)]">
              START YOUR MANUFACTURING PARTNERSHIP
            </h2>
            <div className="gold-rule w-12 mt-6 mb-6" />
            <p className="body-text text-[var(--text-muted)] max-w-xl">
              Share your requirements and our team will respond with a detailed
              proposal within 48 hours.
            </p>
            <Link
              href="/contact/"
              className="mt-10 inline-flex items-center gap-3 px-10 py-4 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get a Custom Quote
              <ArrowRight size={14} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
