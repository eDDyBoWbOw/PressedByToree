const { User, Product, ProductCategory, Cart } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => await User.find(),
    user: async (parent, { userId }) => await User.findById(userId),
    getProductCategories: async () => await ProductCategory.find(),
    getAllProductsByCat: async (parent, { productCategory, name }) => {
      return await Product.find({
        productCategory: new RegExp(productCategory, 'i'),
        name: new RegExp(name, 'i')
      });
    },
    getAllProducts: async () => await Product.find(),
    getCart: async (parent, { _id }) => await Cart.findById(_id),
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('User not found');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password');
      }

      const token = signToken(user);

      return { token, user };
    },
    addToCart: async (parent, { _id }, context) => {
      // Use the context to access the authenticated user
      const { user } = context;

      if (!user) {
        throw new AuthenticationError('User not authenticated');
      }

      const productToAdd = await Product.findById(_id);

      if (productToAdd) {
        user.cartItems.push({ _id: productToAdd._id, products: [productToAdd] });
        await user.save();
        return user.cartItems;
      } else {
        throw new Error("Product not found");
      }
    },
    removeFromCart: async (parent, { _id }, context) => {
      const { user } = context;

      if (!user) {
        throw new AuthenticationError('User not authenticated');
      }

      const productToRemove = await Product.findById(_id);

      if (productToRemove) {
        user.cartItems = user.cartItems.map(cartItem => ({
          ...cartItem,
          products: cartItem.products.filter(product => product._id.toString() !== _id),
        }));

        await user.save();
        return user.cartItems;
      } else {
        throw new Error("Product not found");
      }
    },
  },
};

module.exports = resolvers;

