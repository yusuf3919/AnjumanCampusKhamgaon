import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './input.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import About from './Components/About';
import ItiPics from './Components/ItiPics';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/anjuman" element={<ItiPics />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
