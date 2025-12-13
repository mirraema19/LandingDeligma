import React from 'react';
import Hero from '../components/Hero';
import Nosotros from '../components/Nosotros';
import Revista from '../components/Revista';
import Novedades from '../components/Novedades';
import Convocatorias from '../components/Convocatorias';
import VisionMisionValores from '../components/VisionMisionValores';
import MuroDeLaFama from '../components/MuroDeLaFama';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Nosotros />
      <Revista />
      <Novedades />
      <Convocatorias />
      <VisionMisionValores />
      <MuroDeLaFama />
    </>
  );
};

export default HomePage;
