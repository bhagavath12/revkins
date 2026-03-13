"use client";

import { TrendingUp, Repeat, Database, Plug, AlertCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const problems = [
  {
    icon: <TrendingUp size={22} />,
    title: "Lead Decay & Friction",
    desc: "Leads go cold within minutes. If your response isn't instant, you're losing 70% of your conversion potential.",
    cost: "Lost Revenue",
  },
  {
    icon: <Repeat size={22} />,
    title: "The 'Manual Work' Tax",
    desc: "High-value team members spending 10+ hours a week on data entry and repetitive admin tasks.",
    cost: "Burned Talent",
  },
  {
    icon: <Database size={22} />,
    title: "Disconnected Data Silos",
    desc: "Valuable customer data is trapped in Slack, Email, and CRMs. Nothing talks to each other in real-time.",
    cost: "Zero Visibility",
  },
  {
    icon: <Plug size={22} />,
    title: "Fragmented AI Stack",
    desc: "Having ChatGPT isn't a strategy. Without a central orchestration system, your tools are just toys.",
    cost: "Inefficient Ops",
  },
];

export default function Problem() {
  return (
    <section
      id="problem"
      className="w-full py-32 border-t border-slate-100 relative overflow-hidden bg-[#F8FAFC]"
    >
      <div className="mx-auto max-w-7xl px-6 relative" style={{ zIndex: 10 }}>
        <ScrollReveal width="100%">
          <div className="max-w-3xl">
            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: "1.1",
              }}
              className="text-4xl md:text-5xl text-[#0F172A]"
            >
              Bad systems are costing you{" "}
              <span className="blue-gradient-text">more than you think.</span>
            </h2>
            <p className="mt-6 text-xl text-slate-500 leading-relaxed">
              Adding more tools won't fix a broken workflow. You need a unified
              engine that runs 24/7 without human intervention.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((p, i) => (
            <ScrollReveal key={i} width="100%" delay={i * 0.1}>
              <div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#0EA5E9] transition-all duration-500 shadow-sm hover:shadow-[0_20px_50px_rgba(59,48,204,0.12)] hover:-translate-y-2 h-full">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 shadow-sm text-[#3B30CC] group-hover:bg-[#3B30CC] group-hover:text-white transition-all duration-300 border border-slate-100">
                  {p.icon}
                </div>
                <h3
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                  className="text-xl text-[#0F172A]"
                >
                  {p.title}
                </h3>
                <p className="mt-3 text-slate-500 leading-relaxed">{p.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0EA5E9]">
                  <AlertCircle size={14} />
                  The Hidden Cost: {p.cost}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal width="100%" delay={0.2}>
          <div className="mt-20 p-10 bg-[#0F172A] rounded-3xl text-center text-white relative overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <p className="text-[#0EA5E9] font-mono text-sm tracking-[0.2em] uppercase mb-4 font-bold">
              The Solution
            </p>
            <h3
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 800 }}
              className="text-3xl mb-6"
            >
              Stop managing tasks. Start building systems.
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Revkins designs and deploys the glue between your tools, turning
              manual chaos into a reliable growth engine.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}