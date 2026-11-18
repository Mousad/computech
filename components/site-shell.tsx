
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  House,
  Monitor,
  Menu,
  X,
  ShoppingBag,
  Info,
  Phone,
  Tag,
  Grid2X2,
  ArrowUpLeft,
  Search,
  ClipboardList,
} from "lucide-react";

import { useRequestList } from "@/components/request-provider";

const bottomNav = [
  { label: "القائمة", href: "#menu", icon: Menu, type: "menu" },
  { label: "المنتجات", href: "/products", icon: Monitor, type: "link" },
  { label: "الرئيسية", href: "/", icon: House, type: "home" },
  { label: "من نحن", href: "/about", icon: Info, type: "link" },
  { label: "السلة", href: "/request-list", icon: ShoppingBag, type: "cart" },
];

const menuLinks = [
  { label: "الرئيسية", href: "/", icon: House },
  { label: "كل المنتجات", href: "/products", icon: Monitor },
  { label: "الأقسام", href: "/categories", icon: Grid2X2 },
  { label: "الأكثر مبيعاً", href: "/best-sellers", icon: ShoppingBag },
  { label: "العلامات التجارية", href: "/brands", icon: Tag },
  { label: "من نحن", href: "/about", icon: Info },
  { label: "تواصل معنا", href: "/contact", icon: Phone },
  { label: "قائمة طلباتي", href: "/request-list", icon: ClipboardList },
];

function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Computech الرئيسية"
      className={`inline-flex items-center gap-2 ${
        footer ? "justify-start" : "justify-center"
      }`}
    >
      <span className="flex flex-col text-right leading-none">
        <span className="text-xl font-black tracking-tight text-[#172337]">
          COMPU<span className="text-blue-600">TECH</span>
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const { lines } = useRequestList();
  const [menuOpen, setMenuOpen] = useState(false);

  const count = lines.reduce((sum, line) => sum + line.quantity, 0);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* Desktop Announcement */}
      <div className="hidden bg-[#172337] px-6 py-2 text-center text-xs text-white md:block">
        COMPUTECH — Technology, Simplified
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 md:px-6">
          {/* Mobile Logo */}
          <div className="flex w-full justify-center md:hidden">
            <BrandLogo />
          </div>

          {/* Desktop Logo */}
          <div className="hidden md:block">
            <BrandLogo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:flex">
            {menuLinks.slice(0, 7).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`whitespace-nowrap text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/products"
              aria-label="البحث عن المنتجات"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
            >
              <Search size={19} />
            </Link>

            <Link
              href="/request-list"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              <ShoppingBag size={18} />
              <span>قائمة طلباتي</span>
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white/20 px-1 text-xs">
                {count}
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Full Side Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[70] md:hidden">
          {/* Overlay */}
          <button
            type="button"
            aria-label="إغلاق القائمة"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px]"
          />

          {/* Side Panel */}
          <aside className="absolute bottom-0 left-0 top-0 flex w-[82%] max-w-[340px] flex-col bg-white shadow-2xl animate-in slide-in-from-left duration-300">
            {/* Menu Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5">
              <BrandLogo />

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="إغلاق القائمة"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-red-50 hover:text-red-500"
              >
                <X size={21} />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
              <p className="mb-4 px-3 text-xs font-bold uppercase tracking-widest text-slate-400">
                القائمة الرئيسية
              </p>

              <nav className="space-y-1">
                {menuLinks.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between rounded-xl px-3 py-3.5 transition ${
                        active
                          ? "bg-blue-50 text-blue-600"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                            active ? "bg-blue-100" : "bg-slate-100"
                          }`}
                        >
                          <Icon size={18} />
                        </span>

                        <span className="text-sm font-semibold">
                          {item.label}
                        </span>
                      </span>

                      <ArrowUpLeft size={16} className="text-slate-300" />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Menu Footer */}
            <div className="border-t border-slate-100 bg-slate-50 px-5 py-5">
              <p className="text-sm font-black tracking-wide text-[#172337]">
                COMPUTECH
              </p>
              <p className="mt-1 text-xs text-slate-400">
                TECHNOLOGY, SIMPLIFIED
              </p>
            </div>
          </aside>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      <nav
        aria-label="التنقل الرئيسي"
        className="fixed bottom-3 left-4 right-5 z-50 rounded-2xl border border-slate-200 bg-white/95 px-2 pb-[env(safe-area-inset-bottom)] shadow-[0_-5px_25px_rgba(15,23,42,0.08)] backdrop-blur-xl md:hidden"
      >
        <div className="mx-auto flex h-[58px] max-w-lg items-center justify-around">
          {bottomNav.map((item) => {
            const Icon = item.icon;

            const active =
              item.type === "home"
                ? pathname === "/"
                : item.type === "cart"
                  ? isActive("/request-list")
                  : item.type === "link"
                    ? isActive(item.href)
                    : menuOpen;

            {/* Menu Button */}
            if (item.type === "menu") {
              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => setMenuOpen(true)}
                  aria-label="فتح القائمة"
                  aria-expanded={menuOpen}
                  className={`flex h-full flex-1 items-center justify-center ${
                    menuOpen ? "text-blue-600" : "text-slate-400"
                  }`}
                >
                  <Menu size={24} strokeWidth={1.9} />
                </button>
              );
            }

            {/* Center Home Button */}
            if (item.type === "home") {
              return (
                <Link
                  key={item.href}
                  href="/"
                  aria-label="الرئيسية"
                  aria-current={active ? "page" : undefined}
                  className="relative flex h-full flex-1 items-center justify-center"
                >
                  <span
                    className={`absolute -top-3 flex h-[58px] w-[58px] items-center justify-center rounded-full border-[5px] border-white shadow-lg transition-all duration-200 ${
                      active
                        ? "bg-blue-600 text-white"
                        : "bg-[#172337] text-white"
                    }`}
                  >
                    <House size={24} strokeWidth={2.2} />
                  </span>
                </Link>
              );
            }

            {/* Other Navigation Icons */}
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.label}
                aria-current={active ? "page" : undefined}
                className={`relative flex h-full flex-1 items-center justify-center transition-colors ${
                  active ? "text-blue-600" : "text-slate-400"
                }`}
              >
                <Icon size={23} strokeWidth={active ? 2.5 : 1.8} />

                {/* Cart Counter */}
                {item.type === "cart" && count > 0 && (
                  <span className="absolute right-1/2 top-2 flex h-[17px] min-w-[17px] translate-x-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
                    {count > 99 ? "99+" : count}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-[#F5F7FA] pb-24 md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        {/* Brand */}
        <div className="space-y-5">
          <BrandLogo footer />

          <p className="max-w-xs text-sm leading-7 text-slate-500">
            مساحة واحدة تجمع كل ما تحتاجه من منتجات التقنية،
            مع مساعدة حقيقية لاختيار الأنسب لك.
          </p>

          <div className="flex gap-2">
            {[Monitor, Search, ClipboardList].map((Icon, index) => (
              <div
                key={index}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="space-y-4">
          <h3 className="font-bold text-[#172337]">تصفح المنتجات</h3>

          <div className="flex flex-col gap-3 text-sm text-slate-500">
            <Link className="transition hover:text-blue-600" href="/products">
              كل المنتجات
            </Link>
            <Link className="transition hover:text-blue-600" href="/categories">
              الأقسام
            </Link>
            <Link className="transition hover:text-blue-600" href="/best-sellers">
              الأكثر مبيعاً
            </Link>
            <Link className="transition hover:text-blue-600" href="/brands">
              العلامات التجارية
            </Link>
          </div>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h3 className="font-bold text-[#172337]">عن COMPUTECH</h3>

          <div className="flex flex-col gap-3 text-sm text-slate-500">
            <Link className="transition hover:text-blue-600" href="/about">
              من نحن
            </Link>
            <Link className="transition hover:text-blue-600" href="/contact">
              تواصل معنا
            </Link>
            <Link className="transition hover:text-blue-600" href="/request-list">
              قائمة طلباتي
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <Phone size={20} />
          </div>

          <h3 className="mb-2 font-bold text-[#172337]">
            نحن هنا لمساعدتك
          </h3>

          <p className="mb-5 text-sm leading-6 text-slate-500">
            تواصل معنا للاستفسار عن المنتجات أو طلب عرض سعر.
          </p>

          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            تواصل مع الفريق
            <ArrowUpLeft size={17} />
          </Link>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center text-xs text-slate-400 md:flex-row md:text-right">
          <span>
            © {new Date().getFullYear()} COMPUTECH. جميع الحقوق محفوظة.
          </span>
          <span>TECHNOLOGY, SIMPLIFIED</span>
        </div>
      </div>
    </footer>
  );
}
