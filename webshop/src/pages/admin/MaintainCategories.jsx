import React from 'react'
import {useRef, useState} from 'react'

function MaintainCategories() {

  const [categories, setCategories] = useState([])

  const categoryRef = useRef()


  const add = (event) => {
    if (event.key !== "Enter" && event.type !== "click") {
      return;
    }
    categories.push(categoryRef.current.value);
    setCategories(categories.slice());
    categoryRef.current.value = "";
    
  }

  const remove = (index) => {
    categories.splice(index, 1);
    setCategories(categories.slice());
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
    </div>
  )
}


export default MaintainCategories