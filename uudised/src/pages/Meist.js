import React from 'react'
import { useState } from "react";

function Meist() {
    const [kontakt, n2itaKontakt] = useState("");
    return ( <div>
        
        <div>Meie töötajad</div>
        <br></br>
        <div>Mart Mustikas</div>
        
        <div>Peatoimetaja</div>
        <button onClick={() => n2itaKontakt('+37253840214')}>Võta ühendust</button>
        <br></br>
        <div>Silver Sitikas</div>
       
        <div>Peareporter</div>
        <button onClick={() => n2itaKontakt('+37254812389')}>Võta ühendust</button>
        <br></br>
        <div>Peeter Pirn</div>
     
        <div>Pressiesindaja</div>
        <button onClick={() => n2itaKontakt('+37256348899')}>Võta ühendust</button>
        <br></br>
        { kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
    </div> );
}

export default Meist