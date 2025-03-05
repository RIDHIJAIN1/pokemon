import React from 'react';
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="relative w-full flex items-center justify-end max-h-screen overflow-hidden ">
      {/* Background Image */}
      <img
        src="/b883fc84b57235e6fe57f409716ae68d.gif"
        alt="Pokemon Banner"
        className="w-full  object-cover"
      />

      {/* Pokemon Name (Vertical Text) */}
      <motion.div
        className="absolute bottom-70 left-0 w-full text-center text-white text-6xl font-bold tracking-widest"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        style={{ fontFamily: "Press Start 2P, sans-serif" }} // Beautiful Pokemon-like font
      >
        POKEMON
      </motion.div>
    </div>
  );
}
