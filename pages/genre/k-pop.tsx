import React from "react";
import PlaylistCard from "@/components/PlaylistCard";
import "../../styles/globals.css";
import Navigation from "@/components/Navigation";

import Header from "@/components/Header";
const KPopPage: React.FC = () => {
  return (
    <div>
      <Navigation />
      <section className="bg-purple-600 p-6 text-white">
        <h1 className="text-3xl font-bold mb-4">K-Pop</h1>
        <p className="mb-6">
          Features catchy, upbeat melodies and often youthful, colorful themes,
          appealing to younger audiences.
        </p>
        <div className="flex space-x-4 overflow-x-scroll pb-4">
          <div className="bg-white text-black p-4 rounded-lg w-64">
            <img
              src="/images/kpop/iu.jpg"
              alt="Playlist Cover"
              className="rounded mb-2"
            />
            <h2 className="font-bold">So Quiet</h2>
            <p className="text-sm">Creator - 10 Tracks</p>
          </div>
        </div>
      </section>
      <section className="bg-black text-white p-6">
        <h2 className="text-2xl font-bold mb-4">
          Inspired by your major artists
        </h2>
        <div className="flex space-x-4 overflow-x-scroll pb-4">
          <div className="bg-gray-800 p-4 rounded-lg w-48">
            <img
              src="/images/kpop/iu1.jpg"
              alt="Artist"
              className="rounded-full mb-2"
            />
            <h3 className="font-bold">KOREANGROOVE</h3>
            <p className="text-sm">TRENDING - 34</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex justify-between items-center mb-2">
            <div>
              <button className="bg-gray-700 px-3 py-1 rounded mr-2">
                All beats
              </button>
              <button className="bg-gray-700 px-3 py-1 rounded">Mood</button>
            </div>
            <div>
              <button className="bg-gray-700 px-3 py-1 rounded">Sort by</button>
            </div>
          </div>
          <table className="w-full text-left table-fixed">
            <thead className="bg-gray-800">
              <tr>
                <th className="w-1/2 p-2">Track</th>
                <th className="w-1/4 p-2">BPM</th>
                <th className="w-1/4 p-2">Key</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-700">
                <td className="p-2">Super Shy</td>
                <td className="p-2">164 BPM</td>
                <td className="p-2">C Maj</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default KPopPage;
