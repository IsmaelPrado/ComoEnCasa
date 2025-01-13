import  { useState } from 'react';
import { login } from '../services/authService';

const Login = () => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleLogin = async () => {
    try {
      const response = await login(nombreUsuario, contrasena);
  
      if (response.isSuccess && response.data) {
        setMensaje('Inicio de sesión exitoso');
        console.log('Datos del usuario:', response.data);
  
        // Extrae el token y el resto de los datos del usuario
        const { token, ...userData } = response.data;
  
        // Guarda el token en localStorage
        localStorage.setItem('token', token);
  
        // Guarda los datos del usuario (sin el token) en localStorage
        localStorage.setItem('user', JSON.stringify(userData));
  
        // Redirigir al dashboard
        window.location.href = '/dashboard';
      } else {
        setMensaje(response.mensaje || 'Error desconocido al iniciar sesión');
      }
    } catch (error: any) {
      setMensaje(error.message);
    }
  };
  

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={nombreUsuario}
        onChange={(e) => setNombreUsuario(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
      />
      <button onClick={handleLogin}>Ingresar</button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Login;
