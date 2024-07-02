"use client";
import React, { useEffect, useState } from "react";
import PlaylistCard from "./PlaylistCard";
import Navigation from "./Navigation";
import ForYouSection from "./ForYouSection";

const MainSection: React.FC = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetch("/api/playlists")
      .then((response) => response.json())
      .then((data) => setPlaylists(data));
  }, []);

  return (
    <main className="bg-gray-900 p-2 md:p-8 text-white min-h-screen">
      <Navigation />

      <h2 className="text-lg md:text-4xl font-bold mb-2 md:mb-4 mt-4">
        Explore
      </h2>
      <p className="text-sm md:text-lg mb-2 md:mb-4">
        Explore our curated playlists.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-4">
        {playlists.map((playlist: any, index: number) => (
          <div key={index}>
            <PlaylistCard playlist={playlist} />
          </div>
        ))}
      </div>
      <ForYouSection />
    </main>
  );
};

export default MainSection;
