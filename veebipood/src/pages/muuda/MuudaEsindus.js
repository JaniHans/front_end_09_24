import React, { useRef } from "react";
import { useParams , Link } from "react-router-dom";
import esindusedJSON from "../../data/esindused.json";

function MuudaEsindus() {
  const { jarjekorranumber } = useParams();
  const leitud = esindusedJSON[jarjekorranumber];
  const esindusRef = useRef();
  const aadressRef = useRef();
  const telefonRef = useRef();

  const muuda = () => {
    esindusedJSON[jarjekorranumber] = {
      "nimi": esindusRef.current.value,
      "aadress": aadressRef.current.value,
      "tel": telefonRef.current.value
    };
  };

  if (leitud === undefined) {
    return <div>Not Found</div>;
  }
  return (
    <div>
      {/* <div>{järjekorranumber}</div>
        <div>{leitud}</div> */}

      <label>Esindus</label>
      <br />
      <input ref={esindusRef} type="text" defaultValue={leitud.nimi} />
      <br />
      <label>Aadress</label>
      <br />
      <input ref={aadressRef} type="text" defaultValue={leitud.aadress} />
      <br />
      <label>Telefon</label>
      <br />
      <input ref={telefonRef} type="text" defaultValue={leitud.tel} />
      <br />
      <Link to="/halda-esindused">
        <button onClick={muuda}>Muuda</button>
      </Link>
    </div>

    // Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.

    // Check the render method of `MuudaEsindus`.
  );
}

export default MuudaEsindus;
