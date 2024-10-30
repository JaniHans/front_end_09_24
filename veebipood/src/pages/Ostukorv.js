import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ostukorvJSON from "../data/ostukorv.json";


function Ostukorv() {
  // HTML välja kuvamiseks
  // selle muutmiseks mis on HTMLks
  const [tooted, setTooted] = useState(ostukorvJSON);

  const tyhjenda = () => {
    ostukorvJSON.splice(0);
    setTooted(ostukorvJSON.slice());
  }

  const arvutaKokku = () => {
    let summa = 0
    tooted.forEach(element => {
      summa = summa + element.hind;

    });
    return summa; // returni l'heb HTML
  }

  const kustuta = (index) => {
    ostukorvJSON.splice(index, 1)
    setTooted(ostukorvJSON.slice());
   // kui ma ei saada midagi kaasa funktsiooni v'lja kutsudes sulgude sees
   // onclick = {tyhjenda}

   // kui ma saadan midagi kaasa
   // onClick = {()} => kustuta(index)}

   // kui ma soovin funktsiooni k'ivitada ilma nupu vajutusteta
   // <div>{arvutaKokku()}</div>
  }

  return (
    <div>
      <div>{arvutaKokku()}</div>
      {tooted.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>} 
      {/* // kui tooted.length on suurem kui 0 SIIS teeme buttonist edasi liigutuse */}
      {tooted.map((toode, index) => 
      <div>
        <img style={{width: "100px"}} src={toode.pilt} alt="" />
      <div>{toode.nimi}</div>
      <div>{toode.hind}€</div>
        <button onClick={() =>kustuta(index)}>x</button>
        </div>)}
        
      <div>Ostukorv on tühi</div>
      <Link to="/osta-kinkekaart">
      <button>Mine lisa kinkekaart</button>
      </Link>
      
     </div>
  )
}

export default Ostukorv