import React from 'react'
import { useEffect } from 'react'
import {useRef, useState} from 'react'
import {Toaster, toast } from 'react-hot-toast';

function MaintainCategories() {

  const [categories, setCategories] = useState([])

  const categoryRef = useRef()

  const url = 'https://webshop-6ba05-default-rtdb.europe-west1.firebasedatabase.app/categories.json'


  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => setCategories(json || []));
  }, []);

  const add = (event) => {
    if (event.key !== "Enter" && event.type !== "click") {
      return;
    }
    if (categoryRef.current.value.length < 2) {
      toast.error('At least 2 characters required');
      return;
    }
    categories.push(categoryRef.current.value);
    // setCategories(categories.slice());
    categoryRef.current.value = "";
    fetch(url, {method: "PUT", body: JSON.stringify(categories)})
    .then(res => res.json())
    .then(json => setCategories(json || []));
    
  }

  const remove = (index) => {
    categories.splice(index, 1);
    // setCategories(categories.slice());
    fetch(url, {method: "PUT", body: JSON.stringify(categories)})
    .then(res => res.json())
    .then(json => setCategories(json || []));

  }
  return (
    <div>
      <label>Category</label><br />
      <input onKeyUp={add} ref={categoryRef} type="text" /> <br />
      <button onClick={add}>ADD</button>

      {categories.map((category, index) => 
        <div key={index}>
          <div>{category}</div>
          <button onClick={() => remove(index)}>DELETE</button>
      </div>)}
      <Toaster
  position="top-right"
  reverseOrder={true}
/>
    </div>
  )
}


export default MaintainCategories