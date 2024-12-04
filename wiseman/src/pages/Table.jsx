import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function Table() {

  const [contacts, setContacts] = useState([])


  const url = 'https://midaiganes.irw.ee/api/list'

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setContacts(json.list || []);
      })
  }, []);

  if (!contacts.length) {
    return <div>Andmete laadimine...</div>;
  }




  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Eesnimi<button>
                <i className="fas fa-arrow-up"></i>
                <i className="fas fa-arrow-down"></i>
              </button>
              </th>
            <th>Perekonnanimi
              <button>
                <i className="fas fa-arrow-up"></i>
                <i className="fas fa-arrow-down"></i>
              </button>
              </th>
            <th>Sugu
              <button>
                <i className="fas fa-arrow-up"></i>
                <i className="fas fa-arrow-down"></i>
              </button>
              </th>
            <th>Sünnikuupäev
              <button>
              <i className="fas fa-arrow-up"></i>
                <i className="fas fa-arrow-down"></i>
              </button>
              </th>
            <th>Telefon
              <button>
                <i className="fas fa-arrow-up"></i>
                <i className="fas fa-arrow-down"></i>
              </button>
              </th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.personal_code}>
              <td>{contact.firstname}</td>
              <td>{contact.surname}</td>
              <td>{contact.sex}</td>
              <td>{contact.personal_code}</td>
              <td>{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>  
    </div>
  )
}

export default Table