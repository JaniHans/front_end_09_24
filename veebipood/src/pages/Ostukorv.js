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

  const kustuta = (index) => {
    ostukorvJSON.splice(index, 1)
    setTooted(ostukorvJSON.slice());
   
  }

  return (
    <div>
      {tooted.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>} 
      {/* // kui tooted.length on suurem kui 0 SIIS teeme buttonist edasi liigutuse */}
      {tooted.map((toode, index) => 
      <div>
        <img style={{width: "100px"}} src={toode.pilt} alt="" />
      <div>{toode.nimi}</div>
        <button onClick={() =>kustuta(index)}>x</button>
        </div>)}

      {tooted.length === 0 && 
      <>
      <div>Ostukorv on tühi</div>
      <Link to="/osta-kinkekaart">
      <button>Mine lisa kinkekaart</button>
      </Link>
      </>}
     </div>
  )
}

export default Ostukorv