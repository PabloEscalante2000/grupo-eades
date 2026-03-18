const cards = [
  {
    image: "https://eadespsicoterapia.com/assets/terapia-individual.jpg",
    overlay: "rgba(29,47,94,0.62)",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Atención psicoterapéutica",
    description:
      "Para niños, adolescentes, jóvenes y adultos. Acompañamiento clínico especializado orientado al desarrollo del bienestar emocional y la salud mental integral.",
  },
  {
    image: "/img/form_educacion.jpeg",
    overlay: "rgba(42,74,104,0.62)",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Formación y educación",
    description:
      "En salud mental para profesionales, instituciones y comunidades. Programas de capacitación y actualización basados en evidencia científica y enfoques contemporáneos.",
  },
  {
    image: "https://eadespsicoterapia.com/assets/loq-1.jpg",
    overlay: "rgba(35,58,112,0.60)",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Programas institucionales",
    description:
      "Para empresas, centros educativos y organizaciones. Diseño e implementación de estrategias integrales de salud mental a nivel organizacional.",
  },
  {
    image: "/img/ilumina_fondo.jpg",
    overlay: "rgba(25,50,96,0.60)",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Intervención social",
    description:
      "Prevención en comunidades y contextos de vulnerabilidad. Programas de acompañamiento y protección de la salud mental colectiva con impacto social sostenido.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="que-hacemos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-4"
            style={{ backgroundColor: "#eef2f8", color: "#377782" }}
          >
            Nuestros servicios
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5"
            style={{ color: "#1c2c46" }}
          >
            ¿Qué Hacemos?
          </h2>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed">
            Desarrollamos soluciones especializadas en salud mental para
            personas, profesionales e instituciones, con un enfoque integral
            y basado en evidencia.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className="text-xl font-bold mb-3"
                  style={{ color: "#1c2c46" }}
                >
                  {card.title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed flex-1">
                  {card.description}
                </p>
                <div
                  className="mt-5 pt-5 border-t"
                  style={{ borderColor: "#eef2f8" }}
                >
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-1.5 text-base font-semibold transition-colors group-hover:gap-2.5"
                    style={{ color: "#377782" }}
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
