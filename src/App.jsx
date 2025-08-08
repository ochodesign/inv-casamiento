import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FadeInSection from "./components/FadeInSection";
import { Typewriter } from 'react-simple-typewriter';
import BtnFlotante from "./components/BtnFlotante";
// importaciones de botones eliminadas
import { FaCameraRetro, FaEdit, FaCloudDownloadAlt } from "react-icons/fa";
import ContactForm from "./components/ContactForm";
import SlideUpSection from "./components/SlideUpSection";
import CarruselImagenes from "./components/CarruselImagenes";
import AdminLogin from "./components/AdminLogin";
// ...otros imports...
// Eliminados ComponentesPage y Recreo

// Componente principal que contiene toda la página
function HomeContent() {
  return (
  <div className="font-sans bg-base-light min-h-screen">
      <Header />

      {/* Hero Fotografía de Eventos */}
  <FadeInSection id="inicio" className="pt-24 min-h-screen flex flex-col justify-center items-center px-4 text-contrast relative overflow-hidden shadow-lg">
        {/* Fondo hero personalizado */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img 
            src="/img/bg-hero/camara-profesional-en-un-borroso.jpg" 
            alt="Cámara profesional desenfocada" 
            className="w-full h-full object-cover object-center" 
            draggable="false"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="w-full max-w-3xl flex flex-col items-center justify-center gap-8 relative z-10 py-20 bg-base/80 rounded-2xl shadow-2xl border-4 border-primary-light backdrop-blur-md">
          <h1 className="uppercase text-5xl md:text-7xl font-black tracking-widest mb-4 text-contrast drop-shadow-xl text-center font-saira">
            Karina Ochoa
          </h1>
          <h2 className="uppercase text-xl md:text-3xl font-bold tracking-wider mb-6 text-accent text-center">
            Fotografía Profesional de Eventos
          </h2>
          <p className="text-lg md:text-2xl mb-8 text-contrast font-semibold text-center max-w-xl mx-auto drop-shadow">
            Cumpleaños · Casamientos · 15 años · Fiestas · Bautismos · Colegios<br/>
            <span className="block mt-2 text-base md:text-lg font-normal text-primary-light tracking-widest uppercase">Capturando emociones y momentos únicos</span>
          </p>
          <a href="#contacto" className="inline-block bg-accent hover:bg-primary text-base font-bold px-8 py-4 rounded-full shadow-xl text-lg tracking-widest uppercase transition-all duration-200">
            Reservá tu fecha
          </a>
        </div>
      </FadeInSection>

      {/* Sobre mí Fotógrafa */}
  <FadeInSection id="sobremi" className="py-16 bg-primary-light">
        <div className="container mx-auto px-4 max-w-3xl flex flex-col md:flex-row items-center gap-8">
          <img src="/img/karina-ochoa-perfil.webp" alt="Foto Karina Ochoa" className="w-32 h-32 rounded-full shadow-lg mx-auto md:mx-0 border-4 border-primary" />
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left mb-6 text-primary">Sobre mí</h2>
            <p className="text-base text-lg text-center md:text-left">
              Soy Karina Ochoa, fotógrafa profesional especializada en capturar los momentos más importantes de tu vida. Mi misión es inmortalizar emociones y detalles en cumpleaños, casamientos, 15 años, fiestas, bautismos, eventos escolares y mucho más.<br/><br/>
              Con años de experiencia y un enfoque artístico, te ofrezco imágenes auténticas, naturales y llenas de vida. ¡Hablemos y hacé que tus recuerdos sean eternos!
            </p>
          </div>
        </div>
      </FadeInSection>

      {/* Botones destacados: WhatsApp y Formulario */}
  <div className="flex justify-center gap-4 py-8 bg-base-light">
  {/* Botones eliminados */}
      </div>

      {/* Carrusel de imágenes destacado */}
  <div className="py-12 bg-base">
        <CarruselImagenes />
      </div>

      {/* Servicios Section moderna con imágenes y animación SlideUp */}
      <SlideUpSection id="servicios" className="py-20 bg-gradient-to-b from-primary-light to-base-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-primary tracking-widest uppercase">Eventos que Capturo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {/* Casamientos */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-2 cursor-pointer">
              <div className="w-full h-48 overflow-hidden">
                <img src="/img/servicios/casamiento-1.jpg" alt="Casamiento" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide text-primary">Casamientos</h3>
                <p className="text-gray-600 text-sm">Momentos únicos, emociones y detalles de tu boda, capturados para siempre.</p>
              </div>
            </div>
            {/* Bautismos */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-2 cursor-pointer">
              <div className="w-full h-48 overflow-hidden">
                <img src="/img/servicios/comunion.jpg" alt="Bautismo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide text-primary">Bautismos</h3>
                <p className="text-gray-600 text-sm">La ternura y la fe en imágenes delicadas y llenas de luz.</p>
              </div>
            </div>
            {/* 15 años */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-2 cursor-pointer">
              <div className="w-full h-48 overflow-hidden">
                <img src="/img/servicios/cumple-15.jpg" alt="15 años" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide text-primary">15 años</h3>
                <p className="text-gray-600 text-sm">Sueños, alegría y juventud en una noche inolvidable.</p>
              </div>
            </div>
            {/* Egresados */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-2 cursor-pointer">
              <div className="w-full h-48 overflow-hidden">
                <img src="/img/servicios/egresados-jardin.jpg" alt="Egresados" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide text-primary">Egresados</h3>
                <p className="text-gray-600 text-sm">Celebrá el cierre de una etapa con fotos llenas de energía y amistad.</p>
              </div>
            </div>
            {/* Cumpleaños */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-2 cursor-pointer">
              <div className="w-full h-48 overflow-hidden">
                <img src="/img/servicios/cumple-15.jpg" alt="Cumpleaños" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide text-primary">Cumpleaños</h3>
                <p className="text-gray-600 text-sm">Diversión, familia y amigos en imágenes llenas de color y vida.</p>
              </div>
            </div>
            {/* Fiestas y otros eventos */}
            <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-2 cursor-pointer">
              <div className="w-full h-48 overflow-hidden">
                <img src="/img/servicios/casamiento-1.jpg" alt="Fiestas y otros eventos" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide text-primary">Fiestas & Más</h3>
                <p className="text-gray-600 text-sm">Cualquier evento especial merece ser recordado con fotos profesionales.</p>
              </div>
            </div>
          </div>
        </div>
      </SlideUpSection>

      {/* Sección Cómo trabajo */}
      <FadeInSection id="metodologia" className="py-20 bg-base-light">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-primary tracking-widest uppercase">Cómo trabajo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Paso 1: Captura profesional */}
            <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <span className="mb-4 text-primary">
                <FaCameraRetro size={48} />
              </span>
              <h3 className="text-xl font-bold mb-2 text-primary uppercase tracking-wide">Captura profesional</h3>
              <p className="text-gray-700 text-center text-sm">Utilizo cámaras y lentes de alta gama para lograr imágenes nítidas, creativas y llenas de emoción en cada evento.</p>
            </div>
            {/* Paso 2: Edición y retoque */}
            <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <span className="mb-4 text-primary">
                <FaEdit size={48} />
              </span>
              <h3 className="text-xl font-bold mb-2 text-primary uppercase tracking-wide">Edición profesional</h3>
              <p className="text-gray-700 text-center text-sm">Cada foto es seleccionada y editada cuidadosamente con software especializado para resaltar lo mejor de cada momento.</p>
            </div>
            {/* Paso 3: Entrega personalizada */}
            <div className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <span className="mb-4 text-primary">
                <FaCloudDownloadAlt size={48} />
              </span>
              <h3 className="text-xl font-bold mb-2 text-primary uppercase tracking-wide">Entrega personalizada</h3>
              <p className="text-gray-700 text-center text-sm">Recibís tus fotos en alta calidad, listas para compartir o imprimir, en formato digital y con opciones de álbum profesional.</p>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Contadores animados de logros */}
      <React.Suspense fallback={null}>
        {React.createElement(require("./components/ContadoresLogros.jsx").default)}
      </React.Suspense>

      {/* Contacto Section angosta y vertical */}
  <FadeInSection id="contacto" className="py-16 bg-gradient-to-t from-base to-primary-light">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="w-full max-w-md">
            <ContactForm />
          </div>
        </div>
      </FadeInSection>

      {/* Footer */}
  <footer className="bg-base text-contrast py-10 mt-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          {/* Logo e info */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 mb-2">
              <img src="/img/karina-ochoa-perfil.webp" alt="Logo" className="w-10 h-10 rounded-full border-2 border-primary" />
              <span className="text-xl font-bold text-primary-light">Karina Ochoa</span>
            </div>
            <p className="text-base-light text-sm text-center md:text-left max-w-xs">Fotografía profesional de eventos sociales y familiares. ¡Consultá por tu fecha!</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/tuusuario" target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-primary rounded-full p-2 transition flex items-center justify-center" title="Instagram">
              <img src="/img/social/instagram.svg" alt="Instagram" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
      {/* Botones flotantes: WhatsApp y Scroll Up */}
      <BtnFlotante />
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<div className="w-full h-screen flex items-center justify-center text-xl">Cargando...</div>}>
      <Routes>
        <Route path="/" element={<HomeContent />} />
  {/* Rutas eliminadas */}
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </Suspense>
  );
}
export default App;