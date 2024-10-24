import React , {useState, useRef} from 'react';
import hinnadJSON from "../../data/hinnad.json";
import { Link } from "react-router-dom";

function HaldaHinnad() {
    const [hinnad, setHinnad] = useState(hinnadJSON.slice());
    const hindRef = useRef();
    const otsingRef = useRef();

    const kustuta = (index) => {
        hinnadJSON.splice(index, 1);
        setHinnad(hinnadJSON.slice());
    }

    const sisesta = () => {
        hinnadJSON.push(
        {
        "number": Number(hindRef.current.value),
        "lisaja": "Toomas"
        
    });
    setHinnad(hinnadJSON.slice());
    }

    const arvutaKokku = () => {
        let summa = 0;

        hinnad.forEach(hind => summa = summa + hind.number)
        return summa;
    }

    const otsi = () => {
        const vastus = hinnadJSON.filter(hind => String(hind.number).includes(otsingRef.current.value));
        setHinnad(vastus);
    }

  return (

    <div>
        <input ref={otsingRef}type="text" />
        <button onClick={otsi}>Otsi</button>
        <div>Kõik hinnad kokku: {arvutaKokku()}</div>
        <br /><br />

        <label>Hind</label><br/>
        <input ref={hindRef} type="number"/><br/>
        <button onClick={sisesta}>Sisesta</button><br/>

        <table>
            <thead>
                <tr>
                    <th>Jrknr</th>
                    <th>Hind</th>
                    <th>Lisaja</th>
                    <th>Kustutamine</th>
                    <th>Muutmine</th>
                </tr>
            </thead>
            <tbody>
            {hinnad.map((hind, index) => 
        <tr key={index}>
            <td>{index}</td>
            <td>{hind.number}</td>
            <td>{hind.lisaja}</td>
            <td><button onClick={() => kustuta(index)}>x</button></td>
            <td><Link to={"/muuda-hind/" + index}><button>Muuda</button></Link></td>

            </tr>)}
            </tbody>
        </table>
      
    </div>
  )
}

export default HaldaHinnad