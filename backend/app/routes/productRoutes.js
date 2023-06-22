const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const ticketRoutes = require('./ticketRoutes');


// Ruta para crear un producto
router.post('/', async (req, res) => {
   try {
      const { title, description, status } = req.body;
      const productData = { title, description, status };
      const createdProduct = await productController.createProduct(productData);
      res.status(201).json(createdProduct);
   } catch (error) {
      console.error('Error al crear el producto:', error);
      res.status(500).json({ error: 'Error al crear el producto' });
   }
});

// Ruta para obtener todos los Products
router.get('/', productController.getAllProducts);

// Ruta para obtener un Product por su ID
router.get('/:productId', productController.getProductById);

// Ruta para actualizar un Product por su ID
router.put('/:productId', productController.updateProductById);

// Ruta para eliminar un Product por su ID
router.delete('/:productId', productController.deleteProductById);

// Rutas para los tickets
router.use('/:productId/tickets', ticketRoutes);


module.exports = router;
