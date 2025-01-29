import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  // For local dev, assume GraphQL endpoint at http://localhost:4000
  // Later, you can update this with your AWS ECS / API Gateway endpoint
  uri: process.env.REACT_APP_GRAPHQL_URI || 'http://localhost:4000',
  cache: new InMemoryCache(),
});

export default client;
