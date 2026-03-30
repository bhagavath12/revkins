"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">

      {/* Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,48,204,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,48,204,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Center Glow */}
      <div
        className="absolute z-0 rounded-full pointer-events-none"
        style={{
          width: "800px",
          height: "600px",
          background: "radial-gradient(ellipse, rgba(14,165,233,0.22) 0%, rgba(59,48,204,0.15) 40%, transparent 70%)",
          filter: "blur(50px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -55%)",
        }}
      />

      {/* Blob 1 — Indigo top left */}
      <div
        className="blob-1 absolute z-0 rounded-full pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(59,48,204,0.20) 0%, transparent 65%)",
          filter: "blur(70px)",
          top: "-150px",
          left: "-150px",
        }}
      />

      {/* Blob 2 — Sky Blue bottom right */}
      <div
        className="blob-2 absolute z-0 rounded-full pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(14,165,233,0.20) 0%, transparent 65%)",
          filter: "blur(70px)",
          bottom: "-150px",
          right: "-150px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 text-center pt-24 pb-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: "1.05",
          }}
          className="text-[2.4rem] sm:text-5xl md:text-6xl lg:text-7xl text-[#0F172A] mb-6"
        >
          Your business is losing revenue to{" "}
          <span className="blue-gradient-text animated-underline">
            manual work
          </span>{" "}
          you don&apos;t need to do.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
          className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed px-2"
        >
          Revkins builds AI-powered systems that eliminate repetitive tasks,
          connect your tools, and let your team focus on work that actually
          grows the business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-2"
        >
          <a
            href="#contact"
            suppressHydrationWarning
            style={{ fontFamily: "Inter, sans-serif" }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#3B30CC] text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-[#2f26a8] transition-all duration-200 shadow-lg shadow-indigo-200"
          >
            Get a Free Consultation
            <ArrowRight size={16} />
          </a>
          <a
            href="#services"
            suppressHydrationWarning
            style={{ fontFamily: "Inter, sans-serif" }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-700 font-semibold px-7 py-3.5 rounded-lg hover:border-[#3B30CC] hover:text-[#3B30CC] transition-all duration-200"
          >
            <Play size={14} className="fill-current" />
            See What We Build
          </a>
        </motion.div>

        {/* Founders Avatar Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 sm:mt-24 pt-8 border-t border-slate-200/60 flex flex-col items-center justify-center gap-6"
        >
          <p className="text-sm font-medium text-slate-400 uppercase tracking-widest">
            Meet the Founders
          </p>
          <div className="flex flex-row items-center justify-center gap-8 sm:gap-16">

            {/* Pranadir */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-slate-200 p-1 bg-white shadow-2xl shadow-slate-200/60 shrink-0 group hover:border-[#3B30CC] transition-colors duration-300">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
                  <p className="text-xs text-slate-400 text-center uppercase tracking-wider absolute z-0 leading-tight">Image<br />Pranadir</p>
                  <Image
                    src="/images/founders/pranadir.jpg"
                    alt="Pranadir"
                    fill
                    sizes="(max-width: 768px) 128px, 160px"
                    className="object-cover z-10 group-hover:scale-110 transition-transform duration-500 will-change-transform"
                  />
                </div>
              </div>
              <div className="text-center">
                <span className="block text-lg sm:text-xl font-semibold text-slate-900 tracking-tight mb-1">Pranadir</span>
                <span className="block text-sm text-slate-500 font-medium uppercase tracking-wider">Founder</span>
              </div>
            </div>

            {/* Abhay */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-slate-200 p-1 bg-white shadow-2xl shadow-slate-200/60 shrink-0 group hover:border-[#3B30CC] transition-colors duration-300">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100 flex items-center justify-center">
                  <p className="text-xs text-slate-400 text-center uppercase tracking-wider absolute z-0 leading-tight">Image<br />Abhay</p>
                  
                  {/* Wrapping div zooms in very slightly (10%) to allow horizontal panning without making him look too large */}
                  <div className="absolute w-[110%] h-[110%] -left-[8%] top-[1%] z-10 group-hover:scale-110 transition-transform duration-500 will-change-transform">
                    <Image
                      src="/images/founders/abhay.jpg"
                      alt="Abhay"
                      fill
                      sizes="(max-width: 768px) 160px, 200px"
                      className="object-cover object-top"
                    />
                  </div>

                </div>
              </div>
              <div className="text-center">
                <span className="block text-lg sm:text-xl font-semibold text-slate-900 tracking-tight mb-1">Abhay</span>
                <span className="block text-sm text-slate-500 font-medium uppercase tracking-wider">Founder</span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}