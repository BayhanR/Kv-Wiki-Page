import React, { useState, useEffect } from "react";

const characters = Array(9).fill("Character");

const CharacterGrid = () => {
  const [loading, setLoading] = useState(true);

  // Veriler yüklenene kadar 3 saniye bekle, sonra yüklemeyi sonlandır.
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 saniye sonra verilerin yüklendiğini varsayalım
    return () => clearTimeout(timer); // Temizleme işlemi
  }, []);

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-indigo-900 mb-8">Character Wiki</h1>
      <div className="grid grid-cols-3 gap-6">
        {loading
          ? Array(9).fill(0).map((_, index) => (
              <div
                key={index}
                className="bg-gray-300 text-gray-600 h-24 flex items-center justify-center rounded-lg shadow-md"
              >
                <span className="text-sm">Loading...</span>
              </div>
            ))
          : characters.map((character, index) => (
              <div
                key={index}
                className="bg-purple-500 text-white flex items-center justify-center rounded-lg shadow-md"
              >
                <p className="font-bold text-white text-lg">{character}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default CharacterGrid;
