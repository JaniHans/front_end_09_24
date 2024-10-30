import { Link } from 'react-router-dom'
import React, {useState} from 'react'
import cartFile from "../../data/cart.json"
//OSTUKORV TEHA

function Cart() {
    const [products, setProducts] = useState(cartFile)
 
    const emptyCart = () => {
        cartFile.splice(0);
        setProducts(cartFile.slice());
    }

    const deleteItems = (index) => {
        cartFile.splice(index, 1);
        setProducts(cartFile.slice());
    }

    const calculateSum = () => {
        let sum = 0
        products.forEach(element => {
            sum += element.price;
        });
        return sum;
    }

    return (
    <div>
        <div>{calculateSum()}</div>
        {products.length > 0 && <button onClick={emptyCart}>Empty cart</button>}
        {products.map((product, index) =>
        <div>
            <img style={{width: "100px"}} src={product.image} alt="not found"/>
            <div>{product.title}</div>
            <div>{product.price}€</div>
            <button onClick={() =>deleteItems(index)}>X</button>
    </div>)}

    <div>Shopping cart is empty</div>

            <Link to="/">
            <button>Back to Homepage</button>
            </Link>

        </div>
  


)
  }

export default Cart