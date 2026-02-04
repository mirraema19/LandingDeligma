import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import AnimatedBackground from './components/AnimatedBackground';
import HomePage from './pages/HomePage';
import IgnacioMariscalPage from './pages/IgnacioMariscalPage';
import RevistaDeligmaPage from './pages/RevistaDeligmaPage';
import LoginPage from './pages/admin/LoginPage';
import DashboardPage from './pages/admin/DashboardPage';
import ProtectedRoute from './components/admin/ProtectedRoute';
import './styles/App.css';

function AppContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const openContactModal = () => setIsModalOpen(true);
  const closeContactModal = () => setIsModalOpen(false);

  // Atajo de teclado para acceso admin: Ctrl + Shift + A
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        navigate('/admin/login');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  // No mostrar Header y Footer en las páginas de Ignacio Mariscal, Revista Deligma y rutas de admin
  const showHeaderFooter = location.pathname !== '/ignacio-mariscal' &&
                           location.pathname !== '/revista-deligma' &&
                           !location.pathname.startsWith('/admin');

  return (
    <div className="App relative">
      {/* Fondo animado global */}
      <AnimatedBackground />

      {showHeaderFooter && <Header onContactClick={openContactModal} />}

      <main className={showHeaderFooter ? "pt-[76px]" : ""}>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<HomePage />} />
          <Route path="/ignacio-mariscal" element={<IgnacioMariscalPage />} />
          <Route path="/revista-deligma" element={<RevistaDeligmaPage />} />

          {/* Rutas de admin */}
          <Route path="/admin/login" element={<LoginPage />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        </Routes>
      </main>

      {showHeaderFooter && <Footer />}
      {showHeaderFooter && <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />}

      {/* Toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;