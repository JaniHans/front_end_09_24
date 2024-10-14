import React , {useState, useRef} from 'react'

function AlgabTähemärgiga() {
  
  const arvuti = useRef()
  const [sonum, setSonum] = useState("");

  const tahtA = () => {
    const arvutiFormaadis = arvuti.lowerCase();
    if (arvutiFormaadis.current.value[0] !== "a") {
      setSonum("Arvuti nimetus peab algama 'a' tähega");
    } else {
      setSonum(sonum);
    }
  }

  return (

    <div>
      <label type="text">Arvutid</label><br/>
      <input ref={arvuti} type="text"/><br/>
      <button onClick={tahtA}>Kontrolli</button><br/>
      <div>{sonum}</div>
      

    </div>
  )
}

export default AlgabTähemärgiga