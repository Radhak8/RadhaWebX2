
"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Quotes() {
  const [quotes, setQuotes] = useState([
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs"
  ]);
  const [newQuote, setNewQuote] = useState('');
  const [currentQuote, setCurrentQuote] = useState(0);

  const addQuote = () => {
    if (newQuote.trim() !== '') {
      setQuotes([...quotes, newQuote]);
      setNewQuote('');
    }
  };

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <section id="quotes" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Inspiring Quotes
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8 h-64 flex items-center justify-center">
            <AnimatePresence mode='wait'>
              <motion.p
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl italic text-center text-gray-300"
              >
                "{quotes[currentQuote]}"
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="flex justify-center space-x-4 mb-8">
            <Button onClick={prevQuote} variant="outline">Previous</Button>
            <Button onClick={nextQuote} variant="outline">Next</Button>
          </div>
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="Add a new quote"
              value={newQuote}
              onChange={(e) => setNewQuote(e.target.value)}
              className="flex-grow"
            />
            <Button onClick={addQuote}>Add Quote</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
