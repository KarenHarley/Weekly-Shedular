const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Auth {
    token: ID!
    user: User!
  }

  type Task {
    _id: ID!
    name: String!
    notes: String
    startingTime: String!
    endingTime: String!
    user: User
  }

  type User {
    _id: ID
    username: String
    password: String
    tasks: [Task]
  }

  type Query {
    tasks(userId: ID!): [Task]
    user(userId: ID!): User
    task(taskId: String!): Task
  }

  type Mutation {
    addTask(
      name: String!
      notes: String
      startingTime: String!
      endingTime: String!
      user: ID!
    ): Task

    updateTask(
      name: String
      notes: String
      startingTime: String
      endingTime: String
      _id: String!
    ): Task

    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
