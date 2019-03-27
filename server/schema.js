const { gql } = require('apollo-server');

const typeDefs = gql`
  type Pokemon {
    id: ID!
    name: String!
    height: Int!
    weight: Int!

    abilities: [Ability]
  }

  type Ability {
    id: ID!
    name: String!
    isMainSeries: Boolean!

    effect: String

    pokemons: [Pokemon]
  }
`

module.exports = typeDefs;
