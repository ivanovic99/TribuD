const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: String,
  status: {
    type: String,
    enum: ['Open', 'In Progress', 'Closed']
  },
  priority: {
    type: String,
    enum: ['Alta', 'Media', 'Baja'],
  },
  severity: {
    type: String,
    enum: ['S1', 'S2', 'S3', 'S4']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },

  task: String,
  
  client: String,

  resource: String,

});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
