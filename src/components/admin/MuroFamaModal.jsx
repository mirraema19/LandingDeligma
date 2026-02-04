import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaPlus, FaTrash } from 'react-icons/fa';
import { muroFamaAPI } from '../../services/api';
import { toast } from 'react-toastify';

const MuroFamaModal = ({ miembro, onClose }) => {
  const [formData, setFormData] = useState({ nombre: '', descripcion: '', orden: 0, activo: true });
  const [logros, setLogros] = useState(['']);
  const [imagen, setImagen] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (miembro) {
      setFormData({
        nombre: miembro.nombre || '',
        descripcion: miembro.descripcion || '',
        orden: miembro.orden || 0,
        activo: miembro.activo ?? true,
      });
      setLogros(miembro.logros?.map(l => l.logro) || ['']);
    }
  }, [miembro]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleLogroChange = (index, value) => {
    const newLogros = [...logros];
    newLogros[index] = value;
    setLogros(newLogros);
  };

  const addLogro = () => setLogros([...logros, '']);
  const removeLogro = (index) => setLogros(logros.filter((_, i) => i !== index));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();

      // Agregar campos del formulario
      data.append('nombre', formData.nombre);
      data.append('descripcion', formData.descripcion || '');
      data.append('orden', formData.orden || 0);
      data.append('activo', formData.activo);

      // Filtrar logros vacíos y agregar como JSON
      const logrosValidos = logros.filter(l => l && l.trim());
      data.append('logros', JSON.stringify(logrosValidos));

      // Agregar imagen si existe
      if (imagen) {
        data.append('imagen', imagen);
      }

      if (miembro) {
        await muroFamaAPI.update(miembro.id, data);
        toast.success('Miembro actualizado');
      } else {
        await muroFamaAPI.create(data);
        toast.success('Miembro creado');
      }
      onClose(true);
    } catch (error) {
      console.error('Error al guardar:', error);
      toast.error(error.response?.data?.message || 'Error al guardar');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-8">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-primary">{miembro ? 'Editar Miembro' : 'Nuevo Miembro'}</h2>
          <button onClick={() => onClose(false)} className="text-gray-400 hover:text-gray-600"><FaTimes className="text-2xl" /></button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nombre *</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
            <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} rows="2" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none resize-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Logros</label>
            {logros.map((logro, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input type="text" value={logro} onChange={(e) => handleLogroChange(index, e.target.value)} className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" placeholder="Ej: DUMUN 2025 - Mención honorífica" />
                {logros.length > 1 && <button type="button" onClick={() => removeLogro(index)} className="bg-red-500 text-white px-3 rounded-lg hover:bg-red-600"><FaTrash /></button>}
              </div>
            ))}
            <button type="button" onClick={addLogro} className="text-primary hover:underline flex items-center gap-2 text-sm"><FaPlus /> Agregar logro</button>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Imagen</label>
            <input type="file" accept="image/*" onChange={(e) => setImagen(e.target.files[0])} className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div className="flex items-center">
            <input type="checkbox" name="activo" checked={formData.activo} onChange={handleChange} className="w-4 h-4 text-primary border-gray-300 rounded" />
            <label className="ml-2 text-sm font-medium text-gray-700">Miembro activo</label>
          </div>
          <div className="flex gap-3 pt-4">
            <button type="button" onClick={() => onClose(false)} className="flex-1 px-6 py-3 border rounded-lg hover:bg-gray-50">Cancelar</button>
            <button type="submit" disabled={loading} className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-lg disabled:opacity-50">
              {loading ? 'Guardando...' : miembro ? 'Actualizar' : 'Crear'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default MuroFamaModal;
