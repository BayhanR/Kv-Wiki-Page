import React from "react";

const characters = Array(9).fill("Character");

const CharacterGrid = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold text-indigo-900 mb-6">Character Wiki</h1>
      <div className="grid grid-cols-3 gap-4">
        {characters.map((character, index) => (
          <div
            key={index}
            className="bg-purple-500 text-white h-24 flex items-end justify-center"
          >
            <p className="font-bold text-indigo-900 mb-2">{character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterGrid;
