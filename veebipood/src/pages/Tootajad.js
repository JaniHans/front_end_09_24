import React, {useState} from 'react'
import tootajadFailist from "../data/tootajad.json";

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
    tootajad.sort((a, b) => a.localeCompare(b));
    tNimistu(tootajad.slice());
  }

  const sortreeriZA = () => {
    // keskused.sort();
  // keskused.reverse()
    tootajad.sort((a,b) => b.localeCompare(a));
    tNimistu(tootajad.slice());
    
  }

  const sortreeriTahedKasvavalt = () => {
    tootajad.sort((a, b) => a.length - b.length);
    tNimistu(tootajad.slice());
  }

  const sortreeriTahedKahanevalt = () => {
    tootajad.sort((a, b) => b.length - a.length);
    tNimistu(tootajad.slice());
  }

  const kolmeTahelisedTootajad = () => {
    const vastus = tootajadFailist.filter(t => t.length === 3);
    tNimistu(vastus);
  }

  const rohkemKuiViieTahlised = () => {
    const vastus = tootajadFailist.filter(t => t.length > 5);
    tNimistu(vastus);
  }

  const sisaldavadAi = () => {
    const vastus = tootajadFailist.filter(t => t.includes("ai"));
    tNimistu(vastus);
  }

  const neljasTahtI = () => {
    const vastus = tootajadFailist.filter(t => t[3] === "i");
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
      {tootajad.map(tootaja => <button>{tootaja}</button>)}<br/>
      <br/>
      <button onClick={reset}>Reset</button><br/>
    </div>
  )
}

export default Tootajad