import React, { useState, useRef } from 'react'
import nimedFailist from "../data/nimed.json"

function TagasisideAndjad() {
    const [kliendid, setKliendid] = useState(nimedFailist.slice());
    const lisaNimi = useRef();


    // const arvutaKokku = () => {
    //     let summa = 0;
    //     kliendid.forEach(klient => )
    // }

    

    const kustuta = () => {
        nimedFailist.splice(0, 1);
        setKliendid(nimedFailist.slice());
    }

    
    const lisaKlient = () => {
        kliendid.push(lisaNimi.current.value);
        setKliendid(kliendid.slice());
    }

    const sortZA = () => {
        kliendid.sort((a, b) => b.localeCompare(a));
        // kliendid.sort((a, b) => a.slice(4).localeCompare(b.slice(4)));
        setKliendid(kliendid.slice())
    }

    const filterM = () => {
        const vastus = nimedFailist.filter(klient => klient.startsWith("M"));
        setKliendid(vastus);
    }


    const filter6LettersName = () => {
        const vastus = nimedFailist.filter(klient => klient.length === 6);
        setKliendid(vastus);
    }

    const filterIncludesY = () => {
        const vastus = nimedFailist.filter(klient => klient.toLowerCase().includes("y"));
        setKliendid(vastus);
    }


  return (
    <div>
        <br />
        <button onClick={sortZA}>Sortreeri ZA</button>
        <br />
        <label>Kliente kokku: {kliendid.length}tk</label>
        <br />
        <button onClick={filterM}>Jäta alles M tähega nimed</button>
        <button onClick={filter6LettersName}>Jäta alles 6 kohalised nimed</button>
        <button onClick={filterIncludesY}>Jäta kõik y tähega nimed alles</button>

        {/* kuva nimed välja koos "EST" */}
        {/* kustuta igaüht */}
        {/* lisa nimi */}
        <br />
        <label>Lisa nimi</label>
        <input type="text" ref={lisaNimi}/>
        <button onClick={lisaKlient}>Sisesta</button>
        <br />
        <div>
         {kliendid.map((klient, index) =>
        <div>
         {`EST ${klient}`}
         <button onClick={() => kustuta(index)}>X</button>  
        </div>)}
        </div>
    </div>
  )
}

export default TagasisideAndjad