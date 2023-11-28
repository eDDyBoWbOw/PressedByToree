const { User, Product, ProductCategory, Cart } = require('../models');

const resolvers = {
  Query: {
    users: () => users,
    user: (parent, { userId }) => users.find(user => user._id === userId),
    getProductCategories: () => productCategories,
    getAllProductsByCat: (parent, { productCategory, name }) => {
      return products.filter(product => {
        return (
          (!productCategory || product.productCategory === productCategory) &&
          (!name || product.name.includes(name))
        );
      });
    },
  getAllProducts:() => products, {
     getCart: (parent, { _id }) => carts.find(cart => cart._id === _id),
    }
  },
}
  Mutation: {
    addUser: (parent, { name, email, password }) => {
      const newUser = { _id: name, email, password, 
      users.push(newUser);
      return {token: , user: newUser};
    },
    login: (parent, {email, password }) => {
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        return { token: /* generate token */, user };
      } else {
        throw new Error("Invalid credentials");
      }
    },

    addToCart: (parent, { _id }) => {
      const user = /* retrieve user based on authentication token or other criteria */;
      const productToAdd = products.find(product => product._id === _id);

      if (user && productToAdd) {
        user.cartItems.push({ _id: /* generate cart item ID */, products: [productToAdd] });
        return user.cartItems;
      } else {
        throw new Error("User or product not found");
      }
    },
    removeFromCart: (parent, { _id }) => {
      const user = /* retrieve user based on authentication token or other criteria */;
      const productToRemove = products.find(product => product._id === _id);

      if (user && productToRemove) {
        user.cartItems = user.cartItems.map(cartItem => ({
          ...cartItem,
          products: cartItem.products.filter(product => product._id !== _id),
        }));

        return user.cartItems;
      } else {
        throw new Error("User or product not found");
      }
    },
  },
};

module.exports = resolvers;
