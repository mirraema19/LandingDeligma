import React from 'react';
import { motion } from 'framer-motion';

const Nosotros = () => {
  return (
    <section id="nosotros" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-primary mb-12 text-center"
        >
          ¿Quién es Deligma?
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-accent mb-4">Nuestra Esencia</h3>
            <p className="text-gray-700 leading-relaxed">
              Somos una delegación apasionada y comprometida con impulsar la participación estudiantil, el desarrollo profesional y la excelencia académica. Nos dedicamos fervientemente a promover el desarrollo de habilidades de liderazgo, negociación, pensamiento crítico y trabajo en equipo en nuestra comunidad, creyendo firmemente en la capacidad de cada persona para generar un cambio positivo en su entorno y en el mundo.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-accent mb-4">Quiénes Somos</h3>
            <p className="text-gray-700 leading-relaxed">
              Bajo la dirección de Christopher Vargas Sánchez, Deligma es un cuerpo de colaboradores, creadores y visionarios unidos por la pasión de impulsar el crecimiento personal y colectivo. Somos una plataforma que conecta ideas con acciones, talentos con oportunidades, y personas con propósito. Nuestra comunidad está conformada por estudiantes, profesionales, académicos y creativos que comparten la visión de construir un futuro mejor a través del conocimiento, la colaboración y la innovación.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;