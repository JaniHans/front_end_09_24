import React, { useState } from 'react'

function Seaded() {
  const [keel, setKeel] = useState("est");


  return (
    <div>
      <div>Hetkel aktiivne keel: {keel}</div>
      <button className={ keel === "est" ? "keel-valitud" : undefined } onClick={() => setKeel("est")}>Eesti</button>
      <button className={ keel === "eng" ? "keel-valitud" : undefined } onClick={() => setKeel("eng")}>English</button>
      <button className={ keel === "rus" ? "keel-valitud" : undefined } onClick={() => setKeel("rus")}>Russian</button>
  
    { keel === "est" && <div>Leht on eesti keelne</div>}
    { keel === "eng" && <div>Page is in English</div>}
    { keel === "rus" && <div>Страница на русском языке</div>}
    </div>
  )
}

export default Seaded