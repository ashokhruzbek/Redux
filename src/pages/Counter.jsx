import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
    const counter = useSelector((state)=> state.counter)
    const dispatch = useDispatch();


    const handleIncrement =()=>{
        dispatch({type: "INCREMENT"})
    }
    const handleDecrement =()=>{
        dispatch({type: "DECREMENT"})
    }
    const handleReset =()=>{
        dispatch({type: "RESET"})
    }

  return (
    <div>
        <h1>Counter: {counter}</h1>
        <button onClick={handleIncrement}>INCREMENT</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Counter