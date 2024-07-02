"use client";
import React, { useEffect, useState } from "react";

const ForYouSection: React.FC = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("/api/suggestions")
      .then((response) => response.json())
      .then((data) => setSuggestions(data));
  }, []);

  return (
    <section className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg md:text-2xl font-bold">For you</h2>
        <a href="#" className="text-sm md:text-base text-gray-400">
          View all
        </a>
      </div>
      <p className="text-sm md:text-lg mb-4 text-gray-400">
        Suggestion on your style
      </p>
      <div className="space-y-4">
        {suggestions.map((suggestion: any, index: number) => (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-800 p-2 rounded-md shadow-md"
          >
            <div className="flex items-center">
              <img
                src={suggestion.image}
                alt={suggestion.title}
                className="w-12 h-12 object-cover rounded-md mr-4"
              />
              <div>
                <h3 className="text-sm md:text-base font-bold text-white">
                  {suggestion.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-400">
                  {suggestion.artist}
                </p>
              </div>
              {suggestion.isNew && (
                <span className="ml-4 text-xs md:text-sm bg-green-600 text-white rounded-full px-2 py-1">
                  New
                </span>
              )}
            </div>
            <div className="flex items-center">
              <div className="text-xs md:text-sm text-gray-400 flex items-center">
                <span className="mr-2">🎤</span>
                <span className="mr-4">{suggestion.duration}</span>
                <span className="mr-4">{suggestion.bpm} BPM</span>
                <span className="mr-4">{suggestion.key}</span>
              </div>
              <div className="flex space-x-2">
                {suggestion.genres.map((genre: string, index: number) => (
                  <span
                    key={index}
                    className="text-xs md:text-sm bg-gray-700 text-gray-400 rounded-full px-2 py-1"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              <button className="ml-4 text-gray-400">⋮</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ForYouSection;
