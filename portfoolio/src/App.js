import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Work from './pages/Work'
import Hobbies from './pages/Hobbies'
import Courses from './pages/Courses'
import Navbar from './components/Navbar'


function App() {
  return (
    <div>
      
      <Navbar/>
      <Link to="/courses"><button>Courses</button></Link>
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
