import axios from "axios";

const BASE_URL_RESOURCE = 'https://api-recursos.onrender.com'; // La URL del servidor backend

interface AddHoursData {
  legajo: string;
  tarea: string;
  cantidadHoras: string;
  fecha: string;
}

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

export const getResourceById = async (resourceId: String) => {
  try {
    const response = await axios.get(`${BASE_URL_RESOURCE}/recursos/${resourceId}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el recurso:', error);
    throw error;
  }
};

export const getHoursByResource = async (resourceId: String) => {
  try {
    const response = await axios.get(`${BASE_URL_RESOURCE}/cargaHoras/${resourceId}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las horas del recurso:', error);
    throw error;
  }
};

// Asigna horas a un recurso
export const addHours = async (data: AddHoursData) => {
  let params = new URLSearchParams();
  params.append('legajo', data.legajo);
  params.append('tarea', data.tarea);
  params.append('cantidadHoras', data.cantidadHoras);
  params.append('fecha', data.fecha);

  try {
    const response = await axios.post(`${BASE_URL_RESOURCE}/cargaHoras?${params.toString()}`);
    return response.data;
  } catch (error) {
    console.error('Error al cargar horas al recurso:', error);
    throw error;
  }
};
 
