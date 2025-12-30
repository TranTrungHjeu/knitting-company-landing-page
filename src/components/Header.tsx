"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Trang chủ", href: "#home", desc: "Khởi đầu vạn sự" },
  { label: "Giới thiệu", href: "#about", desc: "Kế thừa di sản" },
  { label: "Sản phẩm", href: "#products", desc: "Tinh hoa dệt kim" },
  { label: "Liên hệ", href: "#contact", desc: "Kết nối trực tiếp" },
  { label: "FAQ", href: "#faq", desc: "Giải đáp thắc mắc" },
];

const SOCIALS = [
  {
    href: "https://zalo.me/0909045668",
    label: "Zalo",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fontSize="10"
          fill="currentColor"
        >
          Z
        </text>
      </svg>
    ),
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 shadow-xl backdrop-blur border-b border-gray-200"
          : "bg-transparent"
      )}
      aria-label="Header"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-6 gap-1">
        <Link
          href="#home"
          className="flex items-center group"
          aria-label="Trang chủ"
        >
          <span className="relative flex items-center">
            <Image
              src="/logo-hearder.svg"
              alt="Logo Công ty Dệt Kim Liên Việt"
              width={112}
              height={112}
              className="h-24 w-24 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg focus-visible:scale-110"
              priority
            />
          </span>
        </Link>
        <nav
          className="hidden md:flex flex-1 justify-center items-center gap-2 lg:gap-4 font-sans text-base"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-3 py-2 rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 relative group",
                "hover:text-primary hover:bg-yellow-50",
                "active:text-yellow-600"
              )}
              aria-label={item.label}
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8 rounded-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center ml-auto">
          <Link
            href="#contact"
            className="px-4 py-2 rounded-lg bg-primary text-white font-semibold shadow-md hover:bg-yellow-400 hover:text-primary transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 animate-bounce-in"
            aria-label="Liên hệ nhanh"
          >
            Liên hệ
          </Link>
        </div>
        {/* Đã bỏ icon Zalo ở header, chỉ giữ nút nổi */}

        {/* Mobile menu */}
        <div className="md:hidden flex items-center">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Mở menu"
              >
                <Menu className="w-7 h-7 text-primary" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-80 p-0 bg-white border-l-0 overflow-hidden **:data-[slot=sheet-close]:hidden"
            >
              <SheetTitle className="sr-only">Menu Điều Hướng</SheetTitle>
              <SheetDescription className="sr-only">
                Menu lựa chọn các trang và dịch vụ của Liên Việt
              </SheetDescription>

              <div className="flex flex-col h-full relative">
                {/* Artisanal Background Elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div
                    className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='%232c6db0' fill-opacity='1'/%3E%3C/svg%3E")`,
                      backgroundSize: "10px 10px",
                    }}
                  />

                  {/* Vertical Stitched Line */}
                  <div className="absolute top-0 right-12 w-px h-full border-r border-dashed border-slate-200" />

                  {/* Watermark */}
                  <div className="absolute bottom-10 -right-4 origin-bottom-right -rotate-90 text-[60px] font-black text-slate-50 opacity-40 whitespace-nowrap leading-none select-none tracking-tighter">
                    LIEN VIET
                  </div>

                  {/* Decorative corner stitches */}
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-dashed border-primary/20" />
                  <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-dashed border-primary/20" />
                </div>

                {/* Manual Close Button - Visible and clickable */}
                <button
                  onClick={() => setMenuOpen(false)}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg border border-slate-200 text-slate-600 hover:text-primary hover:border-primary transition-all z-[100] focus:outline-none"
                  aria-label="Đóng menu"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex-1 flex flex-col justify-center px-8 relative z-10">
                  <div className="mb-12">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-2 block">
                      Danh mục
                    </span>
                    <div className="w-12 h-1 bg-primary" />
                  </div>

                  <nav
                    className="flex flex-col gap-8"
                    aria-label="Mobile navigation"
                  >
                    {NAV_ITEMS.map((item, idx) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group flex flex-col transition-all duration-300 focus:outline-none"
                        onClick={() => setMenuOpen(false)}
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="text-slate-300 font-mono text-xs tabular-nums group-hover:text-primary transition-colors">
                            0{idx + 1}
                          </span>
                          <span className="font-heading text-3xl font-bold text-slate-900 group-hover:text-primary group-hover:translate-x-2 transition-all duration-300">
                            {item.label}
                          </span>
                        </div>
                        <span className="ml-8 text-[10px] text-slate-400 uppercase tracking-widest font-semibold mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          {item.desc}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>

                <div className="px-8 pb-10 relative z-10">
                  {/* Prominent Zalo Button */}
                  <a
                    href="https://zalo.me/0909045668"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full px-5 py-4 rounded-xl bg-blue-500 text-white font-bold shadow-lg hover:bg-blue-600 transition-all mb-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <text
                          x="12"
                          y="16"
                          textAnchor="middle"
                          fontSize="10"
                          fill="currentColor"
                        >
                          Z
                        </text>
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm opacity-80">
                        Chat ngay qua
                      </span>
                      <span className="block text-lg">Zalo: 0909 045 668</span>
                    </div>
                  </a>

                  <div className="flex items-center justify-between">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                      Dệt Kim Liên Việt
                    </div>
                    <div className="text-[10px] font-bold text-slate-300 uppercase tracking-tighter">
                      Est. 2012
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
