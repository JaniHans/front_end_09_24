import { useState, useRef } from "react" 
function SõneUurimine() {
    const [sonum, muudaNimi] = useState("")
    const nimi = useRef()

    function lisaNimi() {
        const nimiValue = nimi.current.value;

        muudaNimi(nimiValue);
    }

  return (
    <div>
        <div className="container1">
        <label >Sisesta nimi</label><br/>
        <input ref={nimi} type="text" /> <br/>
        <button className={nimi.current?.value?.[3] === "o" ? {nimi} : "Nimi ei ole korrektne"} onClick={lisaNimi}>Muuda nimi</button><br/>
        <div>{sonum}</div>
        </div>
    </div>

  )
}

export default SõneUurimine