const mongoose = require('mongoose');

const versionSchema = new mongoose.Schema({
  versionNum: {type: Number, required: true},
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ticket" }],

});

const Version = mongoose.model('Version', versionSchema);

module.exports = Version;
