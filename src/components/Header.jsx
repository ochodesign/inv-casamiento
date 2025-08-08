import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header({ currentPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  // Eliminada lógica de Recreo
  const isInicioActive = typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '/#inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      // Detectar sección activa
  const sections = ["inicio", "sobremi", "servicios", "contacto"];
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
      ${scrolled ? "bg-base shadow-lg border-b-4 border-primary" : "bg-gradient-to-b from-primary to-base/90 backdrop-blur border-b-4 border-accent/80"}
    `}>
      <div className={`max-w-6xl mx-auto px-4 py-3 flex items-center justify-between transition-colors duration-300
        ${scrolled ? "text-contrast" : "text-contrast"}
      `}>
        {/* Logo */}
        <a href="#inicio" className={`font-extrabold text-2xl tracking-widest uppercase transition-colors duration-300 font-saira ${scrolled ? "text-primary" : "text-accent"}`}>
          Karina Ochoa
        </a>
        {/* Desktop nav */}
  <nav className={`hidden md:flex gap-8 text-lg font-semibold transition-colors duration-300 ${scrolled ? "text-contrast" : "text-contrast"}`}>
          {[
            { id: "inicio", label: "Inicio", type: "anchor" },
            { id: "sobremi", label: "Sobre mí", type: "anchor" },
            { id: "servicios", label: "Servicios", type: "anchor" },
            { id: "contacto", label: "Contacto", type: "anchor" }
          ].map((item) => {
            if (item.type === "route") {
              const isActive = typeof window !== 'undefined' && window.location.pathname === item.to;
              return (
                <Link
                  key={item.id}
                  to={item.to}
                  className={`relative px-1 transition duration-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 font-bold
                    ${scrolled ? "hover:text-pink-600" : "hover:text-pink-300"}
                    ${isActive ? 'font-extrabold text-pink-600' : (scrolled ? 'text-pink-600' : 'text-pink-200')}
                  `}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span
                    className={`absolute left-0 right-0 -bottom-1 h-0.5 rounded bg-pink-600 transition-all duration-300
                      ${isActive ? 'w-full scale-x-100 opacity-100' : 'w-0 scale-x-0 opacity-0'}`}
                    style={{transitionProperty: 'width, opacity, transform'}}
                  />
                </Link>
              );
            } else {
              // Si estamos en /recreo, los anchors deben llevar a la home
              // Eliminada lógica de anchors en Recreo
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`relative px-1 transition duration-200 rounded scroll-smooth focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                      ${scrolled ? "hover:text-accent" : "hover:text-primary"}
                      ${item.id === "inicio" && isInicioActive ? 'font-extrabold text-accent' : ''}
                      ${activeSection === item.id && item.id !== "inicio" ? (scrolled ? 'font-extrabold text-primary' : 'font-extrabold text-accent') : ''}
                    `}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span
                      className={`absolute left-0 right-0 -bottom-1 h-0.5 rounded bg-accent transition-all duration-300
                        ${item.id === "inicio" && isInicioActive ? 'w-full scale-x-100 opacity-100' : ''}
                        ${activeSection === item.id && item.id !== "inicio" ? 'w-full scale-x-100 opacity-100' : 'w-0 scale-x-0 opacity-0'}`}
                      style={{transitionProperty: 'width, opacity, transform'}}
                    />
                  </a>
                );
              
            }
          })}
        </nav>
        {/* Burger menu */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 group relative text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {/* Líneas del burger/X */}
          <span
            className={`absolute left-1/2 top-1/2 w-7 h-0.5 bg-primary rounded transition-all duration-300
              ${menuOpen ? 'rotate-45 -translate-x-1/2 -translate-y-1/2' : '-translate-x-1/2 -translate-y-2.5'}`}
            style={{transitionProperty: 'transform, opacity, background'}}
          ></span>
          <span
            className={`absolute left-1/2 top-1/2 w-7 h-0.5 bg-primary rounded transition-all duration-300
              ${menuOpen ? 'opacity-0' : '-translate-x-1/2 -translate-y-1/2'}`}
            style={{transitionProperty: 'transform, opacity, background'}}
          ></span>
          <span
            className={`absolute left-1/2 top-1/2 w-7 h-0.5 bg-primary rounded transition-all duration-300
              ${menuOpen ? '-rotate-45 -translate-x-1/2 -translate-y-1/2' : '-translate-x-1/2 translate-y-2.5'}`}
            style={{transitionProperty: 'transform, opacity, background'}}
          ></span>
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-base-light shadow-lg border-t-4 border-primary animate-fade-in-down">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg font-semibold">
            {[
              { id: "inicio", label: "Inicio", type: "anchor" },
              { id: "sobremi", label: "Sobre mí", type: "anchor" },
              { id: "servicios", label: "Servicios", type: "anchor" },
              { id: "contacto", label: "Contacto", type: "anchor" }
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`relative px-1 transition duration-200 rounded scroll-smooth focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                    hover:text-primary
                    ${activeSection === item.id ? 'font-extrabold text-accent' : ''}
                  `}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span
                    className={`absolute left-0 right-0 -bottom-1 h-0.5 rounded bg-accent transition-all duration-300
                      ${activeSection === item.id ? 'w-full scale-x-100 opacity-100' : 'w-0 scale-x-0 opacity-0'}`}
                    style={{transitionProperty: 'width, opacity, transform'}}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
