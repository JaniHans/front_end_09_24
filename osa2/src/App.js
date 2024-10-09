import { Link, Route, Routes } from 'react-router-dom'
import './App.css';
import SõneMeetodid from './pages/SõneMeetodid';
import SõneUurimine from './pages/SõneUurimine';
import TõesusVäärtused from './pages/TõesusVäärtused';
import SõneArvuKombineerimine from './pages/SõneArvuKombineerimine';
import AlgabTähemärgiga from './pages/AlgabTähemärgiga';
import PikkuseKontroll from './pages/PikkuseKontroll';
import { useState } from 'react';

function App() {
  const [kasutajanimi, muudaKasutajanimi] = useState("Kasutaja1");
  const [kogus, muudaKogus] = useState(5);
  const [teade, muudaTeade] = useState("Tere")
  const [vanus, muudaVanus] = useState(65);
  return (
    <div className="App">
      <div className='osa1'>
      {kasutajanimi} <br/>
      <button onClick={() => muudaKasutajanimi("muuKasutaja2")}>Muuda</button><br/>
      <button onClick={() => muudaKogus(kogus * 3)}>Muuda</button><br/>
      {kogus}<br/>
      <button onClick={() => muudaTeade({teade} + "Maailm!")}>Muuda</button><br/>
      {teade === "Tere Maailm!" && {teade}}<br/>
      {vanus >= 65 && "oled pensionil"}<br/>
      {vanus < 65 && "oled tööealine"}
      <button onClick={() => muudaVanus(vanus - 1)}>-</button>
      <button onClick={() => muudaVanus(vanus + 1)}>+</button>

      </div>
      <Link to="/sone-meetodid">
    <button className='navbar-nupud'>Sõne meetodid</button>
    </Link>
    <Link to="/sone-uurimine">
    <button className='navbar-nupud'>Sõne uurimine</button>
    </Link>
    <Link to="/toesusvaartused">
    <button className='navbar-nupud'>Tõesusväärtused</button>
    </Link>
    <Link to="/sonad-arvud">
    <button className='navbar-nupud'>Sõne ja Arvud</button>
    </Link>
    <Link to="/algabtahega"><button className='navbar-nupud'>Algab tähega</button></Link>
    <Link to="/pikkusekontroll"><button className='navbar-nupud'>Pikkuse kontroll</button></Link>
    
    <Routes>
        <Route path="/sone-meetodid" exact element={ <SõneMeetodid/> } />
        <Route path="sone-uurimine" exact element={ <SõneUurimine/> } />
        <Route path="toesusvaartused" exact element={ <TõesusVäärtused/> } />
        <Route path="sonad-arvud" exact element={ <SõneArvuKombineerimine/> } />
        <Route path="algabtahega" exact element={ <AlgabTähemärgiga/> } />
        <Route path="pikkusekontroll" exact element={ <PikkuseKontroll/> } />
      </Routes>
    </div>
  );
}

export default App;
