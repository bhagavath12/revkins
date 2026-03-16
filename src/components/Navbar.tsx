"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#how-it-works" },
  { label: "Who It's For", href: "#who-its-for" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src="/logo.png" alt="Revkins" className="h-10 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              suppressHydrationWarning
              className="text-sm font-medium text-slate-600 hover:text-[#3B30CC] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            suppressHydrationWarning
            className="bg-[#3B30CC] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#2f26a8] transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>

        <button
          className="md:hidden text-slate-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              suppressHydrationWarning
              className="text-sm font-medium text-slate-600 hover:text-[#3B30CC] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            suppressHydrationWarning
            className="bg-[#3B30CC] text-white text-sm font-medium px-5 py-2.5 rounded-lg text-center hover:bg-[#2f26a8] transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      )}
    </nav>
  );
}