
import './App.css';

function App() {
  return (
    <div className="App">
    <button className="nupp">Nupp</button>
    <p className="tekst">Lorem ipsum dolor...</p>
    <p className="tekst_">Hallo kosmos</p>
    <div className="pildikast">
      <img className="pilt" src="https://cdn.pixabay.com/photo/2024/06/24/01/15/cosmic-8848955_640.png" alt="Kosmos"></img>
      </div>

      <table>
  <tr className="tabeli_pealkirjad">
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr className="paaritu">
    <td className="firma">Alfreds Futterkiste</td>
    <td className="kontakt">Maria Anders</td>
    <td className="riik">Germany</td>
  </tr>
  <tr className="paaris">
    <td className="firma">Centro comercial Moctezuma</td>
    <td className="kontakt">Francisco Chang</td>
    <td className="riik">Mexico</td>
  </tr>
  <tr className="paaritu">
    <td className="firma">Ernst Handel</td>
    <td className="kontakt">Roland Mendel</td>
    <td className="riik">Austria</td>
  </tr>
  <tr className="paaris">
    <td className="firma">Island Trading</td>
    <td className="kontakt">Helen Bennett</td>
    <td className="riik">UK</td>
  </tr>
  <tr className="paaritu">
    <td className="firma">Laughing Bacchus Winecellars</td>
    <td className="kontakt">Yoshi Tannamuri</td>
    <td className="riik">Canada</td>
  </tr>
  <tr className="paaris">
    <td className="firma">Magazzini Alimentari Riuniti</td>
    <td className="kontakt">Giovanni Rovelli</td>
    <td className="riik">Italy</td>
  </tr>
  
</table>
<div className="videokast">
  <iframe width="420" height="315" title="test video"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
  </iframe>
    </div>
  </div>
  );
}

export default App;
