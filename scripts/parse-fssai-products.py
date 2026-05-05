#!/usr/bin/env python3
"""Column-aware parser for the FSSAI license PDF.

Extracts every Sl.No row from the Form C product tables on pages 4-43,
keeping ONLY the "Product" column (the composition string), discarding
"Food Category", "Sub-Food Category" and "Kind of Business" columns.

Output: data/fssai-formulations.json
"""
import json
import re
from pathlib import Path

import pdfplumber

ROOT = Path(__file__).resolve().parents[1]
PDF = Path.home() / "Downloads" / "license new.pdf"
OUT = ROOT / "data" / "fssai-formulations.json"


def extract_rows():
    """Yield (sl_no, product_text) pairs from the per-page tables."""
    rows = []
    with pdfplumber.open(str(PDF)) as pdf:
        for page in pdf.pages[3:]:  # pages 4..end (0-indexed)
            tables = page.extract_tables()
            for tbl in tables:
                if not tbl or len(tbl) < 2:
                    continue
                header = tbl[0]
                # Identify the header row: has "Sl.No" and "Product"
                hdr_text = " ".join((c or "") for c in header).lower()
                if "sl.no" not in hdr_text or "product" not in hdr_text:
                    continue
                # Find Product column index
                prod_idx = None
                for idx, cell in enumerate(header):
                    if cell and "product" in cell.lower() and "category" not in cell.lower():
                        prod_idx = idx
                        break
                if prod_idx is None:
                    continue
                sl_idx = 0
                for row in tbl[1:]:
                    if not row:
                        continue
                    sl_cell = row[sl_idx] if sl_idx < len(row) else None
                    prod_cell = row[prod_idx] if prod_idx < len(row) else None
                    if not sl_cell or not prod_cell:
                        continue
                    sl_clean = (sl_cell or "").strip()
                    if not re.match(r"^\d+$", sl_clean):
                        continue
                    text = re.sub(r"\s+", " ", prod_cell).strip()
                    rows.append((int(sl_clean), text))
    return rows


def normalise(text):
    # Remove the trailing "Soft Gelatin Capsule" / variants since every
    # entry has it — we'll set dosage form once at the catalog level.
    text = re.sub(r"\s+", " ", text).strip()
    text = re.sub(r"\)\s*Soft\s*Gel(atin)?\s*Capsules?\s*\d*$", ")", text, flags=re.I)
    text = re.sub(r"\)\s*Softgel\s*Capsules?\s*\d*$", ")", text, flags=re.I)
    text = re.sub(r"\)\s*Capsules?\s*\d*$", ")", text, flags=re.I)
    return text.strip()


def categorise(desc):
    d = desc.lower()
    if "krill" in d:
        return "Omega-3 & Krill Oil"
    if "fish oil" in d or "omega" in d or "epa" in d or "dha" in d or "docosahexaenoic" in d or "eicosapentaenoic" in d:
        return "Omega-3 & Fatty Acids"
    if "calcium" in d and ("vitamin d3" in d or "magnesium" in d or "k2" in d or "k-7" in d):
        return "Calcium & Bone Health"
    if "vitamin d3" in d and "calcium" not in d:
        return "Vitamin D3"
    if "calcitriol" in d:
        return "Calcium & Bone Health"
    if "co enzyme q10" in d or "coenzyme q10" in d or "coq10" in d or "ubiquinol" in d:
        return "CoQ10 & Cellular Energy"
    if "ginseng" in d or "ginkgo" in d or "tribulus" in d or "mucuna" in d or "withania" in d or "ashwagandha" in d or "panax" in d:
        return "Herbal Adaptogens"
    if "collagen" in d or "chondroitin" in d or "glucosamine" in d or "hyaluronic" in d:
        return "Joint & Beauty"
    if "ferrous" in d or "carbonyl iron" in d or ("iron" in d and "carbonate" not in d):
        return "Iron & Anaemia Support"
    if "multivitamin" in d or ("vitamin b12" in d and "vitamin b6" in d and "vitamin a" in d):
        return "Multivitamins & Multiminerals"
    if "glutathione" in d or "lycopene" in d or "lutein" in d or "astaxanthin" in d or "alpha lipoic" in d or "alpha-lipoic" in d or "beta-carotene" in d or "beta carotene" in d:
        return "Antioxidants & Skin Health"
    if "lysine" in d or "arginine" in d or "carnitine" in d or "glutamine" in d:
        return "Amino Acid Formulations"
    if "vitamin e" in d and len(d) < 200:
        return "Vitamin E Formulations"
    if "spirulina" in d or "moringa" in d or "aloe" in d or "nigella" in d or "kalaunji" in d or "cissus" in d or "tinospora" in d or "boswellia" in d or "curcumin" in d:
        return "Botanical & Herbal"
    if "d-mannose" in d:
        return "Urinary & Women's Health"
    return "Specialty Nutraceuticals"


def main():
    raw = extract_rows()
    # Deduplicate by sl_no (some pages get re-read across page boundaries)
    seen = {}
    for sl, text in raw:
        if sl not in seen:
            seen[sl] = normalise(text)
    rows = sorted(seen.items())

    grouped = {}
    for sl, desc in rows:
        if not desc or len(desc) < 8:
            continue
        cat = categorise(desc)
        grouped.setdefault(cat, []).append({"sl_no": sl, "composition": desc})

    final = {
        "license_number": "10020064002545",
        "license_authority": "FSSAI Central License (Food Safety and Standards Authority of India)",
        "license_valid_upto": "2026-10-03",
        "issued_on": "2025-12-25",
        "scope": "Manufacturer - Exporter - Manufacturer (Food or Health Supplements and Nutraceuticals)",
        "registered_office": "H.No.407, Railway Road K Pass, New Anta Colony Safidon, Jind, Haryana 126112",
        "authorised_premises": "Village Anta, Tehsil Safidon, District Jind, Haryana 126112",
        "categories": [
            {"name": cat, "formulations": items}
            for cat, items in sorted(grouped.items())
        ],
        "total_formulations": sum(len(v) for v in grouped.values()),
    }

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(final, indent=2))
    print(f"Wrote {OUT} — {final['total_formulations']} formulations across {len(final['categories'])} categories")
    for cat in final["categories"]:
        print(f"  {cat['name']}: {len(cat['formulations'])}")


if __name__ == "__main__":
    main()
