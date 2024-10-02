import React, { useState, useRef } from 'react';

function LisaUusTegelane() {
    const [sonum, muudaSonum] = useState("Lisa uus tegelane!")
    const nimiRef = useRef();
    
    function lisaTegelane() {
        if (nimiRef.current.value === "") {
            muudaSonum("Sisesta tegelase nimi")
        } else {
            muudaSonum("Tegelane lisatud!: " + nimiRef.current.value)
        }
    }
    
  return (
    <div>
        <div>{sonum}</div>
      <label>Uue tegelase nimi</label>< br/>
      <input ref={nimiRef} type="text" />< br/>
      <button onClick={lisaTegelane}>Lisa</button> < br/>
    </div>
  )
}

export default LisaUusTegelane