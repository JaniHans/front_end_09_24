import React , {useState, useRef} from 'react'
import esindusedJSON from "../../data/esindused.json";
import {Link} from "react-router-dom"

function HaldaEsindused() {
    const [esindused, setEsindused] = useState(esindusedJSON.slice());
    const esindusRef = useRef();
    const otsingRef = useRef();
    const telefonRef = useRef();
    const aadressRef = useRef();

    

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
        /// Saku ""
        esindusedJSON.push({
          nimi: esindusRef.current.value,
          aadress: aadressRef.current.value,
          tel: telefonRef.current.value
        }); // --> siis teeb faili juurde lisamise (me küll ise ei näe)
        // (me küll ise ei näe seda failis, aga mälupõhiselt ta on seal)
        // see tähendab , et ka teised lehed näevad seda lisamist, kuna nemad kasutavad sama faili
        setEsindused(esindusedJSON.slice());
    }


    const otsi = () => {
        const vastus = esindusedJSON.filter(esindus => esindus.nimi.includes(otsingRef.current.value));
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
        esindused.forEach(esindus => summa = summa + esindus.nimi.length);
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
        <br />
        <label>Esindused nimi</label><br/>
        
        <input ref={esindusRef} type="text" /><br/>
        <label>Esindused telefon</label><br/>
        <input ref={telefonRef} type="text" /><br/>
        <label>Esindused aadress</label><br/>
        <input ref={aadressRef} type="text" /><br/>
        <button onClick={lisa}>Lisa</button><br/>
        
        <table>
            <thead>
                <tr>
                <th>Indeks</th>
                <th>Nimi</th>
                <th>Aadress</th>
                <th>Telefon</th>
                <th>Tegevused</th>
                </tr>
            </thead>
            <tbody>
            {esindused.map((esindus, index) => 
        <tr>
            <td>{index}</td>
            <td>{esindus.nimi}</td>
            <td>{esindus.aadress}</td>
            <td>{esindus.tel}</td>
            <td>
            <button onClick={() => kustuta(index)}>x</button>
            <Link to={"/muuda-esindus/" + index}>
                <button>Muuda</button>
            </Link>
            </td>
            </tr>)}
            </tbody>
        </table>
      
    </div>
  )
}

export default HaldaEsindused