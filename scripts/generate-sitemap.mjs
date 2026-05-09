import fs from "fs";
import path from "path";

const BASE = "https://www.admetuslifesciences.com";
const now = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

// Define static routes identical to src/app/sitemap.ts
const staticRoutes = [
  { url: `${BASE}/`, changeFrequency: "weekly", priority: 1.0 },
  { url: `${BASE}/about/`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE}/manufacturing/`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE}/contract-manufacturing/`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE}/products/`, changeFrequency: "weekly", priority: 0.9 },
  { url: `${BASE}/catalog/`, changeFrequency: "monthly", priority: 0.85 },
  { url: `${BASE}/quality/`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/export/`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/contact/`, changeFrequency: "yearly", priority: 0.6 },
  { url: `${BASE}/softgel-capsule-manufacturer-haryana/`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE}/private-label-softgel-manufacturer-india/`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE}/contract-manufacturing-vitamin-d3-softgel/`, changeFrequency: "monthly", priority: 0.85 },
  { url: `${BASE}/case-studies/`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/case-studies/vitamin-d3-stability-challenge/`, changeFrequency: "yearly", priority: 0.65 },
  { url: `${BASE}/case-studies/halal-kosher-gcc-export/`, changeFrequency: "yearly", priority: 0.65 },
];

try {
  console.log("Generating sitemap.xml...");

  // Read products file to extract slugs dynamically using a fast regex
  const productsFilePath = path.join(process.cwd(), "src", "data", "products.ts");
  const productsContent = fs.readFileSync(productsFilePath, "utf8");
  
  const slugRegex = /slug:\s*"([^"]+)"/g;
  const slugs = [];
  let match;
  while ((match = slugRegex.exec(productsContent)) !== null) {
    slugs.push(match[1]);
  }

  // Create product route mappings
  const productRoutes = slugs.map((slug) => ({
    url: `${BASE}/products/${slug}/`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const allRoutes = [...staticRoutes, ...productRoutes];

  // Compile the physical XML markup
  const xmlMarkup = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${route.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority.toFixed(2)}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

  // Write sitemap.xml directly into the public folder
  const publicDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const sitemapOutputPath = path.join(publicDir, "sitemap.xml");
  fs.writeFileSync(sitemapOutputPath, xmlMarkup, "utf8");

  console.log(`Successfully generated physical sitemap.xml at ${sitemapOutputPath} with ${allRoutes.length} URLs!`);
} catch (error) {
  console.error("Error generating sitemap.xml:", error);
  process.exit(1);
}
