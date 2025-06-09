import React from "react";
import { Link } from "react-router-dom";

function SongCard({songTitle, artist, picture}) {
  return (
    <div className="flex flex-col p-4 h-72 w-64 bg-black/20 rounded-2xl border-2 border-black/20 hover:border-green-300 transition duration-300">
      {/* Placeholder Album Art */}
      <div className="w-full h-50 bg-gray-700/50 rounded-lg mb-3"></div>
      
      {/* Song Information */}
      <div className="flex flex-col">
        <h2 className="font-bold text-xl text-white truncate">Song Title</h2>
        <h3 className="font-medium text-sm text-white/70">Artist</h3>
      </div>
    </div>
  );
}

export default SongCard;