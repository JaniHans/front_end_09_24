import React , {useState, useRef} from 'react';
import hinnadJSON from "../../data/hinnad.json";

function HaldaHinnad() {
    const [hinnad, setHinnad] = useState(hinnadJSON.slice());
    const hindRef = useRef();
    const otsingRef = useRef();

    const kustuta = (index) => {
        hinnadJSON.splice(index, 1);
        setHinnad(hinnadJSON.slice());
    }

    const sisesta = () => {
        hinnadJSON.push(Number(hindRef.current.value));
        setHinnad(hinnadJSON.slice());
    }

    const arvutaKokku = () => {
        let summa = 0;

        hinnad.forEach(hind => summa = summa + hind)
        return summa;
    }

    const otsi = () => {
        const vastus = hinnadJSON.filter(hind => String(hind).includes(otsingRef.current.value));
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

        {hinnad.map((hind, index) => 
        <div>
            {hind}
            <button onClick={() => kustuta(index)}>x</button>
            </div>)}
    </div>
  )
}

export default HaldaHinnad