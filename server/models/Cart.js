const mongoose = require('mongoose');

const { Schema } = mongoose;

const cartSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: String,
      ref: 'Product'
    }
  ]
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
