import React from "react";
import { Typewriter } from 'react-simple-typewriter';

import Header from "./components/Header";
import { FaRocket, FaMobileAlt, FaChartLine, FaUserShield } from "react-icons/fa";
import ContactForm from "./components/ContactForm";
import FadeInSection from "./components/FadeInSection";
import SlideUpSection from "./components/SlideUpSection";


function App() {
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

      {/* Botones flotantes */}
      <FloatingButtons />
    </div>
  );
}


// Botón flotante Scroll Up y WhatsApp (solo los botones, sin mensajes)
function FloatingButtons() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 200);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`fixed right-4 bottom-6 z-50 flex flex-col items-end gap-4 transition-all duration-500 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
      {/* WhatsApp */}
      <a
        href="https://wa.me/5491112345678"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="bg-green-500 shadow-lg rounded-full p-3 flex items-center justify-center hover:bg-green-600 transition transform hover:-translate-y-1 animate-fade-in-up"
        style={{ animationDelay: '0.1s' }}
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12a11.93 11.93 0 0 0 1.64 6.06L0 24l6.18-1.62A12.09 12.09 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22a9.93 9.93 0 0 1-5.13-1.41l-.37-.22-3.67.96.98-3.58-.24-.37A9.93 9.93 0 1 1 12 22zm5.47-7.14c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.5-.5-.67-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.37.71.3 1.26.48 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z"/></svg>
      </a>
      {/* Scroll Up */}
      <button
        onClick={scrollUp}
        aria-label="Volver arriba"
        className="bg-white shadow-lg rounded-full p-3 flex items-center justify-center hover:bg-blue-100 transition transform hover:-translate-y-1 animate-fade-in-up"
      >
        <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 15l7-7 7 7"/></svg>
      </button>
    </div>
  );
}

export default App;
