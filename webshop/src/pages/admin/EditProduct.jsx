import React from 'react'
import {useParams, Link } from 'react-router-dom';
import productsFile from "../../data/products.json";
import { useRef } from 'react';

function EditProduct() {
  const {qwerty } = useParams()
  const leitud = productsFile[qwerty]

  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  const ratingRef = useRef();
  const countRef = useRef();

  if (leitud === undefined) {
    return <div>Not found</div>;
  } 

  const editProduct = () => {
    productsFile[qwerty] = {
      "id": idRef.current.value,
      "title": titleRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "image": imageRef.current.value,
      "rating": { 
        rate: Number(ratingRef.current.value),
      count: Number(countRef.current.value)
      }
    };



  }

  return (
    <div>
      <label>ID</label>
      <input ref={idRef} defaultValue={leitud.id}></input>
      <label>Title</label>
      <input ref={titleRef} defaultValue={leitud.title}></input>
      <label>Price</label>
      <input ref={priceRef} defaultValue={leitud.price}></input>
      <label>Description</label>
      <input ref={descriptionRef} defaultValue={leitud.description}></input>
      <label>Category</label>
      <select>
        {/* TODO t2pselt nagu addproductis l2bi dropdowni valikvariandid */}
      <input ref={categoryRef} defaultValue={leitud.category}></input>
      </select>
      <label>Image</label>
      <input ref={imageRef} defaultValue={leitud.image}></input>
      <label>Rating</label>
      <input ref={ratingRef} defaultValue={leitud.rating.rate}></input>
      <label>Count</label>
      <input ref={countRef} defaultValue={leitud.rating.count}></input>
      <Link to='/admin/maintain-products'><button onClick={editProduct}>CHANGE</button></Link>
    </div>
  )
}

export default EditProduct