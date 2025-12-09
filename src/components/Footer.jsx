import React from 'react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-primary text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; 2025 Deligma. Todos los derechos reservados.</p>
        <p>Desarrollado con pasión para la excelencia.</p>
        <div className="flex justify-center space-x-6 mt-4">
          {/* Aquí puedes agregar íconos de redes sociales */}
          <a href="#" className="hover:text-light-blue">Facebook</a>
          <a href="#" className="hover:text-light-blue">Twitter</a>
          <a href="#" className="hover:text-light-blue">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;