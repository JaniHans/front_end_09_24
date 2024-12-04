import React , {useState, useEffect, useContext} from 'react'
import productsFile from "../../data/products.json"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import cartFile from "../../data/cart.json"
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
import SortButtons from '../../components/SortButtons';
import { CartSumContext } from '../../store/CartSumContext';
import Button from '@mui/material/Button';



function HomePage() {
  
    const {cartSum, setCartSum} = useContext(CartSumContext);
    const [products, setProducts] = useState([]);
    const { t } = useTranslation();
    // const [showCategories, setShowCategories] = useState(false);
  
    const url = 'https://webshop-6ba05-default-rtdb.europe-west1.firebasedatabase.app/products.json'


    useEffect(() => {
      fetch(url)
      .then(res => res.json())
      .then(json => setProducts(json || []));
    }, []);

    const reset = () => {
      setProducts(productsFile);
    }


    const addToCart = (product) => {

      // cartFile.push(product);
      const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
      const index = cartLS.findIndex(cartProduct => cartProduct.toode.id === product.id)
      // j2rjekorranumbbri otsimiseks --> kui ei leia, on -1
      
      if (index !== -1) {
        // suurenda kogust
        cartLS[index].kogus++;
        cartLS[index].kogus += 1;
        cartLS[index].kogus = cartLS[index].kogus + 1;
      } else {
        cartLS.push({toode: product, kogus: 1});
      }
 

      localStorage.setItem("cart", JSON.stringify(cartLS));
      toast.success(t("product-added-message"));
      // liidab juurde olemasolevale summale lisatud toote hinna
      // olemasolev summa ---> cartSum
      // lisatud tootehind --> product.price
      // mure: cartsum konverteeriti stringiks, kuna taheti n2idata kahte komakohta
      // .toFixed(2) abil
      // lahendus tuleb konverteerida tagasi numbriks
      // panen l6puks uuesti .toFixed(2), et teha uuesti nii, et oleks 2 komakohta
      setCartSum((Number(cartSum) + product.price).toFixed(2));
      // setCartSum(cartSum + product.price); ilma kohakohtade peale m6tlemata
    }



const filterByCategory = (category) => {
  const filteredProducts = products.filter(product => product.category === category)
  setProducts(filteredProducts)
}

//ADVANCED CURSOR AI
// const getUniqueCategories = () => {
//   return [...new Set(products.map(product => product.category))];
// }

// const filterByCategory = (category) => {
//   const filteredProducts = products.filter(product => product.category === category)
//   setProducts(filteredProducts)
// } 

  if (products.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div>{products.length}</div>
           <ToastContainer 
            position="bottom-right"
            autoClose={4000}
            theme="dark"/>
            <Button variant="outlined" onClick={reset}>Reset</Button><br /><br />
            <SortButtons products={products} setProducts={setProducts} />
            <label>Filter by Category</label><br />
            <Button onClick={() => filterByCategory("men's clothing")}>Men's Clothing</Button>
            <Button onClick={() => filterByCategory("women's clothing")}>Women's clothing</Button>
            <Button onClick={() => filterByCategory("jewelery")}>Jewelery</Button>
            <Button onClick={() => filterByCategory("electronics")}>Electronics</Button>
            <div className="category-filter">
        {/*  ADVANCED CURSOR AI <button onClick={() => setShowCategories(!showCategories)}>Filter by Category</button>
        {showCategories && (
          <div className="category-dropdown">
            {getUniqueCategories().map(category => (
              <button 
                key={category} 
                onClick={() => filterByCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )} */}
      </div>
        <div className='products'>
        {products.map((product, index) =>
              <div className='product' key={product.id}>
                <Link to={'product/' + index}>
                <img className='image' src={product.image} alt="" />
                <div className='title'>{product.title}</div>
                <div className='price'>{product.price}€</div><br />
                <div className='rating'>Rating: {product.rating.rate}</div><br />
                </Link>
                <Button variant="contained" onClick={() => addToCart(product)}>{t("add-product")}</Button>
                
                
        
              </div>
        )}
        </div>
    </div>
  )
}

export default HomePage