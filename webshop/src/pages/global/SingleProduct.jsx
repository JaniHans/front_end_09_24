import React from 'react'
import {useParams} from 'react-router-dom';
import productsFile from "../../data/products.json";

function SingleProduct() {
  const {t} = useParams();
  const leitud = productsFile[t]

  if (leitud === undefined) {
    return <div>Not found</div>
  }

  return (
    <div>
      <img style={{width: "100px"}}src={leitud.image} alt=''/>
      <div>{leitud.price}€</div>
      <div>{leitud.title}</div>

   
      <div>{leitud.category}</div>
      <div>Rating: {leitud.rating.rate}</div>
      <div>Warehouse: {leitud.rating.count}</div>

    </div>
  )
}

export default SingleProduct