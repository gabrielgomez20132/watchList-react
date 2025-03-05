import React, { use, useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import WatchListModal from './components/WatchListModal';
import MovieList from './components/MovieList';

function App() {

 const [isModalOpen, setIsModalOpen] = useState(false)
 
 const [watchlist, setWatchlist] = useState([])

  return (
    <div className="flex flex-col min-h-screen">
      <Header setIsModalOpen={setIsModalOpen}/>
      <WatchListModal 
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        
        watchlist={watchlist}
        setWatchlist={setWatchlist}
      
      />
      <MovieList 
       watchlist={watchlist}
       setWatchlist={setWatchlist}
      />
      
      {/* <Body />
      <Footer /> */}
    </div>
  );
}

export default App;
