import React, { useEffect } from 'react';
import movies from '../api/movies.json';

function MovieList({ watchlist, setWatchlist }) {
  
  // Usar useEffect para cargar la watchlist desde localStorage al montar el componente
  useEffect(() => {
    const storedWatchlist = localStorage.getItem('watchlist');
    if (storedWatchlist) {
      setWatchlist(JSON.parse(storedWatchlist)); // Cargar la watchlist desde localStorage
    }
  }, [setWatchlist]); // Asegúrate de que setWatchlist no cambie


  // Función para agregar una película a la watchlist
  const addToWatchList = (movie) => {

    const exists = watchlist.some((m) => m.id === movie.id);

    if (exists) {
      alert("Esta película ya está en la Watchlist."); 
      return;
    }

    const updatedWatchlist = [...watchlist, movie];
    setWatchlist(updatedWatchlist);
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist)); // Guardar la lista actualizada en localStorage
  };

  return (
    <div className='p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
      {movies.map((movie, index) => (
        <div key={index} className="bg-dark-secondary rounded-lg shadow-lg overflow-hidden"> {/* Fondo oscuro de la tarjeta */}
          <img src={`src/assets/img/${movie.img}.jpg`} alt={movie.name} className="w-full h-56 object-cover" /> {/* Imagen de la película */}
          <div className="p-4">
            <h2 className="text-text-primary text-lg text-center font-bold mb-2">
              {movie.name}
            </h2>
            <button
              className="bg-green-500 p-2 mx-auto block active:scale-95 transition-transform duration-100 shadow-lg hover:bg-green-600"
              onClick={() => addToWatchList(movie)}>
              Agregar a Watchlist
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;