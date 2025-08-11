
import React from "react";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import InfoEvento from "./components/InfoEvento";
import Galeria from "./components/Galeria";
import FormConfirmacion from "./components/FormConfirmacion";
import Regalos from "./components/Regalos";
import Footer from "./components/Footer";
import BotonWhatsappFlotante from "./components/BotonWhatsappFlotante";

const EVENT_DATE = "2025-12-20T20:00:00";

function App() {
  return (
    <main>
      <Hero />
      <div className="flex justify-center -mt-24 mb-12">
        <Countdown targetDate={EVENT_DATE} />
      </div>
      <Galeria />
      <InfoEvento />
      <FormConfirmacion />
      <Regalos />
      <Footer />
      <BotonWhatsappFlotante telefono="5491122334455" mensaje="¡Hola! Quiero confirmar mi asistencia a la fiesta." />
    </main>
  );
}

export default App;