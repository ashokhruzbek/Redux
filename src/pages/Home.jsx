import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Home() {
    const students = useSelector(state => state.students);
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    console.log(students);

    const handleChange = (e) =>{
      setInput(e.target.value)
    }

    const handleAdd =()=>{
      dispatch({type: "ADD_STUDENT", payload: input})
    }

    const handleRemove =()=>{
      dispatch({type: "REMOVE_STUDENT", payload: input })
    }



  return (
    <div>
      <h1>Home</h1>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={handleAdd}>ADD Jahongir</button>
      <button onClick={handleRemove}>Remove Azamat</button>
    </div>
  )
}

export default Home