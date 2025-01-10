// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#222222] text-[#f2f2f2] py-4 text-center mt-10"> {/* Fondo negro para el pie de página y texto blanco */}
      <div className="container mx-auto">
        <p>© 2025 Como en Casa. Todos los derechos reservados.</p>
        <div className="mt-2">
          <a
            href="/terms"
            className="text-[#c6e83a] hover:text-[#a8d13a] mx-2" 
          >
            Términos y condiciones
          </a>
          <a
            href="/privacy"
            className="text-[#c6e83a] hover:text-[#a8d13a] mx-2" 
          >
            Política de privacidad
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
