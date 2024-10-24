import React from 'react'
import { useParams } from 'react-router-dom'
import joogidJSON from "../data/joogid.json"

function Jook() {
    const { number123 } = useParams()
    const leitud = joogidJSON[number123]
  return (
    <div>
        {leitud}
        {leitud === undefined && <div>Jooki ei lelitud</div> }
    </div>
  )
}

export default Jook