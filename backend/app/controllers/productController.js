const Product = require('../models/Product');
const Ticket = require('../models/Ticket');

// Crear un nuevo producto
const createProduct = async (productData) => {
  try {
    const product = new Product(productData);
    await product.save();
    return product;
  } catch (error) {
    console.error('Error al crear el producto:', error);
    throw error;
  }
};

// Obtener todos los productos
const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    res.status(500).json({ error: 'Error al obtener los productis' });
  }
};

// Obtener un producto por su ID
const getProductById = async (req, res) => {
  try {
    const productId = req.params.productId;
    if (productId === "undefined") {
      return res.status(404).json({ error: 'Undefined productId' });
    }
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: 'producto no encontrado' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
};

// Actualizar un producto por su ID
const updateProductById = async (req, res) => {
  try {
    const productId = req.params.productId;
    const { title, description, status } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { title, description, status },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error al actualizar el producto:', error);
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
};

// Eliminar un producto por su ID
const deleteProductById = async (req, res) => {
  try {
    const productId = req.params.productId;
    const deletedProduct = await Product.findByIdAndDelete(productId).populate("tickets");
    for (let i = 0; i < deletedProduct.tickets.length; i++) {
      let ticket = deletedProduct.tickets[i];
      await Ticket.findByIdAndDelete(ticket._id);
   }
    if (!deletedProduct) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.status(200).json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el Producto:', error);
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
};

module.exports = { 
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
