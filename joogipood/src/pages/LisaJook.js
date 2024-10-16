import React , {useState, useRef} from 'react'
import joogidFailist from "../data/joogid.json"

function LisaJook() {
    const [joogid, haldaJoogid] = useState(joogidFailist.slice());
    const jookRef = useRef()


    const lisaUusJook = () => {
        joogidFailist.push(jookRef.current.value);
        haldaJoogid(joogidFailist.slice());
    }

  return (
    <div className='haldajooke_main'>
            <label>Lisa uus jook: </label>
            <input ref={jookRef} type="text" />
            <button onClick={lisaUusJook}>LISA</button>
        </div>

  )
}

export default LisaJook