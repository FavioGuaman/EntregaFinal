import React, { useState, useEffect } from "react";


const Favs = () => {

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {

    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleAddToFavorites = (id) => {

    const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(updatedFavorites);
    alert("Dentista eliminado de favoritos");
  };

  return (
    <div>

    </div>
  );
};

export default Favs;
