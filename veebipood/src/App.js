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
import MuudaHind from './pages/muuda/MuudaHind';
import MuudaEsindus from './pages/muuda/MuudaEsindus';
import MuudaTootaja from './pages/muuda/MuudaTootaja';
import MuudaToode from './pages/muuda/MuudaToode';
import YksEsindus from './pages/yks/YksEsindus';
import YksHind from './pages/yks/YksHind';
import YksToode from './pages/yks/YksToode';
import YksTootaja from './pages/yks/YksTootaja';
// kahte tüüpi errorid:
// run-time error 
// leht läheb üleni valgeks
// viga leiab dev tools inspect - console


// 2. compile - time error
// on näha ka konsoolis (seal kus on tehtud "npm start")
// punane joon all + tekst mis on viga
  // const cars = ["Saab", "Volvo", "BWM"];

  // let x = cars[1];

  // const leitud = esindusedJSON[jrknr]

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

        <Route path="muuda-esindus/:jarjekorranumber" element={ <MuudaEsindus/>}/>
        <Route path="muuda-hind/:ix" element={ <MuudaHind/> } />
        <Route path="muuda-toode/:qwerty" element= { <MuudaToode/>} />
        <Route path="muuda-tootaja/:asdasd" element= { <MuudaTootaja/>} />

        <Route path="esindus/:jrknr" element={ <YksEsindus/>}/>
       

        <Route path="hind/:i" element={ <YksHind/> } />
        <Route path="toode/:t" element= { <YksToode/>} />
        <Route path="tootaja:j" element= { <YksTootaja/>} />

     

      </Routes>
    
    {/* FOOTER */}
    </div>
);
}

export default App;
