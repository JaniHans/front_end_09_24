import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


function SupplierRiver() {
    const [products, setProducts] = useState([]); // HTMLS n2itamiseks, siin muudan koguaeg
    const [dbProducts, setDbProducts] = useState([]) ; // originaalkuju, mida ma kunagi ei muuda,
    // aa siit v]tan et kui tahan j2rgmisele lehele minna, siis ta v6taks k6igi 333 seast
    
    useEffect(() => {
        fetch("https://marineregions.org/rest/getGazetteerTypes.json")
        .then(res => res.json())
        .then(json => {
          setDbProducts(json);
          setProducts(json)}) // rohkem setDbProducts() ei tee, sest muidu pole enam 333 tk
          //dbProducts sees on originaalne andmebaasi kuju, t2pselt nii nagu on andmebaasis
    }, []);

    function changePage(number) {

        setProducts(dbProducts.slice(10 * number - 10, 10 * number))
      }




  return (
    <div>
      <div>{products.length}</div>
      <button>
        back
        </button>

        {/* <button onClick={() => changePage(1)}>1</button>
        <button onClick={() => changePage(2)}>2</button>
        <button onClick={() => changePage(3)}>3</button>
        <button onClick={() => changePage(4)}>4</button>
        <button>5</button>
        <button>6</button> */}
        {[1,2,3,4,5,6,7,8,9].map(page => <button key={page} onClick={() => changePage(page)}>{page}</button>)}
        <button>
        next
        </button>
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