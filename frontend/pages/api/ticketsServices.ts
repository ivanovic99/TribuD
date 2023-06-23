import axios from "axios";

const BASE_URL_TICKET = 'https://tribud.onrender.com/api/products/'; // La URL del servidor backend

// Obtener lista de tickets de un producto
export const getTickets = async (productId, setTickets) => {
  try {
    const response = await axios.get(`${BASE_URL_TICKET}/${productId}/tickets`);
    setTickets(response.data)
    return response.data;
  } catch (error) {
    console.error('Error al obtener la lista de tickets:', error);
    throw error;
  }
};

// Crear un nuevo ticket para un producto
export const createTicket = async (productId, ticketData) => {
  try {
    const response = await axios.post(`${BASE_URL_TICKET}/${productId}/tickets`, ticketData);
    return response.data;
  } catch (error) {
    console.error('Error al crear el ticket:', error);
    throw error;
  }
};

// Obtener un ticket por su ID respecto de un producto
export const getTicketById = async (productId, ticketId) => {
   try {
     const response = await axios.get(`${BASE_URL_TICKET}/${productId}/tickets/${ticketId}`);
     return response.data;
   } catch (error) {
     console.error(`Error al obtener el ticket con ID ${ticketId}:`, error);
     throw error;
   }
 };
 
 // Actualizar un ticket por su ID respecto de un producto
export const updateTicket = async (productId, ticketId, ticketData) => {
   try {
     const response = await axios.put(`${BASE_URL_TICKET}/${productId}/tickets/${ticketId}`, ticketData);
     return response.data;
   } catch (error) {
     console.error(`Error al actualizar el ticket con ID ${ticketId}:`, error);
     throw error;
   }
 };
 

// Eliminar un ticket por su ID respecto de un producto
export const deleteTicket = async (productId, ticketId) => {
   try {
     const response = await axios.delete(`${BASE_URL_TICKET}/${productId}/tickets/${ticketId}`);
     return response.data;
   } catch (error) {
     console.error(`Error al eliminar el ticket con ID ${ticketId}:`, error);
     throw error;
   }
 };
 
