import { ProductGrid, SectionTitle } from "@/components/sections";
export const metadata = { title: "المنتجات" };
export default function ProductsPage() {
  return (
    <div className="page-wrap container">
      <div className="breadcrumb">
        الرئيسية <span>/</span> المنتجات
      </div>
   
      <p className="page-intro">
        تصفح مجموعة من منتجات التقنية المختارة. أضف ما يعجبك إلى قائمة الطلبات
        للاستفسار أو طلب عرض سعر.
      </p>
      <div className="catalog-toolbar">
        <span>مجموعة من المنتجات للاكتشاف</span>
        <span>
          عرض الشبكة <i />
        </span>
      </div>
      <ProductGrid />
    </div>
  );
}
