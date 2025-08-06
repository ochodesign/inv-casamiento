import React from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';


import Header from "./components/Header";
import BotonWhatsapp from "./components/BotonWhatsapp";
import BotonAlFormulario from "./components/BotonAlFormulario";
import { FaRocket, FaMobileAlt, FaChartLine, FaUserShield } from "react-icons/fa";
import ContactForm from "./components/ContactForm";
import FadeInSection from "./components/FadeInSection";
import SlideUpSection from "./components/SlideUpSection";
import CarruselImagenes from "./components/CarruselImagenes";
import ComponentesPage from "./pages/Componentes";


// Componente principal que contiene toda la página
function HomeContent() {
  return (
    <div className="font-sans bg-gray-100 min-h-screen">
      <Header />

      {/* Hero Section tipo Showcase */}
      <FadeInSection id="inicio" className="pt-24 min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-700 px-4 text-white relative overflow-hidden">
        {/* Fondo mobile solo visible en mobile */}
        <div className="absolute inset-0 w-full h-full block md:hidden z-0">
          <img 
            src="/img/bg-hero/bg-para-mb.webp" 
            alt="Fondo Hero Mobile" 
            className="w-full h-full object-cover object-top" 
            draggable="false"
          />
          {/* Overlay oscuro para mejorar contraste */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
        {/* Fondo desktop solo visible en md+ */}
        <div className="absolute inset-0 w-full h-full hidden md:block z-0">
          <img 
            src="/img/bg-hero/bg-para-dk.webp" 
            alt="Fondo Hero Desktop" 
            className="w-full h-full object-cover object-top" 
            draggable="false"
          />
          {/* Overlay oscuro para mejorar contraste */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          {/* Izquierda: Texto animado */}
          <div className="flex-1 flex flex-col items-start md:items-start text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="block">Bienvenido a tu</span>
              <span className="text-blue-400">
                <Typewriter
                  words={["One Page", "Landing Page", "Sitio Profesional", "Portfolio Moderno"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1200}
                />
              </span>
            </h1>
            <p className="text-lg md:text-2xl mb-8 text-gray-200 max-w-md">Sitio profesional, moderno y responsivo, pensado para destacar tu marca o servicio.</p>
            <a href="#contacto" className="px-6 py-3 bg-white text-gray-900 rounded-lg shadow hover:bg-gray-200 transition font-semibold">Contáctame</a>
          </div>
          {/* Derecha: Grid animado de servicios */}
          <div className="flex-1 grid grid-cols-2 gap-4 animate-fade-in-up mb-10">
            {/* Lanzamiento Rápido */}
            <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center shadow-lg border border-white/20 hover:scale-105 transition-transform">
              <FaRocket className="w-10 h-10 mb-2 text-pink-400" />
              <span className="font-semibold mb-1">Lanzamiento Rápido</span>
              <span className="text-xs text-gray-200 text-center">Tu web lista en tiempo récord, sin perder calidad ni diseño.</span>
            </div>
            {/* Experiencia Mobile */}
            <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center shadow-lg border border-white/20 hover:scale-105 transition-transform">
              <FaMobileAlt className="w-10 h-10 mb-2 text-blue-400" />
              <span className="font-semibold mb-1">Experiencia Mobile</span>
              <span className="text-xs text-gray-200 text-center">Sitios 100% adaptados a celulares y tablets, siempre rápidos.</span>
            </div>
            {/* Resultados Medibles */}
            <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center shadow-lg border border-white/20 hover:scale-105 transition-transform">
              <FaChartLine className="w-10 h-10 mb-2 text-yellow-400" />
              <span className="font-semibold mb-1">Resultados Medibles</span>
              <span className="text-xs text-gray-200 text-center">Seguimiento de visitas, contactos y conversiones en tiempo real.</span>
            </div>
            {/* Seguridad y Soporte */}
            <div className="bg-white/10 rounded-xl p-6 flex flex-col items-center shadow-lg border border-white/20 hover:scale-105 transition-transform">
              <FaUserShield className="w-10 h-10 mb-2 text-green-400" />
              <span className="font-semibold mb-1">Seguridad & Soporte</span>
              <span className="text-xs text-gray-200 text-center">Tu web protegida y con soporte personalizado siempre disponible.</span>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Sobre mí Section */}
      <FadeInSection id="sobremi" className="py-16 bg-gray-200">
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

      {/* Botones destacados: WhatsApp y Formulario */}
      <div className="flex justify-center gap-4 py-8 bg-white">
        <BotonWhatsapp telefono="5491112345678" mensaje="¡Hola! Vi tu web y quiero más info." />
        <BotonAlFormulario />
      </div>

      {/* Carrusel de imágenes destacado */}
      <CarruselImagenes />

      {/* Servicios Section moderna con imágenes y animación SlideUp */}
      <SlideUpSection id="servicios" className="py-20 bg-gradient-to-b from-gray-50 to-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 tracking-tight">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Servicio 1 */}
            <div className="group bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-2">
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden shadow-lg border-4 border-blue-100 group-hover:border-blue-300 transition-all">
                <img src="/img/servicios/diseno-web.webp" alt="Diseño Web" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Diseño Web Moderno</h3>
              <p className="text-gray-600 text-center text-sm">Sitios visualmente atractivos, responsivos y optimizados para tu marca o negocio.</p>
            </div>
            {/* Servicio 2 */}
            <div className="group bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-2">
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden shadow-lg border-4 border-pink-100 group-hover:border-pink-300 transition-all">
                <img src="/img/servicios/landing-page.webp" alt="Landing Pages" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Landing Pages</h3>
              <p className="text-gray-600 text-center text-sm">Páginas de alto impacto para captar clientes, leads y aumentar conversiones.</p>
            </div>
            {/* Servicio 3 */}
            <div className="group bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-2">
              <div className="w-24 h-24 mb-4 rounded-full overflow-hidden shadow-lg border-4 border-green-100 group-hover:border-green-300 transition-all">
                <img src="/img/servicios/soporte-seo.webp" alt="Soporte y Optimización" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Soporte & SEO</h3>
              <p className="text-gray-600 text-center text-sm">Mantenimiento, mejoras continuas y optimización SEO para crecer online.</p>
            </div>
          </div>
        </div>
      </SlideUpSection>

      {/* Contadores animados de logros */}
      <React.Suspense fallback={null}>
        {React.createElement(require("./components/ContadoresLogros.jsx").default)}
      </React.Suspense>

      {/* Contacto Section angosta y vertical */}
      <FadeInSection id="contacto" className="py-16 bg-gradient-to-t from-gray-700 to-gray-100">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="w-full max-w-md">
            <ContactForm />
          </div>
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

{/* Social Links */}
<div className="flex items-center gap-3">
  <a href="https://www.instagram.com/tuusuario" target="_blank" rel="noopener noreferrer" className="bg-pink-100 hover:bg-pink-200 rounded-full p-2 transition flex items-center justify-center" title="Instagram">
    <img src="/img/social/instagram.svg" alt="Instagram" className="w-5 h-5" />
  </a>
</div>
        </div>
      </footer>
    </div>
  );
}