  
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ordersSchema = new Schema({
  "Order ID": Number,
  "Restaurant": String,
  "Item Name": String,
   Quantity: Number,
  "Product Price": Number,
  "Total products": Number,
  "Time": String
}, {
  timestamps: true,
});

const Orders = mongoose.model('orders', ordersSchema);

module.exports = Orders;