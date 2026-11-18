
"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ShoppingCart } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/catalog";
import { formatPrice, brands } from "@/lib/catalog";
import { useRequestList } from "@/components/request-provider";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useRequestList();
  const [added, setAdded] = useState(false);

  const brand = brands.find(
    (item) =>
      item.name.toLowerCase() ===
      product.brand.replace(/\s+ROG$/i, "").toLowerCase()
  );

  return (
    <article className="group min-w-0">
      {/* Product Image */}
      <Link
        href={`/products/${product.slug}`}
        className="relative  block aspect-square overflow-hidden"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />

       
      </Link>

      {/* Product Details */}
      <div className="text-right">
        {/* Brand Logo */}
       {/* Brand Logo & Name */}
{/* Product Name & Brand Logo */}
<div className=" flex min-h-[44px] items-center justify-between gap-2">
  <Link
    href={`/products/${product.slug}`}
    className="min-w-0 flex-1 text-xs font-semibold leading-6 text-[#172337] transition-colors hover:text-blue-600 sm:text-sm"
  >
    {product.name}
  </Link>

  {brand && (
    <Image
      src={brand.logo}
      alt={brand.name}
      width={80}
      height={32}
      className="h-5 w-auto max-w-[65px] shrink-0 object-contain"
    />
  )}
</div>

        {/* Product Name */}
      

        {/* Price & Cart */}
        <div className="flex items-center justify-between gap-2">
          <strong className="text-xs font-extrabold text-[#172337] sm:text-sm">
            {formatPrice(product.price)}
          </strong>

          <button
            onClick={() => {
              add(product);
              setAdded(true);
              window.setTimeout(() => setAdded(false), 1500);
            }}
            className={`flex h-9 w-9 shrink-0 items-center justify-center transition-colors duration-300 ${
              added
                ? "text-emerald-600"
                : "text-slate-500 hover:text-blue-600"
            }`}
            aria-label={
              added
                ? `تمت إضافة ${product.name}`
                : `أضف ${product.name} لقائمة الطلبات`
            }
          >
            {added ? (
              <Check size={19} />
            ) : (
              <ShoppingCart size={19} strokeWidth={1.7} />
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
