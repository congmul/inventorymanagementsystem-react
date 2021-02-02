const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    sku: {
        type: String,
        trim: true,
        required: "sku is Required"
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
    ebayPrice: {
        type: Number,
        trim: true,
        required: "eBayPrice is Required"
    },
    websitePrice: {
        type: Number,
        trim: true,
        required: "webSitePrice is Required"
    },
    qty: {
        type: Number,
        trim: true,
        required: "qty is Required"
    },
    packageCode: {
        type: String,
        trim: true,
    },
    

},
    // Allow to create new field which isn't in the Schema
    {
        strict: false
    }
);
  
const Products = mongoose.model('Products', ProductsSchema);
  
module.exports = Products;