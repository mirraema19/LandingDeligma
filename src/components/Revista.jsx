import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Cover1 from '../assets/images/Carrusel1.jpg';
import Cover2 from '../assets/images/Carrusel2.jpg';
import Cover3 from '../assets/images/Carrusel1.jpg';

const Revista = () => {
  return (
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
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-accent mb-4">Nuestra Publicación</h3>
            <p className="text-gray-700 mb-6">
              La Revista Deligma es el corazón editorial de nuestra organización. Una publicación periódica dedicada a difundir conocimiento, inspirar mentes y dar voz a las ideas que están transformando nuestro entorno. Cada edición es una ventana al pensamiento crítico, la creatividad y la innovación.
            </p>

            <h4 className="text-xl font-semibold text-primary mb-3">Contenido de Calidad:</h4>
            <ul className="space-y-2 text-gray-700 list-disc list-inside mb-6">
              <li><strong>Artículos de investigación:</strong> Estudios y análisis profundos sobre temas actuales.</li>
              <li><strong>Entrevistas exclusivas:</strong> Conversaciones con líderes, académicos y agentes de cambio.</li>
              <li><strong>Ensayos y opinión:</strong> Perspectivas diversas sobre temas relevantes.</li>
              <li><strong>Reportajes especiales:</strong> Historias que inspiran y educan.</li>
              <li><strong>Sección cultural:</strong> Arte, literatura y expresiones creativas.</li>
            </ul>

            <h4 className="text-xl font-semibold text-primary mb-3">Próxima Edición:</h4>
            <p className="text-gray-700">
              Estamos preparando contenido fresco y relevante. Convocatoria abierta para colaboradores, escritores e investigadores que deseen compartir su conocimiento y perspectiva con nuestra comunidad.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="rounded-lg overflow-hidden shadow-2xl">
              <div>
                <img src={Cover1} alt="Revista Deligma Edición 1" />
                <p className="legend">Ediciones Anteriores</p>
              </div>
              <div>
                <img src={Cover2} alt="Revista Deligma Edición 2" />
                <p className="legend">Artículos Destacados</p>
              </div>
              <div>
                <img src={Cover3} alt="Revista Deligma Edición 3" />
                <p className="legend">Entrevistas Exclusivas</p>
              </div>
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Revista;