import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [posters, setPosters] = useState([]); // Posterleri tutan dizi
  const [currentPosterIndex, setCurrentPosterIndex] = useState(0); // Geçerli posterin index'i
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);  // Fade animasyonunun kontrolü

  // Posterleri çeken fonksiyon
  const fetchPosters = async () => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/tv/34587/images', // API endpoint
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjNiOWM4MTZmZmE5MjkyY2JmYjI3ZGUyYjFmZmU1OCIsIm5iZiI6MTczNTA3MDI0Mi4zMjMsInN1YiI6IjY3NmIxMjIyYjBjMzc2ZDQyMWFhMGFjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hyHNegZTLcqD_EkFzjwnO3JX4XEA8D9BwKQQbJ8pwm8', // Bearer token
      },
    };

    try {
      const response = await axios.request(options);
      // "posters" kısmındaki her bir posterin file_path değerini alıp, tam URL'ye dönüştürerek posterler dizisine ekliyoruz
      const posterUrls = response.data.posters.map(
        (poster) => `https://image.tmdb.org/t/p/w500${poster.file_path}`
      );
      // 9. posteri çıkartıyoruz
      const filteredPosters = posterUrls.filter((_, index) => index !== 8);
      setPosters(filteredPosters);  // Posterleri dizide saklıyoruz
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posters:", error);
      setLoading(false);
    }
  };

  // Posterleri çekmek için useEffect
  useEffect(() => {
    fetchPosters();  // Sayfa yüklendiğinde posterleri çek
  }, []);

  // Geçerli posteri değiştirme fonksiyonu
  const changePoster = () => {
    setFade(false); // Fade animasyonunu başlatıyoruz
    setTimeout(() => {
      setCurrentPosterIndex((prevIndex) => (prevIndex + 1) % posters.length);
      setFade(true); // Fade animasyonunu tekrar tetikliyoruz
    }, 500); // 500ms bekleyerek geçiş animasyonu başlamadan önce index değişimini sağlıyoruz
  };

  if (loading) {
    return <div>Loading...</div>; // Yükleniyor durumu
  }

  return (
    <div className="flex mt-20 h-screen">
      {/* Sol Taraf: Metin */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold">Posterler</h1>
        <p className="mt-4 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
        </p>
        
        {/* Geçiş Butonu */}
        <div className="mt-4">
          <button
            onClick={changePoster}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg"
          >
            Sonraki Poster
          </button>
        </div>
      </div>

      {/* Sağ Taraf: Poster */}
      <div className="w-1/3 p-6 flex items-center justify-center">
        <div className="relative w-full h-full bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={posters[currentPosterIndex]}
            alt={`Poster ${currentPosterIndex + 1}`}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
