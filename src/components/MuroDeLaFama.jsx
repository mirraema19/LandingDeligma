import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { muroFamaAPI, getFileURL } from '../services/api';

const MuroDeLaFama = () => {
  const [miembros, setMiembros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchMiembros();
  }, []);

  const fetchMiembros = async () => {
    try {
      const response = await muroFamaAPI.getAll(true); // Solo activos
      setMiembros(response.data || []);
      setError(false);
    } catch (error) {
      console.error('Error al cargar muro de la fama:', error);
      setError(true);
      setMiembros([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="muro-fama" className="py-20 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-xl text-gray-700">Cargando...</p>
        </div>
      </section>
    );
  }

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

        {error && (
          <div className="text-center mb-8 bg-red-500 bg-opacity-20 p-4 rounded-lg">
            <p className="text-lg text-red-700">Error al cargar el muro de la fama. Por favor, intenta más tarde.</p>
          </div>
        )}

        {!error && miembros.length === 0 && (
          <div className="text-center mb-8 bg-yellow-500 bg-opacity-20 p-6 rounded-lg">
            <p className="text-xl text-gray-700">No hay miembros destacados en este momento.</p>
          </div>
        )}

        {!error && miembros.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {miembros.map((miembro, index) => (
              <motion.div
                key={miembro.id}
                className="relative overflow-hidden rounded-lg group shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {miembro.imagen ? (
                  <img
                    src={getFileURL(`muro_fama/${miembro.imagen}`)}
                    alt={miembro.nombre}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-80 bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
                    <span className="text-white text-6xl">🏆</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-500 flex flex-col justify-end p-6 text-left">
                  <h3 className="text-white text-2xl font-bold opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {miembro.nombre}
                  </h3>
                  <div className="text-light-blue opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    {miembro.logros && miembro.logros.map((logro, i) => (
                      <p key={i} className="mb-1">• {logro.logro}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MuroDeLaFama;
