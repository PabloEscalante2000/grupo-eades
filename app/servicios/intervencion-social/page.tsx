import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Intervención Social | Grupo EADES",
  description:
    "Programas de salud mental comunitaria, prevención y acompañamiento en contextos de vulnerabilidad. Impacto social sostenido para comunidades y familias.",
};

const programs = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Salud Mental Comunitaria",
    description:
      "Programas de promoción de la salud mental dirigidos a comunidades en situación de vulnerabilidad. Trabajamos con juntas vecinales, organizaciones de base y líderes comunitarios para fortalecer redes de apoyo y capacidades locales de cuidado emocional.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Prevención y Psicoeducación",
    description:
      "Campañas y talleres de sensibilización sobre salud mental, desestigmatización de los trastornos psicológicos, prevención del consumo de sustancias, violencia de género y suicidio. Adaptamos los contenidos al perfil cultural y educativo de cada comunidad.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Acompañamiento Familiar",
    description:
      "Intervenciones de apoyo a familias en situaciones de crisis, pobreza extrema, violencia intrafamiliar o pérdida. Brindamos orientación psicológica, fortalecimiento de vínculos y estrategias de afrontamiento adaptadas a la realidad de cada familia.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Atención a Poblaciones en Riesgo",
    description:
      "Programas focalizados para niños y adolescentes en situación de calle, víctimas de violencia, migrantes, personas privadas de libertad y adultos mayores en abandono. Coordinamos con instituciones del Estado y organizaciones civiles para maximizar el alcance.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Formación de Agentes Comunitarios",
    description:
      "Capacitación a promotores de salud, líderes comunitarios y voluntarios en primeros auxilios psicológicos, detección de crisis emocionales y derivación efectiva. Multiplicamos el impacto desarrollando capacidades en la propia comunidad.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "Articulación Interinstitucional",
    description:
      "Coordinación con municipios, ministerios, ONGs, centros de salud y organizaciones comunitarias para desarrollar redes de derivación y atención articulada. Promovemos la salud mental como un bien público que requiere respuesta colectiva y sostenida.",
  },
];

const impacts = [
  {
    icon: "🤝",
    title: "Enfoque de derechos",
    desc: "Concebimos la salud mental como un derecho fundamental, no como un privilegio. Nuestra labor se orienta a reducir las brechas de acceso.",
  },
  {
    icon: "🌱",
    title: "Sostenibilidad",
    desc: "Diseñamos intervenciones que generan capacidades locales duraderas, más allá de la presencia directa de nuestro equipo.",
  },
  {
    icon: "🔬",
    title: "Basado en evidencia",
    desc: "Aplicamos metodologías validadas internacionalmente, adaptadas al contexto sociocultural peruano y latinoamericano.",
  },
  {
    icon: "📊",
    title: "Impacto medible",
    desc: "Establecemos indicadores claros desde el inicio y realizamos evaluaciones periódicas para rendir cuentas del cambio generado.",
  },
];

export default function IntervencionSocial() {
  return (
    <>
      {/* Navbar */}
      <header className="py-5 px-6 flex items-center justify-between" style={{ backgroundColor: "#1c2c46" }}>
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/logo_fondo_oscuro.png" alt="Grupo EADES" className="h-10 w-auto" />
        </Link>
        <Link
          href="/#que-hacemos"
          className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-1.5"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver
        </Link>
      </header>

      {/* Hero */}
      <section
        className="relative py-28 px-6 overflow-hidden"
        style={{
          backgroundImage: "url('/img/ilumina_fondo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(25,50,96,0.83)" }} />
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-5"
            style={{ backgroundColor: "rgba(55,119,130,0.35)", border: "1px solid rgba(55,119,130,0.5)" }}
          >
            Nuestros servicios
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Intervención Social
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed">
            Programas de prevención, acompañamiento y protección de la salud mental colectiva
            con impacto social sostenido en comunidades y contextos de vulnerabilidad.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#1c2c46" }}>
            La salud mental como bien colectivo
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            En Grupo EADES creemos que el bienestar emocional no puede depender solo de la
            capacidad económica de las personas. Por eso desarrollamos programas de intervención
            social orientados a comunidades y poblaciones que enfrentan barreras de acceso
            a la atención en salud mental.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Trabajamos en territorios vulnerables, instituciones públicas y redes comunitarias,
            combinando la rigurosidad clínica con la sensibilidad cultural y social necesaria
            para generar cambios reales en la vida de las personas.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-6" style={{ backgroundColor: "#f7f9fc" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#1c2c46" }}>
              Líneas de intervención
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Desarrollamos programas adaptados a los distintos contextos y necesidades
              de las comunidades con las que trabajamos.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white"
                  style={{ backgroundColor: "#1b6748" }}
                >
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#1c2c46" }}>{p.title}</h3>
                <p className="text-gray-500 leading-relaxed text-base">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact principles */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#1c2c46" }}>
              Nuestros principios de acción
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {impacts.map((imp, i) => (
              <div
                key={i}
                className="flex gap-5 p-7 rounded-2xl"
                style={{ backgroundColor: "#f7f9fc" }}
              >
                <div className="text-4xl shrink-0">{imp.icon}</div>
                <div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#1c2c46" }}>{imp.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{imp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Mission */}
      <section className="py-20 px-6" style={{ backgroundColor: "#1b6748" }}>
        <div className="max-w-3xl mx-auto text-center">
          <svg className="w-12 h-12 mx-auto mb-6 text-white/30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-white text-xl sm:text-2xl font-medium leading-relaxed italic">
            "Trabajamos para que la salud mental deje de ser un privilegio y se convierta en
            una realidad accesible para todas las personas, independientemente de su contexto."
          </p>
          <p className="text-white/60 mt-6 text-base font-medium">Grupo EADES</p>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#1c2c46" }}>
            ¿Trabajas en el sector social o público?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Estamos abiertos a alianzas con municipios, ministerios, ONGs, fundaciones
            y organizaciones que busquen incorporar la salud mental en su trabajo comunitario.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:opacity-90"
            style={{ backgroundColor: "#1b6748" }}
          >
            Conversemos
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-sm text-white/50" style={{ backgroundColor: "#1c2c46" }}>
        <p>© {new Date().getFullYear()} Grupo EADES. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
