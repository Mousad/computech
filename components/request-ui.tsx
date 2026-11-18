"use client";
import Link from "next/link";
import { ArrowLeft, Check, Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/catalog";
import { formatPrice } from "@/lib/catalog";
import { useRequestList } from "@/components/request-provider";
export function AddToRequest({ product }: { product: Product }) {
  const { add } = useRequestList();
  const [done, setDone] = useState(false);
  return (
    <button
      className="button button-primary detail-add"
      onClick={() => {
        add(product);
        setDone(true);
      }}
    >
      {done ? <Check size={18} /> : <Plus size={18} />}{" "}
      {done ? "أُضيف إلى قائمة طلباتك" : "أضف إلى قائمة الطلبات"}
    </button>
  );
}
export function RequestListView() {
  const { lines, setQuantity, remove } = useRequestList();
  const total = lines.reduce(
    (sum, line) => sum + line.product.price * line.quantity,
    0,
  );
  if (!lines.length)
    return (
      <div className="empty-card">
        <div className="empty-icon">
          <Plus />
        </div>
        <h2>قائمة طلباتك فارغة</h2>
        <p>أضف المنتجات التي تهمك لتجميع استفساراتك في مكان واحد.</p>
        <Link className="button button-primary" href="/products">
          استكشف المنتجات <ArrowLeft />
        </Link>
      </div>
    );
  return (
    <div className="request-layout">
      <div className="request-lines">
        {lines.map(({ product, quantity }) => (
          <article className="request-line" key={product.slug}>
            <img src={product.image} alt="" />
            <div className="request-line-info">
              <small>
                {product.brand} · {product.model}
              </small>
              <strong>{product.name}</strong>
              <span>{formatPrice(product.price)}</span>
            </div>
            <div className="quantity-control">
              <button
                onClick={() => setQuantity(product.slug, quantity - 1)}
                aria-label="تقليل الكمية"
              >
                <Minus size={15} />
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity(product.slug, quantity + 1)}
                aria-label="زيادة الكمية"
              >
                <Plus size={15} />
              </button>
            </div>
            <button
              className="remove-button"
              onClick={() => remove(product.slug)}
              aria-label={`حذف ${product.name}`}
            >
              <Trash2 size={18} />
            </button>
          </article>
        ))}
      </div>
      <aside className="request-summary">
        <span className="eyebrow">ملخص قائمتك</span>
        <h2>{lines.length} منتجات مختارة</h2>
        <div>
          <span>إجمالي تقديري</span>
          <strong>{formatPrice(total)}</strong>
        </div>
        <small>
          الأسعار تقديرية للتوضيح، يتم تأكيد السعر والتوفر عند التواصل.
        </small>
        <Link href="/request" className="button button-primary">
          أرسل طلبك <ArrowLeft />
        </Link>
      </aside>
    </div>
  );
}
