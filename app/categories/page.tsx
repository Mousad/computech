import { CategoryTiles, SectionTitle } from "@/components/sections";
export const metadata = { title: "الأقسام" };
export default function CategoriesPage() {
  return (
    <div className="page-wrap container">
      <div className="breadcrumb">
        الرئيسية <span>/</span> الأقسام
      </div>
      <SectionTitle eyebrow="تصفح باهتمامك" title="الأقسام التقنية" />
      <p className="page-intro">
        ابدأ من الفئة الأقرب لاحتياجك، واكتشف المزيد من الخيارات.
      </p>
      <CategoryTiles />
    </div>
  );
}
