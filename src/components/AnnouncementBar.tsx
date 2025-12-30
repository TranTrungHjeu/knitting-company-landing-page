"use client";

import { IconGift, IconPhone } from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-slate-900 text-amber-400 py-1.5 px-4 text-[10px] tracking-[0.2em] uppercase font-bold z-50 relative overflow-hidden border-b border-primary/20 shadow-lg">
      {/* Artisanal Knit Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20L0 40V0L20 20zM20 20L40 0V40L20 20z' fill='%23fbbf24' fill-opacity='1' fill-rule='evenodd'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Decorative "Stitch" border at the top */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent border-t border-dashed border-primary/40 opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10 flex items-center justify-between gap-8 h-full">
        {/* Infinite Scrolling Marquee */}
        <div className="flex-1 overflow-hidden pointer-events-none hidden md:block">
          <motion.div
            className="flex whitespace-nowrap gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <IconGift
                  className="w-3 h-3 animate-pulse text-amber-500"
                  stroke={2.5}
                />
                <span>Ưu đãi cuối năm: Giảm 10% cho đơn hàng đầu tiên</span>
                <span className="text-slate-700 mx-4">•</span>
                <span>Chuyên gia dệt kim từ 2012</span>
                <span className="text-slate-700 mx-4">•</span>
                <span>Chất lượng tạo nên thương hiệu</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Static content for mobile / Phone link */}
        <div className="flex items-center justify-center md:justify-end gap-6 w-full md:w-auto">
          <div className="flex items-center gap-2 md:hidden">
            <IconGift className="w-3 h-3 text-amber-500" stroke={2.5} />
            <span className="whitespace-nowrap">Giảm 10% đơn đầu</span>
          </div>

          {/* Stitched Divider (hidden on very small screens) */}
          <div className="hidden sm:block h-3 w-px bg-slate-700 border-x border-dashed border-slate-600/50" />

          <a
            href="tel:02837500971"
            className="inline-flex items-center gap-2 hover:text-white transition-colors duration-300"
          >
            <IconPhone className="w-3 h-3 text-primary" stroke={2.5} />
            <span className="tabular-nums">028 3750 0971</span>
          </a>
        </div>
      </div>
    </div>
  );
}
