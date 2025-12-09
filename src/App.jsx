import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Revista from './components/Revista';
import Novedades from './components/Novedades';
import Convocatorias from './components/Convocatorias';
import VisionMisionValores from './components/VisionMisionValores';
import MuroDeLaFama from './components/MuroDeLaFama';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import './styles/App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openContactModal = () => setIsModalOpen(true);
  const closeContactModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <Header onContactClick={openContactModal} />
      
      {/* 
        Este padding-top es la clave para separar el Header del contenido.
        Empuja todo el contenido de la página hacia abajo.
      */}
      <main className="pt-[76px]">
        <Hero />
        <Nosotros />
        <Revista />
        <Novedades />
        <Convocatorias />
        <VisionMisionValores />
        <MuroDeLaFama />
      </main>

      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />
    </div>
  );
}

export default App;