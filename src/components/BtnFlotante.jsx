import React, { useState, useEffect } from "react";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


const BtnFlotante = ({ telefono = "5491112345678", mensaje = "¡Hola! Vi tu web y quiero más info." }) => {
  // Estado para mostrar el botón de scroll up
  const [visible, setVisible] = useState(false);
  // Estado para mostrar el mensaje flotante
  const [showMsg, setShowMsg] = useState(true);
  // Estado para mostrar el badge de notificación
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showMsg) {
      const timer = setTimeout(() => {
        setShowMsg(false);
        setShowBadge(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showMsg]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-end gap-4 z-50">
      {/* Mensaje flotante con botón de cerrar */}
      <div className={`mb-2 transition-opacity duration-700 flex items-center justify-between gap-2 ${showMsg ? 'opacity-100' : 'opacity-0 pointer-events-none'} bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-semibold`} style={{maxWidth:'260px'}}>
        <span>¡Hola! ¿Necesitás ayuda? Escribime por WhatsApp</span>
        <button
          onClick={() => { setShowMsg(false); setShowBadge(true); }}
          className="ml-2 p-1 rounded-full hover:bg-green-600 focus:outline-none flex items-center justify-center"
          style={{lineHeight:0}}
          aria-label="Cerrar mensaje"
        >
          <IoMdClose size={18} />
        </button>
      </div>
      {/* Botón WhatsApp con badge */}
      <div className="relative">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>
        {showBadge && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full px-1.5 py-0.5 border-2 border-white animate-bounce" style={{minWidth:'18px', minHeight:'18px', lineHeight:'16px', textAlign:'center'}}>1</span>
        )}
      </div>
      {/* Botón Scroll Up */}
      <button
        onClick={scrollToTop}
        className={`p-3 rounded-full bg-blue-600 text-white shadow-lg transition-opacity duration-300 hover:bg-blue-700 focus:outline-none ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        aria-label="Volver arriba"
      >
        <FaArrowUp size={22} />
      </button>
    </div>
  );
};

export default BtnFlotante;
