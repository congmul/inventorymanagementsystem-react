const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CymbalsSchema = new Schema({
    category: {
        type: String,
        trim: true,
        required: "category is Required"
      },
    
      description: {
        type: String,
        trim: true,
        required: "description is Required"
      },
    
});

const Test = mongoose.model('Test', CymbalsSchema);

module.exports = Test;