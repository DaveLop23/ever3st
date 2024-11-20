import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-center py-4">
      <div className="container px-5">
        <div className="text-white-50 small">
          <div className="mb-2">&copy; Ever3st Group Consulting 2024. Todos los derechos reservados.</div>
          {/* Enlace adicional para acceder a políticas o redes sociales */}
          <div>
            <a href="#" className="text-white-50" aria-label="Política de privacidad">Política de privacidad</a> |
            <a href="#" className="text-white-50" aria-label="Términos y condiciones">Términos y condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
