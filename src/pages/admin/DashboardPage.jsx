import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaBook,
  FaTrophy,
  FaBullhorn,
  FaSignOutAlt,
  FaUser,
  FaBars,
  FaTimes,
  FaHome,
} from 'react-icons/fa';
import RevistasAdmin from '../../components/admin/RevistasAdmin';
import MuroFamaAdmin from '../../components/admin/MuroFamaAdmin';
import ConvocatoriasAdmin from '../../components/admin/ConvocatoriasAdmin';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('revistas');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const goToHomePage = () => {
    navigate('/');
  };

  const menuItems = [
    { id: 'revistas', name: 'Revistas', icon: FaBook, color: 'from-blue-500 to-blue-600' },
    { id: 'muro', name: 'Muro de la Fama', icon: FaTrophy, color: 'from-yellow-500 to-yellow-600' },
    {
      id: 'convocatorias',
      name: 'Convocatorias',
      icon: FaBullhorn,
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <div className="h-screen bg-gray-100 flex overflow-hidden">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        className={`fixed lg:relative inset-y-0 left-0 z-50 w-72 h-screen bg-gradient-to-b from-primary to-accent text-white shadow-2xl transition-all flex flex-col ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex-shrink-0">
          <h1 className="text-2xl font-bold mb-2">Panel Admin</h1>
          <p className="text-sm text-light-blue">Deligma - UMAR</p>
        </div>

        {/* User Info */}
        <div className="p-6 border-b border-white/10 bg-white/5 flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <FaUser className="text-primary text-xl" />
            </div>
            <div>
              <p className="font-semibold text-sm">{user?.nombre_completo}</p>
              <p className="text-xs text-light-blue">{user?.rol}</p>
            </div>
          </div>
        </div>

        {/* Menu */}
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                whileHover={{ x: 5 }}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === item.id
                    ? 'bg-white text-primary shadow-lg'
                    : 'hover:bg-white/10 text-white'
                }`}
              >
                <Icon className="text-xl" />
                <span className="font-medium">{item.name}</span>
              </motion.button>
            );
          })}
        </nav>

        {/* Footer Actions */}
        <div className="p-4 space-y-2 border-t border-white/10 flex-shrink-0">
          <motion.button
            whileHover={{ x: 5 }}
            onClick={goToHomePage}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/10 text-white transition-all"
          >
            <FaHome className="text-xl" />
            <span className="font-medium">Ir al Sitio</span>
          </motion.button>

          <motion.button
            whileHover={{ x: 5 }}
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-red-500/20 text-white transition-all"
          >
            <FaSignOutAlt className="text-xl" />
            <span className="font-medium">Cerrar Sesión</span>
          </motion.button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white shadow-md p-4 flex items-center justify-between lg:hidden flex-shrink-0">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-primary text-2xl hover:bg-gray-100 p-2 rounded-lg transition-colors"
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <h2 className="text-lg font-semibold text-primary">Panel de Administración</h2>
          <div className="w-10" /> {/* Spacer */}
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'revistas' && <RevistasAdmin />}
            {activeTab === 'muro' && <MuroFamaAdmin />}
            {activeTab === 'convocatorias' && <ConvocatoriasAdmin />}
          </motion.div>
        </main>
      </div>

      {/* Overlay para cerrar sidebar en móvil */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardPage;
