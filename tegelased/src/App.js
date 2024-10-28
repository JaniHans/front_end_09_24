import { Link, Navigate, Route, Routes} from 'react-router-dom'
import './App.css';
import LisaUusTegelane from './pages/LisaUusTegelane';
import LisaTegelane from './pages/LisaTegelane';
import Avaleht from "./pages/Avaleht";
import ValitudTegelased from './pages/ValitudTegelased';

// path ja link to peavad olema samad

function App() {
  return (
    <div className='App'>
      <Link to="/Avaleht"><button>Avaleht</button></Link>
      <Link to="/lisa-tegelane"><button>Lisa</button></Link>
      <Link to="/lisa-uus-tegelane"><button>Muutmine</button></Link>
      <Link to="/valitud-tegelane"><button>Telefon</button></Link>
      

      <Routes>
        <Route path="/" element={ <Navigate to="/Avaleht"/>} />
        <Route path="/Avaleht" element={ <Avaleht/>} />
        <Route path="/lisa-tegelane" element={ <LisaTegelane/>} />
        <Route path="/lisa-uus-tegelane" element={ <LisaUusTegelane/>} />
        <Route path="/valitud-tegelane" element= { <ValitudTegelased/>} />
        

      </Routes>
    </div>
  );
}

export default App;
