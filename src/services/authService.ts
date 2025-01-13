const API_URL = 'http://localhost:3000/apiPublic';

// Ejemplo de tipado en el servicio login
export interface LoginResponse {
    isSuccess: boolean;
    mensaje?: string;
    data: {
      id: number;
      nombre_usuario: string;
      correo: string;
      rol: string;
      token: string;
    } | null;
  }

/**
 * Realiza una solicitud al endpoint de login.
 * @param nombre_usuario - El nombre de usuario.
 * @param contrasena - La contraseña del usuario.
 * @returns Una promesa con la respuesta del backend.
 */
export const login = async (
  nombre_usuario: string,
  contrasena: string
): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre_usuario, contrasena }),
    });

    if (!response.ok) {
      // Manejo de errores específicos según el código de estado
      if (response.status === 400) {
        throw new Error('Nombre de usuario y contraseña son requeridos');
      }
      if (response.status === 401) {
        throw new Error('Credenciales inválidas');
      }
      throw new Error('Error interno del servidor');
    }

    // Parsear la respuesta como JSON
    const result: LoginResponse = await response.json();
    return result;
  } catch (error) {
    console.error('Error en el login:', error);
    throw error;
  }
};
