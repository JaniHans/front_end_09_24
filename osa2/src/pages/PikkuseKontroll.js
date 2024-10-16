import React , {useRef, useState} from 'react'

function PikkuseKontroll() {
  const [sonum, setParool] = useState();
  const paroolRef = useRef();

    const lisaParool = () => {
      if (paroolRef.current.value.length >= 8) {
        setParool("Parool sobib");
      }  else {
          setParool("Parool peab olema vähemalt 8 tähemärki")
        }
      }
      
  return (
    <div>
      <br />
      <label>Parool</label>
      <input ref={paroolRef} type="text" />
      <button onClick={lisaParool}>Kontrolli parooli</button>
      <div>{sonum}</div>
    </div>
  )
}

export default PikkuseKontroll