import React, { useState, useRef } from 'react'

// usestate -->> usestate is not defined

function Kinkekaart() {
 const [summa, setSumma] = useState(20);
 const [sonum, setSonum] = useState("");
 const [kogus, setKogus] = useState(1);
 const emailRef = useRef(); // väärtuse inputist lugemiseks sama JS document.getelementByID 

// useRef vs document.getElementById()

// ref on ühes komponendis -> st et kui otsib otsin ainult sellest komponendist

// react on üheleheküljeline rakendus : tal on ainult 1. html fail
// document.getElementByID() käib läbi kogu htmli
// probleemid: 
// 1. aeglaseks
// 2. äkki kuskil on sama ID 

 function lisa() {
//   setSonum("Email lisatud");
//   if (emailRef.current.value === "") {
//     setSonum("Pead sisestama e-maili!")
//   } else {
//     setSonum("Email lisatud!");
//   }
//  }

  if (emailRef.current.value === "") {
    setSonum("Pead sisestama e-maili!")
    return; //katkestab töö -> edasi ei lähe
  } 
  if (emailRef.current.value.includes("@") === false) {
    setSonum("E-mail valel kujul!");
    return;
 }

 if (emailRef.current.value.length < 6) {
  setSonum("E-mail on liiga ühike");
  return;
}

 setSonum ("Email lisatud!");
}


 //ternary operator lühendatud if else 
 // if (KAS_TRUE) {Kui True } else {KUI_FALSE}

 // KAS_TRUE ? KUI_TRUE : KUI_FALSE

  return (
    <div>
      <button className={summa === 20 ? "summa-valitud" : "summa"} onClick={() => setSumma(20)}>20 €</button>
      <button className={summa === 50 ? "summa-valitud" : "summa"} onClick={() => setSumma(50)}>50 €</button>
      <button className={summa === 100 ? "summa-valitud" : "summa"} onClick={() => setSumma(100)}>100 €</button>
      <br /><br />

      <div>Kinkekaart {summa} €</div>
      <br />

      <button disabled={kogus === 1} onClick={() => setKogus(kogus - 1)}>-</button>
      <span>{kogus}</span>
      <button onClick={() => setKogus(kogus + 1)}>+</button>

      <br />

      <div>Lisa Kinkekaardile e-mail</div>
      <label>Email</label><br />
      <input ref={emailRef} type="text"/><br />
      <button onClick={lisa}>Lisa</button><br/>
      <div>{sonum}</div>
    </div>
  )
}

export default Kinkekaart