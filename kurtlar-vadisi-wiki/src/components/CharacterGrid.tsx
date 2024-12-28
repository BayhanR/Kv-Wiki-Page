import React from "react";

// Örnek karakter veri seti (Placeholder)
const characters = [
  "Character 1",
  "Character 2",
  "Character 3",
  "Character 4",
  "Character 5",
  "Character 6",
  "Character 7",
  "Character 8",
  "Character 9",
  "Character 6",
  "Character 7",
  "Character 8",
  "Character 9",  "Character 6",
  "Character 7",
  "Character 8",
  "Character 9",  "Character 6",
  "Character 7",
  "Character 8",
  "Character 9",
];

const CharacterGrid = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold text-indigo-900 mb-6">Character Wiki</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map((character, index) => (
          <div
            key={index}
            className="bg-purple-500 text-white h-24 flex items-end justify-center rounded-md shadow-md"
          >
            <p className="font-bold text-indigo-900 mb-2">{character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterGrid;
