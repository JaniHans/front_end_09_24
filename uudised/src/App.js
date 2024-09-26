import './App.css';

import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';

import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="/App">
      <Link to="">
      <button>Avalehele</button>
      </Link>

      <Link to="/Uudised">
      <button>Uudiste lehele</button>
      </Link>

      <Link to="/Kontakt">
      <button>Võta meiega ühendust</button>
      </Link>

      <Link to="/Meist">
      <button>Info meist</button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht/> } />
        <Route path="Uudised" element={ <Uudised />} />
        <Route path="Kontakt" element={ <Kontakt />}/>
        <Route path="Meist" element={ <Meist />}/>
      </Routes>
    </div>
);
}

export default App;
