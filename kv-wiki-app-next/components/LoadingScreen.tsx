"use client"

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3000); // 3 saniye sonra kaybolacak

    return () => clearTimeout(timer);
  }, []);

  if (!showLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-white text-center"
      >
        Kurtlukta kanun düşeni yemektir
      </motion.h1>
    </motion.div>
  );
}

