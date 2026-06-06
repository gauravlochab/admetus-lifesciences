import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

export const metadata: Metadata = {
  title: "Case Study: Vitamin D3 60K IU Stability Challenge — 6-Week Resolution",
  description:
    "Illustrative case study: how an Indian Vitamin D3 60,000 IU softgel brand resolved a 3-month shelf-life concern through blister packaging upgrade, accelerated stability re-testing, and supplier QC alignment with Admetus Lifesciences.",
  alternates: {
    canonical: "https://www.admetuslifesciences.com/case-studies/vitamin-d3-stability-challenge/",
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
      name: "Vitamin D3 60K IU Stability Challenge",
      item: "https://www.admetuslifesciences.com/case-studies/vitamin-d3-stability-challenge/",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vitamin D3 60K IU Stability Challenge — A 6-Week Resolution",
  description:
    "Illustrative case study showing how Admetus Lifesciences resolved a Vitamin D3 60,000 IU softgel stability concern through packaging optimization and accelerated stability validation.",
  url: "https://www.admetuslifesciences.com/case-studies/vitamin-d3-stability-challenge/",
  publisher: { "@id": "https://www.admetuslifesciences.com/#organization" },
  author: { "@id": "https://www.admetuslifesciences.com/#organization" },
  datePublished: "2026-04-30",
  dateModified: "2026-04-30",
  image: "https://www.admetuslifesciences.com/images/facility/elmach-blister-machine.jpg",
  about: [
    "Vitamin D3 softgel manufacturing",
    "Cholecalciferol stability testing",
    "Softgel packaging selection",
    "Pharmaceutical contract manufacturing",
  ],
};

export default function VitaminD3StabilityCase() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <section className="relative min-h-[45vh] flex items-end pt-24 pb-12 overflow-hidden">
        <img
          src="/images/facility/elmach-blister-machine.jpg"
          alt="Elmach EPI 2000 blister packing machine at Admetus Lifesciences — Vitamin D3 softgel stability and packaging case study"
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
          <span className="label-text text-[var(--gold)]">Case 01  ·  Formulation</span>
          <h1 className="mt-3 display-section text-[var(--hero-text)]">
            VITAMIN D3 60K IU<br />STABILITY CHALLENGE
          </h1>
          <p className="mt-3 body-large text-[var(--gold)]">A 6-Week Resolution</p>
        </div>
      </section>

      {/* Note */}
      <section className="py-6 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <p className="body-text text-[var(--text-muted)] !text-[0.8125rem] max-w-[80ch]">
            <span className="text-[var(--gold)] mono-text uppercase tracking-[0.1em] !text-[0.6875rem] mr-2">Note</span>
            This is an illustrative case reflecting Admetus Lifesciences&apos; capabilities,
            processes, and quality protocols applied to a representative scenario. Client
            details and proprietary specifics are not disclosed.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 border-b border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-[var(--gold)]" style={{ fontFamily: "var(--font-display)" }}>+12 mo</div>
              <div className="mt-1 text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">Stability Extended</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--gold)]" style={{ fontFamily: "var(--font-display)" }}>6 wks</div>
              <div className="mt-1 text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">Time to Resolution</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--gold)]" style={{ fontFamily: "var(--font-display)" }}>100%</div>
              <div className="mt-1 text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">Potency Maintained</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--gold)]" style={{ fontFamily: "var(--font-display)" }}>0</div>
              <div className="mt-1 text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">Batches Recalled</div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16">
        <div className="mx-auto max-w-[68ch] px-[var(--gutter)]">
          <SectionReveal>
            <h2 className="heading-2 text-[var(--foreground)] mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)" }}>
              Context: A High-Dose Vitamin D3 SKU Approaching Re-Launch
            </h2>
            <div className="space-y-5 body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
              <p>
                An Indian nutraceutical brand owner approached Admetus Lifesciences with a
                Vitamin D3 60,000 IU softgel SKU that had been performing well in
                domestic pharmacy chains for two years. As they prepared for a regional
                expansion, their internal QC team flagged a stability concern: accelerated
                testing data suggested potency might drop below 95% labeled assay around
                the 21-month mark — three months short of the 24-month shelf life printed
                on the label.
              </p>
              <p>
                The brand owner had three immediate choices: shorten the labeled shelf
                life (commercially unattractive), reformulate from scratch (12+ months,
                regulatory re-submission), or partner with a manufacturer who could
                identify the specific stability driver and resolve it within their next
                production cycle.
              </p>
              <p>
                They contacted Admetus on a Monday. The first sample shipped in week 6.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <h2 className="heading-2 text-[var(--foreground)] mt-12 mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)" }}>
              Diagnosis: The Three Stability Drivers
            </h2>
            <div className="space-y-5 body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
              <p>
                Vitamin D3 (Cholecalciferol) is sensitive to three environmental factors:
                oxygen, light, and humidity. In high-dose 60,000 IU softgel formulations,
                even small exposure to any of the three can degrade potency over the shelf
                life window. Our quality team began with a structured diagnostic across
                three dimensions:
              </p>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong className="text-[var(--foreground)]">Active ingredient sourcing.</strong> We
                  cross-referenced the brand&apos;s incoming Vitamin D3 raw material COA
                  against typical specifications. The active was within spec but on the
                  lower end of the acceptable potency range — meaning the formulation had
                  less &quot;headroom&quot; against degradation.
                </li>
                <li>
                  <strong className="text-[var(--foreground)]">Encapsulation conditions.</strong>{" "}
                  Our ARBES SGX-806P encapsulation line operates under controlled
                  humidity and oxygen exposure parameters. We verified the brand&apos;s
                  prior batches had been produced on similar equipment but with slightly
                  higher ambient humidity during the drying phase.
                </li>
                <li>
                  <strong className="text-[var(--foreground)]">Packaging permeability.</strong>{" "}
                  The original blister format used standard PVC backing. PVC has higher
                  oxygen and moisture transmission rates than PVDC-coated PVC or aluminum
                  cold-form blister formats. For a fat-soluble, oxygen-sensitive active
                  like Vitamin D3, packaging selection materially affects shelf life.
                </li>
              </ol>
            </div>
          </SectionReveal>

          <SectionReveal>
            <h2 className="heading-2 text-[var(--foreground)] mt-12 mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)" }}>
              The Approach: Three Coordinated Changes
            </h2>
            <div className="space-y-5 body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
              <p>
                Rather than reformulate from scratch, we proposed three targeted
                interventions, all executable within a 4-week production cycle:
              </p>
              <p>
                <strong className="text-[var(--foreground)]">Change 1 — Active assay overage.</strong>{" "}
                Increased Vitamin D3 active loading from 100% labeled assay to 105%
                labeled assay (a standard pharmaceutical practice for actives with known
                degradation profiles). This provides headroom against the expected
                stability decline.
              </p>
              <p>
                <strong className="text-[var(--foreground)]">Change 2 — Drying condition tightening.</strong>{" "}
                On the Admetus production line, we reduced ambient humidity during the
                post-encapsulation drying phase by 15% relative to the brand&apos;s prior
                process. This reduces the moisture content trapped within the softgel
                shell.
              </p>
              <p>
                <strong className="text-[var(--foreground)]">Change 3 — Blister format upgrade.</strong>{" "}
                Switched from PVC blister to PVDC-coated PVC blister on the Elmach EPI
                2000 line. PVDC coating reduces oxygen transmission by approximately 70%
                and moisture transmission by 80% compared to standard PVC. The visual
                appearance to end users is unchanged.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <h2 className="heading-2 text-[var(--foreground)] mt-12 mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)" }}>
              Validation: Accelerated Stability Re-Testing
            </h2>
            <div className="space-y-5 body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
              <p>
                In parallel with production, we initiated a 4-week accelerated stability
                study on a pilot batch. The study followed ICH Q1A(R2) guidelines:
                samples held at 40°C / 75% relative humidity for 4 weeks, with potency
                assays at week 0, week 2, and week 4. The 4-week accelerated condition
                approximates 12 months of real-time storage.
              </p>
              <p>
                Results: at week 4 (equivalent to ~12 months real-time), Vitamin D3
                potency held at 102% labeled assay — well within the 95–105%
                specification window. Extrapolation to 24 months projected potency at
                ~98% labeled assay, comfortably within spec.
              </p>
              <p>
                Real-time stability data will continue accruing across the next 24
                months. The brand owner now has both accelerated and ongoing real-time
                data supporting the 24-month shelf life claim.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <h2 className="heading-2 text-[var(--foreground)] mt-12 mb-4" style={{ fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)" }}>
              Outcome
            </h2>
            <div className="space-y-5 body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
              <p>
                Six weeks from the brand owner&apos;s first call, the first re-formulated
                pilot batch shipped from our Jind, Haryana facility. The brand
                successfully launched their regional expansion on the original
                timeline. Subsequent production batches have all met the tightened
                stability profile.
              </p>
              <p>
                More importantly, the brand owner now has a documented stability dossier
                they can present to international regulators as their export ambitions
                expand — turning what began as a near-term commercial problem into
                long-term documentation that supports market growth.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="mt-16 p-6 bg-[var(--bg-charcoal)] border border-[var(--border-subtle)]">
              <span className="label-text text-[var(--gold)] block mb-2">Key Capabilities Demonstrated</span>
              <ul className="space-y-2 body-text text-[var(--text-muted)] !text-[0.875rem]">
                <li>· ICH Q1A(R2)-compliant accelerated stability testing</li>
                <li>· ARBES SGX-806P precision encapsulation with controlled humidity</li>
                <li>· Elmach EPI 2000 blister packing across multiple substrate types (PVC, PVDC, aluminum)</li>
                <li>· In-house QC laboratory for potency assays</li>
                <li>· 4-week pilot-to-production turnaround on existing formulations</li>
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
              FACING A SIMILAR&nbsp;CHALLENGE?
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Whether you&apos;re troubleshooting an existing softgel SKU, validating
              a new formulation, or preparing for international expansion — we
              can help. Detailed quotation within 48&nbsp;hours.
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
                href="/contract-manufacturing-vitamin-d3-softgel/"
                className="inline-flex items-center gap-3 px-7 py-3 active:scale-[0.98] active:opacity-90 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--gold)] border border-[var(--gold)]/30 hover:bg-[var(--gold)]/[0.06]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Vitamin D3 Service Page
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
