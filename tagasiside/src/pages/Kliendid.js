import React, {useState} from 'react'
import kliendidFailist from "../data/companies.json"

function Kliendid() {

    const [kliendid, lisaKliendid] = useState(kliendidFailist);
    const [emailid, lisaEmailid] = useState([]);


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
        kliendid.sort((a, b) => a.address.geo.lat.localeCompare(b.address.geo.lat));
        lisaKliendid(kliendid.slice());
    }

    const sortByLonPositive = () => {
        const vastus = kliendid.filter(klient => klient.address.geo.lng > 0);
        lisaKliendid(vastus);
    }

    const accIds = () => {
        let sum = 0;
        kliendid.forEach(user => sum += user.id)
        console.log(sum)
    }

    const addPrefix000 = () => {
        const vastus = kliendid.map(klient => ({...klient, phone: "000-" +klient.phone}));
        lisaKliendid(vastus);
    }

    
    const onlyEmailsArray = () => {
        const vastus = kliendid.map(user => user.email);
        lisaEmailid(vastus)
        console.log(vastus);
    }


    
    const replaceCatchPhrase = () => {

        // spread operator j2tab k6ik varasemad alles
        // .map filtreerimisel ei saa teha kui v6ti ja v22rtusega seotud arrayd olemas
        // muuta ja kuvadada saab

        const vastus = kliendid.map(user => (
        {...user, company: {...user.company, catchPhrase: user.company.catchPhrase.replaceAll("a", "e")}}

        ));
        lisaKliendid(vastus)
        console.log(vastus);
    }

    

  return (
    <div>

        <div>{emailid.map(email => 
            <div>{email}</div>
        )}</div>
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
    <div>{klient.email}</div>
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