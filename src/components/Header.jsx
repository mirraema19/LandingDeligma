import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Header = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);
  const navigate = useNavigate();
  const navLinks = ['Nosotros', 'Revista', 'Eventos', 'Convocatorias'];

  const handleContactClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    onContactClick();
  };

  const handleLogoClick = () => {
    setClickCount(prev => prev + 1);

    setTimeout(() => {
      setClickCount(0);
    }, 800);

    if (clickCount === 2) {
      setIsFlashing(true);
      setTimeout(() => {
        setIsFlashing(false);
        navigate('/admin/login');
      }, 300);
      setClickCount(0);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-40 bg-white shadow-md text-primary"
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div
            onClick={handleLogoClick}
            className={`flex items-center space-x-2 cursor-pointer select-none transition-all duration-300 ${
              isFlashing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <span className="text-xl font-bold">UMAR</span>
            <span className="hidden sm:block text-xl font-light">| Deligma</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="font-medium hover:text-accent transition-colors duration-300">
                {item}
              </a>
            ))}
            <button onClick={handleContactClick} className="bg-accent text-white font-bold py-2 px-5 rounded-lg hover:bg-primary transition-all duration-300">
              Contáctanos
            </button>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none text-primary">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Menú Móvil */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="md:hidden fixed top-[76px] left-0 w-full bg-white z-30 shadow-lg"
        >
          <nav className="flex flex-col items-center">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="w-full text-center text-primary text-lg py-4 hover:bg-light-gray transition-colors duration-300">
                {item}
              </a>
            ))}
            <a href="#" onClick={handleContactClick} className="w-full text-center bg-accent text-white font-bold text-lg py-4 hover:bg-primary transition-colors duration-300">
              Contáctanos
            </a>
          </nav>
        </motion.div>
      )}
    </>
  );
};

export default Header;