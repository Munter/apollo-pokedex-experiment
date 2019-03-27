const { ApolloServer, gql } = require('apollo-server');
const pokedexSchema = require('./schema');
const lighthouseSchema = require('./lighthouse-schema');

const PokedexApi = require('./datasources/pokedex-api');
const resolvers = require('./resolvers');

const Query = gql`
  type Query {
    pokemons: [Pokemon]!
    pokemon(id: ID!): Pokemon
    abilities: [Ability]

    lighthouseReport: LighthouseReport
  }
`;

const server = new ApolloServer({
  typeDefs: [Query, pokedexSchema, lighthouseSchema],
  resolvers,
  dataSources: () => ({ PokedexApi: new PokedexApi() })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
