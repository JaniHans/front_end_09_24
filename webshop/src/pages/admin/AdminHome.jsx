import React, {useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function AdminHome() {

    // kui siia lehele tullakse , siis pannakse koheselt see funktsioon k'ima
    //uef
    


  return (
    <div>
      
      <Button as ={Link} to="/admin/supplier">Supplier</Button>{" "}
      <Button as ={Link} to="/admin/supplier-escuela">Supplier-Escuela</Button>{" "}
      <Button as ={Link} to="/admin/supplier-rivers">Rivers</Button>{" "}
      <Button as ={Link} to="/admin/maintain-products">Maintain Products</Button>{" "}
    </div>
  )
}

export default AdminHome