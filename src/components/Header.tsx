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
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NAV_ITEMS = [
  { label: "Trang chủ", href: "#home" },
  { label: "Giới thiệu", href: "#about" },
  { label: "Sản phẩm", href: "#products" },
  { label: "Liên hệ", href: "#contact" },
  { label: "FAQ", href: "#faq" },
];

const SOCIALS = [
  {
    href: "https://zalo.me/0312058608",
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
              className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg focus-visible:scale-110"
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
              className="w-64 p-0 bg-white/95 backdrop-blur-md animate-slide-in"
            >
              <SheetTitle className="sr-only">Menu Điều Hướng</SheetTitle>
              <SheetDescription className="sr-only">
                Menu lựa chọn các trang và dịch vụ của Liên Việt
              </SheetDescription>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-4 py-3 border-b">
                  <Link
                    href="#home"
                    className="flex items-center gap-2"
                    aria-label="Trang chủ"
                  >
                    <Image
                      src="/logo-hearder.svg"
                      alt="Logo Công ty Dệt Kim Liên Việt"
                      width={60}
                      height={60}
                      className="h-12 w-12 object-contain transition-transform duration-300 hover:scale-110"
                      priority
                    />
                  </Link>
                </div>
                <nav
                  className="flex flex-col gap-1 px-4 py-4 font-sans text-base"
                  aria-label="Mobile navigation"
                >
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="px-3 py-2 rounded-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 hover:text-primary hover:bg-gray-100"
                      aria-label={item.label}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    href="#contact"
                    className="mt-2 px-4 py-2 rounded-lg bg-primary text-white font-semibold shadow-md hover:bg-yellow-400 hover:text-primary transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 animate-bounce-in"
                    aria-label="Liên hệ nhanh"
                    onClick={() => setMenuOpen(false)}
                  >
                    Liên hệ
                  </Link>
                </nav>
                <div className="flex gap-3 px-4 pb-4 mt-auto">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      rel={
                        s.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
