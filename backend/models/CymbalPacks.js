const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CymbalPacksSchema = new Schema({
  category: {
    type: String,
    trim: true,
    required: "sku is Required"
  },
  dealerPrice: {
    type: Number,
    trim: true,
    required: "dealerPrice is Required"
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
  packageCode: {
    type: String,
    trim: true,
    required: "PackageCode is Required"
  },
},
// Allow to create new field which isn't in the Schema
{
  strict: false
}
);

const CymbalPacks = mongoose.model('CymbalPacks', CymbalPacksSchema);

module.exports = CymbalPacks;