import { useEffect, useState } from 'react';
import { getCharacterDetails } from '../api/tmdb';
import { Character } from '../types/Character';

const WikiPage = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacterDetails();
      if (data) {
        setCharacters(data.results); // API'den gelen karakterler
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Dizinin Karakterleri</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default WikiPage;
