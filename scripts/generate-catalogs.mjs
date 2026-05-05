#!/usr/bin/env node
/**
 * Generate the two branded Admetus catalog PDFs.
 *
 * Outputs:
 *   public/pdfs/admetus-private-label-catalog.pdf
 *   public/pdfs/admetus-contract-manufacturing-capabilities.pdf
 *
 * Run: node scripts/generate-catalogs.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import React from "react";
import { Document, Page, Text, View, StyleSheet, Image, pdf } from "@react-pdf/renderer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// --- Brand tokens ---
const GOLD = "#C8A951";
const GOLD_LIGHT = "#E5C97D";
const BG = "#0E0E10";
const PANEL = "#17171A";
const TEXT = "#F5F1E8";
const MUTED = "#9C9A93";
const RULE = "#2A2A2E";

// --- Read source data ---
const fssai = JSON.parse(fs.readFileSync(path.join(ROOT, "data/fssai-formulations.json"), "utf8"));
const productsTs = fs.readFileSync(path.join(ROOT, "src/data/products.ts"), "utf8");

// Parse products.ts via simple regex extraction (no TS imports in mjs)
function parseProducts(src) {
  const items = [];
  // Match each product block from `slug:` up to the next `slug:` or end of array
  const blockRe = /\{\s*slug:\s*"([^"]+)"[\s\S]*?color:\s*"([^"]+)"[\s\S]*?\}(?=\s*[,\]])/g;
  let m;
  while ((m = blockRe.exec(src)) !== null) {
    const block = m[0];
    const get = (k) => {
      const r = new RegExp(k + ':\\s*"([^"]+)"');
      const r2 = block.match(r);
      return r2 ? r2[1] : "";
    };
    const arr = (k) => {
      const r = new RegExp(k + ":\\s*\\[([\\s\\S]*?)\\]");
      const r2 = block.match(r);
      if (!r2) return [];
      return [...r2[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]);
    };
    items.push({
      slug: get("slug"),
      name: get("name"),
      tagline: get("tagline"),
      composition: get("composition"),
      ingredients: arr("ingredients"),
      benefits: arr("benefits"),
      packSize: get("packSize"),
      dosageForm: get("dosageForm"),
      category: get("category"),
      color: m[2],
    });
  }
  return items;
}

const products = parseProducts(productsTs);
console.log(`Parsed ${products.length} private-label products`);

// --- Shared styles ---
const styles = StyleSheet.create({
  page: {
    backgroundColor: BG,
    color: TEXT,
    paddingTop: 48,
    paddingBottom: 60,
    paddingHorizontal: 48,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.5,
  },
  // Header strip
  topRule: { height: 2, backgroundColor: GOLD, marginBottom: 24 },
  headerRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 32 },
  brandMark: { fontFamily: "Helvetica-Bold", fontSize: 14, color: GOLD, letterSpacing: 2 },
  brandSub: { fontSize: 7, color: MUTED, letterSpacing: 1.5, marginTop: 2 },
  docTag: { fontSize: 7, color: GOLD, letterSpacing: 1.5, textAlign: "right" },

  // Cover hero
  coverEyebrow: { fontSize: 9, color: GOLD, letterSpacing: 3, marginBottom: 12 },
  coverTitle: { fontFamily: "Helvetica-Bold", fontSize: 36, color: TEXT, lineHeight: 1.1, marginBottom: 16 },
  coverTitleAlt: { fontFamily: "Helvetica-Bold", fontSize: 36, color: GOLD, lineHeight: 1.1 },
  coverLede: { fontSize: 11, color: MUTED, marginTop: 24, maxWidth: 380, lineHeight: 1.55 },
  coverGoldRule: { width: 36, height: 2, backgroundColor: GOLD, marginVertical: 28 },

  coverFactGrid: { flexDirection: "row", marginTop: 36, gap: 0 },
  coverFactBox: { flex: 1, paddingRight: 20 },
  coverFactValue: { fontFamily: "Helvetica-Bold", fontSize: 18, color: GOLD },
  coverFactLabel: { fontSize: 7, color: MUTED, letterSpacing: 1.2, marginTop: 4, textTransform: "uppercase" },

  // Section
  sectionEyebrow: { fontSize: 8, color: GOLD, letterSpacing: 2, marginBottom: 8, textTransform: "uppercase" },
  sectionTitle: { fontFamily: "Helvetica-Bold", fontSize: 18, color: TEXT, marginBottom: 4 },
  sectionRule: { width: 28, height: 1.5, backgroundColor: GOLD, marginVertical: 14 },
  sectionPara: { fontSize: 10, color: MUTED, lineHeight: 1.6, marginBottom: 14, maxWidth: 480 },

  // Product card (Private Label)
  productCard: { borderTopWidth: 1, borderTopColor: RULE, paddingVertical: 16, marginBottom: 0 },
  productHeaderRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 6 },
  productName: { fontFamily: "Helvetica-Bold", fontSize: 12, color: TEXT, letterSpacing: 0.5 },
  productCategory: { fontSize: 7, color: GOLD, letterSpacing: 1.5, textTransform: "uppercase" },
  productTagline: { fontSize: 9, color: GOLD_LIGHT, marginBottom: 8, fontStyle: "italic" },
  productMetaRow: { flexDirection: "row", marginTop: 8, marginBottom: 6 },
  productMetaLabel: { fontSize: 7, color: MUTED, letterSpacing: 1, textTransform: "uppercase", width: 70 },
  productMetaValue: { fontSize: 9, color: TEXT, flex: 1 },
  productSubhead: { fontSize: 7, color: GOLD, letterSpacing: 1.2, textTransform: "uppercase", marginTop: 6, marginBottom: 4 },
  productList: { marginBottom: 4 },
  productListItem: { fontSize: 9, color: TEXT, marginBottom: 2, paddingLeft: 8 },

  // Capability category (Contract)
  catBlock: { marginBottom: 18 },
  catHeader: { flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: GOLD, paddingBottom: 6, marginBottom: 10 },
  catName: { fontFamily: "Helvetica-Bold", fontSize: 12, color: GOLD, letterSpacing: 0.5, flex: 1 },
  catCount: { fontSize: 8, color: MUTED, letterSpacing: 1 },
  catFormulation: { flexDirection: "row", marginBottom: 5 },
  catBullet: { fontSize: 9, color: GOLD, marginRight: 6, marginTop: 1 },
  catFormulationText: { flex: 1, fontSize: 9, color: TEXT, lineHeight: 1.45 },

  // Footer
  footer: {
    position: "absolute",
    bottom: 24,
    left: 48,
    right: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 0.5,
    borderTopColor: RULE,
    paddingTop: 10,
  },
  footerText: { fontSize: 7, color: MUTED, letterSpacing: 0.5 },
  footerGold: { fontSize: 7, color: GOLD, letterSpacing: 1 },
});

// --- Components ---
const Header = ({ doctag }) => (
  React.createElement(View, null,
    React.createElement(View, { style: styles.topRule }),
    React.createElement(View, { style: styles.headerRow },
      React.createElement(View, null,
        React.createElement(Text, { style: styles.brandMark }, "ADMETUS"),
        React.createElement(Text, { style: styles.brandSub }, "LIFESCIENCES — SOFTGEL MANUFACTURING"),
      ),
      React.createElement(View, null,
        React.createElement(Text, { style: styles.docTag }, doctag),
      ),
    ),
  )
);

const Footer = () => (
  React.createElement(View, { style: styles.footer, fixed: true },
    React.createElement(Text, { style: styles.footerText },
      "Village Anta, Tehsil Safidon, District Jind, Haryana 126112, India   ·   www.admetuslifesciences.com",
    ),
    React.createElement(Text, { style: styles.footerGold, render: ({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}` }),
  )
);

const Cover = ({ eyebrow, title1, title2, lede, facts }) => (
  React.createElement(View, null,
    React.createElement(Text, { style: styles.coverEyebrow }, eyebrow),
    React.createElement(Text, { style: styles.coverTitle }, title1),
    React.createElement(Text, { style: styles.coverTitleAlt }, title2),
    React.createElement(View, { style: styles.coverGoldRule }),
    React.createElement(Text, { style: styles.coverLede }, lede),
    React.createElement(View, { style: styles.coverFactGrid },
      ...facts.map((f, i) =>
        React.createElement(View, { style: styles.coverFactBox, key: i },
          React.createElement(Text, { style: styles.coverFactValue }, f.value),
          React.createElement(Text, { style: styles.coverFactLabel }, f.label),
        ),
      ),
    ),
  )
);

const SectionHead = ({ eyebrow, title, body }) => (
  React.createElement(View, null,
    React.createElement(Text, { style: styles.sectionEyebrow }, eyebrow),
    React.createElement(Text, { style: styles.sectionTitle }, title),
    React.createElement(View, { style: styles.sectionRule }),
    body ? React.createElement(Text, { style: styles.sectionPara }, body) : null,
  )
);

// --- Private-label catalog ---
const ProductCard = ({ p }) =>
  React.createElement(View, { style: styles.productCard, wrap: false },
    React.createElement(View, { style: styles.productHeaderRow },
      React.createElement(Text, { style: styles.productName }, p.name),
      React.createElement(Text, { style: styles.productCategory }, p.category),
    ),
    React.createElement(Text, { style: styles.productTagline }, p.tagline),
    React.createElement(View, { style: styles.productMetaRow },
      React.createElement(Text, { style: styles.productMetaLabel }, "Composition"),
      React.createElement(Text, { style: styles.productMetaValue }, p.composition),
    ),
    React.createElement(View, { style: styles.productMetaRow },
      React.createElement(Text, { style: styles.productMetaLabel }, "Pack size"),
      React.createElement(Text, { style: styles.productMetaValue }, p.packSize),
    ),
    React.createElement(Text, { style: styles.productSubhead }, "Key benefits"),
    React.createElement(View, { style: styles.productList },
      ...p.benefits.slice(0, 4).map((b, i) =>
        React.createElement(Text, { style: styles.productListItem, key: i }, "·  " + b),
      ),
    ),
  );

const PrivateLabelCatalog = () =>
  React.createElement(Document, null,
    // Cover
    React.createElement(Page, { size: "A4", style: styles.page },
      React.createElement(Header, { doctag: "PRIVATE-LABEL CATALOG  ·  2026" }),
      React.createElement(Cover, {
        eyebrow: "READY-TO-LAUNCH FORMULATIONS",
        title1: "PUT YOUR BRAND",
        title2: "ON OUR PROVEN SKUs.",
        lede:
          "Ten proven softgel formulations developed and produced at our WHO-GMP facility in Village Anta, Safidon, Jind. Add your label, your packaging, your market — we handle the science, the certifications, and the supply.",
        facts: [
          { value: "10", label: "Ready Formulations" },
          { value: "WHO-GMP", label: "Certified" },
          { value: "FSSAI", label: "Central Licence" },
          { value: "Halal · Kosher", label: "Available" },
        ],
      }),
      React.createElement(Footer, null),
    ),
    // Products
    React.createElement(Page, { size: "A4", style: styles.page },
      React.createElement(Header, { doctag: "PRIVATE-LABEL CATALOG  ·  2026" }),
      React.createElement(SectionHead, {
        eyebrow: "THE LINE-UP",
        title: "Ten proven softgel formulations.",
        body:
          "Each formulation has been validated on our ARBES SGX-806P encapsulation line and Elmach EPI 2000 blister-packing line. Stability, dissolution and assay data are available on request under NDA.",
      }),
      ...products.map((p, i) =>
        React.createElement(ProductCard, { p, key: p.slug || i }),
      ),
      React.createElement(Footer, null),
    ),
    // Closing
    React.createElement(Page, { size: "A4", style: styles.page },
      React.createElement(Header, { doctag: "PRIVATE-LABEL CATALOG  ·  2026" }),
      React.createElement(SectionHead, {
        eyebrow: "WORK WITH US",
        title: "From brief to first dispatch in 6–12 weeks.",
        body:
          "Most private-label engagements move from signed brief to first commercial dispatch within 6–12 weeks. We support custom packaging artwork, regulatory dossier compilation for export markets (GCC, ASEAN, EU), and ongoing batch supply at MOQs that scale with your demand.",
      }),
      React.createElement(View, { style: { marginTop: 8 } },
        React.createElement(Text, { style: styles.productSubhead }, "Typical engagement timeline"),
        ...[
          ["Week 1–2", "Brief, formulation review, raw material sourcing alignment"],
          ["Week 3–5", "Pilot batch, sensory & visual sample dispatch, packaging finalisation"],
          ["Week 6–8", "Stability initiation, regulatory dossier compilation"],
          ["Week 9–12", "Commercial production, QC release, dispatch"],
        ].map((row, i) =>
          React.createElement(View, { style: { flexDirection: "row", marginVertical: 4 }, key: i },
            React.createElement(Text, { style: { width: 80, fontSize: 8, color: GOLD, letterSpacing: 1 } }, row[0]),
            React.createElement(Text, { style: { flex: 1, fontSize: 9, color: TEXT } }, row[1]),
          ),
        ),
      ),
      React.createElement(View, { style: { marginTop: 32, padding: 18, backgroundColor: PANEL, borderLeftWidth: 2, borderLeftColor: GOLD } },
        React.createElement(Text, { style: { fontSize: 9, color: GOLD, letterSpacing: 2, marginBottom: 6 } }, "REQUEST A QUOTE"),
        React.createElement(Text, { style: { fontFamily: "Helvetica-Bold", fontSize: 14, color: TEXT, marginBottom: 6 } }, "sales@admetuslifesciences.com"),
        React.createElement(Text, { style: { fontSize: 9, color: MUTED, lineHeight: 1.5 } },
          "Detailed quotation within 48 hours, NDA available on request, audit visits welcome at our Village Anta facility.",
        ),
      ),
      React.createElement(View, { style: { marginTop: 24, paddingTop: 14, borderTopWidth: 0.5, borderTopColor: RULE } },
        React.createElement(Text, { style: { fontSize: 7, color: MUTED, letterSpacing: 1, marginBottom: 4 } }, "REGULATORY"),
        React.createElement(Text, { style: { fontSize: 8, color: TEXT, lineHeight: 1.5 } },
          "FSSAI Central Licence No. 10020064002545  ·  Manufacturer & Exporter scope  ·  Issued 25 December 2025  ·  Valid through 03 October 2026",
        ),
        React.createElement(Text, { style: { fontSize: 8, color: TEXT, lineHeight: 1.5, marginTop: 4 } },
          "WHO-GMP certified  ·  HACCP  ·  Halal  ·  ISO 9001:2015 quality systems",
        ),
      ),
      React.createElement(Footer, null),
    ),
  );

// --- Capabilities catalog ---
const capabilitiesIntro = (
  "This document lists the formulation capabilities under our active FSSAI Central Licence " +
  "(No. 10020064002545, valid through 03 October 2026). All formulations are produced as soft " +
  "gelatin capsules at our WHO-GMP certified facility. Composition, dosage strengths and pack " +
  "sizes are tailored to each contract — this list represents the licensed scope, not a fixed " +
  "menu."
);

const ContractCatalog = () =>
  React.createElement(Document, null,
    // Cover
    React.createElement(Page, { size: "A4", style: styles.page },
      React.createElement(Header, { doctag: "CONTRACT MANUFACTURING — CAPABILITIES  ·  2026" }),
      React.createElement(Cover, {
        eyebrow: "FULL FSSAI-LICENSED SCOPE",
        title1: "BUILD YOUR",
        title2: "FORMULATION WITH US.",
        lede:
          "We are licensed to manufacture across 13 nutraceutical categories and " +
          fssai.total_formulations +
          "+ formulation profiles under FSSAI Central Licence No. " +
          fssai.license_number +
          ". This catalogue lists the licensed scope; specific compositions, dosages and pack formats are designed per-contract.",
        facts: [
          { value: String(fssai.total_formulations) + "+", label: "Licensed Formulations" },
          { value: String(fssai.categories.length), label: "Therapeutic Categories" },
          { value: "Central", label: "FSSAI Licence Tier" },
          { value: "Export", label: "Authorised Scope" },
        ],
      }),
      React.createElement(Footer, null),
    ),
    // Categories
    React.createElement(Page, { size: "A4", style: styles.page },
      React.createElement(Header, { doctag: "CONTRACT MANUFACTURING — CAPABILITIES  ·  2026" }),
      React.createElement(SectionHead, {
        eyebrow: "LICENSED FORMULATION SCOPE",
        title: "Thirteen categories. " + fssai.total_formulations + "+ formulation profiles.",
        body: capabilitiesIntro,
      }),
      ...fssai.categories.map((cat, i) =>
        React.createElement(View, { style: styles.catBlock, key: i },
          React.createElement(View, { style: styles.catHeader, wrap: false },
            React.createElement(Text, { style: styles.catName }, cat.name),
            React.createElement(Text, { style: styles.catCount }, cat.formulations.length + " formulations"),
          ),
          ...cat.formulations.map((f, j) =>
            React.createElement(View, { style: styles.catFormulation, key: j, wrap: false },
              React.createElement(Text, { style: styles.catBullet }, "›"),
              React.createElement(Text, { style: styles.catFormulationText }, f.composition),
            ),
          ),
        ),
      ),
      React.createElement(Footer, null),
    ),
    // Closing — engagement model
    React.createElement(Page, { size: "A4", style: styles.page },
      React.createElement(Header, { doctag: "CONTRACT MANUFACTURING — CAPABILITIES  ·  2026" }),
      React.createElement(SectionHead, {
        eyebrow: "HOW WE WORK",
        title: "Custom formulation, manufactured under licence.",
        body:
          "Contract manufacturing engagements typically follow four stages from initial brief to commercial supply. Specific timelines depend on formulation complexity, regulatory requirements and stability-study scope.",
      }),
      ...[
        ["01  ·  Brief & Feasibility", "We review your target composition against our licensed scope and raw-material sourcing. Output: feasibility note, indicative pricing, recommended specifications."],
        ["02  ·  Pilot Development", "Pilot batch on the ARBES SGX-806P line under representative conditions. Sample dispatch for sensory, visual, and dissolution evaluation."],
        ["03  ·  Validation & Stability", "ICH Q1A(R2)-aligned accelerated stability protocol initiated. Regulatory dossier compilation in parallel: composition statement, manufacturing process flow, COA samples, GMP, FSSAI, Halal certificates as applicable."],
        ["04  ·  Commercial Supply", "Full commercial production, in-house QC release, finished-goods packaging and dispatch. Ongoing batch supply scaled to your demand profile."],
      ].map((row, i) =>
        React.createElement(View, { style: { marginVertical: 8 }, key: i },
          React.createElement(Text, { style: { fontFamily: "Helvetica-Bold", fontSize: 11, color: GOLD, marginBottom: 4 } }, row[0]),
          React.createElement(Text, { style: { fontSize: 9, color: TEXT, lineHeight: 1.5 } }, row[1]),
        ),
      ),
      React.createElement(View, { style: { marginTop: 28, padding: 18, backgroundColor: PANEL, borderLeftWidth: 2, borderLeftColor: GOLD } },
        React.createElement(Text, { style: { fontSize: 9, color: GOLD, letterSpacing: 2, marginBottom: 6 } }, "DISCUSS A CONTRACT"),
        React.createElement(Text, { style: { fontFamily: "Helvetica-Bold", fontSize: 14, color: TEXT, marginBottom: 6 } }, "sales@admetuslifesciences.com"),
        React.createElement(Text, { style: { fontSize: 9, color: MUTED, lineHeight: 1.5 } },
          "Audit visits welcome at our Village Anta facility. NDA available on request. Detailed quotation within 48 hours of brief receipt.",
        ),
      ),
      React.createElement(View, { style: { marginTop: 24, paddingTop: 14, borderTopWidth: 0.5, borderTopColor: RULE } },
        React.createElement(Text, { style: { fontSize: 7, color: MUTED, letterSpacing: 1, marginBottom: 4 } }, "LICENCE & SCOPE"),
        React.createElement(Text, { style: { fontSize: 8, color: TEXT, lineHeight: 1.5 } },
          "FSSAI Central Licence No. " + fssai.license_number + "  ·  " + fssai.scope + "  ·  Issued " + fssai.issued_on + "  ·  Valid through " + fssai.license_valid_upto,
        ),
        React.createElement(Text, { style: { fontSize: 8, color: TEXT, lineHeight: 1.5, marginTop: 4 } },
          "Authorised premises: " + fssai.authorised_premises,
        ),
      ),
      React.createElement(Footer, null),
    ),
  );

// --- Render ---
async function render(doc, outPath) {
  const buffer = await pdf(doc).toBuffer();
  // toBuffer returns a Readable in Node — gather to Buffer
  if (Buffer.isBuffer(buffer)) {
    fs.writeFileSync(outPath, buffer);
  } else {
    // Stream
    await new Promise((resolve, reject) => {
      const chunks = [];
      buffer.on("data", (c) => chunks.push(c));
      buffer.on("end", () => {
        fs.writeFileSync(outPath, Buffer.concat(chunks));
        resolve();
      });
      buffer.on("error", reject);
    });
  }
  const stat = fs.statSync(outPath);
  console.log(`Wrote ${path.relative(ROOT, outPath)}  (${(stat.size / 1024).toFixed(1)} KB)`);
}

const outDir = path.join(ROOT, "public/pdfs");
fs.mkdirSync(outDir, { recursive: true });

await render(React.createElement(PrivateLabelCatalog), path.join(outDir, "admetus-private-label-catalog.pdf"));
await render(React.createElement(ContractCatalog), path.join(outDir, "admetus-contract-manufacturing-capabilities.pdf"));

console.log("Done.");
