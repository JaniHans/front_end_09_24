import { Link, Route, Routes } from 'react-router-dom'
import './App.css';
import Kontakt from './pages/Kontakt';
import Meist from "./pages/Meist";
import Seaded from "./pages/Seaded";
import Avaleht from "./pages/Avaleht"
import Leht from './pages/Leht';
import Books from './pages/Books';



function App() {


  return (
    <div>
      <div className='navbar'>
    <Link to="/">
    <button className='navbar-nupud'>Avaleht</button>
    </Link>
    <Link to="/kontakt">
    <button className='navbar-nupud'>Kontaktide lehele</button>
    </Link>
    <Link to="/meist">
    <button className='navbar-nupud'>Meist</button>
    </Link>
    <Link to="/kontakt">
    <button className='navbar-nupud'>Seadetesse</button>
    </Link>
    <Link to="/leht">
    <button className='navbar-nupud'>Leht</button>
    </Link>
    <Link to="/books">
    <button className='navbar-nupud'>Raamatud</button>
    </Link>
    </div>
    <Routes>
        <Route path="/" exact element={ <Avaleht/> } />
        <Route path="kontakt" exact element={ <Kontakt/> } />
        <Route path="meist" exact element={ <Meist/> } />
        <Route path="seaded" exact element={ <Seaded/> } />
        <Route path="leht" exact element={ <Leht/> } />
        <Route path="books" exact element={ <Books/> } />
      </Routes>
  </div>
  
  );
}

export default App;
