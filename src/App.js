/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Accueil/Accueil';
import Reports from './pages/A propos/About';
import Products from './pages/Achievements/Achievements';
import Contact from './pages/Contact/Contact';
import Loading from './components/Loading/Loading';
import NotFound from './pages/NotFound/NotFound';
import ParticlesComponent from './components/Particles/Particles';
import './reset.css';
import './App.scss';


function App() {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(false)
    }, 1500)
    return () => clearTimeout(timer);
  }, [])
  if (loaded) {
    return (
      <div className="App">
        <Loading />
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <ParticlesComponent />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<Reports />} />
        <Route path='/achievements' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
