import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

// Define your GraphQL schema
const schema = buildSchema(`
  type Query {
    hello: String
    name: String
    age: Int
    placeOfBirth: String
  }
`);

// Define your GraphQL root resolver functions
const rootValue = {
  hello: () => 'Hello world!',
  name: () => 'Tarik',
  age: () => 35,
  placeOfBirth: () => 'Sarajevo, BiH',
};

// Export an API route handler function
export default graphqlHTTP({
  schema: schema,
  rootValue: rootValue,
  graphiql: true, // enable GraphiQL in development
});
