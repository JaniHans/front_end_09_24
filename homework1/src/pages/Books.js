import React , {useState} from 'react'
import failistbooks from "../data/books.json"

// sort:
// esimese tähe järgi
// vastupidises järjekorras 
// pikkuse
// teise tähe järgi
// sõnade arvu järgi 
// eelviimase tähe järgi

/* filter 
jäta alles "the" algavad
jäta alles keskel on and
jäta alles rohkemate tähemärkidega sõnad kui 10
jäta alles vähemate tähemärkide sõnad kui 7 
jäta alles kolme või rohkem sõnalised
jäta alles kellel eelvimmane täht on "c"
*/

function Books() {
    const [raamatud, setRaamatud] = useState(failistbooks.slice())

    const reset = () => {
     setRaamatud(failistbooks);
    }

    // Sortreerimine
    const sortAZ = () => {
        raamatud.sort();
        // raamatud.sort((a, b) => a.localeCompare(b))
        setRaamatud(raamatud.slice());
    }

    const sortZA = () => {
        raamatud.sort((a, b) => b.localeCompare(a));
        setRaamatud(raamatud.slice());
    }

    const sortLength = () => {
        raamatud.sort((a , b) => a.length - b.length);
        setRaamatud(raamatud.slice());
    }

    const secondLetter = () => {
        raamatud.sort((a, b) => a[1].localeCompare(b[1]));
        setRaamatud(raamatud.slice())
    }

    const lengthWords = () => {
        raamatud.sort((a, b) => a.split(" ").length - b.split("").length);
        setRaamatud(raamatud.slice());
    }

    const eelViimane = () => {
        raamatud.sort((a, b) => a.charCodeAt(a.length - 2) - b.charCodeAt(b.length - 2));
        setRaamatud(raamatud.slice());
    }

    // Filtreerimine
    const allesThe = () => {
        const vastus  = failistbooks.filter(the => the.toLowerCase().includes("the"));
        setRaamatud(vastus);
    }

    const allesWithAnd = () => {
        const vastus = failistbooks.filter(and => and.includes("and"));
        setRaamatud(vastus);
    }

    const moreThanWithTen = () => {
        const vastus = failistbooks.filter(letters => letters.length > 10);
        setRaamatud(vastus);
    }

    const lessThan7Letters = () => {
        const vastus = failistbooks.filter(letters => letters.length < 7);
        setRaamatud(vastus);
    }
    
    const morethanThreeWords = () => {
        const vastus = failistbooks.filter(words => words.split(" ").length >= 3);
        setRaamatud(vastus);
    }

    const eelViimaneC = () => {
        const vastus = failistbooks.filter(words => words[words.length - 2] === "c");
        setRaamatud(vastus);
    }

  return (
    <div>
        <div>Sortreerimise nupud:</div>
        <button onClick={sortAZ}>Esimese tähe järgi</button>
        <button onClick={sortZA}>Vastupidises järjekorras</button>
        <button onClick={sortLength}>Sõnapikkuse järgi</button>
        <button onClick={secondLetter}>Teise tähe järgi</button>
        <button onClick={lengthWords}>Sõnade arvu järgi</button>
        <button onClick={eelViimane}>Eelviimase tähe järgi</button>
        <button className='navbar-nupud'onClick={reset}>Reset</button>
        <br></br>
        {raamatud.map(raamat => <div>{raamat}</div>)}<br></br>
        <div>Filteerimise nupud:</div>
        <button onClick={allesThe}>Jäta alles "the" algavad</button>
        <button onClick={allesWithAnd}>Keskel on and</button>
        <button onClick={moreThanWithTen}>Rohkem kui 10 tähemärki</button>
        <button onClick={lessThan7Letters}>Vähem kui 7 tähemärki</button>
        <button onClick={morethanThreeWords}>Kolm või rohkem sõna</button>
        <button onClick={eelViimaneC}>Eelviimane täht on "c"</button>
    </div>
  )
}

export default Books