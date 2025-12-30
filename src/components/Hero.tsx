"use client";

import { Separator } from "@/components/ui/separator";
import {
  IconClockHour4,
  IconUsers,
  IconThumbUp,
  IconArrowRight,
  IconCircleCheckFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import { motion } from "framer-motion";
import DomeGallery from "./DomeGallery";

// Hero images for gallery (8 images)
// First 4 images are critical for LCP - they should load immediately
const heroImages = [
  {
    src: "/images/hero/bm32kjjzvuujwevo4u0i.webp",
    alt: "Len sợi nhiều màu sắc",
    priority: true,
  },
  {
    src: "/images/hero/iusr3bcw7txxunuz936a.webp",
    alt: "Vải dệt kim cao cấp",
    priority: true,
  },
  {
    src: "/images/hero/qq3qsuvojcm6lj6ktppo.webp",
    alt: "Cuộn chỉ công nghiệp",
    priority: true,
  },
  {
    src: "/images/hero/vy5vjrz1ew9ehipfxzu0.webp",
    alt: "Máy dệt kim hiện đại",
    priority: true,
  },
  {
    src: "/images/hero/wq79mo82dwk9tpp8zang.webp",
    alt: "Cuộn len mềm mại",
    priority: false,
  },
  {
    src: "/images/hero/x8zngplhilwljzqyanbt.webp",
    alt: "Áo len thành phẩm",
    priority: false,
  },
  {
    src: "/images/hero/xiqhn0o1cjd5fig6mkyf.webp",
    alt: "Nghệ nhân đan len",
    priority: false,
  },
  {
    src: "/images/hero/z71dp1p2jjkcn6asu0iw.webp",
    alt: "Mẫu dệt kim tinh xảo",
    priority: false,
  },
];

export default function Hero() {
  return (
    <section
      className="w-full min-h-screen relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-50"
      id="hero"
    >
      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 z-10 pt-12 md:pt-16">
        {/* Text content - centered */}
        <div className="text-center mb-6">
          <motion.div
            className="relative inline-flex items-center gap-2 px-4 py-2 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Artisanal Background with Stitched Effect */}
            <div className="absolute inset-0 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] rounded-sm border border-dashed border-slate-300 -skew-x-2" />
            <div className="absolute inset-0 bg-primary/5 rounded-sm -skew-x-2 transition-transform group-hover:scale-105" />

            <motion.div
              animate={{ rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative z-10"
            >
              <IconCircleCheckFilled className="w-4 h-4 text-primary" />
            </motion.div>

            <span className="relative z-10 text-slate-700 font-bold text-xs tracking-widest uppercase">
              Uy tín hàng đầu TP.HCM
            </span>

            {/* Small decorative corner "threads" */}
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary/30 rounded-tl-sm pointer-events-none" />
            <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-primary/30 rounded-tr-sm pointer-events-none" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-primary/30 rounded-bl-sm pointer-events-none" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary/30 rounded-br-sm pointer-events-none" />
          </motion.div>

          {/* Main heading */}
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 mb-4 leading-tight">
            Chất lượng <span className="text-primary">tạo nên</span>{" "}
            <span className="text-amber-500">thương hiệu</span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto font-sans text-base md:text-lg text-slate-600 mb-6 leading-relaxed">
            Chuyên sản xuất, gia công các sản phẩm{" "}
            <span className="font-medium text-slate-800">dệt kim cao cấp</span>,{" "}
            uy tín hàng đầu tại TP. Hồ Chí Minh.
          </p>

          {/* Stats - clean and minimal */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-6">
            {[
              { value: "12+", label: "Năm kinh nghiệm", Icon: IconClockHour4 },
              { value: "500+", label: "Đối tác", Icon: IconUsers },
              { value: "99%", label: "Hài lòng", Icon: IconThumbUp },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <stat.Icon className="w-5 h-5 text-slate-400" stroke={1.5} />
                <div className="text-left">
                  <div className="text-lg md:text-xl font-semibold text-slate-800">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons - professional style */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#products"
              className="px-6 py-3 rounded-md bg-primary text-white font-sans font-medium text-sm inline-flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-sm"
            >
              Xem sản phẩm
              <IconArrowRight className="w-4 h-4" stroke={2} />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-md bg-white text-slate-700 font-sans font-medium text-sm inline-flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors border border-slate-200 shadow-sm"
            >
              Liên hệ ngay
            </a>
          </div>
        </div>

        {/* Dome Gallery */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
          <DomeGallery
            images={heroImages}
            overlayBlurColor="#f8fafc"
            imageBorderRadius="8px"
            grayscale={false}
            fit={0.7}
            minRadius={280}
            segments={30}
          />

          {/* Badge: Quality - Vietnam certification logo */}
          <div className="absolute top-2 right-2 md:top-6 md:right-16 z-30">
            <Image
              src="/images/hangvietnamchatluongcao.png"
              alt="Hàng Việt Nam Chất Lượng Cao"
              width={112}
              height={112}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 object-contain drop-shadow-md"
            />
          </div>

          {/* Badge: Location - Made in Vietnam logo */}
          <div className="absolute bottom-2 left-2 md:bottom-6 md:left-16 z-30">
            <Image
              src="/images/madeinvietnam.svg"
              alt="Made in Vietnam"
              width={144}
              height={144}
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 object-contain drop-shadow-md"
            />
          </div>
        </div>
      </div>

      <Separator className="absolute bottom-0 left-0 right-0" />
    </section>
  );
}
