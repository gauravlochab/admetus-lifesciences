"use client";

import Link from "next/link";
import { ArrowRight, Pill } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920&h=1080&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/30" />
        <div className="relative mx-auto max-w-[1400px] w-full px-[clamp(1.5rem,4vw,4rem)]">
          <span className="label-text text-[var(--gold)]">Product Portfolio</span>
          <h1
            className="mt-4 text-[var(--text-white)] uppercase"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontSize: "clamp(3.5rem, 7vw, 7rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
            }}
          >
            NUTRACEUTICAL
            <br />
            <span className="text-[var(--gold)]">SOFTGEL CAPSULES</span>
          </h1>
          <p className="mt-6 text-[1.25rem] text-[var(--text-cream)] max-w-2xl leading-[1.7]">
            Each product in our portfolio is formulated for optimal bioavailability
            and manufactured under strict quality controls. Available for contract
            manufacturing and private label.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-[clamp(4rem,8vw,8rem)]">
        <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,4rem)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product, i) => (
              <SectionReveal key={product.slug} delay={i * 0.08}>
                <Link href={`/products/${product.slug}/`} className="group block">
                  <div
                    className="relative p-8 border border-white/[0.06] hover:border-[var(--gold)]/20 transition-all duration-500 min-h-[280px] flex flex-col justify-end"
                    style={{ background: `linear-gradient(135deg, ${product.color}06, #141414)` }}
                  >
                    <span
                      className="inline-block self-start px-3 py-1 text-[0.65rem] font-medium tracking-[0.15em] uppercase rounded-full border mb-4"
                      style={{
                        color: product.color,
                        borderColor: `${product.color}40`,
                        backgroundColor: `${product.color}10`,
                      }}
                    >
                      {product.category}
                    </span>
                    <h3
                      className="text-[var(--text-white)] uppercase group-hover:text-[var(--gold)] transition-colors"
                      style={{
                        fontFamily: "var(--font-display), Georgia, serif",
                        fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                        lineHeight: 1.2,
                      }}
                    >
                      {product.name}
                    </h3>
                    <p className="mt-1 text-[var(--gold)] text-[1rem]">{product.tagline}</p>
                    <p className="mt-3 text-[0.875rem] text-[var(--text-muted)] line-clamp-2 max-w-lg">
                      {product.composition}
                    </p>
                    <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="text-[0.75rem] text-[var(--text-muted)]">{product.packSize}</span>
                      <span className="flex items-center gap-1 text-[0.75rem] text-[var(--gold)] font-medium group-hover:text-[var(--gold-light)] transition-colors">
                        Details
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>

          {/* CTA */}
          <SectionReveal>
            <div className="mt-16 text-center p-12 bg-[var(--bg-charcoal)] border border-white/[0.06]">
              <h3
                className="text-[var(--text-white)] uppercase"
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                }}
              >
                Need a Custom Formulation?
              </h3>
              <p className="mt-3 text-[var(--text-muted)] max-w-xl mx-auto">
                We offer contract manufacturing and private label services. Share
                your requirements and we will provide a custom quote.
              </p>
              <Link
                href="/contact/"
                className="mt-6 inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold tracking-[0.05em] uppercase text-[#0A0A0A] bg-[var(--gold)] hover:bg-[#E2CC7A] transition-colors"
              >
                Request a Quote
                <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
