import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Pill,
  Package,
  Beaker,
} from "lucide-react";
import { products } from "@/data/products";
import type { Metadata } from "next";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.tagline}`,
    description: `${product.name}: ${product.composition}. Manufactured by Admetus Lifesciences, India.`,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const otherProducts = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pb-12 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920&h=1080&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/30" />
        <div className="relative mx-auto max-w-[1400px] w-full px-[clamp(1.5rem,4vw,4rem)]">
          <Link
            href="/products/"
            className="inline-flex items-center gap-2 text-[0.75rem] text-[#8A8274] hover:text-[#C8A951] transition-colors uppercase tracking-[0.1em] mb-6"
          >
            <ArrowLeft size={14} />
            All Products
          </Link>
          <span
            className="block label-text mb-3"
            style={{ color: product.color }}
          >
            {product.category}
          </span>
          <h1
            className="text-[#FAFAFA] uppercase"
            style={{
              fontFamily: "var(--font-literata), Georgia, serif",
              fontSize: "clamp(3rem, 6vw, 6rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
            }}
          >
            {product.name}
          </h1>
          <p className="mt-3 text-[1.25rem] text-[#C8A951]">{product.tagline}</p>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-[clamp(3rem,6vw,6rem)]">
        <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,4rem)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Image placeholder */}
            <div
              className="aspect-square border border-white/[0.06] flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${product.color}08, #141414)` }}
            >
              <div className="text-center">
                <Pill size={64} style={{ color: product.color }} className="mx-auto opacity-30" />
                <p className="mt-4 text-sm text-[#8A8274]">{product.name}</p>
              </div>
            </div>

            {/* Right: Info */}
            <div>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-sm text-[#8A8274]">
                  <Package size={16} className="text-[#C8A951]" />
                  {product.packSize}
                </div>
                <div className="flex items-center gap-2 text-sm text-[#8A8274]">
                  <Beaker size={16} className="text-[#C8A951]" />
                  {product.dosageForm}
                </div>
              </div>

              {/* Composition */}
              <div className="mb-8">
                <h2 className="label-text text-[#8A8274] mb-3">Composition</h2>
                <p className="text-[1rem] text-[#E8E0D0] leading-[1.7] p-6 bg-[#141414] border border-white/[0.06]">
                  {product.composition}
                </p>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h2 className="label-text text-[#8A8274] mb-3">Key Benefits</h2>
                <ul className="space-y-3">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-[1rem] text-[#E8E0D0]">
                      <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: product.color }} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-[0.05em] uppercase text-[#0A0A0A] bg-[#C8A951] hover:bg-[#E2CC7A] transition-colors"
                >
                  Request Quote for {product.shortName}
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contract-manufacturing/"
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-[0.05em] uppercase text-[#C8A951] border border-[#C8A951]/30 hover:bg-[#C8A951]/10 transition-colors"
                >
                  Private Label Options
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="py-[clamp(3rem,6vw,6rem)] bg-[#141414] border-y border-white/[0.06]">
        <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,4rem)]">
          <h2 className="label-text text-[#8A8274] mb-6">Ingredients</h2>
          <div className="flex flex-wrap gap-2">
            {product.ingredients.map((ing) => (
              <span
                key={ing}
                className="px-4 py-2 text-[0.875rem] text-[#E8E0D0] border border-white/[0.06] bg-[#1A1710]"
              >
                {ing}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section className="py-[clamp(3rem,6vw,6rem)]">
        <div className="mx-auto max-w-[1400px] px-[clamp(1.5rem,4vw,4rem)]">
          <h2 className="label-text text-[#8A8274] mb-6">Other Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {otherProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}/`}
                className="group p-4 text-center bg-[#141414] border border-white/[0.06] hover:border-[#C8A951]/20 transition-all"
              >
                <Pill size={24} style={{ color: p.color }} className="mx-auto mb-2" />
                <p className="text-sm font-semibold text-[#FAFAFA] group-hover:text-[#C8A951] transition-colors">
                  {p.shortName}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
