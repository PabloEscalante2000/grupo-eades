"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "¿Qué Hacemos?", href: "#que-hacemos" },
  { label: "Nuestras Marcas", href: "#nuestras-marcas" },
  { label: "Nuestro Equipo", href: "#nuestro-equipo" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xs font-extrabold tracking-tight"
            style={{
              backgroundColor: scrolled ? "#41588e" : "rgba(255,255,255,0.15)",
              border: "2px solid rgba(255,255,255,0.5)",
            }}
          >
            GE
          </div>
          <span
            className={`font-bold text-base transition-colors ${
              scrolled ? "text-[#41588e]" : "text-white"
            }`}
          >
            Grupo EADES
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-gray-600 hover:text-[#41588e]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contacto"
          className={`hidden md:inline-flex px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
            scrolled
              ? "bg-[#41588e] text-white hover:bg-[#2d3f6b]"
              : "bg-white/15 text-white border border-white/40 hover:bg-white/25"
          }`}
        >
          Contáctanos
        </a>

        {/* Hamburger */}
        <button
          className={`md:hidden ${scrolled ? "text-[#41588e]" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[#41588e] font-medium py-2 border-b border-gray-100 last:border-0 hover:text-[#2d3f6b]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-5 py-3 rounded-full bg-[#41588e] text-white text-sm font-semibold"
            >
              Contáctanos
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
