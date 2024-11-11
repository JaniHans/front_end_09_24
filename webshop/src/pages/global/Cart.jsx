import { Link } from 'react-router-dom'
import React, {useState} from 'react'
// import cartFile from "../../data/cart.json"
import { useTranslation } from 'react-i18next'
//OSTUKORV TEHA

function Cart() {
    const { t } = useTranslation()
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || [])
    
    const emptyCart = () => {
        products.splice(0);
        setProducts(products.slice());
        localStorage.setItem("cart", JSON.stringify(products))
    }

    const deleteItem = (index) => {
        products.splice(index, 1); // mitmendat , teine number mitu tk kustutame
        setProducts(products.slice());
        localStorage.setItem("cart", JSON.stringify(products))
    }

    const calculateSum = () => {
        let sum = 0
        products.forEach(element => {
            sum += element.toode.price * element.kogus;
        });
        return sum.toFixed(2);

        // OR math round investigate
    }


    const decreaseQuantity = (index) =>  {
        products[index].kogus--;
        if (products[index].kogus === 0) {
            products.splice(index, 1)
        }
        setProducts(products.slice())
        localStorage.setItem("cart", JSON.stringify(products));
    }

    const increaseQuantity = (index) =>  {
        products[index].kogus++;
        setProducts(products.slice())
        localStorage.setItem("cart", JSON.stringify(products));
        
    }

  
    const calculateProducts = () => {
        let sum = 0
        products.forEach(element => {
            Math.round();
            sum += element.kogus
        });
        return sum;

        // OR math round investigate
    }
    return (
    <div>
        <div>Total sum: {calculateSum()}</div>
        <div>Different Products: {products.length} pcs</div>
        <div>Total Products: {calculateProducts()} pcs</div>
        {products.length > 0 && <button onClick={emptyCart}>{t("empty")}</button>}
        {products.map((product, index) =>
        <div key={product.toode.id}>
            <img style={{width: "100px"}} src={product.image} alt="not found"/>
            <div>{product.toode.title}</div>
            <div>{product.toode.price.toFixed(2)}€</div>
            <button onClick={() => decreaseQuantity(index)}>-</button>
        
            <div>{product.kogus} tk</div>
            <button onClick={() => increaseQuantity(index)}>+</button>

            <div>{product.kogus * product.toode.price}</div>
            <button onClick={() => deleteItem(index)}>X</button>
    </div>)}

    <div>{t("cart-is-empty")}</div>

            <Link to="/">
            <button>{t("back")}</button>
            </Link>

        </div>
  


)
  }

export default Cart