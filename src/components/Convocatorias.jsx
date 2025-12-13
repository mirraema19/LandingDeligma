import React from 'react';
import { motion } from 'framer-motion';

const convocatoriasData = [
  {
    title: 'SINIUM 2026',
    emoji: '🎓',
    desc: 'El SINIUM es el Modelo de Naciones Unidas de la BUAP, dirigido a estudiantes de nivel medio superior y superior, orientado al desarrollo de habilidades de negociación, oratoria y análisis de temas de relevancia nacional e internacional.',
    sede: 'Puebla, México'
  },
  {
    title: 'MINIMUN 2026',
    emoji: '🌐',
    desc: 'MINIMUN es un Modelo de Naciones Unidas que promueve el entendimiento y la transformación del debate, dejando de lado los sesgos y abordando las problemáticas derivadas de la rivalidad política y la polarización de ideas, a través de comités evolutivos orientados al bienestar global.',
    sede: 'Por confirmar'
  },
  {
    title: 'DUMUN 2026',
    emoji: '🏛',
    desc: 'Es un evento nacional en el que estudiantes simulan el trabajo de la ONU, asumiendo el rol de diplomáticos para debatir y proponer soluciones a problemáticas internacionales actuales.',
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
        
        <div className="mb-16">
          {/* Primera fila: 2 cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {convocatoriasData.slice(0, 2).map((item, index) => (
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

          {/* Segunda fila: 1 card centrada */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-accent p-6 rounded-lg shadow-lg text-left md:w-1/2 w-full"
            >
              <h3 className="text-2xl font-bold mb-2">{convocatoriasData[2].emoji} {convocatoriasData[2].title}</h3>
              <p className="mb-4">{convocatoriasData[2].desc}</p>
              <p className="font-semibold"><strong>Sede:</strong> {convocatoriasData[2].sede}</p>
              <p className="font-semibold"><strong>Fecha:</strong> Por confirmar</p>
            </motion.div>
          </div>
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
          <p className="text-xl font-bold text-light-blue mb-4">¡Mantente atento a nuestras convocatorias oficiales!</p>
          <p className="text-lg">
            Contacto: <a href="mailto:delegacion.imariscal@aulavirtual.umar.mx" className="text-light-blue hover:underline">delegacion.imariscal@aulavirtual.umar.mx</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Convocatorias;