import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../../data/tooted.json"

function YksToode() {
  const {t} = useParams()
  const leitud = tootedFailist[t]

  if (leitud === undefined) {
    return <div>Not found</div>
  }
  return (

    <div>
      <div>{t}</div>
      <div>Hind: {leitud.hind}</div>
      <div>Toode: {leitud.tood}</div>
    </div>
  )
}

export default YksToode