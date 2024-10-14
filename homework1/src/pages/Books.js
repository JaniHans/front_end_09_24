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
        raamatud.split(" ")
    }

    const eelViimane = () => {
        raamatud.sort((a, b) => a.qn.localeCompare(b.qn));
        setRaamatud(raamatud.slice());
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
        <button>Jäta alles "the" algavad</button>
        <button>Keskel on and</button>
        <button>Rohkem kui 10 tähemärki</button>
        <button>Vähem kui 7 tähemärki</button>
        <button>Kolm või rohkem sõna</button>
        <button>Eelviimane täht on "c"</button>
    </div>
  )
}

export default Books