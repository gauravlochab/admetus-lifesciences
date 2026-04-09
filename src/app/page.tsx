"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Factory,
  Globe,
  Pill,
  Package,
  Truck,
  CheckCircle,
} from "lucide-react";
import { products } from "@/data/products";

/* ═══════════════ Section 1: HERO ═══════════════ */
function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    async function init() {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".hero-label", { y: 30, opacity: 0, duration: 0.6 }, 0);
        tl.from(".hero-line", { y: 80, opacity: 0, duration: 0.8, stagger: 0.15 }, 0.2);
        tl.from(".hero-sub", { y: 30, opacity: 0, duration: 0.6 }, 0.8);
        tl.from(".hero-cta", { y: 30, opacity: 0, duration: 0.6 }, 1.0);
      }, sectionRef);
    }
    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-end pb-[clamp(4rem,10vh,8rem)] overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920&h=1080&fit=crop"
          alt="Softgel capsules"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ animation: "ken-burns 20s ease-in-out infinite alternate" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-[clamp(1.5rem,4vw,4rem)]">
        {/* Certification label */}
        <div className="hero-label mb-8">
          <div className="flex items-center gap-3 flex-wrap">
            {["FSSAI", "GMP", "HACCP", "HALAL", "WHO-GMP"].map((cert, i) => (
              <span key={cert} className="flex items-center gap-3">
                <span className="text-[0.75rem] font-medium tracking-[0.15em] text-[#C8A951]">
                  {cert}
                </span>
                {i < 4 && <span className="text-[#8A7B3E]">|</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Headline */}
        <div>
          {["PRECISION", "SOFTGEL", "CAPSULES"].map((word) => (
            <div
              key={word}
              className="hero-line display-hero text-[#FAFAFA] overflow-hidden"
              style={{ fontFamily: "var(--font-literata), Georgia, serif" }}
            >
              {word}
            </div>
          ))}
        </div>

        {/* Subhead */}
        <p className="hero-sub mt-8 text-[1.25rem] leading-[1.7] text-[#E8E0D0] max-w-[500px]">
          Contract manufacturing & private label nutraceuticals from India.
        </p>

        {/* CTAs */}
        <div className="hero-cta mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-[0.05em] uppercase text-[#0A0A0A] bg-[#C8A951] hover:bg-[#E2CC7A] transition-colors duration-300"
          >
            Request a Quote
          </Link>
          <Link
            href="/products/"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-[0.05em] uppercase text-[#FAFAFA] border border-[#FAFAFA]/30 hover:bg-[#FAFAFA]/5 transition-colors duration-300"
          >
            Explore Products
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute top-8 right-8 hidden lg:flex flex-col items-center gap-2 text-[#8A8274]">
        <span className="text-[0.65rem] tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#8A8274] to-transparent" />
      </div>
    </section>
  );
}

/* ═══════════════ Section 2: TRUST BAR ═══════════════ */
function TrustBar() {
  const certs = [
    { name: "FSSAI", desc: "Food Safety Standards" },
    { name: "GMP", desc: "Good Manufacturing Practice" },
    { name: "HACCP", desc: "Hazard Analysis & CCP" },
    { name: "Halal", desc: "Halal Certified" },
    { name: "WHO-GMP", desc: "WHO Standards" },
  ];

  return (
    <section className="py-10 bg-[#141414] border-y border-white/[0.06]">
      <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,4rem)]">
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {certs.map((cert) => (
            <div
              key={cert.name}
              className="flex flex-col items-center gap-2 group cursor-default"
            >
              <Shield
                size={20}
                className="text-[#8A8274] group-hover:text-[#0097A7] transition-colors duration-300"
              />
              <span className="text-[0.875rem] font-semibold text-[#FAFAFA] tracking-wider">
                {cert.name}
              </span>
              <span className="text-[0.65rem] tracking-[0.1em] uppercase text-[#8A8274]">
                {cert.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ Section 3: MANIFESTO ═══════════════ */
function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    async function init() {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const lines = sectionRef.current?.querySelectorAll(".manifesto-line") ?? [];
      const body = sectionRef.current?.querySelector(".manifesto-body");

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=300%",
            pin: true,
            scrub: 1,
          },
        });

        lines.forEach((line, i) => {
          tl.fromTo(
            line,
            { opacity: 0.15, y: 20 },
            { opacity: 1, y: 0, duration: 1 },
            i * 0.8
          );
        });

        if (body) {
          tl.fromTo(body, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, lines.length * 0.8);
        }
      }, sectionRef);
    }
    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A]"
    >
      <div className="text-center max-w-[1000px] px-[clamp(1.5rem,4vw,4rem)]">
        <div>
          <div
            className="manifesto-line display-section text-[#FAFAFA]"
            style={{ fontFamily: "var(--font-literata), Georgia, serif", opacity: 0.15 }}
          >
            WE DON&apos;T JUST MANUFACTURE.
          </div>
          <div
            className="manifesto-line display-section mt-2"
            style={{ fontFamily: "var(--font-literata), Georgia, serif", opacity: 0.15 }}
          >
            WE <span className="text-[#C8A951]">ENGINEER</span> WELLNESS
          </div>
          <div
            className="manifesto-line display-section mt-2"
            style={{ fontFamily: "var(--font-literata), Georgia, serif", opacity: 0.15 }}
          >
            AT <span className="text-[#C8A951]">MOLECULAR PRECISION</span>.
          </div>
        </div>

        <p className="manifesto-body mt-12 text-[1.25rem] leading-[1.7] text-[#E8E0D0] max-w-[700px] mx-auto" style={{ opacity: 0 }}>
          Based in Haryana, India — Admetus Lifesciences is a specialized softgel
          capsule manufacturer built on advanced encapsulation technology and
          uncompromising quality control.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════ Section 4: STATS ═══════════════ */
function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const stats = [
    { value: 7, suffix: "+", label: "Product Lines" },
    { value: 5, suffix: "", label: "International Certifications" },
    { value: 100, suffix: "M+", label: "Capsules Annual Capacity" },
    { value: 10, suffix: "+", label: "Years of Excellence" },
  ];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const start = Date.now();
          const dur = 2000;
          function tick() {
            const p = Math.min((Date.now() - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setCounts(stats.map((s) => Math.floor(eased * s.value)));
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center bg-[#1A1710]">
      <div className="mx-auto max-w-[1400px] w-full px-[clamp(1.5rem,4vw,4rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 min-h-[70vh]">
          {/* Left: Image */}
          <div className="lg:col-span-3 relative overflow-hidden min-h-[50vh] lg:min-h-0">
            <img
              src="https://images.unsplash.com/photo-1563213126-a4273aed2016?w=1200&h=800&fit=crop"
              alt="Pharmaceutical manufacturing facility"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0A0A0A]/20" />
          </div>

          {/* Right: Stats */}
          <div className="lg:col-span-2 bg-[#141414] p-[clamp(2rem,4vw,4rem)] flex flex-col justify-center">
            <span className="label-text text-[#C8A951] mb-8">By the Numbers</span>
            <div className="space-y-8">
              {stats.map((stat, i) => (
                <div key={stat.label}>
                  <div
                    className="text-[#FAFAFA]"
                    style={{
                      fontFamily: "var(--font-literata), Georgia, serif",
                      fontSize: "clamp(3rem, 6vw, 5rem)",
                      lineHeight: 1,
                    }}
                  >
                    {counts[i]}{stat.suffix}
                  </div>
                  <p className="text-[0.875rem] text-[#8A8274] mt-1">{stat.label}</p>
                  {i < stats.length - 1 && (
                    <div className="h-px bg-[#C8A951]/20 mt-6" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ Section 5: PRODUCT SHOWCASE ═══════════════ */
function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    async function init() {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const container = cardsRef.current;
      if (!container) return;

      ctx = gsap.context(() => {
        const totalScroll = container.scrollWidth - window.innerWidth;

        gsap.to(container, {
          x: () => -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${totalScroll}`,
            pin: true,
            scrub: 1,
            onUpdate: (self) => {
              const idx = Math.min(
                Math.floor(self.progress * products.length),
                products.length - 1
              );
              setActiveIndex(idx);
            },
          },
        });
      }, sectionRef);
    }
    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-[#0A0A0A] overflow-hidden">
      <div className="flex h-screen">
        {/* Fixed left panel */}
        <div className="hidden lg:flex flex-col justify-center w-[350px] shrink-0 p-[clamp(2rem,4vw,4rem)] z-10">
          <span className="label-text text-[#C8A951]">Our Products</span>
          <h2
            className="mt-4 display-section text-[#FAFAFA]"
            style={{ fontFamily: "var(--font-literata), Georgia, serif" }}
          >
            THE
            <br />
            PORTFOLIO
          </h2>
          <p className="mt-4 text-[1rem] text-[#E8E0D0] leading-relaxed">
            7 precision-formulated softgel capsules.
          </p>
          <p className="mt-8 font-mono text-[0.875rem] text-[#8A8274]">
            {String(activeIndex + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
          </p>
        </div>

        {/* Scrolling cards */}
        <div
          ref={cardsRef}
          className="flex items-center gap-8 pl-8 lg:pl-0 pr-[clamp(2rem,4vw,4rem)]"
        >
          {/* Mobile title card */}
          <div className="lg:hidden shrink-0 w-[80vw] flex flex-col justify-center">
            <span className="label-text text-[#C8A951]">Our Products</span>
            <h2
              className="mt-4 text-[#FAFAFA]"
              style={{
                fontFamily: "var(--font-literata), Georgia, serif",
                fontSize: "clamp(3rem, 8vw, 5rem)",
                lineHeight: 0.95,
                textTransform: "uppercase",
              }}
            >
              THE PORTFOLIO
            </h2>
          </div>

          {products.map((product) => (
            <div
              key={product.slug}
              className="shrink-0 w-[60vw] lg:w-[50vw] h-[80vh] rounded-2xl overflow-hidden relative group"
              style={{
                background: `linear-gradient(135deg, ${product.color}10, #141414)`,
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="absolute inset-0 flex flex-col justify-end p-[clamp(1.5rem,3vw,3rem)]">
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
                  className="text-[#FAFAFA] uppercase"
                  style={{
                    fontFamily: "var(--font-literata), Georgia, serif",
                    fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                    lineHeight: 1.1,
                  }}
                >
                  {product.name}
                </h3>
                <p className="mt-2 text-[#C8A951] text-[1rem]">{product.tagline}</p>
                <p className="mt-3 text-[0.875rem] text-[#8A8274] line-clamp-2 max-w-md">
                  {product.ingredients.slice(0, 3).join(", ")}
                </p>

                <Link
                  href={`/products/${product.slug}/`}
                  className="mt-6 inline-flex items-center gap-2 text-[0.875rem] text-[#C8A951] hover:text-[#E2CC7A] transition-colors"
                >
                  View Details
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ Section 6: MANUFACTURING PROCESS ═══════════════ */
function ManufacturingProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { num: "01", title: "RAW MATERIAL SOURCING", body: "Globally sourced ingredients, each tested for purity before entering our facility." },
    { num: "02", title: "PRECISION FORMULATION", body: "Batch formulation following exact specifications for optimal bioavailability." },
    { num: "03", title: "ENCAPSULATION", body: "ARBES SGX-806P encapsulation line producing precision-engineered softgel capsules." },
    { num: "04", title: "CONTROLLED DRYING", body: "Temperature and humidity controlled drying for consistent capsule integrity." },
    { num: "05", title: "QUALITY INSPECTION", body: "Multi-point quality control ensuring every capsule meets international standards." },
    { num: "06", title: "BLISTER PACKING", body: "Elmach EPI 2000 blister machine for tamper-evident, export-ready packaging." },
    { num: "07", title: "DISPATCH", body: "Export-ready packaging with full documentation for international markets." },
  ];

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    async function init() {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${steps.length * 100}%`,
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            const idx = Math.min(
              Math.floor(self.progress * steps.length),
              steps.length - 1
            );
            setActiveStep(idx);
          },
        });
      }, sectionRef);
    }
    init();
    return () => { ctx?.revert(); };
  }, [steps.length]);

  const step = steps[activeStep];

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-[#141414] flex">
      {/* Left: Image area */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&h=800&fit=crop"
          alt="Pharmaceutical laboratory"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="text-[#FAFAFA]/10"
            style={{
              fontFamily: "var(--font-literata), Georgia, serif",
              fontSize: "clamp(10rem, 20vw, 18rem)",
              lineHeight: 0.85,
            }}
          >
            {step.num}
          </div>
        </div>
      </div>

      {/* Right: Step content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-[clamp(2rem,4vw,4rem)] bg-[#1A1710]">
        <span className="label-text text-[#C8A951] mb-8">Manufacturing Process</span>

        {/* Mobile step number */}
        <div
          className="lg:hidden text-[#C8A951]/15 mb-4"
          style={{
            fontFamily: "var(--font-literata), Georgia, serif",
            fontSize: "8rem",
            lineHeight: 0.85,
          }}
        >
          {step.num}
        </div>

        <h2
          className="text-[#FAFAFA] uppercase"
          style={{
            fontFamily: "var(--font-literata), Georgia, serif",
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            lineHeight: 1.2,
          }}
        >
          {step.title}
        </h2>
        <p className="mt-4 text-[1.25rem] text-[#E8E0D0] leading-[1.7] max-w-lg">
          {step.body}
        </p>

        {/* Step dots */}
        <div className="mt-12 flex items-center gap-3">
          {steps.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeStep ? "bg-[#C8A951] scale-150" : "bg-[#8A8274]/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop step indicator */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4">
        {steps.map((s, i) => (
          <div
            key={i}
            className={`text-[0.65rem] font-mono transition-all duration-300 ${
              i === activeStep ? "text-[#C8A951]" : "text-[#8A8274]/40"
            }`}
          >
            {s.num}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════ Section 7: FACILITY ═══════════════ */
function Facility() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    async function init() {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const bg = sectionRef.current?.querySelector(".facility-bg");
      if (!bg) return;

      ctx = gsap.context(() => {
        gsap.to(bg, {
          y: "-15%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }, sectionRef);
    }
    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
    >
      <div className="facility-bg absolute inset-0" style={{ height: "130%", top: "-15%" }}>
        <img
          src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1920&h=1080&fit=crop"
          alt="Manufacturing facility"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />

      <div className="absolute bottom-[clamp(2rem,4vw,4rem)] left-[clamp(1.5rem,4vw,4rem)] z-10">
        <span className="label-text text-[#C8A951]">Village Anta, Haryana, India</span>
        <p className="mt-2 text-[0.875rem] text-[#E8E0D0]">
          State-of-the-art manufacturing facility
        </p>
      </div>
    </section>
  );
}

/* ═══════════════ Section 8: WHY CHOOSE US ═══════════════ */
function WhyChooseUs() {
  const cards = [
    { icon: Shield, title: "QUALITY-DRIVEN", desc: "FSSAI, GMP, HACCP, Halal, WHO-GMP certified." },
    { icon: Factory, title: "ADVANCED MACHINERY", desc: "ARBES SGX-806P & Elmach EPI 2000 lines." },
    { icon: Pill, title: "SOFTGEL SPECIALISTS", desc: "Dedicated nutraceutical softgel expertise." },
    { icon: Globe, title: "GLOBAL EXPORT", desc: "Export documentation & international packaging." },
    { icon: Package, title: "PRIVATE LABEL", desc: "Custom branding & formulation support." },
    { icon: Truck, title: "RELIABLE DELIVERY", desc: "Consistent schedules, committed timelines." },
  ];

  return (
    <section className="py-[clamp(4rem,8vw,12rem)] bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,4rem)]">
        <span className="label-text text-[#C8A951]">Why Choose Us</span>
        <h2
          className="mt-4 display-section text-[#FAFAFA] mb-16"
          style={{ fontFamily: "var(--font-literata), Georgia, serif" }}
        >
          THE ADVANTAGES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="relative group overflow-hidden rounded-2xl bg-[#141414] border border-white/[0.06] p-8 min-h-[300px] flex flex-col justify-end hover:border-[#C8A951]/20 transition-all duration-500"
            >
              <card.icon size={24} className="text-[#C8A951] mb-4" />
              <h3
                className="text-[#FAFAFA] uppercase text-[1.25rem]"
                style={{
                  fontFamily: "var(--font-literata), Georgia, serif",
                  lineHeight: 1.2,
                }}
              >
                {card.title}
              </h3>
              <p className="mt-2 text-[0.875rem] text-[#E8E0D0]">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ Section 9: CONTRACT MANUFACTURING ═══════════════ */
function ContractCTA() {
  const services = [
    "Custom Formulation",
    "Private Label Packaging",
    "Third-Party Manufacturing",
    "Bulk Softgel Supply",
    "Export Documentation",
  ];

  return (
    <section className="min-h-screen flex bg-[#1A1710]">
      {/* Left: Image */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop"
          alt="Pharmaceutical partnership"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/30" />
      </div>

      {/* Right: Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-[clamp(2rem,4vw,4rem)] bg-[#141414]">
        <span className="label-text text-[#C8A951]">Contract Manufacturing</span>

        <h2
          className="mt-6 text-[#FAFAFA]"
          style={{
            fontFamily: "var(--font-literata), Georgia, serif",
            fontSize: "clamp(3rem, 6vw, 5rem)",
            lineHeight: 0.95,
            textTransform: "uppercase",
          }}
        >
          YOUR BRAND.
          <br />
          OUR SCIENCE.
        </h2>

        <p className="mt-6 text-[1.25rem] leading-[1.7] text-[#E8E0D0] max-w-lg">
          From custom formulation and private label packaging to bulk supply —
          we partner with brands, importers, and distributors worldwide.
        </p>

        <ul className="mt-8 space-y-3">
          {services.map((s) => (
            <li key={s} className="flex items-center gap-3 text-[1rem] text-[#E8E0D0]">
              <span className="w-4 h-px bg-[#C8A951]" />
              {s}
            </li>
          ))}
        </ul>

        <Link
          href="/contact/"
          className="mt-10 inline-flex self-start items-center gap-2 px-8 py-4 text-sm font-semibold tracking-[0.05em] uppercase text-[#0A0A0A] bg-[#C8A951] hover:bg-[#E2CC7A] transition-colors duration-300"
        >
          Discuss Your Project
        </Link>
      </div>
    </section>
  );
}

/* ═══════════════ Section 10: EXPORT ═══════════════ */
function ExportSection() {
  const capLeft = [
    "Export-oriented facility",
    "International packaging standards",
    "Multi-market regulatory awareness",
  ];
  const capRight = [
    "Documentation for customs",
    "MOQ-based flexible pricing",
    "Dedicated export support",
  ];

  return (
    <section className="py-[clamp(4rem,8vw,12rem)] bg-[#0A0A0A]">
      <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,4rem)] text-center">
        <span className="label-text text-[#C8A951]">International Markets</span>
        <h2
          className="mt-6 display-section text-[#FAFAFA]"
          style={{ fontFamily: "var(--font-literata), Georgia, serif" }}
        >
          FROM INDIA
          <br />
          TO THE WORLD
        </h2>

        <div className="h-px bg-[#C8A951]/30 my-12 w-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 max-w-3xl mx-auto text-left">
          {capLeft.map((cap) => (
            <div key={cap} className="flex items-center gap-3 text-[1rem] text-[#E8E0D0]">
              <CheckCircle size={16} className="text-[#C8A951] shrink-0" />
              {cap}
            </div>
          ))}
          {capRight.map((cap) => (
            <div key={cap} className="flex items-center gap-3 text-[1rem] text-[#E8E0D0]">
              <CheckCircle size={16} className="text-[#C8A951] shrink-0" />
              {cap}
            </div>
          ))}
        </div>

        <Link
          href="/export/"
          className="mt-12 inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-[0.05em] uppercase text-[#C8A951] border border-[#C8A951]/30 hover:bg-[#C8A951]/10 transition-colors duration-300"
        >
          Enquire for Export
        </Link>
      </div>
    </section>
  );
}

/* ═══════════════ Section 11: TESTIMONIAL ═══════════════ */
function Testimonial() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#1A1710] py-[clamp(4rem,8vw,12rem)]">
      <div className="mx-auto max-w-[900px] px-[clamp(1.5rem,4vw,4rem)] text-center">
        <p
          className="text-[#E8E0D0] italic"
          style={{
            fontFamily: "var(--font-literata), Georgia, serif",
            fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
            lineHeight: 1.3,
          }}
        >
          &ldquo;Admetus Lifesciences delivers consistent quality and reliable
          timelines — exactly what international buyers need from a manufacturing
          partner.&rdquo;
        </p>

        <p className="mt-8 text-[0.875rem] text-[#C8A951] tracking-[0.1em] uppercase">
          — Procurement Director, Nutraceutical Importer
        </p>

        <div className="mt-16 flex items-center justify-center gap-8 flex-wrap">
          {["FSSAI", "GMP", "HACCP", "Halal", "WHO-GMP"].map((cert) => (
            <span key={cert} className="text-[0.75rem] font-medium text-[#8A8274] tracking-[0.15em] uppercase">
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ Section 12: GRAND CLOSING CTA ═══════════════ */
function ClosingCTA() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0A0A0A] relative overflow-hidden">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,169,81,0.06),transparent_70%)]" />

      {/* Dots decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#C8A951]/20"
            style={{
              left: `${10 + (i * 7) % 80}%`,
              top: `${15 + (i * 13) % 70}%`,
              animation: `float-dot ${3 + (i % 3)}s ease-in-out ${i * 0.3}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-[800px] px-[clamp(1.5rem,4vw,4rem)]">
        <h2
          className="display-hero text-[#FAFAFA]"
          style={{ fontFamily: "var(--font-literata), Georgia, serif" }}
        >
          READY TO
          <br />
          MANUFACTURE?
        </h2>

        <p className="mt-8 text-[1.25rem] leading-[1.7] text-[#E8E0D0] max-w-[600px] mx-auto">
          Whether you need contract manufacturing, private label solutions, or
          export-ready softgel capsules.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-10 py-4 text-sm font-semibold tracking-[0.05em] uppercase text-[#0A0A0A] bg-[#C8A951] hover:bg-[#E2CC7A] transition-colors duration-300"
          >
            Request a Quote
          </Link>
          <a
            href="mailto:admetuslifesciences@gmail.com"
            className="inline-flex items-center gap-2 px-10 py-4 text-sm font-semibold tracking-[0.05em] uppercase text-[#FAFAFA] border border-[#FAFAFA]/30 hover:bg-[#FAFAFA]/5 transition-colors duration-300"
          >
            Email Us Directly
          </a>
        </div>

        <p className="mt-8 text-[0.75rem] text-[#8A8274] font-mono">
          admetuslifesciences@gmail.com
        </p>
      </div>
    </section>
  );
}

/* ═══════════════ PAGE ═══════════════ */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Manifesto />
      <Stats />
      <ProductShowcase />
      <ManufacturingProcess />
      <Facility />
      <WhyChooseUs />
      <ContractCTA />
      <ExportSection />
      <Testimonial />
      <ClosingCTA />
    </>
  );
}
