import React from 'react'
import { Link } from 'react-router-dom'

//tagasi lingitud

function Menu() {
  return (
    <div>      <Link to ="">
    <img className="pilt" src="https://greenmove.hwupgrade.it/i/n/nobe100_720.jpg" alt="Nobe auto"/>
  </Link>

  <Link to="ostukorv">
    <button className="nupp">Ostukorv</button>
  </Link>
  <Link to="osta-kinkekaart">
    <button className="nupp">Kinkekaart</button>
  </Link>
  <Link to="seaded">
    <button className="nupp">Seaded</button>
  </Link>
  <Link to="lisa-toode">
    <button className="nupp">Lisa toode</button>
  </Link>
  <Link to="esindused">
    <button className="nupp">Esindused</button>
  </Link></div>
  )
}

export default Menu