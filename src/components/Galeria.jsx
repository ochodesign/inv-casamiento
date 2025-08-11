import React, { useState } from "react";

const imagenes = [
  "/img/galeria/galeria1.webp",
  "/img/galeria/galeria2.webp",
  "/img/galeria/galeria3.webp",
  "/img/galeria/galeria4.webp",
];

const Galeria = () => {
  const [lightbox, setLightbox] = useState(null);
  return (
    <section className="w-full py-10 px-2 sm:px-4 bg-[#f7f3ef] flex flex-col items-center overflow-x-hidden">
      <h2 className="text-2xl md:text-3xl font-lora font-bold text-[#6b4f27] mb-6">Sobre Nosotros</h2>
      <div className="flex flex-col items-center mb-6">
        <img src="/img/bg-hero/camara-profesional-en-un-borroso.jpg" alt="Karina y Sergio" className="w-32 h-32 rounded-full object-cover border-4 border-[#bfa16a] shadow-lg mb-4" />
        <p className="text-[#6b4f27] font-lora text-center max-w-xl">Nuestra historia juntos está llena de momentos únicos. ¡Queremos compartir este día especial con vos!</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
        {imagenes.map((img, i) => (
          <button key={img} className="focus:outline-none" onClick={() => setLightbox(i)}>
            <img src={img} alt={`Galería ${i+1}`} className="w-32 h-32 object-cover rounded-lg border-2 border-[#bfa16a] shadow hover:scale-105 transition-transform" />
          </button>
        ))}
      </div>
      {lightbox !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setLightbox(null)}>
          <img src={imagenes[lightbox]} alt="Ampliada" className="max-w-[90vw] max-h-[80vh] rounded-lg border-4 border-[#bfa16a] shadow-2xl" />
        </div>
      )}
    </section>
  );
};

export default Galeria;
