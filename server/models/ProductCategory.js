const mongoose = require('mongoose');

const { Schema } = mongoose;

const productCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const ProductCategory = mongoose.model('productCategory', productCategorySchema);

module.exports = ProductCategory;
