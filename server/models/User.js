const { Schema, model } = require('mongoose');
const Cart = require('./Cart');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    max_length: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max_length: 50,
    match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  cartItems: [Cart.schema],
  // isAdmin: {
  //   type: Boolean,
  //   default: false,  
  // }
});

const User = model('User', userSchema);

module.exports = User;
