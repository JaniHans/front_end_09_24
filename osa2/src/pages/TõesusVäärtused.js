import React , {useRef, useState } from 'react'

function TõesusVäärtused() {
    const [sisselogitud, setSisseLogitud] = useState(false)
    const kasutajanimiRef = useRef(); 
    const paroolRef = useRef();
    const [nupuvajutus, setNupuVajutus] = useState(0)

    const mitmesKord = () => {
      setNupuVajutus(nupuvajutus + 1);
      sisseLogimine();
  };
  const sisseLogimine = () => {
    setSisseLogitud(!sisselogitud); // This toggles between true and false
  }
  return (

    <div>
        <label>Kasutajanimi</label><br />
        <input ref={kasutajanimiRef} type="text" /><br />
        <label>Parool</label><br />
        <input ref={paroolRef} type="text" /><br />
        <button onClick={ mitmesKord }>Sisesta</button>
       
          {nupuvajutus > 0 && (
        <div>{sisselogitud ? "Kasutaja on sisse logitud" : "Kasutaja pole sisse logitud"}</div>
        )}
        <div>Button clicked: {nupuvajutus} times</div>
    </div>
  );
}

export default TõesusVäärtused