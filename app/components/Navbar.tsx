"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const serviceLinks = [
  { label: "Atención psicoterapéutica", href: "/servicios/atencion-psicoterapeutica" },
  { label: "Formación y educación", href: "/servicios/formacion-y-educacion" },
  { label: "Programas institucionales", href: "/servicios/programas-institucionales" },
  { label: "Intervención social", href: "/servicios/intervencion-social" },
];

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nuestras Marcas", href: "#nuestras-marcas" },
  { label: "Nuestro Equipo", href: "#nuestro-equipo" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between py-5">
        {/* Logo */}
        <a href="#inicio" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={scrolled ? "/img/logo_fondo_claro.png" : "/img/logo_fondo_oscuro.png"}
            alt="Grupo EADES"
            className="h-14 w-auto"
          />
        </a>

        {/* Desktop nav + CTA */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {/* Inicio */}
            <a
              href="#inicio"
              className={`text-base font-medium transition-colors ${
                scrolled ? "text-gray-600 hover:text-[#377782]" : "text-white/80 hover:text-white"
              }`}
            >
              Inicio
            </a>

            {/* Servicios dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1 text-base font-medium transition-colors ${
                  scrolled ? "text-gray-600 hover:text-[#377782]" : "text-white/80 hover:text-white"
                }`}
              >
                Servicios
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown panel */}
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="py-2">
                    <a
                      href="/#que-hacemos"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-3 px-5 py-3 text-sm font-semibold text-[#377782] hover:bg-[#eef2f8] transition-colors border-b border-gray-100"
                    >
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                      Ver todos los servicios
                    </a>
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center gap-3 px-5 py-3 text-sm text-gray-700 hover:bg-[#eef2f8] hover:text-[#1c2c46] transition-colors"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: "#377782" }}
                        />
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Rest of links */}
            {links.slice(1).map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-base font-medium transition-colors ${
                  scrolled
                    ? "text-gray-600 hover:text-[#377782]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contacto"
            className={`inline-flex px-6 py-3 rounded-full text-base font-semibold transition-all ${
              scrolled
                ? "bg-[#377782] text-white hover:bg-[#1c2c46]"
                : "bg-white/15 text-white border border-white/40 hover:bg-white/25"
            }`}
          >
            Contáctanos
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`lg:hidden ${scrolled ? "text-[#377782]" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
            <a
              href="#inicio"
              onClick={() => setOpen(false)}
              className="text-[#377782] font-medium py-2.5 border-b border-gray-100 hover:text-[#1c2c46]"
            >
              Inicio
            </a>

            {/* Mobile services accordion */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between text-[#377782] font-medium py-2.5 hover:text-[#1c2c46]"
              >
                Servicios
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="pb-2 flex flex-col gap-0.5 pl-3">
                  <a
                    href="/#que-hacemos"
                    onClick={() => { setOpen(false); setMobileServicesOpen(false); }}
                    className="text-sm text-[#377782] font-semibold py-2 hover:text-[#1c2c46]"
                  >
                    Ver todos los servicios
                  </a>
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => { setOpen(false); setMobileServicesOpen(false); }}
                      className="text-sm text-gray-600 py-2 hover:text-[#1c2c46]"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {links.slice(1).map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[#377782] font-medium py-2.5 border-b border-gray-100 last:border-0 hover:text-[#1c2c46]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-5 py-3 rounded-full bg-[#377782] text-white text-sm font-semibold"
            >
              Contáctanos
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
