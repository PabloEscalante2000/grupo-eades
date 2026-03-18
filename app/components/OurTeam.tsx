"use client";

import profesionales from "@/public/data/profesionales.json";

type Prof = {
  nombre: string;
  img_url: string;
  obj_pos?: string;
  cpp?: string;
  rol: string;
};

function ProfCard({ p }: { p: Prof }) {
  return (
    <div className="overflow-hidden shadow-sm flex flex-col group hover:shadow-xl transition-shadow duration-300">
      <div
        className="aspect-[220/256] overflow-hidden"
        style={{
          backgroundImage: `url('/${p.img_url}')`,
          backgroundSize: "cover",
          backgroundPosition: p.obj_pos ?? "center",
        }}
      />
      <div className="p-5 flex flex-col flex-1 bg-white">
        <p className="font-bold text-base leading-snug mb-1" style={{ color: "#1c2c46" }}>
          {p.nombre}
        </p>
        <p className="text-sm text-gray-500 leading-snug mb-3">{p.rol}</p>
        {p.cpp && (
          <span
            className="self-start text-sm font-semibold px-2 py-0.5 rounded-full"
            style={{ backgroundColor: "#eef2f8", color: "#377782" }}
          >
            {p.cpp}
          </span>
        )}
      </div>
    </div>
  );
}

const directivos = profesionales.slice(0, 3);
const equipo = profesionales.slice(3);

export default function OurTeam() {
  return (
    <section id="nuestro-equipo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-4"
            style={{ backgroundColor: "#eef2f8", color: "#377782" }}
          >
            Profesionales
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ color: "#1c2c46" }}
          >
            Nuestro Equipo
          </h2>
        </div>

        {/* Nuestro Equipo Directivo */}
        <h3 className="text-2xl font-bold mb-8" style={{ color: "#1c2c46" }}>
          Nuestro Equipo Directivo
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {directivos.map((p, i) => (
            <ProfCard key={i} p={p} />
          ))}
        </div>

        {/* Nuestro Equipo */}
        <h3 className="text-2xl font-bold mb-8" style={{ color: "#1c2c46" }}>
          Nuestro Equipo
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipo.map((p, i) => (
            <ProfCard key={i} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
