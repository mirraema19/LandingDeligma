
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BackgroundImage from '../assets/images/fondo.png';
import { FiArrowRight, FiUser } from 'react-icons/fi';

const Hero = () => {
  const navigate = useNavigate();

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
            <button
              onClick={() => navigate('/ignacio-mariscal')}
              className="group bg-light-gray text-primary font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gray-200 relative overflow-hidden"
            >
              <FiUser className="mr-2 transition-transform duration-300 group-hover:rotate-12 text-accent" />
              Conoce a Ignacio Mariscal
              <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1 text-accent" />
            </button>
            <a
              href="#nosotros"
              className="group bg-light-gray text-primary font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gray-200"
            >
              Conócenos más
              <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1 text-accent" />
            </a>
            <a
              href="#revista"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg text-center transition-all duration-300 hover:bg-white hover:text-primary"
            >
              Ver Revista
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;