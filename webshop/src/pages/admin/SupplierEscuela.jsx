import React from 'react'
import { useEffect , useState} from 'react';
import {Link} from 'react-router-dom';

// sünkroonne kood --> koguaeg läheb edasi
// asünkroone kood ---> peatub kuskil


function SupplierEscuela() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
        .then(res => res.json())
        .then(json => setProducts(json)) // j22b ootama fetchi j2rgi
    }, []);

  return (
    <div>
         {products.map(product =>
              <div className='product' key={product.id}>
                <Link
                 to={"/admin/escuela-detail/" + product.id}>
                <img className='image' src={product.images[0]} alt="" />
                <img className='image' src={product.images[1]} alt="" />
                <img className='image' src={product.images[2]} alt="" />
                <div className='title'>{product.title}</div>
                <div className='price'>{product.price}€</div>
                </Link>
              </div>
        )}
    </div>
  )
}

export default SupplierEscuela