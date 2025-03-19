'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'


const VIDEO_ID = '-Nc621Rn5RU'

export default function Fragman() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white py-4"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Kurtlar Vadisi Fragman</h1>
        <div className="w-full max-w-6xl mx-auto mt-20">
          <iframe
            src={`https://www.youtube.com/embed/${VIDEO_ID}`}
            title="Kurtlar Vadisi Fragman"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[700px] rounded-lg shadow-xl" // Yüksekliği artırdık
            style={{ display: 'block', margin: '0', padding: '0', transform: 'translateY(-10px)' }}
          ></iframe>
        </div>
      </div>
    </motion.div>
  )
}
