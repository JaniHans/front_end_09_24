import React from 'react'
import {useState} from "react"



function Meist() {

    const [kontakt, n2itaKontakt] = useState("");
    const tootajad = [
        {
            Nimi: "Mari",
            Ala: "Kosmeetik",
            Telefon: "Täpsustamisel"
        },
        {
            Nimi: "Sonia",
            Ala: "Turundaja",
            Telefon: "Täpsustamisel"
        },
        {
            Nimi: "Indrek",
            Ala: "Tehnik",
            Telefon: "Täpsustamisel"
        },
        {
            Nimi: "Martin",
            Ala: "Juht",
            Telefon: "Täpsustamisel"
        },
        {
            Nimi: "Tarmo",
            Ala: "Hiir",
            Telefon: "Täpsustamisel"
        },
        {
            Nimi: "jne",
            Ala: "jne",
            Telefon: "jne"
        }
    ]

    return ( <div>
        
        {/* <div>Meie töötajad</div>
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
        <br /> */}
        <div><br />
        {tootajad.map((tootaja, index) =>
            
            <div>{tootaja.Nimi}
                {tootaja.Ala}
                <button onClick={() => n2itaKontakt(tootaja.Telefon)}>Võta ühendust</button>
            </div>
            

    )}
        
        </div>
    </div>
    
    
    )
}

export default Meist