import React from "react";
import { RingsSVG } from "./WeddingSVGs";

const InfoEvento = () => {
  // ...implementación de la sección de información del evento con SVGs decorativos...
  return (
    <section className="relative w-full py-10 px-2 sm:px-4 bg-[#f7f3ef] flex flex-col items-center overflow-x-hidden">
      <div className="flex flex-col items-center mb-8">
        <RingsSVG />
        <h2 className="text-2xl md:text-3xl font-lora font-bold text-[#6b4f27] mt-2">Información del Evento</h2>
      </div>

      {/* Ceremonia */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl mb-8 items-center justify-center">
        <div className="flex flex-row items-center gap-4 bg-white/90 rounded-xl shadow p-4 w-full max-w-xl border border-[#e6e0d3]">
          <div className="flex-shrink-0 flex items-center justify-center">
            <img src="/img/info/iglesia.svg" alt="Ceremonia" className="w-14 h-14 object-contain drop-shadow-md" />
          </div>
          <div className="flex flex-col">
            <span className="font-lora text-[#6b4f27] font-bold text-lg mb-1">Ceremonia</span>
            <span className="text-[#bfa16a] font-semibold">Sábado 20 de diciembre 2025</span>
            <span className="text-[#6b4f27]">17:00 hs</span>
            <span className="text-[#6b4f27]">Iglesia San Juan</span>
            <span className="text-[#6b4f27] text-sm">Calle Falsa 456, Ciudad</span>
          </div>
        </div>
      </div>

      {/* Dress Code */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl mb-8 items-center justify-center">
        <div className="flex flex-row items-center gap-4 bg-white/90 rounded-xl shadow p-4 w-full max-w-xl border border-[#e6e0d3]">
          <div className="flex-shrink-0 flex items-center justify-center">
            <img src="/img/info/elegante.svg" alt="Dress code elegante" className="w-14 h-14 object-contain drop-shadow-md" />
          </div>
          <div className="flex flex-col">
            <span className="font-lora text-[#6b4f27] font-bold text-lg mb-1">¿Cómo ir vestido?</span>
            <span className="text-[#bfa16a] font-semibold">Elegante</span>
            <span className="text-[#6b4f27]">Sugerimos traje y vestido largo</span>
          </div>
        </div>
      </div>

      {/* Fiesta y cómo llegar */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl mb-4 items-center justify-center">
        <div className="flex flex-row items-center gap-4 bg-white/90 rounded-xl shadow p-4 w-full max-w-xl border border-[#e6e0d3]">
          <div className="flex-shrink-0">
            {/* Ícono de ubicación */}
            <svg width="48" height="48" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="20" stroke="#bfa16a" strokeWidth="2" fill="#fff"/>
              <path d="M24 14a8 8 0 0 1 8 8c0 5-8 12-8 12s-8-7-8-12a8 8 0 0 1 8-8zm0 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="#bfa16a"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-lora text-[#6b4f27] font-bold text-lg mb-1">Fiesta</span>
            <span className="text-[#bfa16a] font-semibold">Salón Los Robles</span>
            <span className="text-[#6b4f27]">21:00 hs</span>
            <span className="text-[#6b4f27] text-sm">Av. Siempreviva 123, Ciudad</span>
            <a
              href="https://www.google.com/maps?q=Salón+Los+Robles+Av.+Siempreviva+123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#bfa16a] underline text-sm mt-1"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mb-2">
        <iframe
          title="Mapa Salón Los Robles"
          src="https://www.google.com/maps?q=Salón+Los+Robles+Av.+Siempreviva+123&output=embed"
          width="100%"
          height="220"
          style={{ border: 0, borderRadius: '1rem', maxWidth: 600 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="w-full flex justify-center">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Salón+Los+Robles+Av.+Siempreviva+123"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#4a3314] text-white font-lora font-bold py-2 px-6 rounded shadow hover:bg-[#bfa16a] hover:text-[#4a3314] transition"
        >
          Cómo llegar
        </a>
      </div>
    </section>
  );
};

export default InfoEvento;
