"use client"
import { useRouter } from 'next/router';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Router } from 'lucide-react';


const goToTheHome=() =>{
  const router=useRouter()
  router.push('/')
};
const HomePage = () => {
  const [posters, setPosters] = useState<string[]>([]);
  const [currentPosterIndex, setCurrentPosterIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [overview, setOverview] = useState("");

  const fetchPosters = async () => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/tv/34587/images',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjNiOWM4MTZmZmE5MjkyY2JmYjI3ZGUyYjFmZmU1OCIsIm5iZiI6MTczNTA3MDI0Mi4zMjMsInN1YiI6IjY3NmIxMjIyYjBjMzc2ZDQyMWFhMGFjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hyHNegZTLcqD_EkFzjwnO3JX4XEA8D9BwKQQbJ8pwm8',
      },
    };

    try {
      const response = await axios.request(options);
      const posterUrls = response.data.posters
        .map((poster: any) => `https://image.tmdb.org/t/p/w500${poster.file_path}`)
        .filter((_: any, index: number) => index !== 8);
      setPosters(posterUrls);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posters:", error);
      setLoading(false);
    }
  };

  const fetchOverview = async () => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/tv/34587?language=tr-TR',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjNiOWM4MTZmZmE5MjkyY2JmYjI3ZGUyYjFmZmU1OCIsIm5iZiI6MTczNTA3MDI0Mi4zMjMsInN1YiI6IjY3NmIxMjIyYjBjMzc2ZDQyMWFhMGFjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hyHNegZTLcqD_EkFzjwnO3JX4XEA8D9BwKQQbJ8pwm8',
      },
    };

    try {
      const response = await axios.request(options);
      setOverview(response.data.overview);
    } catch (error) {
      console.error("Error fetching Overview:", error);
    }
  };

  useEffect(() => {
    fetchPosters();
    fetchOverview();

    const interval = setInterval(() => {
      setCurrentPosterIndex((prevIndex) => (prevIndex + 1) % 9);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-screen text-white">Yükleniyor...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row pt-20 min-h-screen text-white">
      <div className="md:w-2/3 p-6 flex flex-col justify-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-left pb-4 text-indigo-400"
        >
          Kurtlar Vadisi
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="pt-4 text-lg pb-4 text-gray-300"
        >
          {overview}
        </motion.p>

      </div>

      <div className=" relative w-full h-full md:w-auto p-6 flex items-center justify-center rounded-lg overflow-hidden">  
        <div className="relative w-full h-full bg-transparent rounded-lg overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentPosterIndex}
              src={posters[currentPosterIndex]}
              alt={`Poster ${currentPosterIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

