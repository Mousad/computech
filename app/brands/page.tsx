import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";
import { brands } from "@/lib/catalog";
import { SectionTitle } from "@/components/sections";
export const metadata = { title: "العلامات التجارية" };
export default function BrandsPage() {
  return (
    <div className="page-wrap container">
      <div className="breadcrumb">
        الرئيسية <span>/</span> العلامات التجارية
      </div>
      <SectionTitle eyebrow="علامات عالمية" title="اكتشف العلامات التجارية" />
      <p className="page-intro">
        تصفح العلامات التجارية المتاحة في كتالوج COMPUTECH.
      </p>
      <div className="brands-grid">
        {brands.map((brand, i) => (
          <Link
            href={`/brands/${brand.toLowerCase().replaceAll(" ", "-")}`}
            key={brand}
          >
            <span className="brand-index">0{i + 1}</span>
            <strong>{brand}</strong>
            <ArrowUpLeft />
          </Link>
        ))}
      </div>
    </div>
  );
}
