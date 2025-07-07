"use client";

import { useState } from "react";
import { quotes as allQuotes } from "../data/quotes";


const uniqueTopics = Array.from(new Set(allQuotes.map(q => q.topic))).sort();

export default function QuoteCarousel() {
  const [filteredQuotes, setFilteredQuotes] = useState<string[]>([]);
  const [inputTopic, setInputTopic] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const topic = inputTopic.trim().toLowerCase();
    const matches = allQuotes
      .filter((q) => q.topic.toLowerCase() === topic)
      .map((q) => q.text);
    setFilteredQuotes(matches.length > 0 ? matches : ["No quotes found for this topic."]);
  };

  return (
    <main className="relative h-screen w-full bg-cover bg-center bg-[url('/bg.jpg')] text-white bg-cover bg-center brightness-50 h-screen w-full">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
<h1 className="text-4xl font-bold mb-8 text-center bg-white/20 px-6 py-3 rounded-xl shadow text-white backdrop-blur-sm border border-white/30">
  Quote Generator
</h1>

        <form
  onSubmit={handleSubmit}
  className="flex flex-col gap-4 bg-black/60 p-8 rounded-xl w-[90%] max-w-xl items-center shadow-2xl backdrop-blur-md"
>

          <select
            value={inputTopic}
            onChange={(e) => setInputTopic(e.target.value)}
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>Select a topic</option>
            {uniqueTopics.map((topic) => (
              <option key={topic} value={topic}>
                {topic.charAt(0).toUpperCase() + topic.slice(1)}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-semibold shadow"
          >
            Show Quotes
          </button>
        </form>

        {filteredQuotes.length > 0 && (
          <div className="mt-6 bg-white/10 p-4 rounded-md max-w-xl w-full max-h-64 overflow-y-auto text-yellow-300 space-y-4">
            {filteredQuotes.map((quote, i) => (
              <p key={i} className="font-semibold">“{quote}”</p>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
