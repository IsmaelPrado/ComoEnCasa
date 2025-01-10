import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home'; // Tu página de inicio
// import Login from './pages/Login'; // Tu página de login
// import Menu from './pages/Menu'; // Página donde los usuarios pueden ver el menú
// import Order from './pages/Order'; // Página donde los usuarios pueden hacer pedidos
import Header from './components/Header'; // Componente para el encabezado
import Footer from './components/Footer'; // Componente para el pie de página

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  // Verifica si el usuario está autenticado al cargar la página
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Obtener la altura del header dinámicamente
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [headerRef]);

  // Ruta protegida para usuarios autenticados
  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    return isAuthenticated ? (
      <>{children}</>
    ) : (
      <Navigate to="/login" /> // Redirige al login si no está autenticado
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#f2f2f2] text-[#333333]"> {/* Fondo principal blanco y texto gris oscuro */}
        {/* Header */}
        <Header ref={headerRef} />

        <main className="min-h-screen p-0" style={{ paddingTop: `${headerHeight}px` }}>
          {/* Switch de rutas */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Otras rutas */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
