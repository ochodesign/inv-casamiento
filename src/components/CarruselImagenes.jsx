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
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-800 tracking-tight">Galería Destacada</h2>
        <div className="relative max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-xl">
          <div
            className="aspect-[16/9] bg-gray-200 flex items-center justify-center select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={images[current]}
              alt={`Imagen ${current + 1}`}
              className="w-full h-full object-cover transition-all duration-700 scale-105 hover:scale-110"
              draggable="false"
            />
          </div>
          {/* Dots navegación */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full border-2 border-blue-400 transition-all duration-300 ${current === idx ? 'bg-blue-600 scale-125' : 'bg-white'}`}
                onClick={() => goTo(idx)}
                aria-label={`Ir a imagen ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarruselImagenes;
