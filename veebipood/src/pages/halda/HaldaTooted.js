import React , {useState, useRef} from 'react'
import tootedFailist from "../../data/tooted.json"

function HaldaTooted() {
  const [tooted, setTooted] = useState(tootedFailist.slice());
  const otsingR = useRef();
  const lisaR = useRef();

  const kustutaEsimene = () => {
    tooted.splice(0, 1);
    setTooted(tootedFailist);
  }

  
  const kustutaTeine = () => {
    tooted.splice(1, 1)
    setTooted(tootedFailist)
  }
  
  const kustutaKolmas = () => {
    tooted.splice(2, 1)
    setTooted(tootedFailist)
  }
  
  const kustutaNeljas = () => {
    tooted.splice(3, 1)
    setTooted(tootedFailist)
  }

  const kustuta = (index) => {
    // mida on vaja teha
    // kustuta sellest failist
    //
    tootedFailist.splice(index, 1)
    setTooted(tootedFailist.slice())
  }
  
  const arvutaKokku = () => {
    let summa = 0;
    tootedFailist.forEach(toode => summa = summa + toode.length);
    return summa;
  }

  const lisa = () => {
      // esindused.push() --> siis teeb ainult siia lehele selle lisamise, teistele lehtedele mitte
    tootedFailist.push(lisaR.current.value);
     // (me küll ise ei näe seda failis, aga mälupõhiselt ta on seal)
     // see tähendab , et ka teised lehed näevad seda lisamist, kuna nemad kasutavad sama faili
    setTooted(tootedFailist.slice());
  }

  const otsi = () => {
    const vastus = tootedFailist.filter(toode => toode.includes(otsingR.current.value));
    setTooted(vastus);
  }

  return (
    // Esimest korda ilma vaatamata.
    // Proovida võimalikult vaatamata.
    // Kustuta, Lisa, Otsi, Arvuta toodete tähemärgid kokku.
    <div>
      <div>Tähti kokku: {arvutaKokku()}</div>
      <label>Halda tooted:</label>
      <br/>
      <input ref={otsingR} type="text" />
      <br/>
      <button onClick={otsi}>Otsi</button>
      <br/><br/>

      <br/>
      <div>Tooteid kokku: {tooted.length} tk</div>
      {tooted.length >= 1 && <button onClick={kustutaEsimene}>Kustuta esimene</button>}
      {tooted.length >= 2 &&<button onClick={kustutaTeine}>Kustuta teine</button>}
      {tooted.length >= 3 &&<button onClick={kustutaKolmas}>Kustuta kolmas</button>}
      {tooted.length >= 4 && <button onClick={kustutaNeljas}>Kustuta neljas</button>}
      <br />
      <input ref={lisaR} type="text" />
      <br />
      <button onClick={lisa}>Lisa</button>

      {tooted.map((toode, index) => 
      <div>
        
        {toode}
        <button onClick={() => kustuta(index)}>X</button>
      </div>)}
    </div>
  )
}

export default HaldaTooted