import { Button } from '@mui/material';
import React from 'react'



//props siia sulgude sisse
// ja alla igayhele props.ette --> props.products, props.setProducts

// teeb sama v2lja mis loogeliste sulgude sisse pannes (products, setProducts)

function SortButtons({products, setProducts}) {
    
    const sortAZ = () => {
        products.sort((a, b) => a.title.localeCompare(b.title))
        setProducts(products.slice());
      }
      
      const sortZA = () => {
        products.sort((a, b) => b.title.localeCompare(a.title))
        setProducts(products.slice());
      }
      
      const sortLowToHigh = () => {
        products.sort((a, b) => a.price - b.price)
        setProducts(products.slice());
      }
      
      const sortHighToLow = () => {
        products.sort((a, b) => b.price - a.price)
        setProducts(products.slice());
      }
      
      const sortRatingHighToLow = () => {
        products.sort((a, b) => b.rating.rate - a.rating.rate)
        setProducts(products.slice());
      }
      
      const sortRatingLowToHigh = () => {
        products.sort((a, b) => a.rating.rate - b.rating.rate)
        setProducts(products.slice());
      }

  return (
    <div>
            <Button onClick={sortAZ}>Sort A-Z</Button>
            <Button onClick={sortZA}>Sort Z-A</Button><br /><br />
            <Button onClick={sortLowToHigh}>Low to High</Button>
            <Button onClick={sortHighToLow}>High to Low</Button>
            <Button onClick={sortRatingHighToLow}>Rating: High to Low</Button>
            <Button onClick={sortRatingLowToHigh}>Rating: Low to High</Button><br /><br />
    </div>
  )
}

export default SortButtons