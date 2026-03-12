import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | Grupo EADES",
  description:
    "Política de privacidad y tratamiento de datos personales del Grupo EADES, conforme a la Ley N° 29733 de Protección de Datos Personales del Perú.",
};

const sections = [
  {
    title: "1. Responsable del tratamiento",
    content: `Grupo EADES (en adelante, "el Grupo") es el responsable del tratamiento de los datos personales recopilados a través del sitio web grupoeades.com. Para cualquier consulta relacionada con el tratamiento de sus datos puede contactarnos en:

Correo electrónico: contacto@grupoeades.com
Dirección: Lima, Perú`,
  },
  {
    title: "2. Marco legal",
    content: `El tratamiento de datos personales se realiza conforme a la Ley N° 29733 — Ley de Protección de Datos Personales del Perú — y su Reglamento aprobado por Decreto Supremo N° 003-2013-JUS, así como las directivas emitidas por la Autoridad Nacional de Protección de Datos Personales (ANPDP).`,
  },
  {
    title: "3. Datos que recopilamos",
    content: `Podemos recopilar los siguientes datos personales:

• Datos de contacto: nombre, dirección de correo electrónico y número de teléfono, cuando usted nos los facilita voluntariamente a través del formulario de contacto o por correo electrónico.
• Datos de navegación: dirección IP, tipo de navegador, páginas visitadas y tiempo de permanencia, recopilados de forma anónima o agregada mediante herramientas de análisis web.

No recopilamos datos sensibles (salud, orientación sexual, convicciones religiosas, etc.) a través de este sitio web.`,
  },
  {
    title: "4. Finalidad del tratamiento",
    content: `Los datos personales que nos facilita se utilizan para:

• Atender sus consultas, solicitudes de información o propuestas de colaboración.
• Gestionar la comunicación con instituciones, organizaciones y profesionales interesados en nuestros servicios.
• Mejorar la experiencia de navegación en nuestro sitio web mediante el análisis estadístico anónimo.

No utilizamos sus datos para enviar comunicaciones comerciales no solicitadas.`,
  },
  {
    title: "5. Legitimación del tratamiento",
    content: `El tratamiento de sus datos se basa en:

• El consentimiento que usted otorga al enviarnos un mensaje o facilitarnos sus datos de contacto.
• El interés legítimo del Grupo EADES para responder consultas relacionadas con sus actividades clínicas, formativas e institucionales.`,
  },
  {
    title: "6. Conservación de los datos",
    content: `Los datos de contacto se conservan durante el tiempo necesario para atender su consulta y, posteriormente, por el plazo que exija la normativa aplicable o hasta que usted solicite su supresión. Los datos de navegación anónimos se conservan por un período máximo de 26 meses.`,
  },
  {
    title: "7. Comunicación a terceros",
    content: `Grupo EADES no cede ni vende sus datos personales a terceros con fines comerciales. Los datos únicamente podrán ser comunicados a:

• Proveedores tecnológicos que prestan servicios de alojamiento web o herramientas de análisis, bajo acuerdos de confidencialidad y en calidad de encargados del tratamiento.
• Autoridades competentes, cuando exista una obligación legal que así lo exija.`,
  },
  {
    title: "8. Sus derechos",
    content: `De acuerdo con la Ley N° 29733 y su Reglamento, usted tiene derecho a:

• Acceso: conocer qué datos personales suyos tratamos.
• Rectificación: corregir datos inexactos o incompletos.
• Cancelación / Supresión: solicitar la eliminación de sus datos cuando ya no sean necesarios.
• Oposición: oponerse al tratamiento de sus datos en determinadas circunstancias.

Para ejercer cualquiera de estos derechos, envíe una solicitud escrita a contacto@grupoeades.com indicando su nombre completo, el derecho que desea ejercer y la documentación que acredite su identidad. Atenderemos su solicitud en el plazo establecido por la normativa vigente.`,
  },
  {
    title: "9. Seguridad",
    content: `Grupo EADES adopta las medidas técnicas y organizativas necesarias para proteger sus datos personales frente a accesos no autorizados, pérdidas, alteraciones o divulgaciones. La transmisión de datos a través de nuestro sitio web se realiza mediante protocolo HTTPS.`,
  },
  {
    title: "10. Cookies",
    content: `Este sitio web puede utilizar cookies técnicas estrictamente necesarias para el funcionamiento del sitio. No utilizamos cookies de seguimiento ni publicitarias de terceros. Puede configurar su navegador para rechazar o eliminar cookies en cualquier momento, aunque esto podría afectar la experiencia de navegación.`,
  },
  {
    title: "11. Cambios en esta política",
    content: `Grupo EADES se reserva el derecho de actualizar esta Política de Privacidad para adaptarla a cambios normativos o en sus servicios. La versión vigente siempre estará disponible en esta página con la fecha de última actualización indicada al pie.`,
  },
  {
    title: "12. Contacto y reclamaciones",
    content: `Si tiene alguna duda sobre el tratamiento de sus datos o desea presentar una reclamación, puede contactarnos en contacto@grupoeades.com. Si considera que el tratamiento no se ajusta a la normativa vigente, puede presentar una reclamación ante la Autoridad Nacional de Protección de Datos Personales del Perú (ANPDP).`,
  },
];

export default function PoliticaDePrivacidad() {
  return (
    <>
      {/* Header */}
      <header
        className="py-5 px-6 flex items-center justify-between"
        style={{ backgroundColor: "#1a2f5e" }}
      >
        <Link href="/" className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-extrabold"
            style={{ backgroundColor: "#41588e" }}
          >
            GE
          </div>
          <span className="text-white font-bold text-sm">Grupo EADES</span>
        </Link>
        <Link
          href="/"
          className="text-white/70 hover:text-white text-sm transition-colors flex items-center gap-1.5"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver al inicio
        </Link>
      </header>

      {/* Hero */}
      <div
        className="py-16 px-6 text-center"
        style={{
          background: "linear-gradient(140deg, #1a2f5e 0%, #41588e 100%)",
        }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Política de Privacidad
        </h1>
        <p className="text-white/60 text-sm">
          Última actualización: 12 de marzo de 2026
        </p>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-gray-600 leading-relaxed mb-12 text-base">
          En Grupo EADES nos comprometemos a proteger y respetar su privacidad.
          Esta política explica cómo recopilamos, usamos y protegemos sus datos
          personales cuando visita nuestro sitio web{" "}
          <span className="font-medium text-gray-800">grupoeades.com</span>,
          conforme a la legislación peruana vigente en materia de protección de
          datos personales.
        </p>

        <div className="flex flex-col gap-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2
                className="text-lg font-bold mb-3"
                style={{ color: "#1a2f5e" }}
              >
                {s.title}
              </h2>
              <div
                className="w-8 h-0.5 rounded-full mb-4"
                style={{ backgroundColor: "#b0c4df" }}
              />
              <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">
                {s.content}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer mínimo */}
      <footer
        className="py-8 px-6 text-center text-xs"
        style={{ backgroundColor: "#0f1e3d", color: "rgba(255,255,255,0.35)" }}
      >
        © {new Date().getFullYear()} Grupo EADES. Todos los derechos reservados. —{" "}
        <Link href="/" className="hover:text-white transition-colors">
          grupoeades.com
        </Link>
      </footer>
    </>
  );
}
