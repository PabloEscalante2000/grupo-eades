import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Formación y Educación | Grupo EADES",
  description:
    "Programas de capacitación y formación en salud mental para profesionales, docentes e instituciones. Enfoques contemporáneos basados en evidencia científica.",
};

const programs = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    tag: "Profesionales",
    title: "Capacitación Clínica Especializada",
    description:
      "Programas de formación continua para psicólogos, psicoterapeutas y profesionales de la salud mental. Módulos en enfoques cognitivo-conductuales, sistémicos, psicodinámicos y técnicas de tercera generación. Incluye supervisión de casos.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    tag: "Docentes y educadores",
    title: "Formación en Instituciones Educativas",
    description:
      "Capacitación dirigida a docentes, auxiliares y equipos directivos sobre salud mental en el aula, educación inclusiva, manejo de conductas desafiantes y acompañamiento emocional del estudiante. Diseñamos los contenidos según las necesidades del centro educativo.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    tag: "Familias",
    title: "Escuelas para Padres y Cuidadores",
    description:
      "Talleres formativos para padres, madres y cuidadores sobre crianza positiva, vínculo afectivo, manejo de conducta en niños con necesidades especiales y estrategias de regulación emocional en el hogar. Disponibles en formato presencial y virtual.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    tag: "Formación integral",
    title: "Formando Pseres",
    description:
      "Programa integral que combina refuerzo académico personalizado con acompañamiento emocional, desarrollo de habilidades de estudio y orientación vocacional. Diseñado para niños y adolescentes que necesitan apoyo en su trayectoria escolar y personal.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    tag: "Reflexión y prevención",
    title: "Pseres Reflexiona",
    description:
      "Seminarios y talleres en centros educativos e instituciones sobre salud mental, prevención del acoso escolar, inteligencia emocional, resolución de conflictos y habilidades sociales. Orientados a estudiantes, docentes y comunidad educativa en general.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    tag: "Profesionales",
    title: "Supervisión Clínica",
    description:
      "Espacios grupales e individuales de supervisión para psicólogos y psicoterapeutas en formación o en ejercicio. Revisión de casos clínicos, análisis de intervenciones, orientación teórico-práctica y apoyo en el desarrollo profesional.",
  },
];

const topics = [
  "Salud mental en el aula",
  "Crianza y neurodiversidad",
  "Regulación emocional",
  "Trastornos del neurodesarrollo (TEA, TDAH)",
  "Enfoques cognitivo-conductuales",
  "Mindfulness y técnicas de tercera generación",
  "Prevención del burnout",
  "Comunicación no violenta",
  "Resolución de conflictos",
  "Habilidades sociales",
  "Intervención en crisis",
  "Educación inclusiva",
];

export default function FormacionYEducacion() {
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
          backgroundImage: "url('/img/form_educacion.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(42,74,104,0.82)" }} />
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-5"
            style={{ backgroundColor: "rgba(55,119,130,0.35)", border: "1px solid rgba(55,119,130,0.5)" }}
          >
            Nuestros servicios
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Formación y Educación
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed">
            Programas de capacitación en salud mental para profesionales, docentes, familias
            e instituciones, basados en evidencia científica y enfoques contemporáneos.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#1c2c46" }}>
            Formamos para transformar
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            La salud mental se construye también desde el conocimiento. En Grupo EADES diseñamos
            programas formativos que potencian las capacidades de quienes trabajan con personas:
            docentes, psicólogos, padres de familia y equipos institucionales. Nuestros contenidos
            son rigurosos, actualizados y aplicables a la práctica cotidiana.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Adaptamos cada programa a los objetivos, contexto y público de cada institución.
            Trabajamos tanto en modalidad presencial como virtual, con metodologías participativas
            que favorecen el aprendizaje significativo y el desarrollo de competencias prácticas.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-6" style={{ backgroundColor: "#f7f9fc" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#1c2c46" }}>
              Nuestros programas
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Ofrecemos una amplia gama de programas formativos adaptados a distintos perfiles y necesidades.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-white"
                    style={{ backgroundColor: "#377782" }}
                  >
                    {p.icon}
                  </div>
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mt-2"
                    style={{ backgroundColor: "#eef2f8", color: "#377782" }}
                  >
                    {p.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#1c2c46" }}>{p.title}</h3>
                <p className="text-gray-500 leading-relaxed text-base">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#1c2c46" }}>
            Temáticas que abordamos
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Nuestros programas pueden abordar estas y otras temáticas según las necesidades de cada grupo.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {topics.map((t, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ backgroundColor: "#eef2f8", color: "#1c2c46" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-20 px-6" style={{ backgroundColor: "#1c2c46" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white text-center">Formatos disponibles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🧑‍💻", title: "Taller intensivo", desc: "Jornada concentrada de 4 a 8 horas con enfoque práctico." },
              { icon: "📅", title: "Programa modular", desc: "Series de sesiones semanales o quincenales de 2 a 4 meses." },
              { icon: "🌐", title: "Modalidad virtual", desc: "Sincrónica o asincrónica con recursos digitales descargables." },
              { icon: "🏫", title: "In-house", desc: "Formación en la sede de la institución, adaptada a su contexto." },
            ].map((f, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-white font-bold text-base mb-2">{f.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#1c2c46" }}>
            ¿Te interesa alguno de nuestros programas?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Conversemos sobre cómo podemos diseñar una propuesta formativa a la medida de tu equipo o institución.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:opacity-90"
            style={{ backgroundColor: "#377782" }}
          >
            Solicitar propuesta
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
