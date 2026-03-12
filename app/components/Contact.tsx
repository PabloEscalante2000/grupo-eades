export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(140deg, #1a2f5e 0%, #41588e 60%, #5272a8 100%)",
      }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute right-0 top-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(176,196,223,0.15) 0%, transparent 65%)",
          transform: "translate(20%, -20%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-7"
          style={{
            backgroundColor: "rgba(176,196,223,0.15)",
            color: "#b0c4df",
            border: "1px solid rgba(176,196,223,0.3)",
          }}
        >
          Ponte en contacto
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          ¿Tienes un proyecto o colaboración{" "}
          <br className="hidden sm:block" />
          en mente?
        </h2>

        <p className="text-white/65 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Escríbenos y cuéntanos sobre tu institución u organización. Estaremos
          encantados de explorar cómo podemos trabajar juntos.
        </p>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {[
            {
              icon: (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              ),
              label: "Correo electrónico",
              value: "contacto@grupoeades.com",
            },
            {
              icon: (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              ),
              label: "Teléfono",
              value: "+51 (1) 000-0000",
            },
            {
              icon: (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              ),
              label: "Ubicación",
              value: "Lima, Perú",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl p-6 flex flex-col items-center gap-3"
              style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-white"
                style={{ backgroundColor: "rgba(176,196,223,0.2)" }}
              >
                {item.icon}
              </div>
              <p className="text-white/50 text-xs uppercase tracking-widest font-semibold">
                {item.label}
              </p>
              <p className="text-white font-semibold text-sm">{item.value}</p>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="mailto:contacto@grupoeades.com"
          className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full font-semibold text-sm transition-all hover:scale-[1.03] hover:shadow-xl"
          style={{ backgroundColor: "#b0c4df", color: "#2d3f6b" }}
        >
          Enviar un mensaje
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
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
