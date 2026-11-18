import { SectionTitle } from "@/components/sections";
import { RequestListView } from "@/components/request-ui";
export const metadata = { title: "قائمة طلباتي" };
export default function RequestList() {
  return (
    <div className="page-wrap container">
      <div className="breadcrumb">
        الرئيسية <span>/</span> قائمة طلباتي
      </div>
      <SectionTitle eyebrow="اختياراتك في مكان واحد" title="قائمة طلباتي" />
      <p className="page-intro">
        راجع المنتجات والكميات قبل إرسال استفسارك إلى فريق COMPUTECH.
      </p>
      <RequestListView />
    </div>
  );
}
