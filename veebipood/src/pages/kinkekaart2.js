

// kui html saaks lükkata käima enne javascripti

function Kinkekaart2() {
   //useState
   // useRef
   
    document.getElementById("twenty").addEventListener("click", () =>{
        document.getElementById("summa").innerText = 20;
    })


  return (
    <div>
      <button id="tweny">20 €</button>
      <button id="fifty">50 €</button>
      <button id="hundred">100 €</button>
      <br /><br />

      <div>Kinkekaart <span id="summa">20 </span>€</div>
    </div>
  )
}

export default Kinkekaart2