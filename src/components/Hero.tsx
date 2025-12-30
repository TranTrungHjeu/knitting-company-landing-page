import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Hero() {
  return (
    <section
      className="w-full py-16 md:py-24 bg-[url('/knit-bg.jpg')] bg-cover bg-center bg-no-repeat relative"
      id="hero"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/95 dark:from-primary/80 dark:to-black/90 pointer-events-none" />
      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 drop-shadow-lg">
            Chất lượng tạo nên thương hiệu
          </h1>
          <p className="max-w-xl text-lg md:text-2xl text-primary/80 dark:text-zinc-200 mb-6">
            Chuyên sản xuất, gia công các sản phẩm dệt kim cao cấp, uy tín hàng đầu tại TP. Hồ Chí Minh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
            <a
              href="#products"
              className="px-7 py-3 rounded-full bg-primary text-white font-semibold shadow-md hover:bg-yellow-400 hover:text-primary transition-all duration-200 text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            >
              Xem sản phẩm
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full bg-yellow-400 text-primary font-semibold shadow-md hover:bg-primary hover:text-white transition-all duration-200 text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Liên hệ ngay
            </a>
          </div>

        </div>
        <div className="flex-1 flex justify-center md:justify-end items-center z-10">
          <img
            src="/hero-knit-product.png"
            alt="Sản phẩm dệt kim cao cấp"
            className="w-72 h-72 md:w-96 md:h-96 object-contain rounded-xl shadow-xl border border-primary/10 bg-white/60"
            loading="eager"
          />
        </div>
      </div>
      <Separator className="mt-16" />
    </section>
  );
}
