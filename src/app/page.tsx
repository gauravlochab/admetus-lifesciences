"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";

/* Section 1: HERO */
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
        tl.from(".hero-label", { y: 30, opacity: 0, duration: 0.8 }, 0.3);
        tl.from(".hero-line", { y: 80, opacity: 0, duration: 0.8, stagger: 0.12 }, 0.5);
        tl.from(".hero-sub", { y: 30, opacity: 0, duration: 0.6 }, 0.9);
        tl.from(".hero-cta", { y: 30, opacity: 0, duration: 0.6 }, 1.1);
        tl.from(".hero-scroll", { opacity: 0, duration: 0.6 }, 2.0);
      }, sectionRef);
    }
    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920&h=1080&fit=crop"
          alt="Pharmaceutical softgel capsule production line"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ animation: "ken-burns 20s ease-in-out infinite alternate" }}
        />
        <div className="absolute inset-0" style={{ background: "rgba(10,10,10,0.65)" }} />
      </div>

      {/* Content -- left-aligned */}
      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-[var(--gutter)]">
        <div className="max-w-[var(--content-narrow)]">
          <div className="hero-label label-text text-[var(--gold)] mb-8">
            ADMETUS LIFESCIENCES
          </div>

          <div>
            {["PRECISION", "ENCAPSULATED"].map((word) => (
              <div
                key={word}
                className="hero-line display-hero text-[#FAFAFA]"
              >
                {word}
              </div>
            ))}
          </div>

          <p className="hero-sub mt-8 text-[1.25rem] leading-[1.7] text-[#E8E0D0] max-w-[500px]">
            India&apos;s advanced softgel manufacturing facility. Science-driven. Globally certified.
          </p>

          <div className="hero-cta mt-10">
            <Link
              href="/manufacturing/"
              className="inline-flex items-center gap-2 px-[var(--space-8)] py-[var(--space-4)] text-sm font-bold tracking-[0.1em] uppercase text-[var(--gold)] border-2 border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[#0A0A0A] transition-all duration-300"
            >
              Explore Our Facility
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator -- custom animation, not animate-pulse */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--text-muted)]">Scroll</span>
        <div
          className="w-px h-12 bg-gradient-to-b from-[var(--text-muted)] to-transparent origin-top"
          style={{ animation: "scroll-drift 3s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}

/* Section 2: CREDIBILITY STRIP -- no decorative icons, text-only editorial */
function CredibilityStrip() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    async function init() {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from(".cert-badge", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        });
      }, sectionRef);
    }
    init();
    return () => { ctx?.revert(); };
  }, []);

  const certs = [
    { name: "FSSAI", desc: "Food Safety Standards" },
    { name: "GMP", desc: "Good Manufacturing Practice" },
    { name: "HACCP", desc: "Hazard Analysis & CCP" },
    { name: "Halal", desc: "Halal Certified" },
    { name: "WHO-GMP", desc: "WHO Standards" },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
        <div className="flex flex-wrap items-start justify-between gap-8 md:gap-4">
          {certs.map((cert) => (
            <div
              key={cert.name}
              className="cert-badge flex flex-col gap-1"
            >
              <span className="text-[1.5rem] font-bold text-[#FAFAFA] tracking-tight">{cert.name}</span>
              <span className="text-[0.65rem] tracking-[0.1em] uppercase text-[var(--text-muted)]">
                {cert.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Section 3: MANIFESTO */
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
      const goldLine = sectionRef.current?.querySelector(".manifesto-gold-line");

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=400%",
            pin: true,
            scrub: 1,
          },
        });

        lines.forEach((line, i) => {
          tl.to(line, { opacity: 1, y: 0, duration: 1 }, i * 1);
        });

        if (goldLine) {
          tl.fromTo(goldLine, { scaleX: 0 }, { scaleX: 1, duration: 0.5 }, lines.length * 1);
        }
      }, sectionRef);
    }
    init();
    return () => { ctx?.revert(); };
  }, []);

  const lines = [
    "We don\u2019t just manufacture softgel capsules.",
    "We engineer precision at molecular scale.",
    "Every capsule carries a commitment to human health.",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-[var(--bg-warm-dark)]"
    >
      {/* Left-aligned for editorial feel */}
      <div className="max-w-[900px] px-[var(--gutter)] mx-auto lg:mx-0 lg:ml-[var(--gutter)]">
        <span className="label-text text-[var(--gold)] mb-12 block">OUR PHILOSOPHY</span>
        <div className="space-y-4">
          {lines.map((line) => (
            <p
              key={line}
              className="manifesto-line heading-1 text-[#FAFAFA]"
              style={{ opacity: 0.15, transform: "translateY(20px)" }}
            >
              {line}
            </p>
          ))}
        </div>
        <div
          className="manifesto-gold-line h-px bg-[var(--gold)] mt-16 w-48 origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </section>
  );
}

/* Section 4: SCALE & METRICS -- editorial narrative, not counter grid */
function ScaleMetrics() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    async function init() {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from(".scale-content > *", {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        });
      }, sectionRef);
    }
    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-[var(--space-24)] bg-[var(--bg-black)]">
      {/* Background facility image at low opacity */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1563213126-a4273aed2016?w=1920&h=1080&fit=crop"
          alt="Manufacturing facility"
          className="w-full h-full object-cover opacity-15"
        />
      </div>

      <div className="scale-content relative z-10 mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
        <span className="label-text text-[var(--gold)] mb-4 block">OUR FACILITY</span>
        <h2 className="display-section text-[#FAFAFA]">
          BUILT FOR<br />SCALE
        </h2>

        {/* Editorial narrative instead of big-number counter grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-12 lg:gap-16">
          <div className="max-w-lg">
            <p className="text-[1.25rem] leading-[1.7] text-[#E8E0D0]">
              Our Haryana facility produces over <span className="text-[#FAFAFA] font-semibold">50 million capsules annually</span> across
              7 precision-formulated product lines, each backed by 5 international certifications.
            </p>
            <p className="mt-6 text-[1rem] leading-[1.7] text-[var(--text-muted)]">
              State-of-the-art ARBES SGX-806P encapsulation line.
              Elmach EPI 2000 blister packaging.
              WHO-GMP certified facility in Haryana, India.
            </p>
          </div>

          {/* Vertical divider */}
          <div className="hidden lg:block bg-[var(--border-subtle)]" />

          <div className="flex flex-col gap-8">
            <div>
              <span className="label-text text-[var(--text-muted)]">Equipment</span>
              <p className="mt-2 text-[1rem] text-[#E8E0D0]">ARBES SGX-806P rotary die encapsulation, Elmach EPI 2000 blister sealing</p>
            </div>
            <div>
              <span className="label-text text-[var(--text-muted)]">Certifications</span>
              <p className="mt-2 text-[1rem] text-[#E8E0D0]">FSSAI, GMP, HACCP, Halal, WHO-GMP</p>
            </div>
            <div>
              <span className="label-text text-[var(--text-muted)]">Quality Control</span>
              <p className="mt-2 text-[1rem] text-[#E8E0D0]">100% batch inspection with full traceability documentation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Section 5: PRODUCTS -- Horizontal Scroll Gallery */
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
    <section ref={sectionRef} className="relative min-h-screen bg-[var(--bg-charcoal)] overflow-hidden">
      <div className="flex h-screen">
        {/* Fixed left panel */}
        <div className="hidden lg:flex flex-col justify-center w-[350px] shrink-0 p-[var(--gutter)] z-10">
          <span className="label-text text-[var(--gold)]">OUR PRODUCTS</span>
          <h2 className="mt-4 display-section text-[#FAFAFA]">
            FORMULATED<br />FOR LIFE
          </h2>
          <p className="mt-4 text-[1rem] text-[var(--text-cream)] leading-relaxed">
            7 precision-formulated softgel capsules.
          </p>
          <p className="mt-8 font-mono text-[0.875rem] text-[var(--text-muted)]">
            {String(activeIndex + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
          </p>
          <Link
            href="/products/"
            className="mt-6 inline-flex items-center gap-2 label-text text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors"
          >
            View All Products <ArrowRight size={14} />
          </Link>
        </div>

        {/* Scrolling cards -- sharp edges, asymmetric sizing */}
        <div
          ref={cardsRef}
          className="flex items-center gap-8 pl-8 lg:pl-0 pr-[var(--gutter)]"
        >
          {/* Mobile title card */}
          <div className="lg:hidden shrink-0 w-[80vw] flex flex-col justify-center">
            <span className="label-text text-[var(--gold)]">OUR PRODUCTS</span>
            <h2 className="mt-4 display-section text-[#FAFAFA]">
              FORMULATED FOR LIFE
            </h2>
          </div>

          {products.map((product, i) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}/`}
              className="shrink-0 overflow-hidden relative group block"
              style={{
                /* Alternate card sizes for asymmetry */
                width: i % 3 === 0 ? "440px" : i % 3 === 1 ? "380px" : "400px",
                height: i % 3 === 0 ? "520px" : i % 3 === 1 ? "480px" : "540px",
                background: `linear-gradient(135deg, ${product.color}10, var(--bg-charcoal))`,
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div className="absolute inset-0 flex flex-col justify-end p-[var(--space-6)]">
                <span
                  className="label-text mb-3"
                  style={{ color: "var(--teal)" }}
                >
                  {product.category}
                </span>
                <h3 className="heading-2 text-[#FAFAFA] uppercase">
                  {product.name}
                </h3>
                <p className="mt-2 text-[1rem] text-[var(--text-cream)]">{product.tagline}</p>
                <p className="mt-3 text-[0.875rem] text-[var(--text-muted)] line-clamp-2 max-w-md">
                  {product.ingredients.slice(0, 4).join(", ")}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 label-text text-[var(--gold)] group-hover:text-[var(--gold-light)] transition-colors">
                  View Details <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Section 6: MANUFACTURING PROCESS */
function ManufacturingProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { num: "01", title: "RAW MATERIAL SOURCING", body: "Pharmaceutical-grade ingredients sourced from certified global suppliers.", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&h=800&fit=crop" },
    { num: "02", title: "QUALITY TESTING", body: "Every batch undergoes rigorous incoming material analysis.", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=800&fit=crop" },
    { num: "03", title: "GELATIN PREPARATION", body: "Precision gelatin formulation for optimal capsule integrity.", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop" },
    { num: "04", title: "ENCAPSULATION", body: "ARBES SGX-806P rotary die process at controlled temperature.", image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1200&h=800&fit=crop" },
    { num: "05", title: "DRYING & TUMBLING", body: "Controlled-environment drying for consistent moisture content.", image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?w=1200&h=800&fit=crop" },
    { num: "06", title: "INSPECTION & SORTING", body: "Visual and automated defect detection, 100% inspection.", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&h=800&fit=crop" },
    { num: "07", title: "BLISTER PACKAGING", body: "Elmach EPI 2000 blister sealing with tamper-evident packaging.", image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&h=800&fit=crop" },
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
    <section ref={sectionRef} className="relative h-screen bg-[var(--bg-warm-dark)] flex">
      {/* Left 40%: content */}
      <div className="w-full lg:w-[40%] flex flex-col justify-center p-[var(--gutter)] relative">
        <span className="label-text text-[var(--gold)] mb-4">MANUFACTURING</span>
        <h2 className="display-section text-[#FAFAFA] mb-12">THE PROCESS</h2>

        {/* Progress line -- dots only, no rounded-full on containers */}
        <div className="hidden lg:flex flex-col gap-0 mb-8">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-center gap-3 py-2">
              <div
                className="w-1.5 h-1.5 transition-all duration-500"
                style={{
                  background: i === activeStep ? "var(--gold)" : i < activeStep ? "rgba(200,169,81,0.4)" : "rgba(154,146,133,0.2)",
                  transform: i === activeStep ? "scale(1.8)" : "scale(1)",
                }}
              />
              <span className={`text-[0.75rem] font-mono transition-all duration-300 ${
                i === activeStep ? "text-[var(--gold)]" : "text-[var(--text-muted)]/50"
              }`}>
                {s.num}
              </span>
              <span className={`text-[0.75rem] uppercase tracking-wider transition-all duration-300 ${
                i === activeStep ? "text-[#FAFAFA]" : "text-[var(--text-muted)]/30"
              }`}>
                {s.title}
              </span>
            </div>
          ))}
        </div>

        {/* Active step detail -- mobile */}
        <div className="lg:hidden">
          <div className="text-[var(--gold)]/20 mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "6rem", lineHeight: 0.85 }}>
            {step.num}
          </div>
          <h3 className="heading-1 text-[#FAFAFA] uppercase">{step.title}</h3>
          <p className="mt-4 text-[1.25rem] text-[var(--text-cream)] leading-[1.7]">{step.body}</p>
        </div>
      </div>

      {/* Right 60%: step image */}
      <div className="hidden lg:flex w-[60%] relative overflow-hidden">
        {steps.map((s, i) => (
          <div
            key={s.num}
            className="absolute inset-0 transition-all duration-700"
            style={{
              opacity: i === activeStep ? 1 : 0,
              transform: i === activeStep ? "scale(1)" : "scale(1.05)",
            }}
          >
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[var(--bg-black)]/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-[#FAFAFA]/10" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(8rem, 15vw, 14rem)", lineHeight: 0.85 }}>
                {step.num}
              </div>
            </div>
            <div className="absolute bottom-[var(--gutter)] left-[var(--gutter)] right-[var(--gutter)]">
              <h3 className="heading-1 text-[#FAFAFA] uppercase">{s.title}</h3>
              <p className="mt-3 text-[1.25rem] text-[#E8E0D0] leading-[1.7] max-w-lg">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Section 7: VISUAL BREAK */
function VisualBreak() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    async function init() {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const bg = sectionRef.current?.querySelector(".parallax-bg");
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
    <section ref={sectionRef} className="relative h-[70vh] overflow-hidden">
      <div className="parallax-bg absolute inset-0" style={{ height: "130%", top: "-15%" }}>
        <img
          src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1920&h=1080&fit=crop"
          alt="Admetus Lifesciences manufacturing facility"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/30" />
      <div className="absolute inset-0 flex items-end p-[var(--gutter)]">
        <span className="label-text text-[#FAFAFA]" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
          VILLAGE ANTA, HARYANA &mdash; EST. 2024
        </span>
      </div>
    </section>
  );
}

/* Section 8: DIFFERENTIATORS -- asymmetric layout, no icon decoration */
function Differentiators() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    async function init() {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from(".diff-card", {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        });
      }, sectionRef);
    }
    init();
    return () => { ctx?.revert(); };
  }, []);

  const cards = [
    {
      title: "Advanced Equipment",
      body: "ARBES SGX-806P encapsulation and Elmach EPI 2000 blister packaging \u2014 precision-engineered for consistency.",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=800&fit=crop",
    },
    {
      title: "End-to-End Quality",
      body: "From raw material testing to final product release \u2014 100% inspection at every stage.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=800&fit=crop",
    },
    {
      title: "Globally Certified",
      body: "FSSAI, GMP, HACCP, Halal, and WHO-GMP certified. Meeting the world\u2019s strictest standards.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=800&fit=crop",
    },
    {
      title: "Custom Formulations",
      body: "Private label and contract manufacturing with flexible MOQs and custom formulation capabilities.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&h=800&fit=crop",
    },
  ];

  return (
    <section ref={sectionRef} className="py-[var(--space-24)] bg-[var(--bg-charcoal)]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
        <span className="label-text text-[var(--gold)] mb-4 block">WHY ADMETUS</span>
        <h2 className="display-section text-[#FAFAFA] mb-16">
          THE ADMETUS<br />DIFFERENCE
        </h2>

        {/* Asymmetric grid: first card spans full width, rest in 3-col */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="diff-card md:col-span-2 relative overflow-hidden border border-[var(--border-subtle)] group min-h-[400px] flex flex-col justify-end"
          >
            <img
              src={cards[0].image}
              alt={cards[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.85)] via-[rgba(10,10,10,0.3)] to-transparent" />
            <div className="relative p-[var(--space-8)]">
              <h3 className="heading-1 text-[#FAFAFA]">{cards[0].title}</h3>
              <p className="mt-2 text-[1.125rem] text-[#E8E0D0] max-w-lg">{cards[0].body}</p>
            </div>
          </div>

          <div
            className="diff-card relative overflow-hidden border border-[var(--border-subtle)] group min-h-[400px] flex flex-col justify-end"
          >
            <img
              src={cards[1].image}
              alt={cards[1].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.85)] via-[rgba(10,10,10,0.3)] to-transparent" />
            <div className="relative p-[var(--space-6)]">
              <h3 className="heading-2 text-[#FAFAFA]">{cards[1].title}</h3>
              <p className="mt-2 text-[1rem] text-[#E8E0D0]">{cards[1].body}</p>
            </div>
          </div>

          <div
            className="diff-card relative overflow-hidden border border-[var(--border-subtle)] group min-h-[350px] flex flex-col justify-end"
          >
            <img
              src={cards[2].image}
              alt={cards[2].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.85)] via-[rgba(10,10,10,0.3)] to-transparent" />
            <div className="relative p-[var(--space-6)]">
              <h3 className="heading-2 text-[#FAFAFA]">{cards[2].title}</h3>
              <p className="mt-2 text-[1rem] text-[#E8E0D0]">{cards[2].body}</p>
            </div>
          </div>

          <div
            className="diff-card md:col-span-2 relative overflow-hidden border border-[var(--border-subtle)] group min-h-[350px] flex flex-col justify-end"
          >
            <img
              src={cards[3].image}
              alt={cards[3].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.85)] via-[rgba(10,10,10,0.3)] to-transparent" />
            <div className="relative p-[var(--space-8)]">
              <h3 className="heading-1 text-[#FAFAFA]">{cards[3].title}</h3>
              <p className="mt-2 text-[1.125rem] text-[#E8E0D0] max-w-lg">{cards[3].body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Section 9: CONTRACT MANUFACTURING */
function Partnership() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    async function init() {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from(".partnership-content > *", {
          x: 60,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        });
      }, sectionRef);
    }
    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex bg-[var(--bg-warm-dark)]">
      {/* Left: Image */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop"
          alt="Pharmaceutical partnership"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--bg-black)]/30" />
      </div>

      {/* Right: Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-[var(--gutter)]">
        <div className="partnership-content max-w-lg">
          <span className="label-text text-[var(--gold)]">PARTNER WITH US</span>
          <h2 className="mt-6 display-section text-[#FAFAFA]">
            YOUR BRAND.<br />OUR SCIENCE.
          </h2>
          <p className="mt-6 text-[1.25rem] leading-[1.7] text-[#E8E0D0]">
            From concept to shelf &mdash; turnkey private label softgel manufacturing.
          </p>
          <ul className="mt-8 space-y-3">
            {["Custom formulations", "Flexible MOQs", "Regulatory support", "Export documentation"].map((s) => (
              <li key={s} className="flex items-center gap-3 text-[1rem] text-[#E8E0D0]">
                <span className="w-4 h-px bg-[var(--gold)]" />
                {s}
              </li>
            ))}
          </ul>
          <Link
            href="/contract-manufacturing/"
            className="mt-10 inline-flex items-center gap-2 px-[var(--space-8)] py-[var(--space-4)] text-sm font-bold tracking-[0.1em] uppercase text-[var(--gold)] border-2 border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[#0A0A0A] transition-all duration-300"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
}

/* Section 10: GLOBAL REACH -- left-aligned, not centered */
function GlobalReach() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    async function init() {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from(".global-feature", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        });
      }, sectionRef);
    }
    init();
    return () => { ctx?.revert(); };
  }, []);

  const features = [
    { title: "Export Markets", desc: "Serving pharmaceutical markets across multiple international regions." },
    { title: "Regulatory Compliance", desc: "Documentation and certifications for seamless global market entry." },
    { title: "Logistics Support", desc: "Export packaging, freight coordination, and customs documentation." },
  ];

  return (
    <section ref={sectionRef} className="py-[var(--space-24)] bg-[var(--bg-black)]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16">
          {/* Left: heading + description */}
          <div>
            <span className="label-text text-[var(--gold)] mb-4 block">GLOBAL PRESENCE</span>
            <h2 className="display-section text-[#FAFAFA]">
              BEYOND<br />BORDERS
            </h2>
            <p className="mt-8 text-[1.25rem] leading-[1.7] text-[#E8E0D0] max-w-[500px]">
              Regulatory-compliant export capabilities serving pharmaceutical markets worldwide.
            </p>
            <Link
              href="/export/"
              className="mt-10 inline-flex items-center gap-2 px-[var(--space-8)] py-[var(--space-4)] text-sm font-bold tracking-[0.1em] uppercase text-[var(--gold)] border-2 border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[#0A0A0A] transition-all duration-300"
            >
              Explore Export Capabilities
            </Link>
          </div>

          {/* Right: features stacked */}
          <div className="flex flex-col justify-center gap-8">
            {features.map((f) => (
              <div key={f.title} className="global-feature py-6 border-t border-[var(--border-subtle)]">
                <h3 className="text-[1.25rem] font-bold text-[#FAFAFA] mb-2">{f.title}</h3>
                <p className="text-[0.875rem] text-[var(--text-muted)] max-w-md">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Section 11: TRUST QUOTE -- left-aligned editorial */
function TrustQuote() {
  return (
    <section className="py-[var(--space-24)] bg-[var(--bg-charcoal)] flex items-center min-h-[50vh]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
        <div className="max-w-[700px]">
          <div className="h-px bg-[var(--gold)]/30 w-16 mb-12" />

          <p className="heading-1 text-[#FAFAFA] italic leading-[1.3]">
            Quality is not a department. It is an agreement between the manufacturer and the consumer &mdash; a promise kept in every capsule we produce.
          </p>

          <p className="mt-8 label-text text-[var(--gold)]">
            ADMETUS LIFESCIENCES
          </p>
        </div>
      </div>
    </section>
  );
}

/* Section 12: CLOSING CTA */
function ClosingCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    async function init() {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from(".cta-content > *", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        });
      }, sectionRef);
    }
    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="py-[var(--space-32)] flex items-center justify-center bg-[var(--bg-black)] relative overflow-hidden">
      <div className="cta-content relative z-10 text-center max-w-[800px] px-[var(--gutter)]">
        <span className="label-text text-[var(--gold)] mb-8 block">LET&apos;S BUILD TOGETHER</span>

        <h2 className="display-section text-[#FAFAFA]">
          READY TO<br />MANUFACTURE?
        </h2>

        <p className="mt-8 text-[1.25rem] leading-[1.7] text-[#E8E0D0] max-w-[600px] mx-auto">
          Whether you need contract manufacturing, private labeling, or custom formulations &mdash; we are ready.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-[var(--space-8)] py-[var(--space-4)] text-sm font-bold tracking-[0.1em] uppercase text-[var(--gold)] border-2 border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[#0A0A0A] transition-all duration-300"
          >
            Request a Quote
          </Link>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-[var(--space-8)] py-[var(--space-4)] text-sm tracking-[0.05em] uppercase text-[var(--text-muted)] hover:text-[#FAFAFA] transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        <p className="mt-16 text-[0.875rem] text-[var(--text-muted)] font-mono">
          admetuslifesciences@gmail.com
        </p>
        <p className="mt-2 text-[0.75rem] text-[var(--text-muted)]">
          Village Anta, Tehsil Safidon, Distt. Jind, Haryana - 126112, India
        </p>
      </div>
    </section>
  );
}

/* PAGE */
export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <Manifesto />
      <ScaleMetrics />
      <ProductShowcase />
      <ManufacturingProcess />
      <VisualBreak />
      <Differentiators />
      <Partnership />
      <GlobalReach />
      <TrustQuote />
      <ClosingCTA />
    </>
  );
}
