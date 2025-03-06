'use client';

import { useState } from 'react';
import Link from 'next/link';
import Banner from './Banner';

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

export default function HomeClient({ pokemons }: { pokemons: any[] }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter Pokemons based on the search query
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-black min-h-screen">
      {/* Banner */}
      <Banner />

      <div className="p-6">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center text-white font-pokemon tracking-wide">
          Pokémon Explorer
        </h1>

        {/* Search Bar */}
        <div className="flex justify-center mt-6">
          <input
            type="text"
            placeholder="Search for a Pokémon..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-4 w-full max-w-md text-white text-lg border border-yellow-400 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-900"
          />
        </div>

        {/* Pokemon Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-12 mt-20 p-6">
          {filteredPokemons.map((pokemon: any) => {
            const gradient = typeGradients[pokemon.types[0]] || 'from-gray-600 to-gray-900';

            return (
              <Link key={pokemon.name} href={`/pokemon/${pokemon.name}`}>
                <div
                  className={`p-6 bg-gradient-to-br ${gradient} border rounded-xl text-center transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer`}
                >
                  {/* Pokemon Image */}
                  <img
  src={pokemon.image}
  alt={pokemon.name}
  className="w-32 h-32 mx-auto -mt-16 drop-shadow-lg transition-transform duration-300 hover:scale-110"
/>

                  {/* Pokemon Name */}
                  <h2 className="text-2xl font-bold capitalize mt-3 text-white">
                    {pokemon.name}
                  </h2>
                  {/* Pokemon Types */}
                  <div className="flex justify-center gap-2 mt-2">
                    {pokemon.types.map((type: string) => (
                      <span
                        key={type}
                        className="bg-black bg-opacity-40 px-3 py-1 rounded-full text-xs text-white font-semibold uppercase"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
