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
    username: String
    email: String
    cartItems: [Product]  # Change to [Product]
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
  }

  type AddToCartResponse {
    user: User
    message: String
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    getProductCategories: [ProductCategory]
    getAllProductsByCat(productCategory: ID, name: String): [Product]
    getProduct: [Product]
    getAllProducts: [Product]
    getCart: Cart
  }
  
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addToCart(_id: ID!): AddToCartResponse
    removeFromCart(_id: ID!): [Product]
  }
`;

module.exports = typeDefs;
