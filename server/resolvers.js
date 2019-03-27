const { promisify } = require("util");
const readFile = promisify(require("fs").readFile);
const pathModule = require("path");
const changeCase = require("change-case");

module.exports = {
  Query: {
    pokemons: async (_, __, { dataSources }) =>
      dataSources.PokedexApi.getAllPokemons(),
    abilities: async (_, __, { dataSources }) =>
      dataSources.PokedexApi.getAllAbilities(),
    pokemon: (_, { id }, { dataSources }) =>
      dataSources.PokedexApi.getPokemon({ id }),

    lighthouseReport: async () => {
      const result = JSON.parse(
        await readFile(
          pathModule.resolve(__dirname, "../lighthouse-results.json"),
          "utf8"
        )
      );

      const camelcasedAudits = {};

      for (const [name, value] of Object.entries(result.audits)) {
        camelcasedAudits[changeCase.camelCase(name)] = value;
      }

      result.audits = camelcasedAudits;

      return result;
    }
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
