import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [vastus, muudaVastus] = useState(0);
  const input1Ref = useRef();
  const input2Ref = useRef();
  
  function korruta() {
    muudaVastus(input1Ref.current.value * input2Ref.current.value);
  }

  function lahuta() {
    muudaVastus(input1Ref.current.value - input2Ref.current.value);
  }

  function jaga() {
    muudaVastus(input1Ref.current.value / input2Ref.current.value);
  }
  
  function liida() {
    muudaVastus(parseFloat(input1Ref.current.value) + parseFloat(input2Ref.current.value));
  }
  
  
  return (

    <div className="App">
      <input ref={input1Ref} type="text" />
      <input ref={input2Ref} type="text" />
      <br/>
      {vastus}  <br/>
      <button onClick={korruta}>KORRUTA</button>
      <button onClick={lahuta}>LAHUTA</button>
      <button onClick={jaga}>JAGA</button>
      <button onClick={liida}>LIIDA</button>
      
    </div>
  );
}

export default App;
