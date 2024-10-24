import React, {useState} from 'react'
import tootajadFailist from "../../data/tootajad.json";
import { Link } from 'react-router-dom';

// Välja kuvada töötajad: mõtle ise 10x eesnime välja
// 2. Sortreerida A-Z, Z-A, tähed kasvavalt, tähed kahanevalt, A-Z teise tähe järgi
// 3. Filtreerida: 
    // 1. Täpselt 3 tähelised
    // 2 . Rohkem kui 5 tähelised
    // 3. "ai" lühendit sisaldavad
    // 4. Kellel on neljas täht "i"
    // 5. "M" tähega algavad
    // 6. Huvitav: Paarisarv tähti
// 4. Reset
// 5. Faili tõstmine  jsonisse

function Tootajad() {
  const [tootajad, tNimistu] = useState(tootajadFailist.slice());

  const reset = () => {
    tNimistu(tootajadFailist);
  }

  const sortreeriAZ = () => {
    // keskused.sort();
    tootajad.sort((a, b) => a.nimi.localeCompare(b.nimi));
    tNimistu(tootajad.slice());
  }

  const sortreeriZA = () => {
    // keskused.sort();
  // keskused.reverse()
    tootajad.sort((a,b) => b.nimi.localeCompare(a.nimi));
    tNimistu(tootajad.slice());
    
  }

  const sortreeriTahedKasvavalt = () => {
    tootajad.sort((a, b) => a.nimi.length - b.nimi.length);
    tNimistu(tootajad.slice());
  }

  const sortreeriTahedKahanevalt = () => {
    tootajad.sort((a, b) => b.nimi.length - a.nimi.length);
    tNimistu(tootajad.slice());
  }

  const kolmeTahelisedTootajad = () => {
    const vastus = tootajadFailist.filter(t => t.nimi.length === 3);
    tNimistu(vastus);
  }

  const rohkemKuiViieTahlised = () => {
    const vastus = tootajadFailist.filter(t => t.nimi.length > 5);
    tNimistu(vastus);
  }

  const sisaldavadAi = () => {
    const vastus = tootajadFailist.filter(t => t.nimi.includes("ai"));
    tNimistu(vastus);
  }

  const neljasTahtI = () => {
    const vastus = tootajadFailist.filter(t => t.nimi[3] === "i");
    tNimistu(vastus);
  }

  const algavadMtahega = () => {
    const vastus = tootajadFailist.filter(t => t.toLowerCase().startsWith("m"));
    // saab teha lowercase conversioni chainida juurde meetodit startswith on piisav
    tNimistu(vastus);
  }

  const paarisArvTahti = () => {
    const vastus = tootajadFailist.filter(t => t.length % 2 === 0);
    tNimistu(vastus);
  }


  return (
    <div>
      <button onClick={sortreeriAZ}>Sortreeri AZ</button>
      <button onClick={sortreeriZA}>Sortreeri ZA</button>
      <button onClick={sortreeriTahedKasvavalt}>Sortreeri tähedkasvavalt</button>
      <button onClick={sortreeriTahedKahanevalt}>Sortreeri tähed kahanevalt</button>
        <br/><br/>
      <button onClick={kolmeTahelisedTootajad}>Kolme tähelised </button>
      <button onClick={rohkemKuiViieTahlised}>Rohkem kui viie tähelised</button>
      <button onClick={sisaldavadAi}>Töötajad sisaldavad "AI"</button>
      <button onClick={neljasTahtI}>Neljas täht on "I"</button>
      <button onClick={algavadMtahega}>Algavad M tähega</button>
      <button onClick={paarisArvTahti}>Paaris arv tähti</button><br/>
      <br/>

      <div>
      {tootajad.map((tootaja, index) =>
      <Link to={"/tootaja/" + index}>
        <button>{tootaja.nimi}
          
        </button>
        
        </Link>
      )}
      <button onClick={reset}>Reset</button><br/>
      </div>
    </div>
  )
}

export default Tootajad