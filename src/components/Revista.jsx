import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';
import CurtainTransition from './CurtainTransition';

const Revista = () => {
  const [showCurtain, setShowCurtain] = useState(false);

  const handleDiscoverClick = () => {
    setShowCurtain(true);
  };

  return (
    <>
      <section id="revista" className="py-20 bg-light-gray">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-primary">Revista Deligma</h2>
          </motion.div>

          {/* Contenido centralizado con mensaje y botón */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-white p-12 rounded-2xl shadow-xl">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 200
                }}
                className="inline-block mb-6"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                  <FiBookOpen className="text-white" size={48} />
                </div>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-primary mb-6"
              >
                El Corazón Editorial de Deligma
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-xl text-gray-700 mb-8 leading-relaxed"
              >
                Una publicación periódica dedicada a difundir conocimiento, inspirar mentes y dar voz
                a las ideas que están transformando nuestro entorno. Cada edición es una ventana al
                pensamiento crítico, la creatividad y la innovación.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
                className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-xl mb-8"
              >
                <p className="text-lg text-gray-600 mb-2">
                  Artículos de investigación • Entrevistas exclusivas • Ensayos y opinión
                </p>
                <p className="text-lg text-gray-600">
                  Reportajes especiales • Sección cultural
                </p>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 1.2,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDiscoverClick}
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-white text-lg font-semibold rounded-full overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  <FiBookOpen className="mr-2" size={24} />
                  Descubre más sobre las revistas
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent to-primary"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="text-gray-500 mt-6 italic"
              >
                Convocatoria abierta para colaboradores y escritores
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Componente de transición con cortinas */}
      <CurtainTransition
        isOpen={showCurtain}
        onClose={() => setShowCurtain(false)}
        targetPath="/revista-deligma"
      />
    </>
  );
};

export default Revista;