
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ProductGrid, SectionTitle } from "@/components/sections";
import { brands, products } from "@/lib/catalog";

export function generateStaticParams() {
  return brands.map((brand) => ({
    slug: brand.name.toLowerCase().replaceAll(" ", "-"),
  }));
}

export default async function BrandDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const brandData = brands.find(
    (brand) =>
      brand.name.toLowerCase().replaceAll(" ", "-") === slug,
  );

  if (!brandData) notFound();

  const brand = brandData.name;

  const items = products.filter((p) =>
    p.brand.toLowerCase().includes(brand.toLowerCase()),
  );

  return (
    <main className="container mx-auto min-h-screen px-4 pb-20 pt-8 md:px-8 md:pt-12">
      {/* Breadcrumb */}
      <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-slate-400">
        <Link href="/" className="hover:text-blue-600">
          الرئيسية
        </Link>
        <span>/</span>
        <Link href="/brands" className="hover:text-blue-600">
          العلامات التجارية
        </Link>
        <span>/</span>
        <span className="font-medium text-slate-700">{brand}</span>
      </div>

      {/* Brand Header */}
      <div className="mb-8 flex flex-col items-center gap-6 rounded-3xl border border-slate-200 bg-white p-8 sm:flex-row sm:justify-between md:p-10">
        <div>
          <span className="mb-3 block text-sm font-semibold text-blue-600">
            علامة تجارية
          </span>
          <h1 className="text-3xl font-bold text-[#172337] md:text-4xl">
            {brand}
          </h1>
          <p className="mt-3 text-sm leading-7 text-slate-500">
            اكتشف منتجات {brand} المتاحة في كتالوج COMPUTECH.
          </p>
        </div>

        <div className="flex h-24 w-48 items-center justify-center rounded-2xl bg-slate-50 p-5">
          <Image
            src={brandData.logo}
            alt={brand}
            width={180}
            height={90}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Products */}
      {items.length > 0 ? (
        <section>
          <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
            <SectionTitle
              eyebrow="كتالوج المنتجات"
              title={`منتجات ${brand}`}
            />

            <span className="shrink-0 rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-600">
              {items.length} منتج
            </span>
          </div>

          <ProductGrid items={items} />
        </section>
      ) : (
        <div className="flex min-h-[280px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center">
          <h2 className="mb-3 text-xl font-bold text-[#172337]">
            لا توجد منتجات حالياً
          </h2>

          <p className="mb-6 max-w-md text-sm leading-7 text-slate-500">
            لا توجد منتجات مدرجة لهذه العلامة التجارية في الكتالوج حالياً.
          </p>

          <Link
            href="/brands"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            العودة للعلامات التجارية
            <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </main>
  );
}
