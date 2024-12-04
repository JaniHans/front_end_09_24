import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
import { CartSumContext } from '../store/CartSumContext';
import { AuthContext } from '../store/AuthContent';

function NavigationBar() {
  const {cartSum} = useContext(CartSumContext);
  const {loggedIn, setLoggedIn} = useContext(AuthContext)
  const {t, i18n } = useTranslation();

  const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);
    // Brauseri 
    // V6ti vasakul, v22rtus paremal ---> "ee", "eng" "it", "fr"
    localStorage.setItem("language", newLang);
  }

  const logout = () => {
    setLoggedIn(false)
    sessionStorage.removeItem("token");
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">{t("webshop")}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/cart">{t("cart")}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t("findshops")}</Nav.Link>
            {loggedIn && <Nav.Link as={Link} to="/admin/">Admin</Nav.Link>}
          </Nav>
          <Nav>
            {cartSum}€
            <img onClick={() => changeLang("en")} className="icon" src="/uk.png" alt=""/>
            <img onClick={() => changeLang("ee")} className="icon" src="/es.png" alt=""/>
            <img onClick={() => changeLang("it")} className="icon" src="/it.png" alt=""/>
            <img onClick={() => changeLang("fr")} className="icon" src="/fr.png" alt=""/>
       
           { loggedIn === false ?
            
            <>
            <Nav.Link as={Link} to="/login">{t("login")}</Nav.Link>
            <Nav.Link as={Link} to="/signup">{t("register")}</Nav.Link>
            </> :
            <Nav.Link onClick={logout}> Logout</Nav.Link>
            
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
