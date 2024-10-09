import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function LogiSisse() {
    const kasutajanimiRef = useRef(); 
    const paroolRef = useRef();

    const sisseLogimine = () => {
        if (kasutajanimiRef.current.value.startsWith("a") === false) {
        toast.error("Vale parool");
        return
        }
    }


  return (
    <div>
        <label>Kasutajanimi</label><br />
        <input ref={kasutajanimiRef} type="text" /><br />
        <label>Parool</label><br />
        <input ref={paroolRef} type="text" /><br />
        <button onClick={ sisseLogimine }>Sisesta</button>
        <ToastContainer 
            position="bottom-right"
            autoClose={4000}
            theme="dark"/>
    </div>
  )
}

export default LogiSisse