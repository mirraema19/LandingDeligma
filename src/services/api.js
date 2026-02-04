import axios from 'axios';

// URL base de la API
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Crear instancia de axios
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar el token a todas las peticiones
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores de respuesta
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token inválido o expirado
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

// ==================== AUTH ====================

export const authAPI = {
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  getProfile: async () => {
    const response = await api.get('/auth/profile');
    return response.data;
  },

  changePassword: async (data) => {
    const response = await api.post('/auth/change-password', data);
    return response.data;
  },

  verifyToken: async () => {
    const response = await api.get('/auth/verify');
    return response.data;
  },
};

// ==================== REVISTAS ====================

export const revistasAPI = {
  getAll: async (activas = false) => {
    const response = await api.get(`/revistas${activas ? '?activas=true' : ''}`);
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/revistas/${id}`);
    return response.data;
  },

  create: async (formData) => {
    const response = await api.post('/revistas', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  update: async (id, formData) => {
    const response = await api.put(`/revistas/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/revistas/${id}`);
    return response.data;
  },

  toggleActivo: async (id) => {
    const response = await api.patch(`/revistas/${id}/toggle-activo`);
    return response.data;
  },
};

// ==================== MURO DE LA FAMA ====================

export const muroFamaAPI = {
  getAll: async (activos = false) => {
    const response = await api.get(`/muro-fama${activos ? '?activos=true' : ''}`);
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/muro-fama/${id}`);
    return response.data;
  },

  create: async (formData) => {
    const response = await api.post('/muro-fama', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  update: async (id, formData) => {
    const response = await api.put(`/muro-fama/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/muro-fama/${id}`);
    return response.data;
  },

  toggleActivo: async (id) => {
    const response = await api.patch(`/muro-fama/${id}/toggle-activo`);
    return response.data;
  },

  reorder: async (ordenamiento) => {
    const response = await api.post('/muro-fama/reorder', { ordenamiento });
    return response.data;
  },
};

// ==================== CONVOCATORIAS ====================

export const convocatoriasAPI = {
  getAll: async (activas = false, ocultarVencidas = false) => {
    let url = '/convocatorias?';
    if (activas) url += 'activas=true&';
    if (ocultarVencidas) url += 'ocultar_vencidas=true';
    const response = await api.get(url);
    return response.data;
  },

  getPublicas: async () => {
    const response = await api.get('/convocatorias/publicas');
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/convocatorias/${id}`);
    return response.data;
  },

  create: async (data) => {
    const response = await api.post('/convocatorias', data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await api.put(`/convocatorias/${id}`, data);
    return response.data;
  },

  delete: async (id) => {
    const response = await api.delete(`/convocatorias/${id}`);
    return response.data;
  },

  toggleActivo: async (id) => {
    const response = await api.patch(`/convocatorias/${id}/toggle-activo`);
    return response.data;
  },
};

// Función helper para obtener URL de archivos
export const getFileURL = (relativePath) => {
  if (!relativePath) return null;
  const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
  return `${baseURL.replace('/api', '')}/uploads/${relativePath}`;
};

export default api;
