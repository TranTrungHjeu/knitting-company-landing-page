"use client";

import React from "react";

const partners = [
  { src: "/partner1.png", alt: "Đối tác 1" },
  { src: "/partner2.png", alt: "Đối tác 2" },
  { src: "/partner3.png", alt: "Đối tác 3" },
  { src: "/partner4.png", alt: "Đối tác 4" },
];

export default function PartnerLogos() {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-6 py-4 bg-white/80">
      {partners.map((p) => (
        <img
          key={p.alt}
          src={p.src}
          alt={p.alt}
          className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
        />
      ))}
    </div>
  );
}
