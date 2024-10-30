import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';

function Login() {

  const { t } = useTranslation();

  const kasutajanimiRef = useRef(); 
  const paroolRef = useRef();

  const sisseLogimine = () => {
      if (kasutajanimiRef.current.value.startsWith("a") === false) {
      toast.error(t("wrong-password"));
      return
      }
  }


return (
  <div>
      <label>{t("username")}</label><br />
      <input ref={kasutajanimiRef} type="text" /><br />
      <label>{t("password")}</label><br />
      <input ref={paroolRef} type="text" /><br />
      <button onClick={ sisseLogimine }>{t("enter")}</button>
      <ToastContainer 
          position="bottom-right"
          autoClose={4000}
          theme="dark"/>
  </div>
)
}

export default Login