import type { Metadata, Viewport } from "next";
import "./globals.css";
import { RequestProvider } from "@/components/request-provider";
import { Header, Footer } from "@/components/site-shell";
export const metadata: Metadata = {
  title: {
    default: "COMPUTECH | عالم التقنية في مكان واحد",
    template: "%s | COMPUTECH",
  },
  description:
    "اكتشف منتجات الكمبيوتر والتقنية من COMPUTECH، أضف اختياراتك إلى قائمة الطلبات وتواصل معنا للحصول على المساعدة.",
  generator: "v0.app",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f7fa",
  colorScheme: "light",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <RequestProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </RequestProvider>
      </body>
    </html>
  );
}
