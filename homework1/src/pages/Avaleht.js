import React, {useState, useRef } from "react"

function Avaleht() {
    const [sisselogitud, muudaSisselogitud] = useState("ei");
    const [sonum, muudaSonum] = useState("")
    const kasutajaNimiRef = useRef();
    const paroolRef = useRef();
  
    const logiSisse = () => {
      if (paroolRef.current.value === "123") {
      muudaSisselogitud("jah");
      muudaSonum(kasutajaNimiRef.current.value + "Oled sisselogitud");
    } else {
      muudaSonum("Vale parool")
    }
  }
  
  const logiValja = () => {
    muudaSisselogitud("ei");
    muudaSonum("");
  } 
  return (
    <div className="avaleht">
         <div>{sonum}</div>
      { sisselogitud=== "ei" && 
      <div>
      <label>Kasutajanimi</label> <br/>
      <input ref={kasutajaNimiRef} type="text" /> <br/>
      <label>Parool</label> <br/>
      <input ref={paroolRef} type='password' /> <br/>
      </div>}
     { sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button>}
      { sisselogitud === "jah" && <button onClick={logiValja}>Logi välja</button>}
    
    </div>
  )
}

export default Avaleht