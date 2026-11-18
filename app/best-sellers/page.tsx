import { ProductGrid, SectionTitle } from "@/components/sections";
import { products } from "@/lib/catalog";
export const metadata = { title: "الأكثر مبيعاً" };
export default function BestSellers() {
  return (
    <div className="page-wrap container">
      <div className="breadcrumb">
        الرئيسية <span>/</span> الأكثر مبيعاً
      </div>
      <SectionTitle eyebrow="اختيارات رائجة" title="الأكثر مبيعاً" />
      <p className="page-intro">
        مجموعة من المنتجات الرائجة التي تستحق أن تكون ضمن اختياراتك. بيانات
        الكتالوج التوضيحية قابلة للاستبدال ببيانات COMPUTECH الفعلية.
      </p>
      <ProductGrid items={products.filter((p) => p.badge || p.price < 40000)} />
    </div>
  );
}
