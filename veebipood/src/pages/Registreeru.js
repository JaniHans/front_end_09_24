import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Registreeru() {
    const kasutajanimiRef = useRef(); 
    const paroolRef = useRef();

    const registreeru = () => {
        if (kasutajanimiRef.current.value.length < 5) {
        toast.error("Liiga lühike kasutajanimi");
        return
        }
        if (kasutajanimiRef.current.value.startsWith("a") === false) {
            toast.error("Vale kasutajanimi");
            return;
        }
        if (paroolRef.current.value !== "midagi") {
            toast.error("Vale Parool");
            return;
        }
        toast.success("Edukalt sise logitud!");
    }


  return (
    <div>
        <label>Kasutajanimi</label><br />
        <input ref={kasutajanimiRef} type="text" /><br />
        <label>Parool</label><br />
        <input ref={paroolRef} type="text" /><br />
        <button onClick={ registreeru }>Sisesta</button>
        <ToastContainer 
            position="bottom-right"
            autoClose={4000}
            theme="dark"/>
    </div>
  )
}

export default Registreeru