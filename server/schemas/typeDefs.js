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
    orders: [Order] 
  }
  
  type Checkout {
    session: ID
  }
  
  type ProductCategory {
    _id: ID
    name: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Order {
    _id: ID

  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    productCategories: [ProductCategory]
    products(productCategory: ID, name: String): [Product]
    product(_id: ID!): Product 
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
