import React, { useEffect, useState } from 'react'

function ParcelMachines() {
    const [pms, setPms] = useState([]);
    useEffect(() => {
        fetch("https://www.omniva.ee/locations.json")
        .then(res => res.json())
        .then(json => setPms(json))

    }, []);
  return (
    <div>
        <select>
        {pms
            .filter(pm => pm.A0_NAME === "EE")
            .map(pm => <option>{pm.NAME}</option>)}
        </select>
    </div>
  )
}

export default ParcelMachines