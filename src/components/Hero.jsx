
import React from 'react';
import { motion } from 'framer-motion';
import BackgroundImage from '../assets/images/fondo.png'; 
import { FiArrowRight } from 'react-icons/fi';

const StatCard = ({ value, label }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="bg-white bg-opacity-80 backdrop-blur-sm p-4 rounded-lg shadow-md text-center md:text-left"
    >
      <p className="text-3xl lg:text-4xl font-bold text-accent">{value}+</p>
      <p className="text-sm text-primary">{label}</p>
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full bg-cover bg-center text-white flex items-center py-16 md:py-24"
      style={{ backgroundImage: `url(${BackgroundImage})`, minHeight: 'calc(100vh - 76px)' }}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-r from-[rgba(47,65,86,0.95)] via-[rgba(47,65,86,0.7)] to-transparent"
      ></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="md:max-w-xl lg:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block bg-accent bg-opacity-80 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4"
          >
            Liderazgo, Diplomacia e Innovación
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
          >
            Delegación Institucional Deligma
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg lg:text-xl text-light-blue mb-8"
          >
            Impulsamos la participación estudiantil, el desarrollo profesional y la excelencia académica a través de espacios de formación y debate.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a
              href="#nosotros"
              className="group bg-accent text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:bg-primary hover:scale-105"
            >
              Conócenos más
              <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#revista"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg text-center transition-all duration-300 hover:bg-white hover:text-primary"
            >
              Ver Revista
            </a>
          </motion.div>

          <div className="mt-12 md:mt-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <StatCard value="10" label="Eventos Anuales" />
              <StatCard value="50" label="Miembros Activos" />
              <StatCard value="20" label="Publicaciones" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;