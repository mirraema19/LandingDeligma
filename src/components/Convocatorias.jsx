import React from 'react';
import { motion } from 'framer-motion';

const convocatoriasData = [
  { 
    title: 'MINIMUN 2026', 
    emoji: '🌐',
    desc: 'Modelo Internacional de Naciones Unidas. Oportunidad para representar a nuestra delegación en comités internacionales.',
    sede: 'Por confirmar'
  },
  { 
    title: 'SINIUM BUAP 2026', 
    emoji: '🎓',
    desc: 'Simulacro Internacional de Naciones Unidas - Benemérita Universidad Autónoma de Puebla. Uno de los modelos más prestigiosos del país.',
    sede: 'Puebla, México'
  },
  { 
    title: 'DUMUN 2026', 
    emoji: '🏛',
    desc: 'Modelo de Naciones Unidas. Experiencia formativa de alto nivel.',
    sede: 'Por confirmar'
  },
  { 
    title: 'MUNACH 2026', 
    emoji: '🌟',
    desc: 'Modelo de Naciones Unidas. Desarrollo de habilidades diplomáticas y de negociación.',
    sede: 'Por confirmar'
  }
];

const Convocatorias = () => {
  return (
    <section id="convocatorias" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Convocatorias - Modelos de Naciones Unidas 2026</h2>
          <p className="text-lg text-light-blue">Invitaciones Confirmadas para Participar</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {convocatoriasData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-accent p-6 rounded-lg shadow-lg text-left"
            >
              <h3 className="text-2xl font-bold mb-2">{item.emoji} {item.title}</h3>
              <p className="mb-4">{item.desc}</p>
              <p className="font-semibold"><strong>Sede:</strong> {item.sede}</p>
              <p className="font-semibold"><strong>Fecha:</strong> Por confirmar</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center bg-gray-900 bg-opacity-20 p-8 rounded-lg"
        >
          <h3 className="text-3xl font-bold mb-4">¿Quieres Participar?</h3>
          <p className="mb-6 max-w-3xl mx-auto">Estas son oportunidades únicas para desarrollar habilidades de diplomacia y negociación, representar a Deligma en foros internacionales, ampliar tu red de contactos, vivir una experiencia académica transformadora y trabajar en equipo con delegados comprometidos.</p>
          <p className="text-xl font-bold text-light-blue">¡Mantente atento a nuestras convocatorias oficiales!</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Convocatorias;