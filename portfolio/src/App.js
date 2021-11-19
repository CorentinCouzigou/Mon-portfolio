/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Accueil/Accueil';
import Reports from './pages/A propos/About';
import Products from './pages/Achievements/Achievements';
import Contact from './pages/Contact/Contact';
import Particles from "react-tsparticles";
import Loading from './components/Loading/Loading';
import './reset.css';
import './App.scss';


function App() {
  const [loaded, setLoaded] = useState(true);
  let numberParticles = 20;
  let sizePartciles = 40;
  if (screen.width < 600) {
    numberParticles = 10;
  }
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
      <Particles
        id="tsparticles"
        canvasClassName="canvasParticles"
        className="tsparticles"
        options={{
          fullScreen: {
            enable: false,
          },
          background: {
            color: {
              value: "",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: `${sizePartciles}`,
              },

              repulse: {
                distance: 50,
                duration: 2,
              },
            },
          },
          particles: {
            color: {
              value: "#ff0000",
            },
            links: {
              color: "#ff0000",
              distance: 150,
              enable: true,
              opacity: 1,
              width: 2,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              value: `${numberParticles}`,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 20,
            },
          },
          detectRetina: true,
        }}
      />{" "}
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<Reports />} />
        <Route path='/achievements' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
