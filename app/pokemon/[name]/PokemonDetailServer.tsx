import { fetchPokemonDetails } from '../../../src/utils/api';
import PokemonDetail from './PokemonDetails';

export default async function PokemonDetailServer({ params }: { params: { name: string } }) {
  // Directly destructure params without awaiting
  const { name } = params;
  const pokemon = await fetchPokemonDetails(name);

  return <PokemonDetail pokemon={pokemon} />;
}
