import React, { useRef , useContext} from 'react'
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../store/AuthContent';

function Login() {

  const { t } = useTranslation();

  const kasutajanimiRef = useRef(); 
  const paroolRef = useRef();
  const {setLoggedIn} = useContext(AuthContext);


  const sisseLogimine = () => {
      if (kasutajanimiRef.current.value.startsWith("a") === false) {
      toast.error(t("wrong-password"));

      return
      }
      setLoggedIn(true);
      sessionStorage.setItem("token", "suvaline-token-mida-tegelikult-väljastab-back-end")
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