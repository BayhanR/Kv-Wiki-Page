import { useEffect, useState, useRef } from "react";
import axios from "axios";

const MusicPlayer = () => {
  const [musicList, setMusicList] = useState([]); // Şarkı listesi
  const [currentTrack, setCurrentTrack] = useState(null); // Şu anda çalan şarkı
  const [isPlaying, setIsPlaying] = useState(false); // Müzik çalma durumu

  const iframeRef = useRef(null); // YouTube iframe referansı
  const playerRef = useRef(null); // Player referansı

  // YouTube API'den müzik verilerini çekmek için fonksiyon
  const fetchYouTubeMusic = async () => {
    const playlistId = "PLXHY5Ce551njKctOI39ZYuCSocOrUqzaO";
    const apiKey = "AIzaSyBJWIiiFONCriad3-ZREyXCa_aiYa0vicU"; // API anahtarınız
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=10&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      const musicData = response.data.items.map((item) => ({
        title: item.snippet.title,
        videoId: item.snippet.resourceId.videoId,
      }));
      setMusicList(musicData); // Şarkı listesini güncelle
      setCurrentTrack(musicData[0]); // İlk şarkıyı varsayılan olarak seç
    } catch (error) {
      console.error("YouTube API hatası:", error);
    }
  };

  // YouTube API'yi yüklemek için fonksiyon
  const loadYouTubeAPI = () => {
    if (window.YT) return; // API zaten yüklendiyse, tekrar yüklemeye gerek yok

    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    document.body.appendChild(script);

    // API yüklendiğinde çalışacak callback
    window.onYouTubeIframeAPIReady = () => {
      // API yüklendikten sonra player'ı başlatabiliriz
      if (iframeRef.current && currentTrack) {
        const player = new window.YT.Player(iframeRef.current, {
          videoId: currentTrack.videoId,
          events: {
            onReady: (event) => {
              playerRef.current = event.target;
            },
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                setIsPlaying(true);
              } else if (event.data === window.YT.PlayerState.PAUSED) {
                setIsPlaying(false);
              }
            },
          },
        });
      }
    };
  };

  // Component yüklendiğinde müzikleri çek ve YouTube API'yi yükle
  useEffect(() => {
    fetchYouTubeMusic();
    loadYouTubeAPI();
  }, []);

  // Şarkıyı değiştirme fonksiyonu
  const handleChangeTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true); // Yeni şarkıya geçerken çalmayı başlat
  };

  // İleri gitme fonksiyonu
  const handleNext = () => {
    const currentIndex = musicList.indexOf(currentTrack);
    const nextTrack = musicList[(currentIndex + 1) % musicList.length]; // Listeyi döngüsel hale getiriyoruz
    handleChangeTrack(nextTrack);
  };

  // Geri gitme fonksiyonu
  const handlePrevious = () => {
    const currentIndex = musicList.indexOf(currentTrack);
    const prevTrack = musicList[(currentIndex - 1 + musicList.length) % musicList.length]; // Döngüsel geri gitme
    handleChangeTrack(prevTrack);
  };

  // Durdurma fonksiyonu
  const handlePause = () => {
    setIsPlaying(false); // Müzik durdurulacak
  };

  if (!currentTrack) {
    return <div>Loading...</div>; // Şarkılar yüklenene kadar loading gösterebiliriz
  }

  return (
    <div className="flex items-center space-x-4 mb-4">
      <div className="flex-grow">
        <iframe
          ref={iframeRef} // YouTube iframe referansı
          width="100%"
          height="0" // Video yüksekliğini 0 yapıyoruz
          src={`https://www.youtube.com/embed/${currentTrack.videoId}?autoplay=${isPlaying ? 1 : 0}&mute=0&controls=1`}
          title={currentTrack.title}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex items-center space-x-4">
        {/* Kontrol Tuşları */}
        <button onClick={handlePrevious} className="bg-gray-300 p-2 rounded-full">⏮️</button>
        <button onClick={isPlaying ? handlePause : () => setIsPlaying(true)} className="bg-gray-300 p-2 rounded-full">
          {isPlaying ? "⏸️" : "▶️"}
        </button>
        <button onClick={handleNext} className="bg-gray-300 p-2 rounded-full">⏭️</button>
      </div>

      <div className="flex-grow">
        {/* Dropdown menüsü */}
        <select
          value={currentTrack.title} // Dropdown menüsünde seçili şarkı
          onChange={(e) =>
            handleChangeTrack(
              musicList.find((track) => track.title === e.target.value)
            )
          }
          className="bg-gray-200 p-2 rounded-full"
        >
          {musicList.map((track, index) => (
            <option key={index} value={track.title}>
              {track.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MusicPlayer;
