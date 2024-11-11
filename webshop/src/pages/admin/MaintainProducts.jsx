import React, {useRef} from 'react'
import { useState } from 'react'
import productsFile from "../../data/products.json"
import {Toaster, toast} from 'react-hot-toast';

function MaintainProducts() {
  const [products, setProducts] = useState(productsFile);
  const searchInput = useRef();

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
    toast.error("Product deleted successfully");
  }

  const searchByTitle = () => {
    setProducts(products.filter(product => product.title.toLowerCase().includes(searchInput.current.value.toLowerCase())));
  }

  const resetSearch = () => {
    setProducts(productsFile);
  }



  return (
    <div>
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
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td><img src={product.image} alt={product.title} style={{width: "50px"}}/></td>
              <td>{product.title}</td>
              <td>{product.price}€</td>
              
              <td>

                <button onClick={() => deleteProduct(product.id)}>Kustuta</button>
                <button>Muuda</button>


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