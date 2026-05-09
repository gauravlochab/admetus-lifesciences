"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

export default function AboutPage() {
  const founderJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anudeep Deswal",
    jobTitle: "Founder",
    worksFor: {
      "@id": "https://www.admetuslifesciences.com/#organization",
    },
    description:
      "Founder of Admetus Lifesciences (2020), leading precision softgel capsule manufacturing in Haryana, India.",
    knowsAbout: [
      "Softgel capsule manufacturing",
      "Nutraceutical formulation",
      "Contract manufacturing operations",
      "GMP-compliant production",
      "Rural workforce development",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderJsonLd) }}
      />
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pt-24 pb-12 overflow-hidden">
        <img
          src="/images/facility/capsule-drying-women.jpg"
          alt="Admetus Lifesciences workers at the capsule drying stations — a passion for better healthcare, Village Anta, Haryana"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0 opacity-55" style={{ background: "linear-gradient(to top, var(--hero-grad-start) 0%, var(--hero-grad-mid) 40%, transparent 75%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <span className="label-text text-[#1A1710] font-bold tracking-[0.14em] mb-8 md:mb-10 block">PRECISION SOFTGEL MANUFACTURING</span>
          <h1
            className="display-section text-[var(--hero-text)] mt-6 md:mt-8 mb-8 md:mb-10"
            style={{ wordSpacing: "0.2em" }}
          >
            A PASSION FOR<br />BETTER HEALTHCARE
          </h1>
          <p className="body-large text-[var(--text-cream)] max-w-[48ch] leading-[1.55]" style={{ fontSize: "0.9375rem" }}>
            Admetus Lifesciences is a specialized nutraceutical manufacturing
            company based in Haryana, India — focused on producing high-quality
            softgel capsules that meet international&nbsp;standards.
          </p>
        </div>
      </section>

      {/* Company Story — asymmetric two-column */}
      <section className="py-20 bg-[var(--bg-black)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)] mb-3 block">OUR STORY</span>
                <div className="h-px w-12 bg-[var(--gold)] mt-4 mb-6" />
                <p
                  className="text-sm italic text-[var(--text-cream)]"
                  style={{ fontFamily: "var(--font-body), 'Source Serif 4', Georgia, serif" }}
                >
                  Founded in 2020 by Mr. Anudeep Deswal.
                  <br />Built on precision, driven by science.
                </p>
                <div className="space-y-5 max-w-[48ch] mt-8">
                  <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                    Founded in 2020, Admetus Lifesciences has built a reputation for excellence in
                    the manufacturing and distribution of softgel capsules. Our{" "}
                    <Link href="/softgel-capsule-manufacturer-haryana/" className="text-[var(--gold)] hover:text-[var(--gold-light)] underline-offset-2 hover:underline">production facility in Haryana</Link>{" "}
                    is purpose-built for precision nutraceuticals,
                    equipped with state-of-the-art encapsulation technology designed to
                    enhance the absorption and bioavailability of active&nbsp;ingredients.
                  </p>
                  <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                    We place great emphasis on quality assurance and regulatory
                    compliance. Our team follows stringent quality control processes
                    at every stage of manufacturing, ensuring maximum therapeutic
                    effectiveness in every capsule. Every batch meets international
                    standards and customer expectations — from raw material sourcing
                    to final&nbsp;dispatch.
                  </p>
                  <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                    Our supplements are supplied to hospitals, retailers, and
                    distributors across the country and beyond. We deliver within
                    the assured time frame, maintaining reliability that our
                    partners count&nbsp;on.
                  </p>
                </div>
                {/* Gold rule separator before image on mobile */}
                <div className="h-px w-16 bg-[var(--gold)]/30 mt-8 lg:hidden" />
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="aspect-[4/3] overflow-hidden border border-[var(--border-subtle)] img-warm-overlay relative">
                <img
                  src="/images/facility/encapsulation-arbes.jpg"
                  width={800}
                  height={600}
                  alt="ARBES SGX-806P encapsulation line at Admetus Lifesciences in operation"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 items-start">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)] mb-3 block">FOUNDER</span>
                <h2
                  className="display-section text-[var(--foreground)] mt-3 mb-4"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
                >
                  ANUDEEP<br />DESWAL
                </h2>
                <div className="gold-rule w-12 mb-6" />
                <p
                  className="body-text text-[var(--gold)] !text-[0.9375rem] mb-2"
                  style={{ fontFamily: "var(--font-body), serif", fontStyle: "italic" }}
                >
                  Founder &amp; Managing Director
                </p>
                <p className="mono-text text-[0.6875rem] text-[var(--text-muted)] uppercase tracking-[0.12em]">
                  Admetus Lifesciences  ·  Founded 2020
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="space-y-5 max-w-[58ch]">
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Anudeep Deswal founded Admetus Lifesciences in 2020 with a focused
                  vision: build a precision softgel capsule manufacturing facility in
                  Haryana that meets international quality standards while creating
                  meaningful employment for women in surrounding rural villages. Both
                  goals run through every operational decision at the&nbsp;facility.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  Under his leadership, Admetus has built a portfolio of 10+
                  nutraceutical softgel formulations, achieved FSSAI, GMP, HACCP,
                  Halal, and WHO-GMP certifications, and established the facility as
                  a contract manufacturing partner for brand owners, distributors,
                  and importers across India and international&nbsp;markets.
                </p>
                <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  His direct involvement in formulation review, supplier qualification,
                  and quality protocol design ensures that every softgel leaving the
                  facility meets the standard he set when starting the&nbsp;company.
                </p>

                <div className="pt-4 grid grid-cols-3 gap-6 max-w-md">
                  <div>
                    <div className="text-2xl font-bold text-[var(--gold)]" style={{ fontFamily: "var(--font-display)" }}>
                      2020
                    </div>
                    <div className="mt-1 text-[0.6875rem] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                      Company Founded
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--gold)]" style={{ fontFamily: "var(--font-display)" }}>
                      10+
                    </div>
                    <div className="mt-1 text-[0.6875rem] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                      Formulations
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--gold)]" style={{ fontFamily: "var(--font-display)" }}>
                      05
                    </div>
                    <div className="mt-1 text-[0.6875rem] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                      Certifications
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Credibility Statistics */}
      <section className="py-12 border-y border-[var(--border-subtle)]">
        <div className="max-w-[1400px] mx-auto px-[var(--gutter)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-[var(--gold)]" style={{ fontFamily: "var(--font-display)" }}>05</div>
              <div className="mt-1 text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">International Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--gold)]" style={{ fontFamily: "var(--font-display)" }}>100%</div>
              <div className="mt-1 text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">Batch Testing Coverage</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--gold)]" style={{ fontFamily: "var(--font-display)" }}>07</div>
              <div className="mt-1 text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">Precision Formulations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--gold)]" style={{ fontFamily: "var(--font-display)" }}>100%</div>
              <div className="mt-1 text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">Export Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <SectionReveal>
              <div className="value-row p-8 md:p-10 border border-[var(--border-subtle)]">
                <span className="label-text text-[var(--gold)] mb-4 block">MISSION</span>
                <h3 className="heading-2 text-[var(--foreground)] uppercase mt-6 mb-5">
                  Our Mission
                </h3>
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  To manufacture world-class softgel capsules that enhance
                  healthcare outcomes globally — through precision formulation,
                  rigorous quality control, and reliable delivery to our B2B&nbsp;partners.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.08}>
              <div className="value-row p-8 md:p-10 border border-[var(--border-subtle)]">
                <span className="label-text text-[var(--gold)] mb-4 block">VISION</span>
                <h3 className="heading-2 text-[var(--foreground)] uppercase mt-6 mb-5">
                  Our Vision
                </h3>
                <p className="body-text text-[var(--text-cream)] max-w-[52ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  To become a globally recognized softgel capsule manufacturing
                  partner — trusted by international brands, importers, and
                  distributors for our commitment to quality, innovation, and&nbsp;reliability.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Social Cause */}
      <section className="py-20 bg-[var(--bg-black)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
            <SectionReveal>
              <div className="aspect-[4/3] overflow-hidden border border-[var(--border-subtle)] img-warm-overlay relative">
                <img
                  src="/images/facility/capsule-drying-women.jpg"
                  width={1000}
                  height={750}
                  alt="Women from Village Anta and surrounding villages of Safidon employed at the Admetus Lifesciences manufacturing facility"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div>
                <span className="label-text text-[var(--gold)] mb-6 block">SOCIAL CAUSE</span>
                <h2 className="display-section text-[var(--foreground)] mt-4 mb-8">
                  EMPOWERING<br />RURAL WOMEN
                </h2>
                <div className="space-y-5 max-w-[58ch]">
                  <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                    Our facility runs on a workforce that is almost entirely
                    women from <strong className="text-[var(--foreground)]">Village Anta</strong> and the
                    neighbouring villages of <strong className="text-[var(--foreground)]">Safidon</strong>.
                    Every softgel that leaves Admetus is the work of hands that
                    have found dignity, livelihood, and independence on our&nbsp;floor.
                  </p>
                  <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                    We believe quality manufacturing and rural development are
                    not separate goals. By creating skilled employment
                    opportunities for rural women &mdash; in encapsulation,
                    quality control, packing, and dispatch &mdash; we&rsquo;re building
                    something more than a supply chain. We&rsquo;re building a&nbsp;community.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
                  <div>
                    <div className="text-2xl font-bold text-[var(--gold)]" style={{ fontFamily: "var(--font-display)" }}>90%+</div>
                    <div className="mt-1 text-[0.6875rem] uppercase tracking-[0.1em] text-[var(--text-muted)]">Women Workforce</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--gold)]" style={{ fontFamily: "var(--font-display)" }}>Local</div>
                    <div className="mt-1 text-[0.6875rem] uppercase tracking-[0.1em] text-[var(--text-muted)]">Hiring Priority</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--gold)]" style={{ fontFamily: "var(--font-display)" }}>Skilled</div>
                    <div className="mt-1 text-[0.6875rem] uppercase tracking-[0.1em] text-[var(--text-muted)]">On-Site Training</div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[var(--bg-black)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)] mb-8 md:mb-10 block">Our Values</span>
            <h2 className="display-section text-[var(--foreground)] mt-6 md:mt-8 mb-12 md:mb-16">
              WHAT SETS US APART
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {[
              { title: "Quality First", desc: "Every product meets international quality and safety standards." },
              {
                title: "Certified Facility",
                desc: (
                  <span className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <span className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[var(--foreground)]">FSSAI</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[var(--foreground)]">GMP</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[var(--foreground)]">HACCP</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[var(--foreground)]">Halal</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[var(--foreground)]">WHO-GMP</span>
                    </span>
                    <span className="text-[var(--text-muted)]">certified operations.</span>
                  </span>
                ),
              },
              { title: "B2B Focus", desc: "Built for brand owners, distributors, and international buyers." },
              { title: "Timely Delivery", desc: "Reliable production schedules with on-time dispatch commitment." },
            ].map((value, i) => (
              <SectionReveal key={value.title} delay={i * 0.06}>
                <div className="value-row py-6 border-t border-[var(--border-subtle)] flex items-start gap-5">
                  <span className="mono-text text-[0.5rem] text-[var(--text-muted)] opacity-50 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{value.title}</h3>
                    <p className="body-text text-[var(--text-muted)] max-w-[52ch]">{value.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[var(--bg-charcoal)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <h2
              className="display-section text-[var(--foreground)] mb-8 md:mb-10"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", wordSpacing: "0.25em" }}
            >
              START YOUR SOFTGEL PROJECT
            </h2>
            <p className="body-text text-[var(--text-muted)] max-w-[52ch]">
              Whether you are a brand owner developing a new product line, a
              distributor seeking reliable supply, or an international buyer
              exploring manufacturing partnerships — our team is ready to
              discuss your&nbsp;requirements.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact/"
                className="btn-editorial inline-flex items-center gap-3 px-7 py-3 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Talk to Our Team
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/manufacturing/"
                className="btn-editorial inline-flex items-center gap-3 px-7 py-3 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--gold)] border border-[var(--gold)]/30 hover:bg-[var(--gold)]/[0.06]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                View Our Facility
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
