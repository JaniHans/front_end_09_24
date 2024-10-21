import React , { useState } from 'react'
import hinnadFailist from "../../data/hinnad.json"
import { Link } from "react-router-dom"

function Hinnad() {
    const [hinnad, setHinnad] = useState(hinnadFailist.slice());

    const reset = () => {
        setHinnad(hinnadFailist)
    }

    const sorteeriKasvavalt = () => {
        hinnad.sort((a, b) => a.number - b.number);
        setHinnad(hinnad.slice());
    }

    const sortreeriKahanevalt = () => {
        hinnad.sort((a, b) => b.number - a.number);
        setHinnad(hinnad.slice());

    }

    const sortreeri = () => {
        hinnad.sort((a, b) => String(a.number).localeCompare(String(b.number)));
        setHinnad(hinnad.slice());
    }

    const filtreeriSuuremKui100 = () => {
        const vastus = hinnadFailist.filter(hind => hind.number >= 100)
        setHinnad(vastus)
    }

    const filtreeriVaiksemKui150 = () => {
        const vastus = hinnadFailist.filter(hind => hind.number < 150)
        setHinnad(vastus)
    }

    
  return (
    <div>
        <button onClick={sorteeriKasvavalt}>Sortreeri kasvavalt</button>
        <button onClick={sortreeriKahanevalt}>Sortreeri kahanevalt</button>
        <button onClick={sortreeri}>Sortreeri</button>
        <br/><br/>

        <button onClick={filtreeriSuuremKui100}>Suurem kui 100</button>
        <button onClick={filtreeriVaiksemKui150}>Väiksem kui 150</button>
        <br /><br />
        {hinnad.map((hind, index) => 
        <Link to={"/hind/" + index}>
        
        <button>{hind.number}
            </button>
        </Link>
        )}
        {/* // mille seast ta filtreerima hakkab jälle hinnad */}
        <br/>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Hinnad