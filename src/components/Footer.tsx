"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F172A] border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        
        <div className="flex flex-col gap-1">
          <span
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
            className="text-white text-lg tracking-tight"
          >
            REV<span className="text-[#3B30CC]">K</span>INS
          </span>

          <p className="text-slate-500 text-sm">
            &copy; 2026 Revkins. All rights reserved. Built with passion for growth.
          </p>

          <p className="text-slate-500 text-xs">
            A product by{" "}
            <a
              href="/elevatia"
              className="underline hover:text-white transition-colors duration-200"
            >
              ELEVATIA MANUFACTURING (OPC) PRIVATE LIMITED
            </a>
          </p>
        </div>

        <div className="flex items-center gap-8">
          <a
            href="/privacy-policy"
            className="text-slate-400 text-sm hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </a>

          <a
            href="/terms-of-service"
            className="text-slate-400 text-sm hover:text-white transition-colors duration-200"
          >
            Terms of Service
          </a>

          <a
            href="/cookie-policy"
            className="text-slate-400 text-sm hover:text-white transition-colors duration-200"
          >
            Cookie Policy
          </a>
        </div>

      </div>
    </footer>
  );
}