import React, { useState } from 'react';

const History = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="history-section text-center mt-2">
      <button
        onClick={toggleAccordion}
        className="accordion-toggle bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
      >
        {isOpen ? 'Cerrar Ubicación' : 'Mostrar Ubicación'}
      </button>
      <div
        className={`accordion-content mt-1 p-6 border-2 border-blue-500 rounded-lg shadow-md transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          overflow: 'hidden',
        }}
      >
        {isOpen && (
          <>
            <h2 className="text-2xl font-semibold mb-3">Catamarca</h2>
            <p className="text-lg text-gray-700">
              Está ubicada al noroeste del país, en la región del Norte Grande Argentino, limitando al norte con Salta, al este con Tucumán y Santiago del Estero, al sureste con Córdoba, al sur con La Rioja y al oeste con Chile, cuyo límite está determinado por la divisoria de agua de la cordillera de los Andes. Con 368,000 habitantes en 2010, es la quinta provincia menos poblada —por delante de La Rioja, La Pampa, Santa Cruz y Tierra del Fuego, Antártida e Islas del Atlántico Sur, la menos poblada— y con 3,5 hab/km², la quinta menos densamente poblada, por delante de Río Negro, Chubut, La Pampa y Santa Cruz, la menos densamente poblada.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default History;

