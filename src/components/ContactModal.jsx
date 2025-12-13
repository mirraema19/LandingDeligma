import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiX, 
  FiMapPin, 
  FiMail, 
  FiPhone, 
  FiLinkedin, 
  FiFacebook, 
  FiInstagram 
} from 'react-icons/fi';

// --- DATOS DE LA INSTITUCIÓN ---
const contactInfo = [
  {
    icon: <FiMapPin size={20} />,
    label: 'Dirección',
    // 1. TEXTO DE LA DIRECCIÓN ACTUALIZADO
    value: 'Universidad del Mar, Campus Huatulco Km 250, México 200, 70989 Bahías de Huatulco, Oax.',
    href: 'https://maps.google.com/?q=Universidad+del+Mar+Campus+Huatulco'
  },
  {
    icon: <FiMail size={20} />,
    label: 'Correo Electrónico',
    value: 'delegacion.imariscal@aulavirtual.umar.mx',
    href: 'mailto:delegacion.imariscal@aulavirtual.umar.mx'
  },
  {
    icon: <FiPhone size={20} />,
    label: 'Teléfono',
    value: '+52 (958) 119 4407',
    href: 'tel:+529581234567'
  }
];

const socialLinks = [
  { 
    icon: <FiFacebook size={24} />, 
    href: 'https://www.facebook.com/profile.php?id=100089851896791',
    colorClass: 'text-blue-600 hover:text-blue-700' 
  },
  { 
    icon: <FiInstagram size={24} />, 
    href: 'https://www.instagram.com/deligma.umar/',
    colorClass: 'text-pink-600 hover:text-pink-700' 
  }
];
// ---------------------------------


const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
            onClick={onClose}
          ></motion.div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative z-10 bg-white rounded-xl shadow-2xl w-full max-w-md p-8 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors"
            >
              <FiX size={24} />
            </button>

            <h2 className="text-3xl font-bold text-primary mb-2">Información de Contacto 📞</h2>
            <p className="text-gray-500 mb-8">Estamos aquí para ayudarte. No dudes en comunicarte.</p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 p-3 rounded-lg hover:bg-light-gray transition-colors group"
                >
                  <div className="text-accent mt-1">{item.icon}</div>
                  <div>
                    <p className="font-semibold text-primary">{item.label}</p>
                    <p className="text-gray-600 group-hover:text-accent transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="font-semibold text-primary mb-4">Síguenos en nuestras redes</p>
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`${social.colorClass} hover:scale-110 transition-all duration-300`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;