"use client";

import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [prefs, setPrefs] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("revkins_cookie_consent");
    if (!consent) {
      setTimeout(() => setVisible(true), 1500);
    } else {
      const saved = JSON.parse(consent);
      applyConsent(saved.analytics, saved.marketing);
    }
  }, []);

  const applyConsent = (analytics: boolean, marketing: boolean) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: analytics ? "granted" : "denied",
        ad_storage: marketing ? "granted" : "denied",
      });
      if (analytics) {
        window.gtag("config", "G-0TBS4SVFGC", {
          send_page_view: true,
        });
      }
    }
  };

  const saveConsent = (type: "all" | "essential" | "custom") => {
    const consent = {
      necessary: true,
      analytics: type === "all" ? true : type === "custom" ? prefs.analytics : false,
      marketing: type === "all" ? true : type === "custom" ? prefs.marketing : false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("revkins_cookie_consent", JSON.stringify(consent));
    applyConsent(consent.analytics, consent.marketing);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-[#0F172A] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">

        {!showCustomize ? (
          // Main Banner
          <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex items-start gap-4 flex-1">
              <div className="w-10 h-10 rounded-xl bg-[#3B30CC]/20 flex items-center justify-center shrink-0 mt-0.5">
                <Cookie size={18} className="text-[#0EA5E9]" />
              </div>
              <div>
                <p
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                  className="text-white text-sm mb-1"
                >
                  We use cookies
                </p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  We use cookies to improve your experience, analyze traffic, and support our
                  marketing. Read our{" "}
                  <a href="/cookie-policy" className="text-[#0EA5E9] hover:underline">
                    Cookie Policy
                  </a>{" "}
                  to learn more.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
              <button
                onClick={() => saveConsent("essential")}
                className="flex-1 md:flex-none px-4 py-2.5 rounded-lg border border-slate-600 text-slate-300 text-xs font-semibold hover:border-slate-400 hover:text-white transition-all whitespace-nowrap"
              >
                Essential Only
              </button>
              <button
                onClick={() => setShowCustomize(true)}
                className="flex-1 md:flex-none px-4 py-2.5 rounded-lg border border-slate-600 text-slate-300 text-xs font-semibold hover:border-slate-400 hover:text-white transition-all"
              >
                Customize
              </button>
              <button
                onClick={() => saveConsent("all")}
                className="flex-1 md:flex-none px-4 py-2.5 rounded-lg bg-[#3B30CC] hover:bg-[#2f26a8] text-white text-xs font-semibold transition-all whitespace-nowrap"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          // Customize Panel
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <p
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
                className="text-white text-sm"
              >
                Customize Cookie Preferences
              </p>
              <button
                onClick={() => setShowCustomize(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Necessary — always on */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                <div>
                  <p className="text-white text-xs font-semibold mb-1">Strictly Necessary</p>
                  <p className="text-slate-400 text-xs">Required for the website to function. Cannot be disabled.</p>
                </div>
                <div className="w-10 h-5 rounded-full bg-[#3B30CC] flex items-center justify-end px-0.5 shrink-0 ml-4">
                  <div className="w-4 h-4 rounded-full bg-white" />
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                <div>
                  <p className="text-white text-xs font-semibold mb-1">Analytics Cookies</p>
                  <p className="text-slate-400 text-xs">Help us understand how visitors use our website (Google Analytics).</p>
                </div>
                <button
                  onClick={() => setPrefs({ ...prefs, analytics: !prefs.analytics })}
                  className={`w-10 h-5 rounded-full flex items-center px-0.5 transition-all shrink-0 ml-4 ${
                    prefs.analytics ? "bg-[#3B30CC] justify-end" : "bg-slate-600 justify-start"
                  }`}
                >
                  <div className="w-4 h-4 rounded-full bg-white" />
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                <div>
                  <p className="text-white text-xs font-semibold mb-1">Marketing Cookies</p>
                  <p className="text-slate-400 text-xs">Used for targeted advertising and tracking campaign performance.</p>
                </div>
                <button
                  onClick={() => setPrefs({ ...prefs, marketing: !prefs.marketing })}
                  className={`w-10 h-5 rounded-full flex items-center px-0.5 transition-all shrink-0 ml-4 ${
                    prefs.marketing ? "bg-[#3B30CC] justify-end" : "bg-slate-600 justify-start"
                  }`}
                >
                  <div className="w-4 h-4 rounded-full bg-white" />
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => saveConsent("essential")}
                className="flex-1 px-4 py-2.5 rounded-lg border border-slate-600 text-slate-300 text-xs font-semibold hover:border-slate-400 hover:text-white transition-all"
              >
                Essential Only
              </button>
              <button
                onClick={() => saveConsent("custom")}
                className="flex-1 px-4 py-2.5 rounded-lg bg-[#3B30CC] hover:bg-[#2f26a8] text-white text-xs font-semibold transition-all"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}