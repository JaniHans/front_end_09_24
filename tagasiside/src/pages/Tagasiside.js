import React , {useState} from 'react'

function Tagasiside() {
    const [tagasisided, setTagasiside] = useState(["Oli hea", "Huvitav", "Teistsugune", "Põnev"])
  return (

    <div>
        
          {tagasisided.map(s => <button>{s}</button>)}<br/>
          <br/>
    </div>
  )
}

export default Tagasiside