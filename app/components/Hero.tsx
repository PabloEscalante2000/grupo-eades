"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const heroImages = [
  "/img/hb_grupo_eades.jpg",
  "/img/fondo_hero_2.png",
  "/img/fondo_hero_3.png",
  "/img/fondo_hero_4.png",
  "/img/fondo_hero_5.png",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background slideshow */}
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {heroImages.map((img) => (
          <div
            key={img}
            className="w-full h-full flex-shrink-0"
            style={{
              backgroundImage: `url('${img}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>

      {/* Color overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(140deg, rgba(28,44,70,0.82) 0%, rgba(28,53,64,0.80) 35%, rgba(55,119,130,0.72) 70%, rgba(45,102,114,0.78) 100%)",
        }}
      />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(55,119,130,0.22) 0%, transparent 65%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(27,103,72,0.18) 0%, transparent 65%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      {/* Diagonal accent line */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden
      >
        <svg
          className="absolute right-0 top-0 h-full opacity-10"
          viewBox="0 0 400 900"
          preserveAspectRatio="none"
        >
          <line
            x1="400"
            y1="0"
            x2="0"
            y2="900"
            stroke="white"
            strokeWidth="1.5"
          />
          <line
            x1="430"
            y1="0"
            x2="30"
            y2="900"
            stroke="white"
            strokeWidth="0.8"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl">
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-[4rem] font-bold text-white leading-[1.12] mb-11">
            Salud mental aplicada a{" "}
            <span style={{ color: "#377782" }}>personas</span> e{" "}
            <span style={{ color: "#377782" }}>instituciones</span>
          </h1>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#trabajamos-con"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-[1.03] hover:shadow-lg"
              style={{ backgroundColor: "#377782", color: "white" }}
            >
              Como Empresa
            </a>
            <Link
              href="/servicios/acompanamiento-instituciones-educativas/"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-base text-white transition-all hover:bg-white/10"
              style={{ border: "2px solid rgba(255,255,255,0.35)" }}
            >
              Como Colegio
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs uppercase tracking-widest font-medium">
          Scroll
        </span>
        <div
          className="w-px h-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)",
          }}
        />
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 70"
          className="w-full block"
          style={{ height: 70 }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
