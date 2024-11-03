import React , {useState} from 'react'
import productsFile from "../../data/products.json"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import cartFile from "../../data/cart.json"
import { useTranslation } from 'react-i18next';

function HomePage() {
    const [products, setProducts] = useState(productsFile.slice());
    const { t } = useTranslation();

    const reset = () => {
      setProducts(productsFile);
    }


    const addToCart = (product) => {

      // cartFile.push(product);
      const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
      cartLS.push(product);
      localStorage.setItem("cart", JSON.stringify(cartLS));
      toast.success(t("product-added-message"));
    }
  return (
    <div>
           <ToastContainer 
            position="bottom-right"
            autoClose={4000}
            theme="dark"/>
            <button onClick={reset}>Reset</button>
        <div className='products'>
        {products.map(product =>
              <div className='product' key={product.id}>
                <img className='image' src={product.image} alt="" />
                <div className='title'>{product.title}</div>
                <div className='price'>{product.price}€</div>
                <button onClick={() => addToCart(product)}>{t("add-product")}</button>
              </div>
        )}
        </div>
    </div>
  )
}

export default HomePage