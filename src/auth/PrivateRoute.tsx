import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = () => {
  const { isAuthenticated, checkTokenValidity } = useAuth();

  console.log('isAuthenticated:', isAuthenticated);
  console.log('Token válido:', checkTokenValidity());

  if (!isAuthenticated || !checkTokenValidity()) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};


export default PrivateRoute;
