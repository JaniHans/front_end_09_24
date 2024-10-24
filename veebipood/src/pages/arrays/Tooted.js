import React, {useState} from 'react'
import tootedFailist from "../../data/tooted.json"
import ostukorvJSON from "../../data/ostukorv.json"
import { ToastContainer, toast } from 'react-toastify';

// Proovida võimalikult kaua ise

// Välja kuvada tooted: Nobe, BMW, Tesla, Nissan, Toyota, Bentley
// 2. Sortreerida A-Z, Z-A, tähed kasvavalt, tähed kahanevalt, A-Z teise tähe järgi
// 3. Filtreerida: Esitähe järgi. N, B, T, 3s täht 's', vähemalt 5 tähelised,
// 4. Reset
// 5. Faili tõstmine  jsonisse


function Tooted() {
  const [margid, autoMargid] = useState(tootedFailist.slice());

  const reset = () => {
    autoMargid(tootedFailist);
  }

  const sortreeridaAZ = () => {
    margid.sort();
    // margid.sort((a, b) => a.localeCompare(b))
    autoMargid(margid.slice());
  }

  const sortreeridaZA = () => {
    margid.sort((a, b) => b.localeCompare(a));
    //margid.sort()
    //margid.reverse()
    autoMargid(margid.slice());
  }

  const sortreeridatahedKasvavalt = () => {
    margid.sort((a, b) => a.length - b.length);
    autoMargid(margid.slice());
  }

  const sortreeridatahedKahanevalt = () => {
    margid.sort((a, b) => b.length - a.length);
    autoMargid(margid.slice());
  }

  const sortreeridaAZ2 = () => {
    margid.sort((a, b) => a[1].localeCompare(b[1]));
    autoMargid(margid.slice());
  }

  const filterFirstA = () => {
    const vastus = tootedFailist.filter( mark => mark[0] === "A");
    autoMargid(vastus);
  }

  const filterN = () => {
    const vastus = tootedFailist.filter(mark => mark[0] === "N");
    autoMargid(vastus)
  }

  const filterB = () => {
    const vastus = tootedFailist.filter(mark => mark[0] === "B");
    autoMargid(vastus);
  }

  const filterT = () => {
    const vastus = tootedFailist.filter(mark => mark[0] === "T");
    autoMargid(vastus);
  }

  const filterThirdS = () => {
    const vastus = tootedFailist.filter(mark => mark[2] === "s");
    autoMargid(vastus);
  }

  const filterAtLeast5Letters = () => {
    const vastus = tootedFailist.filter(mark => mark.length >= 5);
    autoMargid(vastus);
  }

  const lisaOstukorv = (auto) => {
    ostukorvJSON.push(auto)
    toast.success("Ostukorvi lisatud!");
  }

  return (
    <div>
       <ToastContainer 
            position="bottom-right"
            autoClose={4000}
            theme="dark"/>
      <button onClick={sortreeridaAZ}>Sortreeri AZ</button>
      <button onClick={sortreeridaZA}>Sortreeri ZA</button>
      <button onClick={sortreeridatahedKasvavalt}>Sortreerida kasvavalt</button>
      <button onClick={sortreeridatahedKahanevalt}>Sortreerida kahanevalt</button>
      <button onClick={sortreeridaAZ2}>Sortreerida AZ 2 tähe järgi</button><br/>
      <br/>
    <button onClick={filterFirstA}>Esitähe A järgi</button><br/>
    <button onClick={filterN}>Filtreerida N tähe järgi</button><br/>
    <button onClick={filterB}>Filtreerida B tähe järgi</button><br/>
    <button onClick={filterT}>Filtreerida T tähe järgi</button><br/>
    <button onClick={filterThirdS}>Kolmas täht "S"</button><br/>
    <button onClick={filterAtLeast5Letters}>Vähemalt viis tähte</button><br/>
    <br/>
    <button onClick={reset}>RESET</button>
    <br/>
    {margid.map(auto => 
    <div key={auto.nimi}>
      <img className={auto.aktiivne ? "pilt" : "mitteaktiivne-pilt"} src={auto.pilt} alt="" />
      <div>{auto.nimi}</div>
      <div>{auto.hind}€</div>
      <div></div>
      
      <button disabled={ auto.aktiivne === false ? true: false} onClick={() => lisaOstukorv(auto)}>Lisa ostukorvi</button>
      </div>)}
    <br/>
    </div>
  )
}

export default Tooted