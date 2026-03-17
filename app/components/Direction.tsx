export default function Direction() {
  return (
    <section id="direccion" className="py-24" style={{ backgroundColor: "#f4f7fb" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ backgroundColor: "#dde8f5", color: "#377782" }}
          >
            Liderazgo
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            style={{ color: "#1c2c46" }}
          >
            Dirección
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20 max-w-5xl mx-auto">
          {/* Photo + name above */}
          <div className="flex-shrink-0 flex flex-col items-center gap-5">
            <h3
              className="text-2xl lg:text-3xl font-bold text-center leading-tight"
              style={{ color: "#1c2c46" }}
            >
              César Escalante
            </h3>
            <div
              className="overflow-hidden"
              style={{
                width: 340,
                height: 420,
                boxShadow: "0 20px 60px rgba(26,47,94,0.18)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/cesar.webp"
                alt="César Escalante"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col items-start">
            <p
              className="text-sm font-bold uppercase tracking-widest mb-6"
              style={{ color: "#377782" }}
            >
              Fundador y Director General
            </p>

            <div
              className="w-12 h-1 rounded-full mb-7"
              style={{ backgroundColor: "#1b6748" }}
            />

            <p className="text-gray-500 text-base leading-relaxed mb-4">
              Psicoterapeuta y neuropsicólogo con más de 25 años de experiencia
              clínica.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-10">
              Desde la dirección del Grupo EADES, coordina el desarrollo
              conceptual, clínico y metodológico de las distintas unidades,
              asegurando la coherencia entre práctica terapéutica, formación y
              programas institucionales.
            </p>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-[1.03] hover:shadow-md"
              style={{ backgroundColor: "#377782", color: "white" }}
            >
              Conocer más sobre la dirección
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
