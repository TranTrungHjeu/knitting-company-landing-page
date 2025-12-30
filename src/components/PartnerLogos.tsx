"use client";

import { LogoLoop } from "./LogoLoop";

const partners = [
  { src: "/images/logos/logo1.svg", alt: "Đối tác 1" },
  { src: "/images/logos/logo2.svg", alt: "Đối tác 2" },
  { src: "/images/logos/logo3.svg", alt: "Đối tác 3" },
  { src: "/images/logos/logo4.svg", alt: "Đối tác 4" },
  { src: "/images/logos/logo5.svg", alt: "Đối tác 5" },
  { src: "/images/logos/logo6.svg", alt: "Đối tác 6" },
];

export default function PartnerLogos() {
  return (
    <section className="w-full py-8 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm text-slate-500 mb-6 font-medium">
          Đối tác tin cậy
        </p>
        <LogoLoop
          logos={partners}
          speed={80}
          direction="left"
          logoHeight={48}
          gap={64}
          pauseOnHover={true}
          fadeOut={true}
          fadeOutColor="#f8fafc"
          scaleOnHover={true}
          ariaLabel="Đối tác của chúng tôi"
        />
      </div>
    </section>
  );
}
