import React from 'react';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Hero from './components/Hero';
import Subscribe from './components/Subscribe';
import Artist from './components/Artist';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Hero />
      <Artist />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
