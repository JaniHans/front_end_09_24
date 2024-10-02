import { useState } from "react";

function Kontakt() {
    const [aadress, määraAadress] = useState("Tallinn");
    const [telefon, määraTelefon] = useState("5512345");
    const [email, määraEmail] = useState("bla@baa.com");
    const [ingliseKeelne, määraIngliseKeelne] = useState("ei")

    function ingliseks() {
        määraAadress("city: Tallinn")
        määraTelefon("phone: 5512345")
        määraEmail("email: bla@baa.com")
        määraIngliseKeelne("jah")
        
    }


  return (
    <div>
        <div>{aadress}</div>
        <div>{telefon}</div>
        <div>{email}</div>
        <button onClick={ingliseks}>Muuda inglise keelseks</button>
        { ingliseKeelne === "jah" && <div>??</div>}
        
    </div>
  )
}

export default Kontakt