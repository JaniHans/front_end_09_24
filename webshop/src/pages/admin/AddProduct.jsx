import React, {useRef, useState} from 'react'

import productsFile from "../../data/products.json"

function AddProduct() {
 const [product, setProduct] = useState(productsFile.slice());
 const [message, addMessage] = useState()


  
  const idRef = useRef()
  const nameRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const ratingRef = useRef();
  const countRef = useRef();

  const addProducts = () => {
    if (idRef.current.value === "") {
      addMessage("Product ID is required");
      return; // katkestab funktsiooni edasimineku
    }
    if (nameRef.current.value === "") {
      addMessage("Product Title is required")
    }
    if (priceRef.current.value === "") {
      addMessage("Product Price is required");
      return;
    }
    if (descriptionRef.current.value === "") {
      addMessage("Product Description is required");
      return;
    }
    if (imageRef.current.value.startsWith("http://") === false) {
      addMessage("Product Image is required");
      return;
    }
    if (categoryRef.current.value === "") {
      addMessage("Product Category is required");
      return;
    }
  
    if (countRef.current.value === "") {
      addMessage("Product Count is required")
      return;
    }
    productsFile.push({ 
      id: idRef.current.value,
      title: nameRef.current.value,
      price: priceRef.current.value,
      description: descriptionRef.current.value,
      image: imageRef.current.value,
      category: categoryRef.current.value,
      rating: {rate: ratingRef.current.value, count: countRef.current.value},
    })
    setProduct(productsFile.slice());
    addMessage("Product added!")
  }
  return (
    <div>
      <div>Add Product</div>
      <label>Product ID</label><br />
      <input ref={idRef} type="text" /><br />
      <label>Product Title</label><br />
      <input ref={nameRef} type="text" /><br />
      <label>Product Price</label><br />
      <input ref={priceRef} type="text" /><br />
      <label>Product Description</label><br />
      <input ref={descriptionRef} type="text" /><br />
      <label>Product Image</label><br />
      <input ref={imageRef} type="text" /><br />
      <label>Product Category</label><br />
      <input ref={categoryRef} type="text" /><br />
      <label>Product Rating</label><br />
      <input ref={ratingRef} type="text" /><br />
      <label>Product Count</label><br />
      <input ref={countRef} type="text" /><br /><br />
      <button onClick={addProducts}>Add Product</button>
      <div>{message}</div>
    </div>
  )
}

export default AddProduct