const brands = [
  { name: "PSeres", url: "https://pseres.pe" },
  { name: "EADES Psicoterapia", url: "https://eadespsicoterapia.com" },
  { name: "Ilumina", url: "https://asociacionilumina.org" },
  { name: "ITAS", url: "https://institutoitas.com" },
];

const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "¿Qué Hacemos?", href: "#que-hacemos" },
  { label: "Nuestras Marcas", href: "#nuestras-marcas" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0f1e3d" }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xs font-extrabold"
                style={{ backgroundColor: "#41588e" }}
              >
                GE
              </div>
              <span className="font-bold text-white text-base">
                Grupo EADES
              </span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed">
              Conectando práctica clínica, investigación y formación
              especializada en salud mental para personas, instituciones y
              comunidades.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "#b0c4df" }}
            >
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-5"
              style={{ color: "#b0c4df" }}
            >
              Nuestras Marcas
            </h4>
            <ul className="flex flex-col gap-3">
              {brands.map((brand) => (
                <li key={brand.name}>
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 text-sm hover:text-white transition-colors inline-flex items-center gap-1.5 group"
                  >
                    {brand.name}
                    <svg
                      className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
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
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Grupo EADES. Todos los derechos
            reservados.
          </p>
          <p className="text-white/30 text-xs">Lima, Perú</p>
        </div>
      </div>
    </footer>
  );
}
