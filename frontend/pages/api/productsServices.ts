import axios from "axios";

const BASE_URL_PRODUCT = 'https://tribud.onrender.com/api'; // La URL del servidor backend

// Obtener lista de productos
export const getProducts = async (setProducts) => {
  try {
    const response = await axios.get(`${BASE_URL_PRODUCT}/products/`);
    setProducts(response.data)
    return response.data;
  } catch (error) {
    console.error('Error al obtener la lista de productos:', error);
    throw error;
  }
};

// Crear un nuevo producto
export const createProduct = async (productData) => {
  try {
    const response = await axios.post(`${BASE_URL_PRODUCT}/products`, productData);
    return response.data;
  } catch (error) {
    console.error('Error al crear el producto:', error);
    throw error;
  }
};

// Obtener un producto por su ID
export const getProductById = async (productId) => {
   try {
     const response = await axios.get(`${BASE_URL_PRODUCT}/products/${productId}`);
     return response.data;
   } catch (error) {
      if (error.response.status !== 404) console.error(`Error al obtener el producto con ID ${productId}:`, error);
     throw error;
   }
 };
 
 // Actualizar un producto por su ID
export const updateProduct = async (productId, productData) => {
   try {
     const response = await axios.put(`${BASE_URL_PRODUCT}/products/${productId}`, productData);
     return response.data;
   } catch (error) {
     console.error(`Error al actualizar el producto con ID ${productId}:`, error);
     throw error;
   }
 };
 

// Eliminar un producto por su ID
export const deleteProduct = async (productId) => {
   try {
     const response = await axios.delete(`${BASE_URL_PRODUCT}/products/${productId}`);
     return response.data;
   } catch (error) {
     console.error(`Error al eliminar el producto con ID ${productId}:`, error);
     throw error;
   }
 };
 
