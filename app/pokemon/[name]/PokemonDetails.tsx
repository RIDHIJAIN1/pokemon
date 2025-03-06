'use client'; // Mark this as a Client Component

import { useRouter } from 'next/navigation'; // Use next/navigation for App Router

const typeGradients: Record<string, string> = {
  grass: 'from-green-200 to-green-800',
  poison: 'from-purple-200 to-purple-800',
  fire: 'from-orange-300 to-red-700',
  flying: 'from-blue-300 to-blue-800',
  water: 'from-blue-300 to-blue-900',
  electric: 'from-yellow-300 to-yellow-700',
  bug: 'from-lime-300 to-green-700',
  normal: 'from-gray-300 to-gray-700',
  ground: 'from-yellow-300 to-yellow-900',
  rock: 'from-gray-600 to-gray-900',
  psychic: 'from-pink-500 to-pink-800',
  ice: 'from-teal-400 to-teal-700',
  dragon: 'from-indigo-400 to-indigo-900',
  dark: 'from-gray-700 to-black',
  steel: 'from-gray-500 to-gray-800',
  fairy: 'from-pink-300 to-pink-700',
};

export default function PokemonDetail({ pokemon }: { pokemon: any }) {
  const router = useRouter();

  // Get background gradient based on Pokémon type
  const mainType = pokemon.types[0]?.type.name || 'normal';
  const gradient = typeGradients[mainType] || 'from-gray-600 to-gray-900';

  const handleNavigate = () => {
    router.push('/'); // Navigate to the home page
  };

  return (
    <div>
      <div className="flex justify-between items-center p-6 bg-black">
        <img src="/pokedexplore.svg" alt="pokemon" className="h-12" />
        <button
          onClick={handleNavigate}
          className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
        >
          Home
        </button>
      </div>

      <div className={`flex justify-center items-center min-h-screen bg-black p-2`}>
        <div className={`bg-gradient-to-br ${gradient} shadow-xl rounded-2xl p-6 max-w-5xl w-full flex flex-col md:flex-row items-center`}>
          {/* Left - Pokémon Image */}
          <div className="flex-1 flex justify-center relative">
          <img
  src={pokemon.sprites.other['official-artwork'].front_default}
  alt={pokemon.name}
  className="w-3/4 md:w-80 lg:w-96 h-auto object-contain drop-shadow-lg -mt-10"
/>

          </div>

          {/* Right - Pokémon Details */}
          <div className="flex-1 text-center md:text-left p-6">
            <h1 className="text-5xl font-extrabold capitalize text-gray-900">{pokemon.name}</h1>

            {/* Type Badges */}
            <div className="flex justify-center md:justify-start mt-3 gap-2">
              {pokemon.types.map((type: any) => (
                <span
                  key={type.type.name}
                  className="bg-black bg-opacity-30 px-4 py-2 rounded-full text-white uppercase font-semibold text-sm"
                >
                  {type.type.name}
                </span>
              ))}
            </div>

            {/* Abilities */}
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-black border-b pb-2">Abilities</h2>
              <ul className="mt-3 space-y-1">
                {pokemon.abilities.map((ability: any) => (
                  <li key={ability.ability.name} className="capitalize text-lg text-black">
                    🔹 {ability.ability.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-black border-b pb-2">Stats</h2>
              <ul className="mt-3 space-y-1">
                {pokemon.stats.map((stat: any) => (
                  <li key={stat.stat.name} className="capitalize text-lg text-black">
                    ⚡ {stat.stat.name}: <span className="font-bold">{stat.base_stat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}