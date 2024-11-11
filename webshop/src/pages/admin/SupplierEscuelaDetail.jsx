import React , {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

function SupplierEscuelaDetail() {
    const {id} = useParams(); // localhost:3000/admin/supplier-detail/10
    // saada URLi osa IDga tootelt k2tte 
    const [product, setProduct] = useState({});


    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products/' + id)
              .then(res=> res.json())
              .then(json=> setProduct(json))
      }, [id]);

      if (product.category === undefined) {
        return <div>Loading...</div>
      }

  return (
    <div>
         <div>{product.id}</div>
        <div>{product.title}</div>
        <div>{product.description}</div>
        <div>{product.category.name}</div>
        <div>{product.description}</div>
        <img src={product.category.image} alt=""/>
    </div>
  )
}

export default SupplierEscuelaDetail