const express = require('express');
const router = express.Router();
const productRoutes = require('./productRoutes');

// Rutas para los tickets
router.use('/products', productRoutes);

module.exports = router;
