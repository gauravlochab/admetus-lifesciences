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
  Cog,
  FlaskConical,
  Award,
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

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-[var(--gutter)]">
        <div className="max-w-[var(--content-narrow)]">
          {/* Label */}
          <div className="hero-label label-text text-[var(--gold)] mb-8">
            ADMETUS LIFESCIENCES
          </div>

          {/* Headline */}
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

          {/* Subhead */}
          <p className="hero-sub mt-8 text-[var(--body-large)] leading-[1.7] text-[#E8E0D0] max-w-[500px]" style={{ fontSize: "var(--body-large)" }}>
            India&apos;s advanced softgel manufacturing facility. Science-driven. Globally certified.
          </p>

          {/* CTA */}
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

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[var(--text-muted)]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#8A8274] to-transparent animate-pulse" />
      </div>
    </section>
  );
}

/* ═══════════════ Section 2: CREDIBILITY STRIP ═══════════════ */
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
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)] text-center">
        <span className="label-text text-[var(--gold)] mb-8 block">GLOBALLY CERTIFIED</span>

        <div className="flex flex-wrap items-start justify-center gap-10 md:gap-16 mt-8">
          {certs.map((cert) => (
            <div
              key={cert.name}
              className="cert-badge flex flex-col items-center gap-3 group cursor-default"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-[var(--gold)]/20 rounded-full">
                <Shield size={20} className="text-[var(--gold)]" />
              </div>
              <span className="label-text text-[#FAFAFA]">{cert.name}</span>
              <span className="text-[0.65rem] tracking-[0.1em] uppercase text-[var(--text-muted)]">
                {cert.desc}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-[1rem] text-[var(--text-cream)]">
          5 international certifications ensuring pharmaceutical-grade quality
        </p>
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
      className="relative min-h-screen flex items-center justify-center bg-[var(--bg-warm-dark)]"
    >
      <div className="text-center max-w-[900px] px-[var(--gutter)]">
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
          className="manifesto-gold-line h-px bg-[var(--gold)] mt-16 mx-auto w-48 origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </section>
  );
}

/* ═══════════════ Section 4: SCALE & METRICS ═══════════════ */
function ScaleMetrics() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const stats = [
    { value: 50, suffix: "M+", label: "Capsules Per Year" },
    { value: 7, suffix: "", label: "Product Lines" },
    { value: 5, suffix: "", label: "Certifications" },
    { value: 100, suffix: "%", label: "Quality Control" },
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
    <section ref={sectionRef} className="relative min-h-screen flex items-center bg-[var(--bg-black)]">
      {/* Background facility image at low opacity */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1563213126-a4273aed2016?w=1920&h=1080&fit=crop"
          alt="Manufacturing facility"
          className="w-full h-full object-cover opacity-15"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
        <span className="label-text text-[var(--gold)] mb-4 block">OUR FACILITY</span>
        <h2 className="display-section text-[#FAFAFA]">
          BUILT FOR<br />SCALE
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, i) => (
            <div key={stat.label}>
              <div className="display-section text-[#FAFAFA]" style={{ fontVariantNumeric: "tabular-nums" }}>
                {counts[i]}<span className="text-[var(--gold)]">{stat.suffix}</span>
              </div>
              <p className="label-text text-[var(--text-muted)] mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="mt-16 text-[1.25rem] leading-[1.7] text-[#E8E0D0] max-w-2xl">
          State-of-the-art ARBES SGX-806P encapsulation line.
          Elmach EPI 2000 blister packaging.
          WHO-GMP certified facility in Haryana, India.
        </p>
      </div>
    </section>
  );
}

/* ═══════════════ Section 5: PRODUCTS — Horizontal Scroll Gallery ═══════════════ */
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

        {/* Scrolling cards */}
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

          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}/`}
              className="shrink-0 w-[400px] h-[500px] lg:w-[400px] lg:h-[500px] rounded-xl overflow-hidden relative group block"
              style={{
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

/* ═══════════════ Section 6: MANUFACTURING PROCESS ═══════════════ */
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

        {/* Progress line */}
        <div className="hidden lg:flex flex-col gap-0 mb-8">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-center gap-3 py-2">
              <div
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  i === activeStep ? "bg-[var(--gold)] scale-150" : i < activeStep ? "bg-[var(--gold)]/50" : "bg-[var(--text-muted)]/30"
                }`}
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

        {/* Active step detail */}
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
              <div className="text-center">
                <div className="text-[#FAFAFA]/10" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(8rem, 15vw, 14rem)", lineHeight: 0.85 }}>
                  {step.num}
                </div>
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

/* ═══════════════ Section 7: VISUAL BREAK ═══════════════ */
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
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="label-text text-[#FAFAFA] text-center" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
          VILLAGE ANTA, HARYANA &mdash; EST. 2024
        </span>
      </div>
    </section>
  );
}

/* ═══════════════ Section 8: DIFFERENTIATORS ═══════════════ */
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
      icon: Cog,
      title: "Advanced Equipment",
      body: "ARBES SGX-806P encapsulation and Elmach EPI 2000 blister packaging \u2014 precision-engineered for consistency.",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=800&fit=crop",
    },
    {
      icon: Shield,
      title: "End-to-End Quality",
      body: "From raw material testing to final product release \u2014 100% inspection at every stage.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=800&fit=crop",
    },
    {
      icon: Award,
      title: "Globally Certified",
      body: "FSSAI, GMP, HACCP, Halal, and WHO-GMP certified. Meeting the world\u2019s strictest standards.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=800&fit=crop",
    },
    {
      icon: FlaskConical,
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="diff-card relative overflow-hidden rounded-[var(--radius)] border border-[var(--border-subtle)] group min-h-[400px] flex flex-col justify-end"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.85)] via-[rgba(10,10,10,0.3)] to-transparent" />
              <div className="relative p-[var(--space-6)]">
                <card.icon size={32} className="text-[var(--gold)] mb-4" />
                <h3 className="heading-2 text-[#FAFAFA]">{card.title}</h3>
                <p className="mt-2 text-[1rem] text-[#E8E0D0]">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════ Section 9: CONTRACT MANUFACTURING ═══════════════ */
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
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
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

/* ═══════════════ Section 10: GLOBAL REACH ═══════════════ */
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
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)] text-center">
        <span className="label-text text-[var(--gold)] mb-4 block">GLOBAL PRESENCE</span>
        <h2 className="display-section text-[#FAFAFA]">
          BEYOND<br />BORDERS
        </h2>
        <p className="mt-8 text-[1.25rem] leading-[1.7] text-[#E8E0D0] max-w-[700px] mx-auto">
          Regulatory-compliant export capabilities serving pharmaceutical markets worldwide.
          Documentation, logistics, and quality assurance for seamless international supply.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((f) => (
            <div key={f.title} className="global-feature p-8 border border-[var(--border-subtle)] bg-[var(--bg-charcoal)]">
              <h3 className="heading-2 text-[#FAFAFA] mb-3">{f.title}</h3>
              <p className="text-[0.875rem] text-[var(--text-muted)]">{f.desc}</p>
            </div>
          ))}
        </div>

        <Link
          href="/export/"
          className="mt-12 inline-flex items-center gap-2 px-[var(--space-8)] py-[var(--space-4)] text-sm font-bold tracking-[0.1em] uppercase text-[var(--gold)] border-2 border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[#0A0A0A] transition-all duration-300"
        >
          Explore Export Capabilities
        </Link>
      </div>
    </section>
  );
}

/* ═══════════════ Section 11: TRUST QUOTE ═══════════════ */
function TrustQuote() {
  return (
    <section className="py-[var(--space-24)] bg-[var(--bg-charcoal)] flex items-center justify-center min-h-[60vh]">
      <div className="mx-auto max-w-[800px] px-[var(--gutter)] text-center">
        {/* Large gold quotation mark */}
        <div className="text-[var(--gold)] opacity-30 mb-8" style={{ fontSize: "120px", lineHeight: 0.5, fontFamily: "Georgia, serif" }}>
          &ldquo;
        </div>

        <p className="heading-1 text-[#FAFAFA] italic leading-[1.3]">
          Quality is not a department. It is an agreement between the manufacturer and the consumer &mdash; a promise kept in every capsule we produce.
        </p>

        <p className="mt-8 label-text text-[var(--gold)]">
          &mdash; ADMETUS LIFESCIENCES
        </p>

        <div className="h-px bg-[var(--gold)]/30 mt-12 mx-auto w-24" />
      </div>
    </section>
  );
}

/* ═══════════════ Section 12: CLOSING CTA ═══════════════ */
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
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center bg-[var(--bg-black)] relative overflow-hidden">
      {/* Gold particle dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[var(--gold)]/20"
            style={{
              left: `${8 + (i * 7) % 84}%`,
              top: `${12 + (i * 13) % 76}%`,
              animation: `float-dot ${3 + (i % 3)}s ease-in-out ${i * 0.3}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Gold line */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-24 h-px bg-[var(--gold)]/40" />

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
            className="inline-flex items-center gap-2 px-[var(--space-8)] py-[var(--space-4)] text-sm tracking-[0.05em] uppercase text-[var(--text-muted)] hover:text-[#FAFAFA] hover:underline transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        <p className="mt-12 text-[0.875rem] text-[var(--text-muted)] font-mono">
          admetuslifesciences@gmail.com
        </p>
        <p className="mt-2 text-[0.75rem] text-[var(--text-muted)]">
          Village Anta, Tehsil Safidon, Distt. Jind, Haryana - 126112, India
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
