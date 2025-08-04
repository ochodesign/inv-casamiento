import React from "react";

import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import FadeInSection from "./components/FadeInSection";
import SlideUpSection from "./components/SlideUpSection";


function App() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <Header />

      {/* Hero Section */}
      <FadeInSection id="hero" className="pt-24 min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-700 text-center px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Bienvenido a tu One Page</h1>
        <p className="text-lg md:text-2xl mb-8 text-gray-200">Sitio profesional, moderno y responsivo</p>
        <a href="#contacto" className="px-6 py-3 bg-white text-gray-900 rounded-lg shadow hover:bg-gray-200 transition font-semibold">Contáctame</a>
      </FadeInSection>

      {/* Sobre mí Section */}
      <FadeInSection id="sobre-mi" className="py-16 bg-gray-200">
        <div className="container mx-auto px-4 max-w-3xl flex flex-col md:flex-row items-center gap-8">
          <img src="/logo192.png" alt="Foto Lucas Ochoa" className="w-32 h-32 rounded-full shadow-lg mx-auto md:mx-0" />
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left mb-6 text-gray-800">Sobre mí</h2>
            <p className="text-gray-700 text-lg text-center md:text-left">
              Soy Lucas Ochoa, desarrollador web especializado en sitios profesionales, one page y landing pages. Me apasiona crear experiencias digitales modernas, responsivas y optimizadas para cada cliente. Trabajo con tecnologías actuales como React, Tailwind CSS y soluciones backend eficientes. ¡Hablemos de tu próximo proyecto!
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* Servicios Section con animación SlideUp */}
      <SlideUpSection id="servicios" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-200 p-6 rounded shadow text-center">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Diseño Web</h3>
              <p className="text-gray-700">Diseño moderno, responsivo y optimizado para tu marca.</p>
            </div>
            <div className="bg-gray-300 p-6 rounded shadow text-center">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Landing Pages</h3>
              <p className="text-gray-700">Páginas de alto impacto para captar clientes y leads.</p>
            </div>
            <div className="bg-gray-400 p-6 rounded shadow text-center">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Soporte y Optimización</h3>
              <p className="text-gray-800">Mantenimiento, mejoras y optimización SEO.</p>
            </div>
          </div>
        </div>
      </SlideUpSection>

      {/* Contacto Section */}
      <FadeInSection id="contacto" className="py-16 bg-gradient-to-t from-gray-700 to-gray-100">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </FadeInSection>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-10 mt-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          {/* Logo e info */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 mb-2">
              <img src="/logo192.png" alt="Logo" className="w-10 h-10 rounded-full" />
              <span className="text-xl font-bold text-white">MiMarca</span>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-left max-w-xs">Desarrollador web especializado en sitios profesionales, one page y landing pages. ¡Hablemos de tu próximo proyecto!</p>
          </div>

          {/* Navegación */}
          <nav className="flex flex-col items-center gap-2">
            <span className="font-semibold text-gray-300 mb-1">Navegación</span>
            <ul className="flex flex-col md:flex-row gap-2 md:gap-4">
              <li><a href="#hero" className="hover:text-blue-400 transition">Inicio</a></li>
              <li><a href="#sobre-mi" className="hover:text-blue-400 transition">Sobre mí</a></li>
              <li><a href="#servicios" className="hover:text-blue-400 transition">Servicios</a></li>
              <li><a href="#contacto" className="hover:text-blue-400 transition">Contacto</a></li>
            </ul>
          </nav>

          {/* Redes sociales */}
          <div className="flex flex-col items-center gap-2">
            <span className="font-semibold text-gray-300 mb-1">Redes</span>
            <div className="flex gap-4">
              <a href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" className="bg-green-100 hover:bg-green-200 rounded-full p-2 transition flex items-center justify-center" title="WhatsApp">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12a11.93 11.93 0 0 0 1.64 6.06L0 24l6.18-1.62A12.09 12.09 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22a9.93 9.93 0 0 1-5.13-1.41l-.37-.22-3.67.96.98-3.58-.24-.37A9.93 9.93 0 1 1 12 22zm5.47-7.14c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.5-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.37.71.3 1.26.48 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z"/></svg>
              </a>
              <a href="https://www.instagram.com/tuusuario" target="_blank" rel="noopener noreferrer" className="bg-pink-100 hover:bg-pink-200 rounded-full p-2 transition flex items-center justify-center" title="Instagram">
                <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="5"/>
                  <circle cx="17.5" cy="6.5" r="1.5"/>
                </svg>
              </a>
              <a href="mailto:lucas@tucorreo.com" className="bg-blue-100 hover:bg-blue-200 rounded-full p-2 transition flex items-center justify-center" title="Email">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>
              </a>
            </div>
            <span className="text-xs text-gray-400 mt-2">lucas@tucorreo.com</span>
          </div>
        </div>
        <div className="text-center text-gray-500 text-xs mt-8">
          &copy; {new Date().getFullYear()} MiMarca. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;
