import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash, FaEye, FaEyeSlash, FaBook } from 'react-icons/fa';
import { revistasAPI, getFileURL } from '../../services/api';
import { toast } from 'react-toastify';
import RevistaModal from './RevistaModal';
import ConfirmDeleteModal from './ConfirmDeleteModal';

const RevistasAdmin = () => {
  const [revistas, setRevistas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingRevista, setEditingRevista] = useState(null);
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, revista: null });
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetchRevistas();
  }, []);

  const fetchRevistas = async () => {
    try {
      setLoading(true);
      const response = await revistasAPI.getAll();
      setRevistas(response.data || []);
    } catch (error) {
      console.error('Error al cargar revistas:', error);
      toast.error('Error al cargar revistas');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingRevista(null);
    setModalOpen(true);
  };

  const handleEdit = (revista) => {
    setEditingRevista(revista);
    setModalOpen(true);
  };

  const handleDeleteClick = (revista) => {
    setDeleteModal({ isOpen: true, revista });
  };

  const handleDeleteConfirm = async () => {
    if (!deleteModal.revista) return;

    try {
      setIsDeleting(true);
      await revistasAPI.delete(deleteModal.revista.id);
      toast.success('Revista eliminada exitosamente');
      setDeleteModal({ isOpen: false, revista: null });
      fetchRevistas();
    } catch (error) {
      console.error('Error al eliminar revista:', error);
      toast.error('Error al eliminar revista');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleDeleteCancel = () => {
    if (!isDeleting) {
      setDeleteModal({ isOpen: false, revista: null });
    }
  };

  const handleToggleActivo = async (id) => {
    try {
      await revistasAPI.toggleActivo(id);
      toast.success('Estado actualizado');
      fetchRevistas();
    } catch (error) {
      console.error('Error al cambiar estado:', error);
      toast.error('Error al cambiar estado');
    }
  };

  const handleModalClose = (updated) => {
    setModalOpen(false);
    setEditingRevista(null);
    if (updated) fetchRevistas();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-primary flex items-center gap-3">
            <FaBook />
            Gestion de Revistas
          </h2>
          <p className="text-gray-600 mt-1">Administra las publicaciones de Deligma</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCreate}
          className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 hover:shadow-xl transition-all"
        >
          <FaPlus />
          Nueva Revista
        </motion.button>
      </div>

      {/* Grid de Revistas */}
      {revistas.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <FaBook className="text-6xl text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No hay revistas registradas</p>
          <button
            onClick={handleCreate}
            className="mt-4 text-primary hover:underline font-medium"
          >
            Crear la primera revista
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {revistas.map((revista) => (
            <motion.div
              key={revista.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Portada */}
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                {revista.imagen_portada ? (
                  <img
                    src={getFileURL(`revistas/${revista.imagen_portada}`)}
                    alt={revista.titulo}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-accent">
                    <FaBook className="text-white text-5xl" />
                  </div>
                )}

                {/* Badge de estado */}
                <div className="absolute top-2 right-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      revista.activo
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-500 text-white'
                    }`}
                  >
                    {revista.activo ? 'Activa' : 'Inactiva'}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 mb-1 truncate" title={revista.titulo}>
                  {revista.titulo}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{revista.numero_edicion}</p>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                  {revista.descripcion || 'Sin descripcion'}
                </p>

                {/* Acciones */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(revista)}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    title="Editar"
                  >
                    <FaEdit />
                    <span className="hidden sm:inline">Editar</span>
                  </button>
                  <button
                    onClick={() => handleToggleActivo(revista.id)}
                    className={`flex-1 ${
                      revista.activo
                        ? 'bg-gray-500 hover:bg-gray-600'
                        : 'bg-green-500 hover:bg-green-600'
                    } text-white py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-colors`}
                    title={revista.activo ? 'Desactivar' : 'Activar'}
                  >
                    {revista.activo ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  <button
                    onClick={() => handleDeleteClick(revista)}
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded-lg transition-colors"
                    title="Eliminar"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Modal de Edicion/Creacion */}
      {modalOpen && (
        <RevistaModal revista={editingRevista} onClose={handleModalClose} />
      )}

      {/* Modal de Confirmacion de Eliminacion */}
      <ConfirmDeleteModal
        isOpen={deleteModal.isOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        title="Eliminar revista"
        message="Esta accion eliminara permanentemente la revista y no se puede deshacer."
        itemName={deleteModal.revista?.titulo}
        isDeleting={isDeleting}
      />
    </div>
  );
};

export default RevistasAdmin;
