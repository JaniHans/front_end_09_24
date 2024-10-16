import React , {useState} from 'react'
import numbridFailist from "../../src/data/numbrid.json"

function Numbrid() {
    const [numbrid, setNumbrid] = useState(numbridFailist.slice())

    const reset = () => {
        setNumbrid(numbridFailist);
    }


    // Sort
    const sortValueIncrease = () => {
        numbrid.sort((a, b) => (a - b));
        setNumbrid(numbrid.slice());
    }

    const sortValueDecrease = () => {
        numbrid.sort((a, b) => (b - a));
        setNumbrid(numbrid.slice());
    }
    const sortAZ = () => {
        numbrid.sort((a, b) => String(a).localeCompare(String(b)));
        setNumbrid(numbrid.slice());
    }

    const sortAZReverse = () => {
        numbrid.sort((a, b) => String(b).localeCompare(String(a)));
        setNumbrid(numbrid.slice());
    }

    //Filter

    const largerThan8 = () => {
        const vastus = numbridFailist.filter(num => num > 8);
        setNumbrid(vastus);
    }

    
    const smallerThan10 = () => {
        const vastus = numbridFailist.filter(num => num < 10);
        setNumbrid(vastus);
    }

    
    const evenNumbersOnly = () => {
        const vastus = numbridFailist.filter(num => num % 2 === 0);
        setNumbrid(vastus);
    }

    
    const oddNumbersOnly = () => {
        const vastus = numbridFailist.filter(num => num % 2 !== 0);
        setNumbrid(vastus);
    }

    
    const numbersStartWithOne = () => {
        const vastus = numbridFailist.filter(num => String(num).startsWith("1"));
        setNumbrid(vastus);
    }

    
    const numbersThatHaveThree = () => {
        const vastus = numbridFailist.filter(num => String(num).includes("3"));
        setNumbrid(vastus);
    }



  return (
    <div className='main_numbrid'>

<div>Sortreerimise nupud:</div>
        <button onClick={sortValueIncrease}>Numbri suuruse järgi kasvavalt</button>
        <button onClick={sortValueDecrease}>Numbri suuruse järgi kahanevalt</button>
        <button onClick={sortAZ}>Esimese numbri järgi</button>
        <button onClick={sortAZReverse}>Vastupidises järjekorras</button>
 
        <button className='navbar-nupud'onClick={reset}>Reset</button>
        <br></br>
        {numbrid.map(number => <div>{number}</div>)}<br></br>
        <div>Filteerimise nupud:</div>
        <button onClick={largerThan8}>Jäta alles suuremad kui 8</button>
        <button onClick={smallerThan10}>Jäta alles väiksemad kui 10</button>
        <button onClick={evenNumbersOnly}>Jäta alles paarisarvud</button>
        <button onClick={oddNumbersOnly}>Jäta alles paaritud arvud</button>
        <button onClick={numbersStartWithOne}>Jäta alles numbrid mis algavad 1-ga,</button>
        <button onClick={numbersThatHaveThree}>Jäta alles numbrid mis sisaldavad 3-e,</button>
    </div>
  )
}

export default Numbrid