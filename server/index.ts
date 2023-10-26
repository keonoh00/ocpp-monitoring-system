import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    hello: String
    user(id: ID!): User
    users: [User]! # Array is required, but each item in the array is optional
    userById(id: ID!): User
  }

  type Mutation {
    createUser(
      name: String!
      email: String!
      age: Int
      isMale: Boolean
      height: Float
    ): User
    deleteUser(id: ID!): Boolean!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
    isMale: Boolean
    height: Float
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello World!",
    user: (root, args) => {
      // Get data from database
      return {
        id: args.id,
        name: "John",
        email: "",
        age: null,
        isMale: null,
        height: null,
      };
    },
  },
  Mutation: {
    // Root is given as the first argument by default
    // Full list of arguments: (root, args, context, info)
    createUser: (root, args) => {
      const newUser = {
        id: "2",
        name: args.name,
        email: args.email,
        age: args.age,
        isMale: args.isMale,
        height: args.height,
      };
      return newUser;
    },
  },
};

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
