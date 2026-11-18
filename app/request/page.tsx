"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useRequestList } from "@/components/request-provider";
export default function RequestPage() {
  const { lines } = useRequestList();
  const [sent, setSent] = useState(false);
  return (
    <div className="page-wrap container">
      <div className="breadcrumb">
        <Link href="/">الرئيسية</Link>
        <span>/</span>
        <Link href="/request-list">قائمة طلباتي</Link>
        <span>/</span> أرسل طلبك
      </div>
      <div className="form-layout">
        <div>
          <span className="eyebrow">خطوة أخيرة</span>
          <h1 className="page-heading">أرسل طلبك</h1>
          <p className="page-intro">
            املأ بيانات التواصل وسيتواصل معك فريق COMPUTECH لمساعدتك في
            استفسارك.
          </p>
          <div className="form-selected">
            <b>
              المنتجات المختارة ({lines.reduce((sum, x) => sum + x.quantity, 0)}
              )
            </b>
            {lines.length ? (
              lines.map((x) => (
                <span key={x.product.slug}>
                  {x.product.name} <i>× {x.quantity}</i>
                </span>
              ))
            ) : (
              <span>
                لم تتم إضافة منتجات بعد.{" "}
                <Link href="/products">تصفح المنتجات</Link>
              </span>
            )}
          </div>
        </div>
        {sent ? (
          <div className="success-card">
            <CheckCircle2 />
            <h2>تم تجهيز طلبك</h2>
            <p>
              شكراً لاهتمامك بـ COMPUTECH. هذه نسخة تجريبية ولا يتم إرسال
              البيانات إلى خدمة فعلية حالياً.
            </p>
          </div>
        ) : (
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <label>
              الاسم بالكامل
              <input required name="name" placeholder="اكتب اسمك" />
            </label>
            <label>
              رقم الهاتف
              <input
                required
                type="tel"
                name="phone"
                placeholder="01xxxxxxxxx"
              />
            </label>
            <label>
              البريد الإلكتروني <span>اختياري</span>
              <input type="email" name="email" placeholder="name@example.com" />
            </label>
            <label>
              تفاصيل إضافية
              <textarea
                name="message"
                rows={4}
                placeholder="أخبرنا كيف يمكننا مساعدتك"
              />
            </label>
            <button className="button button-primary" type="submit">
              إرسال الاستفسار <ArrowLeft />
            </button>
            <small>
              بإرسال النموذج، سيتم استخدام بياناتك للرد على استفسارك فقط.
            </small>
          </form>
        )}
      </div>
    </div>
  );
}
