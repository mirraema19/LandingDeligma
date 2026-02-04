import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaEdit, FaTrash, FaEye, FaEyeSlash, FaBullhorn } from 'react-icons/fa';
import { convocatoriasAPI } from '../../services/api';
import { toast } from 'react-toastify';
import ConvocatoriaModal from './ConvocatoriaModal';
import ConfirmDeleteModal from './ConfirmDeleteModal';

const ConvocatoriasAdmin = () => {
  const [convocatorias, setConvocatorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingConvocatoria, setEditingConvocatoria] = useState(null);
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, convocatoria: null });
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetchConvocatorias();
  }, []);

  const fetchConvocatorias = async () => {
    try {
      setLoading(true);
      const response = await convocatoriasAPI.getAll();
      setConvocatorias(response.data || []);
    } catch (error) {
      toast.error('Error al cargar convocatorias');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (convocatoria) => {
    setDeleteModal({ isOpen: true, convocatoria });
  };

  const handleDeleteConfirm = async () => {
    if (!deleteModal.convocatoria) return;

    try {
      setIsDeleting(true);
      await convocatoriasAPI.delete(deleteModal.convocatoria.id);
      toast.success('Convocatoria eliminada');
      setDeleteModal({ isOpen: false, convocatoria: null });
      fetchConvocatorias();
    } catch (error) {
      toast.error('Error al eliminar');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleDeleteCancel = () => {
    if (!isDeleting) {
      setDeleteModal({ isOpen: false, convocatoria: null });
    }
  };

  const handleToggleActivo = async (id) => {
    try {
      await convocatoriasAPI.toggleActivo(id);
      toast.success('Estado actualizado');
      fetchConvocatorias();
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
            <FaBullhorn />
            Convocatorias
          </h2>
          <p className="text-gray-600 mt-1">Gestiona los eventos y convocatorias</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => { setEditingConvocatoria(null); setModalOpen(true); }}
          className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center justify-center gap-2 hover:shadow-xl transition-all">
          <FaPlus />
          <span>Nueva Convocatoria</span>
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {convocatorias.map((conv) => (
          <motion.div key={conv.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="text-4xl">{conv.emoji || '📢'}</div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${conv.activo ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}>
                {conv.activo ? 'Activa' : 'Inactiva'}
              </span>
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">{conv.titulo}</h3>
            <p className="text-sm text-gray-600 mb-2 line-clamp-2">{conv.descripcion}</p>
            <div className="text-sm text-gray-500 mb-4">
              <p>{conv.sede}</p>
              {conv.fecha_fin && <p>Hasta: {new Date(conv.fecha_fin).toLocaleDateString()}</p>}
            </div>
            <div className="flex gap-2">
              <button onClick={() => { setEditingConvocatoria(conv); setModalOpen(true); }} className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2"><FaEdit /></button>
              <button onClick={() => handleToggleActivo(conv.id)} className={`flex-1 ${conv.activo ? 'bg-gray-500' : 'bg-green-500'} text-white py-2 rounded-lg flex items-center justify-center gap-2`}>
                {conv.activo ? <FaEyeSlash /> : <FaEye />}
              </button>
              <button onClick={() => handleDeleteClick(conv)} className="bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded-lg"><FaTrash /></button>
            </div>
          </motion.div>
        ))}
      </div>

      {modalOpen && <ConvocatoriaModal convocatoria={editingConvocatoria} onClose={(updated) => { setModalOpen(false); if (updated) fetchConvocatorias(); }} />}

      {/* Modal de Confirmacion de Eliminacion */}
      <ConfirmDeleteModal
        isOpen={deleteModal.isOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        title="Eliminar convocatoria"
        message="Esta accion eliminara permanentemente la convocatoria y no se puede deshacer."
        itemName={deleteModal.convocatoria?.titulo}
        isDeleting={isDeleting}
      />
    </div>
  );
};

export default ConvocatoriasAdmin;
