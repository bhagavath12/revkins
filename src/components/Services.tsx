"use client";

import { Inbox, Users, Bot, Mail, Link, BarChart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    icon: <Inbox size={22} />,
    title: "Lead Capture & Follow-Up",
    desc: "Instant multi-channel responses, intelligent qualification, automated follow-up sequences, and appointment booking — so no lead ever goes cold.",
  },
  {
    icon: <Users size={22} />,
    title: "Client Onboarding Workflows",
    desc: "Structured onboarding that collects info, creates tasks, sets up accounts, and briefs your team automatically — consistent every time.",
  },
  {
    icon: <Bot size={22} />,
    title: "AI Agents & Chatbots",
    desc: "Intelligent assistants trained on your business that answer questions, qualify prospects, and handle repetitive conversations at scale.",
  },
  {
    icon: <Mail size={22} />,
    title: "Outreach & Personalization",
    desc: "AI-driven outbound that researches prospects, crafts personalised messages, and runs follow-up sequences — at scale, without losing the human touch.",
  },
  {
    icon: <Link size={22} />,
    title: "CRM & Tool Integration",
    desc: "Seamless connections between your CRM, comms platforms, and project tools — so data flows automatically and nothing lives in silos.",
  },
  {
    icon: <BarChart size={22} />,
    title: "Reporting & Dashboards",
    desc: "Automated pipeline reports, performance dashboards, and internal alerts that give you clear business visibility — without manually pulling data.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full py-32 border-t border-slate-100 bg-[#F8FAFC]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal width="100%">
          <div className="max-w-3xl mb-16">
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: "1.1",
              }}
              className="text-4xl md:text-5xl text-[#0F172A]"
            >
              End-to-end automation across{" "}
              <span className="blue-gradient-text">your entire operation.</span>
            </h3>
            <p className="mt-6 text-xl text-slate-500 leading-relaxed">
              From the first lead to the final report — we automate the work
              that slows you down.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ScrollReveal key={i} width="100%" delay={i * 0.08}>
              <div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#0EA5E9] transition-all duration-500 shadow-sm hover:shadow-[0_20px_50px_rgba(59,48,204,0.12)] hover:-translate-y-2 h-full">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-[#3B30CC] group-hover:bg-[#3B30CC] group-hover:text-white transition-all duration-300 border border-slate-100">
                  {s.icon}
                </div>
                <h4
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                  className="text-xl text-[#0F172A] mb-3"
                >
                  {s.title}
                </h4>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {s.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}