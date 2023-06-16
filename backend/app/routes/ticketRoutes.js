const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');


// Ruta para crear un ticket para un producto en particular
router.post('/', async (req, res) => {
  try {
    const productId = req.params.productIdd;
    const { title, description, status } = req.body;
    const ticketData = { title, description, status };
    const createdTicket = await ticketController.createTicketForProduct(productId, ticketData);
    res.status(201).json(createdTicket);
  } catch (error) {
    console.error('Error al crear el ticket:', error);
    res.status(500).json({ error: 'Error al crear el ticket' });
  }
});

// Ruta para obtener todos los tickets de un producto en particular
router.get('/', (req, res) => {
   try {
      const productId = req.params.productId;
      const ticketsByProduct = ticketController.getAllTicketsByProduct(productId)
      res.status(200).json(ticketsByProduct);
   } catch (error) {
      console.error('Error al obtener los tickets por producto:', error);
      res.status(500).json({ error: 'Error al obtener los tickets por producto' });
   }
});

// // Ruta para obtener todos los tickets
// router.get('/', ticketController.getAllTickets);

// Ruta para obtener un ticket por su ID
router.get('/:ticketId', ticketController.getTicketById);

// Ruta para actualizar un ticket por su ID
router.put('/:ticketId', ticketController.updateTicketById);

// Ruta para eliminar un ticket por su ID
router.delete('/:ticketId', ticketController.deleteTicketById);


module.exports = router;
