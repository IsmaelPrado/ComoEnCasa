import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

interface RoleRouteProps {
  allowedRoles: string[];
}

const RoleRoute = ({ allowedRoles }: RoleRouteProps) => {
  const { user, isAuthenticated } = useAuth();

  // Verificar y mostrar en consola los valores para depuración
  console.log('isAuthenticated:', isAuthenticated);
  console.log('user:', user);
  console.log('allowedRoles:', allowedRoles);

  // Verificar si el usuario no está autenticado o los datos del usuario no han sido cargados
  if (!isAuthenticated || !user) {
    console.log('No autenticado o usuario no encontrado. Redirigiendo a /login');
    return <Navigate to="/login" />;
  }

  // Verificar si el usuario tiene el rol permitido
  if (!allowedRoles.includes(user.usuario.rol)) {
    console.log('Rol no permitido. Redirigiendo a /login');
    return <Navigate to="/login" />;
  }

  // Si el rol es válido, renderizar el contenido
  return <Outlet />;
};

export default RoleRoute;
