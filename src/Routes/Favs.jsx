import React, { useState, useEffect } from "react";
import doctorImage from "/images/doctor.jpg"; // Importa la imagen

const Favs = () => {
  // Inicializamos el estado de favoritos con los datos del localStorage
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    // Actualizamos el localStorage cada vez que se modifica el estado de favoritos
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleAddToFavorites = (id) => {
    // Filtramos el dentista con el id especificado
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
