import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header({ currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const isRecreoActive = typeof window !== 'undefined' && window.location.pathname === '/recreo';
  const isInicioActive = typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '/#inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      // Detectar sección activa
      const sections = ["inicio", "sobremi", "servicios", "contacto", "recreo"];
      let found = "inicio";
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            found = id;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-white shadow-md" : "bg-gradient-to-b from-gray-900/90 to-gray-800/80 backdrop-blur border-b border-gray-800/40"}
    `}>
      <div className={`max-w-6xl mx-auto px-4 py-3 flex items-center justify-between transition-colors duration-300
        ${scrolled ? "" : "text-white"}
      `}>
        {/* Logo */}
        <a href="#inicio" className={`font-extrabold text-2xl tracking-tight transition-colors duration-300 ${scrolled ? "text-blue-700" : "text-white"}`}>
          Lucas Ochoa
        </a>
        {/* Desktop nav */}
        <nav className={`hidden md:flex gap-8 text-lg font-medium transition-colors duration-300 ${scrolled ? "text-gray-700" : "text-white"}`}>
          {[
            { id: "inicio", label: "Inicio", type: "anchor" },
            { id: "sobremi", label: "Sobre mí", type: "anchor" },
            { id: "servicios", label: "Servicios", type: "anchor" },
            { id: "contacto", label: "Contacto", type: "anchor" },
            { id: "componentes", label: "Componentes", type: "route" },
            { id: "recreo", label: "Recreo", type: "route" }  
          ].map((item) => {
            if (item.type === "route") {
              return (
                <Link
                  key={item.id}
                  to="/recreo"
                  className={`relative px-1 transition duration-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 font-bold
                    ${scrolled ? "hover:text-pink-600" : "hover:text-pink-300"}
                    ${isRecreoActive ? 'font-extrabold text-pink-600' : (scrolled ? 'text-pink-600' : 'text-pink-200')}
                  `}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span
                    className={`absolute left-0 right-0 -bottom-1 h-0.5 rounded bg-pink-600 transition-all duration-300
                      ${isRecreoActive ? 'w-full scale-x-100 opacity-100' : 'w-0 scale-x-0 opacity-0'}`}
                    style={{transitionProperty: 'width, opacity, transform'}}
                  />
                </Link>
              );
            } else {
              // Si estamos en /recreo, los anchors deben llevar a la home
              const isOnRecreo = typeof window !== 'undefined' && window.location.pathname === '/recreo';
              if (isOnRecreo) {
                return (
                  <Link
                    key={item.id}
                    to={`/#${item.id}`}
                    className={`relative px-1 transition duration-200 rounded scroll-smooth focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
                      ${scrolled ? "hover:text-blue-700" : "hover:text-blue-300"}
                    `}
                  >
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                );
              } else {
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`relative px-1 transition duration-200 rounded scroll-smooth focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
                      ${scrolled ? "hover:text-blue-700" : "hover:text-blue-300"}
                      ${item.id === "inicio" && isInicioActive ? 'font-extrabold text-blue-500' : ''}
                      ${activeSection === item.id && item.id !== "inicio" ? (scrolled ? 'font-extrabold text-blue-700' : 'font-extrabold text-blue-300') : ''}
                    `}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span
                      className={`absolute left-0 right-0 -bottom-1 h-0.5 rounded bg-blue-700 transition-all duration-300
                        ${item.id === "inicio" && isInicioActive ? 'w-full scale-x-100 opacity-100' : ''}
                        ${activeSection === item.id && item.id !== "inicio" ? 'w-full scale-x-100 opacity-100' : 'w-0 scale-x-0 opacity-0'}`}
                      style={{transitionProperty: 'width, opacity, transform'}}
                    />
                  </a>
                );
              }
            }
          })}
        </nav>
        {/* Burger menu */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 group relative"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {/* Líneas del burger/X */}
          <span
            className={`absolute left-1/2 top-1/2 w-7 h-0.5 bg-blue-700 rounded transition-all duration-300
              ${menuOpen ? 'rotate-45 -translate-x-1/2 -translate-y-1/2' : '-translate-x-1/2 -translate-y-2.5'}`}
            style={{transitionProperty: 'transform, opacity, background'}}
          ></span>
          <span
            className={`absolute left-1/2 top-1/2 w-7 h-0.5 bg-blue-700 rounded transition-all duration-300
              ${menuOpen ? 'opacity-0' : '-translate-x-1/2 -translate-y-1/2'}`}
            style={{transitionProperty: 'transform, opacity, background'}}
          ></span>
          <span
            className={`absolute left-1/2 top-1/2 w-7 h-0.5 bg-blue-700 rounded transition-all duration-300
              ${menuOpen ? '-rotate-45 -translate-x-1/2 -translate-y-1/2' : '-translate-x-1/2 translate-y-2.5'}`}
            style={{transitionProperty: 'transform, opacity, background'}}
          ></span>
        </button>
      </div>
      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-lg border-t border-gray-100 animate-fade-in-down">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg font-medium">
            {[
              { id: "inicio", label: "Inicio", type: "anchor" },
              { id: "sobremi", label: "Sobre mí", type: "anchor" },
              { id: "servicios", label: "Servicios", type: "anchor" },
              { id: "contacto", label: "Contacto", type: "anchor" },
              { id: "recreo", label: "Recreo", type: "route" },
            ].map((item) => (
              <li key={item.id}>
                {item.type === "route" ? (
                  <Link
                    to="/recreo"
                className={`relative px-1 transition duration-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 font-bold
                  ${scrolled ? "hover:text-blue-700 text-pink-600" : "hover:text-pink-300 text-pink-200"}
                `}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                ) : (
                  <a
                    href={`#${item.id}`}
                    className={`relative px-1 transition duration-200 rounded scroll-smooth focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
                      hover:text-blue-700
                      ${activeSection === item.id ? 'font-extrabold text-blue-700' : ''}
                    `}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span
                      className={`absolute left-0 right-0 -bottom-1 h-0.5 rounded bg-blue-700 transition-all duration-300
                        ${activeSection === item.id ? 'w-full scale-x-100 opacity-100' : 'w-0 scale-x-0 opacity-0'}`}
                      style={{transitionProperty: 'width, opacity, transform'}}
                    />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
