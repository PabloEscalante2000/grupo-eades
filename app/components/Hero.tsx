export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(140deg, #1a2f5e 0%, #2d4a7a 35%, #41588e 70%, #5272a8 100%)",
      }}
    >
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(176,196,223,0.18) 0%, transparent 65%)",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(176,196,223,0.12) 0%, transparent 65%)",
          transform: "translate(-30%, 30%)",
        }}
      />

      {/* Diagonal accent line */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden
      >
        <svg
          className="absolute right-0 top-0 h-full opacity-10"
          viewBox="0 0 400 900"
          preserveAspectRatio="none"
        >
          <line
            x1="400"
            y1="0"
            x2="0"
            y2="900"
            stroke="white"
            strokeWidth="1.5"
          />
          <line
            x1="430"
            y1="0"
            x2="30"
            y2="900"
            stroke="white"
            strokeWidth="0.8"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl">
          {/* Tag */}
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] mb-8"
            style={{
              backgroundColor: "rgba(176,196,223,0.12)",
              color: "#b0c4df",
              border: "1px solid rgba(176,196,223,0.3)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#b0c4df" }}
            />
            Grupo EADES
          </span>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.12] mb-7">
            Salud mental aplicada a{" "}
            <span style={{ color: "#b0c4df" }}>personas</span>,{" "}
            <span style={{ color: "#b0c4df" }}>instituciones</span> y{" "}
            <span style={{ color: "#b0c4df" }}>comunidades</span>
          </h1>

          {/* Description */}
          <p className="text-white/70 text-lg leading-relaxed mb-11 max-w-2xl">
            Grupo EADES conecta práctica clínica, investigación y formación
            especializada para desarrollar programas y colaboraciones con
            instituciones, universidades y organizaciones.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#nuestras-marcas"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm transition-all hover:scale-[1.03] hover:shadow-lg"
              style={{ backgroundColor: "#b0c4df", color: "#2d3f6b" }}
            >
              Explorar nuestras unidades
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
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm text-white transition-all hover:bg-white/10"
              style={{ border: "2px solid rgba(255,255,255,0.35)" }}
            >
              Hablar con nosotros
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs uppercase tracking-widest font-medium">
          Scroll
        </span>
        <div
          className="w-px h-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)",
          }}
        />
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 70"
          className="w-full block"
          style={{ height: 70 }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
