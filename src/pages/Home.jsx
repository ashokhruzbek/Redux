import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Home() {
    const students = useSelector(state => state.students);
    const dispatch = useDispatch();

    console.log(students);
  return (
    <div>
      <h1>Home</h1>
      <button onClick={()=> dispatch({type: "ADD_STUDENT"})}>ADD Jahongir</button>
      <button onClick={()=> dispatch({type: "REMOVE_STUDENT"})}>Remove Azamat</button>
    </div>
  )
}

export default Home