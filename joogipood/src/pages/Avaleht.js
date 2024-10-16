import React , {useState} from 'react'
import joogidFailist from "../data/joogid.json"

function Avaleht() {
    const [joogid, haldaJoogid] = useState(joogidFailist.slice());

    const kustuta = () => {
        joogidFailist.splice(0, 1);
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
    </div>

    
</div>
  )
}

export default Avaleht