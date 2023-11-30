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
    getAllProducts: async () => await Product.find({}),
    getCart: async (parent, args, context) => {
      try {
        // Check if the user is authenticated
        if (!context.user) {
          throw new AuthenticationError('User not authenticated');
        }

        // Fetch the user's cart from the database
        const user = await User.findById(context.user._id).populate('cartItems.products');

        if (!user) {
          throw new Error('User not found');
        }

        // Return the user's cart
        return User.cartItems;
      } catch (error) {
        console.error(error);
        throw new Error('Error fetching user cart');
      }
    },

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
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    

    addToCart: async (parent, { itemId }, context) => {
      try {
        // Check if the user is authenticated
        if (!context.user) {
          throw new AuthenticationError('User not authenticated');
        }
    
        // Find the user by ID and update the cartItems
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $push: {
              cartItems: itemId,
            },
          },
          {
            new: true, // Return the updated document
            runValidators: true,
          }
        ).populate('cartItems.products');
    
        // Return the updated user with the new cartItems
        return { user: updatedUser, message: 'Item added to cart successfully' };
      } catch (error) {
        console.error(error);
        throw new Error('Error adding item to cart');
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

