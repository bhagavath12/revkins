"use client";

import { useState } from "react";
import { Check, ArrowRight, AlertCircle, RefreshCw, Mail, Loader } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const WEBHOOK_URL = "https://n8n.srv1432486.hstgr.cloud/webhook/d6c98f92-283b-4e12-ae2a-c3513f1f54aa";
const FALLBACK_EMAIL = "sales@revkins.com";

const promises = [
  "Free 30-minute strategy consultation",
  "We'll identify your highest-leverage automation",
  "You'll walk away with a clear action plan",
  "No pressure, no generic proposals",
];

const businessTypes = [
  "Service-Based Business",
  "Agency or Consultancy",
  "Digital / SaaS Team",
  "E-commerce",
  "Other",
];

const countryCodes = [
  { code: "+1", country: "US/CA", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+60", country: "Malaysia", flag: "🇲🇾" },
  { code: "+27", country: "South Africa", flag: "🇿🇦" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+39", country: "Italy", flag: "🇮🇹" },
  { code: "+34", country: "Spain", flag: "🇪🇸" },
  { code: "+31", country: "Netherlands", flag: "🇳🇱" },
  { code: "+55", country: "Brazil", flag: "🇧🇷" },
  { code: "+52", country: "Mexico", flag: "🇲🇽" },
  { code: "+92", country: "Pakistan", flag: "🇵🇰" },
  { code: "+880", country: "Bangladesh", flag: "🇧🇩" },
  { code: "+94", country: "Sri Lanka", flag: "🇱🇰" },
  { code: "+64", country: "New Zealand", flag: "🇳🇿" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+974", country: "Qatar", flag: "🇶🇦" },
  { code: "+973", country: "Bahrain", flag: "🇧🇭" },
  { code: "+968", country: "Oman", flag: "🇴🇲" },
  { code: "+962", country: "Jordan", flag: "🇯🇴" },
  { code: "+20", country: "Egypt", flag: "🇪🇬" },
  { code: "+234", country: "Nigeria", flag: "🇳🇬" },
  { code: "+254", country: "Kenya", flag: "🇰🇪" },
];

type Status = "idle" | "loading" | "success" | "error_first" | "error_final";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [retryCount, setRetryCount] = useState(0);
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    countryCode: "+91",
    phone: "",
    type: "",
    bottleneck: "",
  });

  const submitToWebhook = async () => {
    setStatus("loading");

    const payload = {
      name: form.name,
      business: form.business,
      email: form.email,
      phone: `${form.countryCode} ${form.phone}`,
      countryCode: form.countryCode,
      businessType: form.type,
      bottleneck: form.bottleneck,
      submittedAt: new Date().toISOString(),
    };

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        throw new Error("Webhook responded with error");
      }
    } catch {
      if (retryCount === 0) {
        setStatus("error_first");
      } else {
        setStatus("error_final");
      }
    }
  };

  const handleSubmit = () => {
    setRetryCount(0);
    submitToWebhook();
  };

  const handleRetry = () => {
    setRetryCount(1);
    submitToWebhook();
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-200 text-[#0F172A] text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#3B30CC] focus:ring-1 focus:ring-[#3B30CC] transition-all";

  return (
    <section
      id="contact"
      className="w-full py-32 border-t border-slate-100 bg-[#F8FAFC]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal width="100%">
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Left */}
              <div className="bg-[#0A1B3F] p-12 flex flex-col justify-center relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="relative z-10">
                  <h3
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 900,
                      letterSpacing: "-0.03em",
                      lineHeight: "1.05",
                    }}
                    className="text-4xl md:text-5xl text-white mb-6"
                  >
                    Tell us about your business. We'll show you where to start.
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-10">
                    No commitment, no pitch deck. Just a focused conversation
                    about your current workflow, where it breaks down, and
                    what's possible.
                  </p>
                  <ul className="space-y-4">
                    {promises.map((p, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check size={16} className="text-[#0EA5E9] shrink-0" />
                        <span className="text-slate-300 text-sm">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right */}
              <div className="p-12">

                {/* SUCCESS STATE */}
                {status === "success" && (
                  <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-[#3B30CC]/10 flex items-center justify-center">
                      <Check size={28} className="text-[#3B30CC]" />
                    </div>
                    <h4
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 800 }}
                      className="text-2xl text-[#0F172A]"
                    >
                      Successfully Submitted!
                    </h4>
                    <p className="text-slate-500 max-w-sm">
                      Thanks for reaching out. We'll be in touch within 24
                      hours to schedule your free consultation.
                    </p>
                  </div>
                )}

                {/* FIRST ERROR STATE */}
                {status === "error_first" && (
                  <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
                      <AlertCircle size={28} className="text-red-500" />
                    </div>
                    <h4
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 800 }}
                      className="text-2xl text-[#0F172A]"
                    >
                      Something went wrong
                    </h4>
                    <p className="text-slate-500 max-w-sm">
                      We couldn't submit your form. Please try again — your
                      information has been saved.
                    </p>
                    <button
                      onClick={handleRetry}
                      className="inline-flex items-center gap-2 bg-[#3B30CC] hover:bg-[#2f26a8] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 mt-2"
                    >
                      <RefreshCw size={15} />
                      Try Again
                    </button>
                  </div>
                )}

                {/* FINAL ERROR STATE */}
                {status === "error_final" && (
                  <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center">
                      <Mail size={28} className="text-orange-500" />
                    </div>
                    <h4
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 800 }}
                      className="text-2xl text-[#0F172A]"
                    >
                      We're having issues
                    </h4>
                    <p className="text-slate-500 max-w-sm">
                      Our form is temporarily unavailable. Please reach out to
                      us directly and we'll get back to you within 24 hours.
                    </p>
                    <a
                      href={`mailto:${FALLBACK_EMAIL}`}
                      className="inline-flex items-center gap-2 bg-[#0A1B3F] hover:bg-[#07132e] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 mt-2"
                    >
                      <Mail size={15} />
                      {FALLBACK_EMAIL}
                    </a>
                  </div>
                )}

                {/* FORM STATE */}
                {(status === "idle" || status === "loading") && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-[#0F172A] mb-2">Your Name</label>
                        <input
                          type="text"
                          placeholder="John Smith"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#0F172A] mb-2">Business Name</label>
                        <input
                          type="text"
                          placeholder="Acme Ltd"
                          value={form.business}
                          onChange={(e) => setForm({ ...form, business: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@yourbusiness.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">Phone Number</label>
                      <div className="flex gap-2">
                        <select
                          value={form.countryCode}
                          onChange={(e) => setForm({ ...form, countryCode: e.target.value })}
                          className="w-36 px-3 py-3 rounded-xl border border-slate-200 text-[#0F172A] text-sm focus:outline-none focus:border-[#3B30CC] focus:ring-1 focus:ring-[#3B30CC] transition-all bg-white shrink-0"
                        >
                          {countryCodes.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.flag} {c.code} {c.country}
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          placeholder="9876543210"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className={`flex-1 ${inputClass}`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">Business Type</label>
                      <select
                        value={form.type}
                        onChange={(e) => setForm({ ...form, type: e.target.value })}
                        className={inputClass + " bg-white"}
                      >
                        <option value="">Select your business type</option>
                        {businessTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0F172A] mb-2">
                        Where's your biggest bottleneck?
                      </label>
                      <textarea
                        rows={3}
                        placeholder="E.g. We lose leads because nobody follows up fast enough, our onboarding is manual and slow..."
                        value={form.bottleneck}
                        onChange={(e) => setForm({ ...form, bottleneck: e.target.value })}
                        className={inputClass + " resize-none"}
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={status === "loading"}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#3B30CC] hover:bg-[#2f26a8] disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-200"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader size={16} className="animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </div>
                )}

              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}