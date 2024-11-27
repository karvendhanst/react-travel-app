import React from 'react';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Tour from './pages/Tour/Tour';
import Contact from './pages/Contact/Contact';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/tours" element={<Tour/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default App