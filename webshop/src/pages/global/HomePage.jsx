import React , {useState} from 'react'
import productsFile from "../../data/products.json"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cartFile from "../../data/cart.json"
import { useTranslation } from 'react-i18next';

function HomePage() {
    const [products, setProducts] = useState(productsFile.slice());
    const { t } = useTranslation();

    const reset = () => {
      setProducts(productsFile);
    }


    const addToCart = (product) => {
      cartFile.push(product)
      toast.success(t("product-added-message"))
    }
  return (
    <div>
           <ToastContainer 
            position="bottom-right"
            autoClose={4000}
            theme="dark"/>
            <button onClick={reset}>Reset</button>
        {products.map(product => 
            <div key={product.id}>
                <img style={{width: "100px"}} src={product.image} alt="" />
                <div>{product.title}</div>
                <div>{product.price}€</div>
                <button onClick={() => addToCart(product)}>{t("add-product")}</button>
                </div>
        )}
    </div>
  )
}

export default HomePage