"use client";

import Link from "next/link";
import { ArrowRight, Globe, FileText, Package, Ship, CheckCircle, Clock, DollarSign } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

const exportCapabilities = [
  { icon: Package, title: "Export-Ready Packaging", desc: "Products packaged to international standards with proper labeling, batch coding, and tamper-evident sealing." },
  { icon: FileText, title: "Documentation Support", desc: "Complete export documentation including COA, batch records, and regulatory paperwork — shared on request." },
  { icon: Ship, title: "Logistics Coordination", desc: "Support for shipping arrangements, packaging for transit, and coordination with freight forwarders." },
  { icon: DollarSign, title: "Competitive Pricing", desc: "MOQ-based pricing with volume discounts. Transparent quotations with no hidden costs." },
  { icon: Clock, title: "Lead Time Commitment", desc: "Clear production timelines with proactive updates. We deliver within the committed schedule." },
  { icon: Globe, title: "Multi-Market Awareness", desc: "Understanding of regulatory requirements across markets to support your compliance needs." },
];

export default function ExportPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=1080&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/30" />
        <div className="relative mx-auto max-w-[1400px] w-full px-[clamp(1.5rem,4vw,4rem)]">
          <span className="label-text text-[#C8A951]">International Markets</span>
          <h1
            className="mt-4 text-[#FAFAFA] uppercase"
            style={{
              fontFamily: "var(--font-literata), Georgia, serif",
              fontSize: "clamp(3.5rem, 7vw, 7rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
            }}
          >
            FROM INDIA
            <br />
            <span className="text-[#C8A951]">TO THE WORLD</span>
          </h1>
          <p className="mt-6 text-[1.25rem] text-[#E8E0D0] max-w-2xl leading-[1.7]">
            Admetus Lifesciences is positioned to serve international buyers,
            importers, and distributors seeking a reliable and quality-focused
            softgel capsule manufacturing partner in India.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-[clamp(4rem,8vw,8rem)]">
        <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,4rem)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exportCapabilities.map((cap, i) => (
              <SectionReveal key={cap.title} delay={i * 0.08}>
                <div className="p-6 bg-[#141414] border border-white/[0.06] h-full hover:border-[#C8A951]/20 transition-all duration-500">
                  <cap.icon size={24} className="text-[#C8A951] mb-4" />
                  <h3 className="text-[1rem] font-semibold text-[#FAFAFA]">{cap.title}</h3>
                  <p className="mt-3 text-[0.875rem] text-[#8A8274] leading-relaxed">{cap.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* For Buyers */}
      <section className="py-[clamp(4rem,8vw,8rem)] bg-[#141414] border-y border-white/[0.06]">
        <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,4rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div>
                <span className="label-text text-[#C8A951]">For International Buyers</span>
                <h2
                  className="mt-4 text-[#FAFAFA] uppercase mb-6"
                  style={{
                    fontFamily: "var(--font-literata), Georgia, serif",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    lineHeight: 1.1,
                  }}
                >
                  WHAT WE OFFER <span className="text-[#C8A951]">EXPORT PARTNERS</span>
                </h2>
                <p className="text-[1rem] text-[#E8E0D0] leading-[1.7] mb-8">
                  As an export-oriented manufacturer, we understand the
                  requirements of international buyers. Our team provides
                  dedicated support for export enquiries.
                </p>
                <ul className="space-y-3">
                  {[
                    "Dedicated export enquiry handling",
                    "Custom quotation based on requirements",
                    "Sample dispatch for evaluation",
                    "Flexible MOQ for initial orders",
                    "Complete batch documentation",
                    "Quality certificates provided with each shipment",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[1rem] text-[#E8E0D0]">
                      <CheckCircle size={16} className="text-[#C8A951] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="p-8 bg-[#1A1710] border border-white/[0.06]">
                <Globe size={48} className="text-[#C8A951]/30 mx-auto" />
                <h3
                  className="mt-4 text-xl text-[#FAFAFA] text-center"
                  style={{ fontFamily: "var(--font-literata), Georgia, serif" }}
                >
                  Ready for Global Markets
                </h3>
                <p className="mt-3 text-[0.875rem] text-[#8A8274] text-center">
                  Export documentation, international packaging, and regulatory
                  support — shared on request.
                </p>
                <Link
                  href="/contact/"
                  className="mt-6 block w-full px-6 py-3 text-sm font-semibold text-center tracking-[0.05em] uppercase text-[#0A0A0A] bg-[#C8A951] hover:bg-[#E2CC7A] transition-colors"
                >
                  Enquire for Export
                </Link>
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
              className="text-[#FAFAFA] uppercase"
              style={{
                fontFamily: "var(--font-literata), Georgia, serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: 1.1,
              }}
            >
              START AN <span className="text-[#C8A951]">EXPORT ENQUIRY</span>
            </h2>
            <p className="mt-4 text-[1rem] text-[#8A8274] max-w-xl mx-auto">
              For bulk and export enquiries, share your requirements and our
              team will respond with a detailed proposal.
            </p>
            <Link
              href="/contact/"
              className="mt-8 inline-flex items-center gap-2 px-10 py-4 text-sm font-semibold tracking-[0.05em] uppercase text-[#0A0A0A] bg-[#C8A951] hover:bg-[#E2CC7A] transition-colors"
            >
              Enquire for Export
              <ArrowRight size={16} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
