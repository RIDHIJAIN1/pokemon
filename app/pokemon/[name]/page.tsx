import { fetchPokemonDetails } from '../../../src/utils/api';

export default async function PokemonDetail({ params }: { params: { name: string } }) {
  const {name} = await params;
  const pokemon = await fetchPokemonDetails(name);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-400 to-indigo-600 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-6 max-w-lg w-full">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 capitalize mb-6">
          {pokemon.name}
        </h1>
        
        <div className="flex justify-center">
        <img 
  src={pokemon.sprites.other['official-artwork'].front_default} 
  alt={pokemon.name} 
  className="w-54 h-54 object-contain"
/>

        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2">Abilities</h2>
          <ul className="mt-3 space-y-1">
            {pokemon.abilities.map((ability: any) => (
              <li key={ability.ability.name} className="capitalize text-lg text-gray-600">
                🔹 {ability.ability.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700 border-b pb-2">Stats</h2>
          <ul className="mt-3 space-y-1">
            {pokemon.stats.map((stat: any) => (
              <li key={stat.stat.name} className="capitalize text-lg text-gray-600">
                ⚡ {stat.stat.name}: <span className="font-bold">{stat.base_stat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
