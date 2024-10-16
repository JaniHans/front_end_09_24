import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Tagasiside from './pages/Tagasiside';
import TagasisideAndjad from './pages/TagasisideAndjad';


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
      <Routes>
      <Route path="/" exact element={ <div>Tere</div> }/>
      <Route path="/tagasisided" exact element={ <Tagasiside/>}/>
      <Route path="/tagasisideandjad" exact element={ <TagasisideAndjad/>}/>
      </Routes>
    </div>
  );
}

export default App;
