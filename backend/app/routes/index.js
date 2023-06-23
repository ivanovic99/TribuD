const express = require('express');
const axios = require('axios');
const router = express.Router();
const productRoutes = require('./productRoutes');

// Rutas para los productos y tickets
router.use('/products', productRoutes);
router.get('/clients', async (req, res) => {
   try {
     // Realiza la solicitud GET a la API de clientes
     const response = await axios.get('https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/754f50e8-20d8-4223-bbdc-56d50131d0ae/clientes-psa/1.0.0/m/api/clientes');
 
     // Obtiene los datos de los clientes de la respuesta
     const clientes = response.data;
 
     // Envía los clientes como respuesta al cliente que realizó la solicitud
     res.json(clientes);
   } catch (error) {
     console.error('Error al obtener los clientes:', error);
     res.status(500).json({ error: 'Error al obtener los clientes' });
   }
 });
 
module.exports = router;
