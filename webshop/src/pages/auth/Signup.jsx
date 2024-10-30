import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';

function Signup() {
  const { t } = useTranslation();
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
          toast.error(t("wrong-password"));
          return;
      }
      toast.success("Edukalt sise logitud!");
  }


return (
  <div>
      <label>{t("username")}</label><br />
      <input ref={kasutajanimiRef} type="text" /><br />
      <label>{t("password")}</label><br />
      <input ref={paroolRef} type="text" /><br />
      <button onClick={ registreeru }>{t("enter")}</button>
      <ToastContainer 
          position="bottom-right"
          autoClose={4000}
          theme="dark"/>
  </div>
)
}

export default Signup