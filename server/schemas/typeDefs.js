const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    _id: ID!
    name: String!
    description: String
    price: Int!
    category: String!
  }

  type User {

  }

  type Query {
    users: [User]!
    user(userId: ID!): User
  }


  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
