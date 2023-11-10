const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: true,
    validate: {
      validator: function(value) {
        // Use a regular expression to validate the price with 10 total digits and 2 decimal places
        return /^\d{1,8}(\.\d{1,2})?$/.test(value);
      },
      message: 'Price must be a valid decimal with 10 total digits and 2 decimal places',
    },
  },
  category: {
    type: String,
    required: true
  },
});

const Product = model('Product', productSchema);

module.exports = Product;
