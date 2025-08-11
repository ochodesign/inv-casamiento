import React from "react";


const Hero = () => {
  return (
    <section
      className="relative w-full min-h-[90vh] flex flex-col justify-center items-center text-center bg-cover bg-center hero-bg-responsive overflow-x-hidden px-2"
    >
      <style>{`
        .hero-bg-responsive {
          background-image: url('/img/bg-hero/bgherodk.webp');
        }
        @media (max-width: 639px) {
          .hero-bg-responsive {
            background-image: url('/img/bg-hero/bgheromb.webp') !important;
          }
        }
      `}</style>
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      {/* SVGs decorativos esquinas */}
      <svg className="absolute left-4 top-8 w-32 h-32 opacity-60 hidden md:block" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 80 Q40 10 110 30" stroke="#fff" strokeWidth="2" fill="none" />
        <path d="M30 110 Q80 60 100 100" stroke="#fff" strokeWidth="2" fill="none" />
      </svg>
      <svg className="absolute right-4 bottom-8 w-32 h-32 opacity-60 hidden md:block" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M110 40 Q80 110 10 90" stroke="#fff" strokeWidth="2" fill="none" />
        <path d="M90 10 Q40 60 20 20" stroke="#fff" strokeWidth="2" fill="none" />
      </svg>
      <div className="relative z-10 flex flex-col items-center justify-center h-full py-16 w-full">
        {/* Fecha con líneas */}
        <div className="flex items-center justify-center w-full mb-6">
          <span className="hidden sm:block flex-1 h-px bg-white/40 mr-4"></span>
          <span className="text-white text-lg font-semibold tracking-widest px-2">20.12.2025</span>
          <span className="hidden sm:block flex-1 h-px bg-white/40 ml-4"></span>
        </div>
        {/* Nombres */}
        <h1
          className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-lora font-bold text-white mb-2 drop-shadow-lg flex flex-row items-center gap-2 sm:gap-4 flex-wrap justify-center w-full max-w-full break-words"
          style={{wordBreak:'break-word', lineHeight:'1.1'}}
        >
          Karina
          <span className="text-accent text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-serif mx-2">&</span>
          Sergio
        </h1>
        {/* Frase de amor */}
        <p className="text-white text-lg md:text-2xl font-lora font-light italic mt-6 mb-8 max-w-2xl drop-shadow">
          “El amor no mira con los ojos, sino con el alma.”
        </p>
        {/* Flecha scroll animada */}
        <a href="#evento" className="mt-4 animate-bounce">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
