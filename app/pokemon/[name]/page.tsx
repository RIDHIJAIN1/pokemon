import PokemonDetailServer from './PokemonDetailServer';

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  // If params is a promise, await it; if it’s already resolved, await works fine.
  const resolvedParams = await params;
  return <PokemonDetailServer params={resolvedParams} />;
}
