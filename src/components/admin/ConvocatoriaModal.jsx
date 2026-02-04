import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { convocatoriasAPI } from '../../services/api';
import { toast } from 'react-toastify';

const ConvocatoriaModal = ({ convocatoria, onClose }) => {
  const [formData, setFormData] = useState({
    titulo: '', emoji: '📢', descripcion: '', sede: '', fecha_inicio: '', fecha_fin: '',
    enlace_inscripcion: '', activo: true, ocultar_vencida: true
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (convocatoria) {
      setFormData({
        titulo: convocatoria.titulo || '',
        emoji: convocatoria.emoji || '📢',
        descripcion: convocatoria.descripcion || '',
        sede: convocatoria.sede || '',
        fecha_inicio: convocatoria.fecha_inicio ? convocatoria.fecha_inicio.split('T')[0] : '',
        fecha_fin: convocatoria.fecha_fin ? convocatoria.fecha_fin.split('T')[0] : '',
        enlace_inscripcion: convocatoria.enlace_inscripcion || '',
        activo: convocatoria.activo ?? true,
        ocultar_vencida: convocatoria.ocultar_vencida ?? true,
      });
    }
  }, [convocatoria]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (convocatoria) {
        await convocatoriasAPI.update(convocatoria.id, formData);
        toast.success('Convocatoria actualizada');
      } else {
        await convocatoriasAPI.create(formData);
        toast.success('Convocatoria creada');
      }
      onClose(true);
    } catch (error) {
      toast.error('Error al guardar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-8">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-primary">{convocatoria ? 'Editar Convocatoria' : 'Nueva Convocatoria'}</h2>
          <button onClick={() => onClose(false)} className="text-gray-400 hover:text-gray-600"><FaTimes className="text-2xl" /></button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Emoji</label>
              <input type="text" name="emoji" value={formData.emoji} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg text-center text-2xl" />
            </div>
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-2">Título *</label>
              <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
            <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} rows="3" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none resize-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sede</label>
            <input type="text" name="sede" value={formData.sede} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fecha Inicio</label>
              <input type="date" name="fecha_inicio" value={formData.fecha_inicio} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fecha Fin</label>
              <input type="date" name="fecha_fin" value={formData.fecha_fin} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Enlace de Inscripción</label>
            <input type="url" name="enlace_inscripcion" value={formData.enlace_inscripcion} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="https://..." />
          </div>
          <div className="flex gap-4">
            <div className="flex items-center">
              <input type="checkbox" name="activo" checked={formData.activo} onChange={handleChange} className="w-4 h-4 text-primary border-gray-300 rounded" />
              <label className="ml-2 text-sm font-medium text-gray-700">Activa</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" name="ocultar_vencida" checked={formData.ocultar_vencida} onChange={handleChange} className="w-4 h-4 text-primary border-gray-300 rounded" />
              <label className="ml-2 text-sm font-medium text-gray-700">Ocultar cuando venza</label>
            </div>
          </div>
          <div className="flex gap-3 pt-4">
            <button type="button" onClick={() => onClose(false)} className="flex-1 px-6 py-3 border rounded-lg hover:bg-gray-50">Cancelar</button>
            <button type="submit" disabled={loading} className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg disabled:opacity-50">
              {loading ? 'Guardando...' : convocatoria ? 'Actualizar' : 'Crear'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ConvocatoriaModal;
