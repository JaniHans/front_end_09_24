import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Work from './pages/Work'
import Hobbies from './pages/Hobbies'
import Courses from './pages/Courses'


function App() {
  return (
    <div>
      <img className="main-picture" src="https://christiansforsocialaction.org/wp-content/uploads/2020/01/sunrise-Jonathan-Petersson-Pexels-768x511.jpg" alt="sunrise over the field"/>
      <div className="rectangle"></div>

      <div className="navigation-pictures">
        <Link className="main-link" to="/work">
        <img src="https://cdn.pixabay.com/photo/2024/09/06/13/11/beach-9027513_1280.jpg" alt="ship on sea"/>
        <p>Tööde lehele</p>
        </Link>
        <Link className="main-link"to="/hobbies">
        <img src="https://cdn.pixabay.com/photo/2023/05/17/13/38/lofoten-islands-8000196_1280.jpg" alt="sea full of rocks"/>
        <p>Hobide lehele</p>
        </Link>
        <Link className="main-link" to="/courses">
        <img src="https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg?w=718&h=539" alt="highway"/>
        <p>Kursuse lehele</p>
        </Link>
      </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/6HhzIn8I4ak?si=JmiX8CUdGGiQwp2o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <Routes>
        <Route path="work" element={ <Work/> } />
        <Route path="hobbies" element={ <Hobbies/> }/>
        <Route path="courses" element={ <Courses /> }/>
      </Routes>
      <a className="facebook-button" href="https://www.facebook.com/jani.hans.182/">
      <img className="facebook_button" src="/facebook.png" alt=""/>
      <span>Facebook</span>
      </a>
    </div>
  );
}

export default App;
