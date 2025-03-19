"use client"

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Character {
  id: number;
  character: string;
  profile_path: string;
  original_name: string;
  gender: number;
}

interface CharacterGridProps {
  characters: Character[];
}

const CharacterGrid = ({ characters }: CharacterGridProps) => {
  const [selectedChar, setSelectedChar] = useState<Character | null>(null);

  return (
    <div className="p-6 text-center mt-5 bg-gray-900 text-white min-h-screen">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-indigo-400 mb-8"
      >
        Kurtlar Vadisi Karakterleri
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {characters
          ?.filter((c: Character) => c.character)
          ?.map((character: Character) => (
            <motion.div
              key={character.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedChar(character)}
              className="bg-indigo-900 text-white flex flex-col items-center justify-center rounded-lg shadow-lg h-[200px] cursor-pointer transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative w-24 h-24 mb-2 overflow-hidden rounded-lg">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${character.profile_path}`}
                  alt={character.character}
                  width={96}
                  height={96}
                  className="object-cover transition-all duration-300 hover:opacity-80"
                />
              </div>
              <p className="font-bold text-lg text-center px-2">
                {character.character}
              </p>
            </motion.div>
          ))}
      </div>
      <AnimatePresence>
        {selectedChar && (
          <CharacterModal
            character={selectedChar}
            onClose={() => setSelectedChar(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

interface CharacterModalProps {
  character: Character;
  onClose: () => void;
}

const CharacterModal = ({ character, onClose }: CharacterModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="bg-indigo-900 rounded-xl shadow-2xl max-w-md w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 w-full">
          <Image
            src={`https://image.tmdb.org/t/p/w500${character.profile_path}`}
            alt={character.character}
            width={500}
            height={500}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-indigo-300 mb-4">{character.character}</h2>
          <p className="text-gray-300 mb-2">Gerçek Adı: {character.original_name}</p>
          <p className="text-gray-300">Cinsiyet: {character.gender === 1 ? "Kadın" : "Erkek"}</p>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-indigo-600 rounded-full p-2 hover:bg-indigo-700 transition-colors duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default CharacterGrid;

