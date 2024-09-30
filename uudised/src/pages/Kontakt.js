import React from 'react'
import { useState } from "react";

function Kontakt() {
    const [n2itaTelViimsi, muudaN2itaTelViimsi] = useState(false);
    const [n2itaTelLasnamae, muudaN2itaTelLasnamae] = useState(false);
    const [n2itaTelNomme, muudaN2itaTelNomme] = useState(false);
    return ( <div>
        <div>See on kontaktide leht, nähtav locaholst:3000/kontakt aadressil</div>
        <div>See on meist leht, nähtav localhost:3000/meist aadressil</div>
        <div>Võta meiega ühendust</div>
        <br></br>
        <div onClick={() => muudaN2itaTelViimsi(!n2itaTelViimsi)}>Viimsi keskus</div>
        {n2itaTelViimsi && <div>+37253840214</div>}
        <div>Karu tee</div>
        <br></br>
        <div onClick={() => muudaN2itaTelLasnamae(!n2itaTelLasnamae)}>Lasnamäe keskus</div>
        {n2itaTelLasnamae && <div>+37254812389</div>}
        <div>Läänemere tee</div>
        <br></br>
        <div onClick={() => muudaN2itaTelNomme(!n2itaTelNomme)}>Nõmme keskus</div>
        {n2itaTelNomme && <div>+37256348899</div>}
        <div>Kadaka tee</div>
    </div> );
}

export default Kontakt