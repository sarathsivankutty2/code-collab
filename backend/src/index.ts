import { ApolloServer, gql } from 'apollo-server';
import { helloResolver } from './resolvers/helloResolver';
import { booksResolver } from './resolvers/booksResolver';

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    hello: String!
    books: [Book!]!
  }
`;

const resolvers = {
  Query: {
    ...helloResolver.Query,
    ...booksResolver.Query,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`GraphQL server running at ${url}`);
});
