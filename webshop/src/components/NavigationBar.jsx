import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';

function NavigationBar() {

  const {t, i18n } = useTranslation();

  const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);
    // Brauseri 
    // V6ti vasakul, v22rtus paremal ---> "ee", "eng" "it", "fr"
    localStorage.setItem("language", newLang);
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
            <NavDropdown title={t("dropdown")} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <img onClick={() => changeLang("en")} className="icon" src="/i18n/uk.png" alt=""/>
            <img onClick={() => changeLang("ee")} className="icon" src="/i18n/es.png" alt=""/>
            <img onClick={() => changeLang("it")} className="icon" src="/i18n/it.png" alt=""/>
            <img onClick={() => changeLang("fr")} className="icon" src="/i18n/fr.png" alt=""/>
       
            <Nav.Link as={Link} to="/login">{t("login")}</Nav.Link>
            <Nav.Link as={Link} to="/signup">{t("register")}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
