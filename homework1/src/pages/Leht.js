import React, { useRef, useState} from "react";

function Leht() {
    
    const inputistLugeja = useRef();
    const [muutuvHTMLs, funktsioonMuutujaMuutmiseks] = useState();

    const onClickFunktsioon = () => {
        funktsioonMuutujaMuutmiseks(inputistLugeja.current.value);
    }

  return (
    <div className='center'> <br/>
        <input ref={inputistLugeja} type="text" /> <br/>
        <button className="lds-hourglass" onClick={onClickFunktsioon}>Muuda</button><br/>
        <div>{muutuvHTMLs}</div>
    </div>
  )
}

export default Leht