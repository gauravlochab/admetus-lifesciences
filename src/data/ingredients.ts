/**
 * Ingredient / product-type softgel landing pages.
 *
 * Data-driven SEO landing pages targeting "<ingredient> softgel manufacturer / exporter"
 * search terms — a keyword gap where competitors rank with dedicated ingredient pages.
 * Rendered by src/app/softgel-manufacturer/[ingredient]/page.tsx.
 * Copy is original marketing text (no competitor prose).
 */

export interface FaqItem {
  q: string;
  a: string;
}

export interface IngredientPage {
  slug: string;
  name: string;
  eyebrow: string;
  h1: string; // may include a <br/> — rendered as two lines
  metaTitle: string; // aim <= 60 chars
  metaDescription: string; // aim <= 155 chars
  category: string;
  intro: string;
  actives: string;
  benefits: string[];
  applications: string[];
  keywords: string[];
  faqs: FaqItem[];
  relatedProductSlug?: string;
}

export const ingredientPages: IngredientPage[] = [
  {
    slug: "omega-3-fish-oil",
    name: "Omega-3 Fish Oil",
    eyebrow: "Omega & Heart Health",
    h1: "OMEGA-3 SOFTGEL<br />MANUFACTURER",
    metaTitle: "Omega-3 Softgel Manufacturer & Exporter India | Admetus",
    metaDescription:
      "WHO-GMP certified omega-3 fish oil softgel manufacturer & exporter in India. EPA/DHA, custom strengths, private label & bulk supply. FSSAI & Halal certified.",
    category: "Omega & Heart Health",
    intro:
      "Contract manufacturing and export of omega-3 fish oil softgel capsules from our WHO-GMP certified facility in Jind, Haryana — standardized EPA/DHA concentrations, oxidation-controlled fill, and export-ready documentation for global buyers.",
    actives:
      "Marine fish oil standardized for EPA + DHA (30/20, 33/22, high-concentrate options), optional Vitamin E for oxidative stability.",
    benefits: [
      "Standardized EPA/DHA ratios with low peroxide value (oxidation-controlled)",
      "Custom concentrations, softgel sizes, and enteric-coating options",
      "Private label & third-party manufacturing under your brand",
      "Bulk supply with COA, stability data, and Free Sale Certificate",
      "Halal-certified sourcing for GCC and Muslim-majority markets",
    ],
    applications: [
      "Heart & cardiovascular support",
      "Brain, eye & joint health",
      "Prenatal & general wellness ranges",
    ],
    keywords: [
      "omega 3 softgel manufacturer india",
      "fish oil softgel manufacturer",
      "epa dha softgel supplier",
      "omega 3 softgel exporter india",
      "private label omega 3 softgel",
      "bulk fish oil capsules india",
    ],
    faqs: [
      { q: "What EPA/DHA concentrations can you manufacture?", a: "We manufacture standard 30/20 and 33/22 fish oil as well as high-concentrate omega-3 softgels to your specification. Exact EPA/DHA is confirmed on the proforma with matching COA." },
      { q: "Do you offer private label omega-3 softgels?", a: "Yes — omega-3 softgels are manufactured under your brand with custom packaging, blister or bottle, and labeling aligned to your destination market's regulations." },
      { q: "Is your fish oil Halal certified?", a: "Yes. Our facility and sourcing hold Halal certification, and we provide Halal documentation for GCC, Middle East, and Muslim-majority market registration." },
    ],
    relatedProductSlug: "omega-3-vitamin-e-softgel",
  },
  {
    slug: "vitamin-d3",
    name: "Vitamin D3",
    eyebrow: "Bone & Immunity",
    h1: "VITAMIN D3 SOFTGEL<br />MANUFACTURER",
    metaTitle: "Vitamin D3 Softgel Manufacturer & Exporter India | Admetus",
    metaDescription:
      "WHO-GMP certified Vitamin D3 (cholecalciferol) softgel manufacturer & exporter in India — 60000 IU & custom strengths, private label, bulk. FSSAI & Halal.",
    category: "Calcium & Bone Health",
    intro:
      "Manufacturing and export of Cholecalciferol (Vitamin D3) softgel capsules — including high-dose 60,000 IU weekly softgels, one of the highest-volume nutraceutical categories across Africa, GCC, and South Asia.",
    actives:
      "Cholecalciferol (Vitamin D3) in strengths from 1,000 IU to 60,000 IU; combinations with calcium, K2-7, and magnesium available.",
    benefits: [
      "High-dose 60,000 IU weekly softgels — proven high-demand SKU",
      "Custom strengths and Vitamin D3 + calcium/K2-7 combinations",
      "Accurate, verified potency with assay on every batch",
      "Private label, third-party, and bulk export supply",
      "Full export documentation and Halal certification",
    ],
    applications: [
      "Vitamin D deficiency correction",
      "Bone & muscle health",
      "Immunity support ranges",
    ],
    keywords: [
      "vitamin d3 softgel manufacturer india",
      "cholecalciferol 60000 iu softgel",
      "vitamin d3 60000 iu manufacturer",
      "vitamin d3 softgel exporter",
      "calcium vitamin d3 softgel manufacturer",
    ],
    faqs: [
      { q: "Do you manufacture 60,000 IU Vitamin D3 softgels?", a: "Yes — high-dose Cholecalciferol 60,000 IU weekly softgels are a core SKU, with verified potency and stability data provided for registration." },
      { q: "Can you combine Vitamin D3 with calcium or K2-7?", a: "Yes. We manufacture Vitamin D3 with calcium carbonate/citrate, Vitamin K2-7 (MK-7), magnesium, and other actives as custom formulations." },
    ],
    relatedProductSlug: "cholecalciferol-60000-iu",
  },
  {
    slug: "ashwagandha",
    name: "Ashwagandha",
    eyebrow: "Ayurvedic & Herbal",
    h1: "ASHWAGANDHA SOFTGEL<br />MANUFACTURER",
    metaTitle: "Ashwagandha Softgel Manufacturer & Exporter India | Admetus",
    metaDescription:
      "WHO-GMP certified Ayurvedic ashwagandha softgel manufacturer & exporter in India — standardized withanolides, private label & bulk. FSSAI & Halal certified.",
    category: "Ayurvedic & Herbal",
    intro:
      "Ayurvedic ashwagandha (Withania somnifera) softgel capsules manufactured and exported from India — standardized-extract, oil-suspension softgels for the fast-growing global adaptogen and stress-support market.",
    actives:
      "Ashwagandha root extract standardized for withanolides (2.5% / 5% and full-spectrum options); oil-suspension softgel format for stability and bioavailability.",
    benefits: [
      "Standardized withanolide content with batch assay",
      "Ayurvedic + softgel crossover — a category few manufacturers cover",
      "Private label and custom adaptogen blends (ashwagandha + shilajit, etc.)",
      "Export-ready with COA, heavy-metal, and pesticide testing",
      "Halal / vegetarian (HPMC) softgel options available",
    ],
    applications: [
      "Stress, sleep & adaptogen ranges",
      "Sports & vitality supplements",
      "Ayurvedic and herbal wellness brands",
    ],
    keywords: [
      "ashwagandha softgel manufacturer india",
      "ayurvedic softgel manufacturer",
      "withania somnifera softgel supplier",
      "herbal softgel manufacturer india",
      "ashwagandha softgel exporter",
    ],
    faqs: [
      { q: "Do you manufacture standardized ashwagandha softgels?", a: "Yes — we manufacture ashwagandha softgels with standardized withanolide content (e.g. 2.5% or 5%) and provide assay, heavy-metal, and pesticide-residue testing for export." },
      { q: "Can ashwagandha be made as a vegetarian softgel?", a: "Yes. We offer HPMC (non-gelatin) vegetarian softgel options for ashwagandha and other herbal actives, suitable for vegan and vegetarian ranges." },
    ],
  },
  {
    slug: "curcumin-turmeric",
    name: "Curcumin / Turmeric",
    eyebrow: "Ayurvedic & Herbal",
    h1: "CURCUMIN SOFTGEL<br />MANUFACTURER",
    metaTitle: "Curcumin Softgel Manufacturer & Exporter India | Admetus",
    metaDescription:
      "WHO-GMP certified curcumin / turmeric softgel manufacturer & exporter in India — 95% curcuminoids, piperine, private label & bulk. FSSAI & Halal certified.",
    category: "Ayurvedic & Herbal",
    intro:
      "Curcumin and turmeric extract softgel capsules manufactured in India — standardized 95% curcuminoids with optional piperine or bioavailability-enhanced systems, for the global joint-health and anti-inflammatory supplement market.",
    actives:
      "Turmeric extract standardized to 95% curcuminoids; optional BioPerine (piperine) or lipid/phospholipid bioavailability systems.",
    benefits: [
      "Standardized 95% curcuminoid extract with assay",
      "Bioavailability-enhanced options (piperine / lipid systems)",
      "Ayurvedic softgel specialist — herbal + softgel expertise",
      "Private label, third-party, and bulk export",
      "Halal and vegetarian softgel formats available",
    ],
    applications: [
      "Joint & mobility support",
      "Anti-inflammatory & antioxidant ranges",
      "Ayurvedic and herbal wellness brands",
    ],
    keywords: [
      "curcumin softgel manufacturer india",
      "turmeric softgel manufacturer",
      "curcumin 95 softgel supplier",
      "ayurvedic curcumin softgel exporter",
      "herbal softgel manufacturer india",
    ],
    faqs: [
      { q: "What curcuminoid standardization do you offer?", a: "We manufacture curcumin softgels standardized to 95% curcuminoids, with optional piperine or bioavailability-enhancing lipid systems, backed by assay on every batch." },
    ],
  },
  {
    slug: "glutathione",
    name: "Glutathione",
    eyebrow: "Antioxidant & Skin Health",
    h1: "GLUTATHIONE SOFTGEL<br />MANUFACTURER",
    metaTitle: "Glutathione Softgel Manufacturer & Exporter India | Admetus",
    metaDescription:
      "WHO-GMP certified L-glutathione softgel manufacturer & exporter in India — with ALA & grape seed, private label & bulk. FSSAI & Halal certified.",
    category: "Antioxidant & Multivitamin",
    intro:
      "L-Glutathione softgel capsules — one of the fastest-growing skin-health and antioxidant categories in GCC and Southeast Asian pharmacy retail — manufactured and exported from India with alpha-lipoic acid and grape-seed combinations.",
    actives:
      "L-Glutathione (reduced), often combined with Alpha-Lipoic Acid (ALA), grape seed extract, Vitamin C, and collagen.",
    benefits: [
      "Reduced L-glutathione with complementary antioxidants",
      "High-demand skin-health / beauty-from-within category",
      "Custom combinations (glutathione + ALA + Vitamin C + collagen)",
      "Private label and bulk export supply",
      "Halal certification for GCC beauty & wellness markets",
    ],
    applications: [
      "Skin brightening & beauty ranges",
      "Antioxidant & detox support",
      "Premium wellness brands",
    ],
    keywords: [
      "glutathione softgel manufacturer india",
      "l-glutathione softgel supplier",
      "glutathione ala softgel manufacturer",
      "skin whitening softgel manufacturer",
      "glutathione softgel exporter",
    ],
    faqs: [
      { q: "Can you combine glutathione with other actives?", a: "Yes — we manufacture glutathione softgels with alpha-lipoic acid, grape seed extract, Vitamin C, and collagen as custom antioxidant and skin-health formulations." },
    ],
    relatedProductSlug: "glutathione-ala-grape-seed",
  },
  {
    slug: "krill-oil",
    name: "Krill Oil",
    eyebrow: "Omega & Heart Health",
    h1: "KRILL OIL SOFTGEL<br />MANUFACTURER",
    metaTitle: "Krill Oil Softgel Manufacturer & Exporter India | Admetus",
    metaDescription:
      "WHO-GMP certified krill oil softgel manufacturer & exporter in India — phospholipid omega-3 with astaxanthin, private label & bulk. FSSAI & Halal certified.",
    category: "Omega & Heart Health",
    intro:
      "Premium krill oil softgel capsules — a phospholipid-bound omega-3 source with naturally occurring astaxanthin — manufactured and exported for the premium heart-health and wellness segment.",
    actives:
      "Krill oil delivering phospholipid EPA/DHA and astaxanthin; combinations with CoQ10 available.",
    benefits: [
      "Phospholipid omega-3 with superior bioavailability",
      "Naturally contains the antioxidant astaxanthin",
      "Premium price-point SKU for developed & Gulf markets",
      "Private label and bulk export",
      "Full COA, stability, and export documentation",
    ],
    applications: [
      "Premium heart & brain health",
      "Joint & anti-inflammatory ranges",
      "Astaxanthin antioxidant positioning",
    ],
    keywords: [
      "krill oil softgel manufacturer india",
      "krill oil softgel supplier",
      "phospholipid omega 3 softgel",
      "astaxanthin krill softgel exporter",
    ],
    faqs: [
      { q: "How is krill oil different from fish oil?", a: "Krill oil delivers omega-3 in phospholipid form (better absorption) and naturally contains astaxanthin. We manufacture both, and can advise on positioning for premium ranges." },
    ],
    relatedProductSlug: "krill-oil-softgel",
  },
  {
    slug: "multivitamin",
    name: "Multivitamin",
    eyebrow: "Daily Wellness",
    h1: "MULTIVITAMIN SOFTGEL<br />MANUFACTURER",
    metaTitle: "Multivitamin Softgel Manufacturer & Exporter India | Admetus",
    metaDescription:
      "WHO-GMP certified multivitamin softgel manufacturer & exporter in India — custom vitamin-mineral blends, men's & women's formulas, private label & bulk.",
    category: "Antioxidant & Multivitamin",
    intro:
      "Custom multivitamin and multimineral softgel capsules — including men's, women's, and antioxidant complexes with ginseng, astaxanthin, and botanicals — manufactured and exported from India.",
    actives:
      "Custom vitamin + mineral matrices; premium adds such as ginseng, astaxanthin, lycopene, and grape seed extract.",
    benefits: [
      "Fully custom vitamin-mineral formulations",
      "Men's, women's, energy, and antioxidant variants",
      "Premium botanical add-ons (ginseng, astaxanthin, lycopene)",
      "Private label and bulk export supply",
      "Export documentation and Halal certification",
    ],
    applications: [
      "Daily wellness & energy ranges",
      "Men's & women's health lines",
      "Antioxidant & anti-aging positioning",
    ],
    keywords: [
      "multivitamin softgel manufacturer india",
      "multivitamin softgel supplier",
      "custom multivitamin softgel",
      "ginseng multivitamin softgel exporter",
    ],
    faqs: [
      { q: "Can you formulate a custom multivitamin?", a: "Yes — we develop custom vitamin-mineral softgel formulations to your target market, dosage, and positioning, including premium botanical additions." },
    ],
    relatedProductSlug: "ginseng-astaxanthin-multivitamin",
  },
  {
    slug: "nigella-sativa-black-seed",
    name: "Nigella Sativa (Black Seed)",
    eyebrow: "Ayurvedic & Herbal",
    h1: "BLACK SEED OIL SOFTGEL<br />MANUFACTURER",
    metaTitle: "Black Seed Oil Softgel Manufacturer India | Admetus",
    metaDescription:
      "WHO-GMP certified Nigella Sativa (Kalonji / black seed oil) softgel manufacturer & exporter in India — Halal certified, private label & bulk supply.",
    category: "Ayurvedic & Herbal",
    intro:
      "Nigella Sativa (Kalonji / Habbatus Sauda / black seed oil) softgel capsules — culturally significant across the Arab world and a strong Halal-market SKU — manufactured and exported from India in standardized softgel form.",
    actives:
      "Cold-pressed black seed oil (Nigella sativa) standardized for thymoquinone; single-oil or combination softgels.",
    benefits: [
      "Standardized black seed oil in convenient softgel format",
      "Very strong demand across GCC, Africa, and Muslim-majority markets",
      "Halal certified — full supply-chain documentation",
      "Private label and bulk export",
      "COA, stability, and Free Sale Certificate provided",
    ],
    applications: [
      "Immunity & traditional wellness ranges",
      "Halal / GCC & African pharmacy retail",
      "Ayurvedic and herbal brands",
    ],
    keywords: [
      "black seed oil softgel manufacturer india",
      "nigella sativa softgel supplier",
      "kalonji oil softgel manufacturer",
      "habbatus sauda softgel exporter",
      "halal black seed softgel",
    ],
    faqs: [
      { q: "Is black seed oil available Halal certified?", a: "Yes — Nigella Sativa (Habbatus Sauda) softgels are Halal certified with full documentation, ideal for GCC, Middle East, and African markets." },
    ],
    relatedProductSlug: "nigella-sativa-kalonji",
  },
  {
    slug: "evening-primrose-oil",
    name: "Evening Primrose Oil",
    eyebrow: "Women's Health",
    h1: "EVENING PRIMROSE OIL<br />SOFTGEL MANUFACTURER",
    metaTitle: "Evening Primrose Oil Softgel Manufacturer India | Admetus",
    metaDescription:
      "WHO-GMP certified evening primrose oil softgel manufacturer & exporter in India — GLA standardized, 500mg/1000mg, private label & bulk supply.",
    category: "Women's Health",
    intro:
      "Evening primrose oil (EPO) softgel capsules standardized for gamma-linolenic acid (GLA) — a core women's-health and skin SKU — manufactured and exported from India in 500 mg and 1000 mg strengths.",
    actives:
      "Cold-pressed evening primrose oil standardized for GLA (9–10%); 500 mg and 1000 mg softgels.",
    benefits: [
      "GLA-standardized EPO in 500 mg / 1000 mg softgels",
      "Women's health, hormonal & skin positioning",
      "Private label and bulk export supply",
      "Oxidation-controlled fill with stability data",
      "Halal and vegetarian softgel options",
    ],
    applications: [
      "Women's hormonal & PMS support",
      "Skin & hair health ranges",
      "General wellness lines",
    ],
    keywords: [
      "evening primrose oil softgel manufacturer india",
      "epo softgel supplier",
      "gla softgel manufacturer",
      "evening primrose softgel exporter",
    ],
    faqs: [
      { q: "What strengths of evening primrose oil do you make?", a: "We manufacture EPO softgels in 500 mg and 1000 mg strengths standardized for GLA content, with private label and bulk export options." },
    ],
  },
  {
    slug: "vegan-vegetarian",
    name: "Vegan / Vegetarian (HPMC)",
    eyebrow: "Non-Gelatin Softgels",
    h1: "VEGAN SOFTGEL<br />MANUFACTURER",
    metaTitle: "Vegan Softgel Manufacturer & Exporter India | Admetus",
    metaDescription:
      "WHO-GMP certified vegan / vegetarian (HPMC, non-gelatin) softgel manufacturer & exporter in India — plant-based capsules, private label & bulk supply.",
    category: "Non-Gelatin & Vegan",
    intro:
      "Vegan and vegetarian softgel capsules using plant-based HPMC (non-gelatin) shells — a fast-growing, under-served category — manufactured and exported for brands targeting vegan, vegetarian, and clean-label consumers.",
    actives:
      "HPMC (hydroxypropyl methylcellulose) plant-based softgel shells; compatible with omega-3 (algal), vitamins, and herbal oils.",
    benefits: [
      "Plant-based HPMC (non-gelatin) softgel shells",
      "Algal omega-3, vitamins, and herbal actives in vegan format",
      "Clean-label, BSE/TSE-free, vegetarian-society friendly",
      "Private label and bulk export",
      "Halal and Kosher documentation available",
    ],
    applications: [
      "Vegan & vegetarian supplement brands",
      "Clean-label and plant-based ranges",
      "Algal omega-3 (fish-free) products",
    ],
    keywords: [
      "vegan softgel manufacturer india",
      "vegetarian softgel manufacturer",
      "hpmc softgel manufacturer",
      "non-gelatin softgel supplier",
      "plant based softgel exporter",
    ],
    faqs: [
      { q: "Do you make non-gelatin vegetarian softgels?", a: "Yes — we manufacture vegan/vegetarian softgels using plant-based HPMC shells, suitable for algal omega-3, vitamins, and herbal actives, with Halal/Kosher documentation." },
    ],
  },
];
