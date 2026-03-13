import React from "react";
import { useState, useReducer, useEffect, useMemo, useCallback } from "react";
import useFetchPhotos from "../hooks/useFetchPhotos";
import PhotoCard from "./PhotoCard";
import { favouritesReducer } from "../reducers/favouritesReducer";

export default function Gallery() {
  const { photos, loading, error } = useFetchPhotos();
  const [search, setSearch] = useState("");

  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    [],
    () => JSON.parse(localStorage.getItem("favourites")) || []
  );

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase())
    );
  }, [photos, search]);

  const toggleFavourite = (id) => {
  dispatch({ type: "TOGGLE_FAV", payload: id });
};

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-4">

      <input
        type="text"
        placeholder="Search by author..."
        value={search}
        onChange={handleSearch}
        className="border p-2 mb-4 w-full rounded"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredPhotos.map((photo) => (
          <PhotoCard
  key={photo.id}
  photo={photo}
  isFavourite={favourites.includes(photo.id)}
  toggleFavourite={toggleFavourite}
/>
        ))}
      </div>

    </div>
  );
}