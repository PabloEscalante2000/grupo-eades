import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Acompañamiento para Instituciones Educativas | Grupo EADES",
  description:
    "Construimos un sistema de acompañamiento psicológico y psicoeducativo para colegios, articulado en cinco líneas: formación docente, tamizaje, derivación, inclusión y escuela para padres.",
};

const lines = [
  {
    tag: "Docentes",
    tagColor: "#1b6748",
    certified: true,
    title: "Formaciones y capacitaciones certificadas",
    description:
      "Capacitación y supervisión de docentes y maestras sombra en cuatro ejes clave: neurodivergencia, aprendizaje, acoso escolar y clima de aula. Programas diseñados para fortalecer las herramientas del equipo docente en el trabajo cotidiano.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    tag: "Evaluación",
    tagColor: "#a05c1a",
    title: "Tamizaje por grados",
    description:
      "Evaluación por aula, en percentiles, que revela qué estudiantes requieren una mirada más cercana. Un instrumento claro y sistemático para que el colegio tome decisiones informadas desde el inicio del año escolar.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    tag: "Derivación",
    tagColor: "#1c2c46",
    title: "Derivación del caso",
    description:
      "Atención del caso en el centro, a tarifa preferente por convenio y en coordinación con los profesores del alumno. Garantizamos continuidad entre la mirada clínica y la dinámica del aula para una intervención realmente efectiva.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    ),
  },
  {
    tag: "Inclusión",
    tagColor: "#377782",
    certified: true,
    title: "Neuroeducación y gestión de la diversidad",
    description:
      "Nuevas metodologías de neuroeducación para liderar una escuela inclusiva en la práctica cotidiana. Acompañamos al equipo directivo y docente en la transformación del entorno de aprendizaje.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    tag: "Familias",
    tagColor: "#7a4f2e",
    title: "Escuela para Padres",
    description:
      "Charlas y talleres para las familias sobre los temas que el colegio observa en su comunidad. Un espacio de formación y diálogo que fortalece el vínculo entre las familias y la institución educativa.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function AcompanamientoInstituciones() {
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
          backgroundImage: "url('/img/fondo_hero_2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(28,44,70,0.82)" }} />
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-5"
            style={{ backgroundColor: "rgba(55,119,130,0.35)", border: "1px solid rgba(55,119,130,0.5)" }}
          >
            Servicios para instituciones educativas
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Construimos un sistema de acompañamiento
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed">
            Articulamos cinco líneas de trabajo para que las distintas acciones del colegio
            avancen en una misma dirección.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#1c2c46" }}>
            Un enfoque integral para la comunidad educativa
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            Los colegios enfrentan desafíos cada vez más complejos: estudiantes con necesidades
            diversas, docentes bajo presión y familias que buscan orientación. Nuestro sistema de
            acompañamiento psicológico y psicoeducativo integra cinco líneas de trabajo que se
            complementan entre sí para generar un impacto real y sostenido en toda la comunidad educativa.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Trabajamos en coordinación con el equipo directivo, los docentes y las familias para
            que cada acción tenga coherencia con la realidad del colegio. No son intervenciones
            aisladas: son parte de un mismo sistema.
          </p>
        </div>
      </section>

      {/* Five lines */}
      <section className="py-20 px-6" style={{ backgroundColor: "#f7f9fc" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#1c2c46" }}>
              Las cinco líneas de trabajo
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Cada línea responde a una dimensión distinta de la vida escolar y se articula
              con las demás para construir un colegio que acompaña de verdad.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lines.map((line, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-white"
                    style={{ backgroundColor: line.tagColor }}
                  >
                    {line.icon}
                  </div>
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${line.tagColor}18`, color: line.tagColor }}
                  >
                    {line.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#1c2c46" }}>
                  {line.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-base flex-1">{line.description}</p>
                {line.certified && (
                  <div
                    className="mt-5 pt-4 border-t flex items-center gap-2"
                    style={{ borderColor: "#eef2f8" }}
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: line.tagColor }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: line.tagColor }}>
                      Con certificación internacional
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#1c2c46" }}>
            ¿Para qué tipo de colegio?
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Trabajamos con instituciones educativas de todo nivel que quieren construir
            una comunidad más sana, inclusiva y conectada.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: "🏫", label: "Colegios privados" },
              { icon: "🏛️", label: "Colegios públicos" },
              { icon: "🎒", label: "Inicial y primaria" },
              { icon: "🎓", label: "Secundaria" },
              { icon: "🌍", label: "Colegios internacionales" },
              { icon: "⛪", label: "Colegios confesionales" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-3 rounded-full text-base font-medium"
                style={{ backgroundColor: "#eef2f8", color: "#1c2c46" }}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand */}
      <section className="py-20 px-6" style={{ backgroundColor: "#f7f9fc" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#1c2c46" }}>
              Este servicio es ofrecido por
            </h2>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm max-w-xl mx-auto">
            <div className="h-3" style={{ backgroundColor: "#1b6748" }} />
            <div className="p-8 flex flex-col items-center text-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/pseres_logo.jpeg"
                alt="Pseres"
                className="h-14 w-auto object-contain"
              />
              <div>
                <h3 className="text-xl font-bold mb-1" style={{ color: "#1c2c46" }}>Pseres</h3>
                <p className="text-sm font-medium mb-4" style={{ color: "#1b6748" }}>
                  Psicoterapia y Psicoeducación
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Pseres es la marca del Grupo EADES especializada en psicoterapia y psicoeducación
                  para niños, adolescentes y comunidades educativas. Diseña e implementa programas
                  de acompañamiento escolar con enfoque en neuroeducación, inclusión y bienestar
                  de toda la comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6" style={{ backgroundColor: "#1c2c46" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            ¿Quieres implementarlo en tu colegio?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Conversemos sobre las necesidades de tu institución y diseñamos juntos
            el sistema de acompañamiento que mejor se adapte a tu comunidad.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:opacity-90"
            style={{ backgroundColor: "#377782" }}
          >
            Solicitar información
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
