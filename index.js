const { ApolloServer, gql } = require("apollo-server");
const breeds = require("./breeds");
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    breeds: [String!]!
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    breeds
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
