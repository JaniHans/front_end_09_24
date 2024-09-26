import React, { useState } from 'react'

function Avaleht() {
  const [laigitud, setLaigitud] = useState(false);

  return (
    <div>
      {/* <div> Laik: {laigitud}</div> */}
      { laigitud === true && <img src="/laigitud.svg" alt="hall süda" /> }
      { laigitud === false && <img src="/mitte laigitud.svg" alt="valge süda" /> }
      <button onClick={() => setLaigitud(!laigitud)}>Muuda like'i</button>
    </div>
  )
}

export default Avaleht