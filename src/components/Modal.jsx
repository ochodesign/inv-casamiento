import React from "react";

import { useEffect } from "react";

export default function Modal({ open, onClose, children }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="absolute inset-0" onClick={onClose} />
        {/* Botón de cerrar fijo arriba a la derecha SOLO en desktop */}
        <button
          className="hidden md:block fixed top-8 right-8 text-white text-4xl font-bold bg-black/80 rounded-full px-5 py-2 hover:bg-black/90 transition z-[999] shadow-lg focus:outline-none"
          onClick={onClose}
          aria-label="Cerrar"
          style={{ minWidth: 48 }}
        >
          ×
        </button>
      <div className="relative z-20 max-w-3xl w-full mx-4">
        {children}
      </div>
    </div>
  );
}
