const cards = [
  {
    image: "/img/empresas.jpg",
    overlay: "rgba(29,47,94,0.62)",
    title: "Empresas y organizaciones",
    description:
      "Charlas, talleres y programas para el bienestar psicológico de equipos.",
  },
  {
    image: "/img/centros_educativos.jpg",
    overlay: "rgba(42,74,104,0.62)",
    title: "Centros educativos",
    description:
      "Programas psicoeducativos, acompañamiento a docentes y trabajo con estudiantes y familias.",
  },
  {
    image: "/img/ilumina_fondo.jpg",
    overlay: "rgba(25,50,96,0.60)",
    title: "Instituciones y comunidades",
    description:
      "Proyectos de prevención e intervención en salud mental.",
  },
];

export default function WorkWithInstitutions() {
  return (
    <section id="trabajamos-con" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ backgroundColor: "#eef2f8", color: "#41588e" }}
          >
            Ámbitos de trabajo
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5"
            style={{ color: "#1a2f5e" }}
          >
            Trabajamos con instituciones
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            El Grupo EADES desarrolla programas de salud mental para
            organizaciones y contextos educativos.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="overflow-hidden shadow-sm flex flex-col group hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image area */}
              <div
                className="h-64 overflow-hidden"
                style={{
                  backgroundImage: `url('${card.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 bg-white">
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: "#1a2f5e" }}
                >
                  {card.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {card.description}
                </p>
                <div
                  className="mt-5 pt-5 border-t"
                  style={{ borderColor: "#eef2f8" }}
                >
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:gap-2.5"
                    style={{ color: "#41588e" }}
                  >
                    Saber más
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
          ))}
        </div>
      </div>
    </section>
  );
}
