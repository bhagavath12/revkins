import React from 'react';

const Pricing = () => {
  return (
    <section className="py-24 bg-surface px-6 sm:px-8" id="pricing">
      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <div className="inline-block bg-white/50 border border-slate-200 text-primary text-xs font-medium tracking-widest uppercase px-5 py-2 rounded-full mb-6">
          AI Automation &amp; Workflow Systems
        </div>
        <h2 className="font-syne font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight mb-4">
          Choose your <em className="text-primary not-italic">automation</em><br />package
        </h2>
        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          From your first workflow to a fully orchestrated AI operation — pick the system that fits where you are today.
        </p>
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-sm px-4 py-2 rounded-full font-medium">
          <span className="text-[10px]">✦</span> All packages include a free 30-min strategy session
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start relative z-10">
        {/* BASIC */}
        <div className="bg-white rounded-[20px] border-[1.5px] border-slate-200 overflow-visible relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 opacity-0 animate-[fadeUp_0.5s_ease_forwards] shadow-lg shadow-slate-200/50 [animation-delay:100ms]">
          <div className="bg-primary pt-8 pb-5 px-6 rounded-t-[18px]">
            <div className="font-syne font-extrabold text-2xl text-white tracking-tight mb-1">Basic</div>
            <div className="text-white/70 text-sm leading-relaxed">Get your first automation system live — fast.</div>
          </div>
          <div className="mx-5 -translate-y-1 bg-slate-50 rounded-xl px-5 py-4 text-center border border-slate-200">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-medium">Starting from</div>
            <div className="font-syne font-extrabold text-3xl text-primary tracking-tight leading-none mb-1">Rs. 25,000</div>
            <div className="text-xs text-slate-500 font-medium">one-time setup</div>
          </div>
          <div className="p-6 pt-5">
            <div className="text-[10px] font-bold tracking-widest uppercase text-primary mb-3">What's included</div>
            <div className="h-px bg-slate-100 mb-4"></div>
            <ul className="space-y-3 mb-6">
              {[
                "1 core workflow automated",
                "Lead capture & instant follow-up",
                "WhatsApp / Email integration",
                "CRM connection (Zoho or HubSpot)",
                "Basic reporting setup",
                "2 weeks delivery",
                "30-day post-launch support",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 leading-snug font-medium">
                  <span className="shrink-0 w-[18px] h-[18px] rounded-full bg-primary flex items-center justify-center text-[10px] text-white mt-[1px]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-3">Not included</div>
            <ul className="space-y-2 mb-8">
              {["AI agents / chatbots", "Multi-workflow builds", "Custom dashboards"].map((item, i) => (
                <li key={i} className="text-sm text-slate-400 pl-4 relative before:content-['–'] before:absolute before:left-0 font-medium">
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="block w-full py-3.5 bg-primary text-white text-sm font-bold tracking-wide text-center rounded-xl transition-all duration-200 hover:opacity-90 active:scale-95">
              Get Started
            </a>
          </div>
        </div>

        {/* PREMIUM */}
        <div className="bg-white rounded-[20px] border-2 border-blue-950 overflow-visible relative transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-950/10 opacity-0 animate-[fadeUpPop_0.5s_ease_forwards] shadow-xl shadow-blue-950/10 z-10 md:-mt-4 [animation-delay:200ms]">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white font-syne text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full whitespace-nowrap shadow-md">
            Most Popular
          </div>
          <div className="bg-blue-950 pt-8 pb-5 px-6 rounded-t-[18px]">
            <div className="font-syne font-extrabold text-2xl text-white tracking-tight mb-1">Premium</div>
            <div className="text-white/70 text-sm leading-relaxed">Full automation stack for growing businesses.</div>
          </div>
          <div className="mx-5 -translate-y-1 bg-slate-50 rounded-xl px-5 py-4 text-center border border-slate-200">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-medium">Starting from</div>
            <div className="font-syne font-extrabold text-3xl text-blue-950 tracking-tight leading-none mb-1">Rs. 60,000</div>
            <div className="text-xs text-slate-500 font-medium">one-time setup</div>
          </div>
          <div className="p-6 pt-5">
            <div className="text-[10px] font-bold tracking-widest uppercase text-blue-950 mb-3">What's included</div>
            <div className="h-px bg-slate-100 mb-4"></div>
            <ul className="space-y-3 mb-6">
              {[
                "Up to 3 workflows automated",
                "Lead capture + onboarding system",
                "AI chatbot trained on your business",
                "Full CRM & tool integration",
                "Outreach & follow-up sequences",
                "Custom reporting dashboard",
                "4 weeks delivery",
                "60-day post-launch support",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 leading-snug font-medium">
                  <span className="shrink-0 w-[18px] h-[18px] rounded-full bg-blue-950 flex items-center justify-center text-[10px] text-white mt-[1px]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-3">Not included</div>
            <ul className="space-y-2 mb-8">
              {["Voice AI agents", "Enterprise multi-team setups"].map((item, i) => (
                <li key={i} className="text-sm text-slate-400 pl-4 relative before:content-['–'] before:absolute before:left-0 font-medium">
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="block w-full py-3.5 bg-blue-950 text-white text-sm font-bold tracking-wide text-center rounded-xl transition-all duration-200 hover:opacity-90 active:scale-95">
              Most Popular — Start Here
            </a>
          </div>
        </div>

        {/* ADVANCED */}
        <div className="bg-white rounded-[20px] border-[1.5px] border-slate-200 overflow-visible relative transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/5 opacity-0 animate-[fadeUp_0.5s_ease_forwards] shadow-lg shadow-slate-200/50 [animation-delay:300ms]">
          <div className="bg-accent pt-8 pb-5 px-6 rounded-t-[18px]">
            <div className="font-syne font-extrabold text-2xl text-white tracking-tight mb-1">Advanced</div>
            <div className="text-white/70 text-sm leading-relaxed">Enterprise-grade AI systems built end to end.</div>
          </div>
          <div className="mx-5 -translate-y-1 bg-slate-50 rounded-xl px-5 py-4 text-center border border-slate-200">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-medium">Starting from</div>
            <div className="font-syne font-extrabold text-3xl text-accent tracking-tight leading-none mb-1">Rs. 1,20,000</div>
            <div className="text-xs text-slate-500 font-medium">one-time setup</div>
          </div>
          <div className="p-6 pt-5 flex flex-col h-full">
            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-accent mb-3">What's included</div>
              <div className="h-px bg-slate-100 mb-4"></div>
              <ul className="space-y-3 mb-8 md:mb-12">
                {[
                  "Unlimited workflows & automation",
                  "Voice AI agents (Vapi)",
                  "Full outreach & personalisation engine",
                  "Multi-tool orchestration (n8n)",
                  "Custom AI agents on your data",
                  "Advanced dashboards & alerts",
                  "Dedicated project manager",
                  "6 weeks delivery",
                  "90-day post-launch support + SLA",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 leading-snug font-medium">
                    <span className="shrink-0 w-[18px] h-[18px] rounded-full bg-accent flex items-center justify-center text-[10px] text-white mt-[1px]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto">
              <a href="#contact" className="block w-full py-3.5 bg-accent text-white text-sm font-bold tracking-wide text-center rounded-xl transition-all duration-200 hover:opacity-90 active:scale-95">
                Talk to Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-16 relative z-10">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 shadow-sm shadow-slate-100 mx-1">
          <span className="font-syne font-bold text-sm text-slate-900 whitespace-nowrap">All packages include:</span>
          <div className="flex flex-wrap gap-x-6 gap-y-3 flex-1">
            {["Free strategy session", "Full handover & documentation", "Post-launch support", "Tool licences guidance"].map((item, i) => (
              <span key={i} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium whitespace-nowrap">
                <span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center text-[8px] shrink-0 font-bold text-white shadow-sm">✓</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
