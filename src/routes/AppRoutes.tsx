import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import AdminPanel from '../pages/AdminPanel';
import UserPanel from '../pages/UserPanel';
import PrivateRoute from '../auth/PrivateRoute';
import RoleRoute from '../auth/RoleRoute';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppRoutes = () => {
  return (
    <>
    <Header /> {/* Header siempre visible */}
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Rutas privadas */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Rutas privadas por rol */}
          <Route element={<RoleRoute allowedRoles={['admin']} />}>
            <Route path="/admin" element={<AdminPanel />} />
          </Route>

          <Route element={<RoleRoute allowedRoles={['usuario']} />}>
            <Route path="/user" element={<UserPanel />} />
          </Route>
        </Route>
      </Routes>
      <Footer/>
    </>
  );
};

export default AppRoutes;
