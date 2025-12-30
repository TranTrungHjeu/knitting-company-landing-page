"use client";

import { motion } from "framer-motion";

export default function FloatingZaloButton() {
  return (
    <motion.a
      href="https://zalo.me/0909045668"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat với chúng tôi qua Zalo"
      className="fixed z-50 right-6 bottom-6 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.5 }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20" />

      {/* Button Body - Circular by default, expands on hover */}
      <div className="relative flex items-center bg-[#0068ff] text-white rounded-full shadow-2xl transition-all duration-500 overflow-hidden h-14 border border-blue-400/20 group-hover:px-4">
        {/* Stitched Internal Border */}
        <div className="absolute inset-1.5 border border-dashed border-white/30 pointer-events-none rounded-full" />

        <div className="relative z-10 flex items-center">
          <div className="w-14 h-14 flex items-center justify-center shrink-0">
            <svg
              viewBox="0 0 64 64"
              className="w-7 h-7 filter drop-shadow-sm"
              fill="currentColor"
            >
              <path d="M32 4C16.536 4 4 15.626 4 30c0 7.456 3.306 14.173 8.62 19.128-.215 3.872-1.174 7.487-2.862 10.787-.402.786.25 1.685 1.125 1.554 5.47-.82 10.222-2.678 14.117-5.137A30.7 30.7 0 0 0 32 56c15.464 0 28-11.626 28-26S47.464 4 32 4z" />
            </svg>
          </div>

          <div className="max-w-0 group-hover:max-w-32 overflow-hidden whitespace-nowrap transition-all duration-500 flex flex-col justify-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-white/70 leading-none mb-0.5">
              Liên hệ
            </span>
            <span className="text-xs font-bold tracking-wider leading-none">
              ZALO CHAT
            </span>
          </div>
        </div>

        {/* Shine effect */}
        <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] group-hover:left-[150%] transition-all duration-1000 ease-in-out" />
      </div>
    </motion.a>
  );
}
