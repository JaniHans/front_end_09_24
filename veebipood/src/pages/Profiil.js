import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

function Profiil() {
    const { t } = useTranslation();
    const [ aadress, setAadress] = useState();
    const [ email, setEmail] = useState();
    const [ telefon, setTelefon] = useState();
     // HTML väärtuse kuvamiseks ja selle muutmiseks
    const aadressRef = useRef(); // kui ref on inputist väärtuse lugemiseks , 
    const emailRef = useRef();
    const telefonRef = useRef();
   
const sisestaAadress = () => {
    console.log(aadressRef)
    console.log(aadressRef.current)
    // Tammsaare tee "T" === "t"
    //
    if (aadressRef.current.value === "") {
        toast.error(t("address-empty"));
        return;
    }
    if (aadressRef.current.value[0] === aadressRef.current.value[0].toLowerCase()) {
        toast.error("Aadress peab algama suuure a tähega");
        return;
    }
    toast.success("Edukalt aadress sisestatud!");
    setAadress(aadressRef.current.value);
}

const sisestaEmail = () => {
    if (emailRef.current.value.includes("@") === false) {
        toast.error("Email peab sisaldama @ märki");
        return
    }
    toast.success("Email edukalt sisestatud!")
    setEmail(emailRef.current.value)
}

const sisestaTelefon = () => {
    if (telefonRef.current.value.startsWith("+372") === false) {
        toast.error("Telefon peab algama Eesti suunakoodiga!");
        return;
    }
    toast.success("Telefon sisestatud!")
    setTelefon(telefonRef.current.value)
}



  return (
    <div>
        <div>Sinu aadress: { aadress }</div>
        <div>Sinu email: {email} </div>
        <div>Sinu telefon: {telefon}</div>

        <label>Aadress</label>
        <input ref={aadressRef} type="text" />
        <button onClick={ sisestaAadress }>Sisesta</button>
        <br /><br />

        <label>Email</label>
        <input ref={emailRef} type="email" />
        <button onClick={ sisestaEmail }>Sisesta</button>
        <br /><br />

        <label>Telefon</label>
        <input ref={telefonRef} type="text" />
        <button onClick={ sisestaTelefon }>Sisesta</button>
        <br /><br />
        <ToastContainer 
            position="bottom-right"
            autoClose={4000}
            theme="dark"/>
    </div>
  )
}

export default Profiil