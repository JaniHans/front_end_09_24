import React , {useState} from 'react'
import productsFile from "../../data/products.json"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import cartFile from "../../data/cart.json"
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';

function HomePage() {
    const [products, setProducts] = useState(productsFile.slice());
    const { t } = useTranslation();
    // const [showCategories, setShowCategories] = useState(false);

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
    }

const sortAZ = () => {
  products.sort((a, b) => a.title.localeCompare(b.title))
  setProducts(products.slice());
}

const sortZA = () => {
  products.sort((a, b) => b.title.localeCompare(a.title))
  setProducts(products.slice());
}

const sortLowToHigh = () => {
  products.sort((a, b) => a.price - b.price)
  setProducts(products.slice());
}

const sortHighToLow = () => {
  products.sort((a, b) => b.price - a.price)
  setProducts(products.slice());
}

const sortRatingHighToLow = () => {
  products.sort((a, b) => b.rating.rate - a.rating.rate)
  setProducts(products.slice());
}

const sortRatingLowToHigh = () => {
  products.sort((a, b) => a.rating.rate - b.rating.rate)
  setProducts(products.slice());
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
  return (
    <div>
           <ToastContainer 
            position="bottom-right"
            autoClose={4000}
            theme="dark"/>
            <button onClick={reset}>Reset</button><br /><br />
            <button onClick={sortAZ}>Sort A-Z</button>
            <button onClick={sortZA}>Sort Z-A</button><br /><br />
            <button onClick={sortLowToHigh}>Low to High</button>
            <button onClick={sortHighToLow}>High to Low</button>
            <button onClick={sortRatingHighToLow}>Rating: High to Low</button>
            <button onClick={sortRatingLowToHigh}>Rating: Low to High</button><br /><br />
            <label>Filter by Category</label><br />
            <button onClick={() => filterByCategory("men's clothing")}>Men's Clothing</button>
            <button onClick={() => filterByCategory("women's clothing")}>Women's clothing</button>
            <button onClick={() => filterByCategory("jewelery")}>Jewelery</button>
            <button onClick={() => filterByCategory("electronics")}>Electronics</button>
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
                <img className='image' src={product.image} alt="" />
                <div className='title'>{product.title}</div>
                <div className='price'>{product.price}€</div><br />
                <div className='rating'>Rating: {product.rating.rate}</div><br />
                <button onClick={() => addToCart(product)}>{t("add-product")}</button>
                <Link to={'product/' + index}>
                <button>Vt üksikasjad</button>
                </Link>
              </div>
        )}
        </div>
    </div>
  )
}

export default HomePage