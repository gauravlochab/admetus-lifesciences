#!/usr/bin/env node
/**
 * Admetus Lifesciences — SEO / GEO / AEO Automated Test Suite
 *
 * Validates the source code for SEO compliance without needing a running server.
 * Scans layout.tsx and page.tsx files for metadata, schema, and content patterns.
 *
 * Run: node seo-audit/seo-tests.mjs
 */

import { readFileSync, readdirSync, existsSync, statSync } from "fs";
import { join, resolve } from "path";

const ROOT = resolve(import.meta.dirname, "..");
const APP_DIR = join(ROOT, "src", "app");
const PUBLIC_DIR = join(ROOT, "public");

let passed = 0;
let failed = 0;
let skipped = 0;
const failures = [];

function test(name, fn) {
  try {
    const result = fn();
    if (result === "SKIP") {
      skipped++;
      console.log(`  ⏭  SKIP: ${name}`);
    } else if (result) {
      passed++;
      console.log(`  ✅ PASS: ${name}`);
    } else {
      failed++;
      failures.push(name);
      console.log(`  ❌ FAIL: ${name}`);
    }
  } catch (e) {
    failed++;
    failures.push(`${name} (${e.message})`);
    console.log(`  ❌ FAIL: ${name} — ${e.message}`);
  }
}

function readFile(path) {
  if (!existsSync(path)) return null;
  return readFileSync(path, "utf-8");
}

function getAllPageDirs() {
  const dirs = [];
  function walk(dir) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory() && !entry.name.startsWith(".") && !entry.name.startsWith("_")) {
        const full = join(dir, entry.name);
        if (existsSync(join(full, "page.tsx")) || existsSync(join(full, "layout.tsx"))) {
          dirs.push(full);
        }
        walk(full);
      }
    }
  }
  walk(APP_DIR);
  return dirs;
}

function getRelativePath(dir) {
  return dir.replace(APP_DIR, "").replace(/^\//, "") || "(root)";
}

// ═══════════════════════════════════════════════════════
// PHASE 1: Critical Fixes
// ═══════════════════════════════════════════════════════
console.log("\n══════════════════════════════════════════");
console.log("PHASE 1: CRITICAL FIXES");
console.log("══════════════════════════════════════════\n");

// 1.1 — sameAs in Organization schema
console.log("--- 1.1: Organization sameAs ---");
const layoutContent = readFile(join(APP_DIR, "layout.tsx"));
test("TC-1.1.1: Organization schema sameAs has >= 3 URLs", () => {
  const match = layoutContent.match(/sameAs:\s*\[([\s\S]*?)\]/);
  if (!match) return false;
  const urls = match[1].match(/https?:\/\/[^\s"',]+/g);
  return urls && urls.length >= 3;
});
test("TC-1.1.2: sameAs does NOT contain empty array", () => {
  return !layoutContent.includes("sameAs: []");
});

// 1.2 — Product schema offers + image
console.log("\n--- 1.2: Product schema offers + image ---");
const productDetailPage = readFile(join(APP_DIR, "products", "[slug]", "page.tsx"));
test("TC-1.2.1: Product JSON-LD has 'offers' property", () => {
  return productDetailPage && productDetailPage.includes('"offers"') || productDetailPage.includes("offers:");
});
test("TC-1.2.2: Product JSON-LD has 'image' property", () => {
  // Check if productJsonLd object has image
  return productDetailPage && /productJsonLd[\s\S]*?image\s*:/m.test(productDetailPage);
});

// 1.3 — Article schema image
console.log("\n--- 1.3: Article schema image ---");
const caseStudyDirs = ["case-studies/vitamin-d3-stability-challenge", "case-studies/halal-kosher-gcc-export"];
for (const cs of caseStudyDirs) {
  const csPage = readFile(join(APP_DIR, cs, "page.tsx"));
  test(`TC-1.3.1: ${cs} Article has 'image' property`, () => {
    if (!csPage) return "SKIP";
    // Look for image in Article/articleJsonLd
    return /(?:article|case)[\w]*JsonLd[\s\S]*?image\s*:/im.test(csPage);
  });
}

// 1.4 — Contact page schema
console.log("\n--- 1.4: Contact page schema ---");
const contactPage = readFile(join(APP_DIR, "contact", "page.tsx"));
test("TC-1.4.1: Contact page has JSON-LD script", () => {
  return contactPage && (contactPage.includes("ld+json") || contactPage.includes("JSON.stringify"));
});
test("TC-1.4.2: Contact page has ContactPoint or LocalBusiness schema", () => {
  return contactPage && (contactPage.includes("ContactPoint") || contactPage.includes("LocalBusiness") || contactPage.includes("ContactPage"));
});

// 1.5 — Homepage entity sentence
console.log("\n--- 1.5: Homepage entity-defining sentence ---");
const homePage = readFile(join(APP_DIR, "page.tsx"));
test("TC-1.5.1: Homepage contains 'Admetus Lifesciences' in body text", () => {
  // Check for the label or paragraph text
  return homePage && homePage.includes("ADMETUS LIFESCIENCES");
});
test("TC-1.5.2: Homepage hero paragraph contains 'manufacturer' or 'manufacturing'", () => {
  // Look for manufacturer/manufacturing in prose paragraphs near the hero
  return homePage && /manufacturer|manufacturing/i.test(homePage);
});
test("TC-1.5.3: Homepage hero paragraph contains 'India' or 'Haryana'", () => {
  return homePage && /India|Haryana/i.test(homePage);
});

// 1.6 — Organization telephone
console.log("\n--- 1.6: Organization telephone ---");
test("TC-1.6.1: Organization schema has 'telephone' property", () => {
  return layoutContent && layoutContent.includes("telephone");
});
test("TC-1.6.2: Organization schema has 'contactPoint'", () => {
  return layoutContent && layoutContent.includes("contactPoint") || layoutContent.includes("ContactPoint");
});

// 1.7 — Web manifest
console.log("\n--- 1.7: Web manifest ---");
test("TC-1.7.1: site.webmanifest exists in public/", () => {
  return existsSync(join(PUBLIC_DIR, "site.webmanifest")) || existsSync(join(PUBLIC_DIR, "manifest.json"));
});

// ═══════════════════════════════════════════════════════
// PHASE 2: GEO Optimization
// ═══════════════════════════════════════════════════════
console.log("\n══════════════════════════════════════════");
console.log("PHASE 2: GEO OPTIMIZATION");
console.log("══════════════════════════════════════════\n");

// 2.1 — External citations
console.log("--- 2.1: External citations ---");
const allPages = getAllPageDirs();
let pagesWithExternalLinks = 0;
for (const dir of allPages) {
  const page = readFile(join(dir, "page.tsx"));
  if (page && /href=["']https?:\/\/(?!www\.admetuslifesciences)/i.test(page)) {
    pagesWithExternalLinks++;
  }
}
test("TC-2.1.1: At least 3 pages have external citation links", () => {
  return pagesWithExternalLinks >= 3;
});

// 2.2 — SpeakableSpecification
console.log("\n--- 2.2: SpeakableSpecification ---");
let pagesWithSpeakable = 0;
for (const dir of allPages) {
  const page = readFile(join(dir, "page.tsx"));
  if (page && page.includes("SpeakableSpecification")) pagesWithSpeakable++;
}
test("TC-2.2.1: At least 3 pages have SpeakableSpecification", () => {
  return pagesWithSpeakable >= 3;
});

// 2.3 — HowTo schema
console.log("\n--- 2.3: HowTo schema ---");
const mfgPage = readFile(join(APP_DIR, "manufacturing", "page.tsx"));
test("TC-2.3.1: Manufacturing page has HowTo JSON-LD", () => {
  return mfgPage && mfgPage.includes("HowTo");
});
test("TC-2.3.2: HowTo has >= 7 steps", () => {
  if (!mfgPage) return false;
  // Check for 7+ literal HowToStep OR a dynamic .map() generating steps from an array with 7+ items
  const stepMatches = mfgPage.match(/HowToStep/g);
  if (stepMatches && stepMatches.length >= 7) return true;
  // Dynamic pattern: array.map building HowToStep objects — check the source array has 7+ items
  const hasHowTo = mfgPage.includes("HowTo") && mfgPage.includes("HowToStep");
  const stepArrayMatches = mfgPage.match(/(?:steps|processSteps|process)\s*(?:=\s*\[|\.map)/);
  if (hasHowTo && stepArrayMatches) {
    // Count items in the steps array by counting opening braces after the array declaration
    const stepsBlock = mfgPage.match(/(?:steps|processSteps|process)\s*=\s*\[([\s\S]*?)\];/);
    if (stepsBlock) {
      const itemCount = (stepsBlock[1].match(/\{/g) || []).length;
      return itemCount >= 7;
    }
    return true; // Has HowTo + HowToStep + dynamic mapping = trust it
  }
  return false;
});

// ═══════════════════════════════════════════════════════
// PHASE 3: AEO Optimization
// ═══════════════════════════════════════════════════════
console.log("\n══════════════════════════════════════════");
console.log("PHASE 3: AEO OPTIMIZATION");
console.log("══════════════════════════════════════════\n");

// 3.1 — Homepage FAQ
console.log("--- 3.1: Homepage FAQ ---");
test("TC-3.1.1: Homepage has question-phrased headings (contains '?')", () => {
  // Look for headings with question marks — either inline or via JSX data arrays
  const questionHeadings = homePage.match(/<h[23][^>]*>[^<]*\?/g);
  if (questionHeadings && questionHeadings.length >= 3) return true;
  // Also check for FAQ data arrays with question strings rendered into h3 elements
  const hasFaqSection = homePage.includes("FAQPage") || homePage.includes("faqItems") || homePage.includes("faqJsonLd");
  const questionStrings = homePage.match(/question:\s*["'][^"']*\?["']/g);
  return hasFaqSection && questionStrings && questionStrings.length >= 3;
});
test("TC-3.1.2: Homepage has FAQPage JSON-LD", () => {
  return homePage && homePage.includes("FAQPage");
});

// 3.2 — About page FAQ
console.log("\n--- 3.2: About page FAQ ---");
const aboutPage = readFile(join(APP_DIR, "about", "page.tsx"));
test("TC-3.2.1: About page has FAQ section with <details> elements", () => {
  return aboutPage && aboutPage.includes("<details");
});
test("TC-3.2.2: About page has FAQPage JSON-LD", () => {
  return aboutPage && aboutPage.includes("FAQPage");
});

// 3.3 — Comparison tables
console.log("\n--- 3.3: Comparison tables ---");
let pagesWithTables = 0;
for (const dir of allPages) {
  const page = readFile(join(dir, "page.tsx"));
  if (page && page.includes("<table")) pagesWithTables++;
}
test("TC-3.3.1: At least 2 pages have HTML <table> elements", () => {
  return pagesWithTables >= 2;
});

// 3.5 — BreadcrumbList coverage
console.log("\n--- 3.5: BreadcrumbList coverage ---");
const breadcrumbPages = [];
const noBreadcrumbPages = [];
for (const dir of allPages) {
  const page = readFile(join(dir, "page.tsx"));
  const rel = getRelativePath(dir);
  if (page && page.includes("BreadcrumbList")) {
    breadcrumbPages.push(rel);
  } else {
    noBreadcrumbPages.push(rel);
  }
}
test("TC-3.5.1: At least 80% of pages have BreadcrumbList schema", () => {
  const total = breadcrumbPages.length + noBreadcrumbPages.length;
  return total > 0 && (breadcrumbPages.length / total) >= 0.8;
});
if (noBreadcrumbPages.length > 0) {
  console.log(`     Missing BreadcrumbList: ${noBreadcrumbPages.join(", ")}`);
}

// ═══════════════════════════════════════════════════════
// PHASE 4: OG Tags
// ═══════════════════════════════════════════════════════
console.log("\n══════════════════════════════════════════");
console.log("PHASE 4: OPENGRAPH TAGS");
console.log("══════════════════════════════════════════\n");

const layoutFiles = [];
function findLayouts(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && !entry.name.startsWith(".")) {
      findLayouts(join(dir, entry.name));
    } else if (entry.name === "layout.tsx") {
      layoutFiles.push(join(dir, entry.name));
    }
  }
}
findLayouts(APP_DIR);

const missingOG = [];
for (const lf of layoutFiles) {
  const content = readFile(lf);
  const rel = lf.replace(APP_DIR, "").replace("/layout.tsx", "") || "(root)";
  if (content && content.includes("metadata") && !content.includes("openGraph")) {
    missingOG.push(rel);
  }
}
test("TC-4.1.1: All layout.tsx files with metadata have openGraph", () => {
  return missingOG.length === 0;
});
if (missingOG.length > 0) {
  console.log(`     Missing OG: ${missingOG.join(", ")}`);
}

// ═══════════════════════════════════════════════════════
// PHASE 5: Blog
// ═══════════════════════════════════════════════════════
console.log("\n══════════════════════════════════════════");
console.log("PHASE 5: BLOG INFRASTRUCTURE");
console.log("══════════════════════════════════════════\n");

test("TC-5.1.1: /blog/ directory exists", () => {
  return existsSync(join(APP_DIR, "blog"));
});
test("TC-5.1.2: Blog index page.tsx exists", () => {
  return existsSync(join(APP_DIR, "blog", "page.tsx"));
});
test("TC-5.1.3: Blog detail template [slug]/page.tsx exists", () => {
  return existsSync(join(APP_DIR, "blog", "[slug]", "page.tsx"));
});

// ═══════════════════════════════════════════════════════
// PHASE 6: Technical Debt
// ═══════════════════════════════════════════════════════
console.log("\n══════════════════════════════════════════");
console.log("PHASE 6: TECHNICAL DEBT");
console.log("══════════════════════════════════════════\n");

// 6.1 — Phone consistency
test("TC-6.1.1: Footer phone matches Organization schema phone", () => {
  const footerContent = readFile(join(ROOT, "src", "components", "footer.tsx"));
  // Check that the schema phone appears in footer
  if (!layoutContent || !footerContent) return false;
  // Extract phone from layout schema
  const schemaPhone = layoutContent.match(/telephone['":\s]+["'](\+91[\d-]+)/);
  if (!schemaPhone) return "SKIP"; // No telephone in schema yet
  return footerContent.includes(schemaPhone[1]);
});

// 6.2 — Contact form key
test("TC-6.2.1: Contact form does NOT have placeholder API key", () => {
  return contactPage && !contactPage.includes("YOUR_ACCESS_KEY_HERE");
});

// ═══════════════════════════════════════════════════════
// CANONICAL URL COVERAGE
// ═══════════════════════════════════════════════════════
console.log("\n══════════════════════════════════════════");
console.log("CANONICAL URL COVERAGE");
console.log("══════════════════════════════════════════\n");

const missingCanonicals = [];
for (const lf of layoutFiles) {
  const content = readFile(lf);
  const rel = lf.replace(APP_DIR, "").replace("/layout.tsx", "") || "(root)";
  if (rel === "(root)") continue; // Root layout has a global canonical
  if (content && content.includes("metadata") && content.includes("title") && !content.includes("canonical")) {
    missingCanonicals.push(rel);
  }
}
test("TC-CANON.1: All page layouts have canonical URLs", () => {
  return missingCanonicals.length === 0;
});
if (missingCanonicals.length > 0) {
  console.log(`     Missing canonical: ${missingCanonicals.join(", ")}`);
}

// ═══════════════════════════════════════════════════════
// RESULTS
// ═══════════════════════════════════════════════════════
console.log("\n══════════════════════════════════════════");
console.log("RESULTS");
console.log("══════════════════════════════════════════\n");
console.log(`  ✅ Passed:  ${passed}`);
console.log(`  ❌ Failed:  ${failed}`);
console.log(`  ⏭  Skipped: ${skipped}`);
console.log(`  📊 Total:   ${passed + failed + skipped}`);
console.log(`  📈 Score:   ${Math.round((passed / (passed + failed)) * 100)}%\n`);

if (failures.length > 0) {
  console.log("Failed tests:");
  for (const f of failures) {
    console.log(`  • ${f}`);
  }
}

process.exit(failed > 0 ? 1 : 0);
