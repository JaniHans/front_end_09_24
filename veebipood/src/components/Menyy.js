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
 
  <Link to="logi-sisse">
    <button className="nupp">LogiSisse</button>
  </Link>
  <Link to="profiil">
    <button className="nupp">Profiil</button>
  </Link>
  <Link to="registreeru">
    <button className="nupp">Registreeru</button>
  </Link>
  
  

  <br/> <br/>


  <Link to="esindused">
    <button className="nupp">Esindused</button>
  </Link>
  <Link to="/hinnad">
    <button className="nupp">Hinnad</button>
  </Link>
  <Link to="tooted">
    <button className="nupp">Tooted</button>
  </Link>
  <Link to="tootajad">
    <button className="nupp">Tootajad</button>
  </Link>
  <br/> <br/>
  <Link to="halda-esindused">
    <button className="nupp">Halda esindused</button>
  </Link>
  <Link to="halda-hinnad">
    <button className="nupp">Halda hinnad</button>
  </Link>
  <Link to="halda-tooted">
    <button className="nupp">Halda tooted</button>
  </Link>
  <Link to="halda-tootajad">
    <button className="nupp">Halda töötajad</button>
  </Link>


  </div>
  
  )
}

export default Menu