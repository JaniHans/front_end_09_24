import React, { useState } from 'react'
import { Link} from 'react-router-dom'


function Ostukorv() {
  // HTML välja kuvamiseks
  // selle muutmiseks mis on HTMLks
  const [tooted, setTooted] = useState(["Coca", "Fanta", "Sprite"]);
  return (
    <div>
      {tooted.length > 0 && <button onClick={() => setTooted([])}>Tühjenda</button>} 
      {/* // kui tooted.length on suurem kui 0 SIIS teeme buttonist edasi liigutuse */}
      {tooted.map(toode => <div>{toode}</div>)}

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