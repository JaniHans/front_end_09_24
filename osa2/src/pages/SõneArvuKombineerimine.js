import React from 'react'

function SõneArvuKombineerimine() {
  const tooteKogus = 10;
  const tooteNimi = "Õun";



  return (
    <div>
      <label>Toode: Kogus</label><br/>
      <div>{tooteNimi} : {tooteKogus}</div>
    </div>
  )
}

export default SõneArvuKombineerimine