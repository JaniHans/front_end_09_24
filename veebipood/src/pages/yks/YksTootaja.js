import React from 'react'
import { useParams } from 'react-router-dom'
import tootajadFailist from "../../data/tootajad.json";


function YksTootaja() {
  const {j} = useParams();
  const leitud = tootajadFailist[j]

  if (leitud === undefined) {
    return <div>Not found</div>
  }
  return (
    <div>YksTootaja</div>
  )
}

export default YksTootaja