import React from 'react'
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

function SupplierDetail() {
    const {id} = useParams(); // localhost:3000/admin/supplier-detail/10
    // saada URLi osa IDga tootelt k2tte 
    const [product, setProduct] = useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + id)
              .then(res=> res.json())
              .then(json=> setProduct(json))
      }, [id]);

  return (
    <div>
        
        <div>{product.id}</div>
        <div>{product.title}</div>
        <div>{product.description}</div>
        <div>{product.category}</div>
        {/* <div>{product.rating.rate}</div>
        <div>{product.rating.count}</div> */}
    </div>
  )
}

export default SupplierDetail