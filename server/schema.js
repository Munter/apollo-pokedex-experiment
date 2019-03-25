const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    pokemons: [Pokemon]!
    pokemon(id: ID!): Pokemon
    abilities: [Ability]
  }

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
