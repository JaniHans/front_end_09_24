import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';



function SupplierRiver() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://marineregions.org/rest/getGazetteerTypes.json")
        .then(res => res.json())
        .then(json => setProducts(json)) // j22b ootama fetchi j2rgi
    }, []);

  return (
    <div>
         {products.map(product =>
              <div className='product' key={product.id}>
                <div className='title'>{product.type}</div>
                <div className='price'>{product.description}€</div>
                
              </div>
        )}
    </div>
  )
}

export default SupplierRiver