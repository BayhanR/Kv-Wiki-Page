'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle } from 'lucide-react';
import axios from "axios";

interface Secenek {
  value: string;
  secenek: string;
}

interface Soru {
  id: string;
  soru: string;
  secenekler: Secenek[];
}

interface QuizFormProps {
  sorular: Soru[];
}

export default function QuizForm({ sorular }: QuizFormProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswer = (questionId: string, answer: string) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: answer }));
    if (currentQuestionIndex < sorular.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      Object.entries(userAnswers).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const res = await axios.post("/api/quiz", formData);
      setScore(res.data.score);
      setIsFinished(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setScore(0);
    setIsFinished(false);
  };

  const currentQuestion = sorular[currentQuestionIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-lg p-8 max-w-2xl mx-auto"
    >
      <AnimatePresence mode="wait">
        {!isFinished ? (
          <motion.form
            key="quiz-form"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <motion.div
              key={currentQuestion.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                Soru {currentQuestionIndex + 1} / {sorular.length}
              </h2>
              <p className="text-xl text-gray-200 mb-6">{currentQuestion.soru}</p>
              <div className="space-y-4">
                {currentQuestion.secenekler.map((secenek) => (
                  <motion.button
                    key={secenek.value}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAnswer(currentQuestion.id, secenek.value)}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      userAnswers[currentQuestion.id] === secenek.value
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-700 text-gray-200 hover:bg-gray-600"
                    }`}
                  >
                    {secenek.secenek}
                  </motion.button>
                ))}
              </div>
            </motion.div>
            {currentQuestionIndex === sorular.length - 1 && (
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-lg bg-green-500 text-white font-semibold text-lg hover:bg-green-600 transition-colors disabled:opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? "Gönderiliyor..." : "Bitir"}
              </motion.button>
            )}
          </motion.form>
        ) : (
          <motion.div
            key="quiz-result"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Quiz Tamamlandı!</h2>
            <p className="text-2xl text-gray-200 mb-6">
              Bildiğiniz Soru Sayısı: {score} / {sorular.length}
            </p>
            <div className="flex justify-center items-center space-x-4 mb-8">
              {score === sorular.length ? (
                <CheckCircle className="w-16 h-16 text-green-500" />
              ) : (
                <XCircle className="w-16 h-16 text-red-500" />
              )}
              <p className="text-xl text-gray-200">
                {score === sorular.length
                  ? "Mükemmel! Tüm soruları doğru cevapladınız."
                  : "İyi iş çıkardınız! Pratik yapmaya devam edin."}
              </p>
            </div>
            <motion.button
              onClick={resetQuiz}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Yeniden Başla
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

