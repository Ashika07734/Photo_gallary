import React from "react";

export default function PhotoCard({ photo, isFavourite, toggleFavourite }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-52 object-cover"
      />

      <div className="flex justify-between items-center p-3">
        <p className="text-sm font-medium">{photo.author}</p>

        <button onClick={() => toggleFavourite(photo.id)} className="text-xl">
          {isFavourite ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}