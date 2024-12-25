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

<>
      <header className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Kurtlar Vadisi Wiki</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Anasayfa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Karakterler
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Bölümler
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Oyuncular
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400">
                  Hakkında
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Dizinin Detayları</h2>
        <p className="text-gray-700 mb-4">
          Kurtlar Vadisi, Türk televizyon tarihinin en uzun soluklu ve en popüler dizilerinden biridir. Bu wiki sayfası,
          dizinin tüm detaylarını keşfetmeniz için hazırlanmıştır.
        </p>

        <section>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Popüler Karakterler</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Örnek Karakter Kartı */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Polat Alemdar"
                className="rounded-md mb-4"
              />
              <h4 className="text-lg font-bold">Polat Alemdar</h4>
              <p className="text-gray-600">Baş karakter, vatansever ve karizmatik.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Kurtlar Vadisi Wiki. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </>
  );
};

export default WikiPage;
