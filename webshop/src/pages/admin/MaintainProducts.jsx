import React, {useRef} from 'react'
import { useState } from 'react'
import productsFile from "../../data/products.json"
import {Toaster, toast} from 'react-hot-toast';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

function MaintainProducts() {
  const [products, setProducts] = useState([]);
  const searchInput = useRef();

  const url = 'https://webshop-6ba05-default-rtdb.europe-west1.firebasedatabase.app/products.json'


  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => setProducts(json || []));
  }, []);

  const deleteProduct = (id) => {
    // kustutamine
    const index = products.findIndex(product => product.id === id);
    products.splice(index, 1);
    // setProducts(productsFile.filter(product => product.id !== id));
    toast.error("Product deleted successfully");

    fetch(url, {method: "PUT", body: JSON.stringify(products)})
    .then(res => res.json())
    .then(json => setProducts(json || []));
  };
  

  const searchByTitle = () => {
    setProducts(productsFile.filter(product => product.title.toLowerCase().includes(searchInput.current.value.toLowerCase())));
  }

  const resetSearch = () => {
    setProducts(productsFile);
  }
 
  if (products.length === 0) {
    return <div>Loading..</div>
  }

  return  (
    <div>
      <Button as ={Link} to="/admin/add-product">Add Products</Button>{" "} <br /> <br/>
      <label>Search by title</label>
      <input ref={searchInput} type="text"></input>
      <button onClick={searchByTitle}>Search</button>
      <button onClick={resetSearch}>Reset</button>
      {/* <input type="text" onChange={(e) => setProducts(products.filter(product => product.title.toLowerCase().includes(e.target.value.toLowerCase())))}/> */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Picture</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
            <th>Rating</th>
            <th>Warehouse</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id} className={product.active ? "active" : "inactive"}> 
              <td>{product.id}</td>
              <td><img src={product.image} alt={product.title} style={{width: "50px"}}/></td>
              <td>{product.title}</td>
              <td>{product.price}€</td>
              
              <td>

                <button onClick={() => deleteProduct(product.id)}>Kustuta</button>
               
               <Link to={"/admin/edit-product/" + index }>
                <button>CHANGE</button>
                </Link>

              </td>
              <td>{product.rating.rate}</td>
              <td>{product.rating.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Toaster
  position="top-right"
  reverseOrder={true}
/>
    </div>
  );
}

export default MaintainProducts