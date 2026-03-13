"use client";

import { Building2, Megaphone, Zap, Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const audiences = [
  {
    icon: <Building2 size={24} />,
    title: "Service-Based Businesses",
    points: [
      "You handle 10+ leads a week",
      "Your team manually books or confirms appointments",
      "Client onboarding takes too long or varies each time",
      "You rely on WhatsApp, email or DMs to manage work",
    ],
  },
  {
    icon: <Megaphone size={24} />,
    title: "Agencies & Consultants",
    points: [
      "You're spending hours on admin that shouldn't need you",
      "Client communication and delivery isn't consistent",
      "Reporting is manual and time-consuming",
      "You want to scale without hiring more people",
    ],
  },
  {
    icon: <Zap size={24} />,
    title: "Growing Digital Teams",
    points: [
      "Your tools don't talk to each other",
      "Work falls through the cracks between people",
      "You want better visibility without more meetings",
      "You're ready to invest in systems that scale",
    ],
  },
];

export default function WhoItsFor() {
  return (
    <section
      id="who-its-for"
      className="w-full py-32 border-t border-slate-100 bg-white"
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
              Built for businesses that compete on{" "}
              <span className="blue-gradient-text">execution.</span>
            </h3>
            <p className="mt-6 text-xl text-slate-500 leading-relaxed">
              We work best with businesses where speed, consistency, and
              follow-through are the difference between winning and losing a
              client.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((a, i) => (
            <ScrollReveal key={i} width="100%" delay={i * 0.1}>
              <div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#0EA5E9] transition-all duration-500 shadow-sm hover:shadow-[0_20px_50px_rgba(59,48,204,0.12)] hover:-translate-y-2 h-full">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-[#3B30CC] group-hover:bg-[#3B30CC] group-hover:text-white transition-all duration-300 border border-slate-100">
                  {a.icon}
                </div>
                <h4
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                  className="text-xl text-[#0F172A] mb-6"
                >
                  {a.title}
                </h4>
                <ul className="space-y-3">
                  {a.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check
                        size={16}
                        className="text-[#3B30CC] mt-0.5 shrink-0"
                      />
                      <span className="text-slate-500 text-sm leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}