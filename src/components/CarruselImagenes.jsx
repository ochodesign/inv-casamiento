import React, { useState, useRef, useEffect } from "react";
import Modal from "./Modal";

const images = [
  "/img/galeria/galeria1.webp",
  "/img/galeria/galeria2.webp",
  "/img/galeria/galeria3.webp",
  "/img/galeria/galeria4.webp"
];


function CarruselImagenes() {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const timeoutRef = useRef();
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const modalTouchStartX = useRef(null);
  const modalTouchEndX = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  // Soporte de teclado global para modal
  useEffect(() => {
    if (!modalOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setModalOpen(false);
      if (e.key === 'ArrowLeft') setCurrent((prev) => (prev - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') setCurrent((prev) => (prev + 1) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, images.length]);

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
            className="aspect-[4/3] md:aspect-[21/9] bg-gray-200 flex items-center justify-center select-none cursor-zoom-in"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={() => setModalOpen(true)}
            title="Ampliar imagen"
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
        {/* Modal de imagen ampliada */}
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <div
            className="fixed inset-0 flex items-center justify-center z-50"
            onClick={e => {
              // Solo cerrar si el click es en el fondo, no en la imagen ni en los controles
              if (e.target === e.currentTarget) setModalOpen(false);
            }}
          >
            <div
              className="relative flex items-center justify-center bg-black rounded-2xl overflow-hidden"
              style={{ minHeight: '60vw', minWidth: '60vw', maxHeight: '80vh' }}
              onTouchStart={e => (modalTouchStartX.current = e.touches[0].clientX)}
              onTouchMove={e => (modalTouchEndX.current = e.touches[0].clientX)}
              onTouchEnd={() => {
                if (modalTouchStartX.current !== null && modalTouchEndX.current !== null) {
                  const diff = modalTouchStartX.current - modalTouchEndX.current;
                  if (Math.abs(diff) > 50) {
                    if (diff > 0) {
                      setCurrent((prev) => (prev + 1) % images.length);
                    } else {
                      setCurrent((prev) => (prev - 1 + images.length) % images.length);
                    }
                  }
                }
                modalTouchStartX.current = null;
                modalTouchEndX.current = null;
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Botón de cerrar absolutamente posicionado sobre la imagen, siempre visible */}
              <button
                className="absolute top-2 right-2 md:top-4 md:right-4 text-white text-3xl font-bold bg-black/70 rounded-full px-3 py-1 md:px-4 md:py-2 hover:bg-black/90 transition z-50 shadow-lg focus:outline-none"
                style={{ minWidth: 40 }}
                onClick={() => setModalOpen(false)}
                aria-label="Cerrar"
              >
                ×
              </button>
              {/* Botón de cerrar removido, ahora solo en Modal.jsx */}
              {/* Flecha izquierda */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white text-3xl rounded-full p-2 z-20"
                onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
                aria-label="Anterior"
                style={{ minWidth: 40 }}
              >
                &#8592;
              </button>
              <img
                src={images[current]}
                alt={`Imagen ampliada ${current + 1}`}
                className="max-h-[80vh] max-w-full w-auto h-auto object-contain mx-auto select-none bg-black"
                draggable="false"
              />
              {/* Flecha derecha */}
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white text-3xl rounded-full p-2 z-20"
                onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
                aria-label="Siguiente"
                style={{ minWidth: 40 }}
              >
                &#8594;
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
}

export default CarruselImagenes;
