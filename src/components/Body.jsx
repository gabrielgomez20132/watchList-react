const Body = () => {
  const movies = [
    { name: "The Shining", imgSrc: "/src/assets/img/imagen_01.jpg" },
    { name: "Parasite", imgSrc: "/src/assets/img/imagen_02.jpg" },
    { name: "Old Boy", imgSrc: "/src/assets/img/imagen_07.jpg" },
    { name: "2001: A Space Odyssey", imgSrc: "/src/assets/img/imagen_08.jpg" },
    { name: "The Substance", imgSrc: "/src/assets/img/imagen_03.jpg" },
    { name: "A Clockwork Orange", imgSrc: "/src/assets/img/imagen_04.jpg" },
    { name: "Perfect Days", imgSrc: "/src/assets/img/imagen_05.jpg" },
    { name: "Esperando la Carroza", imgSrc: "/src/assets/img/imagen_06.jpg" },
    { name: "El Angel", imgSrc: "/src/assets/img/imagen_09.jpg" },
    { name: "El Clan", imgSrc: "/src/assets/img/imagen_10.jpg" },
    { name: "Eyes Wide Shut", imgSrc: "/src/assets/img/imagen_11.jpg" },
    { name: "Monster", imgSrc: "/src/assets/img/imagen_12.jpg" }

    // Agregar más películas
  ];

  return (
    <main>
    <div className="bg-dark-primary py-10"> {/* Fondo con color personalizado */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie, index) => (
          <div key={index} className="bg-dark-secondary rounded-lg shadow-lg overflow-hidden"> {/* Fondo oscuro de la tarjeta */}
            <img src={movie.imgSrc} alt={movie.name} className="w-full h-56 object-cover" /> {/* Imagen de la película */}
            <div className="p-4">
              <h2 className="text-text-primary text-lg text-center font-bold mb-2">
                {movie.name}
              </h2>
              <button
                className="bg-button-primary hover:bg-button-primary-hover active:bg-button-primary-active text-dark-secondary py-2 px-4 rounded-md w-full font-semibold transition-colors duration-300">
                <i className="ph ph-plus"></i> Add to Watchlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </main>
  );
}

export default Body;