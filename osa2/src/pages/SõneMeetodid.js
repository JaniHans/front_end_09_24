import React, {useState, useRef } from "react"


function SõneMeetodid() {
    const[sonum, muudaMeili] = useState();
    const meil = useRef();

    function seaMeil() {
        if(meil.current.value === "") {
            muudaMeili("You must enter email")
        } else {
            muudaMeili(meil.current.value)
        }
    }

  return (
    <div>
        <div className="container1">
        <label >Sisesta email</label><br/>
        <input ref={meil} type="text" /> <br/>
        <button onClick={seaMeil}>Lisa email</button><br/>
        <div>{sonum}</div>
        </div>
    </div>
  )
}

export default SõneMeetodid