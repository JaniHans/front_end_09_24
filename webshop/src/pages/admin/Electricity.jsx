import React, { useEffect, useState } from 'react'

function Electricity() {

    const [electricity, setElectricity] = useState([]);

    useEffect(() => {
        fetch("https://dashboard.elering.ee/api/nps/price")
        .then(res => res.json())
        .then(json => setElectricity(json.data.ee))
    }, []);
    
// Kui array pikkus on tyhi siis loading
    if (electricity.length === 0) {
    return <div>Loading....</div>
}
  return (

    
    
    <div>
        <div>
            {new Date(electricity[0].timestamp * 1000).getDate()}
            {new Date(electricity[0].timestamp * 1000).getMonth() + 1}
        </div>
        {electricity.map(el => 
        <div>
            {new Date(el.timestamp * 1000).getHours()}:00-
            {el.price}€
        </div>)}
    </div>
  )
}

export default Electricity