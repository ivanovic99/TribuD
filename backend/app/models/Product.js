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
  tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ticket" }], //lo pase a version
//   version: [{ type: mongoose.Schema.Types.ObjectId, ref: "Version" }],
  version: {
   type: String,
   default: function () {
      return (Math.floor(Math.random() * 3) + 1) + '.' + (Math.floor(Math.random() * 5) + 1) + '.' + (Math.floor(Math.random() * 8) + 1);
    }
   },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
