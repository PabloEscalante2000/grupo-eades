"use client";

import { useRef } from "react";
import profesionales from "@/public/data/profesionales.json";

export default function OurTeam() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" });
  };

  return (
    <section id="nuestro-equipo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ backgroundColor: "#eef2f8", color: "#41588e" }}
          >
            Profesionales
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ color: "#1a2f5e" }}
          >
            Nuestro Equipo
          </h2>
        </div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Left button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-4 w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-all hover:scale-105"
            style={{ backgroundColor: "#1a2f5e", color: "white" }}
            aria-label="Anterior"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Scrollable row */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
            style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {profesionales.map((p, i) => (
              <div
                key={i}
                className="flex-shrink-0 overflow-hidden shadow-sm flex flex-col group hover:shadow-xl transition-shadow duration-300"
                style={{ width: 220, scrollSnapAlign: "start" }}
              >
                {/* Photo */}
                <div
                  className="h-64 overflow-hidden"
                  style={{
                    backgroundImage: `url('/${p.img_url}')`,
                    backgroundSize: "cover",
                    backgroundPosition: p.obj_pos ?? "center",
                  }}
                />

                {/* Info */}
                <div className="p-5 flex flex-col flex-1 bg-white">
                  <p
                    className="font-bold text-sm leading-snug mb-1"
                    style={{ color: "#1a2f5e" }}
                  >
                    {p.nombre}
                  </p>
                  <p className="text-xs text-gray-500 leading-snug mb-3">{p.rol}</p>
                  {p.cpp && (
                    <span
                      className="self-start text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: "#eef2f8", color: "#41588e" }}
                    >
                      {p.cpp}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-4 w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-all hover:scale-105"
            style={{ backgroundColor: "#1a2f5e", color: "white" }}
            aria-label="Siguiente"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Hide scrollbar for webkit */}
      <style>{`
        #nuestro-equipo div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
