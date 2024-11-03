import { useRef } from 'react'

import {useParams} from 'react-router-dom'

function MuudaUudis() {
    const { index } = useParams();
    const uudisedLS = JSON.parse(localStorage.getItem("uudised")) || [];
    const leitudUudis = uudisedLS[index];

    const uuudisRef = useRef();
    const muuda = () => {
        uudisedLS[index] = uuudisRef.current.value;
        localStorage.setItem("uudised", JSON.stringify(uudisedLS));
    }

  return (
    <div>
        <label>Uudis</label><br />
        <input ref={uuudisRef}defaultValue={leitudUudis} type="text" /><br />
        <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaUudis