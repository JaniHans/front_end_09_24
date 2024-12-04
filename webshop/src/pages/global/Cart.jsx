import { Link } from 'react-router-dom'
import React, {useState, useContext} from 'react'
// import cartFile from "../../data/cart.json"
import { useTranslation } from 'react-i18next';
import ParcelMachines from '../../components/ParcelMachines'
import Payment from '../../components/Payment'
import { CartSumContext } from '../../store/CartSumContext'


function Cart() {
    const {setCartSum} = useContext(CartSumContext);
    const { t } = useTranslation()
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || [])

    const emptyCart = () => {
        products.splice(0);
        setProducts(products.slice());
        localStorage.setItem("cart", JSON.stringify(products))
        setCartSum(calculateSum());
    }

    const deleteItem = (index) => {
        products.splice(index, 1); // mitmendat , teine number mitu tk kustutame
        setProducts(products.slice());
        localStorage.setItem("cart", JSON.stringify(products))
        setCartSum(calculateSum());
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
        setCartSum(calculateSum());
    }

    const increaseQuantity = (index) =>  {
        products[index].kogus++;
        setProducts(products.slice())
        localStorage.setItem("cart", JSON.stringify(products));
        setCartSum(calculateSum());
        
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
        <div className='cart-product' key={product.toode.id}>
            <img className='cart-image' src={product.toode.image} alt="not found"/>
            <div className='cart-title'>{product.toode.title}</div>
            <div className='cart-price'>{product.toode.price.toFixed(2)}€</div>
            <button className='icon' onClick={() => decreaseQuantity(index)}>-</button>
        
            <div className='cart-quantity'>{product.kogus} tk</div>
            <button className='icon' onClick={() => increaseQuantity(index)}>+</button>

            <div className='cart-total'>{product.kogus * product.toode.price}</div>
            <button className='icon' onClick={() => deleteItem(index)}>X</button>
    </div>)}
    
    <Payment sum={calculateSum()}/>

    <div>{t("cart-is-empty")}</div>

            <Link to="/">
            <button>{t("back")}</button>
            </Link>
            <ParcelMachines />

        </div>
  


)
  }

export default Cart