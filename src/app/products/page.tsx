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
      <section className="relative min-h-[50vh] flex items-end pt-24 pb-12 overflow-hidden">
        <img
          src="/images/facility/softgels-amber-closeup.jpg"
          alt="Collection of precision-formulated softgel capsules manufactured by Admetus Lifesciences"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--hero-overlay-bottom), var(--hero-overlay-mid) 50%, var(--hero-overlay-top))" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)]">Product Portfolio</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            NUTRACEUTICAL<br />SOFTGEL CAPSULES
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Each product in our portfolio is formulated for optimal bioavailability
            and manufactured under strict quality controls. Available for contract
            manufacturing and private&nbsp;label.
          </p>
        </div>
      </section>

      {/* Category Filter + Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-7 py-3 hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(200,169,81,0.15)] active:translate-y-[1px] active:shadow-none text-[0.6875rem] font-semibold uppercase tracking-[0.12em] border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[var(--gold)] text-[var(--bg-black)] border-[var(--gold)]"
                    : "text-[var(--text-muted)] border-[var(--border-subtle)] hover:border-[var(--gold)]/30 hover:text-[var(--gold)]"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filtered.map((product, i) => (
              <SectionReveal key={product.slug} delay={i * 0.04}>
                <Link href={`/products/${product.slug}/`} className="group block">
                  <div
                    className="relative p-6 border border-[var(--border-subtle)] hover:border-[var(--gold)]/15 hover:shadow-[0_0_0_1px_rgba(200,169,81,0.15)] transition-all duration-200 flex flex-col justify-end group-hover:-translate-y-px"
                    style={{
                      background: `linear-gradient(160deg, ${product.color}06, var(--bg-charcoal))`,
                      minHeight: "280px",
                    }}
                  >
                    {/* Number in corner */}
                    <span className="absolute top-5 right-5 mono-text text-[0.5rem] text-[var(--text-muted)] opacity-50">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="label-text mb-3 block text-[var(--teal)]">
                      {product.category}
                    </span>
                    <h3 className="heading-2 text-[var(--foreground)] uppercase group-hover:text-[var(--gold)] transition-all duration-200 break-words">
                      {product.name}
                    </h3>
                    <p className="mt-1 body-text text-[var(--gold)] !text-[0.9375rem]">{product.tagline}</p>
                    <p className="mt-2 body-text text-[var(--text-muted)] line-clamp-2 max-w-[58ch] !text-[0.875rem]">
                      {product.composition}
                    </p>
                    <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                      <span className="mono-text text-[0.6875rem] text-[var(--text-muted)]">{product.packSize}</span>
                      <span className="flex items-center gap-1.5 label-text text-[var(--gold)] group-hover:text-[var(--gold-light)] transition-all duration-200">
                        Details
                        <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>

          {/* CTA */}
          <SectionReveal>
            <div className="mt-14 p-6 sm:p-8 border border-[var(--border-subtle)] bg-[var(--bg-charcoal)]">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <h3 className="heading-2 text-[var(--foreground)] uppercase">
                    Need a Custom&nbsp;Formulation?
                  </h3>
                  <p className="mt-2 body-text text-[var(--text-muted)] max-w-[58ch]">
                    We offer contract manufacturing and private label services. Share
                    your requirements and we will provide a custom&nbsp;quote.
                  </p>
                </div>
                <Link
                  href="/contact/"
                  className="shrink-0 inline-flex items-center justify-center gap-2 px-7 py-3 hover:-translate-y-[1px] hover:shadow-[0_4px_12px_rgba(200,169,81,0.15)] active:translate-y-[1px] active:shadow-none text-[0.6875rem] font-bold tracking-[0.12em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-all duration-200"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Request a Quote
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
