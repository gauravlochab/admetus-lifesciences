"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";

/* ═══ Section 1: HERO ═══ */
function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    async function init() {
      if (typeof window === "undefined") return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".hero-label", { y: 20, opacity: 0, duration: 0.5 }, 0.2);
        tl.from(".hero-line", { y: 40, opacity: 0, duration: 0.6, stagger: 0.08 }, 0.3);
        tl.from(".hero-rule", { scaleX: 0, duration: 0.5 }, 0.6);
        tl.from(".hero-sub", { y: 20, opacity: 0, duration: 0.5 }, 0.7);
        tl.from(".hero-cta", { y: 20, opacity: 0, duration: 0.5 }, 0.8);
        tl.from(".hero-scroll", { opacity: 0, duration: 0.5 }, 1.4);
        tl.from(".hero-margin-label", { opacity: 0, duration: 0.4 }, 1.0);
      }, sectionRef);
    }
    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] flex items-center overflow-hidden"
    >
      {/* Background image with warm overlay */}
      <div className="absolute inset-0 img-warm-overlay">
        <img
          src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920&h=1080&fit=crop"
          alt="Pharmaceutical softgel capsules arranged on a production line at Admetus Lifesciences facility"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="eager" fetchPriority="high"
          style={{ animation: "ken-burns 25s ease-in-out infinite alternate" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.85) 40%, rgba(10,10,10,0.3) 70%, transparent 100%)" }} />
      </div>

      {/* Margin label */}
      <div className="hero-margin-label hidden xl:block absolute left-6 top-1/2 -translate-y-1/2 margin-label">
        SOFTGEL MANUFACTURING
      </div>

      {/* Content -- left-aligned, asymmetric */}
      <div className="relative z-10 mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
        <div className="max-w-[var(--content-narrow)]">
          <div className="hero-label label-text text-[var(--gold)] mb-5">
            ADMETUS LIFESCIENCES
          </div>

          <h1 className="sr-only">Admetus Lifesciences - Precision Encapsulated Softgel Capsules</h1>
          <div aria-hidden="true">
            {["PRECISION", "ENCAPSULATED"].map((word) => (
              <div
                key={word}
                className="hero-line display-hero text-[var(--text-white)]"
              >
                {word}
              </div>
            ))}
          </div>

          <div className="hero-rule gold-rule w-24 mt-6 origin-left" />

          <p className="hero-sub mt-4 body-large text-[var(--text-cream)] max-w-[480px]">
            India&apos;s advanced softgel manufacturing facility. Science-driven formulations, globally certified production.
          </p>

          <div className="hero-cta mt-8">
            <Link
              href="/manufacturing/"
              className="cursor-pointer inline-flex items-center gap-3 px-[var(--space-8)] py-[var(--space-4)] text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--gold)] border-2 border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--bg-black)] transition-colors duration-300"
              style={{ fontFamily: "var(--font-display), Archivo, sans-serif" }}
            >
              Explore Our Facility
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* Section number */}
      <span className="hidden lg:block absolute top-8 right-[var(--gutter)] section-number">01</span>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="label-text text-[var(--text-muted)] !text-[0.5rem]">Scroll</span>
        <div
          className="w-px h-10 bg-gradient-to-b from-[var(--text-muted)] to-transparent origin-top"
          style={{ animation: "scroll-drift 3.5s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}

/* ═══ Section 2: CREDIBILITY STRIP ═══ */
function CredibilityStrip() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    async function init() {
      if (typeof window === "undefined") return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from(".cert-badge", {
          y: 15,
          opacity: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 88%" },
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
    <section ref={sectionRef} className="py-6 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
        <div className="flex flex-wrap items-start justify-between gap-6 md:gap-4">
          {certs.map((cert, i) => (
            <div key={cert.name} className="cert-badge flex flex-col gap-1">
              <span className="mono-text text-[0.625rem] tracking-[0.15em] text-[var(--text-muted)] opacity-50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="text-[1.25rem] font-bold text-[var(--text-white)] tracking-tight"
                style={{ fontFamily: "var(--font-display), Archivo, sans-serif" }}
              >
                {cert.name}
              </span>
              <span className="text-[0.625rem] tracking-[0.1em] uppercase text-[var(--text-muted)]" style={{ fontFamily: "var(--font-display)" }}>
                {cert.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ═══ Section 2b: METRICS ═══ */
function Metrics() {
  const metrics = [
    { value: "50M+", label: "Capsules Annual Capacity" },
    { value: "05", label: "International Certifications" },
    { value: "07", label: "Precision Formulations" },
    { value: "100%", label: "Batch Quality Inspection" },
  ];

  return (
    <section className="py-12 bg-[var(--bg-charcoal)] border-y border-[var(--border-subtle)]">
      <div className="mx-auto max-w-[1400px] px-[var(--gutter)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m) => (
            <div key={m.label}>
              <div
                className="text-3xl md:text-4xl font-bold text-[var(--gold)]"
                style={{ fontFamily: "var(--font-display), sans-serif" }}
              >
                {m.value}
              </div>
              <div className="mt-1.5 text-[0.6875rem] uppercase tracking-[0.1em] text-[var(--text-muted)]">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ Section 3: MANIFESTO (pinned scroll reveal) ═══ */
function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    async function init() {
      if (typeof window === "undefined") return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const lines = sectionRef.current?.querySelectorAll(".manifesto-line") ?? [];
      const goldLine = sectionRef.current?.querySelector(".manifesto-gold-line");

      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
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
            tl.to(line, { opacity: 1, y: 0, duration: 1 }, i * 1.2);
          });

          if (goldLine) {
            tl.fromTo(goldLine, { scaleX: 0 }, { scaleX: 1, duration: 0.6 }, lines.length * 1.2);
          }
        });

        mm.add("(max-width: 767px)", () => {
          // On mobile, just reveal lines on scroll without pinning
          lines.forEach((line) => {
            gsap.to(line, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: { trigger: line, start: "top 85%" },
            });
          });
          if (goldLine) {
            gsap.fromTo(goldLine, { scaleX: 0 }, {
              scaleX: 1,
              duration: 0.6,
              scrollTrigger: { trigger: goldLine, start: "top 90%" },
            });
          }
        });
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
      {/* Margin label */}
      <div className="hidden xl:block absolute left-6 top-1/2 -translate-y-1/2 margin-label">
        PHILOSOPHY
      </div>

      <span className="hidden lg:block absolute top-8 right-[var(--gutter)] section-number">02</span>

      <div className="max-w-[860px] px-[var(--gutter)] mx-auto lg:mx-0 lg:ml-[calc(var(--gutter)+2rem)]">
        <span className="label-text text-[var(--gold)] mb-8 block">OUR PHILOSOPHY</span>
        <div className="space-y-4">
          {lines.map((line) => (
            <p
              key={line}
              className="manifesto-line heading-1 text-[var(--text-white)]"
              style={{ opacity: 0.12, transform: "translateY(24px)" }}
            >
              {line}
            </p>
          ))}
        </div>
        <div
          className="manifesto-gold-line gold-rule mt-12 w-48 origin-left"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </section>
  );
}

/* ═══ Section 4: SCALE & METRICS ═══ */
function ScaleMetrics() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    async function init() {
      if (typeof window === "undefined") return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from(".scale-content > *", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        });
      }, sectionRef);
    }
    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 bg-[var(--bg-black)]">
      <div className="absolute inset-0 img-vignette">
        <img
          src="https://images.unsplash.com/photo-1563213126-a4273aed2016?w=1920&h=1080&fit=crop"
          alt="Interior of the Admetus softgel manufacturing facility in Haryana"
          className="w-full h-full object-cover opacity-12"
          width={1920}
          height={1080}
          loading="lazy"
        />
      </div>

      <span className="hidden lg:block absolute top-8 right-[var(--gutter)] section-number z-10">03</span>

      <div className="scale-content relative z-10 mx-auto max-w-[var(--container-max)] w-full px-[var(--gutter)]">
        <span className="label-text text-[var(--gold)] mb-3 block">OUR FACILITY</span>
        <h2 className="display-section text-[var(--text-white)]">
          BUILT FOR<br />SCALE
        </h2>

        {/* Thin gold rule */}
        <div className="gold-rule w-16 mt-6 mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1px_1fr] gap-10 lg:gap-16">
          <div className="max-w-[65ch]">
            <p className="body-large text-[var(--text-cream)]">
              Our Haryana facility produces over <span className="text-[var(--text-white)] font-semibold">50 million capsules annually</span> across
              7 precision-formulated product lines, each backed by 5 international certifications.
            </p>
            <p className="mt-4 body-text text-[var(--text-muted)]">
              State-of-the-art ARBES SGX-806P encapsulation line.
              Elmach EPI 2000 blister packaging.
              WHO-GMP certified facility in Haryana, India.
            </p>
          </div>

          <div className="hidden lg:block bg-[var(--border-subtle)]" />

          <div className="flex flex-col gap-8">
            {[
              { label: "Equipment", value: "ARBES SGX-806P rotary die encapsulation, Elmach EPI 2000 blister sealing" },
              { label: "Certifications", value: "FSSAI, GMP, HACCP, Halal, WHO-GMP" },
              { label: "Quality Control", value: "100% batch inspection with full traceability documentation" },
            ].map((item) => (
              <div key={item.label}>
                <span className="label-text text-[var(--text-muted)]">{item.label}</span>
                <p className="mt-1.5 body-text text-[var(--text-cream)]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══ Section 5: PRODUCTS -- Horizontal Scroll Gallery ═══ */
function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    async function init() {
      if (typeof window === "undefined") return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;
      if (window.innerWidth < 768) return; // No pinning on mobile

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
  }, [isMobile]);

  // Mobile: vertical stack
  if (isMobile) {
    return (
      <section className="relative py-12 bg-[var(--bg-charcoal)] overflow-hidden">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)]">FORMULATION PORTFOLIO</span>
          <h2 className="mt-3 display-section text-[var(--text-white)]">
            ENGINEERED<br />FOR EFFICACY
          </h2>
          <p className="mt-3 body-text text-[var(--text-cream)] max-w-[52ch]">
            Seven precision-formulated softgel capsules &mdash; each designed for optimal bioavailability and manufactured under strict quality controls.
          </p>
          <div className="gold-rule w-12 mt-4 mb-8" />

          <div className="flex flex-col gap-5">
            {products.map((product, i) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}/`}
                className="relative overflow-hidden group block min-h-[280px] flex flex-col justify-end"
                style={{
                  background: `linear-gradient(160deg, ${product.color}08, var(--bg-charcoal))`,
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <div className="absolute inset-0 bg-[var(--gold)]/0 group-hover:bg-[var(--gold)]/[0.03] transition-colors duration-500" />
                <div className="relative p-5 z-10">
                  <span className="mono-text text-[0.625rem] tracking-[0.15em] text-[var(--text-muted)] opacity-50 block mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="label-text mb-2 text-[var(--teal)] block">
                    {product.category}
                  </span>
                  <h3 className="heading-2 text-[var(--text-white)] uppercase">
                    {product.name}
                  </h3>
                  <p className="mt-1.5 body-text text-[var(--text-cream)] text-base">{product.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-2 label-text text-[var(--gold)] group-hover:text-[var(--gold-light)] transition-colors">
                    View Details <ArrowRight size={11} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/products/"
              className="inline-flex items-center gap-2 label-text text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors"
            >
              View All Products <ArrowRight size={13} />
            </Link>
            <a
              href="/catalogue.pdf"
              className="inline-flex items-center gap-2 px-7 py-3 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[var(--foreground)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 transition-colors duration-200 cursor-pointer"
            >
              Download Product Catalogue
              <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-[var(--bg-charcoal)] overflow-hidden">
      <span className="hidden lg:block absolute top-8 right-[var(--gutter)] section-number z-20">04</span>

      <div className="flex h-screen">
        {/* Fixed left panel */}
        <div className="hidden lg:flex flex-col justify-center w-[360px] shrink-0 p-[var(--gutter)] z-10">
          <span className="label-text text-[var(--gold)]">FORMULATION PORTFOLIO</span>
          <h2 className="mt-4 display-section text-[var(--text-white)]">
            ENGINEERED<br />FOR EFFICACY
          </h2>
          <div className="gold-rule w-12 mt-4 mb-4" />
          <p className="body-text text-[var(--text-cream)] max-w-[52ch]">
            Seven precision-formulated softgel capsules &mdash; each designed for optimal bioavailability and manufactured under strict quality controls.
          </p>
          <p className="mt-6 mono-text text-[0.8125rem] text-[var(--text-muted)]">
            {String(activeIndex + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
          </p>
          <Link
            href="/products/"
            className="mt-4 inline-flex items-center gap-2 label-text text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors"
          >
            View All Products <ArrowRight size={13} />
          </Link>
          <a
            href="/catalogue.pdf"
            className="mt-3 inline-flex items-center gap-2 px-7 py-3 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[var(--foreground)] border border-[var(--border-subtle)] hover:border-[var(--gold)]/30 transition-colors duration-200 cursor-pointer"
          >
            Download Product Catalogue
            <ArrowRight size={13} />
          </a>
        </div>

        {/* Scrolling cards */}
        <div
          ref={cardsRef}
          className="flex items-center gap-5 pl-6 lg:pl-0 pr-[var(--gutter)]"
        >
          {/* Mobile title card */}
          <div className="lg:hidden shrink-0 w-[80vw] flex flex-col justify-center">
            <span className="label-text text-[var(--gold)]">FORMULATION PORTFOLIO</span>
            <h2 className="mt-3 display-section text-[var(--text-white)]">
              ENGINEERED FOR EFFICACY
            </h2>
          </div>

          {products.map((product, i) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}/`}
              className="shrink-0 overflow-hidden relative group block"
              style={{
                width: "clamp(300px, 26vw, 400px)",
                height: "480px",
                background: `linear-gradient(160deg, ${product.color}08, var(--bg-charcoal))`,
                border: "1px solid var(--border-subtle)",
              }}
            >
              {/* Warm overlay on hover */}
              <div className="absolute inset-0 bg-[var(--gold)]/0 group-hover:bg-[var(--gold)]/[0.03] transition-colors duration-500" />

              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span className="mono-text text-[0.625rem] tracking-[0.15em] text-[var(--text-muted)] opacity-50 mb-auto pt-4">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="label-text mb-2 text-[var(--teal)]">
                  {product.category}
                </span>
                <h3 className="heading-2 text-[var(--text-white)] uppercase">
                  {product.name}
                </h3>
                <p className="mt-1.5 body-text text-[var(--text-cream)]">{product.tagline}</p>
                <p className="mt-2 text-[0.8125rem] text-[var(--text-muted)] line-clamp-2 max-w-md">
                  {product.ingredients.slice(0, 4).join(", ")}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 label-text text-[var(--gold)] group-hover:text-[var(--gold-light)] transition-colors">
                  View Details <ArrowRight size={11} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ Section 6: MANUFACTURING PROCESS ═══ */
function ManufacturingProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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
    if (typeof window === "undefined") return;
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    async function init() {
      if (typeof window === "undefined") return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;
      if (window.innerWidth < 768) return; // No pinning on mobile

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
  }, [steps.length, isMobile]);

  // Mobile: vertical stack of steps
  if (isMobile) {
    return (
      <section className="relative py-12 bg-[var(--bg-warm-dark)]">
        <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
          <span className="label-text text-[var(--gold)] mb-3 block">MANUFACTURING</span>
          <h2 className="display-section text-[var(--text-white)] mb-4">THE PROCESS</h2>
          <div className="gold-rule w-12 mb-8" />

          <div className="flex flex-col gap-5">
            {steps.map((s) => (
              <div key={s.num} className="relative overflow-hidden border border-[var(--border-subtle)]">
                <img
                  src={s.image}
                  alt={`Manufacturing step ${s.num}: ${s.title}`}
                  className="w-full h-44 object-cover"
                  width={1200}
                  height={800}
                  loading="lazy"
                />
                <div className="p-5">
                  <span className="mono-text text-[0.75rem] text-[var(--gold)] block mb-1.5">{s.num}</span>
                  <h3 className="heading-2 text-[var(--text-white)] uppercase">{s.title}</h3>
                  <p className="mt-1.5 body-text text-[var(--text-cream)] text-base">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const step = steps[activeStep];

  return (
    <section ref={sectionRef} className="relative h-screen bg-[var(--bg-warm-dark)] flex">
      <span className="hidden lg:block absolute top-8 right-[var(--gutter)] section-number z-20">05</span>

      {/* Left: content */}
      <div className="w-full lg:w-[42%] flex flex-col justify-center p-[var(--gutter)] relative">
        <span className="label-text text-[var(--gold)] mb-3">MANUFACTURING</span>
        <h2 className="display-section text-[var(--text-white)] mb-4">THE PROCESS</h2>
        <div className="gold-rule w-12 mb-8" />

        {/* Progress line */}
        <div className="hidden lg:flex flex-col gap-0 mb-6">
          {steps.map((s, i) => (
            <div key={s.num} className="flex items-center gap-4 py-1.5">
              <div
                className="w-1 h-1 transition-transform duration-500"
                style={{
                  background: i === activeStep ? "var(--gold)" : i < activeStep ? "rgba(200,169,81,0.3)" : "rgba(142,134,120,0.15)",
                  transform: i === activeStep ? "scale(2)" : "scale(1)",
                }}
              />
              <span className={`mono-text text-[0.6875rem] transition-[transform,opacity] duration-300 ${
                i === activeStep ? "text-[var(--gold)]" : "text-[var(--text-muted)] opacity-40"
              }`}>
                {s.num}
              </span>
              <span className={`label-text !text-[0.5625rem] transition-[transform,opacity] duration-300 ${
                i === activeStep ? "text-[var(--text-white)]" : "text-[var(--text-muted)] opacity-25"
              }`}>
                {s.title}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile active step */}
        <div className="lg:hidden">
          <div className="text-[var(--gold)] opacity-15 mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "4.5rem", lineHeight: 0.85, fontWeight: 900 }}>
            {step.num}
          </div>
          <h3 className="heading-1 text-[var(--text-white)] uppercase">{step.title}</h3>
          <p className="mt-3 body-large text-[var(--text-cream)]">{step.body}</p>
        </div>
      </div>

      {/* Right: step image */}
      <div className="hidden lg:flex w-[58%] relative overflow-hidden">
        {steps.map((s, i) => (
          <div
            key={s.num}
            className="absolute inset-0 transition-[opacity,transform] duration-700"
            style={{
              opacity: i === activeStep ? 1 : 0,
              transform: i === activeStep ? "scale(1)" : "scale(1.04)",
            }}
          >
            <img
              src={s.image}
              alt={`Manufacturing step ${s.num}: ${s.title}`}
              className="w-full h-full object-cover"
              width={1200}
              height={800}
              loading="lazy"
            />
            {/* Warm vignette overlay -- hardcoded rgba on image overlay intentionally */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.04), rgba(10,10,10,0.5))" }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white opacity-[0.04]" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(6rem, 14vw, 12rem)", lineHeight: 0.85, fontWeight: 900 }}>
                {step.num}
              </div>
            </div>
            <div className="absolute bottom-[var(--gutter)] left-[var(--gutter)] right-[var(--gutter)]">
              <h3 className="heading-1 text-white uppercase">{s.title}</h3>
              <p className="mt-2 body-large text-white/80 max-w-[65ch]">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ═══ Section 7: VISUAL BREAK (parallax) ═══ */
function VisualBreak() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    async function init() {
      if (typeof window === "undefined") return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

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
    <section ref={sectionRef} className="relative h-[50vh] overflow-hidden">
      <div className="parallax-bg absolute inset-0 img-vignette" style={{ height: "130%", top: "-15%" }}>
        <img
          src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1920&h=1080&fit=crop"
          alt="Admetus Lifesciences manufacturing facility exterior, Village Anta, Haryana"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          loading="lazy"
        />
      </div>
      {/* Image overlay: hardcoded rgba intentional */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.55), transparent 50%, rgba(10,10,10,0.25))" }} />

      {/* Warm gold overlay tint */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(200,169,81,0.05), transparent 60%)" }} />

      <div className="absolute inset-0 flex items-end p-[var(--gutter)]">
        <div className="flex items-center gap-6">
          <div className="gold-rule w-8" />
          <span className="label-text text-white" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.5)" }}>
            VILLAGE ANTA, HARYANA &mdash; EST. 2024
          </span>
        </div>
      </div>
    </section>
  );
}

/* ═══ Section 8: DIFFERENTIATORS ═══ */
function Differentiators() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    async function init() {
      if (typeof window === "undefined") return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from(".diff-card", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
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
    <section ref={sectionRef} className="py-20 bg-[var(--bg-charcoal)]">
      <span className="hidden lg:block absolute top-8 right-[var(--gutter)] section-number">06</span>

      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
        <span className="label-text text-[var(--gold)] mb-3 block">WHY ADMETUS</span>
        <h2 className="display-section text-[var(--text-white)] mb-4">
          THE ADMETUS<br />DIFFERENCE
        </h2>
        <div className="gold-rule w-16 mb-10" />

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="diff-card md:col-span-2 relative overflow-hidden border border-[var(--border-subtle)] group min-h-[380px] flex flex-col justify-end img-warm-overlay hover:-translate-y-0.5 transition-transform duration-500">
            <img src={cards[0].image} alt={cards[0].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" width={600} height={800} loading="lazy" />
            {/* Image overlay: hardcoded rgba intentional */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.88), rgba(10,10,10,0.2) 60%, transparent)" }} />
            <div className="relative p-6 z-10">
              <span className="mono-text text-[0.5625rem] text-[var(--text-muted)] opacity-40 block mb-2">01</span>
              <h3 className="heading-1 text-white">{cards[0].title}</h3>
              <p className="mt-2 body-text text-white/80 max-w-[65ch]">{cards[0].body}</p>
            </div>
          </div>

          <div className="diff-card relative overflow-hidden border border-[var(--border-subtle)] group min-h-[380px] flex flex-col justify-end img-warm-overlay hover:-translate-y-0.5 transition-transform duration-500">
            <img src={cards[1].image} alt={cards[1].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" width={600} height={800} loading="lazy" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.88), rgba(10,10,10,0.2) 60%, transparent)" }} />
            <div className="relative p-5 z-10">
              <span className="mono-text text-[0.5625rem] text-[var(--text-muted)] opacity-40 block mb-2">02</span>
              <h3 className="heading-2 text-white">{cards[1].title}</h3>
              <p className="mt-1.5 body-text text-white/80">{cards[1].body}</p>
            </div>
          </div>

          <div className="diff-card relative overflow-hidden border border-[var(--border-subtle)] group min-h-[340px] flex flex-col justify-end img-warm-overlay hover:-translate-y-0.5 transition-transform duration-500">
            <img src={cards[2].image} alt={cards[2].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" width={600} height={800} loading="lazy" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.88), rgba(10,10,10,0.2) 60%, transparent)" }} />
            <div className="relative p-5 z-10">
              <span className="mono-text text-[0.5625rem] text-[var(--text-muted)] opacity-40 block mb-2">03</span>
              <h3 className="heading-2 text-white">{cards[2].title}</h3>
              <p className="mt-1.5 body-text text-white/80">{cards[2].body}</p>
            </div>
          </div>

          <div className="diff-card md:col-span-2 relative overflow-hidden border border-[var(--border-subtle)] group min-h-[340px] flex flex-col justify-end img-warm-overlay hover:-translate-y-0.5 transition-transform duration-500">
            <img src={cards[3].image} alt={cards[3].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" width={600} height={800} loading="lazy" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.88), rgba(10,10,10,0.2) 60%, transparent)" }} />
            <div className="relative p-6 z-10">
              <span className="mono-text text-[0.5625rem] text-[var(--text-muted)] opacity-40 block mb-2">04</span>
              <h3 className="heading-1 text-white">{cards[3].title}</h3>
              <p className="mt-2 body-text text-white/80 max-w-[65ch]">{cards[3].body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══ Section 9: PARTNERSHIP ═══ */
function Partnership() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    async function init() {
      if (typeof window === "undefined") return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from(".partnership-content > *", {
          x: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        });
      }, sectionRef);
    }
    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="min-h-[75vh] flex bg-[var(--bg-warm-dark)]">
      <span className="hidden lg:block absolute top-8 right-[var(--gutter)] section-number z-20">07</span>

      {/* Left: Image with warm overlay */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden img-warm-overlay">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop"
          alt="Pharmaceutical research and formulation process for softgel capsule manufacturing"
          className="absolute inset-0 w-full h-full object-cover"
          width={1200}
          height={800}
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(26,23,16,0.3), rgba(10,10,10,0.15))" }} />
      </div>

      {/* Right: Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-[var(--gutter)] lg:pl-[var(--space-16)]">
        <div className="partnership-content max-w-lg">
          <span className="label-text text-[var(--gold)]">PARTNER WITH US</span>
          <h2 className="mt-4 display-section text-[var(--text-white)]">
            YOUR BRAND.<br />OUR SCIENCE.
          </h2>
          <div className="gold-rule w-12 mt-5 mb-5" />
          <p className="body-large text-[var(--text-cream)]">
            From concept to shelf &mdash; turnkey private label softgel manufacturing.
          </p>
          <ul className="mt-8 space-y-3">
            {["Custom formulations", "Flexible MOQs", "Regulatory support", "Export documentation"].map((s) => (
              <li key={s} className="flex items-center gap-4 body-text text-[var(--text-cream)]">
                <span className="w-5 h-px bg-[var(--gold)]" />
                {s}
              </li>
            ))}
          </ul>
          <Link
            href="/contract-manufacturing/"
            className="cursor-pointer mt-10 inline-flex items-center gap-3 px-[var(--space-8)] py-[var(--space-4)] text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--gold)] border-2 border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--bg-black)] transition-colors duration-300"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Start a Project
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ═══ Section 10: GLOBAL REACH ═══ */
function GlobalReach() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    async function init() {
      if (typeof window === "undefined") return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from(".global-feature", {
          y: 25,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
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
    <section ref={sectionRef} className="py-20 bg-[var(--bg-black)]">
      <span className="hidden lg:block absolute top-8 right-[var(--gutter)] section-number">08</span>

      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16">
          <div>
            <span className="label-text text-[var(--gold)] mb-3 block">GLOBAL PRESENCE</span>
            <h2 className="display-section text-[var(--text-white)]">
              BEYOND<br />BORDERS
            </h2>
            <div className="gold-rule w-16 mt-5 mb-5" />
            <p className="body-large text-[var(--text-cream)] max-w-[480px]">
              Regulatory-compliant export capabilities serving pharmaceutical markets worldwide.
            </p>
            <Link
              href="/export/"
              className="cursor-pointer mt-10 inline-flex items-center gap-3 px-[var(--space-8)] py-[var(--space-4)] text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--gold)] border-2 border-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--bg-black)] transition-colors duration-300"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Explore Export Capabilities
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="flex flex-col justify-center gap-0">
            {features.map((f, i) => (
              <div key={f.title} className="global-feature py-6 border-t border-[var(--border-subtle)]">
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="mono-text text-[0.5625rem] text-[var(--text-muted)] opacity-40">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="heading-2 text-[var(--text-white)]" style={{ fontSize: "clamp(1.25rem, 2vw, 1.5rem)" }}>{f.title}</h3>
                </div>
                <p className="body-text text-[var(--text-muted)] max-w-[65ch] ml-[calc(0.5625rem*3+1rem)]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Middle East", "Africa", "Southeast Asia", "Latin America", "Central Asia", "South Asia", "CIS Countries", "East Africa"].map((region) => (
            <div key={region} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[var(--gold)]" />
              <span className="text-sm text-[var(--text-cream)]">{region}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ Section 11: TRUST QUOTE ═══ */
function TrustQuote() {
  return (
    <section className="py-20 bg-[var(--bg-charcoal)] flex items-center">
      <div className="mx-auto max-w-[var(--container-max)] px-[var(--gutter)]">
        <div className="max-w-[640px]">
          <div className="gold-rule w-16 mb-10" />

          <blockquote>
            <p
              className="text-[var(--text-white)] italic leading-[1.35]"
              style={{
                fontFamily: "var(--font-body), 'Source Serif 4', Georgia, serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 400,
              }}
            >
              Quality is not a department. It is an agreement between the manufacturer and the consumer &mdash; a promise kept in every capsule we produce.
            </p>
          </blockquote>

          <div className="mt-8 flex items-center gap-4">
            <div className="gold-rule w-6" />
            <p className="label-text text-[var(--gold)]">
              ADMETUS LIFESCIENCES
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══ Section 12: CLOSING CTA ═══ */
function ClosingCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    async function init() {
      if (typeof window === "undefined") return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.from(".cta-content > *", {
          y: 25,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        });
      }, sectionRef);
    }
    init();
    return () => { ctx?.revert(); };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 flex items-center justify-center bg-[var(--bg-black)] relative overflow-hidden">
      {/* Gold rule above */}
      <div className="absolute top-0 left-[var(--gutter)] right-[var(--gutter)] gold-rule" />

      <span className="hidden lg:block absolute top-8 right-[var(--gutter)] section-number z-10">10</span>

      <div className="cta-content relative z-10 text-center max-w-[700px] px-[var(--gutter)]">
        <span className="label-text text-[var(--gold)] mb-5 block">LET&apos;S BUILD TOGETHER</span>

        <h2 className="display-section text-[var(--text-white)]">
          YOUR NEXT<br />MANUFACTURING PARTNER
        </h2>

        <div className="gold-rule w-12 mx-auto mt-5 mb-5" />

        <p className="body-large text-[var(--text-cream)] max-w-[52ch] mx-auto">
          Contract manufacturing, private label solutions, and export-ready softgel capsules &mdash; discuss your requirements with our team.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact/"
            className="cursor-pointer inline-flex items-center gap-3 px-[var(--space-8)] py-[var(--space-4)] text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--bg-black)] bg-[var(--gold)] hover:bg-[var(--gold-light)] transition-colors duration-300"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Start a Project
            <ArrowRight size={13} />
          </Link>
          <Link
            href="/contact/"
            className="cursor-pointer inline-flex items-center gap-2 px-[var(--space-8)] py-[var(--space-4)] text-[0.6875rem] font-bold tracking-[0.14em] uppercase text-[var(--gold)] border-2 border-[var(--gold)]/40 hover:border-[var(--gold)] transition-colors duration-300"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Request Product Samples
          </Link>
        </div>

        <p className="mt-12 mono-text text-[0.8125rem] text-[var(--text-muted)]">
          admetuslifesciences@gmail.com
        </p>
        <p className="mt-1.5 body-text text-[var(--text-muted)] !text-[0.8125rem]">
          Village Anta, Tehsil Safidon, Distt. Jind, Haryana - 126112, India
        </p>
      </div>
    </section>
  );
}

/* ═══ PAGE ═══ */
export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <Metrics />
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
