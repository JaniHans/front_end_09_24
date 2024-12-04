
import { Route , Routes, Link} from 'react-router-dom';
import './App.css';
import Article from './pages/Article';
import Table from './pages/Table';

function App() {
  return (
    <div>
        <Routes>
    
          <Route path="article" element={<Article/>}></Route>
          <Route path="table" element={<Table/>}></Route>
        </Routes>
        <Link to="article"><button>Artikli lehele</button></Link>
        <Link to="table"><button>Tabeli lehele</button></Link>
    </div>
  );  
}

export default App;
