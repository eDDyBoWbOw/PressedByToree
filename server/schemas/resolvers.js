const { User, Product, ProductCategory, Cart } = require('../models');

const resolvers = {
  Query: {
    getProducts: async (parent, { productCategory, name }) => {
     
    },

  },
  Mutation: {
    addToCart: async (parent, { _id }) => {
     // This function will grab a product by ID and then move it to the products row in the Cart type

    },

  },
};

module.exports = resolvers;
