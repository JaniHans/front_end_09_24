import React, { useState } from 'react'

function Avaleht() {
  const [laigitud, setLaigitud] = useState(false); // [muutujanimi, muutja ehk setter väärtuse muutja]
  // const laigitud = false;
  // let laigitud = false;
  // var laigitud = false;

  // const --> enam muuta ei saa VÕRDUSMÄRGIGA
  // saan laigitud muuta kui ta on const , LÄBI TEMA SETTERI

  // miks läbi "setteri ? " --> react on kirjutanud setteri sisse, et teda käivitades muudetakse
  // ka HTMLi 
  // ehk iga kord kui käivitan useState setteri , siis minnakse HTMLi muutma

  const [kogus, setKogus] = useState(0);
  const [sonum, setSonum] = useState("Muuda kogust!");

  const nulli = () => {
    setKogus( 0 );
    setSonum("Kogus nullitud!");
  }

  // // function vahenda() {
  // }

  const vahenda = () => {
    setKogus(kogus - 1);
    setSonum("Kogus vähendatud");
  }

  const suurenda = () => {
    setKogus(kogus + 1);
    setSonum("Kogus suurendatud");
  }

  return (
    <div>
      {/* <div> Laik: {laigitud}</div> */}
      { laigitud === true && <img src="/laigitud.svg" alt="hall süda" /> }
      { laigitud === false && <img src="/mitte laigitud.svg" alt="valge süda" /> }
      <button onClick={() => setLaigitud(!laigitud)}>Muuda like'i</button>


      
      <br/><br/>
      <div>{sonum}</div>
      {kogus !== 0 && <button onClick={ nulli }>Tagasi nulli</button>}
      {/* {kogus > 0 && <button onClick={() => setKogus(0)}>Tagasi nulli</button>} */}
      <br />
      <button disabled = {kogus === 0} onClick={vahenda}>-</button>
      <span>{kogus}</span>
      <button onClick={suurenda}>+</button>

    </div>
  )
}

export default Avaleht