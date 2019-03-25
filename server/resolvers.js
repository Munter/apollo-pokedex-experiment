module.exports = {
  Query: {
    pokemons: async (_, __, { dataSources }) =>
      dataSources.PokedexApi.getAllPokemons(),
    abilities: async (_, __, { dataSources }) =>
      dataSources.PokedexApi.getAllAbilities(),
    pokemon: (_, { id }, { dataSources }) =>
      dataSources.PokedexApi.getPokemon({ id })
  },

  Pokemon: {
    abilities(pokemon, args, { dataSources }, info) {
      return Promise.all(
        pokemon.abilities.map(abilityReference =>
          dataSources.PokedexApi.getAbility({
            name: abilityReference.ability.name
          })
        )
      );
    }
  }
};
