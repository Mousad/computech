
import Link from "next/link";
import Image from "next/image";
import { ArrowUpLeft } from "lucide-react";

import { brands } from "@/lib/catalog";
import { SectionTitle } from "@/components/sections";

export const metadata = {
  title: "العلامات التجارية",
};

export default function BrandsPage() {
  return (
    <main className="container mx-auto min-h-screen px-4 py-10 md:px-8 md:py-16">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
        <Link href="/" className="transition-colors hover:text-blue-600">
          الرئيسية
        </Link>
        <span>/</span>
        <span className="font-semibold text-[#172337]">
          العلامات التجارية
        </span>
      </div>

      {/* Heading */}
      <SectionTitle
        eyebrow="علامات عالمية"
        title="اكتشف العلامات التجارية"
      />

      <p className="mb-10 mt-4 text-sm leading-8 text-slate-500 md:text-base">
        تصفح العلامات التجارية المتاحة في كتالوج COMPUTECH.
      </p>

      {/* Brands Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {brands.map((brand, i) => {
          const slug = brand.name.toLowerCase().replaceAll(" ", "-");

          return (
            <Link
              href={`/brands/${slug}`}
              key={brand.name}
              className="group relative flex min-h-[160px] flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 sm:min-h-[190px] sm:p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-slate-300">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <ArrowUpLeft
                  size={18}
                  className="text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600"
                />
              </div>

              <div className="flex h-20 items-center justify-center sm:h-24">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={150}
                  height={80}
                  className="h-14 w-full max-w-[130px] object-contain transition-transform duration-300 group-hover:scale-110 sm:h-16"
                />
              </div>

              <strong className="text-center text-sm font-bold text-[#172337] transition-colors group-hover:text-blue-600 sm:text-base">
                {brand.name}
              </strong>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
