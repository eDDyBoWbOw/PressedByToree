const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    _id: ID!
    name: String!
    description: String
    price: Int!
    productCategory: String!
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    cartItems: [Cart] 
  }
  
  type ProductCategory {
    _id: ID
    name: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Cart {
    _id: ID
    products: [Product]
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    getProductCategories: [ProductCategory]
    getAllProductsByCat(productCategory: ID, name: String): [Product]
    getProduct: [Product]
    getAllProducts: [Product]
    getCart(_id: ID!): Cart
  }
  
  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addToCart(_id: ID!): [Product]
    removeFromCart(_id: ID!): [Product]
  }
`;

module.exports = typeDefs;
