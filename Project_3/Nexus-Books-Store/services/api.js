import axios from "axios";

// URL base de la API simulada
const API_BASE_URL = "https://mock.apidog.com/m1/1088805-1078197-default";

// Crear instancia de axios con configuración
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para logging (opcional, útil para debugging)
api.interceptors.request.use(
  (config) => {
    console.log(`[API Request] ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error("[API Request Error]", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log(`[API Response] ${response.config.url}`, response.status);
    return response;
  },
  (error) => {
    console.error("[API Response Error]", error.response?.status, error.message);
    return Promise.reject(error);
  }
);

// Servicios de API
export const apiService = {
  // Obtener información general
  getInformation: async () => {
    try {
      const response = await api.get("/information");
      return response.data;
    } catch (error) {
      console.error("Error fetching information:", error);
      throw error;
    }
  },

  // Obtener todos los libros
  getBooks: async (params = {}) => {
    try {
      console.log("📚 [API] getBooks - Iniciando petición con params:", params);
      console.log("📚 [API] getBooks - URL completa:", `${API_BASE_URL}/books`);
      const response = await api.get("/books", { params });
      console.log("✅ [API] getBooks - Respuesta recibida:", response.status);
      console.log("✅ [API] getBooks - Datos:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ [API] getBooks - Error completo:", error);
      console.error("❌ [API] getBooks - Mensaje:", error.message);
      console.error("❌ [API] getBooks - Response:", error.response?.data);
      throw error;
    }
  },

  // Obtener libro por ID
  getBookById: async (id) => {
    try {
      const response = await api.get("/books", { params: { id } });
      return response.data;
    } catch (error) {
      console.error(`Error fetching book ${id}:`, error);
      throw error;
    }
  },

  // Obtener libros por categoría
  getBooksByCategory: async (category) => {
    try {
      const response = await api.get("/books", { params: { category } });
      return response.data;
    } catch (error) {
      console.error(`Error fetching books by category ${category}:`, error);
      throw error;
    }
  },

  // Buscar libros
  searchBooks: async (query) => {
    try {
      const response = await api.get("/books", { params: { search: query } });
      return response.data;
    } catch (error) {
      console.error(`Error searching books: ${query}`, error);
      throw error;
    }
  },

  // Obtener lista de miembros
  getMembers: async () => {
    try {
      const response = await api.get("/list_members");
      return response.data;
    } catch (error) {
      console.error("Error fetching members:", error);
      throw error;
    }
  },

  // Obtener miembro por ID
  getMemberById: async (id) => {
    try {
      const response = await api.get("/members", { params: { id } });
      return response.data;
    } catch (error) {
      console.error(`Error fetching member ${id}:`, error);
      throw error;
    }
  },
};

export default api;

