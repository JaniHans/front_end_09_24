// import logo from './logo.svg';
import './App.css';
import {  Route, Routes } from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import Kinkekaart from './pages/Kinkekaart';
import Seaded from './pages/Seaded';
import Lisatoode from './pages/Lisatoode';
import Esindused from './pages/arrays/Esindused';
import Menu from './components/Menu';
import NotFound from './pages/NotFound';
import LogiSisse from "./pages/LogiSisse";
import Profiil from "./pages/Profiil";
import Registreeru from "./pages/Registreeru";
import Hinnad from './pages/arrays/Hinnad';
import Tootajad from './pages/arrays/Tootajad';
import Tooted from './pages/arrays/Tooted';
import HaldaTootajad from './pages/halda/HaldaTootajad';
import HaldaTooted from './pages/halda/HaldaTooted';
import HaldaHinnad from './pages/halda/HaldaHinnad';
import HaldaEsindused from './pages/halda/HaldaEsindused';


// kahte tüüpi errorid:
// run-time error 
// leht läheb üleni valgeks
// viga leiab dev tools inspect - console


// 2. compile - time error
// on näha ka konsoolis (seal kus on tehtud "npm start")
// punane joon all + tekst mis on viga


function App() {
  return (
    <div className="App">
      <Menu/>
     
      

{/* localhost:3000/osta-kinkekaart ---> <div>Kinkkeaardid</div> */}      
      <Routes>
        <Route path="/" element={ <Avaleht/> }/>
        <Route path="/ostukorv" element={ <Ostukorv/>}/> 
        <Route path="/osta-kinkekaart" element={ <Kinkekaart/>}/> 
        <Route path="seaded" element={ <Seaded/>}/> 
        <Route path="lisa-toode" element={ <Lisatoode/>}/> 

        <Route path="esindused" element={ <Esindused/>}/>
        <Route path="*" element={ <NotFound/> } />
        <Route path="profiil" element={ <Profiil/> } />
        <Route path="logi-sisse" element= { <LogiSisse/>} />
        <Route path="registreeru" element= { <Registreeru/>} />

        <Route path="esindused" element={ <Esindused/>}/>
        <Route path="hinnad" element={ <Hinnad/> } />
        <Route path="tooted" element= { <Tooted/>} />
        <Route path="tootajad" element= { <Tootajad/>} />
        
        <Route path="halda-esindused" element={ <HaldaEsindused/>}/>
        <Route path="halda-hinnad" element={ <HaldaHinnad/> } />
        <Route path="halda-tooted" element= { <HaldaTooted/>} />
        <Route path="halda-tootajad" element= { <HaldaTootajad/>} />

      </Routes>
    
    {/* FOOTER */}
    </div>
);
}

export default App;
