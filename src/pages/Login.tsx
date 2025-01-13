import { useState } from 'react';
import { login } from '../services/authService';

// Definir los tipos para las props
interface LoginModalProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }

const LoginModal = ({ isOpen, setIsOpen }: LoginModalProps) => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleLogin = async () => {
    try {
      const response = await login(nombreUsuario, contrasena);

      if (response.isSuccess && response.data) {
        setMensaje('Inicio de sesión exitoso');
        console.log('Datos del usuario:', response.data);

        const { token, ...userData } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData));
        setIsOpen(false); // Cerrar modal al iniciar sesión
        window.location.href = '/dashboard';
      } else {
        setMensaje(response.mensaje || 'Error desconocido al iniciar sesión');
      }
    } catch (error: any) {
      setMensaje(error.message);
    }
  };

  if (!isOpen) return null; // No renderizar el modal si isOpen es false

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#e0e0e0] shadow-lg rounded-lg p-8 w-full max-w-md relative">
        {/* Botón para cerrar el modal */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-[#333333] hover:text-[#6f9e2a] text-xl"
        >
          &times;
        </button>
        <h1 className="text-2xl font-bold text-[#333333] mb-6 text-center">
          Iniciar sesión
        </h1>
        {mensaje && (
          <p className="mb-4 text-center text-sm font-medium text-[#f1c232]">
            {mensaje}
          </p>
        )}
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={nombreUsuario}
          onChange={(e) => setNombreUsuario(e.target.value)}
          className="w-full p-3 mb-4 rounded border border-[#8dbd3e] text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#c6e83a]"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          className="w-full p-3 mb-6 rounded border border-[#8dbd3e] text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#c6e83a]"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-[#c6e83a] hover:bg-[#a8d13a] text-[#222222] font-semibold py-3 rounded transition-all duration-300"
        >
          Ingresar
        </button>
        <p className="text-center text-sm text-[#333333] mt-4">
          ¿Olvidaste tu contraseña?{' '}
          <a
            href="/recuperar"
            className="text-[#6f9e2a] hover:text-[#8dbd3e] underline"
          >
            Recuperar
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
