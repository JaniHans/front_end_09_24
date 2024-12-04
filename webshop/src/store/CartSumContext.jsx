// väga sarnane Redux - see on lihtsalt keerulisematele lahendustele


// Context ja Redux teevad sama asja

import { createContext, useState} from 'react';


// --> provideri kaudu määran globaalsust 
// kus neid muutujaid ja funktsionaalsusi näha saan
export const CartSumContext = createContext();


// --> provideri kaudu määran globaalsust
// kus neid muutujaid ja funktsionaalsusi näha saan
export const CartSumContextProvider = ({children}) => {

    const [cartSum, setCartSum] = useState(calculateCartSum());
    
    function calculateCartSum() {
        const products = JSON.parse(localStorage.getItem("cart")) || []
        let sum = 0
        products.forEach(element => {
            Math.round();
            sum += element.toode.price * element.kogus;
        })
        return sum.toFixed(2);
    }

    return (
    <CartSumContext.Provider value={{cartSum, setCartSum}}>
        {children}
    </CartSumContext.Provider>
    )
}