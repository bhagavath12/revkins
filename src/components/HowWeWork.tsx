"use client";

import { Search, PenTool, Cpu, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    icon: <Search size={24} />,
    title: "01. Diagnose",
    desc: "We study your existing manual workflows to identify bottlenecks and map how data moves through your business.",
  },
  {
    icon: <PenTool size={24} />,
    title: "02. Design",
    desc: "Before building, we design the system logic to ensure AI adds real leverage where it matters most — not just for the sake of it.",
  },
  {
    icon: <Cpu size={24} />,
    title: "03. Build & Deploy",
    desc: "We connect your tools, APIs, and AI models into a single end-to-end system that runs reliably 24/7 without human intervention.",
  },
  {
    icon: <Rocket size={24} />,
    title: "04. Scale",
    desc: "Every system is tested for edge cases and deployed with monitoring to ensure long-term production stability and growth.",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="how-it-works"
      className="w-full bg-white py-32 border-t border-slate-100"
    >
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal width="100%">
          <div className="max-w-3xl mb-20">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-[#3B30CC] mb-4">
              The Framework
            </h2>
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: "1.1",
              }}
              className="text-4xl md:text-5xl text-[#0F172A]"
            >
              From broken processes to{" "}
              <span className="blue-gradient-text">
                systems that run themselves.
              </span>
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={i} width="100%" delay={i * 0.1}>
              <div className="group relative p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:border-[#0EA5E9] transition-all duration-500 h-full">
                <div className="absolute top-6 right-8 text-6xl font-black text-slate-100 group-hover:text-blue-50 transition-colors pointer-events-none">
                  0{i + 1}
                </div>
                <div className="relative z-10">
                  <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100 text-[#3B30CC] group-hover:bg-[#3B30CC] group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  <h4
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                    }}
                    className="text-xl text-[#0F172A] mb-4 tracking-tight"
                  >
                    {step.title}
                  </h4>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal width="100%" delay={0.2}>
          <div className="mt-20 flex flex-col md:flex-row items-center justify-between p-8 rounded-3xl bg-[#0A1B3F] text-white overflow-hidden relative">
            <div className="relative z-10">
              <p
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                className="text-lg"
              >
                Ready to see the blueprint for your business?
              </p>
            </div>
            <a
              href="#contact"
              suppressHydrationWarning
              className="mt-6 md:mt-0 relative z-10 px-8 py-4 bg-[#3B30CC] hover:bg-[#2f26a8] text-white font-bold rounded-xl transition-all shadow-lg"
            >
              Get a Free Consultation
            </a>
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #fff 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}