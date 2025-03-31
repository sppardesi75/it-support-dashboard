
const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Ticket', ticketSchema);
