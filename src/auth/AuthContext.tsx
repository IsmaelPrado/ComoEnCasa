import { ReactNode, createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';

interface AuthContextType {
  user: { usuario: { id: number; rol: string } } | null;
  token: string | null;
  login: (token: string, userData: { id: number; rol: string }) => void;
  logout: () => void;
  isAuthenticated: boolean;
  checkTokenValidity: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ usuario: { id: number; rol: string } } | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
  
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
      console.log('Token y Usuario cargados:', savedToken, JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const checkTokenValidity = (): boolean => {
    if (!token) return false;
  
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const isExpired = payload.exp * 1000 < Date.now();
      return !isExpired;
    } catch (error) {
      console.error('Error al verificar la validez del token:', error);
      return false;
    }
  };

  useEffect(() => {
    if (token && !checkTokenValidity()) {
      logout();
    }
  }, [token]);

  const login = (newToken: string, userData: { id: number; rol: string }) => {
    setToken(newToken);
    setUser({ usuario: userData });  // Cambié para que sea `usuario` el objeto dentro de `user`
    localStorage.setItem('token', newToken);
    localStorage.setItem('user', JSON.stringify({ usuario: userData })); // Ajusté la estructura al guardar
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isAuthenticated: !!user && checkTokenValidity(),
        checkTokenValidity,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
