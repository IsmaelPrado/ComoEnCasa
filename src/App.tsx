import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './auth/AuthContext';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
