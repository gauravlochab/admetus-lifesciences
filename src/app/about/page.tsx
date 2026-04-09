"use client";

import Link from "next/link";
import { ArrowRight, Target, Eye, Shield, Award, Users, Clock } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end pb-16 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1563213126-a4273aed2016?w=1920&h=1080&fit=crop"
          alt="Pharmaceutical facility"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/30" />
        <div className="relative mx-auto max-w-[1400px] w-full px-[clamp(1.5rem,4vw,4rem)]">
          <span className="label-text text-[var(--gold)]">About Us</span>
          <h1
            className="mt-4 text-[var(--text-white)] uppercase"
            style={{
              fontFamily: "var(--font-literata), Georgia, serif",
              fontSize: "clamp(3.5rem, 7vw, 7rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
            }}
          >
            A PASSION FOR
            <br />
            <span className="text-[var(--gold)]">BETTER HEALTHCARE</span>
          </h1>
          <p className="mt-6 text-[1.25rem] text-[var(--text-cream)] max-w-2xl leading-[1.7]">
            Admetus Lifesciences is a specialized nutraceutical manufacturing
            company based in Haryana, India — focused on producing high-quality
            softgel capsules that meet international standards.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-[clamp(4rem,8vw,8rem)] bg-[var(--bg-black)]">
        <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,4rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div className="space-y-6">
                <p className="text-[1rem] text-[var(--text-cream)] leading-[1.7]">
                  Admetus Lifesciences has built a reputation for excellence in
                  the manufacturing and distribution of softgel capsules. Our
                  state-of-the-art production facility is designed to enhance the
                  absorption and bioavailability of active ingredients, ensuring
                  maximum therapeutic effectiveness in every capsule.
                </p>
                <p className="text-[1rem] text-[var(--text-cream)] leading-[1.7]">
                  We place great emphasis on quality assurance and regulatory
                  compliance. Our team follows stringent quality control processes
                  at every stage of manufacturing to ensure that our softgel
                  capsules meet international standards and customer expectations.
                </p>
                <p className="text-[1rem] text-[var(--text-cream)] leading-[1.7]">
                  Our supplements are supplied to hospitals, retailers, and
                  distributors across the country and beyond. We deliver within
                  the assured time frame, maintaining reliability that our
                  partners count on.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="aspect-[4/3] overflow-hidden border border-white/[0.06]">
                <img
                  src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&h=600&fit=crop"
                  alt="Manufacturing facility interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-[clamp(4rem,8vw,8rem)] bg-[var(--bg-charcoal)] border-y border-white/[0.06]">
        <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,4rem)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SectionReveal>
              <div className="p-8 bg-[var(--bg-warm-dark)] border border-white/[0.06] h-full">
                <Target size={28} className="text-[var(--gold)] mb-6" />
                <h3
                  className="text-[var(--text-white)] uppercase text-xl"
                  style={{ fontFamily: "var(--font-literata), Georgia, serif" }}
                >
                  Our Mission
                </h3>
                <p className="mt-4 text-[1rem] text-[var(--text-cream)] leading-[1.7]">
                  To manufacture world-class softgel capsules that enhance
                  healthcare outcomes globally — through precision formulation,
                  rigorous quality control, and reliable delivery to our B2B
                  partners.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div className="p-8 bg-[var(--bg-warm-dark)] border border-white/[0.06] h-full">
                <Eye size={28} className="text-[var(--gold)] mb-6" />
                <h3
                  className="text-[var(--text-white)] uppercase text-xl"
                  style={{ fontFamily: "var(--font-literata), Georgia, serif" }}
                >
                  Our Vision
                </h3>
                <p className="mt-4 text-[1rem] text-[var(--text-cream)] leading-[1.7]">
                  To become a globally recognized softgel capsule manufacturing
                  partner — trusted by international brands, importers, and
                  distributors for our commitment to quality, innovation, and
                  reliability.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-[clamp(4rem,8vw,8rem)] bg-[var(--bg-black)]">
        <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,4rem)]">
          <SectionReveal>
            <span className="label-text text-[var(--gold)]">Our Values</span>
            <h2
              className="mt-4 text-[var(--text-white)] uppercase mb-12"
              style={{
                fontFamily: "var(--font-literata), Georgia, serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: 1.1,
              }}
            >
              WHAT SETS US APART
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Quality First", desc: "Every product meets international quality and safety standards." },
              { icon: Award, title: "Certified Facility", desc: "FSSAI, GMP, HACCP, Halal, and WHO-GMP certified operations." },
              { icon: Users, title: "B2B Focus", desc: "Built for brand owners, distributors, and international buyers." },
              { icon: Clock, title: "Timely Delivery", desc: "Reliable production schedules with on-time dispatch commitment." },
            ].map((value, i) => (
              <SectionReveal key={value.title} delay={i * 0.1}>
                <div className="p-6 bg-[var(--bg-charcoal)] border border-white/[0.06] h-full">
                  <value.icon size={24} className="text-[var(--gold)] mb-4" />
                  <h3 className="text-[1rem] font-semibold text-[var(--text-white)]">{value.title}</h3>
                  <p className="mt-2 text-[0.875rem] text-[var(--text-muted)]">{value.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[clamp(4rem,8vw,8rem)] bg-[var(--bg-charcoal)] text-center">
        <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,4rem)]">
          <SectionReveal>
            <h2
              className="text-[var(--text-white)] uppercase"
              style={{
                fontFamily: "var(--font-literata), Georgia, serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: 1.1,
              }}
            >
              PARTNER WITH <span className="text-[var(--gold)]">ADMETUS</span>
            </h2>
            <p className="mt-4 text-[1rem] text-[var(--text-muted)] max-w-xl mx-auto">
              Whether you are a brand owner, distributor, or international buyer
              — we are ready to discuss your requirements.
            </p>
            <Link
              href="/contact/"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-[0.05em] uppercase text-[#0A0A0A] bg-[var(--gold)] hover:bg-[#E2CC7A] transition-colors duration-300"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
