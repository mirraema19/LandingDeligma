import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiBook, FiEdit, FiUsers, FiAward } from 'react-icons/fi';
import Cover1 from '../assets/images/Carrusel1.jpg';
import Cover2 from '../assets/images/Carrusel2.jpg';

const RevistaDeligmaPage = () => {
  const navigate = useNavigate();

  // Scroll al inicio cuando se monta el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              Revista Deligma
            </h1>
            <p className="text-xl text-gray-600">Conocimiento, Inspiración y Voz de Cambio</p>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-4"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
            {/* Columna de las imágenes */}
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative group">
                {/* Efecto de sombra y borde */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

                {/* Grid de portadas */}
                <div className="relative bg-white p-4 rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="overflow-hidden rounded-xl">
                      <img
                        src={Cover1}
                        alt="Revista Deligma Portada 1"
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="overflow-hidden rounded-xl">
                      <img
                        src={Cover2}
                        alt="Revista Deligma Portada 2"
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
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
                  <FiBook className="mr-3 text-accent" size={28} />
                  Nuestra Publicación
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  La Revista Deligma es el corazón editorial de nuestra organización. Una publicación
                  periódica dedicada a difundir conocimiento, inspirar mentes y dar voz a las ideas que
                  están transformando nuestro entorno.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-primary mb-3 flex items-center">
                  <FiEdit className="mr-3 text-accent" size={28} />
                  Contenido Diverso
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Cada edición es una ventana al pensamiento crítico, la creatividad y la innovación.
                  Artículos de investigación, entrevistas exclusivas, ensayos y reportajes especiales.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gradient-to-r from-primary to-accent p-6 rounded-xl shadow-lg text-white hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-3 flex items-center">
                  <FiUsers className="mr-3" size={28} />
                  Convocatoria Abierta
                </h3>
                <p className="leading-relaxed">
                  Invitamos a colaboradores, escritores e investigadores que deseen compartir su
                  conocimiento y perspectiva con nuestra comunidad. ¡Tu voz puede inspirar a miles!
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Sección de contenido de calidad */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center flex items-center justify-center">
                <FiAward className="mr-3 text-accent" size={36} />
                Contenido de Calidad
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary mb-3">Artículos de Investigación</h4>
                  <p className="text-gray-700">
                    Estudios y análisis profundos sobre temas actuales de relevancia nacional e internacional.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary mb-3">Entrevistas Exclusivas</h4>
                  <p className="text-gray-700">
                    Conversaciones con líderes, académicos y agentes de cambio que están transformando el mundo.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary mb-3">Ensayos y Opinión</h4>
                  <p className="text-gray-700">
                    Perspectivas diversas sobre temas relevantes que invitan a la reflexión y el debate.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary mb-3">Sección Cultural</h4>
                  <p className="text-gray-700">
                    Arte, literatura y expresiones creativas que enriquecen nuestra comunidad intelectual.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RevistaDeligmaPage;
