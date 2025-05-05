import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
    const students = useSelector(state => state.students);
    console.log(students);
  return (
    <div>Home</div>
  )
}

export default Home