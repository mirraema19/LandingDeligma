import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { convocatoriasAPI } from '../services/api';

const Convocatorias = () => {
  const [convocatorias, setConvocatorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchConvocatorias();
  }, []);

  const fetchConvocatorias = async () => {
    try {
      const response = await convocatoriasAPI.getPublicas();
      setConvocatorias(response.data || []);
      setError(false);
    } catch (error) {
      console.error('Error al cargar convocatorias:', error);
      setError(true);
      setConvocatorias([]);
    } finally {
      setLoading(false);
    }
  };

  const formatearFecha = (fecha) => {
    if (!fecha) return 'Por confirmar';
    const date = new Date(fecha);
    return date.toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (loading) {
    return (
      <section id="convocatorias" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-xl">Cargando convocatorias...</p>
        </div>
      </section>
    );
  }

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

        {error && (
          <div className="text-center mb-8 bg-red-500 bg-opacity-20 p-4 rounded-lg">
            <p className="text-lg">Error al cargar las convocatorias. Por favor, intenta más tarde.</p>
          </div>
        )}

        {!error && convocatorias.length === 0 && (
          <div className="text-center mb-8 bg-yellow-500 bg-opacity-20 p-6 rounded-lg">
            <p className="text-xl">No hay convocatorias disponibles en este momento.</p>
            <p className="mt-2 text-light-blue">¡Mantente atento a nuestras próximas convocatorias!</p>
          </div>
        )}

        {!error && convocatorias.length > 0 && (
          <div className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {convocatorias.map((item, index) => (
                <motion.div
                  key={item.id || index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-accent p-6 rounded-lg shadow-lg text-left hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold mb-3">
                    {item.emoji && <span className="mr-2">{item.emoji}</span>}
                    {item.titulo}
                  </h3>
                  <p className="mb-4 text-gray-100">{item.descripcion}</p>

                  <div className="space-y-2">
                    {item.sede && (
                      <p className="font-semibold">
                        <strong>Sede:</strong> {item.sede}
                      </p>
                    )}

                    {item.fecha_inicio && (
                      <p className="font-semibold">
                        <strong>Inicio:</strong> {formatearFecha(item.fecha_inicio)}
                      </p>
                    )}

                    {item.fecha_fin && (
                      <p className="font-semibold">
                        <strong>Fin:</strong> {formatearFecha(item.fecha_fin)}
                      </p>
                    )}

                    {item.enlace_inscripcion && (
                      <div className="mt-4">
                        <a
                          href={item.enlace_inscripcion}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-80 transition-all duration-300 font-semibold"
                        >
                          Inscribirse
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center bg-gray-900 bg-opacity-20 p-6 sm:p-8 rounded-lg"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">¿Quieres Participar?</h3>
          <p className="mb-6 max-w-3xl mx-auto text-sm sm:text-base">
            Estas son oportunidades únicas para desarrollar habilidades de diplomacia y negociación,
            representar a Deligma en foros internacionales, ampliar tu red de contactos, vivir una
            experiencia académica transformadora y trabajar en equipo con delegados comprometidos.
          </p>
          <p className="text-lg sm:text-xl font-bold text-light-blue mb-4">¡Mantente atento a nuestras convocatorias oficiales!</p>
          <div className="text-base sm:text-lg">
            <p className="mb-2">Contacto:</p>
            <a
              href="mailto:delegacion.imariscal@aulavirtual.umar.mx"
              className="text-light-blue hover:underline break-words inline-block max-w-full px-2"
            >
              delegacion.imariscal@aulavirtual.umar.mx
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Convocatorias;