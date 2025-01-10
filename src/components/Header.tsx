import React, { forwardRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/ComoEnCasa.png'; // Importa tu logo

// Usamos forwardRef para poder pasar un ref al componente Header
const Header = forwardRef<HTMLHeadingElement, {}>((props, ref) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Verifica si el usuario está autenticado

  const handleLogout = () => {
    localStorage.removeItem('token'); // Elimina el token del localStorage
    navigate('/login'); // Redirige al login después de cerrar sesión
  };

  return (
    <header
      ref={ref} // Asignamos el ref al elemento <header>
      className="bg-[#222222] text-[#f2f2f2] p-4 shadow-lg fixed top-0 left-0 w-full z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo y nombre */}
        <div className="flex items-center">
          <img
            src={Logo} // Cambia esta URL por la de tu logo
            alt="Logo"
            className="mr-2 w-12 h-12" // Redimensiona el logo a 48px x 48px
          />
          <h1 className="text-2xl font-bold text-[#f2f2f2]">¡Como en Casa!</h1> {/* Texto en verde lima */}
        </div>

        {/* Navegación */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-[#a8d13a] transition-colors duration-300"> {/* Hover en verde más oscuro */}
                Inicio
              </Link>
            </li>
            {token ? (
              <>
                <li>
                  <Link to="/menu" className="hover:text-[#a8d13a] transition-colors duration-300">
                    Menú
                  </Link>
                </li>
                <li>
                  <Link to="/order" className="hover:text-[#a8d13a] transition-colors duration-300">
                    Ordenar
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                  >
                    Cerrar sesión
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" className="hover:text-[#a8d13a] transition-colors duration-300">
                  Iniciar sesión
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
});

// Asignamos un displayName al componente para mayor claridad
Header.displayName = 'Header';

export default Header;
