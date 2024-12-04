import { useEffect , useState} from 'react';
import React  from 'react'
import {useParams} from 'react-router-dom';
// import productsFile from "../../data/products.json";

function SingleProduct() {
  const {t} = useParams();
  const [products, setProducts] = useState([]);
  const leitud = products[t]

  const url = 'https://webshop-6ba05-default-rtdb.europe-west1.firebasedatabase.app/products.json'

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => setProducts(json || []));
  }, []);

  if (leitud === undefined) {
    return <div>Not found</div>
  }

  return (
    <div>
      <img style={{width: "100px"}}src={leitud.image} alt=''/>
      <div>{leitud.price}€</div>
      <div>{leitud.title}</div>
      <br /><br />
      <div>{leitud.description}</div>
      <div>{leitud.category}</div>
      <div>Rating: {leitud.rating.rate}</div>
      <div>Warehouse: {leitud.rating.count}</div>

    </div>
  )
}

export default SingleProduct