import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Promotions from './components/Promotions';
import LocationSearch from './components/LocationSearch';
import SocialMedia from './components/SocialMedia';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Promotions />
      <LocationSearch />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;
