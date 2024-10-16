import './App.css';
import Avaleht from './pages/Avaleht';
import HaldaJooke from './pages/HaldaJooke';
import LisaJook from './pages/LisaJook';
import React, {Link, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className='main'>
      <div className='navbar'>
       <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/halda">
        <button>Halda Jooke</button>
      </Link>
      <Link to="/lisa">
        <button>Lisa jooke</button>
      </Link>
      </div>
      <Routes>
      <Route path="/" exact element={ <Avaleht/> }/>
      <Route path="/halda" exact element={ <HaldaJooke/>}/>
      <Route path="/lisa" exact element={ <LisaJook/>}/>
      </Routes>
    </div>
  );
}

export default App;
