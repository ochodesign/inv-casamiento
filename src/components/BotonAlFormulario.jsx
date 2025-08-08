import React from "react";

// Componente simple: Botón que abre WhatsApp con un mensaje predefinido
function BotonAlFormulario() {
  // Scroll suave al formulario
  const handleClick = e => {
    e.preventDefault();
    const form = document.getElementById('contacto');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#contacto';
    }
  };
  return (
    <a
      href="#contacto"
      onClick={handleClick}
      className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-red-800 via-red-700 to-red-900 border-2 border-red-900 text-white rounded-xl shadow-lg transition-all duration-300 font-semibold text-base hover:from-red-900 hover:to-red-700 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-red-700"
  // title eliminado
    >
      <span role="img" aria-label="Formulario">📝</span>
  {/* Botón 'Ir al Formulario' eliminado */}
    </a>
  );
}

export default BotonAlFormulario;
