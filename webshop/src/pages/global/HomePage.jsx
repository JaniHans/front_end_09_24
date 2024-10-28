import React , {useState} from 'react'
import productsFile from "../../data/products.json"

function HomePage() {
    const [products, setProducts] = useState(productsFile)
  return (
    <div>

        {products.map(product => 
            <div key={product.id}>
                <img style={{width: "100px"}} src={product.image} alt="" />
                <div>{product.title}</div>
                <div>{product.price}</div>
                </div>
        )}
    </div>
  )
}

export default HomePage