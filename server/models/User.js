const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
  cartItems: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;