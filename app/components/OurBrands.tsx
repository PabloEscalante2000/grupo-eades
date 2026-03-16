"use client";

const brands = [
  {
    name: "EADES",
    tagline: "Psicoterapia para jóvenes y adultos",
    description:
      "Centro especializado en psicoterapia para jóvenes y adultos. Intervención individual y grupal con enfoque basado en evidencia para el desarrollo del bienestar emocional y relacional.",
    url: "https://eadespsicoterapia.com",
    urlLabel: "eadespsicoterapia.com",
    logo: "https://eadespsicoterapia.com/logo_eades.webp",
    bgImage: "https://eadespsicoterapia.com/assets/bg-3.jpg",
    overlayColors: ["rgba(26,47,94,0.72)", "rgba(65,88,142,0.78)"],
    fallback: { from: "#1a2f5e", to: "#41588e" },
    imageLeft: true,
  },
  {
    name: "Pseres",
    tagline: "Psicoterapia y psicoeducación para niños y adolescentes",
    description:
      "Psicoterapia y psicoeducación especializada para niños y adolescentes. Acompañamiento clínico centrado en el desarrollo infantil y la salud mental desde las primeras etapas de vida.",
    url: "https://pseres.pe",
    urlLabel: "pseres.pe",
    logo: "https://pseres.pe/assets/pseres_logo.png",
    bgImage: "https://pseres.pe/assets/porque_elegir_pseres.jpg",
    overlayColors: ["rgba(20,40,80,0.68)", "rgba(55,78,128,0.74)"],
    fallback: { from: "#1a2f5e", to: "#374e80" },
    imageLeft: false,
  },
  {
    name: "ITAS",
    tagline: "Editorial, Instituto de Investigación y Formación Especializada",
    description:
      "Editorial e Instituto de Investigación dedicado a la formación especializada en terapias de tercera generación. Programas de certificación, diplomados y actualización continua para profesionales de la salud mental.",
    url: "https://institutoitas.com",
    urlLabel: "institutoitas.com",
    logo: "/img/itas_icono.png",
    bgImage: "https://institutoitas.com/assets/itas_banner.png",
    overlayColors: ["rgba(22,38,75,0.70)", "rgba(55,78,128,0.76)"],
    fallback: { from: "#162645", to: "#374e80" },
    imageLeft: true,
  },
  {
    name: "Ilumina",
    tagline: "Asociación sin fines de lucro",
    description:
      "Asociación sin fines de lucro dedicada a la intervención social, prevención y trabajo en contextos comunitarios. Programas orientados al bienestar colectivo y la salud mental comunitaria en poblaciones vulnerables.",
    url: "https://asociacionilumina.org",
    urlLabel: "asociacionilumina.org",
    logo: "https://eadespsicoterapia.com/ilumina_logo.png",
    bgImage: "/img/ilumina_fondo.jpg",
    overlayColors: ["rgba(24,50,90,0.80)", "rgba(46,80,128,0.80)"],
    fallback: { from: "#18325a", to: "#2e5080" },
    imageLeft: false,
  },
];

export default function OurBrands() {
  return (
    <section id="nuestras-marcas">
      {/* Section header */}
      <div className="py-20 text-center" style={{ backgroundColor: "#f4f7fb" }}>
        <span
          className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
          style={{ backgroundColor: "#dde8f5", color: "#41588e" }}
        >
          Nuestro ecosistema
        </span>
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
          style={{ color: "#1a2f5e" }}
        >
          Nuestras Marcas
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Cuatro organizaciones especializadas que trabajan en red para ofrecer
          soluciones integrales en salud mental.
        </p>
      </div>

      {/* Brand blocks */}
      {brands.map((brand, i) => (
        <div key={brand.name} className="w-full">
          <div
            className={`flex flex-col ${
              brand.imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Visual / image side */}
            <div
              className="lg:w-1/2 min-h-[360px] lg:min-h-[500px] overflow-hidden"
              style={
                brand.bgImage
                  ? {
                      backgroundImage: `url('${brand.bgImage}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : {
                      background: `linear-gradient(135deg, ${brand.fallback.from} 0%, ${brand.fallback.to} 100%)`,
                    }
              }
            />

            {/* Content side */}
            <div
              className="lg:w-1/2 flex items-center"
              style={{ backgroundColor: i % 2 === 0 ? "#ffffff" : "#f8fafd" }}
            >
              <div className="px-10 py-14 lg:px-16 max-w-xl w-full">
                {/* Logo in content area (colored version) */}
                <div className="mb-7 h-20 flex items-start">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={brand.logo}
                    alt={`Logo ${brand.name}`}
                    className="h-full max-w-[200px] w-auto object-contain object-left"
                    onError={(e) => {
                      const el = e.target as HTMLImageElement;
                      el.style.display = "none";
                      const sibling = el.nextElementSibling as HTMLElement | null;
                      if (sibling) sibling.style.display = "flex";
                    }}
                  />
                  {/* Fallback monogram if logo fails */}
                  <div
                    className="hidden w-14 h-14 rounded-xl items-center justify-center text-white text-sm font-extrabold"
                    style={{ backgroundColor: "#41588e" }}
                  >
                    {brand.name.slice(0, 2).toUpperCase()}
                  </div>
                </div>

                {/* Tagline */}
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: "#41588e" }}
                >
                  {brand.tagline}
                </p>

                {/* Name */}
                <h3
                  className="text-3xl lg:text-4xl font-bold mb-5 leading-tight"
                  style={{ color: "#1a2f5e" }}
                >
                  {brand.name}
                </h3>

                {/* Divider */}
                <div
                  className="w-12 h-1 rounded-full mb-6"
                  style={{ backgroundColor: "#b0c4df" }}
                />

                {/* Description */}
                <p className="text-gray-500 text-base leading-relaxed mb-9">
                  {brand.description}
                </p>

                {/* Link */}
                <a
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-[1.03] hover:shadow-md"
                  style={{ backgroundColor: "#41588e", color: "white" }}
                >
                  Visitar sitio
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>

                <p className="mt-3 text-xs text-gray-400">{brand.urlLabel}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
