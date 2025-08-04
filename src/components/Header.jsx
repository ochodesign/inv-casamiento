import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow font-saira sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-2xl text-blue-700">
          <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#e0e7ff" />
            <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#1d4ed8" fontFamily="Saira, sans-serif">LO</text>
          </svg>
          Lucas Ochoa
        </a>
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a href="#inicio" className="hover:text-blue-700 transition">Inicio</a>
          <a href="#sobremi" className="hover:text-blue-700 transition">Sobre mí</a>
          <a href="#servicios" className="hover:text-blue-700 transition">Servicios</a>
          <a href="#contacto" className="hover:text-blue-700 transition">Contacto</a>
        </nav>
        {/* Burger menu */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className={`block h-0.5 w-7 bg-blue-700 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-7 bg-blue-700 rounded transition-all duration-300 my-1 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-7 bg-blue-700 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-lg border-t border-gray-100 animate-fade-in-down">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg font-medium">
            <li>
              <a href="#inicio" className="hover:text-blue-700 transition" onClick={() => setMenuOpen(false)}>Inicio</a>
            </li>
            <li>
              <a href="#sobremi" className="hover:text-blue-700 transition" onClick={() => setMenuOpen(false)}>Sobre mí</a>
            </li>
            <li>
              <a href="#servicios" className="hover:text-blue-700 transition" onClick={() => setMenuOpen(false)}>Servicios</a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-blue-700 transition" onClick={() => setMenuOpen(false)}>Contacto</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
