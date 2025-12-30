"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  IconShirt,
  IconJacket,
  IconHanger,
  IconColorSwatch,
  IconArrowRight,
} from "@tabler/icons-react";

const products = [
  {
    name: "Áo thun dệt kim",
    desc: "Chất liệu cotton cao cấp, co giãn tốt, thoáng mát, phù hợp đồng phục và thời trang.",
    icon: IconShirt,
    image: "/images/hero/sweater-stack.jpg",
    features: ["Cotton 100%", "Co giãn 4 chiều", "Nhiều màu sắc"],
  },
  {
    name: "Áo khoác dệt kim",
    desc: "Đa dạng mẫu mã, bền đẹp, giữ ấm tốt, phù hợp mọi lứa tuổi.",
    icon: IconJacket,
    image: "/images/hero/textile-fabric.jpg",
    features: ["Giữ ấm tốt", "Chống gió", "Thiết kế đẹp"],
  },
  {
    name: "Đồng phục công ty",
    desc: "Thiết kế theo yêu cầu, thêu/in logo, chất lượng cao, giá cạnh tranh.",
    icon: IconHanger,
    image: "/images/hero/thread-spools.jpg",
    features: ["In/thêu logo", "Đặt theo yêu cầu", "Số lượng lớn"],
  },
  {
    name: "Vải dệt kim",
    desc: "Cung cấp vải dệt kim các loại, đáp ứng nhu cầu sản xuất đa dạng.",
    icon: IconColorSwatch,
    image: "/images/hero/yarn-colorful.jpg",
    features: ["Nhiều chủng loại", "Chất lượng cao", "Giá sỉ tốt"],
  },
];

export default function Products() {
  return (
    <section className="w-full py-10 bg-slate-50 overflow-hidden" id="products">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary text-sm font-medium mb-4">
            Sản phẩm
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Sản phẩm dệt kim chất lượng cao
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            Đa dạng sản phẩm từ áo thun, áo khoác đến vải dệt kim, đáp ứng mọi
            nhu cầu sản xuất và kinh doanh của bạn.
          </p>
        </motion.div>

        {/* Products Grid - Asymmetrical */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch pt-12">
          {products.map((item, idx) => (
            <motion.div
              key={idx}
              className={`group relative flex flex-col bg-white border border-slate-100 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 ${
                idx % 2 !== 0 ? "lg:translate-y-12" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 100,
                delay: idx * 0.1,
              }}
              whileHover={{
                y: idx % 2 !== 0 ? 30 : -10,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
            >
              {/* Artisanal Background Elements within Card */}
              <div className="absolute inset-2 border border-dashed border-slate-100 pointer-events-none rounded-sm z-20" />

              {/* Themed Watermark */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl font-black text-slate-50 opacity-0 group-hover:opacity-40 pointer-events-none select-none tracking-tighter transition-all duration-700 uppercase">
                {idx === 0
                  ? "COTTON"
                  : idx === 1
                  ? "JACKET"
                  : idx === 2
                  ? "UNIFORM"
                  : "FABRIC"}
              </div>

              {/* Image Container - Skewed */}
              <div className="relative h-56 overflow-hidden m-3 rounded-sm transform lg:-skew-x-2 group-hover:skew-x-0 transition-transform duration-700">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-slate-900/10 to-transparent p-4 flex flex-col justify-end">
                  <div className="w-9 h-9 rounded-sm bg-white/95 flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                    <item.icon className="w-5 h-5 text-primary" stroke={1.5} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-2 flex flex-col grow relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-slate-500 mb-6 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>

                {/* Features - Small Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {item.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-0.5 rounded-sm bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-wider border border-slate-100"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA - Artisanal Style */}
                <div className="mt-auto">
                  <button className="relative flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest group/btn">
                    <span>Xem chi tiết</span>
                    <IconArrowRight
                      className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                      stroke={2.5}
                    />
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/30 group-hover/btn:w-full transition-all duration-300" />
                  </button>
                </div>
              </div>

              {/* Decorative Corner Stitch */}
              <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-primary/20 pointer-events-none" />
              <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-primary/20 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
