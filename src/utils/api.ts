import axios from 'axios';

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2/';

interface Pokemon {
  name: string;
  image: string;
  types: string[];
}

export const fetchPokemons = async (limit = 151, offset = 0): Promise<Pokemon[]> => {
  try {
    const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    const pokemonList = response.data.results;

    // Fetch details for each Pokemon concurrently
    const pokemonsWithDetails = await Promise.all(
      pokemonList.map(async (pokemon: { name: string; url: string }) => {
        try {
          const details = await axios.get(pokemon.url);
          return {
            name: pokemon.name,
            image: details.data.sprites.other['official-artwork'].front_default,
            types: details.data.types.map((typeObj: { type: { name: string } }) => typeObj.type.name),
          };
        } catch (error) {
          console.error(`Error fetching details for ${pokemon.name}:`, error);
          return null; // Return null if a request fails
        }
      })
    );

    return pokemonsWithDetails.filter(Boolean) as Pokemon[]; // Filter out failed requests
  } catch (error) {
    console.error('Error fetching Pokémon list:', error);
    return [];
  }
};

export const fetchPokemonDetails = async (id: string) => {
  try {
    const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for Pokémon ID ${id}:`, error);
    return null;
  }
};
