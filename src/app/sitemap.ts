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
  ];

  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE}/products/${p.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...productRoutes];
}
