import HomeClient from '@/src/components/HomeClient';
import { fetchPokemons } from '@/src/utils/api';
// import HomeClient from '@/componen';

export default async function Home() {
  const pokemons = await fetchPokemons();

  return <HomeClient pokemons={pokemons} />;
}