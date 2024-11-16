
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
      <Button as ={Link} to="/electricity">Electricity</Button>{" "}
      <Button as ={Link} to="/admin/maintain-categories">Maintain Categories</Button>{" "}
      <Button as ={Link} to="/admin/add-product">Add Product</Button>{" "}
    </div>
  )
}

export default AdminHome