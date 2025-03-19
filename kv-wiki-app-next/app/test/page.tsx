import React from 'react';
import QuizForm from "@/components/quiz-form";
import axios from "axios";

async function getQuizQuestions() {
  try {
    const res = await axios.get(`${process.env.BACKEND}/api/quiz`);
    return res.data.sorular;
  } catch (error) {
    console.error("Failed to fetch quiz questions:", error);
    return [];
  }
}

export default async function Quiz() {
  const sorular = await getQuizQuestions();

  return (
    <div className="min-h-screen bg-fixed bg-cover bg-center bg-[url('/image.png')] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Kurtlar Vadisi Bilgi Yarışması
        </h1>
        <QuizForm sorular={sorular} />
      </div>
    </div>
  );
}

