import './App.css';
import { Route, Routes } from 'react-router-dom';
import Work from './pages/Work'
import Hobbies from './pages/Hobbies'
import Courses from './pages/Courses'
import Navbar from './components/Navbar'


function App() {
  return (
    <div>
      
      
      <iframe width="560" height="315" src="https://www.youtube.com/embed/6HhzIn8I4ak?si=JmiX8CUdGGiQwp2o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <Routes>
        <Route path="" elements={ <Navbar />} />
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
