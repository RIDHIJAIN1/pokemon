import React from 'react';
import { motion } from 'framer-motion';
import '../../app/banner.css';

export default function Banner() {
  return (
    <div className="relative w-full flex items-center justify-center h-[80vh] bg-gradient-to-b from-red-950 to-red-700 min-h-screen overflow-hidden">
      <div className="relative w-full max-w-screen-xl flex flex-col items-center justify-center text-center">
        {/* Pokémon Logo */}
        <img
          src="/pokedexplore.svg"
          alt="Pokemon Main"
          className="object-contain mb-8 mt-5 pt-2 drop-shadow-[0_0_40px_rgba(255,215,0,0.9)] w-64 "
        />

        {/* Pikachu Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="bg-white/20 backdrop-blur-md text-yellow-300 text-lg md:text-2xl px-6 py-4 rounded-xl shadow-lg border border-yellow-300 animate-pulse mx-10"
        >
          ⚡ Pikachu, an Electric-type Pokémon, is known for its cuteness and powerful Thunderbolt attack! It’s the most famous Pokémon and the face of the franchise. ⚡
        </motion.div>

        {/* Pikachu Images */}
        <div className="relative w-full flex justify-center mt-8 px-20">
          <motion.img
            src="/ukbxkyy0yb7a1.gif"
            alt="Pokemon Left"
            className="max-w-[600px] w-[50%] object-contain"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
       
          <motion.img
            src="/ayi0xce9yb7a1.gif"
            alt="Pokemon Right"
            className="max-w-[600px] w-[50%] object-contain"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Animated Waves */}
      <div className='ocean'>
        <div className='wave'></div>
        <div className='wave'></div>
        <div className='wave'></div>
      </div>
    </div>
  );
}
