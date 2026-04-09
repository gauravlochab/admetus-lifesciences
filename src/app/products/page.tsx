"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { products } from "@/data/products";

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920&h=1080&fit=crop"
          alt="Softgel capsules"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/30" />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)]">Product Portfolio</span>
          <h1 className="mt-4 display-section text-[#FAFAFA]">
            NUTRACEUTICAL<br />
            <span className="text-[var(--gold)]">SOFTGEL CAPSULES</span>
          </h1>
          <p className="mt-6 text-[1.25rem] text-[#E8E0D0] max-w-2xl leading-[1.7]">
            Each product in our portfolio is formulated for optimal bioavailability
            and manufactured under strict quality controls. Available for contract
            manufacturing and private label.
          </p>
        </div>
      </section>

      {/* Category Filter + Grid */}
      <section className="py-[var(--space-24)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-[0.75rem] font-medium uppercase tracking-[0.1em] border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[var(--gold)] text-[#0A0A0A] border-[var(--gold)]"
                    : "text-[var(--text-muted)] border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((product, i) => (
              <SectionReveal key={product.slug} delay={i * 0.08}>
                <Link href={`/products/${product.slug}/`} className="group block">
                  <div
                    className="relative p-8 border border-[var(--border-subtle)] hover:border-[var(--gold)]/20 transition-all duration-500 min-h-[280px] flex flex-col justify-end group-hover:-translate-y-1"
                    style={{ background: `linear-gradient(135deg, ${product.color}08, var(--bg-charcoal))` }}
                  >
                    <span
                      className="inline-block self-start px-3 py-1 text-[0.65rem] font-medium tracking-[0.15em] uppercase border mb-4"
                      style={{
                        color: product.color,
                        borderColor: `${product.color}40`,
                        backgroundColor: `${product.color}10`,
                      }}
                    >
                      {product.category}
                    </span>
                    <h3
                      className="heading-2 text-[var(--foreground)] uppercase group-hover:text-[var(--gold)] transition-colors"
                    >
                      {product.name}
                    </h3>
                    <p className="mt-1 text-[var(--gold)] text-[1rem]">{product.tagline}</p>
                    <p className="mt-3 text-[0.875rem] text-[var(--text-muted)] line-clamp-2 max-w-lg">
                      {product.composition}
                    </p>
                    <div className="mt-4 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                      <span className="text-[0.75rem] text-[var(--text-muted)] font-mono">{product.packSize}</span>
                      <span className="flex items-center gap-1 label-text text-[var(--gold)] group-hover:text-[var(--gold-light)] transition-colors">
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
            <div className="mt-16 text-center p-12 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)]">
              <h3 className="heading-2 text-[var(--foreground)] uppercase">
                Need a Custom Formulation?
              </h3>
              <p className="mt-3 text-[var(--text-muted)] max-w-xl mx-auto">
                We offer contract manufacturing and private label services. Share
                your requirements and we will provide a custom quote.
              </p>
              <Link
                href="/contact/"
                className="mt-6 inline-flex items-center gap-2 px-8 py-3 text-sm font-bold tracking-[0.05em] uppercase text-[#0A0A0A] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors"
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
