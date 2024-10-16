import React , {useState, useRef} from 'react'
import joogidFailist from "../data/joogid.json"

function HaldaJooke() {
    const [joogid, haldaJoogid] = useState(joogidFailist.slice());
    const jookRef = useRef()

    const kustuta = () => {
        joogidFailist.splice(0, 1);
        haldaJoogid(joogidFailist.slice());
    }

    const lisaUusJook = () => {
        joogidFailist.push(jookRef.current.value);
        haldaJoogid(joogidFailist.slice());
    }

  return (
    <div className='haldajooke_main'>
        <br />
        <label>Jookide valik: tk</label>
        <br />
        <br />
        <div>
            {joogid.map((jook, index) =>
            <div>
                {jook}
                <button onClick={() => kustuta(index)}>X</button>
            </div>)}
            <label>Lisa uus jook: </label>
            <input ref={jookRef} type="text" />
            <button onClick={lisaUusJook}>LISA</button>
        </div>

        
    </div>
  )
}

export default HaldaJooke