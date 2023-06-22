const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: String,
  status: {
    type: String,
    enum: ['Open', 'In Progress', 'Closed']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
