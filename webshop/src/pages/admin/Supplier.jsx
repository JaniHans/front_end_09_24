import React , {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
function Supplier() { // API päringu puhul on siin algväärtus
    // variandid : array puhul useState([]) string puhul useState("")
    // objekti puhul useState({}), number puhul useState(0)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
              .then(res=> res.json())
              .then(json=> setProducts(json))
      }, []);


  return (
    <div>
         {products.map(product =>
         <Link key={product.id} to={"/admin/supplier-detail/" + product.id}>
              <div className='product'>
                <img className='image' src={product.image} alt="" />
                <div className='title'>{product.title}</div>
                <div className='price'>{product.price}€</div>
                
              </div>
              </Link>
        )}
    </div>
  )
}

export default Supplier