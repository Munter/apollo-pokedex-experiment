const { RESTDataSource } = require("apollo-datasource-rest");

const reducers = {
  pokemon: data => {
    const { id, name, height, weight, abilities } = data;
    return {
      id,
      name,
      height,
      weight,
      abilities
    };
  },

  /**
   * @param {{ id: number, name: string, is_main_series: boolean, pokemon, effect_entries}} data
   */
  ability: (data) => {
    const { id, name, is_main_series, pokemon, effect_entries } = data;

    const effect = effect_entries[0].effect;

    return {
      id,
      name,
      isMainSeries: is_main_series,
      effect,
      pokemons: pokemon
    };
  }
};

class PokedexApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://pokeapi.co/api/v2/";
  }

  async getAllPokemons() {
    const response = await this.get("pokemon");

    if (!Array.isArray(response.results)) {
      return [];
    }

    const pokemons = Promise.all(
      await response.results.map(this.getPokemon.bind(this))
    );

    return pokemons;
  }

  async getAllAbilities() {
    const response = await this.get("ability");

    if (!Array.isArray(response.results)) {
      return [];
    }

    const abilities = Promise.all(
      await response.results.map(this.getAbility.bind(this))
    );

    return abilities;
  }

  async getPokemon({ name }) {
    const response = await this.get(`pokemon/${name}`);
    return reducers.pokemon(response);
  }

  async getAbility({ name }) {
    const response = await this.get(`ability/${name}`);
    return reducers.ability(response);
  }
}

module.exports = PokedexApi;
