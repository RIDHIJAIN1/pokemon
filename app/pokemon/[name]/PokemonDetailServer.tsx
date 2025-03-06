// app/pokemon/[name]/PokemonDetailServer.tsx
import { fetchPokemonDetails } from '../../../src/utils/api';
import PokemonDetail from './PokemonDetails';


export default async function PokemonDetailServer({ params }: { params: { name: string } }) {
    const awaitedParams = await params; // Explicitly await params
    const { name } = awaitedParams; // Now safely extract name
  const pokemon = await fetchPokemonDetails(name);

  return <PokemonDetail pokemon={pokemon} />;
}