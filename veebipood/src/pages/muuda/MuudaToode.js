import React , { useRef} from 'react'
import tootedFailist from "../../data/tooted.json"
import { Link, useParams } from 'react-router-dom';


function MuudaToode() {
  const {qwerty} = useParams()
  const leitud = tootedFailist[qwerty]
  const hindRef = useRef()
  const tooteRef = useRef()

  const muuda = () => {
    tootedFailist[qwerty] = {
      "nimi": tooteRef.current.value,
      "hind": Number(hindRef.current.value)
    };

    if (leitud === undefined)
      return <div>Not found</div>

  }



  return (
    <div>
      <label>Mark</label>
      <input ref={tooteRef} defaultValue={leitud.nimi} /><br />
      <label>Hind</label>
      <input ref={hindRef} defaultValue={leitud.hind}/><br />
      <Link to="/halda-tooted" >
      <button onClick={muuda}>Muuda</button>
      </Link>
    </div>
  )
}

export default MuudaToode