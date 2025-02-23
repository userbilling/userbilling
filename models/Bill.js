const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  dateOfCall: {
    type: Date,
    required: true,
  },
  billDate: {
    type: Date,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  billPrice: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

const Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;
