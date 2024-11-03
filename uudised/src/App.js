import './App.css';

import Avaleht from './pages/Avaleht';
import Uudised from './pages/Uudised';
import Kontakt from './pages/Kontakt';
import Meist from './pages/Meist';
import LisaUudis from './pages/LisaUudis';
import YksUudis from './pages/YksUudis';

import { Link, Route, Routes } from "react-router-dom";
import HaldaUudiseid from './pages/HaldaUudiseid';
import MuudaUudis from './pages/MuudaUudis';
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
      <Link to="/lisa-uudis">
      <button>Uudiste lisamise lehele</button>
      </Link>
      <Link to="/halda">
      <button>Halda uudiseid</button>
      </Link>

      <Routes>
        <Route path="" element={ <Avaleht/> } />
        <Route path="Uudised" element={ <Uudised />} />
        <Route path="Kontakt" element={ <Kontakt />}/>
        <Route path="Meist" element={ <Meist />}/>

        <Route path="lisa-uudis" element={ <LisaUudis />}/>
        <Route path="halda" element={ <HaldaUudiseid />}/>
        <Route path="uudis/:index" element={ <YksUudis />}/>
        <Route path="uudis/:index" element={ <MuudaUudis />}/>
      </Routes>
    </div>
);
}

export default App;
