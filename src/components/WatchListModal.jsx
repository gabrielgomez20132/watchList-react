import React, { useEffect } from 'react';

const WatchListModal = ({ isModalOpen, setIsModalOpen, watchlist, setWatchlist }) => {
  if (!isModalOpen) {
    return null;
  }

  const onClose = () => setIsModalOpen(false);

  // Carga la watchlist desde localStorage cuando el modal se abre.
  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(storedWatchlist);
  }, [isModalOpen]);

  const removeFrontWatchList = (id) => {
    const updatedWatchlist = watchlist.filter((movie) => movie.id !== id);
    setWatchlist(updatedWatchlist);
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist)); // Guarda en localStorage cada vez que eliminas una película.
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md relative'>
        <p>WatchListModal</p>
        <button onClick={onClose}>❌</button>
        {
          watchlist.length === 0 ? (
            <p>No hay películas</p>
          ) : (
            watchlist.map((movie) => {
              return (
                <div key={movie.id}>
                  <p>{movie.name}</p>
                  <button className='bg-red-500 p-2' onClick={() => removeFrontWatchList(movie.id)}>
                    Remover película
                  </button>
                </div>
              );
            })
          )
        }
      </div>
    </div>
  );
}

export default WatchListModal;
