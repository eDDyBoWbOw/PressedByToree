// const { Tech, Matchup } = require('../models');
const { User, Product, ProductCategory, Order } = require('../models');

const resolvers = {
  Query: {
    productCategories: async () => {
      return await ProductCategory.find();
    },
    products: async (parent, { productCategory,args, name,}) => {
      const params = {};

      if (productCategory) {
        params.productCategory = productCategory;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Product.find(params).populate('productCategory');
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate('productCategory');
    },
  },
  // Mutation: {

  // },
};

module.exports = resolvers;
