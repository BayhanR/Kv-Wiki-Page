"use client"

import axios from 'axios'
import { useEffect, useState } from 'react';
import CharacterGrid from "@/components/ChracterGrid";
const Karakterler = () => {
  const [characters, SetCharacters] = useState([])

  useEffect(() => {
    getCharecters()
  }, [])

  const getCharecters = () => {
    axios.get("/api/chracters")
      .then(res => SetCharacters(res.data.cast))
      .catch(err => console.log(err))
  }

  return (
    <div className="bg-fixed bg-cover bg-center bg-no-repeat min-h-screen bg-[url('../public/polatrac10.jpg')]" >
      <CharacterGrid characters={characters}/>
    </div>
  );
}

export default Karakterler;
