
import { Routes, Route, Link} from 'react-router-dom'
import './App.css';
import HomePage from './pages/global/HomePage';
import ContactUs from './pages/global/ContactUs';
import Shops from './pages/global/Shops';
import Cart from './pages/global/Cart';
import SingleProduct from './pages/global/SingleProduct';
import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainShops from './pages/admin/MaintainShops';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import NotFound from './pages/global/NotFound';
import { useTranslation } from 'react-i18next';

  // Eng poes ka:
  // Bootstrap          npm i bootstrap
  // Emaili saatmine    npm i @emailjs
  // Kaardirakendus     npm i react-leaflet leaflet --> lisa mõned poed teise linna
  // T6lge                npm i react-i18next i18next --> lisa kolmas ja neljas keel
  // Kata k6ik t6lgetega webshop
  //


function App() {

  const { t, i18n } = useTranslation();

  return (


    <div className='App'>



   
    
    <Link to="cart">
      <button>{t("cart")}</button>
    </Link>
    <br />
    <button onClick={() => i18n.changeLanguage("en")}>EN</button>
    <button onClick={() => i18n.changeLanguage("ee")}>EE</button>
    <button onClick={() => i18n.changeLanguage("it")}>IT</button>
    <Routes>
      <Route path='' element={<HomePage />}></Route>
      <Route path='contact' element={<ContactUs />}></Route>
      <Route path='shops' element={<Shops />}></Route>
      <Route path='cart' element={<Cart />}></Route>
      <Route path='product/:index' element={<SingleProduct />}></Route>

      <Route path='admin' element={<AdminHome />}></Route>
      <Route path='admin/add-product' element={<AddProduct />}></Route>
      <Route path='admin/edit-product/:index' element={<EditProduct />}></Route>
      <Route path='admin/maintain-products' element={<MaintainProducts />}></Route>
      <Route path='admin/maintain-categories' element={<MaintainCategories />}></Route>
      <Route path='admin/maintain-shops' element={<MaintainShops />}></Route>

      <Route path='login' element={<Login />}></Route>
      <Route path='signup' element={<Signup />}></Route>

      <Route path='*' element={<NotFound />}></Route>


    </Routes>
    </div>
  );
}

export default App;
