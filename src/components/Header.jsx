import React, { useState, useEffect } from "react";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full font-saira sticky top-0 z-30 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur shadow-lg' : 'bg-white shadow'}`}>
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
          {[
            { id: "inicio", label: "Inicio" },
            { id: "sobremi", label: "Sobre mí" },
            { id: "servicios", label: "Servicios" },
            { id: "contacto", label: "Contacto" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative px-1 transition duration-200 rounded scroll-smooth focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
                hover:text-blue-700
                ${activeSection === item.id ? 'font-extrabold text-blue-700' : ''}
              `}
            >
              <span className="relative z-10">{item.label}</span>
              <span
                className={`absolute left-0 right-0 -bottom-1 h-0.5 rounded bg-blue-700 transition-all duration-300
                  ${activeSection === item.id ? 'w-full scale-x-100 opacity-100' : 'w-0 scale-x-0 opacity-0'}
                `}
                style={{transitionProperty: 'width, opacity, transform'}}
              />
            </a>
          ))}
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
            {[
              { id: "inicio", label: "Inicio" },
              { id: "sobremi", label: "Sobre mí" },
              { id: "servicios", label: "Servicios" },
              { id: "contacto", label: "Contacto" },
            ].map((item) => (
              <li key={item.id}>
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
                      ${activeSection === item.id ? 'w-full scale-x-100 opacity-100' : 'w-0 scale-x-0 opacity-0'}
                    `}
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
