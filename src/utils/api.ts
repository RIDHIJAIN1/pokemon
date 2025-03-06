import axios from 'axios';

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2/';

export const fetchPokemons = async (limit = 151, offset = 0) => {
  const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
  const pokemonList = response.data.results;

  // Fetch details for each Pokemon to get the image URL
  const pokemonsWithDetails = await Promise.all(
    pokemonList.map(async (pokemon: any) => {
      const details = await axios.get(pokemon.url);
      return {
        name: pokemon.name,
        image:  details.data.sprites.other['official-artwork'].front_default,
        types: details.data.types.map((typeObj: any) => typeObj.type.name),
      };
    })
  );

  return pokemonsWithDetails;
};
  
  export const fetchPokemonDetails = async (id: string) => {
    const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${id}`);
    return response.data;
  };