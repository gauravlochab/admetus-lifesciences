"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-12 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1563213126-a4273aed2016?w=1920&h=1080&fit=crop"
          alt="Admetus Lifesciences pharmaceutical manufacturing facility in Haryana, India"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.92), rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.25))" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.04), transparent 60%)" }} />
        <div className="relative mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)]">About Us</span>
          <h1 className="mt-3 display-section text-[var(--text-white)]">
            A PASSION FOR<br />BETTER HEALTHCARE
          </h1>
          <div className="gold-rule w-16 mt-4 mb-4" />
          <p className="body-large text-[var(--text-cream)] max-w-[58ch]">
            Admetus Lifesciences is a specialized nutraceutical manufacturing
            company based in Haryana, India -- focused on producing high-quality
            softgel capsules that meet international&nbsp;standards.
          </p>
        </div>
      </section>

      {/* Company Story -- asymmetric two-column */}
      <section className="py-20 bg-[var(--bg-black)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <SectionReveal>
              <div>
                <span className="label-text text-[var(--gold)] mb-4 block">OUR STORY</span>
                <div className="space-y-4 max-w-[58ch]">
                  <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                    Admetus Lifesciences has built a reputation for excellence in
                    the manufacturing and distribution of softgel capsules. Our
                    state-of-the-art production facility is designed to enhance the
                    absorption and bioavailability of active ingredients, ensuring
                    maximum therapeutic effectiveness in every&nbsp;capsule.
                  </p>
                  <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                    We place great emphasis on quality assurance and regulatory
                    compliance. Our team follows stringent quality control processes
                    at every stage of manufacturing to ensure that our softgel
                    capsules meet international standards and customer&nbsp;expectations.
                  </p>
                  <p className="body-text text-[var(--text-cream)]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                    Our supplements are supplied to hospitals, retailers, and
                    distributors across the country and beyond. We deliver within
                    the assured time frame, maintaining reliability that our
                    partners count&nbsp;on.
                  </p>
                </div>
                {/* Gold rule separator before image on mobile / visual connector */}
                <div className="h-px w-16 bg-[var(--gold)]/30 mt-8 lg:hidden" />
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="aspect-[4/3] overflow-hidden border border-[var(--border-subtle)] img-warm-overlay relative">
                <img
                  src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&h=600&fit=crop"
                  width={800}
                  height={600}
                  alt="Interior of softgel capsule manufacturing facility showing encapsulation equipment"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision -- stacked editorial, no icons */}
      <section className="py-20 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <SectionReveal>
              <div className="p-6 border border-[var(--border-subtle)] hover:-translate-y-px hover:border-[var(--gold)]/15 transition-all duration-200">
                <span className="mono-text text-[0.5rem] text-[var(--text-muted)] opacity-50 block mb-3">01</span>
                <span className="label-text text-[var(--gold)] mb-3 block">MISSION</span>
                <h3 className="heading-2 text-[var(--foreground)] uppercase mb-3">
                  Our Mission
                </h3>
                <p className="body-text text-[var(--text-cream)] max-w-[58ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  To manufacture world-class softgel capsules that enhance
                  healthcare outcomes globally -- through precision formulation,
                  rigorous quality control, and reliable delivery to our B2B&nbsp;partners.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.08}>
              <div className="p-6 border border-[var(--border-subtle)] hover:-translate-y-px hover:border-[var(--gold)]/15 transition-all duration-200">
                <span className="mono-text text-[0.5rem] text-[var(--text-muted)] opacity-50 block mb-3">02</span>
                <span className="label-text text-[var(--gold)] mb-3 block">VISION</span>
                <h3 className="heading-2 text-[var(--foreground)] uppercase mb-3">
                  Our Vision
                </h3>
                <p className="body-text text-[var(--text-cream)] max-w-[58ch]" style={{ fontSize: "0.9375rem", lineHeight: 1.65 }}>
                  To become a globally recognized softgel capsule manufacturing
                  partner -- trusted by international brands, importers, and
                  distributors for our commitment to quality, innovation, and&nbsp;reliability.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Values -- numbered list, not card grid with icons */}
      <section className="py-20 bg-[var(--bg-black)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Our Values</span>
            <h2 className="mt-3 display-section text-[var(--foreground)] mb-4">
              WHAT SETS US APART
            </h2>
            <div className="gold-rule w-16 mb-10" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
            {[
              { title: "Quality First", desc: "Every product meets international quality and safety standards." },
              { title: "Certified Facility", desc: "FSSAI, GMP, HACCP, Halal, and WHO-GMP certified operations." },
              { title: "B2B Focus", desc: "Built for brand owners, distributors, and international buyers." },
              { title: "Timely Delivery", desc: "Reliable production schedules with on-time dispatch commitment." },
            ].map((value, i) => (
              <SectionReveal key={value.title} delay={i * 0.06}>
                <div className="py-6 border-t border-[var(--border-subtle)] flex items-start gap-5 hover:-translate-y-px hover:border-[var(--gold)]/15 transition-all duration-200">
                  <span className="mono-text text-[0.5rem] text-[var(--text-muted)] opacity-50 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3 className="heading-2 text-[var(--foreground)]" style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}>{value.title}</h3>
                    <p className="body-text text-[var(--text-muted)] max-w-[58ch]">{value.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA -- left-aligned */}
      <section className="py-20 bg-[var(--bg-charcoal)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <SectionReveal>
            <h2 className="display-section text-[var(--foreground)]">
              PARTNER WITH&nbsp;ADMETUS
            </h2>
            <div className="gold-rule w-12 mt-4 mb-4" />
            <p className="body-text text-[var(--text-muted)] max-w-[58ch]">
              Whether you are a brand owner, distributor, or international buyer
              -- we are ready to discuss your&nbsp;requirements.
            </p>
            <Link
              href="/contact/"
              className="mt-8 inline-flex items-center gap-3 px-7 py-3 text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get in Touch
              <ArrowRight size={14} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
