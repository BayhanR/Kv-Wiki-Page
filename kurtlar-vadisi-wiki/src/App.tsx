import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Layout from './components/Layout';
import Home from './pages/Home';
import Karakterler from './pages/Karakterler';
import Hikaye from './pages/Hikaye';
import Bolumler from './pages/Bolumler';
import Harita from './pages/Harita';
import Test from './pages/Test';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/karakterler" element={<Karakterler />} />
        <Route path="/hikaye" element={<Hikaye />} />
        <Route path="/bolumler" element={<Bolumler />} />
        <Route path="/harita" element={<Harita />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
