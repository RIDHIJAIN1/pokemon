'use client';

import { useState } from 'react';
import Link from 'next/link';
import Banner from './Banner';

export default function HomeClient({ pokemons }: { pokemons: any[] }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter Pokemons based on the search query
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='bg-black'>
       <Banner/>
 
    <div className="p-4">
     
      <h1 className="text-3xl font-bold mb-4">Pokemon Explorer</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search Pokemon..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4 p-2 border rounded w-full max-w-md"
      />

      {/* Pokemon List */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredPokemons.map((pokemon: any) => (
          <Link key={pokemon.name} href={`/pokemon/${pokemon.name}`}>
            <div className="p-4 border rounded-lg text-center hover:bg-gray-100 cursor-pointer">
              {/* Pokemon Image */}
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="w-24 h-24 mx-auto"
              />
              {/* Pokemon Name */}
              <h2 className="text-xl font-semibold capitalize mt-2">{pokemon.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
}