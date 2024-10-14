import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Tagasiside from './pages/Tagasiside';


function App() {
  return (
    <div className="App">
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/tagasisided">
        <button>Tagasisidede lehele</button>
      </Link>
      <Routes>
      <Route path="/" exact element={ <div>Tere</div> }/>
      <Route path="/tagasisided" exact element={ <Tagasiside/>}/>
      </Routes>
    </div>
  );
}

export default App;
