"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#servicios", label: "Servicios" },
    { href: "#paquetes", label: "Paquetes" },
    { href: "#testimonios", label: "Opiniones" },
    { href: "#contacto", label: "Contacto" },
    { href: "/blog", label: "Blog" },
    { href: "/parceiros", label: "Socios" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-md border-b border-white/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <span className="text-white text-lg">🗝️</span>
            </div>
            <span className="font-bold text-lg text-navy-900 tracking-tight">
              Clave<span className="text-amber-400">Hogar</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-600 hover:text-amber-500 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/34693976311"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 hover:bg-amber-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all shadow-md hover:shadow-lg hover:scale-105"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl rounded-2xl mb-4 p-4 shadow-xl border border-white/60">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-2 text-sm font-medium text-slate-700 hover:text-amber-500 border-b border-slate-100 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/34693976311"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center bg-amber-400 hover:bg-amber-500 text-white font-semibold py-3 rounded-xl transition-all"
            >
              💬 Contactar por WhatsApp
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
