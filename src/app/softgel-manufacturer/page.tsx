import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { ingredientPages } from "@/data/ingredients";

const BASE = "https://www.admetuslifesciences.com";

export const metadata: Metadata = {
  title: { absolute: "Softgel Manufacturer by Ingredient India | Admetus" },
  description:
    "WHO-GMP certified softgel manufacturer & exporter in India by ingredient — omega-3, Vitamin D3, ashwagandha, curcumin, glutathione, black seed, vegan softgels.",
  keywords: [
    "softgel manufacturer by ingredient",
    "omega 3 softgel manufacturer india",
    "vitamin d3 softgel manufacturer",
    "ayurvedic softgel manufacturer",
    "vegan softgel manufacturer india",
    "custom softgel formulation india",
  ],
  alternates: { canonical: `${BASE}/softgel-manufacturer/` },
  openGraph: {
    title: "Softgel Manufacturer by Ingredient | Admetus Lifesciences",
    description:
      "Omega-3, Vitamin D3, ashwagandha, curcumin, glutathione, black seed oil, vegan and more — WHO-GMP certified softgel manufacturing & export from India.",
    url: `${BASE}/softgel-manufacturer/`,
  },
};

export default function SoftgelManufacturerHub() {
  return (
    <>
      <section className="relative min-h-[42vh] flex items-end pt-24 pb-12 overflow-hidden">
        <img src="/images/facility/softgels-golden-pile.jpg" alt="Softgel capsules by ingredient — Admetus Lifesciences, WHO-GMP certified manufacturer & exporter, India" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} loading="eager" />
        <div className="absolute inset-0 opacity-50 dark:opacity-80" style={{ background: "linear-gradient(to top, var(--hero-overlay-bottom), var(--hero-overlay-mid) 55%, var(--hero-overlay-top))" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)]">By Ingredient · India</span>
          <h1 className="mt-6 display-section" style={{ color: "#F7F4EF" }}>SOFTGEL MANUFACTURER<br />BY&nbsp;INGREDIENT</h1>
          <p className="mt-6 body-large max-w-[62ch]" style={{ color: "#E0D8C8" }}>
            WHO-GMP certified contract manufacturing and export of nutraceutical &amp; Ayurvedic softgel capsules from India — select an ingredient to see formulation, capabilities, and export details.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ingredientPages.map((p, i) => (
              <SectionReveal key={p.slug} delay={i * 0.04}>
                <Link href={`/softgel-manufacturer/${p.slug}/`} className="group block h-full p-6 border border-[var(--border-subtle)] bg-[var(--bg-warm-dark)] hover:border-[var(--gold)]/40 transition-colors duration-200">
                  <span className="label-text text-[var(--gold)] block mb-3 text-[0.5625rem]">{p.eyebrow}</span>
                  <div className="flex items-center justify-between">
                    <h2 className="heading-2 text-[var(--foreground)] group-hover:text-[var(--gold)] transition-colors" style={{ fontSize: "1.25rem" }}>{p.name}</h2>
                    <ArrowRight size={14} className="text-[var(--gold)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  </div>
                  <p className="mt-2 body-text text-[var(--text-muted)] !text-[0.8125rem]">{p.metaTitle.replace(" | Admetus", "")}</p>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
