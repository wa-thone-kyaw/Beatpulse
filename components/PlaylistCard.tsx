"use client";
import React from "react";

const PlaylistCard: React.FC<{ playlist: any }> = ({ playlist }) => {
  return (
    <div className="bg-gray-800 shadow-md rounded-lg p-2 transition transform hover:scale-105">
      <div className="relative group">
        <img
          src={playlist.image}
          alt={playlist.name}
          className="w-full h-32 md:h-40 object-cover rounded-md mb-2"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <button className="bg-yellow-400 text-black rounded-full p-2">
            ▶
          </button>
        </div>
      </div>
      <h3 className="text-base font-bold mb-1 text-white">{playlist.title}</h3>
      <p className="text-xs text-gray-400 mb-1">{playlist.description}</p>
      <p className="text-xs text-gray-400">{playlist.tracks} TRACKS</p>
    </div>
  );
};

export default PlaylistCard;
