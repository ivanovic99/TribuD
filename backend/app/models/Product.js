const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
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
  tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ticket" }]
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
