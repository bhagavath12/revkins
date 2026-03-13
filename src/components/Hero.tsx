"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

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
      </div>
    </section>
  );
}