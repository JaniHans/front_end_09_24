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

    const deleteItems = (index) => {
        products.splice(index, 1);
        setProducts(products.slice());
        localStorage.setItem("cart", JSON.stringify(products))
    }

    const calculateSum = () => {
        let sum = 0
        products.forEach(element => {
            sum += element.price;
        });
        return sum.toFixed(2);

        // OR math round investigate
    }

    return (
    <div>
        <div>{calculateSum()}</div>
        {products.length > 0 && <button onClick={emptyCart}>{t("empty")}</button>}
        {products.map((product, index) =>
        <div>
            <img style={{width: "100px"}} src={product.image} alt="not found"/>
            <div>{product.title}</div>
            <div>{product.price.toFixed(2)}€</div>
            <button onClick={() =>deleteItems(index)}>X</button>
    </div>)}

    <div>{t("cart-is-empty")}</div>

            <Link to="/">
            <button>{t("back")}</button>
            </Link>

        </div>
  


)
  }

export default Cart