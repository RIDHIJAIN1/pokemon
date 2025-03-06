import axios from 'axios';
import { Pokemon } from './types';

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2/';

export const fetchPokemons = async (limit = 151, offset = 0) => {
  const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
  const pokemonList = response.data.results;

  // Fetch details for each Pokemon to get the image URL
  const pokemonsWithDetails = await Promise.all(
    pokemonList.map(async (pokemon: Pokemon) => {
      const details = await axios.get(pokemon.url);
      return {
        name: pokemon.name,
        image:  details.data.sprites.other['official-artwork'].front_default,
        // types: details.data.types.map((typeObj: PokemonType) => typeObj.type.name),
        types: details.data.types,
        url: pokemon.url,
      };
    })
  );

  return pokemonsWithDetails;
};
  
  export const fetchPokemonDetails = async (id: string) => {
    const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${id}`);
    return response.data;
  };