import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import AnimatedBackground from './components/AnimatedBackground';
import HomePage from './pages/HomePage';
import IgnacioMariscalPage from './pages/IgnacioMariscalPage';
import RevistaDeligmaPage from './pages/RevistaDeligmaPage';
import './styles/App.css';

function AppContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const openContactModal = () => setIsModalOpen(true);
  const closeContactModal = () => setIsModalOpen(false);

  // No mostrar Header y Footer en las páginas de Ignacio Mariscal y Revista Deligma
  const showHeaderFooter = location.pathname !== '/ignacio-mariscal' && location.pathname !== '/revista-deligma';

  return (
    <div className="App relative">
      {/* Fondo animado global */}
      <AnimatedBackground />

      {showHeaderFooter && <Header onContactClick={openContactModal} />}

      <main className={showHeaderFooter ? "pt-[76px]" : ""}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ignacio-mariscal" element={<IgnacioMariscalPage />} />
          <Route path="/revista-deligma" element={<RevistaDeligmaPage />} />
        </Routes>
      </main>

      {showHeaderFooter && <Footer />}
      <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;