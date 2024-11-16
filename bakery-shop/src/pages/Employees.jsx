import { useEffect, useRef, useState } from "react";
import { Button, Table } from "react-bootstrap";

function Employees() {

  const [message, setMessage] = useState('')

  const idRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const avatarRef = useRef();
  
  
  const validator = require('validator');

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(json => setEmployees(json.data))

  }, []);

  const addEmployee = () => {
    // TODO: Add validations
    // TODO: Add an employee to the table
    if (!idRef.current.value || !validator.isNumeric(idRef.current.value)) {
      setMessage("Enter a valid number!");
      return;
    }
    if (!firstNameRef.current.value || !validator.isAlpha(firstNameRef.current.value)) {

      setMessage("Only letters permitted for first name!");
      return;
    }

    if (!lastNameRef.current.value || !validator.isAlpha(lastNameRef.current.value)) {

      setMessage("Only letters permitted for first name!");
      return;
    }

    if (!emailRef.current.value || !validator.isEmail(emailRef.current.value)) {
      setMessage("Enter correct email");
      return;
    }

    if (!avatarRef.current.value || !validator.isURL(avatarRef.current.value)) {
      setMessage("Enter correct URL");
      return;
    }

    employees.push({
      id: idRef.current.value,
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      email: emailRef.current.value,
      avatar: avatarRef.current.value
    })
    setEmployees(employees.slice());

  }

  const deleteEmployee = (index) => {
    employees.splice(index, 1);
    setEmployees(employees.slice());
    // TODO: Delete an employee from the table
  }

  return (<div>
    <div className="container">
      <h2 className="mb-4">Employees</h2>
      <Table className="table table-hover table-bordered table-sortable">
        <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Avatar</th>
          {/* <!-- TODO: Add a column for an avatar --> */}
          <th scope="col">Actions</th>
        </tr>
        </thead>
        <tbody>
        {employees.map((employee, index) =>
      <tr key={index}>
        <td className="name">{employee.id}</td>
        <td>{employee.first_name}</td>
        <td>{employee.last_name}</td>
        <td>{employee.email}</td>
        <td><img src={employee.avatar} style={{width: "75px"}} alt="not found"/></td>
        <td><Button type="button" variant="danger" onClick={() => deleteEmployee(index)}>Delete</Button></td>
        </tr>)}
          
         <tr>
          <td>123</td>
          <td>Added name 1</td>
          <td>email@email.com</td>
          <td></td>
        </tr> 
        {/* <tr>
          <td>124</td>
          <td>Added name 2</td>
          <td>email2@email.com</td>
          <td><Button type="button" variant="danger">Delete</Button></td>
        </tr> */}

        <tr className="input-row">
          <td><input type="text" ref={idRef} placeholder="ID" className="form-control"/></td>
          <td><input type="text" ref={firstNameRef} placeholder="First Name" className="form-control"/></td>
          <td><input type="text" ref={lastNameRef} placeholder="Last Name" className="form-control"/></td>
          <td><input type="text" ref={emailRef} placeholder="Email" className="form-control"/></td>
          <td><input type="text" ref={avatarRef} placeholder="Avatar" className="form-control"/></td>
          <td><Button type="submit" variant="success" onClick={addEmployee}>Add</Button></td>
         
        </tr>
        <div>{message}</div>
        </tbody>
      </Table>
    </div>

  </div>)
}

export default Employees;