
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpLeft,
  Cpu,
  Headphones,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

import { categories, products, brands } from "@/lib/catalog";
import { ProductCard } from "@/components/product-card";

/* ─────────────────────────────────────────
   Section Title
───────────────────────────────────────── */

export function SectionTitle({
  eyebrow,
  title,
  href,
  link,
}: {
  eyebrow: string;
  title: string;
  href?: string;
  link?: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-5 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between md:mb-10">
      <div>
        <span className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.18em] text-blue-600">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
          {eyebrow}
        </span>

        <h2 className="text-2xl font-extrabold tracking-tight text-[#172337] md:text-3xl lg:text-4xl">
          {title}
        </h2>
      </div>

      {href && (
        <Link
          href={href}
          className="group inline-flex w-fit items-center gap-3 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-[#172337] transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
        >
          {link || "اكتشف المزيد"}
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
        </Link>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   Product Grid
───────────────────────────────────────── */

export function ProductGrid({
  items = products,
}: {
  items?: typeof products;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   Category Tiles
───────────────────────────────────────── */

export function CategoryTiles() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
      {categories.map((category, i) => (
        <Link
          href={`/categories/${category.slug}`}
          key={category.slug}
          className={`group relative isolate flex min-h-[190px] overflow-hidden rounded-[6px] bg-slate-200 md:min-h-[260px] md:rounded-3xl ${
            i === 0 ? "md:row-span-2 md:min-h-[540px]" : ""
          }`}
        >
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1729]/95 via-[#0b1729]/20 to-transparent transition-opacity duration-500 group-hover:from-[#0b1729]/90" />

          <div className="relative z-10 mt-auto flex w-full items-end justify-between gap-2 p-4 text-white md:p-6">
            <div>
              

              <h3 className="text-base font-bold md:text-2xl">
                {category.name}
              </h3>

             
            </div>

           
          </div>
        </Link>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   Brand Strip
───────────────────────────────────────── */



export function BrandStrip() {
  return (
    <div className="grid grid-cols-3 overflow-hidden rounded-[9px]   bg-white sm:grid-cols-3 lg:grid-cols-6">
      {brands.slice(0, 6).map((brand, i) => (
        <Link
          key={brand.name}
          href={`/brands/${brand.name.toLowerCase().replaceAll(" ", "-")}`}
          aria-label={brand.name}
          className={`group flex min-h-[100px] items-center justify-center border-b border-slate-100 px-4 py-6 transition-all duration-300    ${
            i === 0 ? "sm:border-r-0" : ""
          }`}
        >
          <Image
            src={brand.logo}
            alt={brand.name}
            width={150}
            height={70}
            className="h-20 w-full max-w-[120px] object-contain opacity-60 grayscale transition-all duration-300 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 sm:h-14"
          />
        </Link>
      ))}
    </div>
  );
}


/* ─────────────────────────────────────────
   Trust Strip
───────────────────────────────────────── */

const trustItems = [
  {
    icon: ShieldCheck,
    title: "اختيار بثقة",
    description: "معلومات واضحة قبل اتخاذ القرار",
  },
  {
    icon: Headphones,
    title: "دعم فني",
    description: "نساعدك في اختيار الأنسب",
  },
  {
    icon: Cpu,
    title: "خيارات  متنوعة",
    description: "منتجات تناسب مختلف الاستخدامات",
  },
  {
    icon: SlidersHorizontal,
    title: "اسعار تناسبك",
    description: "قائمة طلبات سهلة ومنظمة",
  },
];


export function TrustStrip() {
  return (
    <div className="grid grid-cols-4  gap-3 lg:gap-4">
      {trustItems.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group flex flex-col items-center justify-center gap-3 rounded-[6px] border border-slate-200 bg-white px-2 py-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_12px_30px_rgba(15,23,42,0.05)] sm:py-7"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white sm:h-14 sm:w-14">
              <Icon size={23} strokeWidth={1.8} />
            </span>

            <b className="text-xs font-bold leading-5 text-[#172337] sm:text-sm md:text-base">
              {item.title}
            </b>
          </div>
        );
      })}
    </div>
  );
}

