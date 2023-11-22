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

  }

  type ProductCategory {
    _id: ID
    name: String
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    productCategories: [ProductCategory]
    products(productCategory: ID, name: String): [Product]
    product(_id: ID!): Product
  }


  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
