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

    const [valitud, uuendaValitud] = useState("");

    const v6taYhendust = (tootaja) => {
        n2itaKontakt(tootaja.telefon);
        uuendaValitud(tootaja.nimi);
    }

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
        <div>
            <br />
            <div>See on meist leht, nähtav localhost:3000/meist aadressil</div>
            <div>Meie töötajad:</div>
            {/* VALITUD INIMENE: {valitud} */}
            <div>{tootajad.map((tootaja) =>
                <div className={tootaja.nimi === valitud ? "valitud" : undefined}>
                <div>{tootaja.Nimi}</div>
               <div> {tootaja.Ala}</div>
                <button onClick={() => v6taYhendust(tootaja)}>Võta ühendust</button>
                <br /><br />
                </div>)}
                
            </div>
        
        </div>
    </div>
    
    
    )
}

export default Meist