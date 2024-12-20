import { useRef, useState } from "react";


function LisaArvuti() {
    const [message, setMessage] = useState("Lisa arvuti!")

    const markRef = useRef();
    const mudelRef = useRef();
    const maksumusRef = useRef();

    function addProduct() {
        setMessage("Arvuti lisatud");
        // seome objektiks kokku - neid vasakpoolseid võtmeid peame hiljem välja kuvades
        // HTMLs.map() sees kasutama
    

    const newComputer = {
        "mark": markRef.current.value,
        "mudel": mudelRef.current.value,
        "maksumus": maksumusRef.current.value,

    };

    // pane localstoragesse, võttes vanad väärtused ning lisades sellele objekt juurde
    const computers = JSON.parse(localStorage.getItem("laptops")) || [];
    computers.push(newComputer);
    localStorage.setItem("laptops", JSON.stringify(computers));
}

    return (
        <div>
            <div>{message}</div>
            <label>Mark</label><br/>
            <input ref={markRef}type="text"/><br/>
            <label>Mudel</label><br/>
            <input ref={mudelRef} type="text"/><br/>
            <label>Maksumus</label><br/>
            <input ref={maksumusRef} type="number"></input><br/>
            { message === "Lisa arvuti!" && <button onClick={() => addProduct()}>Sisesta</button>}
            
        </div>
    )
}

export default LisaArvuti;