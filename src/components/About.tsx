"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  IconHeart,
  IconShield,
  IconUsers,
  IconTrendingUp,
  IconWorld,
  IconHistory,
  IconCertificate,
} from "@tabler/icons-react";

const values = [
  {
    icon: IconShield,
    title: "Chất lượng",
    description: "Cam kết sản phẩm đạt tiêu chuẩn cao nhất",
    color: "bg-blue-500",
  },
  {
    icon: IconUsers,
    title: "Tận tâm",
    description: "Lắng nghe và phục vụ khách hàng tận tình",
    color: "bg-emerald-500",
  },
  {
    icon: IconTrendingUp,
    title: "Đổi mới",
    description: "Không ngừng cải tiến công nghệ và quy trình",
    color: "bg-amber-500",
  },
  {
    icon: IconHeart,
    title: "Trách nhiệm",
    description: "Bảo vệ môi trường và cộng đồng",
    color: "bg-rose-500",
  },
];

const stats = [
  {
    icon: IconHistory,
    label: "12+ Năm",
    description: "Kinh nghiệm dệt may",
  },
  {
    icon: IconUsers,
    label: "500+",
    description: "Đối tác tin cậy",
  },
  {
    icon: IconCertificate,
    label: "99%",
    description: "Khách hàng hài lòng",
  },
  {
    icon: IconWorld,
    label: "10+",
    description: "Quốc gia xuất khẩu",
  },
];

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const decorY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const decorRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section
      ref={containerRef}
      className="w-full py-10 bg-white relative overflow-hidden"
      id="about"
    >
      {/* Artisanal Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <motion.div
          style={{ y: decorY, rotate: decorRotate }}
          className="absolute -top-10 -left-20 text-[80px] sm:text-[120px] md:text-[180px] font-black text-slate-50 opacity-[0.4] leading-none whitespace-nowrap"
        >
          KNITTING
        </motion.div>
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [100, -50]) }}
          className="absolute bottom-20 -right-20 text-[60px] sm:text-[100px] md:text-[150px] font-black text-slate-50 opacity-[0.4] leading-none whitespace-nowrap"
        >
          LIEN VIET
        </motion.div>

        {/* Abstract "Stitches" pattern */}
        <div className="absolute top-1/4 right-0 w-64 h-px bg-linear-to-r from-transparent via-slate-100 to-transparent border-t border-dashed border-slate-200" />
        <div className="absolute bottom-1/3 left-0 w-48 h-px bg-linear-to-r from-transparent via-slate-100 to-transparent border-t border-dashed border-slate-200" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Centered Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary text-sm font-medium mb-4">
              Về chúng tôi
            </span>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="inline-block px-3 py-1 rounded-sm bg-slate-900 text-white text-[10px] tracking-widest uppercase font-bold">
                Chương mới của dệt kim
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1]">
              Tỉ mỉ trong từng <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-amber-500 italic">
                đường kim mũi chỉ
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Overlapping Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Main Image with decorative frame */}
          <motion.div
            className="lg:col-span-7 relative group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="absolute -inset-4 border border-dashed border-slate-200 rounded-2xl pointer-events-none group-hover:scale-[1.02] transition-transform duration-500" />
            <div className="relative aspect-16/10 rounded-xl overflow-hidden shadow-2xl skew-y-1 group-hover:skew-y-0 transition-transform duration-700">
              <Image
                src="/images/hero/vy5vjrz1ew9ehipfxzu0.webp"
                alt="Xưởng sản xuất hiện đại"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent" />
            </div>

            {/* Artisanal Badge - Shifted for mobile accessibility */}
            <motion.div
              className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 bg-white p-4 sm:p-8 shadow-xl rounded-sm border-t-4 border-primary z-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-3xl sm:text-5xl font-black text-slate-900 mb-1">
                12<span className="text-primary">+</span>
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-tighter">
                Năm kinh nghiệm uy tín
              </div>
            </motion.div>
          </motion.div>

          {/* Mission & Vision - Tilted Layout */}
          <div className="lg:col-span-5 lg:pl-12 space-y-16 pt-12 lg:pt-0">
            {/* Mission */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-primary" />
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                  Sứ mệnh của chúng tôi
                </h3>
              </div>
              <p className="text-xl text-slate-800 font-medium leading-relaxed mb-6">
                &quot;Tận tâm tạo ra những sản phẩm dệt kim sắc sảo, bền đẹp với
                giá thành xưởng tốt nhất.&quot;
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Chúng tôi đồng hành cùng khách hàng bằng kinh nghiệm dày dặn và
                sự thấu hiểu sâu sắc trong từng yêu cầu sản xuất nhỏ nhất.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-amber-500" />
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-amber-600">
                  Tầm nhìn dài hạn
                </h3>
              </div>
              <p className="text-xl text-slate-800 font-medium leading-relaxed mb-6">
                &quot;Xây dựng Liên Việt thành đơn vị sản xuất uy tín hàng đầu,
                là lựa chọn tin cậy của mọi đối tác.&quot;
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Chuẩn mực hóa chất lượng sản phẩm và cam kết tiến độ bàn giao
                chính xác tuyệt đối là tôn chỉ hoạt động của chúng tôi.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Core Values - Artisanal Cards */}
        <div className="mb-20">
          <div className="flex justify-between items-end mb-12">
            <h3 className="text-2xl font-bold text-slate-900">
              Những giá trị khác biệt
            </h3>
            <div className="hidden md:block w-32 h-px bg-slate-200 mb-2" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                className={`group relative p-8 rounded-sm bg-white border border-slate-100 transition-all duration-500 overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-2 ${
                  i % 2 !== 0 ? "lg:translate-y-8" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
              >
                {/* Artisanal Background: Stitched Border Effect */}
                <div className="absolute inset-2 border border-dashed border-slate-200 pointer-events-none rounded-sm" />

                {/* Decorative Corner "Threads" */}
                <div className="absolute top-1 left-1 w-3 h-3 border-t border-l border-primary/40 pointer-events-none" />
                <div className="absolute bottom-1 right-1 w-3 h-3 border-b border-r border-primary/40 pointer-events-none" />

                {/* Themed Watermark Text */}
                <div className="absolute -bottom-4 -right-4 text-6xl font-black text-slate-100 opacity-20 uppercase pointer-events-none select-none tracking-tighter group-hover:scale-110 group-hover:-translate-x-2 transition-transform duration-700">
                  {value.title === "Chất lượng"
                    ? "QUAL"
                    : value.title === "Tận tâm"
                    ? "CARE"
                    : value.title === "Đổi mới"
                    ? "TECH"
                    : "HEART"}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="shrink-0 w-12 h-12 rounded-sm bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                    <value.icon
                      className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors duration-500"
                      stroke={1.5}
                    />
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 mb-3 tracking-tight group-hover:text-primary transition-colors duration-500">
                    {value.title}
                  </h4>

                  <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {value.description}
                  </p>

                  <div className="mt-auto pt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <div className="h-px w-8 bg-primary/30" />
                    <span className="text-[10px] uppercase tracking-widest font-bold text-primary">
                      Cam kết bền vững
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section - Clean Artisanal Minimalist */}
        <motion.div
          className="relative py-16 border-y border-dashed border-slate-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="relative inline-block mb-4">
                  <stat.icon className="w-6 h-6 text-primary/30 group-hover:text-primary group-hover:scale-110 transition-all duration-500" />
                  <div className="absolute -inset-1 rounded-full border border-primary/0 group-hover:border-primary/20 group-hover:scale-125 transition-all duration-500" />
                </div>
                <div className="text-3xl md:text-5xl font-black text-slate-900 mb-2 tracking-tighter">
                  {stat.label}
                </div>
                <div className="text-[10px] uppercase font-black tracking-widest text-slate-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
