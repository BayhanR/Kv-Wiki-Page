import React, { useEffect, useState } from "react";

const Bolumler = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null); // Seçilen videoyu tutmak için state
  const [watchedVideos, setWatchedVideos] = useState([]); // İzlenen videoları takip etmek için
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null); // Geçerli videonun index'i
  const API_KEY = "AIzaSyBJWIiiFONCriad3-ZREyXCa_aiYa0vicU";
  const PLAYLIST_ID = "PLN6a-WhvxvGJEdiaoCuF3wAHi5TL9Tif9";

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${API_KEY}`
        );
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  const handleVideoClick = (videoId, index) => {
    setSelectedVideo(videoId);
    setCurrentVideoIndex(index); // Videonun index'ini güncelle
  
    // Eğer video izlenmemişse, izlenen videolar listesine ekle
    if (!watchedVideos.includes(index)) {
      setWatchedVideos([...watchedVideos, index]);
    }
  
    // Sayfayı en yukarıya kaydır
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Yavaşça kaydırmak için
    });
  };
  

  const handleNext = () => {
    if (currentVideoIndex < videos.length - 1) {
      const nextIndex = currentVideoIndex + 1;
      setSelectedVideo(videos[nextIndex].snippet.resourceId.videoId);
      setCurrentVideoIndex(nextIndex);

      // Eğer video izlenmemişse, izlenen videolar listesine ekle
      if (!watchedVideos.includes(nextIndex)) {
        setWatchedVideos([...watchedVideos, nextIndex]);
      }
    }
  };

  const handlePrevious = () => {
    if (currentVideoIndex > 0) {
      const prevIndex = currentVideoIndex - 1;
      setSelectedVideo(videos[prevIndex].snippet.resourceId.videoId);
      setCurrentVideoIndex(prevIndex);

      // Eğer video izlenmemişse, izlenen videolar listesine ekle
      if (!watchedVideos.includes(prevIndex)) {
        setWatchedVideos([...watchedVideos, prevIndex]);
      }
    }
  };

  const toggleWatchedStatus = (index) => {
    if (watchedVideos.includes(index)) {
      // Eğer video izlenmişse, izlenmedik olarak işaretle
      setWatchedVideos(watchedVideos.filter((videoIndex) => videoIndex !== index));
    } else {
      // Eğer video izlenmemişse, izlenmiş olarak işaretle
      setWatchedVideos([...watchedVideos, index]);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-indigo-900 mb-6">Bölümler</h1>

      {/* Seçilen video oynatıcı */}
      {selectedVideo && (
        <div className="mt-8 mb-4">
          <h2 className="text-xl font-semibold text-indigo-900 mb-4">
            {currentVideoIndex !== null && (
              <span className="text-blue-600">Oynatılıyor: </span>
            )}
            {videos[currentVideoIndex]?.snippet.title}
          </h2>
          <div className="w-full max-w-4xl mx-auto h-[300px] mb-60">
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`flex items-center space-x-4 p-2 border rounded bg-white cursor-pointer ${
              watchedVideos.includes(index) ? "bg-green-200" : ""
            } ${currentVideoIndex === index ? "bg-blue-200" : ""}`}
            onClick={() => handleVideoClick(video.snippet.resourceId.videoId, index)}
          >
            <div className="w-16 h-9 bg-gray-300">
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
  <h2 className="text-lg font-semibold">
    {video.snippet.title}
    {/* Oynatılıyor yazısını entegre ediyoruz */}
    {currentVideoIndex === index && (
      <span className="text-blue-600 ml-2">(Oynatılıyor)</span> // Oynatılıyor yazısı
    )}
  </h2>
  {watchedVideos.includes(index) ? (
    <span className="text-sm text-gray-500">(İzlendi)</span>
  ) : (
    <span className="text-sm text-gray-500">(İzlenmedi)</span>
  )}
</div>

            {/* "İzle" butonu, oynatıcıda video izleniyorsa gizlenecek */}
            {currentVideoIndex !== index && (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={(e) => {
                  e.stopPropagation(); 
                  toggleWatchedStatus(index);
                }}
              >
                {watchedVideos.includes(index) ? "İzlenmedi Yap" : "İzlendi Yap"}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Önceki ve Sonraki Bölüm Butonları */}
      {selectedVideo && (
        <div className="flex justify-between mt-4 fixed bottom-0 left-0 right-0 p-4 bg-white shadow-md">
          <button
            onClick={handlePrevious}
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 disabled:bg-gray-300"
            disabled={currentVideoIndex === 0}
          >
            Önceki Bölüm
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 disabled:bg-gray-300"
            disabled={currentVideoIndex === videos.length - 1}
          >
            Sonraki Bölüm
          </button>
        </div>
      )}
    </div>
  );
};

export default Bolumler;
