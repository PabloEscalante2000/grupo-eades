import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atención Psicoterapéutica | Grupo EADES",
  description:
    "Acompañamiento clínico especializado para niños, adolescentes, jóvenes y adultos. Terapia individual, de pareja, familiar y atención en neurodiversidad.",
};

const modalities = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Terapia Individual",
    description:
      "Proceso terapéutico personalizado para adultos, adolescentes y niños. Abordamos estados de ansiedad, depresión, dificultades emocionales, baja autoestima, duelo y conflictos relacionales mediante enfoques integradores basados en evidencia científica.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Terapia de Pareja",
    description:
      "Espacio terapéutico para fortalecer el vínculo de pareja, mejorar la comunicación y resolver dinámicas relacionales que generan malestar. Trabajamos sobre patrones relacionales recurrentes, crisis de convivencia y procesos de separación.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Terapia Familiar",
    description:
      "Intervención sistémica que trabaja con la familia como unidad. Facilitamos la resolución de conflictos intrafamiliares, mejoramos los patrones de comunicación y acompañamos a las familias en momentos de crisis, cambio o reorganización.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Atención en Neurodiversidad",
    description:
      "Evaluación y acompañamiento terapéutico especializado para niños y adolescentes con Trastorno del Espectro Autista (TEA), TDAH, dificultades de aprendizaje y retrasos en el desarrollo. Contamos con un equipo multidisciplinario de psicólogos y neuropsicólogos.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Evaluación Psicológica",
    description:
      "Evaluaciones psicodiagnósticas integrales para niños, adolescentes y adultos. Incluye valoración cognitiva, emocional, conductual y neuropsicológica para orientar el proceso terapéutico y emitir informes especializados cuando se requiera.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Intervención en Crisis",
    description:
      "Atención psicológica de urgencia ante situaciones de crisis emocional aguda. Brindamos contención, estabilización y acompañamiento inmediato para restaurar el equilibrio emocional y activar recursos personales de afrontamiento.",
  },
];

const audiences = [
  { label: "Niños", icon: "🧒" },
  { label: "Adolescentes", icon: "🧑" },
  { label: "Adultos", icon: "👤" },
  { label: "Parejas", icon: "👫" },
  { label: "Familias", icon: "👨‍👩‍👧" },
  { label: "Personas con neurodiversidad", icon: "🧠" },
];

export default function AtencionPsicoterapeutica() {
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
          backgroundImage: "url('https://eadespsicoterapia.com/assets/terapia-individual.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(28,44,70,0.80)" }} />
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <span
            className="inline-block px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-5"
            style={{ backgroundColor: "rgba(55,119,130,0.35)", border: "1px solid rgba(55,119,130,0.5)" }}
          >
            Nuestros servicios
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Atención Psicoterapéutica
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed">
            Acompañamiento clínico especializado orientado al desarrollo del bienestar emocional
            y la salud mental integral, para todas las etapas de la vida.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: "#1c2c46" }}>
            Un enfoque integral y personalizado
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-5">
            En Grupo EADES entendemos que cada persona es única. Por eso, nuestro modelo terapéutico integra
            diferentes enfoques —cognitivo-conductual, sistémico, psicodinámico y humanista— adaptándose
            a las necesidades específicas de cada consulta. Trabajamos sobre pensamientos, emociones,
            conductas y relaciones para promover cambios sostenidos y significativos.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Nuestro equipo está conformado por psicólogos y psicoterapeutas con formación especializada
            y supervisión continua. Ofrecemos atención presencial y en línea, con accesibilidad permanente
            entre sesiones para quienes lo necesiten.
          </p>
        </div>
      </section>

      {/* Modalities */}
      <section className="py-20 px-6" style={{ backgroundColor: "#f7f9fc" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#1c2c46" }}>
              Modalidades de atención
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Ofrecemos distintas modalidades terapéuticas para responder a las necesidades
              de cada persona, pareja o familia.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modalities.map((m, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white"
                  style={{ backgroundColor: "#377782" }}
                >
                  {m.icon}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#1c2c46" }}>
                  {m.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-base">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#1c2c46" }}>
            ¿Para quién es?
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Brindamos atención a lo largo de todas las etapas del ciclo vital.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {audiences.map((a, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-5 py-3 rounded-full text-base font-medium"
                style={{ backgroundColor: "#eef2f8", color: "#1c2c46" }}
              >
                <span>{a.icon}</span>
                <span>{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 px-6" style={{ backgroundColor: "#f7f9fc" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#1c2c46" }}>
              Nuestras marcas especializadas
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              La atención psicoterapéutica del Grupo EADES se canaliza a través de dos marcas
              con identidades propias, enfoques complementarios y equipos de alta especialización.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* EADES Psicoterapia */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-3" style={{ backgroundColor: "#377782" }} />
              <div className="p-8">
                <div className="flex items-center gap-4 mb-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/icono_grupo_eades.png"
                    alt="EADES Psicoterapia"
                    className="h-12 w-auto object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: "#1c2c46" }}>
                      EADES Psicoterapia
                    </h3>
                    <p className="text-sm font-medium" style={{ color: "#377782" }}>
                      Adultos · Pareja · Familia
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Espacio clínico de psicoterapia para adultos, parejas y familias. Trabaja desde
                  una metodología integradora que combina enfoques cognitivo-conductuales, sistémicos
                  y psicodinámicos. Especializada en ansiedad, depresión, conflictos relacionales,
                  regulación emocional y evaluaciones psicodiagnósticas. Ofrece atención presencial
                  y en línea, con acompañamiento personalizado entre sesiones.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Ansiedad", "Depresión", "Pareja", "Familia", "Evaluación diagnóstica"].map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{ backgroundColor: "#eef2f8", color: "#377782" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="https://eadespsicoterapia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:gap-2.5"
                  style={{ color: "#377782" }}
                >
                  Visitar EADES Psicoterapia
                  <svg className="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Pseres */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-3" style={{ backgroundColor: "#1b6748" }} />
              <div className="p-8">
                <div className="flex items-center gap-4 mb-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/img/pseres_logo.jpeg"
                    alt="Pseres"
                    className="h-12 w-auto object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: "#1c2c46" }}>
                      Pseres
                    </h3>
                    <p className="text-sm font-medium" style={{ color: "#1b6748" }}>
                      Niños · Adolescentes · Neurodiversidad
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Clínica especializada en la atención psicológica de niños y adolescentes, con
                  énfasis en neurodiversidad: TEA, TDAH, dificultades de aprendizaje y retrasos
                  del neurodesarrollo. Su equipo multidisciplinario integra psicólogos,
                  neuropsicólogos y educadores especializados. Cuenta con programas de terapia
                  individual, acompañamiento familiar y soporte académico emocional.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["TEA", "TDAH", "Niños", "Adolescentes", "Familia"].map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{ backgroundColor: "#eef8f3", color: "#1b6748" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="https://pseres.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:gap-2.5"
                  style={{ color: "#1b6748" }}
                >
                  Visitar Pseres
                  <svg className="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6" style={{ backgroundColor: "#1c2c46" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white text-center">
            ¿Cómo es el proceso?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Consulta inicial",
                desc: "Una primera sesión de evaluación para conocerte, entender tu situación y definir juntos los objetivos del proceso terapéutico.",
              },
              {
                step: "02",
                title: "Proceso terapéutico",
                desc: "Sesiones regulares de seguimiento donde trabajamos tus objetivos con técnicas y enfoques adaptados a tus necesidades específicas.",
              },
              {
                step: "03",
                title: "Cierre y continuidad",
                desc: "Evaluación de logros, consolidación de herramientas y planificación de la continuidad o cierre del proceso según tu evolución.",
              },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-5xl font-extrabold mb-4 opacity-30"
                  style={{ color: "#377782" }}
                >
                  {s.step}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{s.title}</h3>
                <p className="text-white/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#1c2c46" }}>
            ¿Listo para comenzar?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Contáctanos para coordinar tu primera consulta. Estamos disponibles para
            resolver tus dudas y orientarte hacia el servicio que mejor se adapte a ti.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:opacity-90"
            style={{ backgroundColor: "#377782" }}
          >
            Solicitar consulta
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
