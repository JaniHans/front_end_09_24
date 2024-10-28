import React, {useState} from 'react'
import kliendidFailist from "../data/companies.json"

function Kliendid() {

    const [kliendid, lisaKliendid] = useState(kliendidFailist);

    const Reset = () => {
        lisaKliendid(kliendidFailist);
    }

    const moreThan10Letters = () => {
        const vastus = kliendid.filter(klient => klient.username.length > 10);
        lisaKliendid(vastus)
    }

    const findIndexL = () => {
        const index = kliendid.findIndex(klient => klient.email === "Lucio_Hettinger@annie.ca");
        console.log(index)
    
    }

    const findNameWithC = () => {
        const vastus = kliendid.filter(klient => klient.name.startsWith("C"));
        lisaKliendid(vastus);
        console.log(vastus)
    }

    const sortbyLat = () => {

    }

    const sortByLonPositive = () => {
        
    }

    const accIds = () => {
        
    }

    const addPrefix000 = () => {
        
    }

    
    const onlyEmailsArray = () => {
        
    }


    
    const replaceCatchPhrase = () => {
        
    }

    

  return (
    <div>
        <div>{kliendid.length}</div>
        <br />
        <button onClick={Reset}>Reset</button>
        <br />
        <button onClick={moreThan10Letters}>Username more than 10 letters</button>
        <br />
        <button onClick={findIndexL}>Username with email "„Lucio_Hettinger@annie.ca“.</button>
        <button onClick={findNameWithC}>First user with letter C</button>
        <button onClick={sortbyLat}>Sort by Latitude</button>
        <button onClick={sortByLonPositive}>Sort with positive Longitude</button>
        <button onClick={accIds}>Accumulate IDs</button>
      
        <br />
        <button onClick={addPrefix000}>Add prefix</button>
        <button onClick={onlyEmailsArray}>Usernames and emails</button>
        <button onClick={replaceCatchPhrase}>Replace a with e in catchphrase</button>
    {kliendid.map((klient) => (
        <div className='client_container' key={klient.id}>
    <br />
    <div>{klient.id}</div>
    <div>{klient.name}</div>
    <div>{klient.username}</div>
    <br />
    <div>{klient.address.street}</div>
        <div>{klient.address.suite}</div>
        <div>{klient.address.city}</div>
        <div>{klient.address.zipcode}</div>
        <br />
        <div>{klient.address.geo.lat}</div>
        <div>{klient.address.geo.lng}</div>
        <div>{klient.phone}</div>
        <div>{klient.website}</div>
        <div>{klient.company.name}</div>
        <div>{klient.company.catchPhrase}</div>
        <div>{klient.company.bs}</div>
            <br /><br />
            </div>
    
     
    ))}
    </div>
  )
}

export default Kliendid