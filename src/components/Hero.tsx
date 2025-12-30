"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Award,
  CheckCircle,
  Clock,
  Users,
  MapPin,
  ArrowRight,
} from "lucide-react";

// Hero images for gallery
const heroImages = [
  {
    src: "/images/hero/yarn-colorful.jpg",
    alt: "Len sợi nhiều màu sắc",
    size: "large",
  },
  {
    src: "/images/hero/textile-fabric.jpg",
    alt: "Vải dệt kim cao cấp",
    size: "small",
  },
  {
    src: "/images/hero/thread-spools.jpg",
    alt: "Cuộn chỉ công nghiệp",
    size: "small",
  },
  {
    src: "/images/hero/knitting-machine.jpg",
    alt: "Máy dệt kim hiện đại",
    size: "medium",
  },
  {
    src: "/images/hero/wool-balls.jpg",
    alt: "Cuộn len mềm mại",
    size: "medium",
  },
  {
    src: "/images/hero/sweater-stack.jpg",
    alt: "Áo len thành phẩm",
    size: "small",
  },
  {
    src: "/images/hero/knitting-hands.jpg",
    alt: "Nghệ nhân đan len",
    size: "small",
  },
  {
    src: "/images/hero/knitting-pattern.jpg",
    alt: "Mẫu dệt kim tinh xảo",
    size: "medium",
  },
  { src: "/images/hero/hero-main.jpg", alt: "Sản phẩm dệt kim", size: "large" },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

// Gallery animation variants
const galleryContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

const galleryItemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const buttonHover = {
  scale: 1.05,
  boxShadow: "0 10px 30px rgba(44, 109, 176, 0.3)",
};

const buttonTap = {
  scale: 0.95,
};

export default function Hero() {
  return (
    <section
      className="w-full min-h-screen py-20 md:py-28 lg:py-32 relative overflow-hidden"
      id="hero"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-yellow-50"
        animate={{
          background: [
            "linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #fefce8 100%)",
            "linear-gradient(135deg, #fefce8 0%, #ffffff 50%, #eff6ff 100%)",
            "linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #fefce8 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white pointer-events-none" />

      {/* Decorative mesh pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232c6db0' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 z-10">
        {/* Text content - centered */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-sans text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Uy tín hàng đầu TP.HCM</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-6 leading-tight"
          >
            Chất lượng{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-linear-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
                tạo nên
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-3 bg-yellow-400/30 -skew-x-12 z-0"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
              />
            </span>{" "}
            <span className="text-yellow-500">thương hiệu</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto font-sans text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed"
          >
            Chuyên sản xuất, gia công các sản phẩm{" "}
            <span className="font-semibold text-primary">dệt kim cao cấp</span>,{" "}
            uy tín hàng đầu tại TP. Hồ Chí Minh.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10"
          >
            {[
              { value: "15+", label: "Năm kinh nghiệm", icon: Clock },
              { value: "500+", label: "Đối tác", icon: Users },
              { value: "99%", label: "Hài lòng", icon: CheckCircle },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-xl md:text-2xl font-bold font-sans text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm font-sans text-gray-500">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#products"
              className="group px-8 py-4 rounded-full bg-primary text-white font-sans font-semibold shadow-lg text-lg inline-flex items-center justify-center gap-2 relative overflow-hidden"
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              <span className="relative z-10">Xem sản phẩm</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 rounded-full bg-white text-primary font-sans font-semibold shadow-lg border-2 border-primary/20 text-lg inline-flex items-center justify-center gap-2 hover:border-primary/40 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={buttonTap}
            >
              <span>Liên hệ ngay</span>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Animated Image Gallery */}
        <motion.div
          className="relative"
          variants={galleryContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {heroImages.map((image, index) => (
              <motion.div
                key={index}
                variants={galleryItemVariants}
                className={`relative overflow-hidden rounded-xl shadow-lg group cursor-pointer
                  ${index === 0 ? "col-span-2 row-span-2" : ""}
                  ${index === 3 ? "md:col-span-2" : ""}
                  ${index === 8 ? "col-span-2 md:col-span-1" : ""}
                `}
                whileHover={{
                  scale: 1.02,
                  zIndex: 10,
                }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`relative w-full ${
                    index === 0
                      ? "h-64 md:h-80 lg:h-96"
                      : index === 3
                      ? "h-40 md:h-48"
                      : "h-32 md:h-40 lg:h-48"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />

                  {/* Hover overlay */}
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Image title on hover */}
                  <motion.div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-sans text-sm md:text-base font-medium drop-shadow-lg">
                      {image.alt}
                    </p>
                  </motion.div>

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                    initial={{ x: "-200%" }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating badges */}
          <motion.div
            className="absolute -top-4 -right-4 md:top-4 md:right-4 bg-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2 z-20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center">
              <Award className="w-4 h-4 text-yellow-600" />
            </div>
            <span className="text-sm font-semibold font-sans text-gray-700">
              Chất lượng cao
            </span>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -left-4 md:bottom-4 md:left-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2 z-20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-semibold font-sans">
              Made in Vietnam
            </span>
          </motion.div>
        </motion.div>
      </div>

      <Separator className="absolute bottom-0 left-0 right-0" />
    </section>
  );
}
