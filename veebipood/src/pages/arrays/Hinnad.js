import React , { useState } from 'react'
import hinnadFailist from "../../data/hinnad.json"

function Hinnad() {
    const [hinnad, setHinnad] = useState(hinnadFailist.slice());

    const reset = () => {
        setHinnad(hinnadFailist)
    }

    const sorteeriKasvavalt = () => {
        hinnad.sort((a, b) => a - b);
        setHinnad(hinnad.slice());
    }

    const sortreeriKahanevalt = () => {
        hinnad.sort((a, b) => b - a);
        setHinnad(hinnad.slice());

    }

    const sortreeri = () => {
        hinnad.sort();
        setHinnad(hinnad.slice());
    }

    const filtreeriSuuremKui100 = () => {
        const vastus = hinnadFailist.filter(hind => hind >= 100)
        setHinnad(vastus)
    }

    const filtreeriVaiksemKui150 = () => {
        const vastus = hinnadFailist.filter(hind => hind < 150)
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
        {hinnad.map(hind => <button>{hind}</button>)}
        {/* // mille seast ta filtreerima hakkab jälle hinnad */}
        <br/>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Hinnad