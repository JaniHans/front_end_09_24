import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';
import Tegevused from './pages/Tegevused';
import Kliendid from './pages/Kliendid';

function App() {
  return (
    <div className="App">
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/tagasisided">
        <button>Tagasiside lehele</button>
      </Link>
      <Link to="/tagasisideandjad">
        <button>Tagasiside andjad</button>
      </Link>
      <Link to="/tegevused">
        <button>Vaata, mis ülesandeid veel tegema pead</button>
      </Link>
      <Link to="/kliendid">
        <button>Klientide lehele</button>
      </Link>
      <Routes>
      <Route path="/" exact element={ <div>Tere</div> }/>
      <Route path="/tagasisided" exact element={ <Tagasiside/>}/>
      <Route path="/tagasisideandjad" exact element={ <TagasisideAndjad/>}/>
      <Route path="/tegevused" exact element={ <Tegevused/>}/>
      <Route path="/kliendid" exact element={ <Kliendid/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
