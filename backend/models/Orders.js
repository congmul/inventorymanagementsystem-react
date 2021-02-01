const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
  sku: {
    type: String,
    trim: true,
    required: "sku is Required"
  },
  date: {
    type: Date,
    default: Date.now
  },
  price: {
    type: Number,
    trim: true,
    required: "price is Required"
  },
  product: {
    type: String,
    trim: true,
    required: "product is Required"
  },
  description: {
    type: String,
    trim: true,
    required: "description is Required"
  },
  buyer:{
    type: String,
    trim: true,
    required: "buyer is Required"
  },
  shipped: {
    type: String,
    default:false
  },
  return: {
    type: String,
    default:false
  }
},
// Allow to create new field which isn't in the Schema
{
  strict: false
}
);

const Orders = mongoose.model('Orders', OrdersSchema);

module.exports = Orders;