import axios from "axios";

const BASE_URL_RESOURCE = 'https://api-recursos.onrender.com'; // La URL del servidor backend

// Obtener lista de recursos
export const getResources = async () => {
  try {
    const response = await axios.get(`${BASE_URL_RESOURCE}/recursos`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener la lista de recursos:', error);
    throw error;
  }
};

// Asigna horas a un recurso
export const addHours = async (data: {}) => {
  try {
    const response = await axios.post(`${BASE_URL_RESOURCE}/cargaHoras`, data);
    return response.data;
  } catch (error) {
    console.error('Error al cargar horas al recurso:', error);
    throw error;
  }
};
 
