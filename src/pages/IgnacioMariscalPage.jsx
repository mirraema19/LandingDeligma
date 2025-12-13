import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import mariscalImage from '../assets/images/ignacio.jpg';

const IgnacioMariscalPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-accent/5">
      {/* Header con botón de regreso */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md"
      >
        <div className="container mx-auto px-6 py-4">
          <button
            onClick={() => navigate('/')}
            className="group flex items-center text-primary hover:text-accent transition-colors duration-300"
          >
            <FiArrowLeft className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="font-semibold">Volver al inicio</span>
          </button>
        </div>
      </motion.div>

      {/* Contenido principal */}
      <section className="py-20 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              Ignacio Mariscal
            </h1>
            <p className="text-xl text-gray-600">Inspiración y Legado Diplomático</p>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-4"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
            {/* Columna de la imagen */}
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative group">
                {/* Efecto de sombra y borde */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

                {/* Contenedor de la imagen */}
                <div className="relative bg-white p-2 rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={mariscalImage}
                      alt="Ignacio Mariscal"
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Decoración esquinas */}
                <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-primary rounded-tl-2xl opacity-60"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-accent rounded-br-2xl opacity-60"></div>
              </div>
            </motion.div>

            {/* Columna del contenido */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-primary mb-3 flex items-center">
                  <span className="w-2 h-8 bg-accent rounded-full mr-3"></span>
                  Un Legado de Diplomacia
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ignacio Mariscal fue un destacado diplomático, político y jurista mexicano del siglo XIX.
                  Su brillante carrera en el servicio exterior mexicano lo convirtió en una figura fundamental
                  para la consolidación de las relaciones internacionales de México.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-primary mb-3 flex items-center">
                  <span className="w-2 h-8 bg-accent rounded-full mr-3"></span>
                  Contribuciones Destacadas
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Como Secretario de Relaciones Exteriores, defendió la soberanía nacional y promovió
                  la paz y el desarrollo. Su visión estratégica y compromiso con la justicia internacional
                  dejaron una huella imborrable en la historia diplomática de México.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gradient-to-r from-primary to-accent p-6 rounded-xl shadow-lg text-white hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-3 flex items-center">
                  <span className="w-2 h-8 bg-white rounded-full mr-3"></span>
                  Inspiración para Deligma
                </h3>
                <p className="leading-relaxed">
                  Su nombre inspira a nuestra delegación a mantener los más altos estándares de
                  excelencia, integridad y compromiso con el servicio público. Honramos su legado
                  formando líderes capaces de enfrentar los desafíos del siglo XXI.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Sección de biografía extendida */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                Vida y Obra
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Ignacio Mariscal (1829-1910) fue uno de los diplomáticos más destacados de México durante
                  el siglo XIX. Nacido en Oaxaca, se formó como abogado y rápidamente destacó por su
                  inteligencia y habilidad en las negociaciones internacionales.
                </p>
                <p>
                  Durante su extensa carrera, ocupó el cargo de Secretario de Relaciones Exteriores en
                  múltiples ocasiones, donde demostró una extraordinaria capacidad para defender los
                  intereses nacionales mientras mantenía relaciones diplomáticas cordiales con otras naciones.
                </p>
                <p>
                  Su legado incluye la consolidación de tratados importantes, la defensa de la soberanía
                  nacional en momentos críticos, y la formación de una tradición diplomática mexicana
                  basada en el respeto al derecho internacional y la no intervención.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sección de quote inspiracional */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border-l-4 border-primary relative">
              <svg className="absolute top-4 left-4 w-12 h-12 text-primary/20" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z"/>
              </svg>
              <p className="text-xl md:text-2xl text-gray-700 italic text-center pl-8">
                "La diplomacia es el arte de hacer que los demás hagan lo que nosotros queremos,
                haciéndoles creer que es lo que ellos quieren."
              </p>
              <p className="text-right mt-4 text-accent font-semibold">— Inspirado en el legado de Ignacio Mariscal</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default IgnacioMariscalPage;
