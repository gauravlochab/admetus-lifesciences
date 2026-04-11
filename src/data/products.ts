export interface Product {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  composition: string;
  ingredients: string[];
  benefits: string[];
  packSize: string;
  dosageForm: string;
  category: string;
  color: string;
}

export const products: Product[] = [
  {
    slug: "calcitriol-calcium-k27-softgel",
    name: "CALCITRIOL + CALCIUM + K2-7",
    shortName: "Cal-K2",
    tagline: "Advanced Bone Health with Vitamin K2-7",
    composition:
      "Calcitriol, Calcium Carbonate, Vitamin K2-7, Cyanocobalamin, Zinc, Magnesium, L-Methylfolate Softgel Capsules",
    ingredients: [
      "Calcitriol",
      "Calcium Carbonate",
      "Vitamin K2-7",
      "Cyanocobalamin",
      "Zinc",
      "Magnesium",
      "L-Methylfolate",
    ],
    benefits: [
      "Vitamin K2-7 directs calcium into bones, not arteries",
      "Calcitriol enhances intestinal calcium absorption",
      "Supports bone mineral density and reduces fracture risk",
      "L-Methylfolate supports homocysteine metabolism",
      "Magnesium and zinc reinforce skeletal strength",
      "Cyanocobalamin aids nerve function and red blood cell formation",
    ],
    packSize: "10 x 1 x 10 Softgel Capsules",
    dosageForm: "Softgel Capsule",
    category: "Calcium & Bone Health",
    color: "#a855f7",
  },
  {
    slug: "cholecalciferol-60000-iu",
    name: "CHOLECALCIFEROL 60,000 IU",
    shortName: "D3-60K",
    tagline: "High-Dose Vitamin D3 Therapy",
    composition:
      "Cholecalciferol (Vitamin D3) 60,000 IU Softgel Capsules",
    ingredients: [
      "Cholecalciferol (Vitamin D3) 60,000 IU",
    ],
    benefits: [
      "Corrects Vitamin D deficiency with weekly dosing",
      "Supports calcium absorption and bone mineralization",
      "Strengthens immune system response",
      "Helps maintain healthy muscle function",
      "Supports mood regulation and mental well-being",
      "Convenient single high-dose softgel format",
    ],
    packSize: "4 x 1 x 4 Softgel Capsules",
    dosageForm: "Softgel Capsule",
    category: "Calcium & Bone Health",
    color: "#eab308",
  },
  {
    slug: "omega-3-vitamin-e-softgel",
    name: "OMEGA-3 + VITAMIN E",
    shortName: "Omega-3",
    tagline: "Pure Fish Oil for Heart & Brain Health",
    composition:
      "Fish Oil Omega-3 Fatty Acid (EPA & DHA) + Vitamin E Softgel Capsules",
    ingredients: [
      "Fish Oil Concentrate",
      "Eicosapentaenoic Acid (EPA)",
      "Docosahexaenoic Acid (DHA)",
      "Vitamin E (as Alpha-Tocopherol)",
    ],
    benefits: [
      "Supports cardiovascular health and healthy triglyceride levels",
      "Promotes brain function and cognitive performance",
      "Vitamin E provides antioxidant protection against oxidative stress",
      "Supports healthy inflammatory response",
      "Promotes joint flexibility and comfort",
      "Supports eye health and retinal function",
    ],
    packSize: "10 x 1 x 10 Softgel Capsules",
    dosageForm: "Softgel Capsule",
    category: "Omega & Heart Health",
    color: "#06b6d4",
  },
  {
    slug: "ginseng-astaxanthin-multivitamin",
    name: "GINSENG + ASTAXANTHIN MULTI",
    shortName: "Ginseng+",
    tagline: "Premium Energy & Vitality Complex",
    composition:
      "Ginseng Extract, Astaxanthin, Multivitamins, Multiminerals Softgel Capsules",
    ingredients: [
      "Ginseng Extract",
      "Astaxanthin",
      "Multivitamins",
      "Multiminerals",
    ],
    benefits: [
      "Ginseng adaptogen supports stamina and reduces fatigue",
      "Astaxanthin delivers powerful antioxidant protection",
      "Comprehensive multivitamin and mineral support",
      "Promotes immune system resilience",
      "Supports healthy aging and cellular repair",
      "Enhances physical and mental energy levels",
    ],
    packSize: "20 x 1 x 10 Softgel Capsules",
    dosageForm: "Softgel Capsule",
    category: "Antioxidant & Multivitamin",
    color: "#22c55e",
  },
  {
    slug: "glutathione-ala-grape-seed",
    name: "GLUTATHIONE + ALA + GRAPE SEED",
    shortName: "Gluta-C",
    tagline: "Advanced Skin & Antioxidant Formula",
    composition:
      "Glutathione, Alpha Lipoic Acid, Grape Seed Extract, Vitamin C Softgel Capsules",
    ingredients: [
      "Glutathione",
      "Alpha Lipoic Acid",
      "Grape Seed Extract",
      "Vitamin C",
    ],
    benefits: [
      "Glutathione is the body's master antioxidant for detoxification",
      "Alpha Lipoic Acid regenerates other antioxidants",
      "Grape Seed Extract supports skin elasticity and collagen",
      "Vitamin C promotes brightening and even skin tone",
      "Supports liver health and cellular detox pathways",
      "Protects against environmental oxidative damage",
    ],
    packSize: "10 x 1 x 10 Softgel Capsules",
    dosageForm: "Softgel Capsule",
    category: "Antioxidant & Multivitamin",
    color: "#ec4899",
  },
  {
    slug: "lycopene-grape-seed-multivitamin",
    name: "LYCOPENE + GRAPE SEED MULTI",
    shortName: "Lyco-GS",
    tagline: "Potent Antioxidant Multimineral Blend",
    composition:
      "Lycopene, Grape Seed Extract, Lutein, Multivitamin, Multimineral, Antioxidants Softgel Capsules",
    ingredients: [
      "Lycopene",
      "Grape Seed Extract",
      "Lutein",
      "Multivitamins",
      "Multiminerals",
      "Antioxidant Complex",
    ],
    benefits: [
      "Lycopene provides powerful cellular antioxidant defense",
      "Grape Seed Extract supports vascular and skin health",
      "Lutein protects eye health and macular function",
      "Comprehensive vitamin and mineral supplementation",
      "Helps reduce oxidative stress markers",
      "Supports overall immunity and vitality",
    ],
    packSize: "10 x 1 x 10 Softgel Capsules",
    dosageForm: "Softgel Capsule",
    category: "Antioxidant & Multivitamin",
    color: "#f97316",
  },
  {
    slug: "isoflavones-calcium-vitamin-d3",
    name: "ISOFLAVONES + CALCIUM + D3",
    shortName: "Iso-Cal",
    tagline: "Complete Women's Bone & Hormonal Support",
    composition:
      "Isoflavones, Calcium, Copper, Magnesium, Zinc, Vitamin D3 Softgel Capsules",
    ingredients: [
      "Soy Isoflavones",
      "Calcium",
      "Copper",
      "Magnesium",
      "Zinc",
      "Vitamin D3",
    ],
    benefits: [
      "Isoflavones support hormonal balance during menopause",
      "Calcium and Vitamin D3 protect bone density",
      "Magnesium supports muscle relaxation and sleep quality",
      "Zinc and copper aid enzymatic and immune function",
      "Helps manage menopausal discomfort naturally",
      "Formulated specifically for women's health needs",
    ],
    packSize: "10 x 1 x 10 Softgel Capsules",
    dosageForm: "Softgel Capsule",
    category: "Women's Health",
    color: "#f472b6",
  },
  {
    slug: "ginkgo-tribulus-mens-vitality",
    name: "GINKGO + TRIBULUS VITALITY",
    shortName: "Vital-M",
    tagline: "Men's Performance & Vitality Formula",
    composition:
      "Ginkgo Biloba, Tribulus Terrestris, Mucuna Pruriens, Zinc, L-Arginine Softgel Capsules",
    ingredients: [
      "Ginkgo Biloba Extract",
      "Tribulus Terrestris Extract",
      "Mucuna Pruriens Extract",
      "Zinc",
      "L-Arginine",
    ],
    benefits: [
      "Ginkgo Biloba supports circulation and cognitive function",
      "Tribulus Terrestris promotes natural testosterone support",
      "Mucuna Pruriens aids dopamine levels and mood",
      "L-Arginine supports nitric oxide production and blood flow",
      "Zinc is essential for male reproductive health",
      "Comprehensive support for men's vitality and stamina",
    ],
    packSize: "10 x 1 x 10 Softgel Capsules",
    dosageForm: "Softgel Capsule",
    category: "Men's Health",
    color: "#3b82f6",
  },
  {
    slug: "nigella-sativa-kalonji",
    name: "NIGELLA SATIVA (KALONJI)",
    shortName: "Kalonji",
    tagline: "Traditional Black Seed Oil Softgel",
    composition:
      "Nigella Sativa (Kalonji / Black Seed Oil) Softgel Capsules",
    ingredients: [
      "Nigella Sativa Oil (Black Seed Oil)",
      "Thymoquinone (active compound)",
    ],
    benefits: [
      "Thymoquinone delivers potent anti-inflammatory properties",
      "Supports healthy immune system modulation",
      "Traditional Ayurvedic remedy backed by modern research",
      "Promotes respiratory and digestive health",
      "Supports healthy blood sugar levels",
      "Provides antioxidant protection for cellular health",
    ],
    packSize: "10 x 1 x 10 Softgel Capsules",
    dosageForm: "Softgel Capsule",
    category: "Herbal & Specialty",
    color: "#78716c",
  },
  {
    slug: "krill-oil-softgel",
    name: "KRILL OIL",
    shortName: "Krill",
    tagline: "Superior Phospholipid Omega-3 Source",
    composition:
      "Antarctic Krill Oil Softgel Capsules rich in Phospholipid-bound Omega-3, EPA, DHA & Astaxanthin",
    ingredients: [
      "Antarctic Krill Oil",
      "Phospholipid-bound Omega-3",
      "EPA",
      "DHA",
      "Astaxanthin (naturally occurring)",
    ],
    benefits: [
      "Phospholipid-bound omega-3 for superior bioavailability",
      "Natural astaxanthin provides built-in antioxidant protection",
      "Supports heart health and healthy cholesterol levels",
      "Promotes joint comfort and flexibility",
      "Supports brain health and cognitive function",
      "No fishy aftertaste compared to traditional fish oil",
    ],
    packSize: "10 x 1 x 10 Softgel Capsules",
    dosageForm: "Softgel Capsule",
    category: "Omega & Heart Health",
    color: "#ef4444",
  },
];
