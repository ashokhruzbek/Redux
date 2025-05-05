import React from 'react'
import { useSelector } from 'react-redux';

function Contact() {
    const students = useSelector(state => state.students);
    console.log(students);
  return (
    <div>Contact</div>
  )
}

export default Contact