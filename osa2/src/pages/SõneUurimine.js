import { useState, useRef } from "react" 
function SõneUurimine() {
    const [sonum, muudaNimi] = useState("")
    const [sonum1, nimeVaartus] = useState("")
    const nimiRef = useRef()

    function lisaNimi() {
        if (nimiRef.current.value === "") {
            muudaNimi("Pead sisestama nime!");
            return;
        }

        if (nimiRef.current.value[3] !== "o") {
            muudaNimi("Neljas täht peab olema 'o");
            return;
        }

        muudaNimi("Nimi on lisatud");
        nimeVaartus(nimiRef.current.value);
    }
  return (
    <div>
        <div className="container1">
        <label >Sisesta nimi</label><br/>
        <input ref={nimiRef} type="text" /> <br/>
        <button onClick={lisaNimi}>Lisa nimi</button><br/><br/>
        <div>{sonum}</div>
        <div>{sonum1}</div>
        <div>{}</div>
        
        </div>
    </div>

  )
}


// // const [words, setWords] = useState(['spray', 'elite', 'exuberant', 'destruction', 'present'])

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 6);

// console.log(result);
// // Expected output: Array ["exuberant", "destruction", "present"]


export default SõneUurimine