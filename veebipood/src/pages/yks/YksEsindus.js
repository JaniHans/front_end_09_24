import React from 'react'
import { useParams} from 'react-router-dom'
import esindusedJSON from "../../data/esindused.json"

function YksEsindus() {
    const {jrknr } = useParams(); 
    const leitud = esindusedJSON[jrknr];
    // võimaldab URL muutujat kätte

    if (leitud === undefined) {
        return <div> Not found</div>
    }

  return (
    <div>
        {jrknr}
        <div>Nimi: {leitud.nimi}</div>
        <div>Telefoninumber: {leitud.tel}</div>
        <div>Aadress: {leitud.aadress}</div>
        {/* <div>{leitud}</div> <--- ei saa, sest on objekt*/ }
    </div>
  )
}

export default YksEsindus