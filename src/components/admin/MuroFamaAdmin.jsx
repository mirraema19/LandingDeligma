import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash, FaEye, FaEyeSlash, FaTrophy } from 'react-icons/fa';
import { muroFamaAPI, getFileURL } from '../../services/api';
import { toast } from 'react-toastify';
import MuroFamaModal from './MuroFamaModal';
import ConfirmDeleteModal from './ConfirmDeleteModal';

const MuroFamaAdmin = () => {
  const [miembros, setMiembros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingMiembro, setEditingMiembro] = useState(null);
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, miembro: null });
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetchMiembros();
  }, []);

  const fetchMiembros = async () => {
    try {
      setLoading(true);
      const response = await muroFamaAPI.getAll();
      setMiembros(response.data || []);
    } catch (error) {
      console.error('Error al cargar miembros:', error);
      toast.error('Error al cargar miembros');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (miembro) => {
    setDeleteModal({ isOpen: true, miembro });
  };

  const handleDeleteConfirm = async () => {
    if (!deleteModal.miembro) return;

    try {
      setIsDeleting(true);
      await muroFamaAPI.delete(deleteModal.miembro.id);
      toast.success('Miembro eliminado exitosamente');
      setDeleteModal({ isOpen: false, miembro: null });
      fetchMiembros();
    } catch (error) {
      toast.error('Error al eliminar miembro');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleDeleteCancel = () => {
    if (!isDeleting) {
      setDeleteModal({ isOpen: false, miembro: null });
    }
  };

  const handleToggleActivo = async (id) => {
    try {
      await muroFamaAPI.toggleActivo(id);
      toast.success('Estado actualizado');
      fetchMiembros();
    } catch (error) {
      toast.error('Error al cambiar estado');
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-64"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>;
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary flex items-center gap-3">
            <FaTrophy />
            Muro de la Fama
          </h2>
          <p className="text-gray-600 mt-1">Gestiona los miembros destacados</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => { setEditingMiembro(null); setModalOpen(true); }}
          className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center justify-center gap-2 hover:shadow-xl transition-all"
        >
          <FaPlus />
          <span>Nuevo Miembro</span>
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {miembros.map((miembro, index) => (
          <motion.div
            key={miembro.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden group relative"
          >
            {/* Imagen principal con efecto hover */}
            <div className="h-80 bg-gray-200 relative overflow-hidden">
              {miembro.imagen ? (
                <img
                  src={getFileURL(`muro_fama/${miembro.imagen}`)}
                  alt={miembro.nombre}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-500 to-yellow-600">
                  <FaTrophy className="text-white text-6xl" />
                </div>
              )}

              {/* Overlay con informacion al hacer hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {miembro.nombre}
                </h3>
                <div className="max-h-32 overflow-y-auto transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  <p className="text-light-blue text-sm font-semibold mb-2">Logros:</p>
                  {miembro.logros && miembro.logros.map((logro, idx) => (
                    <p key={idx} className="text-white text-sm mb-1">• {logro.logro}</p>
                  ))}
                </div>
              </div>

              {/* Badge de estado */}
              <div className="absolute top-3 right-3 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
                  miembro.activo
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-500 text-white'
                }`}>
                  {miembro.activo ? 'Activo' : 'Inactivo'}
                </span>
              </div>
            </div>

            {/* Informacion basica y botones de accion */}
            <div className="p-4 bg-white">
              <h3 className="font-bold text-lg text-gray-800 mb-1 truncate">{miembro.nombre}</h3>
              <p className="text-sm text-gray-500 mb-3">
                {miembro.logros?.length || 0} logro{miembro.logros?.length !== 1 ? 's' : ''}
              </p>

              {/* Botones de accion */}
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { setEditingMiembro(miembro); setModalOpen(true); }}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <FaEdit />
                  <span className="text-sm">Editar</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleToggleActivo(miembro.id)}
                  className={`flex-1 ${
                    miembro.activo ? 'bg-gray-500 hover:bg-gray-600' : 'bg-green-500 hover:bg-green-600'
                  } text-white py-2 rounded-lg flex items-center justify-center gap-2 transition-colors`}
                >
                  {miembro.activo ? <FaEyeSlash /> : <FaEye />}
                  <span className="text-sm">{miembro.activo ? 'Ocultar' : 'Mostrar'}</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleDeleteClick(miembro)}
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors"
                >
                  <FaTrash />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {modalOpen && <MuroFamaModal miembro={editingMiembro} onClose={(updated) => { setModalOpen(false); if (updated) fetchMiembros(); }} />}

      {/* Modal de Confirmacion de Eliminacion */}
      <ConfirmDeleteModal
        isOpen={deleteModal.isOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        title="Eliminar miembro"
        message="Esta accion eliminara permanentemente al miembro del Muro de la Fama y todos sus logros."
        itemName={deleteModal.miembro?.nombre}
        isDeleting={isDeleting}
      />
    </div>
  );
};

export default MuroFamaAdmin;
