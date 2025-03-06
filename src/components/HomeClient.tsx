'use client';
import { useState } from 'react';
import Link from 'next/link';
import Banner from './Banner';
import typeGradients from '../utils/typeGradients';

interface Pokemon {
  name: string;
  image: string;
  types: string[];
}

export default function HomeClient({ pokemons }: { pokemons: Pokemon[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 21; 

  // Filter Pokémons based on search query
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination Logic
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = filteredPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
  const totalPages = Math.ceil(filteredPokemons.length / pokemonsPerPage);

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
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="p-4 w-full max-w-md text-white text-lg border border-yellow-400 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-900"
          />
        </div>

        {/* Pokemon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 mt-10 p-6">
          {currentPokemons.map((pokemon) => {
            const gradient = typeGradients[pokemon.types[0]] ?? 'from-gray-600 to-gray-900';
            return (
              <Link key={pokemon.name} href={`/pokemon/${pokemon.name}`}>
                <div
                  className={`p-6 bg-gradient-to-br ${gradient} border rounded-xl text-center transform hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer `}
                >
                  {/* Pokemon Image */}
                  <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className="w-24 h-24 mx-auto -mt-16 drop-shadow-lg transition-transform duration-300 hover:scale-110"
                  />
                  {/* Pokemon Name */}
                  <h2 className="text-lg font-bold capitalize mt-3 text-white">
                    {pokemon.name}
                  </h2>
                  {/* Pokemon Types */}
                  <div className="flex justify-center gap-1 mt-2">
                    {pokemon.types.map((type) => (
                      <span
                        key={type}
                        className="bg-black bg-opacity-40 px-2 py-1 rounded-full text-xs text-white font-semibold uppercase"
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

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg text-white font-bold ${
              currentPage === 1 ? 'bg-gray-600 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-600'
            } transition`}
          >
            Previous
          </button>

          <span className="text-white text-lg font-serif">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg text-white font-bold ${
              currentPage === totalPages ? 'bg-gray-600 cursor-not-allowed' : 'bg-yellow-500 hover:bg-yellow-600'
            } transition`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
