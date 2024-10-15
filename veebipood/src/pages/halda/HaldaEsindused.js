import React , {useState, useRef} from 'react'
import esindusedJSON from "../../data/esindused.json";

function HaldaEsindused() {
    const [esindused, setEsindused] = useState(esindusedJSON.slice());
    const esindusRef = useRef();
    const otsingRef = useRef();

    const kustutaEsimene = () => {
        esindused.splice(0, 1);
        setEsindused(esindusedJSON.slice());
    }
    const kustutaTeine = () => {
        esindused.splice(1, 1);
        setEsindused(esindusedJSON.slice());
    }

    const kustutaKolmas = () => {
        esindused.splice(2, 1);
        setEsindused(esindusedJSON.slice());
    }

    const kustutaNeljas = () => {
        esindused.splice(3, 1);
        setEsindused(esindusedJSON.slice());
    }

    const kustuta = (index) => {
        esindusedJSON.splice(index, 1);
        setEsindused(esindusedJSON.slice());
    }

    const lisa = () => {
        // esindused.push() --> siis teeb ainult siia lehele selle lisamise, teistele lehtedele mitte
        esindusedJSON.push(esindusRef.current.value); // --> siis teeb faili juurde lisamise (me küll ise ei näe)
        // (me küll ise ei näe seda failis, aga mälupõhiselt ta on seal)
        // see tähendab , et ka teised lehed näevad seda lisamist, kuna nemad kasutavad sama faili
        setEsindused(esindusedJSON.slice());
    }


    const otsi = () => {
        const vastus = esindusedJSON.filter(esindus => esindus.includes(otsingRef.current.value));
        setEsindused(vastus);
    }

    const arvutaKokku = () => {
        let summa = 0;
        // summa = summa + 44;
        // summa = summa + 9;
        // summa = summa + 123;
        // [44, 9, 123]
        // (44 => 44 = 0 + 44)
        // (9 =>   53   = 44 + 9)
        // (123 => == 55 + 123)
        esindused.forEach(esindus => summa = summa + esindus.length);
        return summa;
    }
  return (
    <div>
        <div>Tähti kokku:{arvutaKokku()}tk</div>


        <input ref={otsingRef} type="text"/>
        <button onClick={otsi}>Otsi</button>
        <br />
        <div>Esindusi kokku: {esindused.length} tk</div>
        {esindused.length >= 1 && <button onClick={kustutaEsimene}>Kustuta esimene</button>}
        {esindused.length >= 2 && <button onClick={kustutaTeine}>Kustuta teine</button>}
        {esindused.length >= 3 && <button onClick={kustutaKolmas}>Kustuta kolmas</button>}
        {esindused.length >= 4 && <button onClick={kustutaNeljas}>Kustuta neljas</button>}

        <label>Esindused nimi</label><br/>
        <input ref={esindusRef} type="text" /><br/>
        <button onClick={lisa}>Lisa</button><br/>
        

        {esindused.map((esindus, index) => 
        <div>
            {esindus}
            <button onClick={() => kustuta(index)}>x</button>
            </div>)}
    </div>
  )
}

export default HaldaEsindused