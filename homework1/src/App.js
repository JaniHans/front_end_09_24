import { Link, Route, Routes } from 'react-router-dom'
import './App.css';
import Kontakt from './pages/Kontakt';
import Meist from "./pages/Meist";
import Seaded from "./pages/Seaded";
import Avaleht from "./pages/Avaleht"
import { useState , useRef } from 'react'

function App() {
  const [sisselogitud, muudaSisselogitud] = useState("ei");
  const [sonum, muudaSonum] = useState("")
  const kasutajaNimiRef = useRef();
  const paroolRef = useRef();

  const logiSisse = () => {
    if (paroolRef.current.value === "123") {
    muudaSisselogitud("jah");
    muudaSonum(kasutajaNimiRef.current.value + "Oled sisselogitud");
  } else {
    muudaSonum("Vale parool")
  }
}

const logiValja = () => {
  muudaSisselogitud("ei");
  muudaSonum("");
} 

  return (
    <div className="App">
      <div>{sonum}</div>
      { sisselogitud=== "ei" && 
      <div>
      <label>Kasutajanimi</label> <br/>
      <input ref={kasutajaNimiRef} type="text" /> <br/>
      <label>Parool</label>
      <input ref={paroolRef} type='password' /> <br/>
      </div>}
     { sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button>}
      { sisselogitud === "jah" && <button onClick={logiValja}>Logi välja</button>}
    
    <div>--- SIIN ON VARASEM KODUTÖÖ</div>
    <Link to="/">
    <button>Avaleht</button>
    </Link>
    <Link to="/kontakt">
    <button>Kontaktide lehele</button>
    </Link>
    <Link to="/meist">
    <button>Meist</button>
    </Link>
    <Link to="/kontakt">
    <button>Seadetesse</button>
    </Link>

    <Routes>
        <Route path="" exact element={ <Avaleht/> } />
        <Route path="kontakt" exact element={ <Kontakt/> } />
        <Route path="meist" exact element={ <Meist/> } />
        <Route path="seaded" exact element={ <Seaded/> } />
      </Routes>
  </div>
  
  );
}

export default App;
