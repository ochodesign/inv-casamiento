import React, { useState, useRef, useEffect } from "react";

const images = [
  "/img/galeria/galeria1.webp",
  "/img/galeria/galeria2.webp",
  "/img/galeria/galeria3.webp",
  "/img/galeria/galeria4.webp"
];


function CarruselImagenes() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef();
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const goTo = (idx) => setCurrent(idx);

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // Siguiente imagen
          setCurrent((prev) => (prev + 1) % images.length);
        } else {
          // Imagen anterior
          setCurrent((prev) => (prev - 1 + images.length) % images.length);
        }
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-14 text-primary tracking-widest uppercase drop-shadow-lg">Galería de Trabajos</h2>
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-primary-light">
          <div
            className="aspect-[21/9] bg-gray-200 flex items-center justify-center select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={images[current]}
              alt={`Imagen ${current + 1}`}
              className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-105"
              draggable="false"
            />
          </div>
          {/* Dots navegación (ahora justo debajo de la imagen principal) */}
          <div className="flex justify-center gap-3 z-10 mt-4">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`w-5 h-5 rounded-full border-4 border-primary transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2
                  ${current === idx ? 'bg-accent scale-125' : 'bg-white/80'}`}
                onClick={() => goTo(idx)}
                aria-label={`Ir a imagen ${idx + 1}`}
              />
            ))}
          </div>
          {/* Miniaturas debajo de la imagen principal */}
          <div className="flex justify-center gap-4 mt-6 px-2 pb-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`rounded-xl overflow-hidden border-4 transition-all duration-300 focus:outline-none
                  ${current === idx ? 'border-accent shadow-lg brightness-110 scale-105' : 'border-primary-light opacity-70 hover:opacity-100 hover:brightness-105'}`}
                style={{ boxShadow: current === idx ? '0 0 0 4px #fff, 0 0 12px 2px #fbbf24' : undefined }}
                aria-label={`Ver miniatura ${idx + 1}`}
              >
                <img
                  src={img}
                  alt={`Miniatura ${idx + 1}`}
                  className="w-20 h-14 object-cover"
                  draggable="false"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarruselImagenes;
