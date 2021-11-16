import Navbar from './components/Navbar/Navbar';
import { Routes, Route, Redirect } from 'react-router-dom';
import Home from './pages/Accueil/Accueil';
import Reports from './pages/A propos/About';
import Products from './pages/Réalisations/Réalisations';
import Contact from './pages/Contact/Contact';
import Particles from "react-tsparticles";
import './reset.css';
import './App.scss';


function App() {
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
                size: 40,
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
              color: "",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
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
              value: 20,
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
        <Route path='/réalisations' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
