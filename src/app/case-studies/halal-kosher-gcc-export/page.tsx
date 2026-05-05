import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

export const metadata: Metadata = {
  title: "Case Study: Halal + Kosher Dual Certification for GCC Export — 12-Week Timeline",
  description:
    "Illustrative case study: how an international brand prepared an Omega-3 softgel SKU for GCC import with Halal + Kosher dual certification and country-specific regulatory documentation through Admetus Lifesciences.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/case-studies/halal-kosher-gcc-export/",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.admetuslifesciences.com/" },
    { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://www.admetuslifesciences.com/case-studies/" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Halal + Kosher GCC Export",
      item: "https://www.admetuslifesciences.com/case-studies/halal-kosher-gcc-export/",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Halal + Kosher Dual Certification for GCC Launch — A 12-Week Timeline",
  description:
    "Illustrative case study showing how Admetus Lifesciences supported a brand preparing an Omega-3 softgel SKU for GCC export with Halal and Kosher dual certification.",
  url: "https://www.admetuslifesciences.com/case-studies/halal-kosher-gcc-export/",
  publisher: { "@id": "https://www.admetuslifesciences.com/#organization" },
  author: { "@id": "https://www.admetuslifesciences.com/#organization" },
  datePublished: "2026-04-30",
  dateModified: "2026-04-30",
  about: [
    "Halal certification for nutraceuticals",
    "Kosher certification for softgel manufacturing",
    "GCC export documentation",
    "Omega-3 softgel manufacturing",
    "Nutraceutical regulatory compliance",
  ],
};

export default function HalalKosherCase() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <section className="relative min-h-[45vh] flex items-end pt-24 pb-12 overflow-hidden">
        <img
          src="/images/facility/dispatch-area.jpg"
          alt="Halal Kosher GCC export case study — Admetus Lifesciences"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--hero-overlay-bottom), var(--hero-overlay-mid) 50%, var(--hero-overlay-top))" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <Link
            href="/case-studies/"
            className="inline-flex items-center gap-2 py-2 label-text text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors duration-200 mb-4"
          >
            <ArrowLeft size={13} />
            All Case Studies
          </Link>
          <span className="label-text text-[var(--gold)]">Case 02  ·  Export</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            HALAL + KOSHER<br />FOR GCC&nbsp;LAUNCH
          </h1>
          <p className="mt-3 body-large text-[var(--gold)]">A 12-Week Timeline</p>
        </div>
      </section>

      <section className="py-6 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <p className="body-text text-[var(--text-muted)] !text-[0.8125rem] max-w-[80ch]">
            <span className="text-[var(--gold)] mono-text uppercase tracking-[0.1em] !text-[0.6875rem] mr-2">Note</span>
            This is an illustrative case reflecting Admetus Lifesciences&apos; capabilities,
            certifications, and export documentation processes applied to a representative
            scenario. Client details and proprietary specifics are not disclosed.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 border-b border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-[var(--gold)]" style={{ fontFamily: "var(--font-display)" }}>12 wks</div>
              <div className="mt-1 text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">Brief to Launch</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--gold)]" style={{ fontFamily: "var(--font-display)" }}>2</div>
              <div className="mt-1 text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">Certifying Bodies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--gold)]" style={{ fontFamily: "var(--font-display)" }}>6</div>
              <div className="mt-1 text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">GCC Markets Opened</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--gold)]" style={{ fontFamily: "var(--font-display)" }}>0</div>
              <div className="mt-1 text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">Customs Holds</div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16">
        <div className="mx-auto max-w-[68ch] px-[var(--gutter)]">
          <SectionReveal>
            <h2 className="heading-2 text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)" }}>
              Context: An Omega-3 SKU Targeting Three Markets at Once
            </h2>
            <div className="space-y-5 body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
              <p>
                A nutraceutical brand owner approached Admetus Lifesciences with an
                ambitious plan: launch their Omega-3 + Vitamin E softgel SKU
                simultaneously into the Gulf Cooperation Council (GCC) markets — UAE,
                Saudi Arabia, Kuwait, Bahrain, Oman, and Qatar — plus the Israeli market.
                Combined, these six countries represent a population of ~80M with strong
                premium-supplement demand, but distinct regulatory frameworks.
              </p>
              <p>
                The challenge was that the brand needed two different religious
                certifications (Halal for the GCC, Kosher for Israel) layered on top of
                country-specific regulatory dossiers, all completed within a 12-week
                window before their planned regional sales kickoff. They had product-
                market fit research but no existing manufacturing partner with both
                certifications under one roof.
              </p>
              <p>
                The brief arrived in week 0. The first commercial shipment cleared GCC
                customs in week 12.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <h2 className="heading-2 text-[var(--foreground)] mt-12 mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)" }}>
              Why Halal + Kosher Together Matters for Omega-3
            </h2>
            <div className="space-y-5 body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
              <p>
                Omega-3 softgels are a particularly sensitive case for religious
                certification because the active ingredient (fish oil) and the softgel
                shell (gelatin) both have origin requirements:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-[var(--foreground)]">Halal requirements</strong> stipulate that
                  fish oil sourced from finned, scaled fish is acceptable; the gelatin
                  shell must be from Halal-slaughtered animal sources or fish-derived.
                </li>
                <li>
                  <strong className="text-[var(--foreground)]">Kosher requirements</strong> overlap
                  significantly: fish from kosher species are acceptable, but the gelatin
                  must be from kosher sources, and the entire production line must be
                  separated from non-kosher materials during the production batch.
                </li>
                <li>
                  Crucially, both certifications require <strong className="text-[var(--foreground)]">audit and ongoing oversight</strong> from
                  recognized certifying bodies — not self-declaration.
                </li>
              </ul>
              <p>
                Our Jind facility already held Halal certification covering production
                line, raw material sourcing, and storage segregation. For this project,
                we coordinated with a recognized Kosher certifying body to extend
                certification scope to cover the specific Omega-3 SKU.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <h2 className="heading-2 text-[var(--foreground)] mt-12 mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)" }}>
              The 12-Week Timeline
            </h2>
            <div className="space-y-5 body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
              <p>
                The work split across four parallel tracks: certification, formulation,
                packaging, and regulatory documentation. Running these in parallel
                rather than sequence is what made the 12-week timeline achievable.
              </p>
            </div>

            <div className="mt-8 space-y-6">
              {[
                {
                  weeks: "Weeks 1–2",
                  phase: "Specification & sourcing",
                  desc: "Confirmed fish oil source (anchovy/sardine/mackerel sourced from kosher and halal-certified suppliers). Gelatin shell sourced from fish-origin gelatin, eliminating ambiguity around bovine/porcine sources. Raw material certifications gathered.",
                },
                {
                  weeks: "Weeks 2–4",
                  phase: "Kosher certification scope extension",
                  desc: "Coordinated with the Kosher certifying body for facility audit covering the specific production run. Audit included review of cleaning protocols between production batches, segregation of raw materials, and traceability.",
                },
                {
                  weeks: "Weeks 4–6",
                  phase: "Pilot batch & sample dispatch",
                  desc: "Pilot batch produced under both Halal and Kosher supervision. Samples dispatched to brand owner for sensory and visual evaluation. Minor packaging adjustments incorporated.",
                },
                {
                  weeks: "Weeks 6–8",
                  phase: "Regulatory dossier compilation",
                  desc: "GCC dossier compiled — composition statement, manufacturing process flow, stability data, COA samples, GMP certificate, Halal certificate, Free Sale Certificate. Israel regulatory submission compiled in parallel with Kosher certificate inclusion.",
                },
                {
                  weeks: "Weeks 8–10",
                  phase: "Production batch & QC",
                  desc: "Full commercial production batch on the ARBES SGX-806P encapsulation line with Halal/Kosher supervision in place. Complete batch testing including Omega-3 EPA/DHA potency assay, peroxide value (oxidation marker critical for fish oil), and microbial limits. All within spec.",
                },
                {
                  weeks: "Weeks 10–12",
                  phase: "Packaging, dispatch, customs",
                  desc: "Custom carton printed with brand artwork plus Halal/Kosher symbols and country-specific labeling (Arabic for GCC, Hebrew for Israel). Sea freight to Jebel Ali (UAE) coordinated; pre-cleared customs documentation submitted to importer&apos;s broker.",
                },
              ].map((phase) => (
                <div key={phase.weeks} className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-3 md:gap-6 py-4 border-t border-[var(--border-subtle)]">
                  <div>
                    <span className="mono-text text-[0.6875rem] text-[var(--gold)] uppercase tracking-[0.12em]">
                      {phase.weeks}
                    </span>
                  </div>
                  <div>
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1rem, 1.6vw, 1.125rem)" }}>
                      {phase.phase}
                    </h3>
                    <p className="mt-2 body-text text-[var(--text-muted)] !text-[0.9375rem]">
                      {phase.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal>
            <h2 className="heading-2 text-[var(--foreground)] mt-12 mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)" }}>
              Outcome
            </h2>
            <div className="space-y-5 body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
              <p>
                The first commercial shipment cleared Jebel Ali customs without holds in
                week 12. The Israeli shipment routed via Haifa cleared one week later.
                Within six months of launch, the brand had established ongoing repeat
                orders across all six GCC markets plus Israel — turning a single
                manufacturing partnership into a regional foothold.
              </p>
              <p>
                The dual-certified Omega-3 SKU also became a foundation for the brand&apos;s
                subsequent ASEAN expansion, since the documentation prepared for GCC
                regulatory submission (with translation) covered most ASEAN
                health-supplement registration requirements as well.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="mt-16 p-6 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)]">
              <span className="label-text text-[var(--gold)] block mb-2">Key Capabilities Demonstrated</span>
              <ul className="space-y-2 body-text text-[var(--text-muted)] !text-[0.875rem]">
                <li>· Halal + Kosher dual-certification production protocols</li>
                <li>· Multi-jurisdiction regulatory dossier compilation (GCC + Israel)</li>
                <li>· Country-specific labeling (Arabic, Hebrew) and packaging</li>
                <li>· Omega-3 specific QC including peroxide value testing</li>
                <li>· Coordination with international freight forwarders for pre-cleared customs</li>
                <li>· 12-week brief-to-export-launch timeline on a new SKU</li>
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-t border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <h2 className="display-section text-[var(--foreground)]" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
              EXPORTING TO GCC OR&nbsp;EUROPE?
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Whether you need Halal, Kosher, organic, or country-specific
              regulatory documentation — our team handles dossiers for major
              international markets. Detailed quotation within 48&nbsp;hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Request a Quote  <ArrowRight size={14} />
              </Link>
              <Link
                href="/export/"
                className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--gold)] border border-[var(--gold)]/30 hover:bg-[var(--gold)]/[0.06]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Export Capabilities
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
