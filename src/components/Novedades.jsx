import React from 'react';
import { motion } from 'framer-motion';

const cardData = [
    {
    title: 'Talleres en Desarrollo',
    items: ['Habilidades de negociación y diplomacia', 'Liderazgo y gestión de equipos', 'Oratoria y debate', 'Redacción académica y profesional'],
    freq: 'Mensual'
  },
  {
    title: 'Modelos y Simulaciones',
    items: ['Simulaciones de Naciones Unidas', 'Debates parlamentarios', 'Casos de estudio y análisis'],
    freq: 'Semestral'
  },
  {
    title: 'Publicaciones Recientes',
    items: ['Nueva edición de la Revista Deligma', 'Artículos destacados en nuestro blog', 'Investigaciones y ensayos académicos', 'Contenido multimedia y podcast'],
    freq: ''
  }
];

const Novedades = () => {
  return (
    <section id="eventos" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-primary text-center mb-12"
        >
          Novedades, Eventos y Publicaciones
        </motion.h2>
        {/*
          - 1 columna en móvil (por defecto)
          - 2 columnas en tablets (md)
          - 3 columnas en desktops (lg)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-light-gray p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-accent mb-4">{card.title}</h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {card.freq && <p className="mt-4 text-primary font-semibold">Frecuencia: {card.freq}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Novedades;