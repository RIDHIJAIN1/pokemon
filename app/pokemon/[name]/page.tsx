// app/pokemon/[name]/page.tsx
import PokemonDetailServer from './PokemonDetailServer';

export default function Page({ params }: { params: { name: string } }) {
  return <PokemonDetailServer params={params} />;
}