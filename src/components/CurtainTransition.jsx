import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CurtainTransition = ({ isOpen, onClose, targetPath }) => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNavigate = () => {
    setIsAnimating(true);
    // Esperar a que termine la animación de las cortinas antes de navegar
    setTimeout(() => {
      navigate(targetPath);
      onClose();
      setIsAnimating(false);
    }, 1500);
  };

  React.useEffect(() => {
    if (isOpen && !isAnimating) {
      handleNavigate();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          {/* Cortina izquierda */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: isAnimating ? 0 : '-100%' }}
            exit={{ x: '-100%' }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
            className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-primary via-primary to-primary/90 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
          </motion.div>

          {/* Cortina derecha */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: isAnimating ? 0 : '100%' }}
            exit={{ x: '100%' }}
            transition={{
              duration: 0.8,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
            className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary via-primary to-primary/90 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
          </motion.div>

          {/* Logo/Texto central animado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isAnimating ? 1 : 0, scale: isAnimating ? 1 : 0.5 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              duration: 0.5,
              delay: 0.3,
              ease: "easeOut"
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Revista Deligma
              </h2>
              <div className="w-32 h-1 bg-accent mx-auto rounded-full"></div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CurtainTransition;
