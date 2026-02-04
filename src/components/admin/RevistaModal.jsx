import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaUpload } from 'react-icons/fa';
import { revistasAPI } from '../../services/api';
import { toast } from 'react-toastify';

const RevistaModal = ({ revista, onClose }) => {
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    numero_edicion: '',
    fecha_publicacion: '',
    activo: true,
  });
  const [imagenPortada, setImagenPortada] = useState(null);
  const [archivoPdf, setArchivoPdf] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (revista) {
      setFormData({
        titulo: revista.titulo || '',
        descripcion: revista.descripcion || '',
        numero_edicion: revista.numero_edicion || '',
        fecha_publicacion: revista.fecha_publicacion ? revista.fecha_publicacion.split('T')[0] : '',
        activo: revista.activo ?? true,
      });
    }
  }, [revista]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      if (imagenPortada) {
        data.append('imagen_portada', imagenPortada);
      }

      if (archivoPdf) {
        data.append('archivo_pdf', archivoPdf);
      }

      if (revista) {
        await revistasAPI.update(revista.id, data);
        toast.success('Revista actualizada exitosamente');
      } else {
        await revistasAPI.create(data);
        toast.success('Revista creada exitosamente');
      }

      onClose(true);
    } catch (error) {
      console.error('Error al guardar revista:', error);
      toast.error(error.response?.data?.message || 'Error al guardar revista');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-primary">
            {revista ? 'Editar Revista' : 'Nueva Revista'}
          </h2>
          <button
            onClick={() => onClose(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Título <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              placeholder="Ej: Revista Deligma - Edición 1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
            <textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none resize-none"
              placeholder="Descripción de la revista..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Número de Edición</label>
              <input
                type="text"
                name="numero_edicion"
                value={formData.numero_edicion}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                placeholder="Ej: Vol. 1 No. 1"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Fecha de Publicación</label>
              <input
                type="date"
                name="fecha_publicacion"
                value={formData.fecha_publicacion}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FaUpload className="inline mr-2" />
              Imagen de Portada
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImagenPortada(e.target.files[0])}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
            />
            {imagenPortada && (
              <p className="text-sm text-green-600 mt-2">Archivo seleccionado: {imagenPortada.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <FaUpload className="inline mr-2" />
              Archivo PDF
            </label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setArchivoPdf(e.target.files[0])}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
            />
            {archivoPdf && (
              <p className="text-sm text-green-600 mt-2">Archivo seleccionado: {archivoPdf.name}</p>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="activo"
              checked={formData.activo}
              onChange={handleChange}
              className="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label className="ml-2 text-sm font-medium text-gray-700">Revista activa</label>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={() => onClose(false)}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
            >
              {loading ? 'Guardando...' : revista ? 'Actualizar' : 'Crear'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default RevistaModal;
