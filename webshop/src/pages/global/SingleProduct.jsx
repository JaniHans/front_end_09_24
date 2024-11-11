import React from 'react'
import productsFile from "../../data/products.json";
import { useState } from 'react';

function SingleProduct() {
  const [products, setProducts] = useState(productsFile);

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id))
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Picture</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Warehouse</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
            <td>{product.id}</td>
            <td><img src={product.image} alt={product.title} style={{width: "50px"}}/></td>
            <td>{product.title}</td>
            <td>{product.description}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.rating.rate}</td>
            <td>{product.rating.count}</td>
            <td><button onClick={() => deleteProduct(product.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SingleProduct