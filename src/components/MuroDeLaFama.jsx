import React from 'react';
import { motion } from 'framer-motion';
import Miembro1 from '../assets/images/Persona1.jpg';
import Miembro2 from '../assets/images/Persona2.jpg';
import Miembro3 from '../assets/images/Persona3.jpg';

const fameData = [
  {
    img: Miembro1,
    name: 'Marisol Mijangos Cervantes',
    achievements: [
      'Sinium BUAP- Mención honorífica'
    ]
  },
  {
    img: Miembro2,
    name: 'Edgar Baruc Ramírez Cruz',
    achievements: [
      'Meximun 2024 - Mención delegación',
      'UMARMUN 2023 - Mejor delegación',
      'UMARMUN 2024 - Mención honorífica',
      'Sinium BUAP 2024 - Mejor delegación',
      'DUMUN 2025 - Mención honorífica'
    ]
  },
  {
    img: Miembro3,
    name: 'Marisol Mijangos Cervantes',
    achievements: [
      'Meximun 2024 - Mención honorífica',
      'Umarmun 2024 - Mención honorífica',
      'Sinium BUAP 2024 - Mejor delegación',
      'DUMUN 2025 - Mención honorífica'
    ]
  },
];

const MuroDeLaFama = () => {
  return (
    <section id="muro-fama" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Muro de la Fama</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-12">
                <strong>Reconocimiento a la Excelencia:</strong> El Muro de la Fama es nuestro espacio especial para honrar a los miembros excepcionales de la comunidad Deligma que han demostrado compromiso, liderazgo, excelencia académica y dedicación extraordinaria a nuestra misión.
            </p>
        </motion.div>
        {/*
          - 1 columna en móvil (por defecto)
          - 2 columnas en tablets (md)
          - 3 columnas en desktops (lg)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fameData.map((miembro, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg group shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={miembro.img} alt={miembro.name} className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-500 flex flex-col justify-end p-6 text-left">
                <h3 className="text-white text-2xl font-bold opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">{miembro.name}</h3>
                <div className="text-light-blue opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  {miembro.achievements.map((achievement, i) => (
                    <p key={i} className="mb-1">{achievement}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MuroDeLaFama;
