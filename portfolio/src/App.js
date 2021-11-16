
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, Redirect } from 'react-router-dom';
import Home from './pages/Accueil/Accueil';
import Reports from './pages/A propos/About';
import Products from './pages/Réalisations/Réalisations';
import Contact from './pages/Contact/Contact';
import './reset.css';
import './App.css';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about'  element={<Reports/>} />
          <Route path='/réalisations'  element={<Products/>} />
          <Route path='/contact'  element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
