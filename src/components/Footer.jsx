import React from 'react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-primary text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; 2025 Deligma. Todos los derechos reservados.</p>
        <p>Desarrollado con pasión para la excelencia.</p>
        <div className="flex justify-center mt-4">
          <a href="mailto:delegacion.imariscal@aulavirtual.umar.mx" className="hover:text-light-blue">delegacion.imariscal@aulavirtual.umar.mx</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;