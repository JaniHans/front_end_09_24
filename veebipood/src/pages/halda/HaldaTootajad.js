import React ,{useRef, useState} from 'react'
import {Link} from "react-router-dom"
import tootajadFailist from "../../data/tootajad.json";

function HaldaTootajad() {
  const [tootajad, setTootajad] = useState(tootajadFailist.slice());
  const otsinR = useRef();
  const nimiRef = useRef();
  const ametRef = useRef();
  const telRef = useRef();

  const kustutaEsimene = () => {
    tootajad.splice(0, 1);
    setTootajad(tootajadFailist.slice());
  }

  const kustutaTeine = () => {
    tootajad.splice(1, 1);
    setTootajad(tootajadFailist.slice());
  }
  
  const kustutaKolmas = () => {
    tootajad.splice(2, 1);
    setTootajad(tootajadFailist.slice());
  }

  const kustutaNeljas = () => {
    tootajad.splice(3, 1);
    setTootajad(tootajadFailist.slice());
  }
  const lisa = () => {
    tootajadFailist.push( {
      "nimi": nimiRef.current.value,
      "amet": ametRef.current.value,
      "tel": telRef.current.value
    })
    setTootajad(tootajadFailist.slice());
  }

  const otsi = () => {
    const vastus = tootajadFailist.filter(tootaja => tootaja.includes(otsinR.current.value));
    setTootajad(vastus)
  }

  const arvutaKokku = () => {
    let summa = 0;
    tootajadFailist.forEach(isik => summa = summa + isik.nimi.length);
    return summa;
  }

  const kustuta = (index) => {
    tootajadFailist.splice(index, 1)
    setTootajad(tootajadFailist.slice())
    
  }

  return (
    <div>
      <div>Tähti kokkku: {arvutaKokku()} </div><br />
        <label>Halda töötajaid</label><br />
        <input ref={otsinR} type="text" /><br />
        <button onClick={otsi}>OTSI</button><br />
        <br />

        <div>Töötajaid kokku {tootajad.length} tk</div>
        {tootajad.length >= 1 && <button onClick={kustutaEsimene}>Kustuta esimene</button>}
        {tootajad.length >= 2 && <button onClick={kustutaTeine}>Kustuta teine</button>}
        {tootajad.length >= 3 && <button onClick={kustutaKolmas}>Kustuta kolmas</button>}
        {tootajad.length >= 4 &&<button onClick={kustutaNeljas}>Kustuta neljas</button>}
      <br />
        <label>Töötaja nimi</label><br/>
        <input ref={nimiRef} type="text" /><br />
        <label>Töötaja amet</label><br/>
        <input ref={ametRef} type="text" /><br/>
        <label>Töötaja telefon</label><br/>
        <input ref={telRef} type="text" /><br/>
        <button onClick={lisa}>LISA</button>

        <table>
          <thead>
            <tr>
              <th>Indeks</th>
              <th>Nimi</th>
              <th>Amet</th>
              <th>Telefon</th>
              <th>Tegevused</th>
            </tr>
          </thead>

        <tbody>
        
        {tootajad.map((tootaja, index) => 
        <tr key = {index}>
          <td>{index}</td>
          <td>{tootaja.nimi}</td>
          <td>{tootaja.amet}</td>
          <td>{tootaja.tel}</td>
          <td>
          
          <button onClick={() => kustuta(index)}>X</button>
          <Link to={"/muuda-tootaja/" + index}>
          <button>Muuda</button>
          </Link>
          </td>
          </tr>)}
          </tbody>
      </table>
    </div>
  )
}

export default HaldaTootajad