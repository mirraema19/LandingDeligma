import { motion, AnimatePresence } from 'framer-motion';
import { FaExclamationTriangle, FaTimes, FaTrash } from 'react-icons/fa';

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm, title, message, itemName, isDeleting = false }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && !isDeleting) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
          >
            {/* Header con icono de advertencia */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4"
              >
                <FaExclamationTriangle className="text-white text-3xl" />
              </motion.div>
              <h2 className="text-xl font-bold text-white">
                {title || 'Confirmar eliminacion'}
              </h2>
            </div>

            {/* Contenido */}
            <div className="p-6 text-center">
              <p className="text-gray-600 mb-2">
                {message || 'Esta accion no se puede deshacer.'}
              </p>
              {itemName && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="mt-4 p-3 bg-gray-100 rounded-lg"
                >
                  <p className="text-sm text-gray-500">Se eliminara:</p>
                  <p className="font-semibold text-gray-800 truncate">{itemName}</p>
                </motion.div>
              )}
            </div>

            {/* Botones */}
            <div className="flex gap-3 p-6 pt-0">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                disabled={isDeleting}
                className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancelar
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onConfirm}
                disabled={isDeleting}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-medium hover:from-red-600 hover:to-red-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isDeleting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Eliminando...
                  </>
                ) : (
                  <>
                    <FaTrash />
                    Eliminar
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfirmDeleteModal;
