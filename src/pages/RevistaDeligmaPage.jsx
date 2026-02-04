import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiBook, FiEdit, FiUsers, FiAward, FiDownload, FiCalendar } from 'react-icons/fi';
import { revistasAPI, getFileURL } from '../services/api';

const RevistaDeligmaPage = () => {
  const navigate = useNavigate();
  const [revistas, setRevistas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchRevistas();
  }, []);

  const fetchRevistas = async () => {
    try {
      const response = await revistasAPI.getAll(true); // Solo activas
      setRevistas(response.data || []);
      setError(false);
    } catch (error) {
      console.error('Error al cargar revistas:', error);
      setError(true);
      setRevistas([]);
    } finally {
      setLoading(false);
    }
  };

  const formatearFecha = (fecha) => {
    if (!fecha) return '';
    const date = new Date(fecha);
    return date.toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-accent/5">
      {/* Header con botón de regreso */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md"
      >
        <div className="container mx-auto px-6 py-4">
          <button
            onClick={() => navigate('/')}
            className="group flex items-center text-primary hover:text-accent transition-colors duration-300"
          >
            <FiArrowLeft className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="font-semibold">Volver al inicio</span>
          </button>
        </div>
      </motion.div>

      {/* Contenido principal */}
      <section className="py-20 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
              Revista Deligma
            </h1>
            <p className="text-xl text-gray-600">Conocimiento, Inspiración y Voz de Cambio</p>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-4"></div>
          </motion.div>

          {/* Sección informativa */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <FiBook className="mr-3 text-accent" size={28} />
                Nuestra Publicación
              </h3>
              <p className="text-gray-700 leading-relaxed">
                La Revista Deligma es el corazón editorial de nuestra organización. Una publicación
                periódica dedicada a difundir conocimiento, inspirar mentes y dar voz a las ideas que
                están transformando nuestro entorno.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-primary mb-3 flex items-center">
                <FiEdit className="mr-3 text-accent" size={28} />
                Contenido Diverso
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Cada edición es una ventana al pensamiento crítico, la creatividad y la innovación.
                Artículos de investigación, entrevistas exclusivas, ensayos y reportajes especiales.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-primary to-accent p-6 rounded-xl shadow-lg text-white hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-3 flex items-center">
                <FiUsers className="mr-3" size={28} />
                Convocatoria Abierta
              </h3>
              <p className="leading-relaxed">
                Invitamos a colaboradores, escritores e investigadores que deseen compartir su
                conocimiento y perspectiva con nuestra comunidad. ¡Tu voz puede inspirar a miles!
              </p>
            </motion.div>
          </div>

          {/* Sección de Revistas dinámicas desde la API */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-6xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-primary mb-8 text-center flex items-center justify-center">
              <FiAward className="mr-3 text-accent" size={36} />
              Nuestras Ediciones
            </h2>

            {loading && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">Cargando ediciones...</p>
              </div>
            )}

            {error && (
              <div className="text-center py-8 bg-red-50 rounded-xl">
                <p className="text-lg text-red-600">Error al cargar las revistas. Por favor, intenta más tarde.</p>
              </div>
            )}

            {!loading && !error && revistas.length === 0 && (
              <div className="text-center py-12 bg-white/80 rounded-2xl shadow-lg">
                <FiBook className="mx-auto text-gray-400 mb-4" size={48} />
                <p className="text-xl text-gray-600">Próximamente nuevas ediciones.</p>
                <p className="text-gray-500 mt-2">¡Mantente atento a nuestras publicaciones!</p>
              </div>
            )}

            {!loading && !error && revistas.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {revistas.map((revista, index) => (
                  <motion.div
                    key={revista.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Portada de la revista */}
                    <div className="relative h-72 overflow-hidden">
                      {revista.imagen_portada ? (
                        <img
                          src={getFileURL(`revistas/${revista.imagen_portada}`)}
                          alt={revista.titulo}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <FiBook className="text-white" size={64} />
                        </div>
                      )}

                      {/* Overlay con gradiente */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Badge de edición */}
                      {revista.numero_edicion && (
                        <div className="absolute top-3 right-3">
                          <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                            {revista.numero_edicion}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Información de la revista */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                        {revista.titulo}
                      </h3>

                      {revista.fecha_publicacion && (
                        <p className="text-sm text-gray-500 mb-3 flex items-center">
                          <FiCalendar className="mr-2" size={14} />
                          {formatearFecha(revista.fecha_publicacion)}
                        </p>
                      )}

                      {revista.descripcion && (
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {revista.descripcion}
                        </p>
                      )}

                      {/* Botón de descarga PDF */}
                      {revista.archivo_pdf && (
                        <a
                          href={getFileURL(`revistas/${revista.archivo_pdf}`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-5 py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-sm"
                        >
                          <FiDownload size={16} />
                          Leer revista
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Sección de contenido de calidad */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center flex items-center justify-center">
                <FiAward className="mr-3 text-accent" size={36} />
                Contenido de Calidad
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary mb-3">Artículos de Investigación</h4>
                  <p className="text-gray-700">
                    Estudios y análisis profundos sobre temas actuales de relevancia nacional e internacional.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary mb-3">Entrevistas Exclusivas</h4>
                  <p className="text-gray-700">
                    Conversaciones con líderes, académicos y agentes de cambio que están transformando el mundo.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary mb-3">Ensayos y Opinión</h4>
                  <p className="text-gray-700">
                    Perspectivas diversas sobre temas relevantes que invitan a la reflexión y el debate.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-accent/5 to-primary/5 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-primary mb-3">Sección Cultural</h4>
                  <p className="text-gray-700">
                    Arte, literatura y expresiones creativas que enriquecen nuestra comunidad intelectual.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RevistaDeligmaPage;
