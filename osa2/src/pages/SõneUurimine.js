import { useState, useRef } from "react" 
function SõneUurimine() {
    const [sonum, muudaNimi] = useState("")
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

        muudaNimi("Nimi lisatud");
    }
  return (
    <div>
        <div className="container1">
        <label >Sisesta nimi</label><br/>
        <input ref={nimiRef} type="text" /> <br/>
        <button onClick={lisaNimi}>Lisa nimi</button><br/><br/>
        <div>{sonum}</div>
        <div>{}</div>
        
        </div>
    </div>

  )
}

export default SõneUurimine