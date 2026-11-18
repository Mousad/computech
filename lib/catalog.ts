export type Product = {
  slug: string;
  name: string;
  brand: string;
  model: string;
  price: number;
  category: string;
  image: string;
  badge?: string;
  description: string;
  specs: string[];
};
export const products: Product[] = [
  {
    slug: "zenbook-14-oled",
    name: "Zenbook 14 OLED",
    brand: "ASUS",
    model: "UX3405MA",
    price: 58900,
    category: "لابتوبات",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85",
    badge: "اختيار المحترفين",
    description:
      "تصميم فائق النحافة يجمع بين الأداء المتقدم والشاشة السينمائية.",
    specs: ["Intel Core Ultra 7", "16GB RAM", "1TB SSD", "14” 2.8K OLED"],
  },
  {
    slug: "rog-strix-g16",
    name: "ROG Strix G16",
    brand: "ASUS ROG",
    model: "G614JV",
    price: 74900,
    category: "أجهزة الألعاب",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=900&q=85",
    badge: "الأكثر طلباً",
    description: "قوة ألعاب من الجيل الجديد مع تبريد متقدم ومعدل تحديث مرتفع.",
    specs: ["Intel Core i7-13650HX", "16GB DDR5", "RTX 4060", "16” 165Hz"],
  },
  {
    slug: "dell-ultrasharp-27",
    name: "UltraSharp 27 4K",
    brand: "Dell",
    model: "U2723QE",
    price: 32900,
    category: "الشاشات",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=85",
    description: "شاشة احترافية بدقة 4K وألوان دقيقة لمساحة عمل أكثر وضوحاً.",
    specs: ["27 inch IPS Black", "4K UHD", "USB-C Hub", "99% DCI-P3"],
  },
  {
    slug: "corsair-vengeance-32",
    name: "Vengeance DDR5 32GB",
    brand: "Corsair",
    model: "CMK32GX5M2B",
    price: 6900,
    category: "مكونات الكمبيوتر",
    image:
      "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=900&q=85",
    description:
      "ذاكرة DDR5 عالية السرعة لبناء كمبيوتر متوازن وسريع الاستجابة.",
    specs: [
      "32GB (2×16GB)",
      "DDR5 6000MHz",
      "Intel XMP",
      "Low-profile heatspreader",
    ],
  },
  {
    slug: "logitech-mx-master-3s",
    name: "MX Master 3S",
    brand: "Logitech",
    model: "910-006559",
    price: 5900,
    category: "الإكسسوارات",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85",
    description: "ماوس لاسلكي مريح للعمل الدقيق والتنقل السلس بين الشاشات.",
    specs: [
      "8000 DPI",
      "Quiet Clicks",
      "USB-C Fast Charging",
      "Bluetooth / Bolt",
    ],
  },
  {
    slug: "hp-probook-450",
    name: "ProBook 450 G10",
    brand: "HP",
    model: "8A5R7EA",
    price: 38900,
    category: "لابتوبات",
    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=900&q=85",
    description: "لابتوب أعمال عملي وآمن للاستخدام اليومي في المكتب والتنقل.",
    specs: ["Intel Core i5-1335U", "16GB RAM", "512GB SSD", "15.6” FHD"],
  },
];
export const categories = [
  {
    name: "لابتوبات",
    slug: "laptops",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    count: "أداء يناسب كل يوم",
  },
  {
    name: "أجهزة الألعاب",
    slug: "gaming",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
    count: "جهّز ساحة لعبك",
  },
  {
    name: "الشاشات",
    slug: "monitors",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    count: "رؤية أوضح للتفاصيل",
  },
  {
    name: "مكونات الكمبيوتر",
    slug: "components",
    image:
      "https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80",
    count: "ابنِ جهازك بطريقتك",
  },
];
export const brands = [
  { name: "ASUS", logo: "/brands/Acer.jpg" },
  { name: "Dell", logo: "/brands/dell.jpg" },
  { name: "HP", logo: "/brands/HP Logo.jpg" },
  { name: "Lenovo", logo: "/brands/lenovo.jpg" },
  { name: "Logitech", logo: "/brands/logitech.jpg" },
  { name: "Corsair", logo: "/brands/corsair.jpg" },
  { name: "Acer", logo: "/brands/acer.jpg" },
  { name: "MSI", logo: "/brands/msi.jpg" },
];
export const formatPrice = (value: number) =>
  new Intl.NumberFormat("ar-EG").format(value) + " ج.م";
