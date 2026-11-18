import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function AboutSection() {
  return (
    <section
      dir="rtl"
      className="relative isolate flex min-h-[550px] items-center justify-center overflow-hidden bg-[#101d30] md:min-h-[650px]"
    >
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "url('https://computecheg.com/wp-content/uploads/2026/04/DSC_0079-scaled.jpg')",
          backgroundPosition: "center center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 -z-10 bg-[#101d30]/65" />

      {/* Content - Scrolls Normally */}
      <div className="mx-auto w-full max-w-7xl px-5 py-28 text-center text-white md:px-10 md:py-36">

        <span className="mb-6 inline-flex items-center gap-3 text-sm font-bold tracking-[0.25em] text-blue-300">
          <span className="h-px w-8 bg-blue-400" />
          COMPUTECH
          <span className="h-px w-8 bg-blue-400" />
        </span>

        <h2 className="mx-auto max-w-4xl text-3xl font-black leading-[1.7] md:text-5xl">
          نؤمن أن اختيار التقنية
          <span className="text-blue-400"> المناسبة </span>
          يبدأ بفهم احتياجك.
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-sm leading-9 text-white/85 md:text-lg">
          في COMPUTECH، نسهّل عليك اكتشاف خيارات التقنية ونساعدك على
          مقارنة المنتجات والتعرّف على تفاصيلها، لتصل إلى الحل الذي
          يناسب احتياجاتك بثقة ووضوح.
        </p>

        <div className="mt-10">
          <Link
            href="/about"
            className="group inline-flex items-center justify-center gap-3 rounded-sm bg-blue-600 px-10 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#172337]"
          >
            من نحن
            <ArrowLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}