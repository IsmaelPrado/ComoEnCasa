import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import logo from '../assets/ComoEnCasa.png'; // Asegúrate de tener el archivo en la carpeta de assets.

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-[#222222] text-[#f2f2f2] shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo y Nombre */}
        <div className="flex items-center">
          <img src={logo} alt="Logo Como en Casa" className="w-12 h-12 mr-4" />
          <Link to="/" className="text-2xl font-bold hover:text-[#c6e83a] transition-colors">
            Como en Casa
          </Link>
        </div>

        {/* Navegación */}
        <nav>
          <ul className="flex space-x-6">
            {isAuthenticated ? (
              <>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-[#e0e0e0] hover:text-[#c6e83a] font-medium transition-colors"
                  >
                    Dashboard
                  </Link>
                </li>
                {user?.usuario.rol === 'admin' && (
                  <li>
                    <Link
                      to="/admin"
                      className="text-[#e0e0e0] hover:text-[#c6e83a] font-medium transition-colors"
                    >
                      Admin Panel
                    </Link>
                  </li>
                )}
                {user?.usuario.rol === 'usuario' && (
                  <li>
                    <Link
                      to="/user"
                      className="text-[#e0e0e0] hover:text-[#c6e83a] font-medium transition-colors"
                    >
                      User Panel
                    </Link>
                  </li>
                )}
                <li>
                  <button
                    onClick={() => logout()}
                    className="bg-[#a8d13a] hover:bg-[#6f9e2a] text-[#ffffff] font-semibold py-2 px-4 rounded transition-colors"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/"
                    className="text-[#e0e0e0] hover:text-[#c6e83a] font-medium transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="text-[#e0e0e0] hover:text-[#c6e83a] font-medium transition-colors"
                  >
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
