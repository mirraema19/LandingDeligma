import React from 'react';
import { motion } from 'framer-motion';

const valores = [
    { name: 'Pasión', desc: 'Amor genuino por lo que hacemos y compromiso inquebrantable con nuestra misión.' },
    { name: 'Excelencia', desc: 'Búsqueda constante de la calidad en cada proyecto y publicación.' },
    { name: 'Liderazgo', desc: 'Formación de líderes capaces de inspirar y transformar.' },
    { name: 'Colaboración', desc: 'Trabajo en equipo y construcción colectiva de conocimiento.' },
    { name: 'Integridad', desc: 'Honestidad, transparencia y ética en todas nuestras acciones.' },
    { name: 'Inclusión', desc: 'Espacio abierto para todas las voces y perspectivas.' },
    { name: 'Innovación', desc: 'Creatividad y búsqueda de nuevas formas de generar impacto.' }
];

const VisionMisionValores = () => {
  return (
    <section id="vision" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
             <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-4xl font-bold text-primary"
                >
                Nuestros Pilares
            </motion.h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold text-primary mb-4">Visión</h3>
            <p className="text-gray-700 leading-relaxed">
              Ser la organización estudiantil de referencia en el desarrollo de competencias de liderazgo, diplomacia y pensamiento crítico, reconocida por nuestra excelencia editorial y nuestro impacto en la formación de agentes de cambio comprometidos con la construcción de un mundo más justo, equitativo y colaborativo.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-primary mb-4">Misión</h3>
            <p className="text-gray-700 leading-relaxed">
              Impulsar la participación activa de estudiantes y profesionales en espacios de formación, debate y creación de conocimiento, a través de publicaciones de calidad, eventos formativos y proyectos colaborativos que desarrollen habilidades de negociación, liderazgo y diplomacia, creyendo firmemente en su capacidad para generar un cambio positivo en el mundo.
            </p>
          </motion.div>
        </div>
        
        <div>
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {valores.map((valor, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-light-gray p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 text-center"
                    >
                        <h4 className="font-bold text-accent text-xl mb-3">{valor.name}</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">{valor.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMisionValores;