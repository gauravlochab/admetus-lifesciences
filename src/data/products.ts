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
    slug: "adlife-12g",
    name: "ADLIFE 12G",
    shortName: "12G",
    tagline: "Comprehensive Multivitamin Softgel",
    composition:
      "Softgel Capsule of Ginseng Extract, Green Tea Extract, Grape Seed Extract, Ginkgo Biloba, Garlic Oil, Guggul, Ginger Root Extract, Green Coffee Bean Extract, Glycyrrhiza Glabra Extract, Glutamic Acid, Glycine, Glutathione, Glutamine, Lycopene, Omega-3 Fatty Acid, Essential Amino Acid, Cyanocobalamin, Vitamins, Minerals, L-Carnitine L-Tartrate & Trace Elements",
    ingredients: [
      "Ginseng Extract",
      "Green Tea Extract",
      "Grape Seed Extract",
      "Ginkgo Biloba",
      "Garlic Oil",
      "Guggul",
      "Ginger Root Extract",
      "Green Coffee Bean Extract",
      "Glycyrrhiza Glabra Extract",
      "Glutamic Acid",
      "Glycine",
      "Glutathione",
      "Glutamine",
      "Lycopene",
      "Omega-3 Fatty Acid",
      "Essential Amino Acid",
      "Cyanocobalamin",
      "Vitamins & Minerals",
      "L-Carnitine L-Tartrate",
      "Trace Elements",
    ],
    benefits: [
      "Supports immune system function",
      "Promotes cardiovascular wellness",
      "Enhances skin health and radiance",
      "Strengthens bone density",
      "Supports muscle strength and recovery",
      "Boosts natural energy levels",
    ],
    packSize: "10 x 1 x 10 Softgel Capsules",
    dosageForm: "Softgel Capsule",
    category: "Multivitamin",
    color: "#22c55e",
  },
  {
    slug: "adlife-q10",
    name: "ADLIFE Q10",
    shortName: "Q10",
    tagline: "CoQ10 Antioxidant Softgel",
    composition:
      "Co-Enzyme Q10, Lycopene, L-Arginine, Zinc, Omega-3 Fatty Acid, Folic Acid, Garlic Oil, Cyanocobalamin & Vitamin E Softgel Capsules",
    ingredients: [
      "Co-Enzyme Q10",
      "Lycopene",
      "L-Arginine",
      "Zinc",
      "Omega-3 Fatty Acid",
      "Folic Acid",
      "Garlic Oil",
      "Cyanocobalamin",
      "Vitamin E",
    ],
    benefits: [
      "Provides antioxidant cellular protection",
      "Supports immune system resilience",
      "Promotes cardiovascular health",
      "Enhances natural energy production",
      "Supports reproductive wellness",
      "Helps maintain healthy blood pressure",
    ],
    packSize: "10 x 1 x 10 Softgel Capsules",
    dosageForm: "Softgel Capsule",
    category: "Antioxidant",
    color: "#ec4899",
  },
  {
    slug: "adlife-ct",
    name: "ADLIFE CT",
    shortName: "CT",
    tagline: "Calcium & Vitamin D3 Bone Support",
    composition:
      "Calcium Carbonate, Vitamin D3, Zinc & Magnesium Oxide Softgel Capsules",
    ingredients: [
      "Calcium Carbonate",
      "Vitamin D3",
      "Zinc",
      "Magnesium Oxide",
    ],
    benefits: [
      "Helps maintain bone mass and density",
      "Supports the skeletal system",
      "Helps reduce the risk of osteoporosis",
      "Promotes muscle function and recovery",
      "Supports energy production via magnesium",
      "Essential minerals for skeletal growth",
    ],
    packSize: "10 x 10 Softgel Capsules",
    dosageForm: "Softgel Capsule",
    category: "Bone Health",
    color: "#06b6d4",
  },
  {
    slug: "adlife-iron",
    name: "ADLIFE IRON",
    shortName: "Iron",
    tagline: "Iron & Folic Acid Supplementation",
    composition:
      "Ferrous Fumarate, Folic Acid & Zinc Softgel Capsules",
    ingredients: ["Ferrous Fumarate", "Folic Acid", "Zinc"],
    benefits: [
      "Supports iron supplementation needs",
      "Promotes healthy pregnancy outcomes",
      "Enhances cognitive function",
      "Supports cardiovascular health",
      "Helps build strong bones",
      "Supports healthy red blood cell production",
    ],
    packSize: "10 x 1 x 10 Softgel Capsules",
    dosageForm: "Softgel Capsule",
    category: "Iron Supplement",
    color: "#ef4444",
  },
  {
    slug: "adlife-lyco",
    name: "ADLIFE LYCO",
    shortName: "Lyco",
    tagline: "Lycopene Multivitamin & Multimineral",
    composition:
      "Lycopene, Multivitamins & Multiminerals Softgel Capsules",
    ingredients: ["Lycopene", "Multivitamins", "Multiminerals"],
    benefits: [
      "Provides powerful antioxidant protection",
      "Promotes bone mineral density",
      "Supports immune system function",
      "Enhances energy and appetite",
      "Helps reduce oxidative stress",
      "Supports overall body immunity",
    ],
    packSize: "10 x 1 x 10 Softgel Capsules",
    dosageForm: "Softgel Capsule",
    category: "Antioxidant",
    color: "#f97316",
  },
  {
    slug: "adlife-gold",
    name: "ADLIFE GOLD",
    shortName: "Gold",
    tagline: "Premium Ginseng Multivitamin Complex",
    composition:
      "Ginseng, Multivitamins, Multiminerals & Antioxidant Softgel Capsules",
    ingredients: [
      "Ginseng",
      "Multivitamins",
      "Multiminerals",
      "Antioxidant Complex",
    ],
    benefits: [
      "Improves nutrient intake and absorption",
      "Boosts natural energy levels throughout the day",
      "Supports immune system function",
      "Promotes healthy aging",
      "Aids complete muscle recovery",
      "Supports bone and joint health",
    ],
    packSize: "20 x 1 x 10 Softgel Capsules",
    dosageForm: "Softgel Capsule",
    category: "Multivitamin",
    color: "#eab308",
  },
  {
    slug: "adlife-k2-7",
    name: "ADLIFE K2-7",
    shortName: "K2-7",
    tagline: "Advanced Calcium with Vitamin K2-7",
    composition:
      "Calcium Citrate, Vitamin K2-7, Vitamin D3, Omega-3 Fatty Acid EPA, DHA, Cyanocobalamin, Zinc & Boron Softgel Capsules",
    ingredients: [
      "Calcium Citrate",
      "Vitamin K2-7",
      "Vitamin D3",
      "Omega-3 Fatty Acid EPA",
      "DHA",
      "Cyanocobalamin",
      "Zinc",
      "Boron",
    ],
    benefits: [
      "22-27% better absorption than calcium carbonate",
      "Improves bone mineral density",
      "Reduces rate of vertebral fractures",
      "Accelerates intestinal calcium absorption",
      "Activates osteocalcin for bone calcium binding",
      "Effectively prevents occurrence of new fractures",
    ],
    packSize: "10 x 1 x 10 Softgel Capsules",
    dosageForm: "Softgel Capsule",
    category: "Bone Health",
    color: "#a855f7",
  },
];
