'use client'

import React, { useEffect, useState } from "react"; // React ve useEffect, useState hook'larını import ediyoruz.
import { motion, AnimatePresence } from "framer-motion"; // Framer Motion kütüphanesini animasyonlar için import ediyoruz.
import { PlayCircle, CheckCircle, XCircle, ChevronLeft, ChevronRight } from 'lucide-react'; // Lucide React ikonlarını import ediyoruz.
import { TMDB_API_KEY } from "../api/tmdb";
 // YouTube API anahtarını tanımlıyoruz.
const PLAYLIST_ID = "PLN6a-WhvxvGJEdiaoCuF3wAHi5TL9Tif9"; // YouTube playlist ID'sini tanımlıyoruz.

const Bolumler = () => {
  const [videos, setVideos] = useState([]); // Video listesini tutmak için state oluşturuyoruz.
  const [selectedVideo, setSelectedVideo] = useState(null); // Seçilen videoyu tutmak için state oluşturuyoruz.
  const [watchedVideos, setWatchedVideos] = useState([]); // İzlenen videoları tutmak için state oluşturuyoruz.
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null); // Şu anki video indeksini tutmak için state oluşturuyoruz.
  const [isLoading, setIsLoading] = useState(true); // Yüklenme durumunu tutmak için state oluşturuyoruz.

  useEffect(() => {
    // LocalStorage'den izlenen videoları çekiyoruz.
    const savedWatchedVideos = localStorage.getItem('watchedVideos');
    if (savedWatchedVideos) {
      setWatchedVideos(JSON.parse(savedWatchedVideos)); // İzlenen videoları state'e set ediyoruz.
    }
  }, []);

  useEffect(() => {
    // Videoları YouTube API'sinden çekmek için bir fonksiyon oluşturuyoruz.
    const fetchVideos = async () => {
      try {
        // API isteği gönderiyoruz.
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${TMDB_API_KEY}`
        );
        const data = await response.json(); // API'den gelen veriyi JSON formatında alıyoruz.
        setVideos(data.items); // Gelen video verilerini state'e set ediyoruz.
        setIsLoading(false); // Yüklenme durumunu false yapıyoruz.
      } catch (error) {
        console.error("Error fetching videos:", error); // Hata durumunda konsola hata yazdırıyoruz.
        setIsLoading(false); // Yüklenme durumunu false yapıyoruz.
      }
    };

    fetchVideos(); // fetchVideos fonksiyonunu çağırıyoruz.
  }, []);

  const updateWatchedVideos = (newWatchedVideos) => {
    // İzlenen videoları güncelleyen fonksiyon.
    setWatchedVideos(newWatchedVideos); // İzlenen videoları state'e set ediyoruz.
    localStorage.setItem('watchedVideos', JSON.stringify(newWatchedVideos)); // LocalStorage'a kaydediyoruz.
  };

  const handleVideoClick = (videoId, index) => {
    // Videoya tıklanması durumunda seçilen video id'sini ve indeksini state'e set ediyoruz.
    setSelectedVideo(videoId);
    setCurrentVideoIndex(index);
    if (!watchedVideos.includes(index)) { 
      updateWatchedVideos([...watchedVideos, index]); // Videoyu izlenenlere ekliyoruz.
    }
  };

  const handleNext = () => {
    // Sonraki videoya geçme fonksiyonu.
    if (currentVideoIndex < videos.length - 1) {
      const nextIndex = currentVideoIndex + 1;
      setSelectedVideo(videos[nextIndex].snippet.resourceId.videoId); // Sonraki video ID'sini seçiyoruz.
      setCurrentVideoIndex(nextIndex); // Sonraki videonun indeksini set ediyoruz.
      if (!watchedVideos.includes(nextIndex)) {
        updateWatchedVideos([...watchedVideos, nextIndex]); // Sonraki videoyu izlenenler listesine ekliyoruz.
      }
    }
  };

  const handlePrevious = () => {
    // Önceki videoya geçme fonksiyonu.
    if (currentVideoIndex > 0) {
      const prevIndex = currentVideoIndex - 1;
      setSelectedVideo(videos[prevIndex].snippet.resourceId.videoId); // Önceki video ID'sini seçiyoruz.
      setCurrentVideoIndex(prevIndex); // Önceki videonun indeksini set ediyoruz.
      if (!watchedVideos.includes(prevIndex)) {
        updateWatchedVideos([...watchedVideos, prevIndex]); // Önceki videoyu izlenenler listesine ekliyoruz.
      }
    }
  };

  const toggleWatchedStatus = (index) => {
    // Videonun izlenip izlenmediğini kontrol edip, izlenenler listesini güncelleyen fonksiyon.
    if (watchedVideos.includes(index)) {
      updateWatchedVideos(watchedVideos.filter((videoIndex) => videoIndex !== index)); // İzlenmediyse listeden çıkarıyoruz.
    } else {
      updateWatchedVideos([...watchedVideos, index]); // İzlendiyse listeye ekliyoruz.
    }
  };

  return (
    <div className="min-h-screen bg-fixed bg-cover bg-center bg-[url('../public/korcancay.jpg')] p-6">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Kurtlar Vadisi Bölümleri</h1>

      {isLoading ? (
        // Yükleniyorsa animasyon gösteriyoruz.
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto">
          <AnimatePresence>
            {selectedVideo && (
              // Seçilen video var ise, video detayını gösteriyoruz.
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {currentVideoIndex !== null && (
                    <span className="text-yellow-400">Oynatılıyor: </span>
                  )}
                  {videos[currentVideoIndex]?.snippet.title}
                </h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo}`}
                    title="Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg shadow-lg"
                  ></iframe>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="space-y-4 mb-16"
          >
            {videos.map((video, index) => (
              // Video listesini render ediyoruz.
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex items-center space-x-4 p-4 rounded-lg bg-white bg-opacity-90 cursor-pointer transform transition duration-200 hover:scale-105 ${
                  currentVideoIndex === index ? "ring-4 ring-yellow-400" : ""
                }`}
                onClick={() => handleVideoClick(video.snippet.resourceId.videoId, index)}
              >
                <div className="w-24 h-16 bg-gray-300 rounded-md overflow-hidden">
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {video.snippet.title}
                    {currentVideoIndex === index && (
                      <span className="text-yellow-600 ml-2">(Oynatılıyor)</span>
                    )}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {watchedVideos.includes(index) ? "İzlendi" : "İzlenmedi"}
                  </p>
                </div>
                <button
                  className={`p-2 rounded-full transition-colors duration-200 ${
                    watchedVideos.includes(index)
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation(); // Butona tıklama işleminde video tıklama işlemine engel oluyoruz.
                    toggleWatchedStatus(index); // İzlenen video durumunu değiştiriyoruz.
                  }}
                >
                  {watchedVideos.includes(index) ? (
                    <CheckCircle className="w-6 h-6 text-white" />
                  ) : (
                    <XCircle className="w-6 h-6 text-gray-600" />
                  )}
                </button>
              </motion.div>
            ))}
          </motion.div>

          {selectedVideo && (
            // Video oynatılıyorsa, önceki ve sonraki bölüm butonlarını gösteriyoruz.
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white bg-opacity-90 shadow-lg">
              <div className="max-w-6xl mx-auto flex justify-between items-center">
                <button
                  onClick={handlePrevious}
                  className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentVideoIndex === 0}
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Önceki Bölüm
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentVideoIndex === videos.length - 1}
                >
                  Sonraki Bölüm
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Bolumler;
