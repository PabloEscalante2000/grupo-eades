import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programas Institucionales | Grupo EADES",
  description:
    "Diseño e implementación de estrategias integrales de salud mental para empresas, centros educativos y organizaciones. Consultoría y programas de bienestar laboral.",
};

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Diagnóstico Organizacional",
    description:
      "Evaluación del estado de la salud mental en la organización mediante encuestas, entrevistas y análisis de indicadores. Identificamos factores de riesgo psicosocial, niveles de estrés laboral y necesidades específicas del equipo para diseñar intervenciones precisas.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Programa de Bienestar Laboral",
    description:
      "Diseño e implementación de programas integrales de bienestar para colaboradores. Incluye talleres de manejo del estrés, técnicas de regulación emocional, mindfulness aplicado y estrategias de prevención del síndrome de burnout.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Capacitación a Equipos Directivos",
    description:
      "Formación especializada para líderes y mandos medios sobre liderazgo saludable, gestión emocional, comunicación asertiva y creación de entornos de trabajo psicológicamente seguros. Potenciamos las capacidades de quienes lideran equipos.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: "Consultoría en Salud Mental Organizacional",
    description:
      "Acompañamiento estratégico para que la organización incorpore la salud mental como eje transversal de su cultura. Diseñamos políticas, protocolos de intervención y sistemas de seguimiento que permiten medir el impacto de las acciones implementadas.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Programas para Centros Educativos",
    description:
      "Estrategias de salud mental diseñadas específicamente para colegios, universidades e institutos. Abordamos el clima institucional, la convivencia escolar, la detección temprana de dificultades emocionales y el bienestar de la comunidad educativa.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Atención en Crisis Institucional",
    description:
      "Protocolo de respuesta ante situaciones críticas dentro de la organización: accidentes, pérdidas, conflictos graves o eventos traumáticos colectivos. Brindamos contención inmediata y acompañamiento en el proceso de recuperación del equipo.",
  },
];

const sectors = [
  { icon: "🏢", label: "Empresas y corporaciones" },
  { icon: "🏫", label: "Centros educativos" },
  { icon: "🏥", label: "Instituciones de salud" },
  { icon: "🏛️", label: "Entidades públicas" },
  { icon: "🤝", label: "ONGs y organizaciones sociales" },
  { icon: "🎓", label: "Universidades e institutos" },
];

const stats = [
  { value: "+50", label: "instituciones atendidas" },
  { value: "+200", label: "talleres realizados" },
  { value: "+1000", label: "colaboradores beneficiados" },
  { value: "4", label: "líneas de intervención" },
];

export default function ProgramasInstitucionales() {
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
          backgroundImage: "url('https://eadespsicoterapia.com/assets/loq-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(35,58,112,0.82)" }} />
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-5"
            style={{ backgroundColor: "rgba(55,119,130,0.35)", border: "1px solid rgba(55,119,130,0.5)" }}
          >
            Nuestros servicios
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Programas Institucionales
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed">
            Diseño e implementación de estrategias integrales de salud mental para empresas,
            centros educativos y organizaciones que cuidan a su gente.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: "#377782" }} className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-4xl font-extrabold text-white mb-1">{s.value}</p>
              <p className="text-white/80 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#1c2c46" }}>
            La salud mental como ventaja estratégica
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            Las organizaciones que invierten en la salud mental de sus equipos reportan mayor
            productividad, menor ausentismo, mejor clima laboral y mayor retención de talento.
            En Grupo EADES acompañamos a las instituciones en la construcción de entornos
            laborales y educativos que favorecen el bienestar integral.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Nuestro equipo multidisciplinario combina expertise clínico con conocimiento
            organizacional para diseñar intervenciones que generan impacto real y sostenido.
            Desde el diagnóstico hasta el seguimiento, acompañamos cada etapa del proceso.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6" style={{ backgroundColor: "#f7f9fc" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#1c2c46" }}>
              Servicios para tu organización
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Desarrollamos soluciones a medida según las necesidades, tamaño y contexto de cada institución.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white"
                  style={{ backgroundColor: "#1c2c46" }}
                >
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#1c2c46" }}>{s.title}</h3>
                <p className="text-gray-500 leading-relaxed text-base">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#1c2c46" }}>
            Sectores que atendemos
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Trabajamos con todo tipo de instituciones que desean hacer de la salud mental una prioridad.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {sectors.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-3 rounded-full text-base font-medium"
                style={{ backgroundColor: "#eef2f8", color: "#1c2c46" }}
              >
                <span>{s.icon}</span>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6" style={{ backgroundColor: "#1c2c46" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white text-center">Nuestra metodología</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diagnóstico", desc: "Evaluamos el estado actual de la salud mental en tu organización." },
              { step: "02", title: "Diseño", desc: "Elaboramos una propuesta a medida con objetivos e indicadores claros." },
              { step: "03", title: "Implementación", desc: "Ejecutamos los programas con acompañamiento continuo del equipo." },
              { step: "04", title: "Seguimiento", desc: "Medimos el impacto y ajustamos las acciones según los resultados." },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-extrabold mb-4 opacity-30" style={{ color: "#377782" }}>
                  {s.step}
                </div>
                <h3 className="text-white font-bold text-base mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#1c2c46" }}>
            Invirtamos juntos en tu equipo
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Cuéntanos sobre tu organización y te diseñaremos una propuesta personalizada
            que se ajuste a tus objetivos y presupuesto.
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
