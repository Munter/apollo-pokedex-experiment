const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const PokedexApi = require('./datasources/pokedex-api');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({ PokedexApi: new PokedexApi() })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
