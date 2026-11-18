import Link from 'next/link'
import {
  ArrowLeft,
  ArrowUpLeft,
  Check,
  Cpu,
  Monitor,
  ShieldCheck,
  Headphones,
  Target,
  Eye,
  Zap,
  Award,
  Users,
  PackageCheck,
} from 'lucide-react'

export const metadata = {
  title: 'من نحن | COMPUTECH',
  description:
    'تعرف على COMPUTECH، وجهتك لاكتشاف حلول الكمبيوتر والتقنية واختيار المنتجات المناسبة لاحتياجاتك.',
}

const features = [
  {
    icon: Cpu,
    title: 'تنوع تقني',
    description:
      'نوفر لك مساحة لاستكشاف مجموعة متنوعة من أجهزة الكمبيوتر والمكونات والإكسسوارات التقنية.',
  },
  {
    icon: ShieldCheck,
    title: 'وضوح وشفافية',
    description:
      'نهتم بتقديم معلومات واضحة تساعدك على فهم مواصفات المنتجات واتخاذ قرار مناسب.',
  },
  {
    icon: Headphones,
    title: 'تواصل مباشر',
    description:
      'فريقنا متاح لمساعدتك في الاستفسارات والتعرف على تفاصيل المنتجات قبل اتخاذ قرارك.',
  },
  {
    icon: PackageCheck,
    title: 'اختيار مناسب',
    description:
      'نساعدك في الوصول إلى الخيارات التي تتوافق مع احتياجاتك واستخداماتك وميزانيتك.',
  },
]

export default function About() {
  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-white text-[#172337]">

      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 pt-8 md:px-10">
        <div className="flex items-center gap-3 text-sm text-gray-400">
          <Link href="/" className="transition hover:text-blue-600">
            الرئيسية
          </Link>
          <span>/</span>
          <span className="font-semibold text-[#172337]">من نحن</span>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-12 md:px-10 md:pb-28 md:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-blue-600" />
              <span className="text-sm font-bold tracking-widest text-blue-600">
                ABOUT COMPUTECH
              </span>
            </div>

            <h1 className="text-4xl font-black leading-[1.5] tracking-tight md:text-6xl md:leading-[1.4]">
              التقنية للجميع،
              <br />
              <span className="text-blue-600">والاختيار لك.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-9 text-gray-500 md:text-lg">
              في COMPUTECH نؤمن أن الوصول إلى التقنية المناسبة يبدأ
              بالمعلومة الواضحة والاختيار الصحيح. لذلك نعمل على توفير
              تجربة تساعدك على اكتشاف منتجات الكمبيوتر والتعرف على
              تفاصيلها ومقارنة الخيارات بما يتناسب مع احتياجاتك.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="group inline-flex items-center gap-3 bg-blue-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-[#172337]"
              >
                استكشف المنتجات
                <ArrowLeft
                  size={18}
                  className="transition-transform group-hover:-translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 border border-gray-200 px-7 py-4 text-sm font-bold transition hover:border-blue-600 hover:text-blue-600"
              >
                تواصل معنا
                <ArrowUpLeft size={18} />
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-40 w-40 border-l-2 border-t-2 border-blue-600/40" />

            <div className="relative aspect-[5/4] overflow-hidden bg-[#edf1f6]">
              <img
                src="https://computecheg.com/wp-content/uploads/2026/04/DSC_0079-scaled.jpg"
                alt="COMPUTECH"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#101d30]/65 via-transparent to-transparent" />

              <div className="absolute bottom-7 right-7 text-white">
                <span className="text-xs font-bold tracking-[0.2em] text-blue-300">
                  COMPUTECH
                </span>
                <p className="mt-2 text-2xl font-black">
                  Your Tech. Your Choice.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-7 -right-5 hidden bg-blue-600 p-6 text-white shadow-xl sm:block">
              <Cpu size={30} />
              <p className="mt-3 text-sm font-bold">عالم التقنية</p>
              <p className="mt-1 text-xs text-blue-100">بين يديك</p>
            </div>

            <div className="absolute -bottom-5 -left-5 h-28 w-28 border-b-2 border-l-2 border-blue-600/40" />
          </div>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="bg-[#172337] px-5 py-20 text-white md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-sm font-bold tracking-widest text-blue-400">
            OUR STORY
          </span>

          <h2 className="mt-6 text-3xl font-black leading-relaxed md:text-5xl">
            أكثر من مجرد منتجات،
            <br />
            <span className="text-blue-400">إنها تجربة اختيار أفضل.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-sm leading-9 text-gray-300 md:text-base">
            نهدف في COMPUTECH إلى جعل تجربة البحث عن منتجات التقنية
            أكثر سهولة ووضوحاً. سواء كنت تبحث عن جهاز كمبيوتر جديد،
            أو مكونات لتطوير جهازك، أو إكسسوارات تكمل تجربتك،
            نمنحك مساحة لاستكشاف الخيارات والتعرف على تفاصيلها
            والتواصل معنا للحصول على المعلومات التي تحتاجها.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-bold tracking-widest text-blue-600">
            WHAT DRIVES US
          </span>
          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            ما الذي نؤمن به؟
          </h2>
          <p className="mt-5 leading-8 text-gray-500">
            نضع احتياجات العميل في مقدمة اهتمامنا، ونسعى لتقديم تجربة
            تقنية قائمة على الوضوح والثقة وسهولة الوصول للمعلومة.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="group border border-gray-100 bg-[#f7f9fc] p-8 transition hover:border-blue-200 md:p-12">
            <div className="flex h-14 w-14 items-center justify-center bg-blue-600 text-white">
              <Eye size={27} />
            </div>
            <h3 className="mt-8 text-2xl font-black">رؤيتنا</h3>
            <p className="mt-5 leading-9 text-gray-500">
              أن نكون وجهة موثوقة لاكتشاف منتجات الكمبيوتر والتقنية،
              وأن نجعل اختيار الحل التقني المناسب تجربة سهلة وواضحة
              لكل شخص.
            </p>
          </div>

          <div className="group border border-gray-100 bg-[#f7f9fc] p-8 transition hover:border-blue-200 md:p-12">
            <div className="flex h-14 w-14 items-center justify-center bg-[#172337] text-white">
              <Target size={27} />
            </div>
            <h3 className="mt-8 text-2xl font-black">رسالتنا</h3>
            <p className="mt-5 leading-9 text-gray-500">
              تقديم تجربة متكاملة لاستعراض المنتجات والتعرف على
              مواصفاتها، مع توفير قنوات تواصل مباشرة تساعد العملاء
              على الوصول إلى المعلومات والخيارات المناسبة.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#f6f8fb] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <span className="text-sm font-bold tracking-widest text-blue-600">
              WHY COMPUTECH
            </span>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              لماذا COMPUTECH؟
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-500">
              نركز على التفاصيل التي تجعل رحلتك في اكتشاف التقنية
              أكثر سهولة وراحة.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <article
                  key={feature.title}
                  className="group border border-gray-100 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={26} />
                    </div>
                    <span className="text-sm font-bold text-gray-300">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-black">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-sm leading-8 text-gray-500">
                    {feature.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-2">
        <div className="relative overflow-hidden bg-[#172337] p-10 text-white md:p-14">
          <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full border border-white/10" />
          <div className="absolute -left-8 -top-8 h-36 w-36 rounded-full border border-white/10" />

          <Zap size={38} className="text-blue-400" />

          <h2 className="relative mt-8 text-3xl font-black leading-relaxed md:text-4xl">
            نؤمن أن الاختيار الصحيح يبدأ بالمعلومة الصحيحة.
          </h2>

          <p className="relative mt-6 leading-9 text-gray-300">
            لهذا نهتم بأن تكون المنتجات ومعلوماتها واضحة أمامك،
            حتى تتمكن من استكشاف الخيارات بثقة قبل التواصل والاستفسار.
          </p>
        </div>

        <div>
          <span className="text-sm font-bold tracking-widest text-blue-600">
            OUR VALUES
          </span>

          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            قيمنا في كل خطوة
          </h2>

          <div className="mt-9 space-y-7">
            {[
              ['الثقة', 'نبني علاقتنا مع العملاء على الوضوح والمصداقية.'],
              ['الجودة', 'نهتم بتجربة عرض المنتجات وتقديم المعلومات بشكل منظم.'],
              ['الاهتمام', 'نضع احتياجات العميل في صميم تجربة COMPUTECH.'],
              ['التطور', 'نسعى باستمرار إلى تحسين تجربة اكتشاف التقنية.'],
            ].map(([title, description]) => (
              <div key={title} className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center bg-blue-50 text-blue-600">
                  <Check size={17} />
                </div>
                <div>
                  <h3 className="font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-500">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 px-5 py-20 text-center text-white md:py-24">
        <div className="mx-auto max-w-3xl">
          <span className="text-sm font-bold tracking-widest text-blue-100">
            LET'S EXPLORE TECHNOLOGY
          </span>

          <h2 className="mt-6 text-3xl font-black leading-relaxed md:text-5xl">
            جاهز لاكتشاف عالم التقنية؟
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-blue-100 md:text-base">
            ابدأ رحلتك الآن، وتصفح مجموعة المنتجات واكتشف الخيارات
            التي تناسب احتياجاتك.
          </p>

          <Link
            href="/products"
            className="group mt-9 inline-flex items-center gap-3 bg-white px-9 py-4 text-sm font-black text-[#172337] transition hover:bg-[#172337] hover:text-white"
          >
            تصفح المنتجات
            <ArrowLeft
              size={18}
              className="transition-transform group-hover:-translate-x-1"
            />
          </Link>
        </div>
      </section>

    </main>
  )
}
