import React , {useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify';


function AlgabTähemärgiga() {
  
  const arvutiRef = useRef()


  const tahtA = () => {
    if (arvutiRef.current.value.startsWith("A") !== true) {
      toast.error("Arvuti nimetus peab algama suure 'A' tähega");
    } else {
      toast("Arvuti algab a tähega");
    }
  }

  return (

    <div>
      <label type="text">Arvutid</label><br/>
      <input ref={arvutiRef} type="text"/><br/>
      <button onClick={tahtA}>Kontrolli</button><br/>
      <ToastContainer 
            position="bottom-right"
            autoClose={4000}
            theme="dark"/>

    </div>
  )
}

export default AlgabTähemärgiga