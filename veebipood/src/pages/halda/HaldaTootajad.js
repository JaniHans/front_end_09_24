import React ,{useRef, useState} from 'react'
import tootajadFailist from "../../data/tootajad.json";

function HaldaTootajad() {
  const [tootajad, setTootajad] = useState(tootajadFailist.slice());
  const otsinR = useRef();
  const lisaR = useRef();

  const kustutaEsimene = () => {
    tootajad.splice(0, 1);
    setTootajad(tootajad);
  }

  const kustutaTeine = () => {
    tootajad.splice(1, 1);
    setTootajad(tootajad);
  }
  
  const kustutaKolmas = () => {
    tootajad.splice(2, 1);
    setTootajad(tootajad);
  }

  const kustutaNeljas = () => {
    tootajad.splice(3, 1);
    setTootajad(tootajad);
  }
  const lisa = () => {
    tootajadFailist.push(lisaR.current.value);
    setTootajad(tootajadFailist.slice());
  }

  const otsi = () => {
    const vastus = tootajadFailist.filter(tootaja => tootaja.includes(otsinR.current.value));
    setTootajad(vastus)
  }

  const arvutaKokku = () => {
    let summa = 0;
    tootajadFailist.forEach(sum => summa = summa + sum.length);
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
        <input ref={lisaR} type="text" /><br />
        <button onClick={lisa}>LISA</button>

        <br />
        {tootajad.map((tootaja, index) => 
        <div>
          {tootaja}
          <button onClick={() => kustuta(index)}>X</button>
      </div>)}

    </div>
  )
}

export default HaldaTootajad