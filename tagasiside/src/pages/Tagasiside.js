import React , {useState, useRef} from 'react'

function Tagasiside() {
    const [ts, setTagasiside] = useState(["Oli hea", "Huvitav", "Teistsugune", "Põnev"]);
    const tagasisideRef = useRef();

    const kustuta = () => {
      ts.splice(0, 1);
      setTagasiside(ts.slice());
    }

    const lisaUusTagasiside = () => {
      ts.push(tagasisideRef.current.value);
      setTagasiside(ts.slice());
    }
    
  return (

    <div>
          <div>
          {ts.map((element, index) => 
          <div>
            {element}
            <button onClick={() => kustuta(index)}>X</button>
            </div>)}
            <br/>
          </div>
          <br/>

          <label>Lisa uus tagasiside: </label>
          <input ref={tagasisideRef} type="text" />
          <button onClick={lisaUusTagasiside}>Sisesta</button>

    </div>
  )
}

export default Tagasiside