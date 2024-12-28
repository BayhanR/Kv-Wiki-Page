// src/pages/Karakterler.tsx
import axios from 'axios'
import { useEffect, useState } from 'react';
import CharacterGrid from "../components/CharacterGrid";
const Karakterler = () => {
  const [characters, SetCharacters] = useState([])

  useEffect(() => {
    getCharecters()
  }, [])

  const getCharecters = () => {
    axios.get("https://api.themoviedb.org/3/tv/34587/credits?api_key=3b3b9c816ffa9292cbfb27de2b1ffe58")
      .then(res => SetCharacters(res.data.cast))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <CharacterGrid characters={characters}/>
    </div>
  );
}

export default Karakterler;
