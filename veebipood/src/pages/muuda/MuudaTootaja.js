import { useRef } from "react";
import tootajadFailist from "../../data/tootajad.json";
import { useParams, Link } from 'react-router-dom';

function MuudaTootaja() {
  const {asdasd} = useParams();
  const leitud = tootajadFailist[asdasd]
  const nimiRef = useRef()
  const ametRef = useRef()
  const telRef = useRef()

  const muuda = () => {
    tootajadFailist[asdasd] = {
      "nimi": nimiRef.current.value,
      "amet": ametRef.current.value,
      "tel" : telRef.current.value
    }
  }

  if (leitud === undefined) {
    return <div>Not found</div>
  }
  return (
    <div>
      <label>Muuda nimi</label>
      <input ref={nimiRef} defaultValue={leitud.nimi}/>
     
      <label>Muuda nimi</label>
      <input ref={ametRef} defaultValue={leitud.amet}/>

      <label>Muuda nimi</label>
      <input ref={telRef} defaultValue={leitud.tel}/>
      <Link to="/halda-tootajad">
      <button onClick={muuda}>Lisa</button>
      </Link>
    </div>
  )
}

export default MuudaTootaja