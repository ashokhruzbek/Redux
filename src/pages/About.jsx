import React from 'react'
import { useSelector } from 'react-redux';

function About() {
    const students = useSelector(state => state.students);
    console.log(students);
  return (
    <div>About</div>
  )
}

export default About