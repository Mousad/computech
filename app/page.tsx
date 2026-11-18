
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
} from "lucide-react";

import { products } from "@/lib/catalog";
import { ProductCard } from "@/components/product-card";

import {
  BrandStrip,
  CategoryTiles,
  ProductGrid,
  SectionTitle,
  TrustStrip,
} from "@/components/sections";

import { AboutSection } from "@/components/about-section";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[620px] overflow-hidden bg-[#101b2b] md:min-h-[700px]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/computech-hero.png"
        >
          <source src="/videos/computech.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-l from-[#101b2b]/95 via-[#101b2b]/65 to-[#101b2b]/20" />

        <div className="container relative z-10 mx-auto flex min-h-[620px] items-center px-5 py-20 md:min-h-[700px] md:px-8">
          <div className="max-w-2xl text-right text-white">
            <h1 className="mb-6 text-4xl font-bold leading-[1.35] tracking-tight md:text-6xl lg:text-7xl">
              كل إمكانيات
              <br />
              التقنية. <em className="text-blue-400 not-italic">في مكان</em>
              <br />
              واحد.
            </h1>

            <p className="mb-9 max-w-xl text-base leading-8 text-white/75 md:text-lg">
              من اللابتوب المناسب ليومك، إلى مكونات جهاز أحلامك — اكتشف خياراتك
              وخذ قرارك بثقة.
            </p>

            <div className="mb-8 flex flex-wrap items-center gap-4">
              <Link
                href="/products"
                className="button button-primary inline-flex items-center gap-3"
              >
                استكشف المنتجات
                <ArrowLeft size={18} />
              </Link>

              <Link
                href="/contact"
                className="group button button-ghost inline-flex items-center gap-3 border border-white/30 bg-[#EAD0AB] text-white transition-all duration-300 hover:border-blue-400 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/25"
              >
                تواصل معنا
                <ArrowUpLeft
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-6 z-10 hidden items-center gap-3 text-xs tracking-[0.2em] text-white/60 md:flex">
          <span>COMPUTECH</span>
          <span className="h-px w-10 bg-white/40" />
          <span>TECHNOLOGY FOR EVERYDAY</span>
        </div>
      </section>

      {/* Trust */}
      <section className="container mx-auto px-1 pt-14 md:pt-20">
        <TrustStrip />
      </section>

      {/* Brands */}
      <section className="container mx-auto px-2 py-14 md:py-20">
        <SectionTitle title="علامات عالمية، اختيارات أكثر" />
        <BrandStrip />
      </section>

      {/* Categories */}
      <section className="bg-slate-50 py-10 md:py-20">
        <div className="container mx-auto px-2">
          <SectionTitle
            title="التقنية تبدأ من هنا"
            href="/categories"
          />
          <CategoryTiles />
        </div>
      </section>

      {/* About */}
      <AboutSection />

      {/* Products */}
      <section className="container mx-auto px-2 py-14 md:py-20">
        <SectionTitle title="منتجات تستحق اكتشافك" />
        <ProductGrid />
      </section>

      {/* Best Sellers */}
      <section className="overflow-hidden bg-[#FFFFFF] py-3 text-[#172337] md:py-24">
        <div className="container mx-auto px-4">

          {/* Section Heading */}
          <div className="mb-4">
           

            <h2 className="text-3xl font-bold leading-relaxed md:text-5xl">
              اختيارات رائجة
            
            </h2>

          
          </div>

          {/* Products Slider */}
          <div
            dir="rtl"
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6"
            style={{ scrollbarWidth: "thin" }}
          >
            {products.slice(0, 8).map((product) => (
              <div
                key={product.slug}
                className="w-[210px] shrink-0 snap-start sm:w-[250px] md:w-[280px]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto flex flex-col items-start justify-between gap-8 px-4 md:flex-row md:items-center">
          <div>
            <span className="mb-4 block text-sm font-semibold text-blue-600">
              هل تحتاج مساعدة؟
            </span>

            <h2 className="text-3xl font-bold leading-relaxed text-[#172337] md:text-5xl">
              اختيارك القادم يبدأ
              <br />
              بسؤال بسيط.
            </h2>
          </div>

          <Link
            href="/contact"
            className="button button-primary inline-flex items-center gap-3"
          >
            تواصل مع COMPUTECH
            <ArrowLeft size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
