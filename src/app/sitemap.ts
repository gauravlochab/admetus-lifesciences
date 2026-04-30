import type { MetadataRoute } from "next";
import { products } from "@/data/products";

export const dynamic = "force-static";

const BASE = "https://www.admetuslifesciences.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/about/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/manufacturing/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/contract-manufacturing/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/products/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/quality/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/export/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact/`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    // SEO landing pages
    { url: `${BASE}/softgel-capsule-manufacturer-haryana/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/private-label-softgel-manufacturer-india/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/contract-manufacturing-vitamin-d3-softgel/`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    // Case studies
    { url: `${BASE}/case-studies/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/case-studies/vitamin-d3-stability-challenge/`, lastModified: now, changeFrequency: "yearly", priority: 0.65 },
    { url: `${BASE}/case-studies/halal-kosher-gcc-export/`, lastModified: now, changeFrequency: "yearly", priority: 0.65 },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE}/products/${p.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes];
}
