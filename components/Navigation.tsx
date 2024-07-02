import React from "react";
import Link from "next/link";

const genres = [
  "All",
  "K-Pop",
  "Latino",
  "Frunk",
  "Hip-Hop",
  "Indie",
  "Synth-wave",
  "Old school",
  "R&B",
  "Electronic",
];

const Navigation: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
      <div className="flex items-center space-x-2">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder=""
            className="px-2 py-2 rounded-full bg-gray-700 border border-gray-600 text-gray-200 pl-8"
            style={{ width: "60px" }} 
          />
          <img
            src="/images/search.png" 
            alt="Search"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 h-6 w-6"
          />
        </div>
        <Link href="/explore">
          <button className="bg-white text-gray-800 px-4 py-2 rounded-md hover:underline">
            Explore
          </button>
        </Link>
        <Link href="/generate">
          <button className="text-gray-200 hover:underline">Generate</button>
        </Link>
      </div>
      <div className="flex flex-wrap items-center space-x-2">
        {genres.map((genre) => (
          <Link
            key={genre}
            href={`/genre/${encodeURIComponent(genre.toLowerCase())}`}
          >
            <button className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-500">
              {genre}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
